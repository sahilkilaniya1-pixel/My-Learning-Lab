const fs = require('fs');
const path = require('path');

const targetDir = __dirname;

// Expanded keyword mappings
const categories = {
  '01-basics-and-control-flow': ['datatype', 'variable', 'function', 'if-else', 'cinema', 'core', 'loop'],
  '02-arrays-and-strings': ['array', 'string', 'words', 'min-max', 'inbuilt', 'built-in', 'leetcode'],
  '03-objects-and-functions': ['object', 'e-commerce'],
  '04-logic-building-and-patterns': ['pattern', 'star', 'mind-bender', 'logical']
};

function sanitizeFileName(filename) {
  // Ignore specific helper files
  if (['organize.js', 'note.txt', 'tempcoderunnerfile.js', 'readme.md'].includes(filename.toLowerCase())) {
    return null;
  }

  // Handle double extension or trailing .js cases
  if (!filename.toLowerCase().includes('.js')) return null;

  let nameWithoutExt = filename.replace(/\.js$/i, '').trim();

  // Clean special characters like brackets, extra spaces, hyphens
  let cleanName = nameWithoutExt
    .toLowerCase()
    .replace(/[()]/g, '')         // Remove brackets ()
    .replace(/[\s_]+/g, '-')       // Replace spaces and underscores with -
    .replace(/-+/g, '-')           // Replace multiple hyphens with single -
    .replace(/^-|-$/g, '');        // Trim starting/ending hyphens

  return cleanName + '.js';
}

function getCategory(filename) {
  const lower = filename.toLowerCase();
  for (const [folder, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lower.includes(keyword))) {
      return folder;
    }
  }
  return '05-miscellaneous'; // Default for generic names like Day-9, Day-18, etc.
}

function organizeFiles() {
  const items = fs.readdirSync(targetDir);

  items.forEach(item => {
    const fullPath = path.join(targetDir, item);
    
    // Process only files in main folder
    if (!fs.statSync(fullPath).isFile()) return;

    const cleanName = sanitizeFileName(item);
    if (!cleanName) return;

    const categoryFolder = getCategory(item);
    const destFolder = path.join(targetDir, categoryFolder);

    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    const newPath = path.join(destFolder, cleanName);

    try {
      fs.renameSync(fullPath, newPath);
      console.log(`✓ Moved: ${item} ➔ ${categoryFolder}/${cleanName}`);
    } catch (err) {
      console.error(`X Error moving ${item}:`, err.message);
    }
  });

  console.log('\n✨ Sabhi files organize ho gayi hain!');
}

organizeFiles();