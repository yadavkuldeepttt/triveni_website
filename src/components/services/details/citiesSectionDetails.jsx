import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Car,
  X,
  Clock,
  Shield,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  MapIcon,
  ParkingCircle,
  Users,
} from "lucide-react";
import { cityDetails } from "../../../utils/data";
import CabSelection from "../cities/cabSelectionCities";
import TouristSpots from "../cities/touristSpots";
import TouristSpotsModal from "../details/touristSpotsModal";
import { useNavigate } from "react-router-dom";

const CitiesSectionDetails = ({ city, onClose }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [showTouristModal, setShowTouristModal] = useState(false);

  const details = cityDetails[city.name] || cityDetails.Delhi;

  const calculatePrice = () => {
    if (!selectedVehicle) return null;
    const base = parseInt(selectedVehicle.baseFare.replace(/[^0-9]/g, ""));
    const multiplier = passengers > 4 ? 1.2 : 1;
    return {
      base: base * multiplier,
      perKm: selectedVehicle.perKm,
      perDay:
        parseInt(selectedVehicle.perDay.replace(/[^0-9]/g, "")) * multiplier,
    };
  };

  const price = calculatePrice();

  const navigate = useNavigate();

      const handleViewMore = () => {
        navigate("/tourist-spots", { state: { cityName: city.name, cityDetails: details } });
      };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-3 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{city.name}</h2>
            <p className="text-gray-600">{city.coverage}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* cab selection */}
          <CabSelection />

          {/* Coverage Areas */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-yellow-500" />
              Coverage Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Full Coverage
                </div>
                <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                  {details.coverage.fullCoverage.map((area) => (
                    <li key={area} className="text-sm text-gray-600">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  Limited Coverage
                </div>
                <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                  {details.coverage.limitedCoverage.map((area) => (
                    <li key={area} className="text-sm text-gray-600">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-medium flex items-center gap-2">
                  <X className="w-4 h-4 text-red-600" />
                  Restricted Areas
                </div>
                <ul className="mt-2 flex flex-col ps-3 items-start   space-y-1">
                  {details.coverage.restricted.map((area) => (
                    <li key={area} className="text-sm text-gray-600">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Peak Hours */}
          <div className="space-y-4">
            <h3 className="text-xl max-sm:text-sm font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-500" />
              Peak Hours & Pricing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">Morning Peak</div>
                <div className="text-gray-600">{details.peakHours.morning}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">Evening Peak</div>
                <div className="text-gray-600">{details.peakHours.evening}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">Surge Pricing</div>
                <div className="text-gray-600">
                  {details.peakHours.surcharge}
                </div>
              </div>
            </div>
          </div>

          {/* Safety Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-500" />
              Safety Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.safetyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Routes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <ParkingCircle className="w-5 h-5 text-yellow-500" />
              Popular Routes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.popularRoutes.map((route) => (
                <div
                  key={route}
                  className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>{route}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tourist Spots */}
           <TouristSpots cityName={city.name}/>

          {/* Other existing sections... */}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t px-1 md:px-6 py-3 flex justify-between items-center">
          <div className=" text-xs md:text-sm text-gray-600">
            * Prices and availability may vary
          </div>
          <div className="flex items-center gap-1 md:gap-2">
          <button
          className="bg-blue-400 flex gap-1 items-center px-2 text-xs md:px-4 py-1.5 md:text-sm rounded-lg hover:bg-blue-500"
          onClick={()=> handleViewMore()}
        >
          View More
        </button>
            <button className="bg-yellow-400 flex gap-1 items-center px-2 text-xs md:px-4 py-1.5 md:text-sm rounded-lg hover:bg-yellow-500">
              <Phone className="md:w-4 md:h-4 w-3 h-3" /> Book Now
            </button>
            <button
              onClick={onClose}
              className="bg-black text-white px-4 py-1.5 text-sm rounded-lg hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesSectionDetails;
