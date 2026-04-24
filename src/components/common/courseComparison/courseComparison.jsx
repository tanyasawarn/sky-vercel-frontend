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


// -------------------new design -----------------------------------------------------------------------------------------------------




// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Check, X, ArrowRight } from "lucide-react";
// import SectionHeading from "../sectionheading/sectionheading";

// export default function CourseComparison({ title, data }) {
//   const [animated, setAnimated] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setAnimated(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

//         @keyframes shimmer {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }

//         @keyframes pulseRing {
//           0%, 100% {
//             box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.4);
//           }
//           50% {
//             box-shadow: 0 0 0 8px rgba(255, 107, 53, 0);
//           }
//         }
//       `}</style>

//       <section
//         ref={containerRef}
//         className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24"
//         style={{
//           background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
//           fontFamily: "'Raleway', sans-serif",
//         }}
//       >
//         {/* Subtle grid */}
//         <div
//           className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(10,25,60,0.04) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(10,25,60,0.04) 1px, transparent 1px)
//             `,
//             backgroundSize: "56px 56px",
//             maskImage:
//               "radial-gradient(ellipse at center, black 20%, transparent 75%)",
//             WebkitMaskImage:
//               "radial-gradient(ellipse at center, black 20%, transparent 75%)",
//           }}
//         />

//         {/* Ambient glows */}
//         <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-[#4f7cff] opacity-[0.06] blur-[100px] pointer-events-none" />
//         <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.05] blur-[120px] pointer-events-none" />

//         <div className="relative z-[10] max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12">
//           {/* HEADER */}
//           <div
//             className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14"
//             style={{
//               opacity: animated ? 1 : 0,
//               transform: animated ? "translateY(0)" : "translateY(20px)",
//               transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
//             }}
//           >
//             <div className="max-w-[640px]">
//               <div className="inline-flex items-center gap-2.5 mb-4">
//                 <div className="h-[1px] w-7 bg-[#ff6b35]" />
//                 <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[#ff6b35] font-bold">
//                   The Comparison
//                 </span>
//               </div>
//               <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0a1938]">
//                 See the difference.{" "}
//                 <span className="text-[#0a1938]/35">
//                   Side by side, feature by feature.
//                 </span>
//               </h2>
//             </div>
//           </div>

//           {/* COMPARISON TABLE */}
//           <div
//             className="relative"
//             style={{
//               opacity: animated ? 1 : 0,
//               transform: animated ? "translateY(0)" : "translateY(30px)",
//               transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
//             }}
//           >
//             {/* Decorative corner brackets */}
//             <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#ff6b35]/40 rounded-tl-2xl pointer-events-none z-[2] hidden md:block" />
//             <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#ff6b35]/40 rounded-br-2xl pointer-events-none z-[2] hidden md:block" />

//             {/* ============ DESKTOP TABLE ============ */}
//             <div className="hidden md:block relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/40 border border-[#0a1938]/8 shadow-[0_20px_60px_rgba(10,25,60,0.06)]">
//               {/* Winning column highlight bar */}
//               <div className="absolute left-0 top-0 bottom-0 w-[38%] bg-gradient-to-b from-[#ff6b35]/[0.03] to-[#ff6b35]/[0.08] pointer-events-none" />

//               {/* Header Row */}
//               <div className="relative grid grid-cols-[1fr_0.8fr_1fr] bg-[#0a1938] text-white">
//                 <div className="relative px-6 lg:px-8 py-5 flex items-center gap-3">
//                   <div className="flex items-center gap-2.5">
                    
//                     <div>
                  
//                       <div className="text-[1rem] lg:text-[1.1rem] font-extrabold tracking-tight text-white mt-0.5">
//                         Our Program
//                       </div>
//                     </div>
//                   </div>
//                   {/* Highlight accent */}
//                   <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#ff8a5e]" />
//                 </div>

//                 <div className="px-5 lg:px-6 py-5 flex items-center justify-center border-l border-r border-white/10">
//                   <div className="text-center">
             
//                     <div className="text-[1rem] lg:text-[1.1rem] font-bold tracking-tight text-white/85 mt-0.5">
//                       Category
//                     </div>
//                   </div>
//                 </div>

//                 <div className="px-6 lg:px-8 py-5 flex items-center justify-end">
//                   <div className="text-right">
//                     <div className="text-[1rem] lg:text-[1.1rem] font-bold tracking-tight text-white/70 mt-0.5">
//                       Other Courses
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Data Rows */}
//               <div className="relative">
//                 {data.map((item, index) => {
//                   const isHovered = hoveredIndex === index;
//                   return (
//                     <div
//                       key={index}
//                       onMouseEnter={() => setHoveredIndex(index)}
//                       onMouseLeave={() => setHoveredIndex(null)}
//                       className="relative grid grid-cols-[1fr_0.8fr_1fr] border-b border-[#0a1938]/6 last:border-b-0 transition-colors duration-300"
//                       style={{
//                         opacity: animated ? 1 : 0,
//                         transform: animated
//                           ? "translateX(0)"
//                           : "translateX(-20px)",
//                         transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${
//                           0.3 + index * 0.08
//                         }s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${
//                           0.3 + index * 0.08
//                         }s, background-color 0.3s ease`,
//                         backgroundColor: isHovered
//                           ? "rgba(255,255,255,0.6)"
//                           : "transparent",
//                       }}
//                     >
//                       {/* Active row indicator */}
//                       <div
//                         className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff6b35] transition-all duration-400 ${
//                           isHovered ? "opacity-100" : "opacity-0"
//                         }`}
//                       />

