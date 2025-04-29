import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ui1 from "../assests/UNIVERSITY images/coep.jpg";
import ui2 from "../assests/UNIVERSITY images/pict.jpg";

const admissions = [
  {
    title: " MHT CET",
    description:
      "Confused about the MHT CET CAP rounds? StarGate helps you understand the overall process . From registration to seat allotment and college selection. Get clear information, useful tips, and guidance based on your score to make informed decisions during the CAP rounds.",
    image: ui1,
  },
  {
    title: " DIPLOMA DSE ",
    description:
      "Completed your diploma and aiming for DSE admission? StarGate offers useful guidance for DSE CAP rounds, including form filling tips and admission-related insights. We help you stay updated and better prepared for each step of the admission process.",
    image: ui2,
  },
];

export default function WhatWeDo({ scrollToFooter }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? admissions.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === admissions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTalkToUs = () => {
    window.location.href = "tel:+919172902094";
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      alert("Please call us at: +91 917 290 2094");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === admissions.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-32 p-6 md:p-20 overflow-y-hidden bg-indigo-700 text-white">
      {/* Left Content - Why Choose StarGate (now on top in mobile) */}
      <div className="w-full md:max-w-lg mt-8 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold">Why choose StarGate ?</h2>
        <p className="mt-6 text-sm">
          <span className="font-bold text-lg"> + 🎯 Complete Admission Guidance
          </span>   Personalized guidance throughout the total CET Cell admission process .

        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold text-lg"> +  📝 Form Filling Support
          </span>   Proper form filling guidance to avoid errors and confusion .

        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold text-lg"> + 💬 Genuine College Insights
          </span>   Unbiased, honest reviews and opinions on colleges from a trusted community of engineering students and seniors .

        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold text-lg"> + 🤝 One-on-One Interaction
          </span> Personal interaction with each candidate to solve every doubt regarding the admission process .
        </p>
        <button
          onClick={handleTalkToUs}
          className="mt-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-colors duration-300"
        >
          TALK TO US
        </button>
      </div>

      {/* Right Content - Card (now below in mobile) */}
      <div className="relative w-full max-w-md md:max-w-lg bg-white text-black p-6 shadow-lg">
        {/* Mobile-only image (shown above content) */}
        <div className="flex justify-center mb-4 md:hidden">
          <img
            src={admissions[currentIndex].image}
            alt={admissions[currentIndex].title}
            className="w-16 h-16 rounded-full"
          />
        </div>

        {/* Desktop image (positioned to the left) */}
        <img
          src={admissions[currentIndex].image}
          alt={admissions[currentIndex].title}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-24 h-24 rounded-full hidden md:block"
        />

        <h3 className="text-xl font-serif">{admissions[currentIndex].title}</h3>
        <p className="mt-4 font-sans text-sm md:text-m pl-0 md:pl-10">
          {admissions[currentIndex].description}
        </p>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4">
          {admissions.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-3 gap-2">
          <button
            onClick={prevSlide}
            className="p-1 text-gray-600 rounded-full hover:bg-gray-300 transition-colors duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 text-gray-600 rounded-full hover:bg-gray-300 transition-colors duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}