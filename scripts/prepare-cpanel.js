const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const nextDir = path.join(rootDir, '.next');
const serverAppDir = path.join(nextDir, 'server', 'app');
const serverPagesDir = path.join(nextDir, 'server', 'pages');
const staticSrc = path.join(nextDir, 'static');
const staticDest = path.join(rootDir, '_next', 'static');

console.log('--- Preparing Production Bundle for cPanel 1-Click Deployment ---');

function safeWriteFile(filePath, content) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      fs.writeFileSync(filePath, content, 'utf8');
      return;
    } catch (err) {
      if (attempt === 5) {
        console.warn('Could not write', filePath, ':', err.message);
        return;
      }
      const wait = 300 * attempt;
      const start = Date.now();
      while (Date.now() - start < wait) {}
    }
  }
}

// 1. Normalize server files for Linux
const reqFilesJson = path.join(nextDir, 'required-server-files.json');
const reqFilesJs = path.join(nextDir, 'required-server-files.js');

if (fs.existsSync(reqFilesJson)) {
  try {
    const data = JSON.parse(fs.readFileSync(reqFilesJson, 'utf8'));
    if (Array.isArray(data.files)) {
      data.files = data.files.map((f) => f.replace(/\\/g, '/'));
    }
    data.appDir = '.';
    data.relativeAppDir = '';
    if (data.config) {
      if (data.config.outputFileTracingRoot) data.config.outputFileTracingRoot = '.';
      if (data.config.turbopack && data.config.turbopack.root) data.config.turbopack.root = '.';
    }
    safeWriteFile(reqFilesJson, JSON.stringify(data, null, 2));
    console.log('✓ Normalized required-server-files.json');
  } catch (e) {
    console.warn('Notice:', e.message);
  }
}

if (fs.existsSync(reqFilesJs)) {
  try {
    let js = fs.readFileSync(reqFilesJs, 'utf8').replace(/\\\\/g, '/');
    safeWriteFile(reqFilesJs, js);
    console.log('✓ Normalized required-server-files.js');
  } catch (e) {
    console.warn('Notice:', e.message);
  }
}

// Helper: Copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch {
        // ignore locked files
      }
    }
  }
}

// 2. Mirror .next/static to _next/static for direct LiteSpeed static asset delivery
if (fs.existsSync(staticSrc)) {
  copyDirSync(staticSrc, staticDest);
  console.log('✓ Mirrored .next/static to _next/static for zero-latency asset delivery');
}

// 2b. Mirror public/images to images for direct root image delivery
const publicImagesSrc = path.join(rootDir, 'public', 'images');
const rootImagesDest = path.join(rootDir, 'images');
if (fs.existsSync(publicImagesSrc)) {
  copyDirSync(publicImagesSrc, rootImagesDest);
  console.log('✓ Mirrored public/images to images for direct root image delivery');
}

// 3. Export pre-rendered HTML files to root & clean directory structures
function exportHtmlFiles() {
  if (!fs.existsSync(serverAppDir)) return;

  function processDir(currentDir, relativeBase = '') {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const item of items) {
      const itemPath = path.join(currentDir, item.name);
      if (item.isDirectory()) {
        processDir(itemPath, path.join(relativeBase, item.name));
      } else if (item.name.endsWith('.html')) {
        // Skip placeholders like [slug].html and internal _*.html
        if (item.name.includes('[') || item.name.startsWith('_')) continue;

        const baseName = item.name.replace('.html', '');
        let targetCleanFolder;
        let targetDirectFile;

        if (relativeBase === '' && baseName === 'index') {
          // Root index.html
          targetDirectFile = path.join(rootDir, 'index.html');
          fs.copyFileSync(itemPath, targetDirectFile);
          console.log('✓ Generated root index.html');
        } else {
          // Sub-routes: create both [route].html and [route]/index.html
          const routeFolder = path.join(rootDir, relativeBase, baseName);
          fs.mkdirSync(routeFolder, { recursive: true });
          fs.copyFileSync(itemPath, path.join(routeFolder, 'index.html'));

          targetDirectFile = path.join(rootDir, relativeBase, `${baseName}.html`);
          fs.copyFileSync(itemPath, targetDirectFile);
        }
      }
    }
  }

  processDir(serverAppDir);

  // Copy 404 & 500
  if (fs.existsSync(path.join(serverPagesDir, '404.html'))) {
    fs.copyFileSync(path.join(serverPagesDir, '404.html'), path.join(rootDir, '404.html'));
  }
  if (fs.existsSync(path.join(serverPagesDir, '500.html'))) {
    fs.copyFileSync(path.join(serverPagesDir, '500.html'), path.join(rootDir, '500.html'));
  }
  console.log('✓ Generated static HTML routes for direct LiteSpeed serving');
}

