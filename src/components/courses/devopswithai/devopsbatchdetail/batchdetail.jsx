
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { CheckCircle, Calendar, Clock, Users, Sparkles, ArrowRight, Star, Zap, Shield } from "lucide-react";
// import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const BatchDetails = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [openForm, setOpenForm] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const showForm = true;

//   const devopsLP = "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/cas44.png";

//   useEffect(() => {
//     setIsVisible(true);
//     return () => setIsVisible(false);
//   }, []);

//   const handleOpenForm = (batchType) => {
//     if (showForm) setOpenForm(batchType);
//   };

//   const weekendBatch = {
//     id: "weekday",
//     title: "Weekday Batch",
//     tag: "Popular",
//     items: [
//       { label: "Schedule", value: "Mon - Fri", icon: Calendar },
//       { label: "Timing", value: "07:00 PM - 09:00 AM", icon: Clock },
//       { label: "Batch Size", value: "32 Students", icon: Users },
//       { label: "Start Date", value: "13th April", icon: Sparkles },
//     ],
//     perfectFor: [
//       "Fast-paced learner",
//       "Dedicated Learners",
//       "Fast-track Career Change",
//     ],
//     features: [
//       "Live Interactive Sessions",
//       "24/7 Lab Access",
//       "Industry Projects",
//       "Placement Assistance"
//     ],
//     theme: "blue",
//     gradient: "from-blue-600 to-cyan-600",
//     bgGradient: "from-blue-50 via-white to-cyan-50",
//     borderGradient: "from-blue-200 to-cyan-200"
//   };

//   const weekdayBatch = {
//     id: "weekend",
//     title: "Weekend Batch",
//     tag: "Intensive",
//     items: [
//       { label: "Schedule", value: "Sat & Sun", icon: Calendar },
//       { label: "Timing", value: "8:00 PM - 11:00 PM", icon: Clock },
//       { label: "Batch Size", value: "25 Students", icon: Users },
//       { label: "Start Date", value: "Yet To Come", icon: Sparkles },
//     ],
//     perfectFor: [
//       "Working Professionals",
//       "Career Switchers",
//       "Students with Part-time Jobs",
//     ],
//     features: [
//       "Weekend Live Classes",
//       "Recorded Sessions",
//       "Flexible Deadlines",
//       "1-on-1 Mentoring"
//     ],
//     theme: "orange",
//     gradient: "from-orange-500 to-red-600",
//     bgGradient: "from-orange-50 via-white to-red-50",
//     borderGradient: "from-orange-200 to-red-200"
//   };

