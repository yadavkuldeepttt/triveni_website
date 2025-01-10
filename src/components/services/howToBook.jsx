import React from 'react'
import { bookingSteps } from '../../utils/data'

function HowToBook() {
  return (
    <div>
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
      
    </div>
  )
}

export default HowToBook
