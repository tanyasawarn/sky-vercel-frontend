// "use client";

// import React from "react";
// import Image from "next/image";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const DevopsBatchProfileApp = () => {
//   const experienceData = [
//     { label: "0-3 Years", value: 15, color: "#63B3ED" },
//     { label: "3-5 Years", value: 15, color: "#4299E1" },
//     { label: "5-10 Years", value: 25, color: "#3182CE" },
//     { label: "10-15 Years", value: 35, color: "#2C5282" },
//     { label: "15+ Years", value: 10, color: "#2A4365" },
//   ];

//   const companies = [
//     {
//       name: "Airtel",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg",
//     },
//     {
//       name: "Amazon",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg",
//     },
//     {
//       name: "Accenture",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg",
//     },
//     {
//       name: "BCG",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg",
//     },
//     {
//       name: "Capgemini",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg",
//     },
//     {
//       name: "Swiggy",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg",
//     },
//     {
//       name: "Deloitte",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg",
//     },
//     {
//       name: "Goldman Sachs",
//       logo: "https://res.cloudinary.com/duxweqagk/image/upload/f_auto,q_auto/v1766043782/gs_loraiz.svg",
//     },
//     {
//       name: "HP",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg",
//     },
//     {
//       name: "IBM",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg",
//     },
//     {
//       name: "Infosys",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg",
//     },
//     {
//       name: "Oracle",
//       logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg",
//     },
//   ];

//   const total = experienceData.reduce((sum, item) => sum + item.value, 0);

//   // Calculate conic gradient string
//   let gradientString = "";
//   let currentAngle = 0;

//   experienceData.forEach((item) => {
//     const percentage = (item.value / total) * 100;
//     const angleIncrement = (percentage / 100) * 360;
//     const nextAngle = currentAngle + angleIncrement;

//     gradientString += `${item.color} ${currentAngle}deg ${nextAngle}deg`;
//     if (currentAngle + angleIncrement < 360) {
//       gradientString += ", ";
//     }
//     currentAngle = nextAngle;
//   });

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Modern Header */}

//         {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-6 relative animate-[fadeInUp_0.8s_ease_forwards]">
//           DevOps Batch Analytics
//           <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
//         </h2> */}
//         <SectionHeading title=" DevOps Batch Analytics" />

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
//           {/* Experience Card - Modern Design */}
//           <div
//             className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 
//             shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] 
//             transition-all duration-500 border border-white/20"
//           >
//             {/* Decorative background elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0bf]/5 to-transparent rounded-full blur-2xl -z-10" />
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1a365d]/5 to-transparent rounded-full blur-2xl -z-10" />

//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
//               <span className="bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                 Experience
//               </span>
//             </h2>

