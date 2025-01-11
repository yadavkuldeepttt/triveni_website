import {
  Car,
  Clock,
  CreditCard,
  MapPin,
  Package,
  Phone,
  Users,
} from "lucide-react";


export const tourDetails = {
  "manali-tour-from-mumbai": {
    title: "Manali Tour from Mumbai",
    price: "₹15,999",
    duration: "6 Days 5 Nights",
    image: "/images/packages/manali.jpg",
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
  "chardham-yatra-package": {
    title: "chardham-yatra-package",
    price: "₹15,999",
    duration: "6 Days 5 Nights",
    image: "/images/packages/chardham.jpg",
    startingPoint: "Mumbai",
    destination: "Chardham",
    departureDate: "Weekly",
    category: "Adventure",
    overview:
      "Experience the magic of Chardham with our all-inclusive package from Mumbai. Explore snow-capped peaks, adventure activities, and cultural landmarks.",
    inclusions: [
      "Flight tickets: Mumbai - Delhi - Mumbai",
      "AC Volvo bus: Delhi - Chardham - Delhi",
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
        title: "Mumbai to Delhi to Chardham",
        details: "Flight to Delhi, overnight Volvo journey to Chardham",
      },
      {
        day: "Day 2",
        title: "Chardham Local",
        details: "Hadimba Temple, Mall Road, Monastery, Old Chardham",
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
    title: "Chardham Tour from Mumbai",
    price: "₹9,999",
    duration: "5 Days 4 Nights",
    image: "/images/packages/manali.jpg",
    startingPoint: "Jaipur",
    destination: "Manali",
    departureDate: "Weekly",
    category: "Adventure",
  },
  {
    title: "Chardham Yatra Package",
    price: "₹24,999",
    duration: "12 Days 11 Nights",
    image: "/images/packages/chardham.jpg",
    startingPoint: "Delhi",
    destination: "Chardham",
    departureDate: "Monthly",
    category: "Pilgrimage",
  },
  {
    title: "Manali from Mumbai",
    price: "₹15,999",
    duration: "6 Days 5 Nights",
    image: "/images/packages/manali.jpg",
    startingPoint: "Mumbai",
    destination: "Manali",
    departureDate: "Weekly",
    category: "Adventure",
  },
  {
    title: "Kerala Backwaters",
    price: "₹12,999",
    duration: "5 Days 4 Nights",
    image: "/images/packages/kerala.jpg",
    startingPoint: "Kochi",
    destination: "Kerala",
    departureDate: "Daily",
    category: "Nature",
  },
  {
    title: "Goa Beach Tour",
    price: "₹8,999",
    duration: "4 Days 3 Nights",
    image: "/images/packages/goa.jpg",
    startingPoint: "Mumbai",
    destination: "Goa",
    departureDate: "Daily",
    category: "Beach",
  },
];

export const features = [
  {
    icon: Car,
    title: "Quality Fleet",
    description: "Modern, well-maintained vehicles for your comfort and safety",
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

export const services = [
  {
    icon: <Car className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Vehicles",
    description: "Wide range of comfortable and reliable vehicles",
    items: ["Luxury Cars", "SUVs", "Tempo Traveller", "Mini Bus"],
  },
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Tour Guide",
    description: "Expert guides for an enriching experience",
    items: [
      "Local Experts",
      "Multilingual Guides",
      "Cultural Insights",
      "Custom Tours",
    ],
  },
  {
    icon: <Package className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Tour Packages",
    description: "Curated experiences for every traveler",
    items: [
      "City Tours",
      "Adventure Trips",
      "Cultural Tours",
      "Weekend Getaways",
    ],
  },
];

export const vehiclesServices = [
  {
    type: "Sedan",
    image: "/images/car/car1.png",
    seating: "4 passengers",
    baseFare: "₹500",
    perKm: "₹12/km",
    driverCharges: "₹300/day",
    perDay: "₹2000",
    facilities: ["AC", "Music System", "Charging Point", "First Aid Kit"],
    bestFor: ["Small families", "Business trips", "Airport transfers"],
  },
  {
    type: "SUV",
    image: "/images/car/car2.png",
    seating: "6-7 passengers",
    baseFare: "₹800",
    perKm: "₹15/km",
    driverCharges: "₹400/day",
    perDay: "₹3000",
    facilities: [
      "AC",
      "Music System",
      "Charging Point",
      "Extra Legroom",
      "Luggage Space",
    ],
    bestFor: ["Large families", "Group tours", "Long distance"],
  },
  {
    type: "Tempo Traveller",
    image: "/images/car/3.jpeg",
    seating: "12-15 passengers",
    baseFare: "₹1500",
    perKm: "₹18/km",
    driverCharges: "₹500/day",
    perDay: "₹4500",
    facilities: [
      "AC",
      "Push-back Seats",
      "LCD TV",
      "Audio System",
      "Charging Points",
    ],
    bestFor: ["Tourist groups", "Corporate events", "Wedding parties"],
  },
  {
    type: "Luxury Bus",
    image: "/images/car/8.jpeg",
    seating: "30-35 passengers",
    baseFare: "₹3000",
    perKm: "₹25/km",
    driverCharges: "₹800/day",
    perDay: "₹8000",
    facilities: [
      "AC",
      "Push-back Seats",
      "LCD TV",
      "Audio System",
      "Washroom",
      "Refrigerator",
    ],
    bestFor: ["Large groups", "Extended tours", "Luxury travel"],
  },
];

export const bookingSteps = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Choose Vehicle",
    description:
      "Select the perfect vehicle based on your group size and requirements",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Book & Pay",
    description: "Secure your booking with easy online payment options",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Confirmation",
    description: "Receive instant booking confirmation and driver details",
  },
];

export const cities = [
  { name: 'Delhi', region: 'North India', coverage: 'NCR Region', popularity: 'high' },
  { name: 'Agra', region: 'North India', coverage: 'City + 50km radius', popularity: 'high' },
  { name: 'Jaipur', region: 'North India', coverage: 'Pink City Area', popularity: 'high' },
  { name: 'Haridwar', region: 'North India', coverage: 'Temple Circuit', popularity: 'medium' },
  { name: 'Chandigarh', region: 'North India', coverage: 'Tri-city Area', popularity: 'medium' },
  { name: 'Shimla', region: 'North India', coverage: 'Hill Station Tours', popularity: 'high' },
  { name: 'Manali', region: 'North India', coverage: 'Adventure Routes', popularity: 'high' },
  { name: 'Amritsar', region: 'North India', coverage: 'Golden Temple Area', popularity: 'medium' },
  { name: 'Dehradun', region: 'North India', coverage: 'Valley Region', popularity: 'medium' },
  { name: 'Rishikesh', region: 'North India', coverage: 'Spiritual Circuit', popularity: 'high' },
  { name: 'Jodhpur', region: 'North India', coverage: 'Blue City Area', popularity: 'medium' },
  { name: 'Udaipur', region: 'North India', coverage: 'Lake City Region', popularity: 'high' },
  { name: 'Ayodhya', region: 'North India', coverage: 'Temple City', popularity: 'high' },
  { name: 'Ahmedabad', region: 'West India', coverage: 'City + Suburbs', popularity: 'medium' }
];


export  const destinations = [
  {
    city: "Mumbai",
    tagline: "City of Dreams",
    description: "Experience the vibrant culture and modern lifestyle of India's financial capital",
    rating: 4.8,
    reviews: 1250,
    spots: [
      { name: "Gateway of India", image: "/images/spots/gateway.jpg", description: "Historic arch monument" },
      { name: "Marine Drive", image: "/images/spots/marinedrive.jpg", description: "Sea-facing promenade" },
      { name: "Elephanta Caves", image: "/images/spots/elephanta.jpg", description: "Ancient cave temples" }
    ],
    packages: [
      {
        name: "Mumbai Heritage Walk",
        duration: "2 Days",
        highlights: ["Guided tours", "Local cuisine", "Heritage sites"],
        price: "₹7,999",
        image: "/images/destinations/mumbai.jpg"
      },
      {
        name: "Mumbai City Explorer",
        duration: "3 Days",
        highlights: ["Bollywood tour", "Street food", "Night safari"],
        price: "₹12,999",
        image: "/images/home/banner2.jpg"
              }
    ],
    heroImage: "/images/destinations/mumbai.jpg",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  },
  {
    city: "Delhi",
    tagline: "Heart of India",
    description: "Discover the perfect blend of history and modernity in India's capital",
    rating: 4.7,
    reviews: 1480,
    spots: [
      { name: "Red Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Red_Fort_3.jpg/800px-Red_Fort_3.jpg", description: "Mughal-era fortress" },
      { name: "Qutub Minar", image: "https://media.gettyimages.com/id/165204592/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=YvFLPmQmlgCyX7RGZA1VpKctdC6QsChINzLSMDPNI9k=", description: "UNESCO heritage site" },
      { name: "India Gate", image: "https://media.gettyimages.com/id/522675372/photo/india-gate-a-national-monument-is-a-massive-red-sandstone-arch-and-the-indian-armys-tomb-of.jpg?s=612x612&w=0&k=20&c=YPBiK0nvpg0XvryE2PEfJp0gpLCXfPjoyQvRPgTQl8A=", description: "War memorial" }
    ],
    packages: [
      {
        name: "Delhi Historical Tour",
        duration: "2 Days",
        highlights: ["Monument visits", "Cultural shows", "Local markets"],
        price: "₹6,999",
        image: "/images/about/about_banner.jpg"
      },
      {
        name: "Delhi Food & Culture",
        duration: "3 Days",
        highlights: ["Food walks", "Art galleries", "Shopping"],
        price: "₹10,999",
        image: "/images/destinations/delhi.jpg"
      }
    ],
    heroImage: "/images/destinations/delhi.jpg",
    gallery: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  }
];

  // Sample data array of multiple vehicles
 export const vehicleDetails = [
    {
      id: "1",
      type: "Sedan",
      image: "/images/car/3.jpeg",
      rating: "4.9",
      reviews: "128",
      seating: "6 Seater",
      baseFare: "₹3000",
      perKm: "₹18/km",
      driverCharges: "Included",
      perDay: "₹4500",
      facilities: ["AC", "WiFi", "Music System", "GPS"],
      description:
        "Experience luxury and comfort with our premium SUV. Perfect for family trips and business travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "Free Cancellation",
      ],
    },
    {
      id: "2",
      type: "SUV",
      image: "/images/car/8.jpeg",
      rating: "4.8",
      reviews: "96",
      seating: "4 Seater",
      baseFare: "₹2500",
      perKm: "₹15/km",
      driverCharges: "Included",
      perDay: "₹3500",
      facilities: ["AC", "WiFi", "Music System", "GPS"],
      description:
        "Elegant and comfortable sedan perfect for business travel and small families.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "Free Cancellation",
      ],
    },
    {
      id: "3",
      type: "Tempo-Traveller",
      image: "/images/car/8.jpeg",
      rating: "4.7",
      reviews: "75",
      seating: "8 Seater",
      baseFare: "₹3500",
      perKm: "₹20/km",
      driverCharges: "Included",
      perDay: "₹5000",
      facilities: ["AC", "WiFi", "Music System", "GPS"],
      description:
        "Spacious minivan ideal for large families and group travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "Free Cancellation",
      ],
    },
    {
      id: "4",
      type: "Luxury-Bus",
      image: "/images/car/5.jpeg",
      rating: "4.7",
      reviews: "75",
      seating: "8 Seater",
      baseFare: "₹3500",
      perKm: "₹20/km",
      driverCharges: "Included",
      perDay: "₹5000",
      facilities: ["AC", "WiFi", "Music System", "GPS"],
      description:
        "Spacious minivan ideal for large families and group travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "Free Cancellation",
      ],
    },
  ];

  export const phoneNumber = "7668570551";


  