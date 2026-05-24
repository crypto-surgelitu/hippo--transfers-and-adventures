export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  icon: 'bed' | 'compass' | 'camera';
  accommodation?: string;
  image: string;
}

export interface SafariPackage {
  slug: string;
  title: string;
  duration: string;
  location: string;
  starts: string;
  destinations: string;
  imageSrc: string; // Used for cards
  heroImage: string; // Used for detail page hero
  description: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

export const safariPackages: SafariPackage[] = [
  {
    slug: "7-day-safari-itinerary",
    title: "7 Days: Masai Mara to Tsavo East",
    duration: "7 Days",
    location: "Masai Mara, Nakuru, Naivasha, Amboseli",
    starts: "Mombasa",
    destinations: "6 Locations",
    imageSrc: "/images/packages/7-day-safari-itinerary/card.webp",
    heroImage: "/images/packages/7-day-safari-itinerary/hero.webp",
    description: "A grand tour across Kenya's most famous landscapes, curated for the discerning traveler.",
    itinerary: [
      {
        day: "1",
        title: "Mombasa to Masai Mara",
        description: "Begin your adventure with a scenic flight or drive from Mombasa into the heart of the Masai Mara. Arrive in time for an afternoon game drive, settling into your luxury tented camp as the sun sets over the plains.",
        icon: "bed",
        accommodation: "Luxury Tented Camp",
        image: "/images/packages/7-day-safari-itinerary/day-1.webp"
      },
      {
        day: "2-3",
        title: "The Great Migration",
        description: "Spend two full days immersed in the greatest wildlife spectacle on earth. Track predators across the rolling savannah and witness dramatic river crossings as herds brave the crocodile-infested waters.",
        icon: "compass",
        image: "/images/packages/7-day-safari-itinerary/gallery-1.webp"
      },
      {
        day: "4",
        title: "Lake Nakuru & Naivasha",
        description: "Journey to the Great Rift Valley lakes. Observe endangered rhinos in Lake Nakuru National Park and take a serene boat ride on Lake Naivasha amidst a vibrant array of birdlife, including iconic flamingos.",
        icon: "camera",
        image: "/images/packages/7-day-safari-itinerary/gallery-2.webp"
      },
      {
        day: "5-6",
        title: "Amboseli & Kilimanjaro Views",
        description: "Drive south to Amboseli for iconic views of Mount Kilimanjaro rising above the savannah. Witness massive elephant herds roaming the marshes in one of Africa's most photogenic settings.",
        icon: "compass",
        accommodation: "Amboseli Safari Lodge",
        image: "/images/packages/7-day-safari-itinerary/gallery-3.webp"
      },
      {
        day: "7",
        title: "Return to Mombasa",
        description: "A final morning game drive before transferring back to the coast. Carry home memories of golden plains, thundering herds, and the wild heartbeat of Kenya.",
        icon: "camera",
        image: "/images/packages/7-day-safari-itinerary/gallery-4.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Luxury Lodging'],
    exclusions: ['International flights', 'Tips', 'Personal expenses']
  },
  {
    slug: "1-day-tsavo-east",
    title: "1 Day Private Safari to Tsavo East",
    duration: "1 Day",
    location: "Tsavo East National Park",
    starts: "Mombasa / Diani",
    destinations: "1 Location",
    imageSrc: "/images/packages/1-day-tsavo-east/card.webp",
    heroImage: "/images/packages/1-day-tsavo-east/hero.webp",
    description: "An intensive day trip to Kenya's largest national park, famous for its red-skinned elephants and man-eating lions.",
    itinerary: [
      {
        day: "1",
        title: "Dawn Departure & Morning Game Drive",
        description: "Depart early from your hotel for Tsavo East. Enter the park for a morning game drive tracking the 'Big Five'. Witness the unique red elephants and the vast Galana River.",
        icon: "compass",
        image: "/images/packages/1-day-tsavo-east/gallery-1.webp"
      },
      {
        day: "1",
        title: "Afternoon Wildlife Tracking",
        description: "Continue deep into the park as the afternoon light casts golden tones across the red soil. Lions, leopards, and giraffes roam freely across the vast terrain.",
        icon: "camera",
        image: "/images/packages/1-day-tsavo-east/gallery-2.webp"
      },
      {
        day: "1",
        title: "Sunset & Return",
        description: "Watch the Tsavo sun dip below the horizon before transferring back to the coast with memories of a full day in the wild.",
        icon: "bed",
        image: "/images/packages/1-day-tsavo-east/gallery-3.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'Lunch', 'Water'],
    exclusions: ['Tips', 'Personal expenses', 'Breakfast']
  },
  {
    slug: "2-days-tsavo-east",
    title: "2 Days / 1 Night Safari to Tsavo East",
    duration: "2 Days / 1 Night",
    location: "Tsavo East",
    starts: "Mombasa / Diani",
    destinations: "1 Location",
    imageSrc: "/images/packages/2-days-tsavo-east/card.webp",
    heroImage: "/images/packages/2-days-tsavo-east/hero.webp",
    description: "Experience the magic of Tsavo East under the stars, with extended game drives and a night in the wild.",
    itinerary: [
      {
        day: "1",
        title: "Arrival & Sunset Game Drive",
        description: "Enter Tsavo East for an intensive afternoon of wildlife tracking. Head to your lodge for dinner and overnight stay.",
        icon: "bed",
        accommodation: "Safari Lodge / Camp",
        image: "/images/packages/2-days-tsavo-east/gallery-1.webp"
      },
      {
        day: "2",
        title: "Morning Safari & Departure",
        description: "Enjoy an early morning game drive when animals are most active. After breakfast, enjoy one last safari loop before departing.",
        icon: "compass",
        image: "/images/packages/2-days-tsavo-east/gallery-2.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "3-days-tsavo-east-taita-hills",
    title: "3 Days / 2 Nights – Tsavo East & Taita Hills",
    duration: "3 Days / 2 Nights",
    location: "Tsavo East, Taita Hills Sanctuary",
    starts: "Mombasa",
    destinations: "2 Locations",
    imageSrc: "/images/packages/3-days-tsavo-east-taita-hills/card.webp",
    heroImage: "/images/packages/3-days-tsavo-east-taita-hills/hero.webp",
    description: "Combine the vastness of Tsavo East with the unique stilted lodges of Taita Hills Sanctuary.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East Exploration",
        description: "Full day game drive in Tsavo East, home to the famous red elephants.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/images/packages/3-days-tsavo-east-taita-hills/gallery-1.webp"
      },
      {
        day: "2",
        title: "Taita Hills Sanctuary",
        description: "Transfer to Taita Hills. Experience the unique sanctuary and stay at the famous Salt Lick Safari Lodge.",
        icon: "bed",
        accommodation: "Salt Lick Safari Lodge",
        image: "/images/packages/3-days-tsavo-east-taita-hills/gallery-2.webp"
      },
      {
        day: "3",
        title: "Final Game Drive",
        description: "Morning game drive in Taita Hills before returning to the coast.",
        icon: "camera",
        image: "/images/packages/3-days-tsavo-east-taita-hills/gallery-2.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "3-days-tsavo-east-amboseli",
    title: "3 Days / 2 Nights – Tsavo East & Amboseli",
    duration: "3 Days / 2 Nights",
    location: "Tsavo East, Amboseli National Park",
    starts: "Mombasa",
    destinations: "2 Locations",
    imageSrc: "/images/packages/3-days-tsavo-east-amboseli/card.webp",
    heroImage: "/images/packages/3-days-tsavo-east-amboseli/hero.webp",
    description: "Journey from the rugged Tsavo to the foot of Mt. Kilimanjaro in Amboseli.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East",
        description: "Morning and afternoon game drives in Tsavo East.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/images/packages/3-days-tsavo-east-amboseli/gallery-1.webp"
      },
      {
        day: "2",
        title: "Amboseli & Kilimanjaro",
        description: "Drive to Amboseli. Enjoy views of Mt. Kilimanjaro and see massive herds of elephants in the marshes.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/3-days-tsavo-east-amboseli/gallery-2.webp"
      },
      {
        day: "3",
        title: "Amboseli Sunrise",
        description: "Early morning game drive with the mountain as your backdrop.",
        icon: "camera",
        image: "/images/packages/3-days-tsavo-east-amboseli/gallery-3.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "4-days-tsavo-west-amboseli-tsavo-east",
    title: "4 Days / 3 Nights – Tsavo West, Amboseli & Tsavo East",
    duration: "4 Days / 3 Nights",
    location: "Tsavo West, Amboseli, Tsavo East",
    starts: "Mombasa",
    destinations: "3 Locations",
    imageSrc: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/card.webp",
    heroImage: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/hero.webp",
    description: "The complete southern circuit tour, covering the diverse landscapes of both Tsavos and Amboseli.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo West & Mzima Springs",
        description: "Visit the Shetani lava flows and the crystal clear Mzima Springs.",
        icon: "compass",
        accommodation: "Tsavo West Lodge",
        image: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/gallery-1.webp"
      },
      {
        day: "2",
        title: "Amboseli National Park",
        description: "Spectacular views of Kilimanjaro and elephant sightings.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/gallery-2.webp"
      },
      {
        day: "3",
        title: "Tsavo East",
        description: "Transfer to Tsavo East for more wildlife encounters.",
        icon: "camera",
        accommodation: "Tsavo East Lodge",
        image: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/gallery-3.webp"
      },
      {
        day: "4",
        title: "Final Loop",
        description: "Morning game drive and departure.",
        icon: "compass",
        image: "/images/packages/4-days-tsavo-west-amboseli-tsavo-east/gallery-4.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "4-days-tsavo-east-amboseli-taita-hills",
    title: "4 Days / 3 Nights – Tsavo East, Amboseli & Taita Hills",
    duration: "4 Days / 3 Nights",
    location: "Tsavo East, Amboseli, Taita Hills",
    starts: "Mombasa",
    destinations: "3 Locations",
    imageSrc: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/card.webp",
    heroImage: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/hero.webp",
    description: "A varied itinerary featuring the red elephants of Tsavo, the heights of Amboseli, and the hills of Taita.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East",
        description: "Introduction to the red soil safari.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/gallery-1.webp"
      },
      {
        day: "2",
        title: "Amboseli",
        description: "Views of the roof of Africa.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/gallery-2.webp"
      },
      {
        day: "3",
        title: "Taita Hills",
        description: "Sanctuary wildlife and stilted luxury.",
        icon: "camera",
        accommodation: "Salt Lick Safari Lodge",
        image: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/gallery-3.webp"
      },
      {
        day: "4",
        title: "Return Journey",
        description: "Final morning safari.",
        icon: "compass",
        image: "/images/packages/4-days-tsavo-east-amboseli-taita-hills/gallery-3.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "5-days-tsavo-east-taita-hills",
    title: "5 Days / 4 Nights – Tsavo East to Taita Hills",
    duration: "5 Days / 4 Nights",
    location: "Tsavo East, Tsavo West, Amboseli, Taita Hills",
    starts: "Mombasa",
    destinations: "4 Locations",
    imageSrc: "/images/packages/5-days-tsavo-east-taita-hills/card.webp",
    heroImage: "/images/packages/5-days-tsavo-east-taita-hills/hero.webp",
    description: "An extended southern circuit safari for those who want to see it all without the rush.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East Arrival",
        description: "Full day of safari tracking.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/images/packages/5-days-tsavo-east-taita-hills/gallery-1.webp"
      },
      {
        day: "2",
        title: "Tsavo West",
        description: "Exploring the hilly and volcanic landscape.",
        icon: "bed",
        accommodation: "Tsavo West Lodge",
        image: "/images/packages/5-days-tsavo-east-taita-hills/gallery-2.webp"
      },
      {
        day: "3",
        title: "Amboseli National Park",
        description: "Kilimanjaro and the elephant kings.",
        icon: "compass",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/5-days-tsavo-east-taita-hills/gallery-3.webp"
      },
      {
        day: "4",
        title: "Taita Hills Sanctuary",
        description: "Bird watching and unique stilted lodges.",
        icon: "camera",
        accommodation: "Salt Lick Lodge",
        image: "/images/packages/5-days-tsavo-east-taita-hills/gallery-4.webp"
      },
      {
        day: "5",
        title: "Departure",
        description: "Final game drive before transfer.",
        icon: "compass",
        image: "/images/packages/5-days-tsavo-east-taita-hills/gallery-5.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "6-days-safari-nairobi",
    title: "6 Days / 5 Nights Safari from Nairobi",
    duration: "6 Days / 5 Nights",
    location: "Masai Mara, Lake Nakuru, Lake Naivasha, Amboseli",
    starts: "Nairobi",
    destinations: "4 Locations",
    imageSrc: "/images/packages/6-days-safari-nairobi/card.webp",
    heroImage: "/images/packages/6-days-safari-nairobi/hero.webp",
    description: "The classic Kenyan loop starting from the capital, including the Mara and Rift Valley lakes.",
    itinerary: [
      {
        day: "1-2",
        title: "Masai Mara",
        description: "Two days of unparalleled wildlife viewing in the Mara.",
        icon: "compass",
        accommodation: "Mara Camp",
        image: "/images/packages/6-days-safari-nairobi/gallery-1.webp"
      },
      {
        day: "3",
        title: "Lake Nakuru",
        description: "The pink lake and its rhinos.",
        icon: "camera",
        accommodation: "Nakuru Lodge",
        image: "/images/packages/6-days-safari-nairobi/gallery-2.webp"
      },
      {
        day: "4",
        title: "Lake Naivasha",
        description: "Boat trips and walking safaris.",
        icon: "compass",
        accommodation: "Naivasha Lodge",
        image: "/images/packages/6-days-safari-nairobi/gallery-3.webp"
      },
      {
        day: "5-6",
        title: "Amboseli & Return",
        description: "Finishing with the iconic Kilimanjaro views.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/6-days-safari-nairobi/gallery-3.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  },
  {
    slug: "10-days-samburu-tsavo-east",
    title: "10 Days – Samburu to Tsavo East",
    duration: "10 Days",
    location: "Samburu, Ol Pejeta, Nakuru, Amboseli...",
    starts: "Nairobi",
    destinations: "8 Locations",
    imageSrc: "/images/packages/10-days-samburu-tsavo-east/card.webp",
    heroImage: "/images/packages/10-days-samburu-tsavo-east/hero.webp",
    description: "The ultimate Kenyan odyssey, traversing the country from the northern dry lands to the southern plains.",
    itinerary: [
      {
        day: "1-2",                                                                                                                                                                                                                                   
        title: "Samburu Reserve",
        description: "Search for the 'Samburu Special Five'.",
        icon: "compass",
        accommodation: "Samburu Lodge",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-1.webp"
      },
      {
        day: "3",
        title: "Ol Pejeta Conservancy",
        description: "Chimpanzees and rhinos at the foot of Mt. Kenya.",
        icon: "camera",
        accommodation: "Ol Pejeta Camp",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-2.webp"
      },
      {
        day: "4-5",
        title: "Masai Mara",
        description: "The jewel of Kenya's wildlife.",
        icon: "compass",
        accommodation: "Mara Camp",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-3.webp"
      },
      {
        day: "6",
        title: "Lake Nakuru",
        description: "Rift Valley birdlife.",
        icon: "camera",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-4.webp"
      },
      {
        day: "7-8",
        title: "Amboseli",
        description: "Elephants in the shadow of the mountain.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-4.webp"
      },
      {
        day: "9-10",
        title: "Tsavo East & Departure",
        description: "Finishing in the theatre of the wild.",
        icon: "compass",
        image: "/images/packages/10-days-samburu-tsavo-east/gallery-3.webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  }
];
