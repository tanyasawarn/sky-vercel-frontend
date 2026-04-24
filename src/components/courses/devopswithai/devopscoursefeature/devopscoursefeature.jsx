// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { CheckCircle } from "lucide-react";
// import { devopsData } from "./devopsdata";
//  import CourseComparison from "../../../common/courseComparison/courseComparison";
// import InfoBoxStats from "../../../common/infoboxstats/infoboxstats";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const CourseFeatures = () => {
//   const [animated, setAnimated] = useState(false);
//   const containerRef = useRef(null);

//   const devopsFeatures = [
//     {
//       title: "Industry Partnerships",
//       description: [
//         "Real Project Experience",
//         "Mentorship from Industry Experts",
//         "Direct Hiring Partnerships",
//       ],
//     },
//     {
//       title: "Career Acceleration",
//       description: [
//         "150% Average Salary Increase",
//         "95% Job Placement Rate",
//         "Lifetime Career Support",
//       ],
//     },
//     {
//       title: "Important Tools",
//       description: [
//         "20+ Industry Tools",
//         "Hands-on Lab Environment",
//         "Real-world Scenarios",
//       ],
//     },
//     {
//       title: "Expert Mentorship",
//       description: [
//         "FAANG Experienced Mentors",
//         "1:1 Guidance Sessions",
//         "24/7 Support Community",
//       ],
//     },
//     {
//       title: "Industry-level Certifications Prep",
//       description: [
//         "AWS Associate Enginner",
//         "Azure DevOps Engineer",
//         "Kubernetes Administrator",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setAnimated(true);
//       },
//       { threshold: 0.3 }
//     );

//     if (containerRef.current) observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <div
//         ref={containerRef}
//         className="relative max-w-[1000px] mx-auto px-8 py-7 mb-2.5 rounded-[20px] bg-[linear-gradient(135deg,#f8faff_0%,#f0f5ff_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
//       >
//         {/* Title */}
//         {/* <h2 className="text-center text-[2.2rem] font-bold mb-12 mt-[-1rem] bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//           Why Choose Our DevOps Program?
//         </h2> */}
//         <SectionHeading title="Why Choose Our DevOps Program?" />

//         {/* List */}
//         <div className="flex flex-col gap-10 relative z-[2]">
//           {devopsFeatures.map((feature, index) => (
//             <div
//               key={index}
//               style={{ animationDelay: `${index * 0.2}s` }}
//               className={`flex items-start transition-all duration-700 ${
//                 animated
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-8"
//               }`}
//             >
//               {/* Number */}
//               <div className="min-w-[60px] h-[60px] rounded-full flex items-center justify-center text-white text-[1.8rem] font-bold mr-6 bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-lg relative z-[2]">
//                 {index + 1}
//               </div>

//               {/* Content */}
//               <div className="bg-white p-6 rounded-[12px] flex-1 max-w-[75%] shadow-md border-l-[4px] border-[#0bf] transition hover:-translate-y-1 hover:shadow-lg">
//                 <h3 className="text-[1.3rem] font-semibold mb-4 bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                   {feature.title}
//                 </h3>

//                 <ul className="space-y-2">
//                   {feature.description.map((point, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-[#4a5568] text-[0.95rem] leading-[1.6]"
//                     >
//                       <CheckCircle className="text-[#0095ff] text-[20px] mt-[3px]" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Connector */}
//               {index !== devopsFeatures.length - 1 && (
//                 <div className="absolute left-[30px] top-[60px] bottom-[-2.5rem] w-[2px] bg-gradient-to-b from-[#0bf] to-[#1a365d] opacity-30 z-[1]" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Floating Shapes */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
//           <div className="absolute w-[120px] h-[120px] top-[10%] right-[10%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
//           <div className="absolute w-[80px] h-[80px] bottom-[20%] left-[5%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
//           <div className="absolute w-[60px] h-[60px] top-[50%] right-[20%] rounded-full bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-10 animate-pulse" />
//         </div>
//       </div>

