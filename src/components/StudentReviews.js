import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pp1 from "../assests/studentreview/pp3.jpg";
import pp2 from "../assests/studentreview/pp1.jpg";
import pp3 from "../assests/studentreview/pp2.jpg";
import pp4 from "../assests/studentreview/pp4.jpg";
import pp5 from "../assests/studentreview/pp5.jpg";
import blankimg from "../assests/studentreview/blankimg.jpg";

const reviews = [
  {
    name: "",
    university: "Laukik lambe (VJTI)",
    text: `STARGET counseling has been a very valuable part of my carrer journey. The counselors provided clear guidance on course selections, career paths, and helped me prepare strong applications for course studies. They were approachable, knowledgeable, and genuinely concerned about my goals and personal development.`,
    image: pp4,
  },
  {
    name: "",
    university: "Meet (VIT)",
    text: `Stargate guided me from organizing documents to understanding branches, helping align my interests with career paths. Their support—day or night—made tough decisions, like choosing between college and branch, much easier.

With their help, I secured CSD at VIT, which turned out to be the perfect fit. Their dedication, even during personal hardships, made my counselling journey smooth and truly meaningful.`,
    image: pp3,
  },
  {
    name: "",
    university: "Dhiraj Rajmane (VJTI)",
    text: `Getting into VJTI Mechanical was a dream come true, and Stargate Counselling played a big role in it. From the very beginning, they provided a personal touch that made the whole process stress-free. Every step—from form filling to college preference listing—was handled with clarity and care, through well-managed meetings.

Highly recommend Stargate to all aspiring students!`,
    image: blankimg,
  },
  {
    name: "",
    university: "Aditi pathak (AISSMS Coe) ",
    text: `I reached out to Stargate to better use my CET score, and they helped me set clear, realistic college goals. Their personalized advice introduced me to options I hadn't considered before.

They guided me through every step—from essays to interviews—boosting both my application and confidence. With their support, I secured a college better than I expected. Their insight and motivation truly made a difference.`,
    image: pp2,
  },
  {
    name: " ",
    university: "Nikham ROHAN (VIT) ",
    text: `I'm really thankful to Stargate for their genuine guidance and support throughout the CET CAP rounds. They not only explained each step clearly but also helped me with selecting the right college options and resolving certificate-related issues. Their constant support made the entire process smooth and stress-free. Truly appreciate his help and dedication!`,
    image: pp5,
  },
  {
    name: " ",
    university: "Advait Satarkar (MIT) ",
    text: `Stargate really helped to get into the college i really deserved. I didnt knew anything about the rounds system but they really helped me
I always will be greatfull for their help`,
    image: blankimg,
  },
  {
    name: "",
    university: "Rugved Chavan (VIT)",
    text: `I'm extremely grateful for Mr.Vedant Lakade's guidance and support in securing admission to VIT Pune and getting AI & DS Branch. Their expertise and personalized approach made a huge difference in my application process. They helped me navigate the complexities and boosted my confidence. 
Thanks to their efforts, I achieved my goal. Highly recommend their services to anyone seeking admission counseling. Excellent job!`,
    image: pp1,
  },
  {
    name: " ",
    university: "Vedant Patil (DYP Akurdi) ",
    text: `I am a DSE student at DYP Akurdi, and I am truly grateful to Stargate for their incredible support and guidance. After completing my diploma, I was confused about my next steps, but Stargate's counselling helped me make the right decision for my career. Their team was so helpful, patient, and knowledgeable throughout the process. Thank you, Stargate, for being a part of my journey!`,
    image: blankimg,
  },
  {
    name: "  ",
    university: "Akshay Kadam (VIT) ",
    text: `I had a great experience working with the Stargate team. They were incredibly supportive, knowledgeable, and always available to answer my questions. Their guidance made the entire college application process so much smoother and less stressful. I really appreciated their personalized approach and constant encouragement. Highly recommend Stargate to anyone looking for expert and caring college counselling!`,
    image: blankimg,
  },
];

export default function StudentReviews({ scrollToFooter }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === reviews.length - 1) {
          return 0; // After last review, go back to first
        }
        return prevIndex + 1;
      });
    }, 10000); // Changed to 6 seconds for better readability
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="py-8 overflow-y-hidden sm:py-16 px-4 sm:px-8 md:px-16 bg-white flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
      {/* Left Section - Made responsive */}
      <div className="md:w-1/2 text-left items-center pl-0 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-32">
  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-libre mb-2 sm:mb-12">
    From Students to Mentors
  </h1>
  <h2 className="text-base sm:text-xl lg:text-2xl mb-2 sm:mb-4 font-poppins pl-2 leading-loose sm:pl-4">
    Our team has been through the same admission process you’re facing. We've made the mistakes, learned the lessons, and now we’re here to make your path clearer. That’s what makes our guidance real and relatable.
  </h2>
</div>

      {/* Review Card - Made responsive */}
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl bg-blue-500 text-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg">
        <h1 className="text-3xl  text mb-3 font-libre"> Stories That speak :</h1>
        <img
          src={reviews[currentIndex].image}
          alt={reviews[currentIndex].name}
          className="absolute -left-8 sm:-left-10 md:-left-12 top-1/2 transform -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg"
        />
        <div className="pl-6 sm:pl-8 md:pl-10">
          <h3 className="text-lg sm:text-xl md:text-xl font-semibold">{reviews[currentIndex].university}</h3>
          <p className="text-sm sm:text-base md:text-m mt-1 sm:mt-2">{reviews[currentIndex].name}</p>
          <p className="mt-3 sm:mt-4 text-s sm:text-sm md:text-base leading-relaxed">"{reviews[currentIndex].text}"</p>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-8">
            {reviews.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-white"}`}
              ></span>
            ))}
          </div>

          {/* Navigation Buttons - Made larger on mobile */}
          <div className="flex justify-end mt-2 sm:mt-3 gap-2">
            <button
              onClick={prevReview}
              className="p-1 sm:p-1.5 text-white rounded-full hover:bg-gray-300 hover:bg-opacity-30"
              aria-label="Previous Review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextReview}
              className="p-1 sm:p-1.5 text-white rounded-full hover:bg-gray-300 hover:bg-opacity-30"
              aria-label="Next Review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
