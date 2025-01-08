import React, { useState } from "react";
import {
  Star,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";
import { tourPackages } from "../../utils/data";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, tourPackages.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-12">
          Featured Tour Packages
        </h2>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {currentIndex < tourPackages.length - 3 && (
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {tourPackages.map((pkg, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#FACF2D] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {pkg.title}
                      </h3>
                      <div className="text-2xl font-bold text-[#FACF2D] mb-3">
                        {pkg.price}
                      </div>

                      <div className="space-y-2 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#FACF2D]" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-[#FACF2D]" />
                          <span>
                            {pkg.startingPoint} to {pkg.destination}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-[#FACF2D]" />
                          <span>Departure: {pkg.departureDate}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-2">
                        <button className="flex-1 bg-black text-white rounded-md py-2 text-sm font-semibold hover:bg-[#FACF2D] hover:text-black transition-all duration-300">
                          Book Now
                        </button>
                        <Link
                          to={`/tour-package/${pkg.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="flex-1"
                        >
                          <button className="w-full border-2 border-[#FACF2D] text-black rounded-md py-2 text-sm font-semibold hover:bg-[#FACF2D] transition-all duration-300">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
