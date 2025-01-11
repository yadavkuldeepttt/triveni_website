import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  Users,
  Star,
  ShieldCheck,
  Calendar,
  Clock,
  Map,
  Shield,
  Car,
  ChevronRight,
} from "lucide-react";
import { phoneNumber, vehicleDetails } from "../../../utils/data";

const VehicleDetails = () => {
  const { slug } = useParams();
  console.log(slug, "slug");


  // Find the selected selectedVehicles based on the ID from URL params
  const selectedVehicles = vehicleDetails.find((v) => v.type.toLowerCase() === slug) || vehicleDetails[0];
  console.log(selectedVehicles,"selected vehicles..............................");
  
  // call us
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-white to-[#FFFCD1] "
    >
      {/* Hero Banner */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: `url('/images/about/about_banner.jpg')`,
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
                <span className="text-yellow-400 text-xl">Vehicle Details</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.07rem] md:text-3xl font-bold text-white mt-8">
            Book with Ease, Travel with Joy.{" "}
          </h1>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Image */}
          <div className="relative h-96">
            <img
              src={selectedVehicles.image}
              alt={selectedVehicles.type}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                {selectedVehicles.type}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-2 font-semibold">
                    {selectedVehicles.rating}
                  </span>
                  <span className="ml-1">
                    ({selectedVehicles.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5" />
                  <span className="ml-2">{selectedVehicles.seating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Vehicle Details</h2>
                <p className="text-gray-600 mb-8">
                  {selectedVehicles.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Base Fare</p>
                    <p className="font-bold text-lg">
                      {selectedVehicles.baseFare}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Per KM</p>
                    <p className="font-bold text-lg">
                      {selectedVehicles.perKm}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Driver</p>
                    <p className="font-bold text-lg">
                      {selectedVehicles.driverCharges}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Per Day</p>
                    <p className="font-bold text-lg">
                      {selectedVehicles.perDay}
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedVehicles.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <Shield className="w-5 h-5 text-yellow-400" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gray-50 p-6 rounded-2xl sticky top-8"
                >
                  <h3 className="text-2xl font-semibold mb-6">Quick Booking</h3>
                  <button onClick={handleClick} className="block w-full bg-black text-white py-2 rounded-xl font-semibold text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span>Instant Confirmation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                      <span>Free Cancellation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Map className="w-5 h-5 text-yellow-400" />
                      <span>24/7 Customer Support</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VehicleDetails;
