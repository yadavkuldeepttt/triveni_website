import { CheckCircle2 } from "lucide-react";
import React from "react";

function WhyBook() {
  return (
    <div>
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
}

export default WhyBook;
