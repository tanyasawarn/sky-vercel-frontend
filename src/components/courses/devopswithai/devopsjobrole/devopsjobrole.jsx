// "use client";

// import React, { useState, useRef, useEffect, useContext } from "react";
// import { UserContext } from "../../../../context/usercontext";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

 

// // Roles (unchanged)
// const rolesIN = [
//      { name: "DevOps Architect", openings: "7,000+", salary: "INR 30 LPA", description: "DevOps Architects are responsible for designing and implementing DevOps strategies..." },
//   { name: "DevOps Engineer", openings: "12,000+", salary: "INR 10 LPA", description: "DevOps Engineers integrate software development with IT operations..." },
//   { name: "SRE", openings: "10,000+", salary: "INR 15 LPA", description: "Site Reliability Engineers are responsible for reliability and scalability..." },
//   { name: "Security Engineer (DevSecOps)", openings: "10,000+", salary: "INR 12 LPA", description: "Security Engineers integrate security practices into DevOps workflows..." },
//   { name: "Infrastructure Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Infrastructure Engineers design and maintain infrastructure for applications..." },
//   { name: "Platform Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Platform Engineers develop and manage platforms for development and deployment..." },
//   { name: "Integration Specialist", openings: "9,000+", salary: "INR 8 LPA", description: "Integration Specialists ensure software systems work seamlessly together..." },
//   { name: "Sr. DevOps Cloud Engineer", openings: "5,000+", salary: "INR 25 LPA", description: "Senior DevOps Cloud Engineers lead cloud-based DevOps solutions..." },
// ];
// const rolesUS =  [
//   { name: "DevOps Architect", openings: "9,000+", salary: "USD 140,000", description: rolesIN[0].description },
//   { name: "DevOps Engineer", openings: "10,000+", salary: "USD 180,000", description: rolesIN[1].description },
//   { name: "SRE", openings: "4,000 to 7,000+", salary: "USD 144,134", description: rolesIN[2].description },
//   { name: "Security Engineer (DevSecOps)", openings: "3,000 to 5,000+", salary: "USD 127,066", description: rolesIN[3].description },
//   { name: "Infrastructure Engineer", openings: "12,000+", salary: "USD 127,066", description: rolesIN[4].description },
//   { name: "Platform Engineer", openings: "7,000 to 10,000+", salary: "USD 7,600", description: rolesIN[5].description },
//   { name: "Integration Specialist", openings: "3,500+", salary: "USD 130,047", description: rolesIN[6].description },
//   { name: "Sr. DevOps Cloud Engineer", openings: "3,000 to 5,000+", salary: "USD 148,162", description: rolesIN[7].description },
// ];

// const DevOpsRoles = () => {
//   const { userCountry } = useContext(UserContext);
//   const roles = userCountry === "IN" ? rolesIN : rolesUS;

//   const [selectedRole, setSelectedRole] = useState(roles[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [contentAnimation, setContentAnimation] = useState("enter");

//   const sliderRef = useRef(null);

//   const handleRoleClick = (role, index) => {
//     if (activeIndex === index) return;

//     setContentAnimation("exit");

//     setTimeout(() => {
//       setSelectedRole(role);
//       setActiveIndex(index);
//       setContentAnimation("enter");

//       if (sliderRef.current) {
//         const buttonWidth = sliderRef.current.children[0].offsetWidth;
//         sliderRef.current.scrollTo({
//           left: index * buttonWidth,
//           behavior: "smooth",
//         });
//       }
//     }, 300);
//   };

//   useEffect(() => {
//     setSelectedRole(roles[activeIndex]);
//   }, [roles, activeIndex]);

//   return (
//     <div className="flex justify-center items-center p-8 rounded-xl max-w-[1200px] w-full mx-auto bg-[linear-gradient(135deg,#f8faff,#f0f5ff)]">
      
//       <div className="w-full max-w-[900px] text-center">
        
//         {/* Title */}
//         {/* <h2 className="text-[2.2rem] font-bold mb-12 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent relative inline-block">
//           What Can I Become?
//           <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
//         </h2> */}
//         <SectionHeading title="What Can I Become?" />

