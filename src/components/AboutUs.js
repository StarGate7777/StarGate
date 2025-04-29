import React from "react";
import adarsh from '../assests/Aboutus/Adarshprofilepic.jpg'
import sarthak  from '../assests/Aboutus/sarthak.jpg'
import saniya from '../assests/Aboutus/saniya.jpg'
import vedant from '../assests/Aboutus/vedant1.jpg'

const teamMembers = [
  {
    name: "Vedant Lakade",
    role: "Head of Opperations .",
    image: vedant,
    bgColor: "bg-teal-300",
  },
  {
    name: "Adarsh Dhawale",
    role: "Technical Head.",
    image: adarsh,
    bgColor: "bg-[#D3E671]",
  },
  {
    name: "Saniya Lakade",
    role: "Councling head.",
    image: saniya,
    bgColor: "bg-red-400",
  },
  {
    name: "Sarthak Lakade",
    role: "Public Relations.",
    image: sarthak,
    bgColor: "bg-blue-400",
  },
];

export default function AboutUs() {
  return (
    <div className="py-12 px-6 md:px-12 bg-white text-center font-poppins">
      <h2 className="text-6xl font-bold text-blue-950"> Visionaries Behind Stargate</h2>
      <p className="text-blue-950 mt-6 italic">"Guiding you through complexity, one step at a time."</p>
      <div className="w-32 h-1 bg-teal-400 mx-auto mt-5"></div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-44 h-44 ${member.bgColor}  flex items-center justify-center`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full border-1 border-white"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-blue-950">{member.name}</h3>
            <p className="text-blue-950 text-sm text-center max-w-xs mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
