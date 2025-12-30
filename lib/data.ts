export type ServiceKey = "scooter" | "airport" | "tour" | "car" | "surf";

export type Category = {
  key: ServiceKey;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const categories: Category[] = [
  {
    key: "scooter",
    title: "Scooter Rentals",
    description:
      "Get a scooter delivered to your location in down-south Sri Lanka. Flexible durations and quick handover.",
    href: "/scooter-rent",
    image: "/images/scooter_image.webp",
  },
  {
    key: "airport",
    title: "Airport Drop & Pickup",
    description:
      "Comfortable airport transfers with friendly drivers. Reliable timing, clean vehicles, and help with luggage.",
    href: "/airport-transfers",
    image: "/images/airport_image.webp",
  },
  {
    key: "tour",
    title: "Tours",
    description:
      "Explore Sri Lanka with curated day trips and multi-day tours. Scenic routes, stops, and local tips included.",
    href: "/tour",
    image: "/images/sigiriya_light.jpg",
  },
  {
    key: "surf",
    title: "Surf Lessons",
    description:
      "Learn to surf with experienced local instructors. Suitable for all levels.",
    href: "/surf-lessons",
    image: "/images/surf_lessons_image.jpg",
  },
];

export type Scooter = {
  id: string;
  name: string;
  description: string;
  pricePerDayUSD: number;
  image: string;
};

export const scooters: Scooter[] = [
  {
    id: "deo-110",
    name: "DEO 110cc",
    description: "Easy, fuel-friendly scooter for short rides and daily travel.",
    pricePerDayUSD: 6.50,
    image: "/images/scooter_image.webp",
  },
  {
    id: "ntorq-125",
    name: "TVS Ntorq 125cc",
    description: "More power and comfort for longer rides around the down south.",
    pricePerDayUSD: 8.00,
    image: "/images/scooter_image.webp",
  },
  {
    id: "navi-110",
    name: "Honda Navi 110cc",
    description: "Compact and fun, great for quick town runs and beach roads.",
    pricePerDayUSD: 6.00,
    image: "/images/scooter_image.webp",
  },
];

export type AirportTransfer = {
  id: string;
  name: string;
  passengers: number;
  description: string;
  image: string;
  meta: string;
};

export const airportTransfers: AirportTransfer[] = [
  {
    id: "mini",
    name: "Mini-car",
    passengers: 2,
    description: "Best for solo or couples. Light luggage.",
    image: "/images/airport_car.jpg",
    meta: "LKR 16,000 (~$52)",
  },
  // {
  //   id: "sedan",
  //   name: "Sedan",
  //   passengers: 3,
  //   description: "Comfort ride with space for luggage.",
  //   image: "/images/airport_car.jpg",
  //   meta: "LKR 16,000 (~$52)",
  // },
  {
    id: "shuttle",
    name: "Shuttle",
    passengers: 4,
    description: "Smooth ride. Surfboard friendly on request.",
    image: "/images/airport_car.jpg",
    meta: "LKR 16,000 (~$52)",
  },
  {
    id: "van",
    name: "Van",
    passengers: 6,
    description: "Great for families and groups with luggage.",
    image: "/images/airport_car.jpg",
    meta: "Inquire on WhatsApp",
  },
  // {
  //   id: "large-van",
  //   name: "Large Van",
  //   passengers: 8,
  //   description: "Extra space for passengers plus luggage.",
  //   image: "/images/airport_car.jpg",
  //   meta: "Inquire on WhatsApp",
  // },
];

export type Tour = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
};

export const tours: Tour[] = [
  {
    id: "t1",
    title: "Hiriketiya Beach",
    subtitle: "Surf, swim, and chill in a perfect bay",
    description:
      "A relaxed beach stop with great sunsets, cafes, and easy vibes for a full day out.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",  
  },
  {
    id: "t2",
    title: "Kandy",
    subtitle: "Culture, lake views, and hill-country charm",
    description:
      "Explore the city, local markets, and scenic viewpoints with comfortable travel in between.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t3",
    title: "Nuwara Eliya",
    subtitle: "Tea country, cool air, and beautiful landscapes",
    description:
      "Visit tea estates, enjoy calm weather, and take in green valleys on a smooth day trip.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t4",
    title: "Boat Safari, Koggala Lake",
    subtitle: "A peaceful ride through nature",
    description:
      "A calm boat safari with mangroves, birds, and quiet views. Great for families and couples.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t5",
    title: "Arugambay",
    subtitle: "East-coast beaches and famous surf spots",
    description:
      "A longer escape to wide beaches and surf breaks, with flexible stops along the route.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },

  // Optional: keep your existing popular tours too
  {
    id: "t6",
    title: "Ella",
    subtitle: "Tea hills, viewpoints, and the hill-country train line",
    description:
      "A scenic day with fresh air, green slopes, and iconic photo spots.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t7",
    title: "Yala National Park",
    subtitle: "Wildlife safari with an early start",
    description:
      "A memorable safari experience with a chance to spot elephants, birds, and more.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t8",
    title: "Udawalawe National Park",
    subtitle: "Elephants and wide open landscapes",
    description:
      "One of the best parks for elephant sightings, with beautiful open views.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
];