exportHtmlFiles();

// 4. Generate resilient .htaccess supporting BOTH LiteSpeed native serving AND Passenger Node
const htaccessContent = `# LiteSpeed & Apache Production Configuration for GonjoTech
Options -Indexes
DirectoryIndex index.html index.htm index.php

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Security: Block direct access to hidden files/folders (.git, .env, etc.)
  RewriteRule ^\.git - [F,L]
  RewriteRule ^\.cpanel\.yml$ - [F,L]

  # 1. Permanent 301 Redirects for Legacy URLs
  RewriteRule ^home/?$ / [R=301,L]
  RewriteRule ^blogsc/?$ /blog [R=301,L]
  RewriteRule ^company/?$ /about [R=301,L]
  RewriteRule ^privacy-policy/?$ /privacy [R=301,L]
  RewriteRule ^services-software-development/?$ /services/custom-software-development [R=301,L]
  RewriteRule ^services-website-development/?$ /services/web-development [R=301,L]
  RewriteRule ^services-mobile-apps-development/?$ /services/mobile-app-development [R=301,L]
  RewriteRule ^services-digital-marketing/?$ /services/digital-marketing-seo [R=301,L]
  RewriteRule ^what-is-object-oriantation/?$ /blog/what-is-object-orientation-in-modern-software [R=301,L]
  RewriteRule ^how-to-convert-website-to-mobile-app/?$ /blog/how-to-convert-website-to-mobile-app [R=301,L]
  RewriteRule ^virtual-reality/?$ /blog/virtual-reality-and-modern-digital-simulation [R=301,L]
  RewriteRule ^top-3-programming-languages-to-learn-in-2020/?$ /blog/top-programming-languages-for-enterprise-software [R=301,L]
  RewriteRule ^freelancing-as-a-career/?$ /blog/tech-talent-and-global-outsourcing-in-bangladesh [R=301,L]
  RewriteRule ^motin-mia-a-fairytale-bangladeshi-footballer/?$ /blog/motin-mia-a-fairytale-bangladeshi-footballer [R=301,L]

  # 2. Serve images directly or fallback to public/images/
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{DOCUMENT_ROOT}/public/images/$1 -f [OR]
  RewriteCond public/images/$1 -f
  RewriteRule ^images/(.*)$ public/images/$1 [L]

  # 3. Serve static Next.js assets
  RewriteRule ^_next/static/(.*)$ .next/static/$1 [L,QSA]

  # 4. If the actual file or directory exists, serve directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # 4. Clean URL rewriting: /about -> /about.html or /about/index.html
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*)/?$ $1/index.html [L]

  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^(.*)/?$ $1.html [L]
</IfModule>

# Optional Passenger directives for Node.js environments
<IfModule mod_passenger.c>
  PassengerAppRoot "/home/gonjotech/public_html"
  PassengerBaseURI "/"
  PassengerAppType node
  PassengerStartupFile server.js
</IfModule>
`;

fs.writeFileSync(path.join(rootDir, '.htaccess'), htaccessContent, 'utf8');
console.log('✓ Generated resilient .htaccess with clean URL rewrite and 301 redirects');
console.log('--- cPanel Bundle Ready! ---');