//       <CourseComparison  title="Course" data={devopsData} />

//       <InfoBoxStats
//         style={{
//           background: "linear-gradient(135deg, #f8faff, #f0f5ff)",
//         }}
//         title="Transform your career with our 12-months No-Cost EMI"
//         items={[
//           { label: "No-cost EMI from", value: "INR 5,333.33*" },
//           { label: "Admission Deadline", value: "27-April-26" },
//           { label: "Max EMI Duration", value: "12 months", hideOnMobile: true },
//         ]}
//       />
//     </>
//   );
// };

// export default CourseFeatures;



// ----------------------------------------------new design---------------------------------------------------------------


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { ArrowUpRight, Check, Briefcase, TrendingUp, Wrench, Users, Award } from "lucide-react";
// import { devopsData } from "./devopsdata";
// import CourseComparison from "../../../common/courseComparison/courseComparison";
// import InfoBoxStats from "../../../common/infoboxstats/infoboxstats";

// const CourseFeatures = () => {
//   const [animated, setAnimated] = useState(false);
//   const containerRef = useRef(null);

//   const devopsFeatures = [
//     {
//       icon: Briefcase,
//       tag: "Industry Connection",
//       title: "Industry Partnerships",
//       headline: "Built with the companies that hire you.",
//       description: [
//         "Real Project Experience",
//         "Mentorship from Industry Experts",
//         "Direct Hiring Partnerships",
//       ],
//       metric: { value: "200+", label: "Hiring Partners" },
//     },
//     {
//       icon: TrendingUp,
//       tag: "Outcomes",
//       title: "Career Acceleration",
//       headline: "Measurable career outcomes, not promises.",
//       description: [
//         "150% Average Salary Increase",
//         "95% Job Placement Rate",
//         "Lifetime Career Support",
//       ],
//       metric: { value: "150%", label: "Avg Salary Hike" },
//     },
//     {
//       icon: Wrench,
//       tag: "Tooling",
//       title: "Important Tools",
//       headline: "Master the stack you'll ship with on day one.",
//       description: [
//         "20+ Industry Tools",
//         "Hands-on Lab Environment",
//         "Real-world Scenarios",
//       ],
//       metric: { value: "20+", label: "Production Tools" },
//     },
//     {
//       icon: Users,
//       tag: "Mentorship",
//       title: "Expert Mentorship",
//       headline: "Learn directly from FAANG-grade engineers.",
//       description: [
//         "FAANG Experienced Mentors",
//         "1:1 Guidance Sessions",
//         "24/7 Support Community",
//       ],
//       metric: { value: "1:1", label: "Weekly Mentor Calls" },
//     },
//     {
//       icon: Award,
//       tag: "Certification",
//       title: "Industry-level Certifications Prep",
//       headline: "Walk in certified, walk out hired.",
//       description: [
//         "AWS Associate Engineer",
//         "Azure DevOps Engineer",
//         "Kubernetes Administrator",
//       ],
//       metric: { value: "03", label: "Global Certifications" },
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setAnimated(true);
//       },
//       { threshold: 0.15 }
//     );
//     if (containerRef.current) observer.observe(containerRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

//         @keyframes spreadFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes drawLine {
//           from {
//             transform: scaleY(0);
//           }
//           to {
//             transform: scaleY(1);
//           }
//         }
//       `}</style>

//       <section
//         ref={containerRef}
//         className="relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden py-16 sm:py-20 md:py-28"
//         style={{ fontFamily: "'Raleway', sans-serif" }}
//       >
//         {/* Subtle grid pattern */}
//         <div
//           className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
//             `,
//             backgroundSize: "48px 48px",
//             maskImage:
//               "radial-gradient(ellipse at center, black 30%, transparent 80%)",
//             WebkitMaskImage:
//               "radial-gradient(ellipse at center, black 30%, transparent 80%)",
//           }}
//         />

//         {/* Ambient glows */}
//         <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-[#ff6b35] opacity-[0.04] blur-[130px] pointer-events-none" />
//         <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.04] blur-[110px] pointer-events-none" />

