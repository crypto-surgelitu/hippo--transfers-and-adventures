import { ItineraryDay } from './packages';

export interface Excursion {
  slug: string;
  title: string;
  duration: string;
  location: string;
  starts?: string;
  destinations?: string;
  imageSrc: string; // Used for cards
  heroImage: string; // Used for detail page hero
  description: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export const excursions: Excursion[] = [
  {
    slug: "wasini-island",
    title: "Wasini Island & Kisite Marine Park",
    duration: "Full Day",
    location: "Shimoni / Wasini Island",
    starts: "Diani / Mombasa",
    destinations: "Kisite-Mpunguti Marine Park",
    imageSrc: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp",
    heroImage: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp",
    description: "Experience a day of aquatic wonder, from tracking dolphins to snorkeling in coral gardens and enjoying a traditional Swahili seafood lunch.",
    itinerary: [
      {
        day: "Morning",
        title: "Dolphin Tracking & Snorkeling",
        description: "Board a traditional dhow and head into the Kisite-Mpunguti Marine Park. Keep your cameras ready for dolphins that frequently play alongside the boat. Spend the morning snorkeling in the crystal-clear coral gardens.",
        icon: "compass",
        image: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp"
      },
      {
        day: "Lunch",
        title: "Swahili Seafood Feast",
        description: "Disembark on Wasini Island for a sumptuous seafood lunch at a local restaurant, featuring fresh catch-of-the-day and traditional Swahili accompaniments.",
        icon: "camera",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "Afternoon",
        title: "Shimoni Slave Caves",
        description: "Before returning, visit the historic Shimoni Slave Caves, a poignant site reflecting the region's complex history during the era of the Indian Ocean slave trade.",
        icon: "camera",
        image: "/assets/safaris/picture 1 of safari .webp"
      }
    ],
    inclusions: ['Marine Park Fees', 'Boat Transport', 'Snorkeling Gear', 'Seafood Lunch', 'Soft Drinks', 'Guide Services'],
    exclusions: ['Tips', 'Personal expenses', 'Alcoholic drinks']
  },
  {
    slug: "marafa-hells-kitchen",
    title: "Marafa Hell's Kitchen",
    duration: "Half Day",
    location: "Marafa, Malindi",
    starts: "Malindi / Watamu",
    destinations: "Marafa Canyon",
    imageSrc: "/assets/safaris/picture 1 of safari .webp",
    heroImage: "/assets/safaris/picture 1 of safari .webp",
    description: "Witness the geological marvel of Marafa, known locally as Nyari, where wind and rain have carved a spectacular sandstone canyon.",
    itinerary: [
      {
        day: "Late Afternoon",
        title: "Canyon Exploration",
        description: "Arrive at the canyon as the temperatures begin to drop. Walk through the 'kitchen' with a local guide who will explain the legends and geology of the red, white, and pink sandstone formations.",
        icon: "compass",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "Sunset",
        title: "Sunset over the Canyons",
        description: "Experience the magic as the setting sun amplifies the vibrant colors of the canyon walls. It is one of the most photographed locations in coastal Kenya.",
        icon: "camera",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      }
    ],
    inclusions: ['Entry Fees', 'Guide Fees', 'Transport', 'Water'],
    exclusions: ['Tips', 'Personal expenses', 'Meals']
  },
  {
    slug: "sardegna-2-island",
    title: "Sardegna 2 (Watamu Marine Park)",
    duration: "Full Day",
    location: "Watamu",
    starts: "Malindi / Watamu",
    destinations: "Watamu Marine National Park",
    imageSrc: "/assets/safaris/picture 3 of safari.webp",
    heroImage: "/assets/safaris/picture 3 of safari.webp",
    description: "Often called the 'Sardinia of Africa', this excursion takes you to pristine sandbanks that emerge during low tide, surrounded by turquoise waters.",
    itinerary: [
      {
        day: "Morning",
        title: "Marine Park Snorkeling",
        description: "Start with a boat ride into the Watamu Marine Park for snorkeling amongst vibrant coral reefs and a multitude of tropical fish species.",
        icon: "compass",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "Midday",
        title: "Sandbank Relaxation",
        description: "As the tide goes out, relax on the white sands of Sardegna 2. Enjoy swimming in the shallow, warm lagoons.",
        icon: "camera",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "Lunch",
        title: "Beach BBQ",
        description: "Indulge in a fresh seafood BBQ prepared right on the boat or beach, featuring lobster, fish, and shrimp.",
        icon: "camera",
        image: "/assets/safaris/picture 1 of safari .webp"
      }
    ],
    inclusions: ['Marine Park Fees', 'Glass Bottom Boat', 'Snorkeling Gear', 'Seafood BBQ', 'Soft Drinks'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "mida-creek",
    title: "Mida Creek Eco-Adventure",
    duration: "Half Day",
    location: "Watamu",
    starts: "Watamu / Malindi",
    destinations: "Mida Creek Mangroves",
    imageSrc: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp",
    heroImage: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp",
    description: "Explore the serene waters of Mida Creek, a broad water inlet that provides a vital habitat for flamingos and other migratory birds.",
    itinerary: [
      {
        day: "Morning",
        title: "Canoe Exploration",
        description: "Navigate the narrow channels of the mangrove forest in a traditional dugout canoe. Learn about the importance of the mangrove ecosystem.",
        icon: "compass",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "Mid-Morning",
        title: "Boardwalk & Bird Watching",
        description: "Walk across the famous 'hanging bridge' and observe the vibrant birdlife. Mida Creek is an IBA (Important Bird Area) and a UNESCO Biosphere Reserve.",
        icon: "camera",
        image: "/assets/safaris/picture 3 of safari.webp"
      }
    ],
    inclusions: ['Canoe Rental', 'Conservation Fees', 'Guide Services', 'Transport'],
    exclusions: ['Tips', 'Personal expenses', 'Meals']
  }
];