//         {/* Slider */}
//         <div className="relative mb-12 px-6">
//           <div
//             ref={sliderRef}
//             className="flex overflow-x-auto gap-4 py-4 scroll-smooth"
//           >
//             {roles.map((role, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleRoleClick(role, index)}
//                 className={`min-w-[180px] px-6 py-4 rounded-xl font-semibold transition-all ${
//                   activeIndex === index
//                     ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white shadow-lg scale-105"
//                     : "bg-white text-[#1a365d] shadow-md hover:-translate-y-1"
//                 }`}
//               >
//                 {role.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div
//           className={`bg-white p-10 rounded-[20px] text-left shadow-xl transition-all duration-500 ${
//             contentAnimation === "enter"
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 -translate-y-5"
//           }`}
//         >
//           <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
//             <h3 className="text-2xl font-extrabold text-[#1a365d]">
//               {selectedRole.name}
//             </h3>

//             <div className="flex items-center gap-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white px-4 py-2 rounded-full font-bold text-sm">
            
//               {selectedRole.openings} Openings
//             </div>
//           </div>

//           <p className="text-[1.1rem] text-[#444] mb-8 leading-[1.7]">
//             {selectedRole.description}
//           </p>

//           {/* Details */}
//           <div className="flex flex-wrap gap-6">
            
//             <div className="flex items-center gap-4 bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] p-6 rounded-xl flex-1 min-w-[220px] justify-center">
           
//               <div>
//                 <p className="text-sm text-gray-500 font-semibold">Job Openings</p>
//                 <p className="text-lg font-bold text-[#1a365d]">
//                   {selectedRole.openings}
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] p-6 rounded-xl flex-1 min-w-[220px] justify-center">
            
//               <div>
//                 <p className="text-sm text-gray-500 font-semibold">Average Salary</p>
//                 <p className="text-lg font-bold text-[#1a365d]">
//                   {selectedRole.salary}
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevOpsRoles;





// ---------------------------------------new design----------------------------------------------------------------------------


"use client";

import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../../context/usercontext";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

// ---------- Data (unchanged) ----------
const rolesIN = [
  { name: "DevOps Architect", openings: "7,000+", salary: "INR 30 LPA", description: "DevOps Architects are responsible for designing and implementing DevOps strategies..." },
  { name: "DevOps Engineer", openings: "12,000+", salary: "INR 10 LPA", description: "DevOps Engineers integrate software development with IT operations..." },
  { name: "SRE", openings: "10,000+", salary: "INR 15 LPA", description: "Site Reliability Engineers are responsible for reliability and scalability..." },
  { name: "Security Engineer (DevSecOps)", openings: "10,000+", salary: "INR 12 LPA", description: "Security Engineers integrate security practices into DevOps workflows..." },
  { name: "Infrastructure Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Infrastructure Engineers design and maintain infrastructure for applications..." },
  { name: "Platform Engineer", openings: "15,000+", salary: "INR 10 LPA", description: "Platform Engineers develop and manage platforms for development and deployment..." },
  { name: "Integration Specialist", openings: "9,000+", salary: "INR 8 LPA", description: "Integration Specialists ensure software systems work seamlessly together..." },
  { name: "Sr. DevOps Cloud Engineer", openings: "5,000+", salary: "INR 25 LPA", description: "Senior DevOps Cloud Engineers lead cloud-based DevOps solutions..." },
];

const rolesUS = [
  { name: "DevOps Architect", openings: "9,000+", salary: "USD 140,000", description: rolesIN[0].description },
  { name: "DevOps Engineer", openings: "10,000+", salary: "USD 180,000", description: rolesIN[1].description },
  { name: "SRE", openings: "4,000 to 7,000+", salary: "USD 144,134", description: rolesIN[2].description },
  { name: "Security Engineer (DevSecOps)", openings: "3,000 to 5,000+", salary: "USD 127,066", description: rolesIN[3].description },
  { name: "Infrastructure Engineer", openings: "12,000+", salary: "USD 127,066", description: rolesIN[4].description },
  { name: "Platform Engineer", openings: "7,000 to 10,000+", salary: "USD 7,600", description: rolesIN[5].description },
  { name: "Integration Specialist", openings: "3,500+", salary: "USD 130,047", description: rolesIN[6].description },
  { name: "Sr. DevOps Cloud Engineer", openings: "3,000 to 5,000+", salary: "USD 148,162", description: rolesIN[7].description },
];

