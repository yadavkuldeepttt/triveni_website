import { Car } from "lucide-react";

export const vehicles = [
    {
      title: "Luxury Cars",
      price: "₹10,000/day",
      description: "Comfortable and stylish cars for a premium travel experience.",
      icon: <Car className="w-6 h-6 text-yellow-400" />,
      image:"/images/car/car2.png"

    },
    {
      title: "SUVs",
      price: "₹6,500/day",
      description: "Spacious and reliable SUVs for family and group travel.",
      icon: <Car className="w-6 h-6 text-green-400" />,
      image:"/images/car/car1.png"

    },
    {
      title: "Tempo Traveller",
      price: "₹8,500/day",
      description: "Perfect for group travel with ample space and comfort.",
      icon: <Car className="w-6 h-6 text-blue-400" />,
      image:"/images/car/car2.png"

    },
    {
      title: "Mini Bus",
      price: "₹12,000/day",
      description: "Ideal for large groups with comfortable seating and facilities.",
      icon: <Car className="w-6 h-6 text-red-400" />,
      image:"/images/car/car1.png"
    }
  ];