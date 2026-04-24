// import React, { useState, useEffect } from "react";
// import {CheckCircle} from "lucide-react";
// import TechnologiesSection from "./devopstechstats/devopstechstats";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const techData = [
//   { category: "Cloud Platforms and AI", items: ["AWS", "PyTorch", "Moogsoft"] },
//   { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Istio"] },
//   { category: "CI/CD & Automation", items: ["Jenkins", "GitLab CI/CD", "FluxCD"] },
//   { category: "Infrastructure as Code (IaC)", items: ["Terraform", "AWS CloudFormation", "Ansible"] },
// ];

// const devopsskills = [
//   "DevOps Methodology",
//   "Continuous Integration",
//   "Continuous Delivery",
//   "Configuration Management",
//   "Containerization",
//   "DevOps on AWS",
//   "Source Control",
//   "Deployment Automation",
//   "Cloud Platforms",
//   "DevSecOps",
//   "Version Control Systems (VCS)",
//   "Infrastructure as Code (IaC)",
//   "Azure DevOps",
//   "Serverless Architecture",
//   "Infrastructure Provisioning",
//   "Microservices",
//   "Logging and Monitoring",
//   "Orchestration",
//   "GitOps Tools",
//   "AI-Driven Automation",
// ];

// const ToolsFramework = () => {
//   const [activeCategory, setActiveCategory] = useState(0);
// const [isMobileView, setIsMobileView] = useState(false);
//   const [showAllSkills, setShowAllSkills] = useState(false);

