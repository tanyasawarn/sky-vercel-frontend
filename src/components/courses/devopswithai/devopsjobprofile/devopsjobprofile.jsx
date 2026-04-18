"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const DevopsBatchProfileApp = () => {
  const experienceData = [
    { label: "0-3 Years", value: 15, color: "#63B3ED" },
    { label: "3-5 Years", value: 15, color: "#4299E1" },
    { label: "5-10 Years", value: 25, color: "#3182CE" },
    { label: "10-15 Years", value: 35, color: "#2C5282" },
    { label: "15+ Years", value: 10, color: "#2A4365" },
  ];

  const companies = [
    {
      name: "Airtel",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg",
    },
    {
      name: "Amazon",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg",
    },
    {
      name: "Accenture",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg",
    },
    {
      name: "BCG",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg",
    },
    {
      name: "Capgemini",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg",
    },
    {
      name: "Swiggy",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg",
    },
    {
      name: "Deloitte",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg",
    },
    {
      name: "Goldman Sachs",
      logo: "https://res.cloudinary.com/duxweqagk/image/upload/f_auto,q_auto/v1766043782/gs_loraiz.svg",
    },
    {
      name: "HP",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg",
    },
    {
      name: "IBM",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg",
    },
    {
      name: "Infosys",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg",
    },
    {
      name: "Oracle",
      logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg",
    },
  ];

  const total = experienceData.reduce((sum, item) => sum + item.value, 0);

  // Calculate conic gradient string
  let gradientString = "";
  let currentAngle = 0;

  experienceData.forEach((item) => {
    const percentage = (item.value / total) * 100;
    const angleIncrement = (percentage / 100) * 360;
    const nextAngle = currentAngle + angleIncrement;

    gradientString += `${item.color} ${currentAngle}deg ${nextAngle}deg`;
    if (currentAngle + angleIncrement < 360) {
      gradientString += ", ";
    }
    currentAngle = nextAngle;
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}

        {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-6 relative animate-[fadeInUp_0.8s_ease_forwards]">
          DevOps Batch Analytics
          <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
        </h2> */}
        <SectionHeading title=" DevOps Batch Analytics" />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Experience Card - Modern Design */}
          <div
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] 
            transition-all duration-500 border border-white/20"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0bf]/5 to-transparent rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1a365d]/5 to-transparent rounded-full blur-2xl -z-10" />

            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            {/* Modern Pie Chart */}
            <div className="relative max-w-[280px] mx-auto mb-8">
              <div
                className="w-full aspect-square rounded-full relative"
                style={{
                  background: `conic-gradient(${gradientString})`,
                  boxShadow: "0 10px 40px -10px rgba(49, 130, 206, 0.3)",
                }}
              >
                {/* Inner circle */}
                <div className="absolute inset-[15%] bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                      35%
                    </div>
                    <div className="text-xs sm:text-sm text-[#4a5568] mt-1 font-medium">
                      10-15 Years
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#0bf]/5 hover:to-transparent transition-all duration-300"
                >
                  <div className="relative">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div
                      className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-40"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#2d3748]">
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: item.color }}
                    >
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Companies Card - Modern Design */}
          <div
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] 
            transition-all duration-500 border border-white/20"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#0bf]/5 to-transparent rounded-full blur-2xl -z-10" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-[#1a365d]/5 to-transparent rounded-full blur-2xl -z-10" />

            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                Companies
              </span>
            </h2>

            {/* Modern Company Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
              {companies.map((company, index) => (
                <div key={index} className="group/card relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#0bf]/10 to-[#1a365d]/10 
                    rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-300 blur-xl"
                  />
                  <div
                    className="relative bg-white rounded-2xl p-3 sm:p-4 
                    shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] 
                    hover:shadow-[0_8px_25px_-5px_rgba(49,130,206,0.15)] 
                    border border-[#e2e8f0]/30 hover:border-[#0bf]/20
                    transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] relative flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={120}
                        height={90}
                        className="object-contain w-full h-full max-w-[100px] sm:max-w-[120px] 
                          filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs font-medium text-[#4a5568] truncate block">
                        {company.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company stats */}
            <div className="mt-8 pt-4 border-t border-[#e2e8f0]/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                    {companies.length}
                  </div>
                  <div className="text-xs text-[#718096] mt-1">Companies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-xs text-[#718096] mt-1">Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                    93%
                  </div>
                  <div className="text-xs text-[#718096] mt-1">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevopsBatchProfileApp;
