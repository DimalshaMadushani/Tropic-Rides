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
    image: "/home/scooter.webp",
  },
  {
    key: "airport",
    title: "Airport Drop & Pickup",
    description:
      "Comfortable airport transfers with friendly drivers. Reliable timing, clean vehicles, and help with luggage.",
    href: "/airport-transfers",
    image: "/home/airport.webp",
  },
  {
    key: "tour",
    title: "Tours",
    description:
      "Explore Sri Lanka with curated day trips and multi-day tours. Scenic routes, stops, and local tips included.",
    href: "/tour",
    image: "/home/tour.webp",
  },
  {
    key: "surf",
    title: "Surf Lessons",
    description:
      "Learn to surf with experienced local instructors. Suitable for all levels.",
    href: "/surf-lessons",
    image: "/home/surf_lessons.webp",
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
    description:
      "Easy, fuel-friendly scooter for short rides and daily travel.",
    pricePerDayUSD: 6.5,
    image: "/scooters/deo.jpeg",
  },
  {
    id: "ntorq-125",
    name: "TVS Ntorq 125cc",
    description:
      "More power and comfort for longer rides around the down south.",
    pricePerDayUSD: 8,
    image: "/scooters/ntorq.jpeg",
  },
  {
    id: "navi-110",
    name: "Honda Navi 110cc",
    description: "Compact and fun, great for quick town runs and beach roads.",
    pricePerDayUSD: 6,
    image: "/scooters/navi.jpeg",
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
    image: "/airport/mini_car.webp",
    meta: "Inquire on WhatsApp",
  },
  {
    id: "shuttle",
    name: "Shuttle",
    passengers: 4,
    description: "Smooth ride. Surfboard friendly on request.",
    image: "/airport/shuttle.webp",
    meta: "Inquire on WhatsApp",
  },
  {
    id: "van",
    name: "Van",
    passengers: 6,
    description: "Great for families and groups with luggage.",
    image: "/airport/van.webp",
    meta: "Inquire on WhatsApp",
  },
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
    imageUrl: "/tours/hiriketiya_beach.webp",
  },
  {
    id: "t2",
    title: "Kandy",
    subtitle: "Culture, lake views, and hill-country charm",
    description:
      "Explore the city, local markets, and scenic viewpoints with comfortable travel in between.",
    imageUrl: "/tours/kandy.webp",
  },
  {
    id: "t3",
    title: "Nuwara Eliya",
    subtitle: "Tea country, cool air, and beautiful landscapes",
    description:
      "Visit tea estates, enjoy calm weather, and take in green valleys on a smooth day trip.",
    imageUrl: "/tours/nuwara_eliya.webp",
  },
  {
    id: "t4",
    title: "Boat Safari, Koggala Lake",
    subtitle: "A peaceful ride through nature",
    description:
      "A calm boat safari with mangroves, birds, and quiet views. Great for families and couples.",
    imageUrl: "/tours/koggala_lake.webp",
  },
  {
    id: "t5",
    title: "Arugambay",
    subtitle: "East-coast beaches and famous surf spots",
    description:
      "A longer escape to wide beaches and surf breaks, with flexible stops along the route.",
    imageUrl: "/tours/arugambay.webp",
  },
  {
    id: "t6",
    title: "Ella",
    subtitle: "Tea hills, viewpoints, and the hill-country train line",
    description:
      "A scenic day with fresh air, green slopes, and iconic photo spots.",
    imageUrl: "/tours/ella.webp",
  },
  {
    id: "t7",
    title: "Yala National Park",
    subtitle: "Wildlife safari with an early start",
    description:
      "A memorable safari experience with a chance to spot elephants, birds, and more.",
    imageUrl:
      "/tours/yala.webp",
  },
  {
    id: "t8",
    title: "Udawalawe National Park",
    subtitle: "Elephants and wide open landscapes",
    description:
      "One of the best parks for elephant sightings, with beautiful open views.",
    imageUrl: "/tours/udawalawe.webp",
  },
];
