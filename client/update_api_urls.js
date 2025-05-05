const fs = require('fs');
const path = require('path');

// Directory to search for files
const searchDir = path.join(__dirname, 'src');

// Function to recursively find all .js and .jsx files
function findJSFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findJSFiles(filePath, fileList);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to update API URLs in a file
function updateApiUrls(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip the config.js file itself
    if (filePath.endsWith('config.js')) {
      return false;
    }
    
    // Check if the file already imports API_BASE_URL
    const hasImport = content.includes("import { API_BASE_URL }");
    
    // Replace localhost:6001 with API_BASE_URL
    const originalContent = content;
    content = content.replace(/['"]http:\/\/localhost:6001\/([^'"]+)['"]/g, '`${API_BASE_URL}/$1`');
    
    // If we made replacements and there's no import yet, add the import
    if (content !== originalContent && !hasImport) {
      // Find the last import statement
      const importRegex = /^import .+?;?\s*$/gm;
      let lastImportMatch;
      let lastImport;
      
      while ((lastImportMatch = importRegex.exec(content)) !== null) {
        lastImport = lastImportMatch;
      }
      
      if (lastImport) {
        const position = lastImport.index + lastImport[0].length;
        content = 
          content.substring(0, position) + 
          "\nimport { API_BASE_URL } from '../config';\n" + 
          content.substring(position);
      }
    }
    
    // Only write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
    return false;
  }
}

// Main function
function main() {
  const jsFiles = findJSFiles(searchDir);
  let updatedCount = 0;
  
  jsFiles.forEach(file => {
    const updated = updateApiUrls(file);
    if (updated) {
      console.log(`Updated: ${file}`);
      updatedCount++;
    }
  });
  
  console.log(`\nCompleted: Updated ${updatedCount} files.`);
}

main();
