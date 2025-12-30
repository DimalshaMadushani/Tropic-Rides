export type ServiceKey = "scooter" | "airport" | "tour" | "car";

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
    href: "/contact-us#airport",
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
    key: "car",
    title: "Car Rentals",
    description:
      "Cars and vans for families and groups. Plenty of space for luggage and surfboards.",
    href: "/car-rent",
    image: "/images/carRent_image.jpg",
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
    id: "s1",
    name: "Scooter 1",
    description: "Comfortable ride for city and beach roads.",
    pricePerDayUSD: 10,
    image: "/images/scooter_image.webp",
  },
  {
    id: "s2",
    name: "Scooter 2",
    description: "Great for longer rides and smooth handling.",
    pricePerDayUSD: 20,
    image: "/images/scooter_image.webp",
  },
  {
    id: "s3",
    name: "Scooter 3",
    description: "A simple, reliable option for everyday travel.",
    pricePerDayUSD: 30,
    image: "/images/scooter_image.webp",
  },
];

export type Car = {
  id: string;
  name: string;
  passengers: number;
  description: string;
  pricePerDayUSD: number;
  imageUrls: string[];
};

export const cars: Car[] = [
  {
    id: "c1",
    name: "Fit Shuttle Luxury Hybrid",
    passengers: 3,
    description: "Luggage and surfboard allowed.",
    pricePerDayUSD: 100,
    imageUrls: [
      "https://media.ed.edmunds-media.com/honda/insight/2019/oem/2019_honda_insight_sedan_touring_fq_oem_9_815x543.jpg",
      "https://carsguide.ikman.lk/wp-content/uploads/2023/10/Honda-Fit-Shuttle-2013-1.png",
    ],
  },
  {
    id: "c2",
    name: "Insight Luxury Hybrid",
    passengers: 4,
    description: "Comfort ride with good fuel economy.",
    pricePerDayUSD: 150,
    imageUrls: [
      "https://media.ed.edmunds-media.com/honda/insight/2019/oem/2019_honda_insight_sedan_touring_fq_oem_9_815x543.jpg",
      "https://www.motortrend.com/uploads/2022/03/2022-Toyota-Sienna-Platinum-10.jpg?w=768&width=768&q=75&format=webp",
    ],
  },
  {
    id: "c3",
    name: "Luxury Hybrid Van",
    passengers: 8,
    description: "Space for 8 passengers plus luggage.",
    pricePerDayUSD: 300,
    imageUrls: [
      "https://www.motortrend.com/uploads/2022/03/2022-Toyota-Sienna-Platinum-10.jpg?w=768&width=768&q=75&format=webp",
      "https://carsguide.ikman.lk/wp-content/uploads/2023/10/Honda-Fit-Shuttle-2013-1.png",
    ],
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
    title: "Ella Tours",
    subtitle: "Enjoy the beauty of Ella",
    description:
      "Tea hills, cool weather, and iconic viewpoints. Great for relaxed scenic travel.",
    imageUrl:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
  },
  {
    id: "t2",
    title: "Yala Tours",
    subtitle: "See the wildlife in Yala",
    description:
      "Safari experience with a chance to spot elephants, birds, and more.",
    imageUrl:
      "https://thumbs.dreamstime.com/b/sri-lankan-leopard-panthera-pardus-kotiya-acacia-tree-nature-habitat-yala-national-park-sri-lanka-67952131.jpg",
  },
  {
    id: "t3",
    title: "Udawalawe National Park Tours",
    subtitle: "Elephants and open landscapes",
    description:
      "A popular park for elephant sightings with wide open areas and beautiful sunsets.",
    imageUrl: "/images/tours_image.jpg",
  },
];
