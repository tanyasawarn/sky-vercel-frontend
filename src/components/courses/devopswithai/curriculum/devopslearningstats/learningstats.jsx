// "use client";

// import React, { useState } from "react";
// import Callback from "../../../../common/callbackform/callbackform";

// const DevopsLearningStats = () => {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [formKey, setFormKey] = useState(0);

//   const handleEnrollClick = () => {
//     setFormKey((prevKey) => prevKey + 1);
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   return (
//     <>
//       <div className="bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 text-center max-w-[1200px] w-full mx-auto my-8">
//         {/* Title */}
//         <h2 className="text-[2.2rem] font-bold mb-4 mt-[-1rem] text-center opacity-0 animate-[fadeInUp_0.8s_ease_forwards] bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//           300+ Hours of Comprehensive Learning
//         </h2>

//         <div className="grid grid-cols-4 gap-8 overflow-x-auto whitespace-nowrap">
//           <div className="min-w-[150px]">
//             <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">150+</h3>
//             <p className="text-base text-[#37474f] opacity-90 m-0">
//               Live Sessions
//             </p>
//           </div>

//           <div className="min-w-[150px]">
//             <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">50+</h3>
//             <p className="text-base text-[#37474f] opacity-90 m-0">
//               Hands-on Labs
//             </p>
//           </div>

//           <div className="min-w-[150px]">
//             <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">20+</h3>
//             <p className="text-base text-[#37474f] opacity-90 m-0">
//               Real Projects
//             </p>
//           </div>

//           <div className="min-w-[150px]">
//             <h3 className="text-[2rem] font-bold mb-1 text-[#f60]">100+</h3>
//             <p className="text-base text-[#37474f] opacity-90 m-0">
//               Practice Exercises
//             </p>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex justify-center items-center gap-4">
//           <span className="text-[1.5rem] font-semibold text-[#1a365d]">
//             Still not sure?
//           </span>
//           <button
//             className="bg-[#f60] text-white font-semibold text-base py-3 px-6 rounded-[10px] shadow-[0_6px_16px_rgba(11,191,255,0.25)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(11,191,255,0.35)]"
//             onClick={handleEnrollClick}
//           >
//             Talk To Us
//           </button>
//         </div>

//         {/* Form */}
//         {isFormVisible && (
//           <Callback
//             key={formKey}
//             onClose={handleCloseForm}
//             courseName="DevOps With AI Masters"
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default DevopsLearningStats;




// --------------------------------new design ---------------------------------------------------

"use client";

import React, { useState } from "react";
import Callback from "../../../../common/callbackform/callbackform";

const DevopsLearningStats = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleEnrollClick = () => {
    setFormKey((prevKey) => prevKey + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const stats = [
    { value: "150+", label: "Live Sessions", sub: "Instructor-led" },
    { value: "50+", label: "Hands-on Labs", sub: "Practice-driven" },
    { value: "20+", label: "Real Projects", sub: "Industry-grade" },
    { value: "100+", label: "Practice Exercises", sub: "Self-paced" },
  ];

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
        {/* ---------- Main card ---------- */}
        <div className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5">
          {/* Top accent band */}
          <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

          <div className="p-6 sm:p-10 lg:p-14">
            {/* Eyebrow + heading */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-14">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] font-semibold uppercase text-[#1a365d]/55 mb-4">
                <span className="w-6 h-px bg-[#1a365d]/30" />
                <span className="font-mono tabular-nums text-[#0bf]">300+</span>
                Hours of Learning
                <span className="w-6 h-px bg-[#1a365d]/30" />
              </div>

              <h2 className="text-[1.75rem] sm:text-[2.2rem] lg:text-[2.75rem] leading-[1.1] font-extrabold tracking-tight text-[#1a365d] max-w-3xl mx-auto">
                Everything you need to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
                    master DevOps
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 bottom-0.5 h-2 bg-[#0bf]/15 rounded-sm -z-0"
                  />
                </span>
              </h2>

              <p className="mt-4 text-[14px] sm:text-[15px] text-[#475569] leading-[1.75] max-w-xl mx-auto">
                A curriculum designed for outcomes, not just completion.
              </p>
            </div>

            {/* ---------- Stats grid ---------- */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-5 sm:p-6 lg:p-7 rounded-xl lg:rounded-2xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(26,54,93,0.25)] hover:border-[#0bf]/30"
                >
                  {/* Subtle corner accent */}
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(11,191,255,0.15), transparent 70%)",
                    }}
                  />

                  {/* Index */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] tabular-nums font-bold text-[#0bf] tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[#1a365d]/15" />
                  </div>

                  {/* Value */}
                  <p className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold leading-none tracking-tight bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="text-[13px] sm:text-sm font-bold text-[#1a365d] mb-1">
                    {stat.label}
                  </p>

                  {/* Sub */}
                  <p className="text-[11px] text-[#1a365d]/50 font-medium tracking-wide">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* ---------- CTA ---------- */}
            <div className="mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 border-t border-[#1a365d]/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#0bf] mb-1.5">
                    Still Deciding?
                  </p>
                  <p className="text-lg sm:text-xl lg:text-[1.4rem] font-bold text-[#1a365d] leading-tight">
                    Get a personalised walkthrough from our team.
                  </p>
                </div>

                <button
                  onClick={handleEnrollClick}
                  className="group/btn relative inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white font-semibold text-sm tracking-wide shadow-[0_10px_30px_-8px_rgba(11,191,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-10px_rgba(11,191,255,0.6)] whitespace-nowrap flex-shrink-0"
                >
                  <span>Talk To Us</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      {isFormVisible && (
        <Callback
          key={formKey}
          onClose={handleCloseForm}
          courseName="DevOps With AI Masters"
        />
      )}
    </section>
  );
};

export default DevopsLearningStats;