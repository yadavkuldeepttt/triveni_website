import React from "react";
import { Star, Calendar, MapPin, Briefcase, Coffee, User } from "lucide-react";

const ServicesPage = () => {
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

  const destinations = [
    {
      city: "Mumbai",
      spots: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
      price: "Starting ₹799",
      image: "/images/destinations/mumbai.jpg",
    },
    {
      city: "Delhi",
      spots: ["Red Fort", "Qutub Minar", "India Gate"],
      price: "Starting ₹699",
      image: "/images/destinations/delhi.jpg",
    },
    {
      city: "Bangalore",
      spots: ["Lalbagh", "MG Road", "Cubbon Park"],
      price: "Starting ₹599",
      image: "/images/destinations/bangalore.jpg",
    },
  ];

  const features = [
    {
      title: "24/7 Customer Support",
      description: "We provide round-the-clock assistance for your peace of mind.",
      icon: <User className="w-6 h-6 text-[#FACF2D]" />,
    },
    {
      title: "Expert Guides",
      description: "Our experienced guides ensure an informative and enjoyable experience.",
      icon: <Briefcase className="w-6 h-6 text-[#FACF2D]" />,
    },
    {
      title: "Secure Payments",
      description: "We offer safe and secure payment methods for your convenience.",
      icon: <Coffee className="w-6 h-6 text-[#FACF2D]" />,
    },
    {
      title: "Customizable Packages",
      description: "Create personalized travel packages to suit your unique needs.",
      icon: <Calendar className="w-6 h-6 text-[#FACF2D]" />,
    },
  ];


  const testimonials = [
    {
      name: "Rohit Sharma",
      feedback:
        "The City Explorer package was a delight! The driver was professional, and the car was clean and comfortable. Highly recommend!",
      image: "/images/testimonials/rohit.jpg",
    },
    {
      name: "Ananya Gupta",
      feedback:
        "I opted for the Weekend Getaway package, and it was an amazing experience. The suggested spots were breathtaking!",
      image: "/images/testimonials/ananya.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider text-yellow-800">
          Explore Our Premium Services
        </h2>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border-2 border-[#FACF2D] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
            >
              <div className="bg-[#facf2d87] p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <div className="text-2xl font-bold">{pkg.price}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[#FACF2D]" />
                  {pkg.duration}
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Star className="w-4 h-4 text-[#FACF2D] mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-black text-white rounded-md py-2 hover:bg-[#FACF2D] hover:text-black transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Destinations */}
        <h3 className="text-2xl text-center font-semibold mb-8 text-yellow-800">
          Popular Destinations
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">{dest.city}</h4>
                <ul className="space-y-2 mb-4">
                  {dest.spots.map((spot, i) => (
                    <li key={i} className="flex items-center">
                      <MapPin className="w-4 h-4 text-[#FACF2D] mr-2" />
                      <span>{spot}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold text-[#FACF2D]">
                    {dest.price}
                  </div>
                  <button className="px-4 py-1 bg-black text-white rounded-md hover:bg-[#FACF2D] hover:text-black">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Features Section */}
    
        <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Section */}
        <div className="flex items-center justify-between mb-16">
          {/* Image Side */}
          <div className="flex-1 bg-cover bg-center h-[400px] rounded-lg shadow-lg" style={{ backgroundImage: 'url("/images/feature-bg.jpg")' }}>
            {/* You can replace '/images/feature-bg.jpg' with the path of your desired image */}
          </div>

          {/* Features Content */}
          <div className="flex-1 pl-12">
            <h3 className="text-2xl text-yellow-800 font-semibold mb-8">
              Our Premium Features
            </h3>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-[#FACF2D] rounded-full flex justify-center items-center mr-6">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>

        {/* Customer Testimonials */}
        <h3 className="text-2xl text-center font-semibold mb-8 text-yellow-800">
          Hear from Our Happy Customers
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 bg-white shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>


        {/* FAQ Section */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h3 className="text-2xl text-center font-semibold mb-8 text-yellow-800">
      Frequently Asked Questions
    </h3>
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          What is included in the packages?
        </h4>
        <p className="text-gray-600">
          Our packages include transportation, professional drivers, fuel, and
          a detailed itinerary. Specific features may vary based on the package
          selected.
        </p>
      </div>
      <div className="border-b pb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          How can I make a booking?
        </h4>
        <p className="text-gray-600">
          You can book any of our services directly from the website by clicking
          on the "Book Now" button under each package or destination.
        </p>
      </div>
      <div className="border-b pb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          Are the packages refundable?
        </h4>
        <p className="text-gray-600">
          Refund policies depend on the specific package. Please refer to the
          terms and conditions for more details.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Call to Action Section */}
<div className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h3 className="text-3xl font-semibold mb-4 text-yellow-800">
      Ready to Explore? Book Your Trip Today!
    </h3>
    <p className="text-lg text-gray-700 mb-8">
      Whether you're looking for a local adventure or a weekend getaway, we
      have the perfect package for you.
    </p>
    <button className="bg-black text-white rounded-md py-3 px-6 hover:bg-[#FACF2D] hover:text-black transition-all">
      Book Now
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default ServicesPage;
