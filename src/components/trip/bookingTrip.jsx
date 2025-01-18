import React, { useState } from "react";

const BookingTrip = ({
  isOpen,
  onClose,
  bookingDetails,
  cabTypes,
  selectedCab,
  setSelectedCab,
  onConfirm,
}) => {
  const { tab, serviceType, serviceTypes, formData } = bookingDetails;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90  z-50 flex items-center justify-center p-4">
      <div className="bg-white overflow-auto min-h-[70vh] scroll max-sm:max-h-[55vh] rounded-lg w-full max-w-2xl relative">
        <div className="p-6 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-gray-900">
                Booking Details
              </h2>
              <p className="text-gray-500 mt-1">Review and confirm your trip</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Service Info Card */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M19 17H5V15H19V17ZM19 13H5V11H19V13ZM19 9H5V7H19V9Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-start flex-col">
                <h3 className="font-semibold text-lg">Service Details</h3>
                <p className="text-gray-500 text-sm">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} ·{" "}
                  {serviceTypes[tab].find((s) => s.id === serviceType)?.label}
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-200 my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Pickup</p>
                <p className="mt-1 capitalize">{formData.pickupPoint}</p>
              </div>
              {formData.destinationCity && (
                <div>
                  <p className="text-sm font-medium capitalize text-gray-500">
                    Destination
                  </p>
                  <p className="mt-1 capitalize">{formData.destinationCity}</p>
                </div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-500">Date & Time</p>
                <p className="mt-1">
                  {formData.pickupDate} at {formData.pickupTime}
                </p>
              </div>
              {formData.terminalNumber && (
                <div>
                  <p className="text-sm font-medium text-gray-500">Terminal</p>
                  <p className="mt-1">{formData.terminalNumber}</p>
                </div>
              )}
            </div>
          </div>

          {/* Cab Selection */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4">Select Your Cab</h3>
            <div className="relative text-gray-800">
              <button
                className="w-full text-gray-800 px-4 py-2 bg-white border rounded-lg text-left flex justify-between items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>
                  {selectedCab
                    ? cabTypes[selectedCab].type
                    : "Choose a cab type"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute text-gray-800 w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
                  {Object.entries(cabTypes).map(([key, cab]) => (
                    <button
                      key={key}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 flex justify-between items-center"
                      onClick={() => {
                        setSelectedCab(key);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span>{cab.type}</span>
                      <span className="text-gray-800">{cab.price}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {selectedCab && (
              <p className="mt-2 text-sm text-gray-800">
                {cabTypes[selectedCab].features}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                selectedCab
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
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
