const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure dist directory exists and is clean
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Directories to copy
const dirsToCopy = ['css', 'js', 'pages', 'images'];
dirsToCopy.forEach(dir => {
  const src = path.join(__dirname, dir);
  const dest = path.join(distDir, dir);
  copyDirSync(src, dest);
});

// Files to copy
const filesToCopy = [
  'index.html',
  'index1.html',
  'default_shadcn_theme.css',
  'new1.png',
  'new2rmbg.png',
  'new3rmbg.png',
  'new4rm.png'
];

filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
  }
});

console.log('Build completed: static files copied to dist/');