//                       {/* OUR PROGRAM */}
//                       <div className="relative px-6 lg:px-8 py-5 lg:py-6 flex items-start gap-3.5">
//                         <div
//                           className={`flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b35] flex items-center justify-center mt-0.5 transition-all duration-400 ${
//                             isHovered
//                               ? "scale-110 shadow-[0_4px_16px_rgba(255,107,53,0.45)]"
//                               : "shadow-[0_2px_8px_rgba(255,107,53,0.25)]"
//                           }`}
//                         >
//                           <Check
//                             size={14}
//                             strokeWidth={3}
//                             className="text-white"
//                           />
//                         </div>
//                         <p className="text-[0.9rem] lg:text-[0.95rem] text-[#0a1938] font-semibold leading-[1.55] flex-1">
//                           {item.program}
//                         </p>
//                       </div>

//                       {/* CATEGORY (center spine) */}
//                       <div className="relative px-5 lg:px-6 py-5 lg:py-6 flex items-center justify-center border-l border-r border-[#0a1938]/6">
//                         {/* Row number */}
//                         <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[0.55rem] font-mono font-bold text-[#0a1938]/25 tracking-wider">
//                           {String(index + 1).padStart(2, "0")}
//                         </div>
//                         <div className="text-center">
//                           <span
//                             className={`inline-block text-[0.82rem] lg:text-[0.9rem] font-bold tracking-[-0.01em] transition-colors duration-400 ${
//                               isHovered ? "text-[#ff6b35]" : "text-[#0a1938]/75"
//                             }`}
//                           >
//                             {item.category}
//                           </span>
//                         </div>
//                       </div>

//                       {/* OTHER COURSES */}
//                       <div className="relative px-6 lg:px-8 py-5 lg:py-6 flex items-start gap-3.5">
//                         <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0a1938]/8 flex items-center justify-center mt-0.5 transition-all duration-400">
//                           <X
//                             size={14}
//                             strokeWidth={3}
//                             className="text-[#0a1938]/40"
//                           />
//                         </div>
//                         <p className="text-[0.9rem] lg:text-[0.95rem] text-[#0a1938]/55 font-medium leading-[1.55] flex-1">
//                           {item.other}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Footer stripe */}
//               <div className="relative bg-gradient-to-r from-[#0a1938] via-[#0a1938] to-[#0a1938] text-white px-6 lg:px-8 py-4 flex items-center justify-between overflow-hidden">
              
               
//               </div>
//             </div>

//             {/* ============ MOBILE STACKED VIEW ============ */}
//             <div className="md:hidden space-y-4">
//               {data.map((item, index) => (
//                 <div
//                   key={index}
//                   className="relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm border border-[#0a1938]/8 shadow-[0_8px_24px_rgba(10,25,60,0.04)]"
//                   style={{
//                     opacity: animated ? 1 : 0,
//                     transform: animated
//                       ? "translateY(0)"
//                       : "translateY(20px)",
//                     transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${
//                       0.2 + index * 0.07
//                     }s`,
//                   }}
//                 >
//                   {/* Category header */}
//                   <div className="relative bg-[#0a1938] px-5 py-3 flex items-center justify-between">
//                     <div className="flex items-center gap-2.5">
//                       <span className="text-[0.6rem] font-mono font-bold text-[#ff6b35] tracking-wider">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                       <span className="text-[0.82rem] font-bold text-white tracking-tight">
//                         {item.category}
//                       </span>
//                     </div>
//                     <div className="h-[2px] w-6 bg-gradient-to-r from-[#ff6b35] to-transparent" />
//                   </div>

//                   {/* Our Program */}
//                   <div className="relative px-5 py-4 border-b border-[#0a1938]/6 bg-[#ff6b35]/[0.03]">
//                     <div className="flex items-start gap-3">
//                       <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff6b35] flex items-center justify-center mt-0.5 shadow-[0_2px_8px_rgba(255,107,53,0.3)]">
//                         <Check size={12} strokeWidth={3} className="text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[0.58rem] uppercase tracking-[0.22em] text-[#ff6b35] font-bold mb-1">
//                           Our Program
//                         </div>
//                         <p className="text-[0.88rem] text-[#0a1938] font-semibold leading-[1.5]">
//                           {item.program}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Others */}
//                   <div className="px-5 py-4">
//                     <div className="flex items-start gap-3">
//                       <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0a1938]/8 flex items-center justify-center mt-0.5">
//                         <X
//                           size={12}
//                           strokeWidth={3}
//                           className="text-[#0a1938]/40"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-[0.58rem] uppercase tracking-[0.22em] text-[#0a1938]/40 font-bold mb-1">
//                           Other Courses
//                         </div>
//                         <p className="text-[0.88rem] text-[#0a1938]/60 font-medium leading-[1.5]">
//                           {item.other}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
 
//         </div>
//       </section>
//     </>
//   );
// }