//   const DevopsTools =
//     "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopstoolsimage.png";

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCategory((prev) => (prev + 1) % techData.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

 
// useEffect(() => {
//   const handleResize = () => {
//     setIsMobileView(window.innerWidth <= 768);
//   };

//   handleResize(); // 👈 IMPORTANT: set initial value after mount

//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

//   const visibleSkills =
//     isMobileView && !showAllSkills
//       ? devopsskills.slice(0, 5)
//       : devopsskills;

//   return (
//     <>
//       {/* TOOLS SECTION */}
//       <div className="max-w-[1200px] w-full mx-auto px-4 py-8 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] mt-12">
        
//         {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-[-1rem] relative animate-[fadeInUp_0.8s_ease_forwards]">
//           Tools & Technologies
//           <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
//         </h2> */}

//         <SectionHeading title="Tools & Technologies" />

//         <div className="flex justify-center flex-wrap gap-4 my-4">
//           {techData.map((section, index) => (
//             <div
//               key={section.category}
//               onClick={() => setActiveCategory(index)}
//               className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 border-2 ${
//                 activeCategory === index
//                   ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white border-[#0bf] shadow-[0_4px_12px_rgba(0,187,255,0.25)]"
//                   : "bg-[#e6eeff] text-[#2d3748] border-transparent hover:bg-[#d0e1ff] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,187,255,0.15)]"
//               }`}
//             >
//               {section.category}
//             </div>
//           ))}
//         </div>

//         <div className="relative min-h-[300px] max-[480px]:min-h-0">
//           <div className="max-w-[1200px]  w-full mx-auto">
//             <img
//               src={DevopsTools}
//               alt="DevOps Tools"
//               className="w-[1200px] h-auto max-[480px]:w-[400px] max-[480px]:mx-auto max-[480px]:p-4 max-[480px]:scale-110"
//             />
//           </div>
//         </div>
//       </div>

//       <TechnologiesSection />

//       {/* SKILLS SECTION */}
       
//       <SectionHeading title="20+ Skills Covered"/>

//       <div className="px-4 py-0 text-center mt-0">
//         <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 mt-8 mb-12 max-w-[1200px] mx-auto max-[768px]:grid-cols-1 max-[768px]:gap-4">
          
//           {visibleSkills.map((skill, index) => (
//             <div
//               key={skill}
//               style={{ animationDelay: `${index * 0.05}s` }}
//               className="relative flex items-center px-6 py-5 bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden opacity-0 animate-[fadeInUp_0.5s_ease_forwards] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(11,191,255,0.15)]"
//             >
//               <div className="mr-4 text-[#0bf] text-[1.8rem] flex-shrink-0">
//                 <CheckCircle />
//               </div>

//               <p className="text-[1.1rem] font-medium text-[#1a365d] text-left m-0">
//                 {skill}
//               </p>

//               <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(11,191,255,0.1)] to-transparent transition-all duration-700 hover:left-[100%]" />
//             </div>
//           ))}
//         </div>

//         {isMobileView && (
//           <button
//             onClick={() => setShowAllSkills(!showAllSkills)}
//             className="bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white px-7 py-3 text-base font-semibold rounded-full shadow-[0_5px_15px_rgba(11,191,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,191,255,0.4)] active:translate-y-0"
//           >
//             {showAllSkills ? "View Less" : "View More"}
//           </button>
//         )}
//       </div>
//     </>
//   );
// };

// export default ToolsFramework;




// ---------------new design--------------------------------------------------------------------


"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import TechnologiesSection from "./devopstechstats/devopstechstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const techData = [
  {
    category: "Cloud Platforms & AI",
    tagline: "Infrastructure meets intelligence",
    items: ["AWS", "PyTorch", "Moogsoft"],
  },
  {
    category: "Containers & Orchestration",
    tagline: "Package, deploy, scale",
    items: ["Docker", "Kubernetes", "Istio"],
  },
  {
    category: "CI/CD & Automation",
    tagline: "Ship faster, ship safer",
    items: ["Jenkins", "GitLab CI/CD", "FluxCD"],
  },
  {
    category: "Infrastructure as Code",
    tagline: "Version-controlled infrastructure",
    items: ["Terraform", "AWS CloudFormation", "Ansible"],
  },
];

const devopsskills = [
  "DevOps Methodology",
  "Continuous Integration",
  "Continuous Delivery",
  "Configuration Management",
  "Containerization",
  "DevOps on AWS",
  "Source Control",
  "Deployment Automation",
  "Cloud Platforms",
  "DevSecOps",
  "Version Control Systems (VCS)",
  "Infrastructure as Code (IaC)",
  "Azure DevOps",
  "Serverless Architecture",
  "Infrastructure Provisioning",
  "Microservices",
  "Logging and Monitoring",
  "Orchestration",
  "GitOps Tools",
  "AI-Driven Automation",
];

const ToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCategory((prev) => (prev + 1) % techData.length);
        setIsTransitioning(false);
      }, 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryClick = (index) => {
    if (index === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(index);
      setIsTransitioning(false);
    }, 200);
  };

  const activeData = techData[activeCategory];

  const visibleSkills =
    isMobileView && !showAllSkills ? devopsskills.slice(0, 6) : devopsskills;

  return (
    <>
      {/* ==================== TOOLS & TECHNOLOGIES ==================== */}
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
          {/* Heading */}
          <div className="mb-10 lg:mb-14">
            <SectionHeading title="Tools & Technologies" />
          </div>

          {/* Main split: Category index (left) + Tools panel (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-10">
            {/* ---------- LEFT: Category index ---------- */}
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
                <span className="text-[11px] tracking-[0.25em] font-semibold text-[#1a365d]/60 uppercase">
                  Tech Stack
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
              </div>

              <ul className="flex flex-col gap-2">
                {techData.map((section, index) => {
                  const isActive = activeCategory === index;
                  return (
                    <li key={section.category}>
                      <button
                        onClick={() => handleCategoryClick(index)}
                        className={`group relative w-full text-left rounded-xl overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-[0_10px_30px_-12px_rgba(26,54,93,0.25)] ring-1 ring-[#0bf]/30"
                            : "bg-white/40 hover:bg-white hover:shadow-[0_6px_20px_-12px_rgba(26,54,93,0.2)] ring-1 ring-[#1a365d]/5"
                        }`}
                      >
                        {/* Active indicator bar */}
                        <span
                          className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-b from-[#0bf] to-[#1a365d]"
                              : "bg-transparent"
                          }`}
                        />

                        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4">
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <span
                              className={`flex-shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${
                                isActive ? "text-[#0bf]" : "text-[#1a365d]/40"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="min-w-0 flex-1">
                              <h3
                                className={`text-sm sm:text-[15px] font-semibold truncate transition-colors duration-300 ${
                                  isActive
                                    ? "text-[#1a365d]"
                                    : "text-[#1a365d]/70 group-hover:text-[#1a365d]"
                                }`}
                              >
                                {section.category}
                              </h3>
                              <p
                                className={`text-[11px] mt-0.5 truncate transition-colors duration-300 ${
                                  isActive
                                    ? "text-[#0bf]"
                                    : "text-[#1a365d]/45"
                                }`}
                              >
                                {section.items.length} tools · {section.tagline}
                              </p>
                            </div>
                          </div>

                          <svg
                            className={`flex-shrink-0 w-4 h-4 transition-all duration-300 ${
                              isActive
                                ? "text-[#0bf] translate-x-0 opacity-100"
                                : "text-[#1a365d]/40 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </div>

                        {/* Inline tools — mobile only */}
                        {isActive && (
                          <div className="lg:hidden px-4 sm:px-5 pb-4 -mt-1">
                            <div className="pl-7 sm:pl-8 border-l-2 border-[#0bf]/20">
                              <div className="flex flex-wrap gap-2 pt-1">
                                {section.items.map((item, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#0bf]/20 text-[#1a365d]"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ---------- RIGHT: Tools detail panel (desktop) ---------- */}
            <div className="relative hidden lg:block">
              <article
                className={`relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5 transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Top accent band */}
                <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6 flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                      <span className="font-mono tabular-nums text-[#0bf]">
                        {String(activeCategory + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-[#1a365d]/30" />
                      Stack {String(activeCategory + 1).padStart(2, "0")} /{" "}
                      {String(techData.length).padStart(2, "0")}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                      <span className="text-[11px] font-semibold text-[#1a365d] tracking-wide">
                        Production-ready
                      </span>
                    </div>
                  </div>

                  {/* Category title */}
                  <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-extrabold text-[#1a365d] tracking-tight mb-2">
                    {activeData.category}
                  </h3>
                  <p className="text-[14px] text-[#1a365d]/60 mb-8">
                    {activeData.tagline} — the tools that power modern engineering teams.
                  </p>

                  {/* Tool cards grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {activeData.items.map((item, i) => (
                      <div
                        key={i}
                        className="group/tool relative p-5 rounded-xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(26,54,93,0.25)] hover:border-[#0bf]/30"
                      >
                        {/* Corner accent */}
                        <div
                          aria-hidden="true"
                          className="absolute top-0 right-0 w-14 h-14 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-500"
                          style={{
                            background:
                              "radial-gradient(circle at top right, rgba(11,191,255,0.2), transparent 70%)",
                          }}
                        />

                        <div className="flex items-center gap-2 mb-4">
                          <span className="font-mono text-[10px] tabular-nums font-bold text-[#0bf] tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px flex-1 bg-[#1a365d]/15" />
                        </div>

                        <p className="text-lg font-extrabold text-[#1a365d] tracking-tight leading-tight">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Autoplay hint */}
                  <div className="mt-8 pt-6 border-t border-[#1a365d]/10 flex items-center justify-between">
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1a365d]/50">
                      Auto-rotating
                    </p>
                    <div className="flex items-center gap-1.5">
                      {techData.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeCategory
                              ? "w-6 bg-gradient-to-r from-[#0bf] to-[#1a365d]"
                              : "w-1.5 bg-[#1a365d]/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      {/* ==================== SKILLS COVERED ==================== */}
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
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-16 w-[380px] h-[380px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0bf 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          {/* Heading */}
          <div className="mb-8 lg:mb-12">
            <SectionHeading title="20+ Skills Covered" />
            <p className="mt-4 text-center text-[#475569] text-[15px] sm:text-base leading-[1.75] max-w-2xl mx-auto">
              From foundational practices to advanced automation — the complete
              skill set employers look for.
            </p>
          </div>

          {/* Skills card wrapper */}
          <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5">
            {/* Top accent band */}
            <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

            <div className="p-5 sm:p-8 lg:p-10">
              {/* Meta row */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/55">
                  <span className="font-mono tabular-nums text-[#0bf]">
                    {String(devopsskills.length).padStart(2, "0")}
                  </span>
                  <span className="w-6 h-px bg-[#1a365d]/30" />
                  Core Competencies
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#1a365d]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                  Industry-aligned
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3">
                {visibleSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group/skill relative flex items-center gap-3 px-4 py-3.5 rounded-lg bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0bf]/30 overflow-hidden"
                  >
                    {/* Number */}
                    <span className="flex-shrink-0 font-mono text-[10px] tabular-nums font-bold text-[#0bf] tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Divider */}
                    <span className="flex-shrink-0 w-px h-5 bg-[#1a365d]/15 group-hover/skill:bg-[#0bf]/40 transition-colors" />

                    {/* Icon */}
                    <CheckCircle2
                      className="flex-shrink-0 w-4 h-4 text-[#0bf]"
                      strokeWidth={2.5}
                    />

                    {/* Skill name */}
                    <p className="text-[13px] sm:text-sm font-semibold text-[#1a365d] leading-tight truncate">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              {/* View more button — mobile */}
              {isMobileView && devopsskills.length > 6 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white font-semibold text-sm tracking-wide shadow-[0_10px_30px_-8px_rgba(11,191,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-10px_rgba(11,191,255,0.6)]"
                  >
                    <span>
                      {showAllSkills
                        ? "View Less"
                        : `View All ${devopsskills.length} Skills`}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        showAllSkills ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsFramework;