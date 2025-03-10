import React, { useState, useEffect } from "react";

// Hardcoded distances between major Indian cities (in km)
const cityDistances = {
  Delhi: {
    Mumbai: 1400,
    Bangalore: 2100,
    Kolkata: 1500,
    Chennai: 2200,
    Hyderabad: 1550,
  },
  Mumbai: {
    Delhi: 1400,
    Bangalore: 1000,
    Kolkata: 2050,
    Chennai: 1300,
    Hyderabad: 710,
  },
  Bangalore: {
    Delhi: 2100,
    Mumbai: 1000,
    Kolkata: 1850,
    Chennai: 350,
    Hyderabad: 570,
  },
  Kolkata: {
    Delhi: 1500,
    Mumbai: 2050,
    Bangalore: 1850,
    Chennai: 1650,
    Hyderabad: 1500,
  },
  Chennai: {
    Delhi: 2200,
    Mumbai: 1300,
    Bangalore: 350,
    Kolkata: 1650,
    Hyderabad: 630,
  },
  Hyderabad: {
    Delhi: 1550,
    Mumbai: 710,
    Bangalore: 570,
    Kolkata: 1500,
    Chennai: 630,
  },
};

const cabTypes = {
  sedan: {
    type: "Sedan",
    costPerKm: 10,
    includedKm: 1500,
    extraFarePerKm: 12,
    fuelCharges: "Included",
    driverCharges: "Included",
    nightCharges: "Included",
  },
  suv: {
    type: "SUV",
    costPerKm: 15,
    includedKm: 1400,
    extraFarePerKm: 18,
    fuelCharges: "Included",
    driverCharges: "Included",
    nightCharges: "Included",
  },
  tempoTraveller: {
    type: "Tempo Traveller",
    costPerKm: 20,
    includedKm: 1600,
    extraFarePerKm: 22,
    fuelCharges: "Included",
    driverCharges: "Included",
    nightCharges: "Included",
  },
  luxuryBus: {
    type: "Luxury Bus",
    costPerKm: 30,
    includedKm: 1700,
    extraFarePerKm: 35,
    fuelCharges: "Included",
    driverCharges: "Included",
    nightCharges: "Included",
  },
  bus: {
    type: "Bus",
    costPerKm: 25,
    includedKm: 1650,
    extraFarePerKm: 28,
    fuelCharges: "Included",
    driverCharges: "Included",
    nightCharges: "Included",
  },
};

const BookingTrip = ({
  isOpen,
  onClose,
  bookingDetails,
  selectedCab,
  setSelectedCab,
  onConfirm,
}) => {
  const { formData, selectedCity } = bookingDetails;
  const [distance, setDistance] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculate distance based on hard-coded values
  useEffect(() => {
    if (selectedCity && formData?.destinationCity) {
      const distanceValue =
        cityDistances[selectedCity]?.[formData.destinationCity] || null;
      setDistance(distanceValue);
    }
  }, [selectedCity, formData?.destinationCity]);

  // Calculate total cost when cab is selected
  useEffect(() => {
    if (distance && selectedCab) {
      const cab = cabTypes[selectedCab];
      if (cab) {
        const { costPerKm, includedKm, extraFarePerKm } = cab;

        let calculatedCost = 0;

        // Calculate base cost
        if (distance <= includedKm) {
          calculatedCost = distance * costPerKm;
        } else {
          // Calculate extra cost for distance exceeding included kilometers
          const extraDistance = distance - includedKm;
          calculatedCost =
            includedKm * costPerKm + extraDistance * extraFarePerKm;
        }

        setTotalCost(calculatedCost);
      }
    }
  }, [distance, selectedCab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white overflow-auto min-h-[70vh] rounded-lg w-full max-w-2xl relative">
        <div className="p-6 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">Booking Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              ✖️
            </button>
          </div>

          {/* Service Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Pickup</p>
                <p className="mt-1 capitalize">{selectedCity || "N/A"}</p>
              </div>
              {formData?.destinationCity && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Destination</p>
                  <p className="mt-1 capitalize">{formData.destinationCity}</p>
                </div>
              )}
              {formData?.destinationCity && (
                <div>
                  <p className="text-sm font-medium text-gray-500">pickup Date</p>
                  <p className="mt-1 capitalize">{formData.pickupDate}</p>
                </div>
              )}
              {formData?.destinationCity && (
                <div>
                  <p className="text-sm font-medium text-gray-500">pickupTime</p>
                  <p className="mt-1 capitalize">{formData.pickupTime}</p>
                </div>
              )}
              {distance && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Distance</p>
                  <p className="mt-1">{distance} km</p>
                </div>
              )}
            </div>
          </div>

          {/* Cab Selection */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Select Your Cab</h3>
            <select
              value={selectedCab || ""}
              onChange={(e) => setSelectedCab(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg"
            >
              <option value="">Choose a cab type</option>
              {Object.entries(cabTypes).map(([key, cab]) => (
                <option key={key} value={key}>
                  {cab.type} - ₹{cab.costPerKm}/km
                </option>
              ))}
            </select>
          </div>

          {/* Total Cost */}
          {totalCost !== null && (
            <div className="mt-4 font-semibold text-lg">
              Total Cost: ₹{totalCost.toFixed(2)}
            </div>
          )}

          {selectedCab && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Selected Car Details</h3>
              <div className="text-gray-800 space-y-2">
                <p >
                  <strong >Car Type:</strong> <span className="text-green-600">{cabTypes[selectedCab].type}</span>
                </p>
                <p>
                  <strong>Cost per Km:</strong> <span className="text-green-600"> ₹{cabTypes[selectedCab].costPerKm}</span>
                </p>
                <p>
                  <strong>Included Km:</strong> <span className="text-green-600">{cabTypes[selectedCab].includedKm} km</span>
                </p>
                <p>
                  <strong>Extra Fare:</strong> <span className="text-green-600">₹{cabTypes[selectedCab].extraFarePerKm}/km</span>
                </p>
                <p>
                  <strong>Fuel Charges:</strong> <span className="text-green-600"> {cabTypes[selectedCab].fuelCharges}</span>
                </p>
                <p>
                  <strong>Driver Charges:</strong> <span className="text-green-600">{cabTypes[selectedCab].driverCharges}</span>
                </p>
                <p>
                  <strong>Night Charges:</strong> <span className="text-green-600">{cabTypes[selectedCab].nightCharges} </span>
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 py-3 px-4 rounded-lg text-white ${
                selectedCab ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
              }`}
              disabled={!selectedCab}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTrip;
