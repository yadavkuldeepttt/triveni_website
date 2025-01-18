import React, { useState } from "react";
import { Car, CheckCircle, Shield, AlertTriangle, Star } from "lucide-react";
import { vehiclesServices } from "../../../utils/data";

const seatingOptions = {
  "Tempo Traveller": [
    { seats: 12, priceMultiplier: 1 },
    { seats: 16, priceMultiplier: 1.05 },
    { seats: 20, priceMultiplier: 1.125 },
    { seats: 26, priceMultiplier: 1.15 },
  ],
  Bus: [
    { seats: 35, priceMultiplier: 1 },
    { seats: 40, priceMultiplier: 1.05 },
    { seats: 45, priceMultiplier: 1.125 },
    { seats: 49, priceMultiplier: 1.15 },
    { seats: 55, priceMultiplier: 1.175 },
  ],
  "Luxury Bus": [
    { seats: 35, priceMultiplier: 1 },
    { seats: 40, priceMultiplier: 1.05 },
    { seats: 45, priceMultiplier: 1.125 },
    { seats: 49, priceMultiplier: 1.15 },
    { seats: 55, priceMultiplier: 1.175 },
  ],
};

const CabSelection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(null);

  const calculatePrice = (vehicle, seats) => {
    if (!vehicle) return null;

    const perKmRate = parseInt(vehicle.perKm.replace(/[^0-9]/g, ""));
    const driverCharges = parseInt(vehicle.driverCharges?.replace(/[^0-9]/g, "") || "500");
    const cancellationCharge = parseInt(vehicle.cancellationCharge?.replace(/[^0-9]/g, "") || "500");

    const seatingOption = seatingOptions[vehicle.type]?.find(
      (option) => option.seats === seats
    );
    const multiplier = seatingOption ? seatingOption.priceMultiplier : 1;

    const tax = 0.18; // 18% GST
    const basePrice = perKmRate * multiplier;
    const taxAmount = basePrice * tax;

    return {
      perKm: Math.round(basePrice),
      driverCharges,
      cancellationCharge,
      tax: taxAmount,
    };
  };

  const benefits = {
    Sedan: [
      "Perfect for small families",
      "Comfortable city travel",
      "Excellent mileage",
      "Easy parking and maneuverability",
    ],
    SUV: [
      "Spacious interiors",
      "Higher ground clearance",
      "Perfect for rough terrain",
      "Ideal for long journeys",
    ],
    "Tempo Traveller": [
      "Cost-effective for groups",
      "Comfortable for long journeys",
      "Ample luggage space",
      "Professional drivers",
    ],
    "Luxury Bus": [
      "Premium comfort",
      "Entertainment systems",
      "On-board facilities",
      "Perfect for large groups",
    ],
    Bus: [
      "Economic group travel",
      "Reliable performance",
      "Professional service",
      "Ideal for corporate groups",
    ],
  };

  const price = calculatePrice(selectedVehicle, selectedSeats);

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <Car className="w-5 h-5 text-yellow-500" />
        Select Your Cab
      </h3>

      {/* Vehicle Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {vehiclesServices.map((vehicle) => (
          <div
            key={vehicle.type}
            onClick={() => {
              setSelectedVehicle(vehicle);
              setSelectedSeats(null);
            }}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg ${
              selectedVehicle?.type === vehicle.type
                ? "border-yellow-500 bg-yellow-50"
                : "border-gray-200 hover:border-yellow-200"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">{vehicle.type}</h3>
                <p className="text-gray-600">{vehicle.seating}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{vehicle.rating}</span>
                  <span className="text-sm text-gray-500">({vehicle.reviews} reviews)</span>
                </div>
              </div>
              <Car
                className={`w-8 h-8 ${
                  selectedVehicle?.type === vehicle.type
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Per KM</span>
                <span className="font-medium">{vehicle.perKm}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Per Day Limit</span>
                <span className="font-medium">{vehicle.perDayLimit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seating Options */}
      {selectedVehicle && seatingOptions[selectedVehicle.type] && (
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-4">Select Seating Capacity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seatingOptions[selectedVehicle.type].map((option) => (
              <button
                key={option.seats}
                onClick={() => setSelectedSeats(option.seats)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedSeats === option.seats
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-gray-200 hover:border-yellow-200"
                }`}
              >
                <div className="font-semibold">{option.seats} Seater</div>
                <div className="text-sm text-gray-600">
                  {(option.priceMultiplier * 100 - 100).toFixed(0)}% premium
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price Details */}
      {selectedVehicle && (
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-bold mb-4">Price Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Per Kilometer Rate</span>
              <span className="font-medium">₹{price?.perKm || selectedVehicle.perKm}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Driver Charges</span>
              <span className="font-medium">{selectedVehicle.driverCharges}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Cancellation Charge</span>
              <span className="font-medium text-red-600">{selectedVehicle.cancellationCharge}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>GST (18%)</span>
              <span>Applicable on final amount</span>
            </div>
            <div className="pt-3 border-t">
              <div className="text-sm text-gray-600">
                * Final price will be calculated based on total kilometers traveled
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features and Benefits */}
      {selectedVehicle && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-500" />
              Features
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {selectedVehicle.facilities.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              Why Choose {selectedVehicle.type}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {benefits[selectedVehicle.type].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabSelection;