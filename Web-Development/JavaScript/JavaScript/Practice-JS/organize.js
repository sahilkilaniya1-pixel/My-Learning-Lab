const fs = require('fs');
const path = require('path');

// Target directory (jahan saari files hain)
const targetDir = __dirname;

// Categories definition based on keywords
const categories = {
  '01-basics-and-control-flow': ['loop', 'if-else', 'cinema', 'core', 'datatype', 'variable'],
  '02-arrays-and-strings': ['array', 'string', 'words', 'min-max', 'in-built-function', 'leetcode'],
  '03-objects-and-functions': ['object', 'e-commerce', 'function'],
  '04-logic-building-and-patterns': ['pattern', 'star', 'mind-benders', 'logical-patterns']
};

function sanitizeFileName(filename) {
  // Ignore special files
  if (['organize.js', 'note.txt', 'tempCodeRunnerFile.js', 'README.md'].includes(filename)) {
    return null;
  }

  // Process only JS files
  if (!filename.endsWith('.js')) return null;

  // Clean filename: lowercase, replace spaces/underscores with hyphens, remove duplicate hyphens
  let cleanName = filename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .replace(/-\./g, '.')
    .replace(/-+/g, '-');

  return cleanName;
}

function getCategory(filename) {
  const lower = filename.toLowerCase();
  for (const [folder, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lower.includes(keyword))) {
      return folder;
    }
  }
  return '05-miscellaneous'; // Fallback folder if no match
}

function organizeFiles() {
  const files = fs.readdirSync(targetDir);

  files.forEach(file => {
    const cleanName = sanitizeFileName(file);
    if (!cleanName) return; // Skip non-target files

    const categoryFolder = getCategory(file);
    const destFolder = path.join(targetDir, categoryFolder);

    // Create category folder if it doesn't exist
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    const oldPath = path.join(targetDir, file);
    const newPath = path.join(destFolder, cleanName);

    // Move and rename file
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${file} ➔ ${categoryFolder}/${cleanName}`);
  });

  console.log('\n SUCCESS: All files organized automatically!');
}

organizeFiles();