import React from 'react';
import { MapPin, Phone, Car,  X, Clock, Shield, CreditCard, AlertTriangle, CheckCircle, MapIcon, ParkingCircle } from 'lucide-react';
import {cityDetails} from "../../../utils/data.js";

const CitiesSectionDetails = ({ city, onClose }) => {
  const details = cityDetails[city.name] || cityDetails.Delhi; // Fallback to Delhi if city details not found


  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scroll" >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-3 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{city.name}</h2>
            <p className="text-gray-600">{city.coverage}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">

            {/* Cab Types */}
            <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Car className="w-5 h-5 text-yellow-500" />
              Available Cabs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">Cab Types</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {details.cabs.types.map(type => (
                    <span key={type} className="bg-white px-3 py-1.5 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">Features</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {details.cabs.features.map(feature => (
                    <span key={feature} className="bg-white px-3 py-1.5 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fares Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-yellow-500" />
              Fare Structure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(details.fares).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>

        
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
                    {details.coverage.fullCoverage.map(area => (
                      <li key={area} className="text-sm text-gray-600">{area}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    Limited Coverage
                  </div>
                  <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                    {details.coverage.limitedCoverage.map(area => (
                      <li key={area} className="text-sm text-gray-600">{area}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    Restricted Areas
                  </div>
                  <ul className="mt-2 flex flex-col ps-3 items-start   space-y-1">
                    {details.coverage.restricted.map(area => (
                      <li key={area} className="text-sm text-gray-600">{area}</li>
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
                  <div className="text-gray-600">{details.peakHours.surcharge}</div>
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
              {details.safetyFeatures.map(feature => (
                <div key={feature} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
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
              {details.popularRoutes.map(route => (
                <div key={route} className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span>{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-3 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            * Prices and availability may vary
          </div>
          <div className="flex items-center gap-2">

          <button 
          onClick={handleClick}
          className="bg-yellow-400 flex gap-1 items-center px-4 py-1.5 text-sm rounded-lg hover:bg-yellow-600 hover:text-black transition-colors"
          >
           <Phone size={14}/> <span>Call Now</span>
          </button>
          <button 
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 text-sm rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
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