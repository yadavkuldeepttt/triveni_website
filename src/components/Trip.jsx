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
        <h2 className="text-3xl text-center tracking-[0.06rem] font-semibold pt-14 pb-12">
          Book Your Ride
        </h2>

        <div className="grid grid-cols-3 border border-gray-100  sm:grid-cols-3   mt-4">
          {tripTypes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTripType(id)}
              className={`flex border-r border-gray-100 items-center font-semibold text-xl tracking-[0.05rem] justify-center px-3 py-2   ${
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
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Pickup Point
            </label>
            <div className="relative">
              <input
                type="text"
                className=" w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none"
                placeholder="Enter pickup location"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                className=" w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none"
                placeholder="Enter destination"
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Pickup Date
            </label>
            <div className="relative">
              <input
                type="date"
                className=" w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Time Picker */}
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Pick up Time
            </label>
            <div className="relative">
              <input
                type="time"
                className=" w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none"
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

        {/* explore cab button */}

        <div className="flex items-center justify-center mt-8">
          <button className="bg-black text-white rounded-md uppercase px-9 py-2 text-sm tracking-[0.06rem] rounded-md hover:text-yellow-400 transition">
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trip;
