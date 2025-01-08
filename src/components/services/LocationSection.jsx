import React from 'react';
import { MapPin, Phone, Car } from 'lucide-react';

const cities = [
  { name: 'Delhi', region: 'North India', coverage: 'NCR Region', popularity: 'high' },
  { name: 'Agra', region: 'North India', coverage: 'City + 50km radius', popularity: 'high' },
  { name: 'Jaipur', region: 'North India', coverage: 'Pink City Area', popularity: 'high' },
  { name: 'Haridwar', region: 'North India', coverage: 'Temple Circuit', popularity: 'medium' },
  { name: 'Chandigarh', region: 'North India', coverage: 'Tri-city Area', popularity: 'medium' },
  { name: 'Shimla', region: 'North India', coverage: 'Hill Station Tours', popularity: 'high' },
  { name: 'Manali', region: 'North India', coverage: 'Adventure Routes', popularity: 'high' },
  { name: 'Amritsar', region: 'North India', coverage: 'Golden Temple Area', popularity: 'medium' },
  { name: 'Dehradun', region: 'North India', coverage: 'Valley Region', popularity: 'medium' },
  { name: 'Rishikesh', region: 'North India', coverage: 'Spiritual Circuit', popularity: 'high' },
  { name: 'Jodhpur', region: 'North India', coverage: 'Blue City Area', popularity: 'medium' },
  { name: 'Udaipur', region: 'North India', coverage: 'Lake City Region', popularity: 'high' },
  { name: 'Ayodhya', region: 'North India', coverage: 'Temple City', popularity: 'high' },
  { name: 'Ahmedabad', region: 'West India', coverage: 'City + Suburbs', popularity: 'medium' }
];

const LocationsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Service Locations</h2>
          <p className="text-gray-600">Available across major cities in North India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div key={city.name} 
                 className={`relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow
                            ${city.popularity === 'high' ? 'border-2 border-yellow-400' : ''}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{city.coverage}</p>
                </div>
                <MapPin className={`w-6 h-6 ${city.popularity === 'high' ? 'text-yellow-400' : 'text-gray-400'}`} />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Car className="w-4 h-4 mr-1" />
                  <span>24/7</span>
                </div>
                <button className="flex items-center text-sm font-medium text-black hover:text-yellow-600">
                  <Phone className="w-4 h-4 mr-1" />
                  Book Now
                </button>
              </div>

              {city.popularity === 'high' && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;