//   const BatchCard = ({ batchData, index, isHovered, onHover, onOpenForm }) => {

    
//     return (
//       <div
//         className={`relative group transition-all duration-700 transform ${
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         } ${isHovered === batchData.id ? "scale-105" : "scale-100"}`}
//         style={{ transitionDelay: `${index * 150}ms` }}
//         onMouseEnter={() => onHover(batchData.id)}
//         onMouseLeave={() => onHover(null)}
//       >
//         {/* Animated Background */}
//         <div className={`absolute -inset-0.5 bg-gradient-to-r ${batchData.borderGradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
        
//         {/* Main Card */}
//         <div className={`relative bg-gradient-to-br ${batchData.bgGradient} backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100`}>
          
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"></div>
          
//           {/* Header Section */}
//           <div className="relative p-8 pb-0">
//             <div className="flex justify-between items-start mb-6">
//               <div className="space-y-2">
//                 <h2 className={`text-2xl font-bold bg-gradient-to-r ${
//                   batchData.theme === "blue" 
//                     ? "from-blue-600 to-cyan-600" 
//                     : "from-orange-500 to-red-600"
//                 } bg-clip-text text-transparent`}>
//                   {batchData.title}
//                 </h2>
//                 <div className="flex items-center gap-2">
//                   <div className={`h-1 w-12 bg-gradient-to-r ${
//                     batchData.theme === "blue" ? "from-blue-600 to-cyan-600" : "from-orange-500 to-red-600"
//                   } rounded-full`}></div>
//                   <div className={`h-1 w-6 bg-gradient-to-r ${
//                     batchData.theme === "blue" ? "from-blue-600 to-cyan-600" : "from-orange-500 to-red-600"
//                   } rounded-full opacity-50`}></div>
//                 </div>
//               </div>
              
//               <div className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${
//                 batchData.theme === "blue" 
//                   ? "from-blue-500 to-cyan-500" 
//                   : "from-orange-500 to-red-500"
//               } shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
//                 <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
//                 <div className="relative flex items-center gap-2">
//                   <span className="text-xs font-bold text-white uppercase tracking-wider">
//                     {batchData.tag}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Details Grid */}
//           <div className="p-8 pt-6">
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {batchData.items.map((item, idx) => {
//                 const ItemIcon = item.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className="relative group/item p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className={`p-2 rounded-xl bg-gradient-to-br ${
//                         batchData.theme === "blue" 
//                           ? "from-blue-100 to-cyan-100" 
//                           : "from-orange-100 to-red-100"
//                       }`}>
//                         <ItemIcon className={`w-4 h-4 ${
//                           batchData.theme === "blue" ? "text-blue-600" : "text-orange-600"
//                         }`} />
//                       </div>
//                       <div>
//                         <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
//                         <p className="text-sm font-bold text-gray-800">{item.value}</p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Perfect For Section */}
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
              
//                 Perfect For:
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {batchData.perfectFor.map((item, idx) => (
//                   <span
//                     key={idx}
//                     className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white border ${
//                       batchData.theme === "blue" 
//                         ? "border-blue-200 text-blue-700" 
//                         : "border-orange-200 text-orange-700"
//                     } shadow-sm`}
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="mb-8">
//               <h3 className="text-sm font-bold text-gray-700 mb-4">What You Get:</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 {batchData.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center gap-2">
//                     <CheckCircle className={`w-4 h-4 ${
//                       batchData.theme === "blue" ? "text-blue-500" : "text-orange-500"
//                     }`} />
//                     <span className="text-xs text-gray-600">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button
//               onClick={() => onOpenForm(batchData.id)}
//               className={`relative w-full group/btn overflow-hidden rounded-2xl bg-gradient-to-r ${
//                 batchData.gradient
//               } p-[2px] shadow-lg transition-all duration-300 hover:shadow-xl`}
//             >
//               <div className="relative px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover/btn:bg-white/20">
//                 <div className="flex items-center justify-center gap-2">
//                   <span className="text-white font-semibold">Enroll Now</span>
//                   <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
//                 </div>
//               </div>
//             </button>
//           </div>
//         </div>

//         {openForm === batchData.id && <EnrollmentForm onClose={() => onOpenForm(null)} />}
//       </div>
//     );
//   };

//   return (
//     <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
//         {/* Header Section */}
//         <div className="text-center mb-16">
          
//           {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
//             Batch Details & Schedule
//           </h2>
//            */}

//           <SectionHeading title="Batch Details & Schedule" />
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Select the batch that fits your schedule and learning style. Both options come with comprehensive curriculum and expert mentorship.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-24">
//           <BatchCard 
//             batchData={weekendBatch} 
//             index={0}
//             isHovered={hoveredCard}
//             onHover={setHoveredCard}
//             onOpenForm={handleOpenForm}
//           />
//           <BatchCard 
//             batchData={weekdayBatch} 
//             index={1}
//             isHovered={hoveredCard}
//             onHover={setHoveredCard}
//             onOpenForm={handleOpenForm}
//           />
//         </div>

//         {/* Learning Path Section */}
//         <div className="relative">
//           <div className="text-center">
           
//                {/* <h2 className="relative text-center text-[2.2rem] font-bold mb-[-12] bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//  Learning Path
//   <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
// </h2>*/}

//   <SectionHeading title="Learning Path" />
//           </div> 

         

//           <div className="relative rounded-3xl overflow-hidden group">
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//             <img
//               src={devopsLP}
//               alt="devops-learning-path"
//               className="w-full transform group-hover:scale-105 transition-transform duration-700 mt-0"
//             />
//             <div className="absolute inset-0 via-transparent to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BatchDetails;





// ------------------------new design-----------------------------------------------


"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const BatchDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openForm, setOpenForm] = useState(null);
  const showForm = true;

  const devopsLP =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/cas44.png";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenForm = (batchType) => {
    if (showForm) setOpenForm(batchType);
  };

  // ---------- Data ----------
  const weekdayBatch = {
    id: "weekday",
    title: "Weekday Batch",
    tag: "Popular",
    items: [
      { label: "Schedule", value: "Mon – Fri", icon: Calendar },
      { label: "Timing", value: "7:00 PM – 9:00 PM", icon: Clock },
      { label: "Batch Size", value: "32 Students", icon: Users },
      { label: "Start Date", value: "13th April", icon: Sparkles },
    ],
    perfectFor: [
      "Fast-paced Learners",
      "Dedicated Learners",
      "Fast-track Career Change",
    ],
    features: [
      "Live Interactive Sessions",
      "24/7 Lab Access",
      "Industry Projects",
      "Placement Assistance",
    ],
    variant: "light",
  };

  const weekendBatch = {
    id: "weekend",
    title: "Weekend Batch",
    tag: "Intensive",
    items: [
      { label: "Schedule", value: "Sat & Sun", icon: Calendar },
      { label: "Timing", value: "8:00 PM – 11:00 PM", icon: Clock },
      { label: "Batch Size", value: "25 Students", icon: Users },
      { label: "Start Date", value: "Yet To Come", icon: Sparkles },
    ],
    perfectFor: [
      "Working Professionals",
      "Career Switchers",
      "Students with Part-time Jobs",
    ],
    features: [
      "Weekend Live Classes",
      "Recorded Sessions",
      "Flexible Deadlines",
      "1-on-1 Mentoring",
    ],
    variant: "dark",
  };

  // ---------- Card component ----------
  const BatchCard = ({ data, index }) => {
    const isDark = data.variant === "dark";

    return (
      <article
        className={`relative group transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        {/* Card frame */}
        <div
          className={`relative h-full rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-br from-[#1a365d] via-[#0f2642] to-[#0bf]/95 text-white shadow-[0_30px_70px_-25px_rgba(11,11,187,0.5)] ring-1 ring-white/10"
              : "bg-white shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5"
          } group-hover:-translate-y-1`}
        >
          {/* Decorative rings for dark card */}
          {isDark && (
            <>
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 w-64 h-64 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/5"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </>
          )}

          {/* Top accent band */}
          <div
            className={`h-1 ${
              isDark
                ? "bg-gradient-to-r from-[#0bf] via-white to-[#0bf]"
                : "bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]"
            }`}
          />

          <div className="relative p-6 sm:p-7 lg:p-8">
            {/* Header: index + tag */}
            <div className="flex items-center justify-between mb-5">
              <div
                className={`flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase ${
                  isDark ? "text-white/60" : "text-[#1a365d]/50"
                }`}
              >
                <span
                  className={`font-mono tabular-nums ${
                    isDark ? "text-[#0bf]" : "text-[#0bf]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`w-6 h-px ${
                    isDark ? "bg-white/25" : "bg-[#1a365d]/30"
                  }`}
                />
                Batch Option
              </div>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${
                  isDark
                    ? "bg-white/15 border border-white/20 text-white backdrop-blur-sm"
                    : "bg-[#0bf]/10 border border-[#0bf]/20 text-[#1a365d]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    isDark ? "bg-[#0bf]" : "bg-[#0bf]"
                  }`}
                />
                {data.tag}
              </span>
            </div>

            {/* Title */}
            <h3
              className={`text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.05] font-extrabold tracking-tight mb-6 ${
                isDark ? "text-white" : "text-[#1a365d]"
              }`}
            >
              {data.title}
            </h3>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {data.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`relative p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                      isDark
                        ? "bg-white/5 border border-white/10 hover:bg-white/10"
                        : "bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          isDark ? "bg-white/10" : "bg-white/80"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            isDark ? "text-[#0bf]" : "text-[#0bf]"
                          }`}
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] font-semibold tracking-[0.15em] uppercase mb-1 ${
                            isDark ? "text-white/50" : "text-[#1a365d]/55"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-sm font-bold leading-tight ${
                            isDark ? "text-white" : "text-[#1a365d]"
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Perfect For */}
            <div className="mb-6">
              <p
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${
                  isDark ? "text-white/55" : "text-[#1a365d]/55"
                }`}
              >
                Perfect For
              </p>
              <div className="flex flex-wrap gap-2">
                {data.perfectFor.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                      isDark
                        ? "bg-white/8 border border-white/15 text-white/85 hover:bg-white/15"
                        : "bg-white border border-[#1a365d]/10 text-[#1a365d]/80 hover:border-[#0bf]/40"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-7">
              <p
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase mb-3 ${
                  isDark ? "text-white/55" : "text-[#1a365d]/55"
                }`}
              >
                What You Get
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2
                      className={`flex-shrink-0 w-4 h-4 ${
                        isDark ? "text-[#0bf]" : "text-[#0bf]"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={`text-[13px] ${
                        isDark ? "text-white/85" : "text-[#475569]"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleOpenForm(data.id)}
              className={`group/btn relative w-full overflow-hidden rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-white text-[#1a365d] hover:bg-[#f0f9ff] shadow-lg hover:shadow-xl"
                  : "bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white shadow-lg hover:shadow-xl"
              }`}
            >
              <span className="relative flex items-center justify-center gap-2">
                <span className="text-sm tracking-wide">Enroll Now</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              </span>
            </button>
          </div>
        </div>

        {openForm === data.id && (
          <EnrollmentForm onClose={() => setOpenForm(null)} />
        )}
      </article>
    );
  };

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
          background:
            "radial-gradient(circle, #1a365d 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* ---------- Heading ---------- */}
        <div className="mb-8 lg:mb-12">
          <SectionHeading title="Batch Details & Schedule" />
          <p className="mt-4 text-center text-[#475569] text-[15px] sm:text-base leading-[1.75] max-w-2xl mx-auto">
            Select the batch that fits your schedule and learning style. Both
            options include the full curriculum and expert mentorship.
          </p>
        </div>

        {/* ---------- Cards Grid ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          <BatchCard data={weekdayBatch} index={0} />
          <BatchCard data={weekendBatch} index={1} />
        </div>

        {/* ---------- Learning Path ---------- */}
        <div className="relative">
          <div className="mb-8 lg:mb-12">
            <SectionHeading title="Learning Path" />
          </div>

          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

            {/* Meta row */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-[#1a365d]/10">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/55">
                <span className="font-mono tabular-nums text-[#0bf]">03</span>
                <span className="w-6 h-px bg-[#1a365d]/30" />
                Your Roadmap
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#1a365d]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                Industry-aligned
              </span>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden">
              <img
                src={devopsLP}
                alt="DevOps Learning Path"
                className="w-full block transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchDetails;