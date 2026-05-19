const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'src', 'package_images');
const originalsDir = path.join(sourceDir, 'originals');
const convertedDir = path.join(__dirname, '..', 'public', 'packages_images', 'converted-webp');

if (!fs.existsSync(originalsDir)) {
  fs.mkdirSync(originalsDir, { recursive: true });
}
if (!fs.existsSync(convertedDir)) {
  fs.mkdirSync(convertedDir, { recursive: true });
}

const imageMap = {
  'Tsavo East Exploration.jpg': { folder: 'tsavo', name: 'tsavo-east-exploration.webp', type: 'card' },
  'Tsavo East.jpg': { folder: 'tsavo', name: 'tsavo-east-card.webp', type: 'card' },
  'Tsavo National park entrance.jpg': { folder: 'tsavo', name: 'tsavo-entrance.webp', type: 'gallery' },
  'Tsavo West.jpg': { folder: 'tsavo', name: 'tsavo-west-view.webp', type: 'gallery' },
  'Mzima Springs.jpg': { folder: 'tsavo', name: 'mzima-springs.webp', type: 'gallery' },
  'Final Loop.jpg': { folder: 'tsavo', name: 'final-loop.webp', type: 'gallery' },
  'Game drive.jpg': { folder: 'tsavo', name: 'tsavo-game-drive.webp', type: 'gallery' },
  'Final Game Drive.jpg': { folder: 'tsavo', name: 'final-game-drive.webp', type: 'gallery' },
  'Dawn depature and game drive.jpg': { folder: 'tsavo', name: 'dawn-departure.webp', type: 'card' },
  'Arrival sunset and game drive.jpg': { folder: 'tsavo', name: 'sunset-game-drive.webp', type: 'hero' },
  '2 Days and 1 Night Safri to Tsavo East.jpg': { folder: 'tsavo', name: 'tsavo-2day-hero.webp', type: 'hero' },
  'morning safari.jpg': { folder: 'tsavo', name: 'morning-safari.webp', type: 'gallery' },
  'Amboseli national park.jpg': { folder: 'amboseli', name: 'amboseli-landscape.webp', type: 'hero' },
  'Amboseli National Park Entrance.jpg': { folder: 'amboseli', name: 'amboseli-entrance.webp', type: 'gallery' },
  'Kilimanjaro views.jpg': { folder: 'amboseli', name: 'kilimanjaro-views.webp', type: 'hero' },
  'Amboseli sunrise.jpg': { folder: 'amboseli', name: 'amboseli-sunrise.webp', type: 'gallery' },
  'Lake Naivasha.jpg': { folder: 'naivasha', name: 'lake-naivasha.webp', type: 'gallery' },
  'Samburu National Reserve.jpg': { folder: 'samburu', name: 'samburu-reserve.webp', type: 'gallery' },
  'OL PEJETA conservancy.jpg': { folder: 'samburu', name: 'ol-pejeta.webp', type: 'gallery' },
  'taita hills sanctuary.webp': { folder: 'taita-hills', name: 'taita-hills-sanctuary.webp', type: 'gallery' },
  'a-p-1pdp-PGplss-unsplash.jpg': { folder: 'tsavo', name: 'tsavo-red-elephants.webp', type: 'hero' },
  'Dolphin Tracking & Snorkeling.jpg': { folder: 'excursions', name: 'dolphin-snorkeling.webp', type: 'card' },
  'Swahili Seafood Feast.jpg': { folder: 'excursions', name: 'swahili-feast.webp', type: 'gallery' },
  'Shimoni Slave Caves.JPG': { folder: 'excursions', name: 'shimoni-caves.webp', type: 'gallery' },
  'Beach BBQ.jpg': { folder: 'excursions', name: 'beach-bbq.webp', type: 'gallery' },
  'Marine Park Snorkeling.jpg': { folder: 'wasini', name: 'marine-snorkeling.webp', type: 'gallery' },
  'Sandbank Relaxation.jpg': { folder: 'beaches', name: 'sandbank-relaxation.webp', type: 'gallery' },
  'Sardegna 2 (Watamu Marine Park).jpg': { folder: 'beaches', name: 'sardegna-marine.webp', type: 'card' },
  'Mida Creek Eco-Adventure.jpg': { folder: 'mida-creek', name: 'mida-creek-card.webp', type: 'card' },
  'Canoe Exploration.jpg': { folder: 'mida-creek', name: 'canoe-exploration.webp', type: 'gallery' },
  'Boardwalk & Bird Watching.jpg': { folder: 'mida-creek', name: 'boardwalk-birds.webp', type: 'gallery' },
  "Marafa Hell's Kitchen.jpg": { folder: 'excursions', name: 'marafa-canyon.webp', type: 'card' },
  'Sunset over the Canyons.jpg': { folder: 'sunsets', name: 'canyon-sunset.webp', type: 'gallery' },
};

async function convertImage(filename, mapping) {
  const sourcePath = path.join(sourceDir, filename);
  const targetDir = path.join(convertedDir, mapping.folder);
  const targetPath = path.join(targetDir, mapping.name);
  const originalTargetPath = path.join(originalsDir, filename);
  
  try {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.copyFileSync(sourcePath, originalTargetPath);
    
    if (filename.toLowerCase().endsWith('.webp')) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✓ ${mapping.folder}/${mapping.name} (copied)`);
    } else {
      await sharp(sourcePath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(targetPath);
      console.log(`✓ ${mapping.folder}/${mapping.name}`);
    }
    
    return true;
  } catch (err) {
    console.error(`✗ Error: ${filename} - ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('=== Hippo Safari Image Conversion ===\n');
  
  let success = 0;
  let skipped = 0;
  
  for (const [filename, mapping] of Object.entries(imageMap)) {
    const srcPath = path.join(sourceDir, filename);
    if (fs.existsSync(srcPath)) {
      const result = await convertImage(filename, mapping);
      if (result) success++;
    } else {
      console.log(`○ Skipped: ${filename}`);
      skipped++;
    }
  }
  
  console.log(`\n=== Done ===`);
  console.log(`Converted: ${success} | Skipped: ${skipped}`);
}

main().catch(console.error);