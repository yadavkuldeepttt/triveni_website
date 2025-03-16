import React from "react";
import { X, LocateIcon } from "lucide-react";
import { touristSpotsDescrition } from "../../../utils/data";
import VehicleServices from "../VehicleServices";

const TouristSpotsModal = ({ cityName, onClose }) => {
  const citySpots = touristSpotsDescrition[cityName] || [];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-lg animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold">{cityName} - Tourist Spots</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Embedded Tourist Spots Grid */}
          <div className="w-full max-w-6xl mx-auto p-4">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <LocateIcon className="w-5 h-5 text-yellow-500" />
              Popular Tourist Spots in {cityName}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {citySpots.map((spot) => (
                <div
                  key={spot.name}
                  className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={spot.image}
                    alt={`Image of ${spot.name}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{spot.name}</h4>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {spot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle Services Section */}
        <div className="p-6 border-t">
          <VehicleServices />
        </div>
      </div>
    </div>
  );
};

export default TouristSpotsModal;
