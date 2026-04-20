
"use client";

import React from "react";
import { FaMoneyBillWave, FaUsers, FaChartLine, FaRocket } from "react-icons/fa";
import { MdWork, MdTrendingUp } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

const GenAIInsights = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto my-8 px-8 py-8 rounded-[24px] bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-[2.5rem] font-extrabold text-[#0d47a1] mb-2">
          The Future of{" "}
          <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] bg-clip-text text-transparent">
            Generative AI
          </span>{" "}
          and ML
        </h2>
        <p className="text-[1.2rem] text-[#37474f] max-w-[600px] mx-auto">
          Transforming industries and creating new opportunities worldwide
        </p>
      </div>

      {/* Stats */}
      <div className="mb-16">
        <div className="flex justify-around flex-wrap gap-6">

          <div className="flex items-center p-6 bg-white/70 backdrop-blur-md rounded-[16px] shadow-[0_8px_16px_rgba(13,71,161,0.1)] transition-all flex-1 min-w-[280px] border border-[rgba(33,150,243,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[70px] h-[70px] rounded-full flex items-center justify-center mr-6">
              <MdWork />
            </div>
            <div>
              <h3 className="text-[1.8rem] font-bold text-[#0d47a1] mb-1">
                97 Million
              </h3>
              <p className="text-[1rem] text-[#546e7a] mb-1">
                New Opportunities by 2025
              </p>
              <span className="text-[0.85rem] text-[#2196f3] italic">
                World Economic Forum
              </span>
            </div>
          </div>

          <div className="flex items-center p-6 bg-white/90 backdrop-blur-md rounded-[16px] shadow-[0_12px_24px_rgba(13,71,161,0.15)] scale-105 z-[2] transition-all flex-1 min-w-[280px] border border-[rgba(33,150,243,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[70px] h-[70px] rounded-full flex items-center justify-center mr-6">
              <GiMoneyStack />
            </div>
            <div>
              <h3 className="text-[1.8rem] font-bold text-[#0d47a1] mb-1">
                $1.3 Trillion
              </h3>
              <p className="text-[1rem] text-[#546e7a] mb-1">
                GenAI Market in 10 Years
              </p>
              <span className="text-[0.85rem] text-[#2196f3] italic">
                Bloomberg
              </span>
            </div>
          </div>

          <div className="flex items-center p-6 bg-white/70 backdrop-blur-md rounded-[16px] shadow-[0_8px_16px_rgba(13,71,161,0.1)] transition-all flex-1 min-w-[280px] border border-[rgba(33,150,243,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[70px] h-[70px] rounded-full flex items-center justify-center mr-6">
              <FaUsers />
            </div>
            <div>
              <h3 className="text-[1.8rem] font-bold text-[#0d47a1] mb-1">
                $170,062
              </h3>
              <p className="text-[1rem] text-[#546e7a] mb-1">
                Average Annual Salary
              </p>
              <span className="text-[0.85rem] text-[#2196f3] italic">
                Glassdoor
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Industry Section */}
      <div className="mt-12">
        <div className="text-center mb-12">
          <h2 className="text-[2.5rem] font-extrabold text-[#0d47a1]">
            Industry{" "}
            <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] bg-clip-text text-transparent">
              Trends
            </span>
          </h2>
          <p className="text-[1.1rem] text-[#37474f] max-w-[800px] mx-auto leading-[1.6]">
            GenAI is at the cutting edge of tech innovation, driving transformative
            trends across industries. Advanced language models like GPT-4 enhance
            natural language generation, creating more natural and coherent content.
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-8">

          <div className="flex-1 min-w-[280px] p-8 rounded-[16px] bg-white/80 backdrop-blur-md shadow-[0_8px_16px_rgba(13,71,161,0.1)] text-center border border-[rgba(33,150,243,0.2)] transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdTrendingUp />
            </div>
            <h3 className="text-[2rem] font-extrabold text-[#0d47a1] mb-2">
              24.4%
            </h3>
            <p className="text-[1.1rem] text-[#546e7a] mb-4">
              Projected CAGR (2023-2030)
            </p>
            <span className="text-[0.9rem] text-[#2196f3] italic">
              Statista
            </span>
          </div>

          <div className="flex-1 min-w-[280px] p-8 rounded-[16px] bg-white/80 backdrop-blur-md shadow-[0_8px_16px_rgba(13,71,161,0.1)] text-center border border-[rgba(33,150,243,0.2)] transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaChartLine />
            </div>
            <h3 className="text-[2rem] font-extrabold text-[#0d47a1] mb-2">
              $667.9 Billion
            </h3>
            <p className="text-[1.1rem] text-[#546e7a] mb-4">
              Market Size by 2030
            </p>
            <span className="text-[0.9rem] text-[#2196f3] italic">
              Fortune Business
            </span>
          </div>

          <div className="flex-1 min-w-[280px] p-8 rounded-[16px] bg-white/80 backdrop-blur-md shadow-[0_8px_16px_rgba(13,71,161,0.1)] text-center border border-[rgba(33,150,243,0.2)] transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(13,71,161,0.2)]">
            <div className="text-[2.5rem] text-white bg-gradient-to-br from-[#2196f3] to-[#0d47a1] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRocket />
            </div>
            <h3 className="text-[2rem] font-extrabold text-[#0d47a1] mb-2">
              $4.4 Trillion
            </h3>
            <p className="text-[1.1rem] text-[#546e7a] mb-4">
              Annual Value to Global Economy
            </p>
            <span className="text-[0.9rem] text-[#2196f3] italic">
              McKinsey
            </span>
          </div>

        </div>
      </div>

      {/* Shapes */}
      <div className="absolute w-[200px] h-[200px] top-[-50px] right-[-50px] rounded-full bg-gradient-to-br from-[rgba(33,150,243,0.1)] to-[rgba(13,71,161,0.05)] hidden md:block" />
      <div className="absolute w-[150px] h-[150px] bottom-[50px] left-[-50px] rounded-full bg-gradient-to-br from-[rgba(33,150,243,0.1)] to-[rgba(13,71,161,0.05)] hidden md:block" />
      <div className="absolute w-[100px] h-[100px] bottom-[-30px] right-[100px] rounded-full bg-gradient-to-br from-[rgba(33,150,243,0.1)] to-[rgba(13,71,161,0.05)] hidden md:block" />
    </div>
  );
};

export default GenAIInsights;