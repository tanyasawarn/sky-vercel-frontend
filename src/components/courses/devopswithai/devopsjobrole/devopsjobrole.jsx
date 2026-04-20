"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../../../context/usercontext";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

 

// Roles (unchanged)
const rolesIN = [
     { name: "DevOps Architect", openings: "7,000+", salary: "INR 30 LPA", description: "DevOps Architects are responsible for designing and implementing DevOps strategies..." },
  { name: "DevOps Engineer", openings: "12,000+", salary: "INR 10 LPA", description: "DevOps Engineers integrate software development with IT operations..." },
  { name: "SRE", openings: "10,000+", salary: "INR 15 LPA", description: "Site Reliability Engineers are responsible for reliability and scalability..." },
  { name: "Security Engineer (DevSecOps)", openings: "10,000+", salary: "INR 12 LPA", description: "Security Engineers integrate security practices into DevOps workflows..." },
  { name: "Infrastructure Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Infrastructure Engineers design and maintain infrastructure for applications..." },
  { name: "Platform Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Platform Engineers develop and manage platforms for development and deployment..." },
  { name: "Integration Specialist", openings: "9,000+", salary: "INR 8 LPA", description: "Integration Specialists ensure software systems work seamlessly together..." },
  { name: "Sr. DevOps Cloud Engineer", openings: "5,000+", salary: "INR 25 LPA", description: "Senior DevOps Cloud Engineers lead cloud-based DevOps solutions..." },
];
const rolesUS =  [
  { name: "DevOps Architect", openings: "9,000+", salary: "USD 140,000", description: rolesIN[0].description },
  { name: "DevOps Engineer", openings: "10,000+", salary: "USD 180,000", description: rolesIN[1].description },
  { name: "SRE", openings: "4,000 to 7,000+", salary: "USD 144,134", description: rolesIN[2].description },
  { name: "Security Engineer (DevSecOps)", openings: "3,000 to 5,000+", salary: "USD 127,066", description: rolesIN[3].description },
  { name: "Infrastructure Engineer", openings: "12,000+", salary: "USD 127,066", description: rolesIN[4].description },
  { name: "Platform Engineer", openings: "7,000 to 10,000+", salary: "USD 7,600", description: rolesIN[5].description },
  { name: "Integration Specialist", openings: "3,500+", salary: "USD 130,047", description: rolesIN[6].description },
  { name: "Sr. DevOps Cloud Engineer", openings: "3,000 to 5,000+", salary: "USD 148,162", description: rolesIN[7].description },
];

const DevOpsRoles = () => {
  const { userCountry } = useContext(UserContext);
  const roles = userCountry === "IN" ? rolesIN : rolesUS;

  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentAnimation, setContentAnimation] = useState("enter");

  const sliderRef = useRef(null);

  const handleRoleClick = (role, index) => {
    if (activeIndex === index) return;

    setContentAnimation("exit");

    setTimeout(() => {
      setSelectedRole(role);
      setActiveIndex(index);
      setContentAnimation("enter");

      if (sliderRef.current) {
        const buttonWidth = sliderRef.current.children[0].offsetWidth;
        sliderRef.current.scrollTo({
          left: index * buttonWidth,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  useEffect(() => {
    setSelectedRole(roles[activeIndex]);
  }, [roles, activeIndex]);

  return (
    <div className="flex justify-center items-center p-8 rounded-xl max-w-[1200px] w-full mx-auto bg-[linear-gradient(135deg,#f8faff,#f0f5ff)]">
      
      <div className="w-full max-w-[900px] text-center">
        
        {/* Title */}
        {/* <h2 className="text-[2.2rem] font-bold mb-12 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent relative inline-block">
          What Can I Become?
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
        </h2> */}
        <SectionHeading title="What Can I Become?" />

        {/* Slider */}
        <div className="relative mb-12 px-6">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 py-4 scroll-smooth"
          >
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => handleRoleClick(role, index)}
                className={`min-w-[180px] px-6 py-4 rounded-xl font-semibold transition-all ${
                  activeIndex === index
                    ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white shadow-lg scale-105"
                    : "bg-white text-[#1a365d] shadow-md hover:-translate-y-1"
                }`}
              >
                {role.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={`bg-white p-10 rounded-[20px] text-left shadow-xl transition-all duration-500 ${
            contentAnimation === "enter"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5"
          }`}
        >
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h3 className="text-2xl font-extrabold text-[#1a365d]">
              {selectedRole.name}
            </h3>

            <div className="flex items-center gap-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white px-4 py-2 rounded-full font-bold text-sm">
            
              {selectedRole.openings} Openings
            </div>
          </div>

          <p className="text-[1.1rem] text-[#444] mb-8 leading-[1.7]">
            {selectedRole.description}
          </p>

          {/* Details */}
          <div className="flex flex-wrap gap-6">
            
            <div className="flex items-center gap-4 bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] p-6 rounded-xl flex-1 min-w-[220px] justify-center">
           
              <div>
                <p className="text-sm text-gray-500 font-semibold">Job Openings</p>
                <p className="text-lg font-bold text-[#1a365d]">
                  {selectedRole.openings}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] p-6 rounded-xl flex-1 min-w-[220px] justify-center">
            
              <div>
                <p className="text-sm text-gray-500 font-semibold">Average Salary</p>
                <p className="text-lg font-bold text-[#1a365d]">
                  {selectedRole.salary}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsRoles;