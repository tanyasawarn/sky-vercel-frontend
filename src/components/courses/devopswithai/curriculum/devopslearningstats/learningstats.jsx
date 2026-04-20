"use client";

import React, { useState } from "react";
import Callback from "../../../../common/callbackform/callbackform";

const DevopsLearningStats = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleEnrollClick = () => {
    setFormKey((prevKey) => prevKey + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 text-center max-w-[1200px] w-full mx-auto my-8">
        {/* Title */}
        <h2 className="text-[2.2rem] font-bold mb-4 mt-[-1rem] text-center opacity-0 animate-[fadeInUp_0.8s_ease_forwards] bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
          300+ Hours of Comprehensive Learning
        </h2>

        <div className="grid grid-cols-4 gap-8 overflow-x-auto whitespace-nowrap">
          <div className="min-w-[150px]">
            <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">150+</h3>
            <p className="text-base text-[#37474f] opacity-90 m-0">
              Live Sessions
            </p>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">50+</h3>
            <p className="text-base text-[#37474f] opacity-90 m-0">
              Hands-on Labs
            </p>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">20+</h3>
            <p className="text-base text-[#37474f] opacity-90 m-0">
              Real Projects
            </p>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">100+</h3>
            <p className="text-base text-[#37474f] opacity-90 m-0">
              Practice Exercises
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <span className="text-[1.5rem] font-semibold text-[#1a365d]">
            Still not sure?
          </span>
          <button
            className="bg-[#f60] text-white font-semibold text-base py-3 px-6 rounded-[10px] shadow-[0_6px_16px_rgba(11,191,255,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(11,191,255,0.35)]"
            onClick={handleEnrollClick}
          >
            Talk To Us
          </button>
        </div>

        {/* Form */}
        {isFormVisible && (
          <Callback
            key={formKey}
            onClose={handleCloseForm}
            courseName="DevOps With AI Masters"
          />
        )}
      </div>
    </>
  );
};

export default DevopsLearningStats;
