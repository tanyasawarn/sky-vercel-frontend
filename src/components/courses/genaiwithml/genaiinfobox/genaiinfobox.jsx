"use client";
import React, { useEffect, useState, useContext } from "react";
import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";
import { UserContext } from "../../../../context/usercontext";

const GenaiInfoBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openForm, showOpenForm] = useState(false);
  const { userCountry, loading } = useContext(UserContext);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleOpenForm = () => {
    showOpenForm(true);
  };

  if (loading || userCountry !== "IN") return null;

  return (
    <div className="relative flex justify-center items-center max-w-[1200px] w-full mx-auto p-5 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[80px] h-[80px] top-[10%] left-[5%] rounded-full bg-gradient-to-br from-[#2196f31a] to-[#0d47a10d] opacity-70 animate-[float_15s_infinite]" />
        <div className="absolute w-[120px] h-[120px] top-[20%] right-[10%] rounded-full bg-gradient-to-br from-[#2196f31a] to-[#0d47a10d] opacity-70 animate-[float_15s_infinite]" />
        <div className="absolute w-[60px] h-[60px] bottom-[15%] left-[15%] rounded-full bg-gradient-to-br from-[#2196f31a] to-[#0d47a10d] opacity-70 animate-[float_15s_infinite]" />
        <div className="absolute w-[90px] h-[90px] bottom-[25%] right-[20%] rounded-full bg-gradient-to-br from-[#2196f31a] to-[#0d47a10d] opacity-70 animate-[float_15s_infinite]" />
        <div className="absolute w-[70px] h-[70px] top-[50%] left-[25%] rounded-full bg-gradient-to-br from-[#2196f31a] to-[#0d47a10d] opacity-70 animate-[float_15s_infinite]" />
      </div>

      <div className={`relative flex flex-col items-center gap-6 max-w-[1200px] w-full px-8 py-10 bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] backdrop-blur-md rounded-[20px] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>

        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[1.1rem] text-[#2c5282] font-semibold max-w-[500px] mx-auto">
            Transform your career with our 12-months No-Cost EMI
          </p>
        </div>

        {/* Info Box */}
        <div className="flex justify-between items-center w-full max-w-[800px] flex-wrap gap-2 border-[3px] border-[#f60] rounded-xl">

          <div className="relative text-center flex-1 min-w-[180px] py-6 px-4 rounded-[15px] hover:-translate-y-1 hover:shadow-lg transition-all">
            <p className="text-[0.95rem] text-[#636e72] mb-2 font-medium">
              No-cost EMI from
            </p>
            <p className="text-[1.5rem] font-bold text-[#2d3436]">
              INR 5,666.66*
            </p>
          </div>

          <div className="hidden md:flex items-center h-[80px]">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#0288d1] to-[#02669d]" />
          </div>

          <div className="relative text-center flex-1 min-w-[180px] py-6 px-4 rounded-[15px] hover:-translate-y-1 hover:shadow-lg transition-all">
            <p className="text-[0.95rem] text-[#636e72] mb-2 font-medium">
              Admission Deadline
            </p>
            <p className="text-[1.5rem] font-bold text-[#2d3436]">
              11th-May-26
            </p>
          </div>

          <div className="hidden md:flex items-center h-[80px]">
            <div className="w-[1px] h-full bg-gradient-to-b from-[#0288d1] to-[#02669d]" />
          </div>

          <div className="relative text-center flex-1 min-w-[180px] py-6 px-4 rounded-[15px] hover:-translate-y-1 hover:shadow-lg transition-all hidden sm:block">
            <p className="text-[0.95rem] text-[#636e72] mb-2 font-medium">
              Max EMI Duration
            </p>
            <p className="text-[1.5rem] font-bold text-[#2d3436]">
              12 months
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="relative flex items-center gap-2 px-7 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#0288d1] to-[#02669d] hover:-translate-y-1 hover:shadow-lg transition-all"
          onClick={handleOpenForm}
        >
          <span>Enroll Now</span>
          <span className="flex items-center justify-center w-5 h-5 transition-transform group-hover:translate-x-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </span>
        </button>
      </div>

      {openForm && (
        <EnrollmentForm
          courseName="Genai With ML Masters"
          onClose={() => showOpenForm(false)}
        />
      )}
    </div>
  );
};

export default GenaiInfoBox;