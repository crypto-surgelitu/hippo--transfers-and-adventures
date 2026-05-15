export interface Excursion {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
}

export const excursions: Excursion[] = [
  {
    title: "Wasini Island",
    description: "Snorkeling & Dolphin Watching",
    imageSrc: "/assets/safaris/Lake Naivasha Boat Ride (And Hells Gate Hiking and Biking).webp",
    slug: "wasini-island"
  },
  {
    title: "Marafa Hell's Kitchen",
    description: "Sunset Canyon Experience",
    imageSrc: "/assets/safaris/picture 1 of safari .webp",
    slug: "marafa-hells-kitchen"
  },
  {
    title: "Sardegna 2 Island",
    description: "Snorkeling & Seafood Lunch",
    imageSrc: "/assets/safaris/picture 3 of safari.webp",
    slug: "sardegna-2-island"
  },
  {
    title: "Mida Creek",
    description: "Mangroves & Snorkeling",
    imageSrc: "/assets/safaris/Our Readers' Favorite 10 African Safari Tours in 2021.webp",
    slug: "mida-creek"
  }
];
