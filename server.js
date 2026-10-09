/* eslint-disable @typescript-eslint/no-require-imports */
// Production server entry for cPanel Node.js App (Passenger / PM2)
const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');
const path = require('path');
const next = require('next');

// Auto-normalize .next paths to local environment on cPanel startup
try {
  const reqFilesJsonPath = path.join(__dirname, '.next', 'required-server-files.json');
  if (fs.existsSync(reqFilesJsonPath)) {
    const rawData = fs.readFileSync(reqFilesJsonPath, 'utf8');
    const parsed = JSON.parse(rawData);
    let modified = false;

    if (parsed.appDir !== __dirname) {
      parsed.appDir = __dirname;
      modified = true;
    }
    if (parsed.config) {
      if (parsed.config.outputFileTracingRoot) parsed.config.outputFileTracingRoot = __dirname;
      if (parsed.config.turbopack && parsed.config.turbopack.root) parsed.config.turbopack.root = __dirname;
    }

    if (Array.isArray(parsed.files)) {
      const fixedFiles = parsed.files.map((f) => f.replace(/\\/g, '/'));
      if (JSON.stringify(fixedFiles) !== JSON.stringify(parsed.files)) {
        parsed.files = fixedFiles;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(reqFilesJsonPath, JSON.stringify(parsed, null, 2), 'utf8');
      console.log(`> Auto-normalized .next configuration for runtime dir: ${__dirname}`);
    }
  }

  const reqFilesJsPath = path.join(__dirname, '.next', 'required-server-files.js');
  if (fs.existsSync(reqFilesJsPath)) {
    let jsContent = fs.readFileSync(reqFilesJsPath, 'utf8');
    if (jsContent.includes('\\\\')) {
      jsContent = jsContent.replace(/\\\\/g, '/');
      fs.writeFileSync(reqFilesJsPath, jsContent, 'utf8');
    }
  }
} catch (e) {
  console.warn('> Non-critical notice during runtime initialization:', e.message);
}

const dev = false;
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, () => {
    console.log(`> GonjoTech production server listening on port ${port}`);
  });
}).catch(err => {
  console.error('Next.js startup error:', err);
  process.exit(1);
});