//         <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
//           {/* SECTION HEADER */}
//           <div className="mb-12 sm:mb-16 md:mb-20">
//             <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
//               {/* Left: Title block */}
//               <div className="col-span-12 lg:col-span-7">
//                 <div className="inline-flex items-center gap-3 mb-5 sm:mb-7">
//                   <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
//                   <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
//                     Why Choose Us
//                   </span>
//                 </div>

//                 <h2
//                   className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 text-[#0a0a0a]"
//                   style={{ fontWeight: 800 }}
//                 >
//                   Built different.
//                   <br />
//                   <span className="text-[#0a0a0a]/35">Engineered for outcomes.</span>
//                 </h2>

//                 <p className="max-w-[520px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-[#0a0a0a]/65 leading-[1.65] font-light">
//                   Five reasons learners choose our DevOps program over generic certifications. Each one backed by hard numbers, not marketing copy.
//                 </p>
//               </div>

//               {/* Right: Top stats */}
//               <div className="col-span-12 lg:col-span-5 flex lg:justify-end">
//                 <div className="flex gap-6 sm:gap-10 pt-2">
//                   <div>
//                     <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#ff6b35]">
//                       05
//                     </div>
//                     <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
//                       Pillars
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#0a0a0a]">
//                       95%
//                     </div>
//                     <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
//                       Placed
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#0a0a0a]">
//                       4.9
//                     </div>
//                     <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
//                       Rating
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 sm:mt-14 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/20 via-[#0a0a0a]/5 to-transparent" />
//           </div>

//           {/* FEATURES — EDITORIAL SPREADS */}
//           <div className="relative">
//             {/* Continuous timeline rail (desktop only) */}
//             <div
//               className={`hidden md:block absolute left-[26px] top-0 bottom-0 w-[2px] origin-top transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                 animated ? "scale-y-100" : "scale-y-0"
//               }`}
//               style={{
//                 background:
//                   "linear-gradient(to bottom, transparent 0%, rgba(255,107,53,0.25) 8%, rgba(255,107,53,0.25) 92%, transparent 100%)",
//               }}
//             />

//             {devopsFeatures.map((feature, index) => {
//               const Icon = feature.icon;
//               const isLast = index === devopsFeatures.length - 1;

//               return (
//                 <div
//                   key={index}
//                   className="relative pb-12 sm:pb-14 md:pb-20"
//                   style={{
//                     opacity: animated ? 1 : 0,
//                     transform: animated ? "translateY(0)" : "translateY(40px)",
//                     transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${
//                       0.1 + index * 0.12
//                     }s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${
//                       0.1 + index * 0.12
//                     }s`,
//                   }}
//                 >
//                   {/* Hairline divider above (except for first) */}
//                   {index !== 0 && (
//                     <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0a0a0a]/15 via-[#0a0a0a]/5 to-transparent" />
//                   )}

//                   <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-10 pt-12 sm:pt-14 md:pt-16">
//                     {/* LEFT RAIL: Number marker + Icon */}
//                     <div className="col-span-2 md:col-span-1 relative">
//                       {/* Number bubble - sits on the timeline */}
//                       <div className="relative z-[2] flex items-center justify-center">
//                         <div className="relative w-[54px] h-[54px] rounded-full bg-[#fafaf7] border-2 border-[#ff6b35] flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,53,0.15)]">
//                           <span className="text-[1.05rem] font-extrabold text-[#ff6b35] tracking-tight">
//                             {String(index + 1).padStart(2, "0")}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* CENTER: Tag + Headline */}
//                     <div className="col-span-10 md:col-span-6">
//                       {/* Tag with icon */}
//                       <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
//                         <Icon
//                           size={14}
//                           className="text-[#ff6b35]"
//                           strokeWidth={2.5}
//                         />
//                         <span className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-[#ff6b35] font-bold">
//                           {feature.tag}
//                         </span>
//                       </div>

//                       {/* Big editorial headline */}
//                       <h3
//                         className="text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a0a0a] mb-3 sm:mb-4"
//                         style={{ fontWeight: 800 }}
//                       >
//                         {feature.headline}
//                       </h3>

//                       {/* Subtitle */}
//                       <p className="text-[0.85rem] sm:text-[0.92rem] text-[#0a0a0a]/55 font-medium uppercase tracking-[0.1em] mb-5 sm:mb-6">
//                         {feature.title}
//                       </p>

//                       {/* Bullets */}
//                       <ul className="space-y-2.5 sm:space-y-3">
//                         {feature.description.map((point, i) => (
//                           <li
//                             key={i}
//                             className="flex items-start gap-3 group"
//                           >
//                             <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ff6b35]/10 flex items-center justify-center mt-[2px] group-hover:bg-[#ff6b35] transition-colors duration-300">
//                               <Check
//                                 size={11}
//                                 className="text-[#ff6b35] group-hover:text-white transition-colors duration-300"
//                                 strokeWidth={3}
//                               />
//                             </div>
//                             <span className="text-[0.9rem] sm:text-[0.95rem] text-[#0a0a0a]/75 font-medium leading-relaxed">
//                               {point}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* RIGHT: Metric Card */}
//                     <div className="col-span-12 md:col-span-5 lg:col-span-4 mt-6 md:mt-0 md:ml-auto md:max-w-[300px] w-full">
//                       <div className="group relative">
//                         {/* Decorative corner brackets */}
//                         <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#ff6b35]/50 rounded-tl-2xl pointer-events-none" />
//                         <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#ff6b35]/50 rounded-br-2xl pointer-events-none" />

//                         <div className="relative bg-white border border-[#0a0a0a]/8 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(10,10,10,0.04)] group-hover:shadow-[0_15px_40px_rgba(10,10,10,0.08)] group-hover:border-[#ff6b35]/30 transition-all duration-500 overflow-hidden">
//                           {/* Hover glow */}
//                           <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b35] opacity-0 group-hover:opacity-[0.08] blur-[60px] rounded-full transition-opacity duration-500 pointer-events-none" />

//                           {/* Metric label at top */}
//                           <div className="flex items-center justify-between mb-3 sm:mb-4">
//                             <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-bold">
//                               Key Metric
//                             </div>
//                             <div className="text-[0.58rem] font-mono font-bold text-[#0a0a0a]/30 tracking-tight">
//                               / {String(index + 1).padStart(2, "0")}
//                             </div>
//                           </div>

//                           {/* Big metric */}
//                           <div className="text-[2.5rem] sm:text-[2.8rem] font-extrabold leading-none text-[#0a0a0a] mb-2 tracking-[-0.02em]">
//                             {feature.metric.value}
//                           </div>

//                           <div className="text-[0.78rem] sm:text-[0.85rem] text-[#0a0a0a]/65 font-semibold mb-4 sm:mb-5">
//                             {feature.metric.label}
//                           </div>

//                           {/* Bottom accent line - grows on hover */}
//                           <div className="relative h-[2px] bg-[#0a0a0a]/8 rounded-full overflow-hidden">
//                             <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8a5e] transition-all duration-700 rounded-full" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* CONVERSION STRIP — replaces the bottom of the section */}
//           <div className="mt-8 sm:mt-12 relative">
//             {/* Corner brackets */}
//             <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#ff6b35]/50 rounded-tl-2xl pointer-events-none z-[2]" />
//             <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#ff6b35]/50 rounded-br-2xl pointer-events-none z-[2]" />

//             <div className="relative bg-[#0a0a0a] text-white rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden shadow-[0_15px_50px_rgba(10,10,10,0.15)]">
//               {/* Internal glow */}
//               <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#ff6b35] opacity-[0.15] blur-[100px] rounded-full pointer-events-none" />
//               <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#ff6b35] opacity-[0.08] blur-[80px] rounded-full pointer-events-none" />

//               <div className="relative grid grid-cols-12 gap-6 lg:gap-8 items-center">
//                 {/* Left: Pitch */}
//                 <div className="col-span-12 lg:col-span-7">
//                   <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
//                     <div className="relative">
//                       <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
//                       <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#ff6b35] animate-ping" />
//                     </div>
//                     <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.25em] text-[#ff6b35] font-bold">
//                       Cohort 07 · Limited Seats
//                     </span>
//                   </div>

//                   <h3 className="text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] font-extrabold leading-[1.15] tracking-tight mb-3 sm:mb-4">
//                     Ready to ship infrastructure
//                     <br />
//                     <span className="text-[#ff6b35]">like the top 5%?</span>
//                   </h3>

//                   <p className="text-[0.9rem] sm:text-[0.95rem] text-white/65 font-light leading-relaxed max-w-[480px]">
//                     Join 5,000+ engineers who switched from theory to production. Apply now — admissions close in 7 days.
//                   </p>
//                 </div>

//                 {/* Right: CTAs */}
//                 <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:items-end">
//                   <button className="group relative w-full lg:w-auto bg-[#ff6b35] text-white px-7 py-4 rounded-full overflow-hidden transition-transform hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,107,53,0.4)]">
//                     <div className="relative z-10 flex items-center justify-center gap-2.5">
//                       <span className="text-[0.85rem] font-bold tracking-[0.1em] uppercase">
//                         Apply Now
//                       </span>
//                       <ArrowUpRight
//                         size={16}
//                         strokeWidth={2.5}
//                         className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                       />
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//                     <div className="absolute inset-0 bg-[#ff4d1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </button>

//                   <button className="text-[0.78rem] font-bold text-white/70 hover:text-white tracking-wide flex items-center gap-2 group">
//                     <span>Talk to a program advisor</span>
//                     <ArrowUpRight
//                       size={13}
//                       className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Existing components below */}
//       <CourseComparison title="Course" data={devopsData} />

//       <InfoBoxStats
//         style={{
//           background: "linear-gradient(135deg, #fafaf7, #f5f5f0)",
//         }}
//         title="Transform your career with our 12-months No-Cost EMI"
//         items={[
//           { label: "No-cost EMI from", value: "INR 5,333.33*" },
//           { label: "Admission Deadline", value: "27-April-26" },
//           { label: "Max EMI Duration", value: "12 months", hideOnMobile: true },
//         ]}
//       />
//     </>
//   );
// };

// export default CourseFeatures;




// ---------------------------------new design-------------------------------------------------------------------------

"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Briefcase, TrendingUp, Wrench, Users, Award } from "lucide-react";
import { devopsData } from "./devopsdata";
import EnrollmentForm from "@/components/common/enrollmentform/enrollmentform";
import CourseComparison from "../../../common/courseComparison/courseComparison";
import InfoBoxStats from "../../../common/infoboxstats/infoboxstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const CourseFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animated, setAnimated] = useState(false);
  const containerRef = useRef(null);
  const [showEnrollment, setShowEnrollment] = useState(false);

  const devopsFeatures = [
    {
      icon: Briefcase,
      tag: "Industry",
      title: "Industry Partnerships",
      headline: "Built with the companies that hire you.",
      description: [
        "Real project experience",
        "Mentorship from industry experts",
        "Direct hiring partnerships",
      ],
      metric: { value: "200+", label: "Hiring Partners" },
    },
    {
      icon: TrendingUp,
      tag: "Outcomes",
      title: "Career Acceleration",
      headline: "Measurable outcomes, not promises.",
      description: [
        "150% average salary increase",
        "93% job placement rate",
        "Lifetime career support",
      ],
      metric: { value: "150%", label: "Avg Salary Hike" },
    },
    {
      icon: Wrench,
      tag: "Tooling",
      title: "Production Tools",
      headline: "Master the stack you'll ship with.",
      description: [
        "20+ industry tools",
        "Hands-on lab environment",
        "Real-world scenarios",
      ],
      metric: { value: "20+", label: "Production Tools" },
    },
    {
      icon: Users,
      tag: "Mentorship",
      title: "Expert Mentorship",
      headline: "Learn from FAANG-grade engineers.",
      description: [
        "FAANG experienced mentors",
        "1:1 guidance sessions",
        "24/7 support community",
      ],
      metric: { value: "1:1", label: "Weekly Mentor Calls" },
    },
    {
      icon: Award,
      tag: "Certification",
      title: "Global Certifications",
      headline: "Walk in certified, walk out hired.",
      description: [
        "AWS Associate Engineer",
        "Azure DevOps Engineer",
        "Kubernetes Administrator",
      ],
      metric: { value: "03", label: "Global Certifications" },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const active = devopsFeatures[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-panel-enter {
          animation: fadeSlide 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative w-full overflow-hidden py-14 sm:py-20 md:py-24"
        style={{
          background: "linear-gradient(135deg,#f8faff,#f0f5ff)",
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,25,60,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,25,60,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />

        {/* Ambient orange glow */}
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full bg-[#ff6b35] opacity-[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-32 w-[350px] h-[350px] rounded-full bg-[#4f7cff] opacity-[0.06] blur-[100px] pointer-events-none" />

        <div className="relative z-[10] max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12">
         
        <div
  className="flex flex-col items-center text-center mb-10 sm:mb-14 md:mb-16"
  style={{
    opacity: animated ? 1 : 0,
    transform: animated ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
  }}
>
 <SectionHeading title="Why Choose Us?"/>

</div>
           

        

          {/* MAIN SHOWCASE — SPLIT LAYOUT */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
            }}
          >
            {/* LEFT: Feature list (selector) */}
            <div className="lg:col-span-5">
              <div className="flex flex-col">
                {devopsFeatures.map((feature, index) => {
                  const isActive = activeIndex === index;
                  const Icon = feature.icon;

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className="group relative text-left py-5 sm:py-6 border-b border-[#0a1938]/8 last:border-b-0 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        {/* Number */}
                        <span
                          className={`text-[0.7rem] font-mono font-bold tracking-wider transition-colors duration-500 ${
                            isActive ? "text-[#ff6b35]" : "text-[#0a1938]/30"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div
                          className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? "bg-[#ff6b35] shadow-[0_4px_16px_rgba(255,107,53,0.35)]"
                              : "bg-[#0a1938]/5"
                          }`}
                        >
                          <Icon
                            size={16}
                            strokeWidth={2.25}
                            className={`transition-colors duration-500 ${
                              isActive ? "text-white" : "text-[#0a1938]/50"
                            }`}
                          />
                        </div>

                        {/* Title */}
                        <div className="flex-1 min-w-0">
                          <h3
                            className={`text-[1rem] sm:text-[1.1rem] font-bold leading-tight transition-colors duration-500 ${
                              isActive ? "text-[#0a1938]" : "text-[#0a1938]/55"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`text-[0.7rem] uppercase tracking-[0.18em] font-semibold mt-1 transition-colors duration-500 ${
                              isActive ? "text-[#ff6b35]" : "text-[#0a1938]/30"
                            }`}
                          >
                            {feature.tag}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className={`transition-all duration-500 ${
                            isActive
                              ? "text-[#ff6b35] translate-x-0 opacity-100"
                              : "text-[#0a1938]/30 -translate-x-2 opacity-0 group-hover:opacity-60 group-hover:translate-x-0"
                          }`}
                        />
                      </div>

                      {/* Active indicator bar */}
                      <div
                        className={`absolute left-0 bottom-[-1px] h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#ff8a5e] transition-all duration-700 ease-out ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Active feature detail panel */}
            <div className="lg:col-span-7 lg:pl-6">
              <div
                key={activeIndex}
                className="feature-panel-enter relative"
              >
                {/* Big tag line */}
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <ActiveIcon
                    size={14}
                    strokeWidth={2.5}
                    className="text-[#ff6b35]"
                  />
                  <span className="text-[0.65rem] uppercase tracking-[0.28em] text-[#ff6b35] font-bold">
                    {active.tag} · 0{activeIndex + 1} / 0{devopsFeatures.length}
                  </span>
                </div>

                {/* Editorial headline */}
                <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0a1938] mb-6 sm:mb-8">
                  {active.headline}
                </h3>

                {/* Points — clean inline list */}
                <ul className="space-y-4 mb-8 sm:mb-10">
                  {active.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 group/item"
                      style={{
                        animation: `fadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) ${
                          0.1 + i * 0.08
                        }s backwards`,
                      }}
                    >
                      <span className="text-[0.65rem] font-mono font-bold text-[#ff6b35] tracking-wider">
                        0{i + 1}
                      </span>
                      <div className="h-[1px] w-6 bg-[#ff6b35]/40 group-hover/item:w-10 group-hover/item:bg-[#ff6b35] transition-all duration-400" />
                      <span className="text-[0.92rem] sm:text-[1rem] text-[#0a1938]/80 font-medium">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Metric bar — clean, no card */}
                <div className="flex items-end justify-between pt-6 border-t border-[#0a1938]/10">
                  <div>
                    <div className="text-[0.6rem] uppercase tracking-[0.25em] text-[#0a1938]/40 font-bold mb-2">
                      Key Metric
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold leading-none text-[#0a1938] tracking-[-0.03em]">
                        {active.metric.value}
                      </span>
                      <span className="text-[0.85rem] sm:text-[0.95rem] text-[#0a1938]/60 font-semibold">
                        {active.metric.label}
                      </span>
                    </div>
                  </div>

                  {/* Progress dots */}
                  <div className="flex items-center gap-1.5 pb-2">
                    {devopsFeatures.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === activeIndex
                            ? "w-6 bg-[#ff6b35]"
                            : "w-1 bg-[#0a1938]/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIM CONVERSION STRIP */}
          <div
            className="mt-14 sm:mt-20 relative rounded-2xl overflow-hidden"
            style={{
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.35s",
            }}
          >
            <div className="relative bg-[#0a1938] p-6 sm:p-8 overflow-hidden">
              {/* Internal glow */}
              <div className="absolute -top-32 -right-20 w-80 h-80 bg-[#ff6b35] opacity-[0.18] blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#4f7cff] opacity-[0.12] blur-[90px] rounded-full pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2.5 mb-3">
                    
  
                  </div>
                  <h3 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-white">
                    Ready to ship like the{" "}
                    <span className="text-[#ff6b35]">top 5%?</span>
                  </h3>
                  <p className="text-[0.85rem] text-white/55 font-light mt-2 max-w-[480px]">
                    Join 5,000+ engineers. Admissions close in 7 days.
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <button className="text-[0.78rem] font-semibold text-white/70 hover:text-white transition-colors tracking-wide hidden sm:flex items-center gap-1.5 group">
                    Talk to advisor
                  </button>
                  <button onClick={() => setShowEnrollment(true)} className="group relative bg-[#ff6b35] text-white px-6 py-3.5 rounded-full overflow-hidden transition-transform hover:scale-[1.03] shadow-[0_8px_24px_rgba(255,107,53,0.35)]">
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="text-[0.8rem] font-bold tracking-[0.08em] uppercase">
                        Apply Now
                      </span>
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showEnrollment && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="relative w-full max-w-lg">
      <EnrollmentForm onClose={() => setShowEnrollment(false)} />
    </div>
  </div>
)}
      </section>

      {/* Existing components below */}
      <CourseComparison title="Course" data={devopsData} />

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

// Small inline stat component
const Stat = ({ value, label, accent }) => (
  <div>
    <div
      className={`text-[1.5rem] sm:text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] ${
        accent ? "text-[#ff6b35]" : "text-[#0a1938]"
      }`}
    >
      {value}
    </div>
    <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a1938]/50 font-semibold mt-1.5">
      {label}
    </div>
  </div>
);

export default CourseFeatures;