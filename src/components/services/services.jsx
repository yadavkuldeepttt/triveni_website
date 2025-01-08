import React, { useState } from "react";
import {
  Star,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";
import { services, tourPackages, vehicles } from "../../utils/data";
import VehicleServices from "./VehicleServices";
import LocationsSection from "./LocationSection";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const maxIndex = tourPackages.length - getVisibleSlides();

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {/* // features package */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 md:mb-12">
            Featured Tour Packages
          </h2>

          <div className="relative">
            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / getVisibleSlides())
                  }%)`,
                }}
              >
                {tourPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                      <div className="relative">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-40 md:h-48 object-cover"
                        />
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#FACF2D] text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                          {pkg.category}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {pkg.title}
                        </h3>
                        <div className="text-xl md:text-2xl font-bold text-[#FACF2D] mb-3">
                          {pkg.price}
                        </div>

                        <div className="space-y-2 text-gray-600 text-xs md:text-sm">
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

                        <div className="mt-4 md:mt-6 flex gap-2">
                          <button className="flex-1 bg-black text-white rounded-md py-1.5 md:py-2 text-xs md:text-sm font-semibold hover:bg-[#FACF2D] hover:text-black transition-all duration-300">
                            Book Now
                          </button>
                          <Link
                            to={`/tour-package/${pkg.title
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="flex-1"
                          >
                            <button className="w-full border-2 border-[#FACF2D] text-black rounded-md py-1.5 md:py-2 text-xs md:text-sm font-semibold hover:bg-[#FACF2D] transition-all duration-300">
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
      {/* all services */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 md:mb-12">
            All Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs md:text-sm"
                    >
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

      {/* vehicles services */}
      <VehicleServices />

      {/* location section */}
      {/* <LocationsSection /> */}

      {/* vehicles and pricing */}
      {/* <section className="bg-gradient-to-b from-white to-yellow-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Our Vehicles & Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="border-2 border-yellow-400 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 md:h-[40vh] object-contain object-center group-hover:opacity-80"
                  />
                  <div className="absolute top-4 left-4 text-white font-bold text-xs md:text-sm bg-black px-3 md:px-4 py-1 md:py-1.5 rounded-full">
                    {vehicle.price}
                  </div>
                </div>
                <div className="bg-[#facf2d87] py-3 md:py-4 px-4 md:px-6">
                  <div className="flex items-center mb-2">
                    <div className="p-1.5 md:p-2 bg-yellow-100 rounded-lg">
                      {vehicle.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold ml-3">
                      {vehicle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm text-start mt-2">
                    {vehicle.description}
                  </p>
                  <div className="py-2 text-end">
                    <button className="w-fit px-3 mt-2 md:mt-3 bg-black text-white rounded-md py-1.5 md:py-2 text-xs md:text-sm hover:bg-yellow-400 hover:text-black transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ServicesSection;
