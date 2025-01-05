import React from "react";
import {
  Star,
  Calendar,
  MapPin,
  Briefcase,
  Coffee,
  User,
  ChevronRight,
  Car,
  Users,
  Map,
  Package
} from "lucide-react";
import { useNavigate } from "react-router";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicles",
      description: "Wide range of comfortable and reliable vehicles",
      items: ["Luxury Cars", "SUVs", "Tempo Traveller", "Mini Bus"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tour Guide",
      description: "Expert guides for an enriching experience",
      items: ["Local Experts", "Multilingual Guides", "Cultural Insights", "Custom Tours"]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Tour Packages",
      description: "Curated experiences for every traveler",
      items: ["City Tours", "Adventure Trips", "Cultural Tours", "Weekend Getaways"]
    }
  ];

  const packages = [
    {
      title: "City Explorer",
      price: "₹1999",
      duration: "8 hours",
      features: ["Local sightseeing", "Professional driver", "Fuel included"],
    },
    {
      title: "Weekend Getaway",
      price: "₹4999",
      duration: "2 days",
      features: [
        "300km coverage",
        "Hotel recommendations",
        "Tourist spots guide",
      ],
    },
    {
      title: "Airport Transfer",
      price: "₹899",
      duration: "One-way",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance"],
    },
  ];

  const vehicles = [
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

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: "url('/images/about/about_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-white hover:text-yellow-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-xl">Services</span>
              </div>
            </li>
          </ol>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-8">Our Services</h1>
        </div>
      </nav>

      {/* All Services Section */}
      <section className="bg-gradient-to-b from-white to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">{service.icon}</div>
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Vehicles and Pricing Section */}
  <section className="bg-gradient-to-b from-white to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vehicles & Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="border-2 border-yellow-400 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-[40vh] object-contain object-center group-hover:opacity-80"
                  />
                   <div className="absolute top-4 left-4 text-white font-bold text-sm bg-black  px-4 py-1.5 rounded-full">
                    {vehicle.price}
                  </div>
                  </div>
                <div className="bg-[#facf2d87] py-4 px-6">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-yellow-100 rounded-lg">{vehicle.icon}</div>
                    <h3 className="text-lg font-semibold ml-3">{vehicle.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm text-start mt-2">{vehicle.description}</p>
                  <div className="py-2  text-end">
                  <button className="w-fit px-3 mt-3  bg-black text-white rounded-md py-2 hover:bg-yellow-400 hover:text-black transition-all">
                    Book Now
                  </button>
                </div>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gradient-to-b from-white to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="border-2 border-yellow-400 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="bg-yellow-50 p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <div className="text-2xl font-bold">{pkg.price}</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    {pkg.duration}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-black text-white rounded-md py-2 hover:bg-yellow-400 hover:text-black transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 tracking-[0.07rem] text-gray-700">Contact us today to customize your perfect travel experience</p>
          <button                 onClick={() => navigate("/contact")}
 className="bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;