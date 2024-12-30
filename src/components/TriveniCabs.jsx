import React, { useState } from 'react';
import { Car, MapPin, Calendar, Clock, Info } from 'lucide-react';

const TriveniCabs = () => {
  const [tripType, setTripType] = useState('local');
  
  const tripTypes = [
    // { id: 'round', label: 'Round Trip', icon: Car },
    // { id: 'oneway', label: 'Oneway', icon: Car },
    { id: 'outstation', label: 'Outstation', icon: Car },
    { id: 'local', label: 'Local', icon: Car },
    { id: 'airport', label: 'Airport', icon: Car },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
 
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Book Your Ride</h2>
            
          
       
          </div>

          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Triveni Cabs, your trusted travel partner dedicated to providing 
                  seamless, reliable, and comfortable transportation solutions. Whether you're 
                  planning a quick ride across the city, an outstation journey, or an airport 
                  transfer, we are here to ensure your travel is smooth, affordable, and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TriveniCabs;