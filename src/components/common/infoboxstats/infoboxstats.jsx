"use client";

import React, { useEffect, useState, useContext } from "react";
import EnrollmentForm from "../enrollmentform/enrollmentform";
import { UserContext } from "../../../context/usercontext";

const InfoBoxStats = ({
  title = "Transform your career with our 12-months No-Cost EMI",
  items = [],
  style = {},
  buttonText = "Enroll Now",
  showForm = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const { userCountry, loading } = useContext(UserContext);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleOpenForm = () => {
    if (showForm) setOpenForm(true);
  };

  if (loading || userCountry !== "IN") {
    return null;
  }

  return (
    <div className="relative flex justify-center items-center max-w-[1200px] w-full mx-auto p-5 overflow-hidden">
      
      {/* Background bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[120px] h-[120px] top-[10%] left-[5%] rounded-full bg-white/40 opacity-70 blur-sm animate-pulse" />
        <div className="absolute w-[80px] h-[80px] top-[30%] right-[10%] rounded-full bg-white/40 opacity-70 blur-sm animate-pulse" />
        <div className="absolute w-[100px] h-[100px] bottom-[15%] left-[15%] rounded-full bg-white/40 opacity-70 blur-sm animate-pulse" />
        <div className="absolute w-[60px] h-[60px] bottom-[10%] right-[20%] rounded-full bg-white/40 opacity-70 blur-sm animate-pulse" />
      </div>

      {/* Main Container */}
      <div
        style={style}
        className={`relative flex flex-col items-center gap-6 w-full max-w-[1200px] px-8 py-10 rounded-[20px] backdrop-blur-md transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        } bg-[linear-gradient(135deg,#f8faff,#f0f5ff)]`}
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-[1.1rem] text-[#2c5282] font-semibold max-w-[500px] mx-auto leading-[1.5]">
            {title}
          </p>
        </div>

        {/* Stats Box */}
        <div className="flex flex-wrap justify-between items-center w-full max-w-[800px] border-[3px] border-[#f60] rounded-[12px]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              
              <div
                className={`relative text-center flex-1 min-w-[180px] px-[15px] py-[25px] rounded-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  item.hideOnMobile ? "hidden md:block" : ""
                }`}
              >
                <p className="text-[0.95rem] text-[#636e72] mb-2 font-medium">
                  {item.label}
                </p>

                <p className="text-[1.5rem] font-bold text-[#2d3436]">
                  {item.value}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-[15px] opacity-0 hover:opacity-100 transition bg-[linear-gradient(135deg,rgba(116,185,255,0.1),rgba(9,132,227,0.1))]" />
              </div>

              {/* Divider */}
              {index < items.length - 1 && (
                <div className="hidden md:block w-[1px] h-full bg-gradient-to-r from-[#0288d1] to-[#02669d]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleOpenForm}
          className="flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-[8px] bg-gradient-to-r from-[#0288d1] to-[#02669d] transition hover:bg-gradient-to-r hover:from-[#e55a00] hover:to-[#e57c00] hover:-translate-y-1 hover:shadow-lg"
        >
          <span>{buttonText}</span>
        </button>
      </div>

      {/* Form Modal */}
      {openForm && <EnrollmentForm onClose={() => setOpenForm(false)} />}
    </div>
  );
};

export default InfoBoxStats;