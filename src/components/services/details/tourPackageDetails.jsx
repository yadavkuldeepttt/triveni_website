import React, { useState } from "react";
import { Link, useParams } from "react-router";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Car,
  Star,
  Coffee,
  BedDouble,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { tourDetails } from "../../../utils/data";

const TourPackageDetails = () => {
  const { slug } = useParams();
  const [activeDay, setActiveDay] = useState(null);

  const packageInfo = tourDetails[slug];

  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white">
      <motion.div
        className="relative h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={packageInfo.image}
          alt={packageInfo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70">
          <motion.div
            className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16 text-white"
            {...fadeInUp}
          >
            <h1 className="text-4xl font-bold mb-6 tracking-[0.07rem]">
              {packageInfo.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm tracking-[0.05rem]">
              <motion.div
                className="flex items-center bg-black/30 px-3  rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-4 h-4 mr-2" />
                {packageInfo.duration}
              </motion.div>
              <motion.div
                className="flex items-center bg-black/30 px-3  rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 mr-2" />
                {packageInfo.startingPoint} to {packageInfo.destination}
              </motion.div>
              <motion.div
                className="text-xl font-bold bg-[#FACF2D] text-black px-6 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {packageInfo.price}{" "}
                <span className="text-sm font-normal">per person</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-16">
            <motion.section
              {...fadeInUp}
              className="bg-yellow-100 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                Overview
              </h2>
              <p className="text-yellow-900 text-lg leading-relaxed">
                {packageInfo.overview}
              </p>
            </motion.section>

            <motion.section {...fadeInUp} className="space-y-6">
              <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-8">
                Itinerary
              </h2>
              {packageInfo.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  className=" bg-gradient-to-r from-yellow-50 to-bg-white py-3 px-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setActiveDay(activeDay === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <div>
                      <h3 className="font-semibold w-fit text-xl text-yellow-900">
                        {day.day}: {day.title}
                      </h3>
                      <motion.p
                        className="text-gray-600 mt-2 "
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeDay === index ? "auto" : 0,
                          opacity: activeDay === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {day.details}
                      </motion.p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
                        activeDay === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.section>

            <motion.section
              {...fadeInUp}
              className="bg-yellow-100 p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                Accommodation
              </h2>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl mb-4">
                  {packageInfo.accommodation.name}
                </h3>
                <div className="flex items-center mb-6">
                  {[...Array(parseInt(packageInfo.accommodation.rating))].map(
                    (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star
                          className="w-6 h-6 text-[#FACF2D]"
                          fill="#FACF2D"
                        />
                      </motion.div>
                    )
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {packageInfo.accommodation.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FACF2D] flex items-center justify-center mr-3">
                        <Coffee className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          <div className="md:col-span-1">
            <motion.div
              className="sticky top-4 bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Package Inclusions
              </h2>
              <ul className="space-y-4">
                {packageInfo.inclusions.map((inclusion, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-[#FACF2D] mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{inclusion}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                to={`/tour-package/${packageInfo.title
                  .toLowerCase()
                  .replace(/ /g, "-")}/book`}
              >
                <motion.button
                  className="w-full mt-8 bg-[#FACF2D] text-black py-2 rounded-xl font-semibold text-lg
                hover:bg-black hover:text-white transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageDetails;
