"use client";

import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import SectionHeading from "../sectionheading/sectionheading";

export default function CourseComparison({ title, data }) {
  return (
    <>
      {/* Heading */}
      <SectionHeading className="mt-13"   title="Course Comparison" />

      {/* Wrapper */}
      <div className="flex justify-center items-center p-[10px]">
        <div className="w-full max-w-[1200px] w-full mx-auto rounded-[16px] overflow-hidden">

          {/* Header */}
          <div className="text-center mt-[-2rem] mb-[30px] text-[#1a365d]">
            <p className="text-[#4a5568] text-[16px]">
              See how our program stands out from the competition
            </p>
          </div>

          {/* Table */}
          <div className="flex flex-col rounded-[12px] overflow-hidden">

            {/* Header Row */}
            <div className="hidden md:flex bg-[linear-gradient(135deg,#bee3f8,#90cdf4)] rounded-t-[12px] overflow-hidden">
              
              <div className="flex-1 flex items-center justify-center px-5 py-[18px] text-[18px] font-semibold text-[#1a365d] bg-[rgba(66,153,225,0.15)]">
                Our Program
              </div>

              <div className="flex-[0.7] flex items-center justify-center px-5 py-[18px] text-[18px] font-semibold text-[#1a365d] bg-[rgba(66,153,225,0.25)]">
                Category
              </div>

              <div className="flex-1 flex items-center justify-center px-5 py-[18px] text-[18px] font-semibold text-[#1a365d] bg-[rgba(245,101,101,0.15)]">
                Other Courses
              </div>
            </div>

            {/* Rows */}
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row border-b border-[#e2e8f0] transition hover:bg-[#f7fafc] rounded-[12px] md:rounded-none md:shadow-none shadow-sm mb-5 md:mb-0 overflow-hidden md:overflow-visible"
              >
                {/* Category (mobile first) */}
                <div className="order-[-1] md:order-none flex-[0.7] flex items-center justify-start md:justify-center px-5 py-[15px] md:py-5 bg-[#bee3f8] md:bg-[#ebf8ff] text-[#2c5282] font-semibold">
                  {item.category}
                </div>

                {/* Program */}
                <div className="flex-1 flex items-start px-5 py-[15px] md:py-5 bg-[#f0fff4] text-[#2d3748]">
                  <ThumbsUp className="w-5 h-5 text-[#38a169] mr-3 flex-shrink-0 mt-[2px]" />
                  {item.program}
                </div>

                {/* Other */}
                <div className="flex-1 flex items-start px-5 py-[15px] md:py-5 bg-[#fff5f5] text-[#2d3748]">
                  <ThumbsDown className="w-5 h-5 text-[#e53e3e] mr-3 flex-shrink-0 mt-[2px]" />
                  {item.other}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}