import React from "react";
import { Star, Calendar, MapPin } from "lucide-react";

const ServicesSection = () => {
  const packages = [
    {
      title: "City Explorer",
      price: "₹1999",
      duration: "8 hours",
      features: ["Local sightseeing", "Professional driver", "Fuel included"]
    },
    {
      title: "Weekend Getaway",
      price: "₹4999",
      duration: "2 days",
      features: ["300km coverage", "Hotel recommendations", "Tourist spots guide"]
    },
    {
      title: "Airport Transfer",
      price: "₹899",
      duration: "One-way",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance"]
    }
  ];

  const destinations = [
    {
      city: "Mumbai",
      spots: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
      price: "Starting ₹799",
      image: "/images/destinations/mumbai.jpg"
    },
    {
      city: "Delhi",
      spots: ["Red Fort", "Qutub Minar", "India Gate"],
      price: "Starting ₹699",
      image: "/images/destinations/delhi.jpg"
    },
    {
      city: "Bangalore",
      spots: ["Lalbagh", "MG Road", "Cubbon Park"],
      price: "Starting ₹599",
      image: "/images/destinations/bangalore.jpg"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center tracking-[0.06rem] font-semibold mb-12 hover:text-[#FACF2D] transition-colors duration-300">
          Our Services & Packages
        </h2>

        {/* Tour Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="border-2 border-[#FACF2D] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
            >
              <div className="bg-[#facf2d87] p-6">
                <h3 className="text-xl font-semibold tracking-[0.05rem] mb-2">{pkg.title}</h3>
                <div className="text-2xl font-bold text-black">{pkg.price}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#FACF2D]" />
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center group">
                      <Star className="w-4 h-4 text-[#FACF2D] mr-2 group-hover:scale-110 transition-transform" />
                      <span className="text-sm group-hover:text-[#FACF2D] transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-black text-white rounded-md py-2 text-sm tracking-[0.06rem] hover:bg-[#FACF2D] hover:text-black transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Destinations */}
        <h3 className="text-2xl text-center font-semibold mb-8 hover:text-[#FACF2D] transition-colors duration-300">
          Popular Destinations
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.city} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 group-hover:text-[#FACF2D] transition-colors">{dest.city}</h4>
                <ul className="space-y-2 mb-4">
                  {dest.spots.map((spot, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 group">
                      <MapPin className="w-4 h-4 mr-2 text-[#FACF2D] group-hover:scale-110 transition-transform" />
                      <span className="group-hover:text-black transition-colors">{spot}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-[#FACF2D]">{dest.price}</div>
                  <button className="px-4 py-1 bg-black text-white rounded-md hover:bg-[#FACF2D] hover:text-black transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;