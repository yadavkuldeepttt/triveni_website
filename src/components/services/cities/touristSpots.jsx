import React, { useState, useEffect } from "react";
import { touristSpots } from "../../../utils/data";
import { LocateIcon } from "lucide-react";

const TouristSpots = ({ cityName }) => {
  const citySpots = touristSpots[cityName] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardsToShow = {
    mobile: 1,
    desktop: 3,
  };

  useEffect(() => {
    if (shouldShowCarousel()) {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [currentIndex]);

  const shouldShowCarousel = () => {
    // Only show carousel on desktop if more than 3 cards
    // Show on mobile if more than 1 card
    const isMobile = window.innerWidth < 768;
    return isMobile ? citySpots.length > 1 : citySpots.length > 3;
  };

  const getVisibleCards = () => {
    const maxIndex = citySpots.length - 1;
    const visibleIndices = [];
    for (let i = currentIndex; i < currentIndex + cardsToShow.desktop; i++) {
      visibleIndices.push(i > maxIndex ? i - citySpots.length : i);
    }
    return visibleIndices;
  };

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? citySpots.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === citySpots.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-2 mb-[5rem!important]">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <LocateIcon className="w-5 h-5 text-yellow-500" />
        Popular Routes
      </h3>
      
      <div className="relative h-[300px] overflow-hidden">
        <div className={`flex h-full ${shouldShowCarousel() ? 'transition-transform duration-500 ease-in-out' : 'md:!flex-wrap'}`}>
          {citySpots.map((spot, index) => (
            <div
              key={spot.name}
              className={`
                w-full h-full transition-transform duration-500 ease-in-out shrink-0
                ${shouldShowCarousel() ? 'md:w-1/3' : 'md:w-1/3 md:h-full'}
                ${
                  shouldShowCarousel()
                    ? getVisibleCards().includes(index)
                      ? "block"
                      : "hidden md:block"
                    : "block"
                }
              `}
              style={{
                transform: shouldShowCarousel() ? `translateX(-${currentIndex * 100}%)` : 'none',
              }}
            >
              <div className="m-2 h-full rounded-lg overflow-hidden shadow-lg">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-[70%] object-cover"
                />
                <div className="p-4 bg-white h-[30%]">
                  <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {spot.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show if carousel is active */}
      {shouldShowCarousel() && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
            disabled={isTransitioning}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
            disabled={isTransitioning}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path
                  fill="currentColor"
                  d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
                />
              </svg>
            </div>
          </button>

          {/* Dots Navigation */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {citySpots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-4"
                    : "bg-blue-300 hover:bg-blue-400"
                }`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TouristSpots;