//             {/* Modern Pie Chart */}
//             <div className="relative max-w-[280px] mx-auto mb-8">
//               <div
//                 className="w-full aspect-square rounded-full relative"
//                 style={{
//                   background: `conic-gradient(${gradientString})`,
//                   boxShadow: "0 10px 40px -10px rgba(49, 130, 206, 0.3)",
//                 }}
//               >
//                 {/* Inner circle */}
//                 <div className="absolute inset-[15%] bg-white rounded-full flex items-center justify-center shadow-inner">
//                   <div className="text-center">
//                     <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                       35%
//                     </div>
//                     <div className="text-xs sm:text-sm text-[#4a5568] mt-1 font-medium">
//                       10-15 Years
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modern Legend */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               {experienceData.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#0bf]/5 hover:to-transparent transition-all duration-300"
//                 >
//                   <div className="relative">
//                     <div
//                       className="w-4 h-4 rounded-full"
//                       style={{ backgroundColor: item.color }}
//                     />
//                     <div
//                       className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-40"
//                       style={{ backgroundColor: item.color }}
//                     />
//                   </div>
//                   <div className="flex-1 flex items-center justify-between">
//                     <span className="text-sm font-medium text-[#2d3748]">
//                       {item.label}
//                     </span>
//                     <span
//                       className="text-sm font-bold"
//                       style={{ color: item.color }}
//                     >
//                       {item.value}%
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Companies Card - Modern Design */}
//           <div
//             className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 
//             shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] 
//             transition-all duration-500 border border-white/20"
//           >
//             {/* Decorative background elements */}
//             <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#0bf]/5 to-transparent rounded-full blur-2xl -z-10" />
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tr from-[#1a365d]/5 to-transparent rounded-full blur-2xl -z-10" />

//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
//               <span className="bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                 Companies
//               </span>
//             </h2>

//             {/* Modern Company Grid */}
//             <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
//               {companies.map((company, index) => (
//                 <div key={index} className="group/card relative">
//                   <div
//                     className="absolute inset-0 bg-gradient-to-br from-[#0bf]/10 to-[#1a365d]/10 
//                     rounded-2xl opacity-0 group-hover/card:opacity-100 transition-all duration-300 blur-xl"
//                   />
//                   <div
//                     className="relative bg-white rounded-2xl p-3 sm:p-4 
//                     shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] 
//                     hover:shadow-[0_8px_25px_-5px_rgba(49,130,206,0.15)] 
//                     border border-[#e2e8f0]/30 hover:border-[#0bf]/20
//                     transform hover:-translate-y-1 transition-all duration-300"
//                   >
//                     <div className="aspect-[4/3] relative flex items-center justify-center">
//                       <Image
//                         src={company.logo}
//                         alt={company.name}
//                         width={120}
//                         height={90}
//                         className="object-contain w-full h-full max-w-[100px] sm:max-w-[120px] 
//                           filter grayscale group-hover/card:grayscale-0 transition-all duration-300"
//                       />
//                     </div>
//                     <div className="mt-2 text-center">
//                       <span className="text-xs font-medium text-[#4a5568] truncate block">
//                         {company.name}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Company stats */}
//             <div className="mt-8 pt-4 border-t border-[#e2e8f0]/50">
//               <div className="grid grid-cols-3 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                     {companies.length}
//                   </div>
//                   <div className="text-xs text-[#718096] mt-1">Companies</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                     500+
//                   </div>
//                   <div className="text-xs text-[#718096] mt-1">Placements</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                     93%
//                   </div>
//                   <div className="text-xs text-[#718096] mt-1">
//                     Success Rate
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevopsBatchProfileApp;






// ---------------------------------------new design -----------------------------------------

"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const DevopsBatchProfileApp = () => {
  const experienceData = [
    { label: "0 – 3 Years", value: 15, tier: "Entry" },
    { label: "3 – 5 Years", value: 15, tier: "Junior" },
    { label: "5 – 10 Years", value: 25, tier: "Mid" },
    { label: "10 – 15 Years", value: 35, tier: "Senior" },
    { label: "15+ Years", value: 10, tier: "Lead" },
  ];

  // Shades of blue from the system palette — lightest → darkest
  const blueScale = ["#9ad8f5", "#4fbfee", "#0bf", "#1e5a99", "#1a365d"];

  const companies = [
    { name: "Airtel", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg" },
    { name: "Accenture", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg" },
    { name: "BCG", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg" },
    { name: "Capgemini", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg" },
    { name: "Swiggy", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg" },
    { name: "Deloitte", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg" },
    { name: "Goldman Sachs", logo: "https://res.cloudinary.com/duxweqagk/image/upload/f_auto,q_auto/v1766043782/gs_loraiz.svg" },
    { name: "HP", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg" },
    { name: "IBM", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg" },
    { name: "Infosys", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg" },
    { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg" },
  ];

  const total = experienceData.reduce((sum, item) => sum + item.value, 0);
  const dominantBucket = experienceData.reduce((max, item) =>
    item.value > max.value ? item : max
  );

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8faff]">
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#dbe7f5 1px, transparent 1px), linear-gradient(90deg, #dbe7f5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0bf 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1a365d 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* ---------- Heading ---------- */}
        <div className="mb-8 lg:mb-12">
          <SectionHeading title="DevOps Batch Analytics" />
          <p className="mt-4 text-center text-[#475569] text-[15px] sm:text-base leading-[1.75] max-w-2xl mx-auto">
            A snapshot of who learns with us and where they go next — real data
            from real cohorts.
          </p>
        </div>

        {/* ---------- Main grid ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-8">
          {/* ==================== LEFT: Experience Distribution ==================== */}
          <article className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5">
            {/* Top accent band */}
            <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                  <span className="font-mono tabular-nums text-[#0bf]">01</span>
                  <span className="w-6 h-px bg-[#1a365d]/30" />
                  Experience Mix
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                  <span className="text-[11px] font-semibold text-[#1a365d] tracking-wide">
                    Live Data
                  </span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] leading-[1.1] font-extrabold text-[#1a365d] tracking-tight mb-2">
                Who's in your batch?
              </h3>
              <p className="text-[14px] text-[#1a365d]/60 mb-8">
                Distribution of students by professional experience.
              </p>

              {/* Hero stat */}
              <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-[#1a365d] via-[#0f2642] to-[#0bf]/95 text-white relative overflow-hidden">
                {/* Decorative rings */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/10"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full border border-white/5"
                />

                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-2">
                  Dominant Group
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-[3rem] sm:text-[3.5rem] font-extrabold leading-none tracking-tight text-white">
                    {dominantBucket.value}
                    <span className="text-[1.75rem] text-[#0bf] font-bold">
                      %
                    </span>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">
                      {dominantBucket.label}
                    </p>
                    <p className="text-[11px] text-white/60 font-medium mt-0.5">
                      {dominantBucket.tier} professionals
                    </p>
                  </div>
                </div>
              </div>

              {/* Horizontal bar distribution */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a365d]/55">
                    Full Breakdown
                  </p>
                  <p className="text-[10px] font-semibold tracking-wider uppercase text-[#1a365d]/45 tabular-nums">
                    Total · {total}%
                  </p>
                </div>

                <div className="flex flex-col gap-3.5">
                  {experienceData.map((item, index) => {
                    const color = blueScale[index];
                    return (
                      <div key={index} className="group/bar">
                        {/* Row meta */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-[10px] tabular-nums font-bold text-[#0bf] tracking-wider">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[13px] font-semibold text-[#1a365d]">
                              {item.label}
                            </span>
                            <span className="text-[10px] font-semibold tracking-wider uppercase text-[#1a365d]/40">
                              · {item.tier}
                            </span>
                          </div>
                          <span className="text-[13px] font-extrabold tabular-nums text-[#1a365d]">
                            {item.value}%
                          </span>
                        </div>

                        {/* Bar track */}
                        <div className="relative h-2 rounded-full bg-[#1a365d]/5 overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 group-hover/bar:brightness-110"
                            style={{
                              width: `${item.value}%`,
                              background: `linear-gradient(90deg, ${color}, ${color}dd)`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>

          {/* ==================== RIGHT: Companies ==================== */}
          <article className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5 flex flex-col">
            {/* Top accent band */}
            <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                  <span className="font-mono tabular-nums text-[#0bf]">02</span>
                  <span className="w-6 h-px bg-[#1a365d]/30" />
                  Placement Network
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20">
                  <span className="text-[11px] font-semibold text-[#1a365d] tracking-wide tabular-nums">
                    {companies.length}+ Partners
                  </span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] leading-[1.1] font-extrabold text-[#1a365d] tracking-tight mb-2">
                Where alumni land.
              </h3>
              <p className="text-[14px] text-[#1a365d]/60 mb-7">
                Companies actively hiring from our DevOps graduate pool.
              </p>

              {/* Company grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3 flex-1">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="group/logo relative aspect-[5/3] bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 rounded-xl p-3 flex items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0bf]/30 hover:bg-white"
                  >
                    {/* Top-left index — appears on hover */}
                    <span className="absolute top-1.5 left-2 font-mono text-[8px] tabular-nums font-bold text-[#0bf]/60 tracking-wider opacity-0 group-hover/logo:opacity-100 transition-opacity">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={100}
                        height={60}
                        className="object-contain max-w-[80%] max-h-[70%] filter grayscale opacity-70 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats strip */}
              <div className="mt-6 pt-6 border-t border-[#1a365d]/10">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: `${companies.length}+`, label: "Companies" },
                    { value: "500+", label: "Placements" },
                    { value: "93%", label: "Success Rate" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-3 rounded-xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5"
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1.5">
                        <span className="font-mono text-[9px] tabular-nums font-bold text-[#0bf] tracking-wider">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px w-3 bg-[#1a365d]/20" />
                      </div>
                      <p className="text-[1.5rem] sm:text-[1.75rem] font-extrabold leading-none tracking-tight bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent tabular-nums">
                        {stat.value}
                      </p>
                      <p className="mt-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase text-[#1a365d]/55">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DevopsBatchProfileApp;