// "use client";

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import Image from "next/image";
// import { ArrowRight, Users, Trophy, Headphones } from "lucide-react";
// import EnrollmentForm from "@/components/common/enrollmentform/enrollmentform";

// const COLORS = {
//   primary: "#0EA5E9",
//   primaryDark: "#0284C7",
//   primaryDarker: "#0369A1",
//   primaryLight: "#7DD3FC",
//   primarySoft: "#E0F2FE",
//   primaryBg: "#F0F9FF",
//   dark: "#0F172A",
//   slate: "#475569",
//   slateLight: "#94A3B8",
//   slateBorder: "#E2E8F0",
//   borderLight: "#F1F5F9",
//   white: "#FFFFFF",
//   heroBg: "#0C1628",
//   heroBorder: "#1E2D45",
// };

// const FEATURES = [
//   {
//     title: "Live Classes",
//     subtitle: "Real-time learning experience",
//     icon: "/skillfymefeatureclasses.svg",
//     points: [
//       "100% Live Interactive Sessions",
//       "Expert Instructor-Led Classes",
//       "Flexible Scheduling Options",
//       "Unlimited Access To Recordings",
//     ],
//     stat: "200+",
//     statLabel: "Monthly Classes",
//     accent: COLORS.primary,
//     accentSoft: COLORS.primarySoft,
//     accentBorder: "#BAE6FD",
//     accentDim: COLORS.primaryLight,
//   },
//   {
//     title: "24/7 Support",
//     subtitle: "Never feel stuck",
//     icon: "/skillfymefeaturesupport.svg",
//     points: [
//       "Round-the-clock Assistance",
//       "1-on-1 Doubt Clearing",
//       "Real-time Query Resolution",
//       "Lifetime Support Access",
//     ],
//     stat: "< 30min",
//     statLabel: "Response Time",
//     accent: COLORS.primaryDark,
//     accentSoft: COLORS.primaryBg,
//     accentBorder: "#BAE6FD",
//     accentDim: COLORS.primaryLight,
//   },
//   {
//     title: "Placement Prep",
//     subtitle: "Land your dream job",
//     icon: "/skillfymefeatureplacements.svg",
//     points: [
//       "Professional Resume Building",
//       "Mock Interview Sessions",
//       "Placement Assistance Guarantee",
//       "Top Company Referrals",
//     ],
//     stat: "93%",
//     statLabel: "Placement Rate",
//     accent: COLORS.primaryDarker,
//     accentSoft: COLORS.primaryBg,
//     accentBorder: COLORS.primaryLight,
//     accentDim: COLORS.primaryLight,
//   },
//   {
//     title: "Hands-On Learning",
//     subtitle: "Build real-world skills",
//     icon: "/skillfymefeaturehandson.svg",
//     points: [
//       "Industry-Ready Projects",
//       "Practical Skill Development",
//       "Module-Based Project Work",
//       "Real-World Case Studies",
//     ],
//     stat: "50+",
//     statLabel: "Live Projects",
//     accent: COLORS.primary,
//     accentSoft: COLORS.primarySoft,
//     accentBorder: "#BAE6FD",
//     accentDim: COLORS.primaryLight,
//   },
// ];

// const TRUSTED_COMPANIES = ["Google", "Microsoft", "Amazon", "Netflix", "Adobe"];

// const HERO_POINTS = [
//   "Personalized learning paths tailored to your goals",
//   "Industry-recognized certifications upon completion",
//   "Access to a vibrant community of peers & mentors",
//   "Career guidance from experienced professionals",
//   "Resume Prep,Mock Interviews before real interviews",
//   "Clear direction so you always know what to do next",
// ];

// const HERO_STATS = [
//   { value: 5000, suffix: "+", label: "Students", Icon: Users },
//   { value: 93, suffix: "%", label: "Success Rate", Icon: Trophy },
//   { value: 24, suffix: "/7", label: "Support", Icon: Headphones },
// ];

