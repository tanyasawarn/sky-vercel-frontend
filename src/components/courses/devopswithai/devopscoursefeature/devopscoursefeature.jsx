"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { devopsData } from "./devopsdata";
 import CourseComparison from "../../../common/courseComparison/courseComparison";
import InfoBoxStats from "../../../common/infoboxstats/infoboxstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const CourseFeatures = () => {
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef(null);

  const devopsFeatures = [
    {
      title: "Industry Partnerships",
      description: [
        "Real Project Experience",
        "Mentorship from Industry Experts",
        "Direct Hiring Partnerships",
      ],
    },
    {
      title: "Career Acceleration",
      description: [
        "150% Average Salary Increase",
        "95% Job Placement Rate",
        "Lifetime Career Support",
      ],
    },
    {
      title: "Important Tools",
      description: [
        "20+ Industry Tools",
        "Hands-on Lab Environment",
        "Real-world Scenarios",
      ],
    },
    {
      title: "Expert Mentorship",
      description: [
        "FAANG Experienced Mentors",
        "1:1 Guidance Sessions",
        "24/7 Support Community",
      ],
    },
    {
      title: "Industry-level Certifications Prep",
      description: [
        "AWS Associate Enginner",
        "Azure DevOps Engineer",
        "Kubernetes Administrator",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative max-w-[1000px] mx-auto px-8 py-7 mb-2.5 rounded-[20px] bg-[linear-gradient(135deg,#f8faff_0%,#f0f5ff_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
      >
        {/* Title */}
        {/* <h2 className="text-center text-[2.2rem] font-bold mb-12 mt-[-1rem] bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
          Why Choose Our DevOps Program?
        </h2> */}
        <SectionHeading title="Why Choose Our DevOps Program?" />

        {/* List */}
        <div className="flex flex-col gap-10 relative z-[2]">
          {devopsFeatures.map((feature, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              className={`flex items-start transition-all duration-700 ${
                animated
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {/* Number */}
              <div className="min-w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[1.8rem] font-bold mr-6 bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-lg relative z-[2]">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-[12px] flex-1 max-w-[75%] shadow-md border-l-[4px] border-[#0bf] transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-[1.3rem] font-semibold mb-4 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                <ul className="space-y-2">
                  {feature.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#4a5568] text-[0.95rem] leading-[1.6]"
                    >
                      <CheckCircle className="text-[#0095ff] text-[20px] mt-[3px]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector */}
              {index !== devopsFeatures.length - 1 && (
                <div className="absolute left-[30px] top-[60px] bottom-[-2.5rem] w-[2px] bg-gradient-to-b from-[#0bf] to-[#1a365d] opacity-30 z-[1]" />
              )}
            </div>
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <div className="absolute w-[120px] h-[120px] top-[10%] right-[10%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
          <div className="absolute w-[80px] h-[80px] bottom-[20%] left-[5%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
          <div className="absolute w-[60px] h-[60px] top-[50%] right-[20%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
        </div>
      </div>

      <CourseComparison  title="Course" data={devopsData} />

      <InfoBoxStats
        style={{
          background: "linear-gradient(135deg, #f8faff, #f0f5ff)",
        }}
        title="Transform your career with our 12-months No-Cost EMI"
        items={[
          { label: "No-cost EMI from", value: "INR 5,333.33*" },
          { label: "Admission Deadline", value: "27-April-26" },
          { label: "Max EMI Duration", value: "12 months", hideOnMobile: true },
        ]}
      />
    </>
  );
};

export default CourseFeatures;