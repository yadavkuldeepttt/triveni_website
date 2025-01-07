import React, { useState } from 'react';
import { ChevronRight, MapPin, Star, Calendar, Users, Globe, ArrowRight, Heart } from 'lucide-react';

const Destination = () => {
  const [activeTab, setActiveTab] = useState('destinations');

  const destinations = [
    {
      city: "Mumbai",
      tagline: "City of Dreams",
      description: "Experience the vibrant culture and modern lifestyle of India's financial capital",
      rating: 4.8,
      reviews: 1250,
      spots: [
        { name: "Gateway of India", image: "/api/placeholder/600/400", description: "Historic arch monument" },
        { name: "Marine Drive", image: "/api/placeholder/600/400", description: "Sea-facing promenade" },
        { name: "Elephanta Caves", image: "/api/placeholder/600/400", description: "Ancient cave temples" }
      ],
      packages: [
        {
          name: "Mumbai Heritage Walk",
          duration: "2 Days",
          highlights: ["Guided tours", "Local cuisine", "Heritage sites"],
          price: "₹7,999",
          image: "/images/about/about_banner.jpg"
        },
        {
          name: "Mumbai City Explorer",
          duration: "3 Days",
          highlights: ["Bollywood tour", "Street food", "Night safari"],
          price: "₹12,999",
          image: "/images/home/banner2.jpg"
                }
      ],
      heroImage: "/api/placeholder/1200/600",
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
        { name: "Red Fort", image: "/api/placeholder/600/400", description: "Mughal-era fortress" },
        { name: "Qutub Minar", image: "/api/placeholder/600/400", description: "UNESCO heritage site" },
        { name: "India Gate", image: "/api/placeholder/600/400", description: "War memorial" }
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
          image: "/images/home/banner2.jpg"
        }
      ],
      heroImage: "/api/placeholder/1200/600",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/about_banner.jpg"
            alt="Destinations Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative h-full  mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-3xl max-sm:text-[25px] md:text-4xl tracking-[0.06rem] font-bold text-white mb-6 animate-fade-in">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl max-sm:text-[15px] text-center text-gray-200  tracking-[0.06rem]  mb-8">
            Explore handpicked destinations with exclusive packages and unforgettable experiences
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-500 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Explore Now
            </button>
            <button className="px-8 py-3 bg-white/10 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              View Packages
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 flex justify-center bg-white shadow-md z-50">
        <div className="max-w-full mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['destinations', 'packages', 'spots'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 max-sm:py-4 px-4 max-sm:px-2 font-medium text-lg max-sm:text-[16px] border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-500'
                    : 'border-transparent text-gray-600 hover:text-yellow-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      {activeTab === 'destinations' && (
        <section className="py-16 px-4 bg-yellow-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={dest.heroImage}
                      alt={dest.city}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{dest.city}</h3>
                      <p className="text-gray-200 text-lg">{dest.tagline}</p>
                      <div className="flex items-center mt-4">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-2 text-white">{dest.rating}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-gray-300">{dest.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{dest.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                        Explore {dest.city}
                      </button>
                      <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <Heart className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      {activeTab === 'packages' && (
        <section className="py-16 px-4 bg-[#FFFCD1]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest) =>
                dest.packages.map((pkg, index) => (
                  <div
                    key={`${dest.city}-${index}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-yellow-600 font-semibold">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{dest.city}</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <ArrowRight className="w-4 h-4 text-yellow-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-yellow-600">{pkg.price}</span>
                        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Tourist Spots Section */}
      {activeTab === 'spots' && (
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-yellow-100">
          <div className="max-w-7xl mx-auto">
            {destinations.map((dest, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold mb-8">{dest.city}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {dest.spots.map((spot, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={spot.image}
                          alt={spot.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                        <p className="text-gray-600 mb-4">{spot.description}</p>
                        <button className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

  
    </div>
  );
};

export default Destination;