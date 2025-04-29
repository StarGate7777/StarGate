import { useRef } from 'react';
import bgimage from '../assests/unv-img.jpg';
import AboutUs from './AboutUs';
import StudentReviews from './StudentReviews';
import WhatWeDo from './WhatWeDo';
import UniversityJourney from './UniversityJourney';
import StudentForm from './StudentForm';
import logo from '../assests/logo.jpg';
import pp1 from '../assests/display images/pp img 1.jpg';
import pp2 from '../assests/display images/pp img 2.jpg';
import pp3 from '../assests/display images/pp img 3.jpg';
import pp4 from '../assests/display images/pp2.png';
import pp5 from '../assests/display images/pp img 5.png';
import pp6 from '../assests/display images/pp img 6.jpg';
import { FaWhatsapp } from 'react-icons/fa';
import name from '../assests/stargate.jpg'

export default function LandingPage() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTalkToUs = () => {
    window.location.href = "tel:+919172902094";
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      alert("Please call us at: +91 917 290 2094");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden overflow-y-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      {/* Header - Made responsive with padding adjustments */}
      <header className="flex justify-between items-center px-4 sm:px-6 h-12 py-1 bg-white shadow-md">
        <div className="flex items-center space-x-2 h-full">
          <img src={name} alt="Name" className="h-full object-contain max-w-[180px] sm:max-w-none" />
        </div>
      </header>

      {/* WhatsApp Floating Button - Round and positioned at 3/4th from top */}
      <a
        href="https://wa.me/918080825387?text=Hi%2C%20I%20am%20interested%20in%20counselling%20from%20StarGate"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 top-3/4 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-all duration-300"
        style={{ width: '3.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Hero Section - Adjusted text sizes and padding */}
      <div
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] flex flex-col justify-center items-center text-white px-4 text-center"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-libre px-2">
          Ready To Begin Your Engineering Journey?
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base px-2">
          Learn why more and more families are choosing StarGate Counselling as their preferred partner in the Engineering College application process.
        </p>
        <button
          onClick={handleTalkToUs}
          className="mt-6 sm:mt-8 px-6 sm:px-10 py-2 bg-red-500 text-white font-bold rounded-full shadow-md hover:bg-yellow-600 text-sm sm:text-base"
        >
          TALK TO US
        </button>
      </div>

      {/* Marquee Section - Adjusted text size */}
      <div className="relative overflow-hidden bg-red-600 py-2 sm:py-1 shadow-lg">
        <div className="whitespace-nowrap animate-marquee-ltr text-sm sm:text-xl text-white font-extrabold tracking-wider">
          Avail our Early Bird Offer now and secure your spot with exclusive benefits
        </div>
        <style>
          {`
    @keyframes marquee-ltr {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee-ltr {
      display: inline-block;
      white-space: nowrap;
      animation: marquee-ltr 10s linear infinite;
    }
  `}
        </style>
      </div>

      {/* Why Choose Section - Made fully responsive */}
      <div className="py-8 sm:py-16 px-4 sm:px-8 md:px-16 bg-white flex flex-col md:flex-row items-center gap-8 sm:gap-16">
        <div className="md:w-1/2 text-left items-center pl-2 sm:pl-4 md:pl-10 lg:pl-16 xl:pl-64">
          <div className="flex flex-col items-start">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-libre mb-2 sm:mb-4">What We Do!</h2>
            <div className="w-16 sm:w-24 h-1 bg-black mb-4 sm:mb-10"></div>
          </div>
          <p className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4 font-poppins pl-2 sm:pl-4">
            At StarGate, we provide expert guidance throughout the MHT CET CAP admission process
          </p>
          <p className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4 font-poppins pl-2 sm:pl-4">
            We help you plan a smart college preference list
          </p>
          <p className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4 font-poppins pl-2 sm:pl-4">
            Our advice is honest and practical—based on your actual marks and merit
          </p>
          <p className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4 font-poppins pl-2 sm:pl-4">
            With StarGate, you get clear, transparent, and personalized guidance
          </p>
        </div>

        <div className="md:w-1/2 lg:w-1/4 flex flex-col items-center mt-8 sm:mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-center shadow-2xl  bg-orange-100">
            {[pp1, pp2, pp3, pp4, pp5, pp6].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Student ${i + 1}`}
                className={`h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-s shadow-lg transform ${i % 2 === 0 ? 'rotate-3' : '-rotate-2'}`}
              />
            ))}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-8 font-libre text-center">
            Stars of StarGate
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-teal-400 mx-auto mt-3 sm:mt-5"></div>
        </div>
      </div>

      <div className='bg-white'>
        <StudentReviews scrollToFooter={scrollToFooter} />
      </div>
      <div>
        <WhatWeDo scrollToFooter={scrollToFooter} />
      </div>
      <div>
        <UniversityJourney />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <StudentForm />
      </div>

      {/* Footer Section - Adjusted padding and text size */}
      <div ref={footerRef} className="bg-[#333456] text-center py-4 px-2">
        <div className="flex justify-center bg-[#333456] mb-2">
          <img src={logo} alt="Logo" className="h-16 sm:h-20 object-contain" />
        </div>
        <p className="text-xs sm:text-sm md:text-base text-white">
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-semibold">StarGate</span>. Designed by{' '}
          <span className="font-semibold">LeadGate</span>.
        </p>
      </div>
    </div>
  );
}