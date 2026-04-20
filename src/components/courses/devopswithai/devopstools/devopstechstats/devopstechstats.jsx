import SectionHeading from "@/components/common/sectionheading/sectionheading";
import React from "react";

const TechnologiesSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] text-center px-4 py-2 rounded-[20px] max-w-[1200px] w-full mx-auto my-8 shadow-[0_6px_15px_rgba(0,0,0,0.08)] max-[480px]:w-[95%]">
      
      {/* <h2 className="text-[2.5rem] font-bold mb-2 mt-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent opacity-0 animate-[fadeInUp_0.8s_ease_forwards] relative text-center max-[480px]:text-[1.8rem] max-[480px]:w-full max-[480px]:mx-auto">
        Stay Ahead with Latest Technologies
        <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
      </h2> */}
      <SectionHeading title="Stay Ahead with Latest Technologies" />

      <p className="text-[1rem] text-[#333] mb-8 max-w-[800px] mx-auto leading-[1.6]">
        Our curriculum is updated quarterly to include the latest tools and technologies in the DevOps ecosystem.
      </p>

      <div className="flex justify-center items-center gap-8 flex-wrap mb-4">
        
        <div className="bg-white rounded-[15px] px-8 py-6 flex-[1_1_200px] max-w-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
          <h3 className="text-[2rem] font-bold text-[#f60] mb-1">20+</h3>
          <span className="text-[1rem] font-medium text-[#555]">Core Tools</span>
        </div>

        <div className="bg-white rounded-[15px] px-8 py-6 flex-[1_1_200px] max-w-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
          <h3 className="text-[2rem] font-bold text-[#f60] mb-1">15+</h3>
          <span className="text-[1rem] font-medium text-[#555]">Frameworks</span>
        </div>

        <div className="bg-white rounded-[15px] px-8 py-6 flex-[1_1_200px] max-w-[280px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_18px_rgba(0,0,0,0.1)]">
          <h3 className="text-[2rem] font-bold text-[#f60] mb-1">5+</h3>
          <span className="text-[1rem] font-medium text-[#555]">Languages</span>
        </div>

      </div>
    </div>
  );
};

export default TechnologiesSection;