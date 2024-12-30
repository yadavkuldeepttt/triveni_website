import { Car, MapPin, Calendar, Clock, Info } from "lucide-react";
import React, { useState } from "react";

function Trip() {
  const [tripType, setTripType] = useState("local");

  const tripTypes = [
    { id: "outstation", label: "Outstation", icon: Car },
    { id: "local", label: "Local", icon: Car },
    { id: "airport", label: "Airport", icon: Car },
  ];

  return (
    <div className=" ">
      {/* Trip Type Selection */}
      <div className="md:mx-[9rem]">
        <h2 className="text-2xl text-center font-semibold my-6">
          Book Your Ride
        </h2>

        <div className="grid grid-cols-3 border border-gray-300  sm:grid-cols-3   mt-4">
          {tripTypes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTripType(id)}
              className={`flex border-r border-gray-300 items-center font-semibold text-xl tracking-[0.05rem] justify-center px-3 py-2   ${
                tripType === id ? "bg-[#F9D02D]   " : "  bg-white "
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Form Fields */}
      <div className="w-full  mx-auto p-6 bg-[#FFFCD1]">
      <div className="flex flex-col lg:flex-row lg:items-end gap-6">
        {/* Pickup Location */}
        <div className="flex-1">
          <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
            Pickup Point
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-600 placeholder-gray-400 bg-white hover:bg-gray-50 focus:bg-white"
              placeholder="Enter pickup location"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="flex-1">
          <label className="block text-start text-sm font-semibold text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-600 placeholder-gray-400 bg-white hover:bg-gray-50 focus:bg-white"
              placeholder="Enter destination"
            />
          </div>
        </div>

        {/* Date Picker */}
        <div className="flex-1">
          <label className="block text-start text-lg tracking-[0.06rem] uppercase font-semibold text-gray-700 mb-2">
            Pickup Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="date"
              className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-600 bg-white hover:bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Time Picker */}
        <div className="flex-1">
          <label className="block text-start text-lg tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
            Pick up Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="time"
              className="pl-10 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-600 bg-white hover:bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Search Button */}
        {/* <div className="lg:ml-4 flex-none">
          <button className="w-full lg:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap">
            Search Rides
          </button>
        </div> */}
      </div>
    </div>


    </div>
  );
}

export default Trip;
