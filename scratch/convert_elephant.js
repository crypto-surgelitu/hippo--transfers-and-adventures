const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourcePath = path.join(__dirname, '../elephant original.jpeg');
const destPath = path.join(__dirname, '../src/assets/elephant-original.webp');

console.log('Checking source file existence...');
if (!fs.existsSync(sourcePath)) {
  console.error('Source file not found at:', sourcePath);
  process.exit(1);
}

sharp(sourcePath)
  .metadata()
  .then(metadata => {
    console.log('Original Dimensions:', metadata.width, 'x', metadata.height);
    console.log('Original Format:', metadata.format);
    console.log('Original Size:', fs.statSync(sourcePath).size, 'bytes');
    return sharp(sourcePath)
      .webp({ quality: 82 })
      .toFile(destPath);
  })
  .then(info => {
    console.log('Converted successfully to:', destPath);
    console.log('Output Info:', info);
    console.log('Output Size:', fs.statSync(destPath).size, 'bytes');
  })
  .catch(err => {
    console.error('Error during conversion:', err);
  });