// // ============================================================================
// // CUSTOM HOOKS
// // ============================================================================

// const useIntersectionObserver = (threshold = 0.07, once = true) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           if (once) observer.disconnect();
//         } else if (!once) {
//           setIsVisible(false);
//         }
//       },
//       { threshold },
//     );

//     const element = ref.current;
//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//       observer.disconnect();
//     };
//   }, [threshold, once]);

//   return { ref, isVisible };
// };

// const useAnimatedCounter = (target, duration = 1500) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           let start = 0;
//           const stepTime = 16;
//           const increment = target / (duration / stepTime);

//           const timer = setInterval(() => {
//             start += increment;
//             if (start >= target) {
//               setCount(target);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, stepTime);

//           return () => clearInterval(timer);
//         }
//       },
//       { threshold: 0.5 },
//     );

//     const element = ref.current;
//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//       observer.disconnect();
//     };
//   }, [target, duration, hasAnimated]);

//   return { count, ref };
// };

// // ============================================================================
// // COMPONENTS
// // ============================================================================

// const AnimatedCounter = ({ target, suffix = "" }) => {
//   const { count, ref } = useAnimatedCounter(target);
//   return (
//     <span ref={ref} className="tabular-nums">
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const CheckIcon = () => (
//   <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
//     <path
//       d="M1.8 4.5L3.6 6.3L7.2 2.7"
//       stroke={COLORS.primaryLight}
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const Eyebrow = ({ text }) => (
//   <div className="flex items-center gap-2 mb-5">
//     <span
//       className="w-6 h-0.5 rounded-full"
//       style={{ background: COLORS.primary }}
//     />
//     <span
//       className="text-xs font-bold tracking-wider uppercase"
//       style={{ color: COLORS.primaryDark }}
//     >
//       {text}
//     </span>
//   </div>
// );

// const SectionHeader = () => (
//   <div className="mb-14 md:mb-20">
//     <Eyebrow text="What We Offer" />
//     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-16">
//       <div className="relative text-center lg:text-left flex-1">
//         <h2
//           className="cl-display text-slate-900 leading-[1.1] mb-4 lg:mb-0"
//           style={{
//             fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
//             fontWeight: 400,
//             letterSpacing: "-0.01em",
//           }}
//         >
//           Transform Your{" "}
//           <em style={{ fontStyle: "italic", color: "#0EA5E9" }}>
//             Learning Journey
//           </em>
//         </h2>
//       </div>

//       <p
//         className="text-slate-500 max-w-sm leading-relaxed lg:text-right lg:self-center"
//         style={{ fontSize: "0.9rem" }}
//       >
//         Empowering your success through industry-leading features, expert
//         guidance, and unwavering support.
//       </p>
//     </div>
//   </div>
// );

// const HeroCard = ({ isVisible, onEnrollClick }) => {
//   return (
//     <div
//       className="xl:w-[390px] flex-shrink-0 opacity-0 translate-x-[-28px]"
//       style={{
//         animation: isVisible
//           ? "slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards"
//           : "none",
//       }}
//     >
//       <div
//         className="relative rounded-2xl overflow-hidden h-full flex flex-col p-8 md:p-9"
//         style={{
//           background: COLORS.heroBg,
//           border: `1px solid ${COLORS.heroBorder}`,
//           minHeight: 540,
//         }}
//       >
//         {/* Background Effects */}
//         <div
//           className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
//           style={{
//             background: `radial-gradient(circle, ${COLORS.primaryLight}30 0%, transparent 68%)`,
//           }}
//         />
//         <div
//           className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
//           style={{
//             background: `radial-gradient(circle, ${COLORS.primary}22 0%, transparent 68%)`,
//           }}
//         />
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `radial-gradient(circle, ${COLORS.primaryLight}15 1px, transparent 1px)`,
//             backgroundSize: "20px 20px",
//           }}
//         />

//         {/* Scanline Effect */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div
//             className="absolute left-0 right-0 h-[60px] animate-scanline"
//             style={{
//               background: `linear-gradient(to bottom, transparent, ${COLORS.primaryLight}08, transparent)`,
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col h-full">
//           <div className="flex items-center gap-2 mb-4"></div>

//           <h3 className="font-bold text-white leading-tight mb-3 text-3xl">
//             Your Success,
//             <br />
//             <span style={{ color: COLORS.primaryLight }}>Our Mission</span>
//           </h3>

//           <p className="text-sm text-slate-500 leading-relaxed mb-6">
//             Join thousands of learners who have transformed their careers with
//             our comprehensive learning ecosystem.
//           </p>

//           <ul className="space-y-3 flex-1">
//             {HERO_POINTS.map((text, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-start gap-2.5 text-sm text-slate-400"
//               >
//                 <span
//                   className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
//                   style={{
//                     background: `${COLORS.primaryLight}1A`,
//                     border: `1px solid ${COLORS.primaryLight}4D`,
//                   }}
//                 >
//                   <CheckIcon />
//                 </span>
//                 {text}
//               </li>
//             ))}
//           </ul>

//           {/* Stats */}
//           <div
//             className="mt-8 pt-6 grid grid-cols-3 gap-4"
//             style={{ borderTop: `1px solid ${COLORS.heroBorder}` }}
//           >
//             {HERO_STATS.map((stat, idx) => (
//               <div key={idx} className="text-center">
//                 <stat.Icon
//                   className="w-3.5 h-3.5 mx-auto mb-1.5 opacity-75"
//                   style={{ color: COLORS.primaryLight }}
//                 />
//                 <div className="text-3xl font-bold text-white">
//                   <AnimatedCounter target={stat.value} suffix={stat.suffix} />
//                 </div>
//                 <div
//                   className="text-[0.63rem] font-semibold tracking-wider uppercase mt-1"
//                   style={{ color: COLORS.slate }}
//                 >
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button onClick={onEnrollClick} className="cta-button mt-6 w-full">
//             Start Learning Today
//             <ArrowRight className="w-3.5 h-3.5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ feature, index, isHovered, onHover }) => {
//   const getAccentStyles = () => ({
//     borderColor: isHovered ? feature.accentBorder : COLORS.slateBorder,
//     boxShadow: isHovered
//       ? `0 8px 32px ${feature.accent}18, 0 2px 8px ${feature.accent}0A`
//       : "0 1px 4px rgba(15,23,42,0.05)",
//   });

//   return (
//     <div
//       onMouseEnter={() => onHover(index)}
//       onMouseLeave={() => onHover(null)}
//       className="opacity-0 translate-y-6"
//       style={{
//         animation: "fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
//         animationDelay: `${0.2 + index * 0.1}s`,
//       }}
//     >
//       <div
//         className="relative rounded-2xl p-6 md:p-7 h-full flex flex-col transition-all duration-300 bg-white"
//         style={getAccentStyles()}
//       >
//         {/* Corner Accent */}
//         <div
//           className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl rounded-bl-[80px] transition-opacity duration-300 pointer-events-none"
//           style={{ background: feature.accentSoft, opacity: isHovered ? 1 : 0 }}
//         />

//         {/* Header */}
//         <div className="flex items-start justify-between mb-4">
//           <div
//             className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
//             style={{
//               background: isHovered ? feature.accentSoft : COLORS.borderLight,
//               border: `1px solid ${isHovered ? feature.accentBorder : COLORS.slateBorder}`,
//             }}
//           >
//             <Image
//               src={feature.icon}
//               alt={feature.title}
//               width={20}
//               height={20}
//             />
//           </div>
//           <span
//             className="text-[0.68rem] font-bold tracking-wider"
//             style={{ color: COLORS.slateLight }}
//           >
//             {String(index + 1).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Title */}
//         <h3
//           className="font-bold text-xl tracking-tight mb-0.5"
//           style={{ color: COLORS.dark }}
//         >
//           {feature.title}
//         </h3>
//         <p
//           className="text-xs font-medium mb-3"
//           style={{ color: COLORS.slateLight }}
//         >
//           {feature.subtitle}
//         </p>

//         {/* Accent Line */}
//         <div
//           className="h-0.5 rounded-full mb-4 transition-all duration-300"
//           style={{
//             width: isHovered ? 40 : 20,
//             background: `linear-gradient(to right, ${feature.accent}, ${feature.accentDim})`,
//           }}
//         />

//         {/* Points */}
//         <ul className="space-y-2.5 flex-1">
//           {feature.points.map((point, i) => (
//             <li
//               key={i}
//               className="flex items-center gap-2.5 text-sm transition-all duration-200"
//               style={{ color: isHovered ? COLORS.dark : COLORS.slate }}
//             >
//               <span
//                 className="w-1.5 h-1.5 rounded-full flex-shrink-0"
//                 style={{ background: feature.accent, opacity: 0.6 }}
//               />
//               {point}
//             </li>
//           ))}
//         </ul>

//         {/* Footer */}
//         <div
//           className="flex items-center justify-between mt-5 pt-4 transition-all duration-300"
//           style={{
//             borderTop: `1px solid ${isHovered ? feature.accentBorder : COLORS.borderLight}`,
//           }}
//         >
//           <div>
//             <div
//               className="text-2xl font-bold leading-tight"
//               style={{ color: feature.accent }}
//             >
//               {feature.stat}
//             </div>
//             <div
//               className="text-[0.63rem] font-semibold tracking-wider uppercase mt-1"
//               style={{ color: COLORS.slateLight }}
//             >
//               {feature.statLabel}
//             </div>
//           </div>
//           <div
//             className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
//             style={{
//               background: isHovered ? feature.accent : feature.accentSoft,
//               border: `1px solid ${isHovered ? feature.accent : feature.accentBorder}`,
//             }}
//           >
//             <ArrowRight
//               className="w-3.5 h-3.5 transition-colors duration-300"
//               style={{ color: isHovered ? COLORS.white : feature.accent }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const TrustStrip = () => (
//   <div
//     className="mt-16 pt-8 opacity-0 animate-fadeIn"
//     style={{
//       borderTop: `1px solid ${COLORS.slateBorder}`,
//       animationDelay: "0.75s",
//     }}
//   >
//     <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
//       <span
//         className="text-[0.72rem] font-semibold tracking-wider uppercase"
//         style={{ color: COLORS.slateLight }}
//       >
//         Trusted by learners from
//       </span>
//       {TRUSTED_COMPANIES.map((company, idx) => (
//         <span
//           key={idx}
//           className="font-semibold transition-opacity duration-200 cursor-default hover:opacity-90"
//           style={{ color: COLORS.slate, opacity: 0.5 }}
//         >
//           {company}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// // ============================================================================
// // MAIN COMPONENT
// // ============================================================================

// const SkillfymeFeatures = () => {
//   const { ref: sectionRef, isVisible } = useIntersectionObserver(0.07, true);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mounted, setMounted] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleCloseForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <>
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Sora:wght@400;500;600;700&display=swap");

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(24px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-28px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes scanline {
//           0% {
//             transform: translateY(-100%);
//           }
//           100% {
//             transform: translateY(400%);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             background-position: -200% center;
//           }
//           100% {
//             background-position: 200% center;
//           }
//         }

//         .animate-scanline {
//           animation: scanline 6s linear infinite;
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.9s ease forwards;
//         }

//         .cta-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           width: 100%;
//           padding: 11px 20px;
//           border-radius: 8px;
//           font-family: "Plus Jakarta Sans", sans-serif;
//           font-size: 0.82rem;
//           font-weight: 600;
//           letter-spacing: 0.03em;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//           transition: all 0.25s;
//           border: 1px solid ${COLORS.primaryLight}59;
//           background: ${COLORS.primaryLight}14;
//           color: ${COLORS.primaryLight};
//         }

//         .cta-button::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             120deg,
//             transparent 30%,
//             ${COLORS.primaryLight}26 50%,
//             transparent 70%
//           );
//           background-size: 200% 100%;
//           animation: shimmer 3s linear infinite;
//         }

//         .cta-button:hover {
//           background: ${COLORS.primaryLight}29;
//           border-color: ${COLORS.primaryLight}8C;
//           color: ${COLORS.primarySoft};
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="relative px-5 pt-0 pb-20 md:pb-28 lg:pb-32 overflow-hidden"
//         style={{
//           fontFamily: "'Plus Jakarta Sans', sans-serif",
//           background: "#F8FCFF",
//           color: COLORS.dark,
//         }}
//       >
//         {/* Background Grid */}
//         <div
//           className="absolute inset-0 pointer-events-none opacity-20"
//           style={{
//             backgroundImage: `linear-gradient(${COLORS.primarySoft} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.primarySoft} 1px, transparent 1px)`,
//             backgroundSize: "44px 44px",
//           }}
//         />

//         {/* Radial Gradients */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: `radial-gradient(ellipse 70% 50% at 80% 10%, ${COLORS.primarySoft}60 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, ${COLORS.primarySoft}30 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 50%, #F8FCFF 35%, transparent 100%)`,
//           }}
//         />

//         <div className="relative max-w-[1380px] mx-auto">
//           <SectionHeader />

//           <div className="flex flex-col xl:flex-row gap-6 xl:gap-7">
//             <HeroCard
//               isVisible={isVisible}
//               onEnrollClick={() => setShowForm(true)}
//             />

//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
//               {FEATURES.map((feature, index) => (
//                 <FeatureCard
//                   key={index}
//                   feature={feature}
//                   index={index}
//                   isHovered={hoveredCard === index}
//                   onHover={setHoveredCard}
//                 />
//               ))}
//             </div>
//           </div>

//           <TrustStrip />
//         </div>
//         {showForm && <EnrollmentForm onClose={handleCloseForm} />}
//       </section>
//     </>
//   );
// };

// export default SkillfymeFeatures;





// --------------------------------------------new design--------------------------------------------------------------

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Users, Trophy, Headphones } from "lucide-react";
import EnrollmentForm from "@/components/common/enrollmentform/enrollmentform";



 

// ================= DATA =================

const FEATURES = [
  {
    title: "Live Classes",
    subtitle: "Real-time learning experience",
    icon: "/skillfymefeatureclasses.svg",
    points: [
      "100% Live Interactive Sessions",
      "Expert Instructor-Led Classes",
      "Flexible Scheduling Options",
      "Unlimited Access To Recordings",
    ],
    stat: "200+",
    statLabel: "Monthly Classes",
  },
  {
    title: "24/7 Support",
    subtitle: "Never feel stuck",
    icon: "/skillfymefeaturesupport.svg",
    points: [
      "Round-the-clock Assistance",
      "1-on-1 Doubt Clearing",
      "Real-time Query Resolution",
      "Lifetime Support Access",
    ],
    stat: "< 30min",
    statLabel: "Response Time",
  },
  {
    title: "Placement Prep",
    subtitle: "Land your dream job",
    icon: "/skillfymefeatureplacements.svg",
    points: [
      "Professional Resume Building",
      "Mock Interview Sessions",
      "Placement Assistance Guarantee",
      "Top Company Referrals",
    ],
    stat: "93%",
    statLabel: "Placement Rate",
  },
  {
    title: "Hands-On Learning",
    subtitle: "Build real-world skills",
    icon: "/skillfymefeaturehandson.svg",
    points: [
      "Industry-Ready Projects",
      "Practical Skill Development",
      "Module-Based Project Work",
      "Real-World Case Studies",
    ],
    stat: "50+",
    statLabel: "Live Projects",
  },
];

const HERO_POINTS = [
  "Personalized learning paths tailored to your goals",
  "Industry-recognized certifications upon completion",
  "Access to a vibrant community of peers & mentors",
  "Career guidance from experienced professionals",
  "Resume Prep & Mock Interviews",
   "Hands-on projects to build real-world experience",
  "Clear direction so you always know what to do next",
];

const HERO_STATS = [
  { value: 5000, suffix: "+", label: "Students", Icon: Users },
  { value: 93, suffix: "%", label: "Success Rate", Icon: Trophy },
  { value: 24, suffix: "/7", label: "Support", Icon: Headphones },
];

const TRUSTED_COMPANIES = ["Google", "Microsoft", "Amazon", "Netflix", "Adobe"];

// ================= HOOK =================

const useAnimatedCounter = (target) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          let start = 0;
          const duration = 1200;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, triggered]);

  return { count, ref };
};