// ---------- Component ----------
const DevOpsRoles = () => {
  const { userCountry } = useContext(UserContext);
  const roles = userCountry === "IN" ? rolesIN : rolesUS;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedRole = roles[activeIndex];

  const handleRoleClick = (index) => {
    if (activeIndex === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  // Reset index when country changes (prevents out-of-bounds)
  useEffect(() => {
    setActiveIndex(0);
  }, [userCountry]);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8faff]">
      {/* Decorative background grid */}
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
      {/* Soft gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0bf 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a365d 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="mb-10 lg:mb-14">
          <SectionHeading title="What Can I Become?" />
        </div>

        {/* Main Grid: Role list (left) + Detail panel (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-10">
          {/* ---------- LEFT: Roles list ---------- */}
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
              <span className="text-[11px] tracking-[0.25em] font-semibold text-[#1a365d]/60 uppercase">
                Explore Roles
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
            </div>

            <ul className="flex flex-col gap-2">
              {roles.map((role, index) => {
                const isActive = activeIndex === index;
                return (
                  <li key={role.name}>
                    <button
                      onClick={() => handleRoleClick(index)}
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
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          {/* Number */}
                          <span
                            className={`flex-shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${
                              isActive ? "text-[#0bf]" : "text-[#1a365d]/40"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Role name */}
                          <span
                            className={`truncate text-sm sm:text-[15px] font-semibold transition-colors duration-300 ${
                              isActive ? "text-[#1a365d]" : "text-[#1a365d]/70 group-hover:text-[#1a365d]"
                            }`}
                          >
                            {role.name}
                          </span>
                        </div>

                        {/* Arrow */}
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
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- RIGHT: Detail panel ---------- */}
          <div className="relative">
            <article
              className={`relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5 transition-all duration-300 ${
                isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {/* Top accent band */}
              <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header row: role index + tag */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                    <span className="w-6 h-px bg-[#1a365d]/30" />
                    Role {String(activeIndex + 1).padStart(2, "0")} / {String(roles.length).padStart(2, "0")}
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                    <span className="text-[11px] font-semibold text-[#1a365d] tracking-wide">
                      Hiring Now
                    </span>
                  </div>
                </div>

                {/* Role title */}
                {/* Title + Description wrapper */}
<div className="mb-8 sm:mb-10">
  <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] leading-[1.1] font-extrabold text-[#1a365d] tracking-tight mb-2 sm:mb-3">
    {selectedRole.name}
  </h3>

  <p className="text-[15px] sm:text-base text-[#475569] leading-[1.75] max-w-[58ch]">
    {selectedRole.description}
  </p>
</div>

                {/* Stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Openings */}
                  <div className="group relative p-5 sm:p-6 rounded-xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/70 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0bf]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1a365d]/60 mb-2">
                      Job Openings
                    </p>
                    <p className="text-2xl sm:text-[1.75rem] font-extrabold text-[#1a365d] tracking-tight leading-none">
                      {selectedRole.openings}
                    </p>
                    <p className="mt-2 text-xs text-[#1a365d]/50">
                      across top hiring markets
                    </p>
                  </div>

                  {/* Salary */}
                  <div className="group relative p-5 sm:p-6 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white">
                    {/* Decorative ring */}
                    <div aria-hidden="true" className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-white/15" />
                    <div aria-hidden="true" className="absolute -right-6 -top-6 w-20 h-20 rounded-full border border-white/10" />

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/70 mb-2">
                      Average Salary
                    </p>
                    <p className="text-2xl sm:text-[1.75rem] font-extrabold tracking-tight leading-none">
                      {selectedRole.salary}
                    </p>
                    <p className="mt-2 text-xs text-white/60">
                      based on market benchmarks
                    </p>
                  </div>
                </div>

                {/* Footer hint — prev/next on mobile */}
                <div className="mt-8 sm:mt-10 pt-6 border-t border-[#1a365d]/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleRoleClick((activeIndex - 1 + roles.length) % roles.length)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a365d]/60 hover:text-[#0bf] transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M11 18l-6-6 6-6" />
                    </svg>
                    Previous
                  </button>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-1.5">
                    {roles.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "w-6 bg-gradient-to-r from-[#0bf] to-[#1a365d]"
                            : "w-1.5 bg-[#1a365d]/20"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleRoleClick((activeIndex + 1) % roles.length)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a365d]/60 hover:text-[#0bf] transition-colors"
                  >
                    Next
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsRoles;