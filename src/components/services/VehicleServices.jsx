import React from "react";
import { Car, Users, CreditCard, Phone, CheckCircle2, Star, ShieldCheck, Navigation } from "lucide-react";
import { bookingSteps, vehiclesServices } from "../../utils/data";

const VehicleServices = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
      {/* Vehicle Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Our Premium Fleet
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our selection of well-maintained vehicles, perfect for any
          journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehiclesServices.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative"
            >
              {vehicle.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full z-10">
                  Popular Choice
                </div>
              )}

              <div className="relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-2 font-semibold">{vehicle.rating}</span>
                    <span className="mx-2 text-sm">
                      (4.1{vehicle.reviews})
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 ">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{vehicle.type}</h3>
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full ">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium ">
                      {vehicle.seating}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Base Fare</p>
                    <p className="font-bold text-sm">{vehicle.baseFare}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Per KM</p>
                    <p className="font-bold text-sm">{vehicle.perKm}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Driver</p>
                    <p className="font-bold text-sm">{vehicle.driverCharges}</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <p className="text-gray-600 text-sm mb-1">Per Day</p>
                    <p className="font-bold text-sm">{vehicle.perDay}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-yellow-400 mr-2" />
                    <h4 className="font-semibold">Included Features</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.facilities.map((facility, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs tracking-[0.05rem] px-3 py-1 rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-black text-white py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center">
                    Book Now
                  </button>
                  <button className="px-4 border-2 border-yellow-400 rounded-xl hover:bg-yellow-400 transition-colors">
                    <Navigation className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Book */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Book</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg"
              >
                <div className="text-yellow-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Book With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Experienced Drivers",
              description:
                "Professional, trained drivers with years of experience",
            },
            {
              title: "24/7 Support",
              description:
                "Round-the-clock customer support for your convenience",
            },
            {
              title: "Best Rates",
              description: "Competitive pricing with no hidden charges",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VehicleServices;
