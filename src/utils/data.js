import { Car ,Clock,MapPin,Phone} from "lucide-react";

export const vehicles = [
  {
    title: "Luxury Cars",
    price: "₹10,000/day",
    description:
      "Comfortable and stylish cars for a premium travel experience.",
    icon: <Car className="w-6 h-6 text-yellow-400" />,
    image: "/images/car/car2.png",
  },
  {
    title: "SUVs",
    price: "₹6,500/day",
    description: "Spacious and reliable SUVs for family and group travel.",
    icon: <Car className="w-6 h-6 text-green-400" />,
    image: "/images/car/car1.png",
  },
  {
    title: "Tempo Traveller",
    price: "₹8,500/day",
    description: "Perfect for group travel with ample space and comfort.",
    icon: <Car className="w-6 h-6 text-blue-400" />,
    image: "/images/car/car2.png",
  },
  {
    title: "Mini Bus",
    price: "₹12,000/day",
    description:
      "Ideal for large groups with comfortable seating and facilities.",
    icon: <Car className="w-6 h-6 text-red-400" />,
    image: "/images/car/car1.png",
  },
];

export const tourDetails = {
  "manali-tour-from-mumbai": {
    title: "Manali Tour from Mumbai",
    price: "₹15,999",
    duration: "6 Days 5 Nights",
    image: "/images/about/about_banner.jpg",
    startingPoint: "Mumbai",
    destination: "Manali",
    departureDate: "Weekly",
    category: "Adventure",
    overview:
      "Experience the magic of Manali with our all-inclusive package from Mumbai. Explore snow-capped peaks, adventure activities, and cultural landmarks.",
    inclusions: [
      "Flight tickets: Mumbai - Delhi - Mumbai",
      "AC Volvo bus: Delhi - Manali - Delhi",
      "5 nights accommodation in 4-star hotel",
      "All meals (breakfast, lunch, dinner)",
      "Private vehicle for sightseeing",
      "Adventure activities package",
      "Professional guide services",
      "All taxes included",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Mumbai to Delhi to Manali",
        details: "Flight to Delhi, overnight Volvo journey to Manali",
      },
      {
        day: "Day 2",
        title: "Manali Local",
        details: "Hadimba Temple, Mall Road, Monastery, Old Manali",
      },
      {
        day: "Day 3",
        title: "Solang Valley",
        details: "Adventure activities, snow sports (seasonal)",
      },
      {
        day: "Day 4",
        title: "Rohtang Pass",
        details: "Snow point visit, photography, local activities",
      },
      {
        day: "Day 5",
        title: "Kullu Valley",
        details: "River rafting, shopping, temple visits",
      },
      {
        day: "Day 6",
        title: "Return Journey",
        details: "Departure for Delhi, flight to Mumbai",
      },
    ],
    highlights: [
      "Snow activities at Rohtang Pass",
      "Adventure sports in Solang Valley",
      "Cultural tours of temples",
      "Shopping at Mall Road",
      "River rafting experience",
    ],
    accommodation: {
      name: "Snow Valley Resort",
      rating: "4 Star",
      amenities: ["Room service", "WiFi", "Restaurant", "Spa"],
    },
  },
};


export const tourPackages = [
  {
    title: "Manali Tour from Mumbai",
    price: "₹9,999",
    duration: "5 Days 4 Nights",
    image: "/api/placeholder/800/500",
    startingPoint: "Jaipur",
    destination: "Manali",
    departureDate: "Weekly",
    category: "Adventure",
  },
  {
    title: "Chardham Yatra Package",
    price: "₹24,999",
    duration: "12 Days 11 Nights",
    image: "/api/placeholder/800/500",
    startingPoint: "Delhi",
    destination: "Chardham",
    departureDate: "Monthly",
    category: "Pilgrimage",
  },
  {
    title: "Manali from Mumbai",
    price: "₹15,999",
    duration: "6 Days 5 Nights",
    image: "/api/placeholder/800/500",
    startingPoint: "Mumbai",
    destination: "Manali",
    departureDate: "Weekly",
    category: "Adventure",
  },
  {
    title: "Kerala Backwaters",
    price: "₹12,999",
    duration: "5 Days 4 Nights",
    image: "/api/placeholder/800/500",
    startingPoint: "Kochi",
    destination: "Kerala",
    departureDate: "Daily",
    category: "Nature",
  },
  {
    title: "Goa Beach Tour",
    price: "₹8,999",
    duration: "4 Days 3 Nights",
    image: "/api/placeholder/800/500",
    startingPoint: "Mumbai",
    destination: "Goa",
    departureDate: "Daily",
    category: "Beach",
  },
];


export  const features = [
  {
    icon: Car,
    title: "Quality Fleet",
    description:
      "Modern, well-maintained vehicles for your comfort and safety",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock availability for all your travel needs",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving major cities and tourist destinations nationwide",
  },
  {
    icon: Phone,
    title: "Easy Booking",
    description: "Quick and hassle-free reservation process",
  },
];