const AnimatedCounter = ({ target, suffix }) => {
  const { count, ref } = useAnimatedCounter(target);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ================= HEADER =================

// const SectionHeader = () => (
//   <div className="mb-12">
//     <p className="text-sm text-cyan-600 font-medium mb-2 text-center lg:text-left">
//       What We Offer
//     </p>

//     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//       <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 text-center lg:text-left">
//         Transform Your{" "}
//         <span className="text-cyan-600">Learning Journey</span>
//       </h2>

//       <p className="text-gray-500 text-sm max-w-md text-center lg:text-right">
//         Industry-leading features designed to help you learn faster and get hired.
//       </p>
//     </div>
//   </div>
// );


const SectionHeader = () => (
  <div className="mb-12 text-center mt-0">

    {/* Main heading */}
    <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
      <span className="text-cyan-600">Transform Your Learning Journey</span>
    </h2>

    {/* Description */}
    <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
      Industry-leading features designed to help you learn faster, build real-world skills,
      and confidently land your dream job.
    </p>

  </div>
);

// ================= MAIN =================

const SkillfymeFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <SectionHeader />

        <div className="flex flex-col xl:flex-row gap-6">

          {/* HERO CARD */}
          <div className="xl:w-[360px] flex-shrink-0">
            <div className="h-full flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 md:p-7 hover:border-cyan-200 hover:shadow-xl transition">

              <div>
                <h3 className="text-2xl font-semibold text-cyan-600">
                  Your Success,
                  <br />
                  <span className="text-cyan-600">Our Mission</span>
                </h3>

                <p className="text-sm text-gray-500 mt-3">
                  Join thousands of learners transforming their careers with structured programs.
                </p>

                <ul className="mt-5 space-y-3">
                  {HERO_POINTS.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 mt-2 bg-cyan-500 rounded-full" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-200">
                {HERO_STATS.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xl font-semibold text-gray-900">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowForm(true)}
                className="mt-6 w-full py-3 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition"
              >
                Start Learning Today
              </button>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-7 
                hover:border-cyan-200 hover:shadow-xl transition"
              >
                {/* TOP */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-20 h-auto bg-cyan-50 rounded-lg flex items-center justify-center">
                    <Image src={feature.icon} alt="" width={35} height={30} />
                  </div>

                  <span className="text-xs text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {feature.subtitle}
                </p>

                {/* POINTS */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xl font-semibold text-gray-900">
                      {feature.stat}
                    </p>
                    <p className="text-xs text-gray-500">
                      {feature.statLabel}
                    </p>
                  </div>

                  <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-cyan-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* TRUST STRIP */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">
            Trusted by learners from
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {TRUSTED_COMPANIES.map((c, i) => (
             <span
  key={i}
  className="trusted-pulse font-medium"
  style={{ animationDelay: `${i * 0.3}s` }}
>
  {c}
</span>
            ))}
          </div>
        </div>

      </div>

      {showForm && <EnrollmentForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default SkillfymeFeatures;





 