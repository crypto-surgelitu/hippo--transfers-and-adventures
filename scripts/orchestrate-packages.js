const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'public', 'packages_images', 'converted-webp');
const packagesDir = path.join(__dirname, '..', 'public', 'images', 'packages');
const excursionsDir = path.join(__dirname, '..', 'public', 'images', 'excursions');

const packageImageMap = {
  '1-day-tsavo-east': {
    card: 'tsavo/tsavo-east-card.webp',
    hero: 'tsavo/tsavo-red-elephants.webp',
    gallery: ['tsavo/tsavo-east-exploration.webp', 'tsavo/dawn-departure.webp', 'tsavo/tsavo-game-drive.webp']
  },
  '2-days-tsavo-east': {
    card: 'tsavo/dawn-departure.webp',
    hero: 'tsavo/sunset-game-drive.webp',
    gallery: ['tsavo/tsavo-game-drive.webp', 'tsavo/morning-safari.webp']
  },
  '3-days-tsavo-east-taita-hills': {
    card: 'tsavo/tsavo-east-exploration.webp',
    hero: 'tsavo/tsavo-red-elephants.webp',
    gallery: ['tsavo/tsavo-game-drive.webp', 'taita-hills/taita-hills-sanctuary.webp']
  },
  '3-days-tsavo-east-amboseli': {
    card: 'tsavo/tsavo-east-exploration.webp',
    hero: 'amboseli/kilimanjaro-views.webp',
    gallery: ['tsavo/tsavo-game-drive.webp', 'amboseli/amboseli-sunrise.webp', 'amboseli/amboseli-landscape.webp']
  },
  '4-days-tsavo-west-amboseli-tsavo-east': {
    card: 'tsavo/tsavo-west-view.webp',
    hero: 'amboseli/kilimanjaro-views.webp',
    gallery: ['tsavo/mzima-springs.webp', 'amboseli/amboseli-landscape.webp', 'tsavo/tsavo-game-drive.webp', 'tsavo/final-loop.webp']
  },
  '4-days-tsavo-east-amboseli-taita-hills': {
    card: 'tsavo/tsavo-red-elephants.webp',
    hero: 'amboseli/kilimanjaro-views.webp',
    gallery: ['tsavo/tsavo-game-drive.webp', 'amboseli/amboseli-sunrise.webp', 'taita-hills/taita-hills-sanctuary.webp']
  },
  '5-days-tsavo-east-taita-hills': {
    card: 'tsavo/dawn-departure.webp',
    hero: 'tsavo/sunset-game-drive.webp',
    gallery: ['tsavo/tsavo-game-drive.webp', 'tsavo/tsavo-west-view.webp', 'amboseli/kilimanjaro-views.webp', 'taita-hills/taita-hills-sanctuary.webp', 'tsavo/final-loop.webp']
  },
  '6-days-safari-nairobi': {
    card: 'amboseli/amboseli-landscape.webp',
    hero: 'amboseli/kilimanjaro-views.webp',
    gallery: ['samburu/samburu-reserve.webp', 'naivasha/lake-naivasha.webp', 'amboseli/amboseli-sunrise.webp']
  },
  '7-day-safari-itinerary': {
    card: 'amboseli/amboseli-landscape.webp',
    hero: 'amboseli/kilimanjaro-views.webp',
    gallery: ['samburu/samburu-reserve.webp', 'naivasha/lake-naivasha.webp', 'taita-hills/taita-hills-sanctuary.webp', 'amboseli/amboseli-sunrise.webp']
  },
  '10-days-samburu-tsavo-east': {
    card: 'samburu/samburu-reserve.webp',
    hero: 'samburu/samburu-reserve.webp',
    gallery: ['samburu/ol-pejeta.webp', 'naivasha/lake-naivasha.webp', 'amboseli/kilimanjaro-views.webp', 'tsavo/tsavo-red-elephants.webp']
  },
  'wasini-island': {
    card: 'excursions/dolphin-snorkeling.webp',
    hero: 'wasini/marine-snorkeling.webp',
    gallery: ['excursions/swahili-feast.webp', 'excursions/shimoni-caves.webp', 'excursions/beach-bbq.webp']
  },
  'marafa-hells-kitchen': {
    card: 'excursions/marafa-canyon.webp',
    hero: 'sunsets/canyon-sunset.webp',
    gallery: ['sunsets/canyon-sunset.webp']
  },
  'sardegna-2-island': {
    card: 'beaches/sardegna-marine.webp',
    hero: 'beaches/sardegna-marine.webp',
    gallery: ['beaches/sandbank-relaxation.webp', 'wasini/marine-snorkeling.webp']
  },
  'mida-creek': {
    card: 'mida-creek/mida-creek-card.webp',
    hero: 'mida-creek/boardwalk-birds.webp',
    gallery: ['mida-creek/canoe-exploration.webp', 'mida-creek/boardwalk-birds.webp']
  }
};

async function copyPackageImages() {
  let copied = 0;
  
  for (const [slug, images] of Object.entries(packageImageMap)) {
    const isExcursion = slug.includes('wasini') || slug.includes('marafa') || slug.includes('sardegna') || slug.includes('mida');
    const baseDir = isExcursion ? excursionsDir : packagesDir;
    const targetDir = path.join(baseDir, slug);
    
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    const srcFolder = path.join(sourceDir, images.card.split('/')[0]);
    
    fs.copyFileSync(path.join(sourceDir, images.card), path.join(targetDir, 'card.webp'));
    fs.copyFileSync(path.join(sourceDir, images.hero), path.join(targetDir, 'hero.webp'));
    
    images.gallery.forEach((img, i) => {
      fs.copyFileSync(path.join(sourceDir, img), path.join(targetDir, `gallery-${i + 1}.webp`));
    });
    
    console.log(`✓ ${slug}`);
    copied++;
  }
  
  console.log(`\n=== ${copied} packages orchestrated ===`);
}

copyPackageImages().catch(console.error);