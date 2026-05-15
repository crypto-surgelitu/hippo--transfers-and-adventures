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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLN9Y5w5a0a-nXtCtThiel0ufG79MGAZKeMsnfuoNFIJBkn2rCHGXtIuknH4P_RAd2c9Nfwk1J6BINDo5NNLLIDOvdRmLY3NgJDSqctFfuJdvUEFqnxxXvuaBACFzbUKdr-QJ7soozF6O7GqLq4hPBZzwyMeE-F8U0orMFMK0W0BYvqvyfkzbDYGGWJf2YPtTT7nSaYq8Fw8PFzYk1A0Et6BIpLjJ1xldk5n1HFJ_WPHaPKoTvhulVKjFt-5ilHmMVXBJAIWC-DNE",
    heroImage: "/assets/safaris/masai_mara_hero_hq.webp",
    description: "A grand tour across Kenya's most famous landscapes, curated for the discerning traveler.",
    itinerary: [
      {
        day: "1",
        title: "Mombasa to Masai Mara",
        description: "Begin your adventure with a scenic flight or drive from Mombasa into the heart of the Masai Mara. Arrive in time for an afternoon game drive, settling into your luxury tented camp as the sun sets over the plains.",
        icon: "bed",
        accommodation: "Luxury Tented Camp",
        image: "https://lh3.googleusercontent.com/aida/ADBb0uhqYmWe9lDZPa-s3Q0XIcLD8fofviPqBTrBYgXBTVqqOze1bXLP_IjFMiYfnuzgBjOKrgWvAeAAUP1_ts-p9_6bZw_UlG51ysGNhLnSsLPH9fD3vq6GuVHOijDGORGaGy_mN-1xC-RdD31XZMSqhZDZWgSFvH-hlhQqABp7DT-ipQH42iutJM1ooumr1Zd62HEZ9CH53cAd4qiRs5OFIWlBxIUEXsUhHMOx4LzJ_UeXvkwwTDKKdF3VCODfqbZ6-2rpiNJPaola"
      },
      {
        day: "2-3",
        title: "The Great Migration",
        description: "Spend two full days immersed in the greatest wildlife spectacle on earth. Track predators across the rolling savannah and witness dramatic river crossings as herds brave the crocodile-infested waters.",
        icon: "compass",
        image: "/assets/safaris/Why Does The Great Migration Occur In East Africa_.webp"
      },
      {
        day: "4",
        title: "Lake Nakuru & Naivasha",
        description: "Journey to the Great Rift Valley lakes. Observe endangered rhinos in Lake Nakuru National Park and take a serene boat ride on Lake Naivasha amidst a vibrant array of birdlife, including iconic flamingos.",
        icon: "camera",
        image: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs8sjCxI368OvH0MMDnW8_dClu4eMzwRBtFmwLBU57a4pKTqnsMoTcMoOhEyvxfRfFmRgvajWM_TrxZ2S13PUQPAmBgXakQY_ZqcpzzWUEJatf_fH1x9hHsqyIUS14VPGkOu02GhIgK76svMtoQsMdhn-VUgO341TQ928n031ZRvOq1iP2ddxHMPPc0Tsyf2ECkVKwjkW6KFDHh17nUVq2XhEaoEDtaWoQgZHX2duHl9eAB0B_0KJzZZsZ8devss7i9tr9dPHhqic",
    heroImage: "/assets/safaris/picture 3 of safari.webp",
    description: "An intensive day trip to Kenya's largest national park, famous for its red-skinned elephants and man-eating lions.",
    itinerary: [
      {
        day: "1",
        title: "Dawn Departure & Morning Game Drive",
        description: "Depart early from your hotel for Tsavo East. Enter the park for a morning game drive tracking the 'Big Five'. Witness the unique red elephants and the vast Galana River.",
        icon: "compass",
        image: "/assets/safaris/picture 1 of safari .webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFH5zlXNFZn-ZpBHqgShxbEdFkw4rRL0-0wkuCKV2Uane5dN3ToOzl6twhZUEUjN0wC7dhMDX59VrsZkPUFvA_4XuzjcOCNCLVB92m6WLuBJNHyUI2ISM2nsEr5uhEvIpc2ooTpAXbHnjVoG9R2C470lnPRH9-C_R-1aABvickE2glL1CqmMpl6wLayvkjkMzZLCqeA4IFn8cKfJlrIgVSVhStt3WoFwcSDVPTxoWVF7tv2xpwA1J08YA0U2egHHdgPSR2DapGD00",
    heroImage: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp",
    description: "Experience the magic of Tsavo East under the stars, with extended game drives and a night in the wild.",
    itinerary: [
      {
        day: "1",
        title: "Arrival & Sunset Game Drive",
        description: "Enter Tsavo East for an intensive afternoon of wildlife tracking. Head to your lodge for dinner and overnight stay.",
        icon: "bed",
        accommodation: "Safari Lodge / Camp",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "2",
        title: "Morning Safari & Departure",
        description: "Enjoy an early morning game drive when animals are most active. After breakfast, enjoy one last safari loop before departing.",
        icon: "compass",
        image: "/assets/safaris/picture 1 of safari .webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiGo2leyCNVj7C4O5f7F2Uaom49zTGPjCsH7GPQ63pGDMdIWixn_XX2z4xpsPmxc8xDxOptWQcPI43R7q5JQORPsH-itcVJy7rScbOxE8PLCcZ1vbfNvvuJptTnPTSfsBavQyUvN3T0-WmVdq0Dm2vbIkYx_qfJzQidbwFUjC8-LgohIPlwl4GIIKqyYte7qgnq68wva2yVMwYIDWYLz_XME6iZtlQnJtCf2kV_Z9OLoBTBRR3XeiqNqh787cOWp07ZBd_R7EFo-o",
    heroImage: "/assets/safaris/picture 1 of safari .webp",
    description: "Combine the vastness of Tsavo East with the unique stilted lodges of Taita Hills Sanctuary.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East Exploration",
        description: "Full day game drive in Tsavo East, home to the famous red elephants.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "2",
        title: "Taita Hills Sanctuary",
        description: "Transfer to Taita Hills. Experience the unique sanctuary and stay at the famous Salt Lick Safari Lodge.",
        icon: "bed",
        accommodation: "Salt Lick Safari Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "3",
        title: "Final Game Drive",
        description: "Morning game drive in Taita Hills before returning to the coast.",
        icon: "camera",
        image: "/assets/safaris/picture 1 of safari .webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mdqzovuJ5WITic74TuSVQOARLdW1DGjrY1bkzZKgxQ1-HMG8NlVmWlNBH_tIT6l8h_AgmAYwzeYNci0SPdIqqiwsWN0yi8KFnc-3-uTz6slrOMv6qzLtd-44y944t8tqs9vWZ6fDmEyxPu_pYffP8QD7Ptc8VMRA5ckKJBWTB80t83TV1OSJzTBucubVHa1vTDsKldr4bI0CiNUZlHQ3kQr7ZY-Vw2UoiUB87HdSe96AJih8RhZnii6RU320Yy1JtPgmUKnjQxY",
    heroImage: "/assets/safaris/picture 3 of safari.webp",
    description: "Journey from the rugged Tsavo to the foot of Mt. Kilimanjaro in Amboseli.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East",
        description: "Morning and afternoon game drives in Tsavo East.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "2",
        title: "Amboseli & Kilimanjaro",
        description: "Drive to Amboseli. Enjoy views of Mt. Kilimanjaro and see massive herds of elephants in the marshes.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "3",
        title: "Amboseli Sunrise",
        description: "Early morning game drive with the mountain as your backdrop.",
        icon: "camera",
        image: "/assets/safaris/picture 3 of safari.webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-YwN3Tmmd1viDiJyGrEiD5mj4T-ZcP-T8xZlYj2rioNUUcH8YXIjGfBm0mkIeyBjkoSby5rCs99p5zeQ0vI77hoCrrazDscJJjP4vOEQL_Cn6Wihe2rk1gmMjZTsg1nuFoRDvy8TywUjD3CzdYUE44lYQHU4XorNMPh-EMSYahwaGJ_oVi9Ptc4xCLdSXxjPSNDlzGjZibgqdbg4T-hvmpMFUDMAv-eukWOfBvOQLM5kHccEAjrUu0PMh7hDAerWeJpWcMlX17GE",
    heroImage: "/assets/safaris/picture 1 of safari .webp",
    description: "The complete southern circuit tour, covering the diverse landscapes of both Tsavos and Amboseli.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo West & Mzima Springs",
        description: "Visit the Shetani lava flows and the crystal clear Mzima Springs.",
        icon: "compass",
        accommodation: "Tsavo West Lodge",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "2",
        title: "Amboseli National Park",
        description: "Spectacular views of Kilimanjaro and elephant sightings.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "3",
        title: "Tsavo East",
        description: "Transfer to Tsavo East for more wildlife encounters.",
        icon: "camera",
        accommodation: "Tsavo East Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "4",
        title: "Final Loop",
        description: "Morning game drive and departure.",
        icon: "compass",
        image: "/assets/safaris/picture 3 of safari.webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk-83c_jEV1fJ-dJym3tjRU_2aMKHNOR2zHfjHUFgtbt02eYSLQO-gnvPSBKZE8_8MANbqI9uME4vj4auwY3lpO1qOigyawAvLtH6NDMQCPzVNhT9LMyz705bZQmEeJ-eDxyWPdvjltd-0d32XEa2iceFjpenB7ZRpkM-3PD02ZM5mrB1Q085exYgpbYti3Mz4vKJ2kGLkkisXIg6QQ-DZhXYnn-h3Ka8_rUx8lmh37H7cU3sdAXnpxH9h3SFqynB8kpcxXkGrKvM",
    heroImage: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp",
    description: "A varied itinerary featuring the red elephants of Tsavo, the heights of Amboseli, and the hills of Taita.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East",
        description: "Introduction to the red soil safari.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "2",
        title: "Amboseli",
        description: "Views of the roof of Africa.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "3",
        title: "Taita Hills",
        description: "Sanctuary wildlife and stilted luxury.",
        icon: "camera",
        accommodation: "Salt Lick Safari Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "4",
        title: "Return Journey",
        description: "Final morning safari.",
        icon: "compass",
        image: "/assets/safaris/picture 3 of safari.webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCckRqCn5uKAD50HsH9VYMS4S_FjRcgA8b8iRzw1wDAqQshKYi054DXrac1IwoySq_MdD0iOXsiaC0v3VFVZX0MzjpmufVueAKG9B113dnXXE19tqHMzj3GRyTxW2ZqvSjj648fiPO7xysue3_GLZIRlSI5iIxiYHIe48D7Yep9m58Oc-OL9Po1uIcsCM2_iMKTYcFMo9dbW2KYEiojgf6bm56crX82jMmnp86aHETYhyCEkZf_G-4C2acjkKIFdyjKvj3MtzW_jKE",
    heroImage: "/assets/safaris/picture 3 of safari.webp",
    description: "An extended southern circuit safari for those who want to see it all without the rush.",
    itinerary: [
      {
        day: "1",
        title: "Tsavo East Arrival",
        description: "Full day of safari tracking.",
        icon: "compass",
        accommodation: "Tsavo Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "2",
        title: "Tsavo West",
        description: "Exploring the hilly and volcanic landscape.",
        icon: "bed",
        accommodation: "Tsavo West Lodge",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "3",
        title: "Amboseli National Park",
        description: "Kilimanjaro and the elephant kings.",
        icon: "compass",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "4",
        title: "Taita Hills Sanctuary",
        description: "Bird watching and unique stilted lodges.",
        icon: "camera",
        accommodation: "Salt Lick Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "5",
        title: "Departure",
        description: "Final game drive before transfer.",
        icon: "compass",
        image: "/assets/safaris/picture 3 of safari.webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuClQwLjSp--Va4DSYijlnE-zwZMk90bmcEhIDJLFoX3iOhGwU0rjGCvEHL_6RN2Ce7hUiIZZmjhHqV8Ztb3UPVrTkO0ObLAmF7Iotlo9g6HBQ2jT_x-CfQjZCzC7g0fqw_qSwzQhwKySZcjoPhHUkSL0xFu5A0zgv9JlzjaIwhDBJYssPwKUkwnOamTr92aQ2xXLr75lqxjsQ9y5ooCwp6G3Hl68pSfpG75KqIZAaLKzfd0VfI3rLgqFCZJX0NWQiO2QGbYt5L14AE",
    heroImage: "/assets/safaris/Golden Hour Safari_ Lions Awaken in Masai Mara.webp",
    description: "The classic Kenyan loop starting from the capital, including the Mara and Rift Valley lakes.",
    itinerary: [
      {
        day: "1-2",
        title: "Masai Mara",
        description: "Two days of unparalleled wildlife viewing in the Mara.",
        icon: "compass",
        accommodation: "Mara Camp",
        image: "/assets/safaris/masai_mara_hero_hq.webp"
      },
      {
        day: "3",
        title: "Lake Nakuru",
        description: "The pink lake and its rhinos.",
        icon: "camera",
        accommodation: "Nakuru Lodge",
        image: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp"
      },
      {
        day: "4",
        title: "Lake Naivasha",
        description: "Boat trips and walking safaris.",
        icon: "compass",
        accommodation: "Naivasha Lodge",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "5-6",
        title: "Amboseli & Return",
        description: "Finishing with the iconic Kilimanjaro views.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
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
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMiw5KhxDqsHz2UWntfoiY4I5RbEfRQf6GPfNZ4jbbP7_gaxZeDc6X9DtFYnP11lHrJKkS-1Dz2r4BBLrJJ0Zwpn_1uV4c1-kkXOWexMJ7IEjJanSZCyKtjB8Ha_HGbqNJ_XmbdYWzJXQQreXLKjNGTi4tyS2p_nxdUXk1a1ELPE6884DJgu9u98sVCUwn7h_Mq-WL6cl--QfBJiA6ZD9leemA-mrJHxoWDxrVUjzppShtl0Qij2DN8g4ZkSJiZ4wSlteNRk_f9Ic",
    heroImage: "/assets/safaris/picture 3 of safari.webp",
    description: "The ultimate Kenyan odyssey, traversing the country from the northern dry lands to the southern plains.",
    itinerary: [
      {
        day: "1-2",
        title: "Samburu Reserve",
        description: "Search for the 'Samburu Special Five'.",
        icon: "compass",
        accommodation: "Samburu Lodge",
        image: "/assets/safaris/picture 1 of safari .webp"
      },
      {
        day: "3",
        title: "Ol Pejeta Conservancy",
        description: "Chimpanzees and rhinos at the foot of Mt. Kenya.",
        icon: "camera",
        accommodation: "Ol Pejeta Camp",
        image: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp"
      },
      {
        day: "4-5",
        title: "Masai Mara",
        description: "The jewel of Kenya's wildlife.",
        icon: "compass",
        accommodation: "Mara Camp",
        image: "/assets/safaris/masai_mara_hero_hq.webp"
      },
      {
        day: "6",
        title: "Lake Nakuru",
        description: "Rift Valley birdlife.",
        icon: "camera",
        image: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp"
      },
      {
        day: "7-8",
        title: "Amboseli",
        description: "Elephants in the shadow of the mountain.",
        icon: "bed",
        accommodation: "Amboseli Lodge",
        image: "/assets/safaris/picture 3 of safari.webp"
      },
      {
        day: "9-10",
        title: "Tsavo East & Departure",
        description: "Finishing in the theatre of the wild.",
        icon: "compass",
        image: "/assets/safaris/picture 1 of safari .webp"
      }
    ],
    inclusions: ['Professional Guide', '4x4 Safari Vehicle', 'Park Fees', 'All Meals', 'Lodging'],
    exclusions: ['Tips', 'Personal expenses']
  }
];
