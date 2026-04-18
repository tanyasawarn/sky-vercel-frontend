"use client";

import SectionHeading from "@/components/common/sectionheading/sectionheading";
import React from "react";

const DevOpsOpportunities = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-8 mb-4 p-5 rounded-[12px] bg-[linear-gradient(135deg,#f8faff,#f0f5ff)] text-[#2c3e50]">
      
      {/* Header */}
      <div className="text-center">
        {/* <h2 className="text-[2.2rem] font-bold mb-4 mt-[-1rem] bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
          Unlimited Opportunities in DevOps
        </h2> */}
        <SectionHeading title="Unlimited Opportunities in DevOps" />
        <p className="text-[1rem] leading-[1.6] text-[#4a5568]">
          The DevOps market is exploding with opportunities. Companies are desperately seeking skilled professionals who can bridge development and operations.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10 mt-6">

        {/* Stats Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-6">
            
            <div className="bg-white rounded-[12px] px-5 py-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-[2.5rem] font-extrabold mb-2 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                25L+
              </div>
              <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-1">
                Average Salary
              </div>
              <div className="text-[0.9rem] text-[#718096]">
                Senior DevOps Engineer
              </div>
            </div>

            <div className="bg-white rounded-[12px] px-5 py-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-[2.5rem] font-extrabold mb-2 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                30%
              </div>
              <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-1">
                Job Growth
              </div>
              <div className="text-[0.9rem] text-[#718096]">
                Next 5 Years
              </div>
            </div>

            <div className="bg-white rounded-[12px] px-5 py-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-[2.5rem] font-extrabold mb-2 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-1">
                Open Positions
              </div>
              <div className="text-[0.9rem] text-[#718096]">
                Currently in India
              </div>
            </div>

            <div className="bg-white rounded-[12px] px-5 py-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-[2.5rem] font-extrabold mb-2 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-[1.1rem] font-semibold text-[#2d3748] mb-1">
                Remote Friendly
              </div>
              <div className="text-[0.9rem] text-[#718096]">
                DevOps Positions
              </div>
            </div>

          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Card 1 */}
          <div className="transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[rgba(67,97,238,0.1)]">
                <svg className="w-[30px] h-[30px] stroke-[#4361ee]" viewBox="0 0 100 100" fill="none">
                  <path d="M10,80 L90,20" strokeWidth="2" />
                  <circle cx="10" cy="80" r="5" fill="#4361ee" />
                  <circle cx="90" cy="20" r="7" fill="#4361ee" />
                </svg>
              </div>
              <h3 className="text-[1.4rem] font-bold bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                Explosive Market Growth
              </h3>
            </div>
            <p className="text-[1rem] leading-[1.6] text-[#4a5568] ml-0 lg:ml-14">
              The global DevOps market is expected to reach $57 billion by 2030, with India being one of the fastest-growing markets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[rgba(67,97,238,0.1)]">
                <svg className="w-[30px] h-[30px] stroke-[#4361ee]" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" strokeWidth="2" />
                  <circle cx="50" cy="50" r="30" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[1.4rem] font-bold bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                Global Remote Opportunities
              </h3>
            </div>
            <p className="text-[1rem] leading-[1.6] text-[#4a5568] ml-0 lg:ml-14">
              Work with international teams and companies from anywhere. DevOps skills are universally in demand across all industries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[rgba(67,97,238,0.1)]">
                <svg className="w-[30px] h-[30px] stroke-[#4361ee]" viewBox="0 0 100 100" fill="none">
                  <line x1="30" y1="20" x2="30" y2="80" strokeWidth="2" />
                  <line x1="70" y1="20" x2="70" y2="80" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-[1.4rem] font-bold bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                Career Progression
              </h3>
            </div>
            <p className="text-[1rem] leading-[1.6] text-[#4a5568] ml-0 lg:ml-14">
              Clear path from DevOps Engineer to Senior roles, Team Lead, DevOps Architect, and eventually CTO positions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DevOpsOpportunities;