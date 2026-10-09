const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const reqFilesJson = path.join(rootDir, '.next', 'required-server-files.json');
const reqFilesJs = path.join(rootDir, '.next', 'required-server-files.js');

if (fs.existsSync(reqFilesJson)) {
  const content = fs.readFileSync(reqFilesJson, 'utf8');
  const data = JSON.parse(content);

  // Normalize files array to forward slashes
  if (Array.isArray(data.files)) {
    data.files = data.files.map((f) => f.replace(/\\/g, '/'));
  }

  // Normalize appDir and other roots to relative / portable format
  data.appDir = '.';
  data.relativeAppDir = '';
  if (data.config) {
    if (data.config.outputFileTracingRoot) data.config.outputFileTracingRoot = '.';
    if (data.config.turbopack && data.config.turbopack.root) data.config.turbopack.root = '.';
  }

  fs.writeFileSync(reqFilesJson, JSON.stringify(data, null, 2), 'utf8');
  console.log('✓ Successfully normalized .next/required-server-files.json for cPanel/Linux');
}

if (fs.existsSync(reqFilesJs)) {
  let js = fs.readFileSync(reqFilesJs, 'utf8');
  js = js.replace(/\\\\/g, '/');
  fs.writeFileSync(reqFilesJs, js, 'utf8');
  console.log('✓ Successfully normalized .next/required-server-files.js for cPanel/Linux');
}
