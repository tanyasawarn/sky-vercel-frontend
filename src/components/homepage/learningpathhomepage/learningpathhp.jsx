// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const LearningPath = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   // Trigger animation on mount
//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   useEffect(() => {
//     setMounted(true);
//     setIsVisible(true);
//   }, []);

//   // ✅ AFTER all hooks
//   if (!mounted) return null;

//   return (
//     <section className="relative py-12 md:py-1 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
//       {/* Background glow (matches your course + feature sections) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <h2
//         className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
//       after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
//       >
//         <em style={{ fontStyle: "italic" }}>Learning Path</em>
//       </h2>

//       {/* Image Section */}
//       <div
//         className="relative w-full max-w-[1400px] 
//   h-[650px] sm:h-[420px] md:h-[550px] 
//   mx-auto mt-0 sm:-mt-[60px] md:-mt-[80px]"
//       >
//         {/* Desktop Image */}
//         <Image
//           src="/HOMEPAGELEARNINGPATH4.png"
//           alt="Learning Path Desktop"
//           fill
//           className="object-contain hidden sm:block"
//           priority
//         />

//         {/* Mobile Image */}
//         <Image
//           src="/LearningpathVertical1.png"
//           alt="Learning Path Mobile"
//           fill
//           className="object-cover block sm:hidden"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default LearningPath;



// --------------------------------------------new design--------------------------------------------------------------

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Compass } from "lucide-react";

const LearningPath = () => {
  const milestones = [
    {
      phase: "Phase 01",
      title: "Foundations",
      desc: "Build core concepts from the ground up.",
    },
    {
      phase: "Phase 02",
      title: "Hands-on Projects",
      desc: "Apply skills through real-world scenarios.",
    },
    {
      phase: "Phase 03",
      title: "Advanced Mastery",
      desc: "Deep-dive into production-grade tooling.",
    },
    {
      phase: "Phase 04",
      title: "Career Launch",
      desc: "Interview prep, placements, and beyond.",
    },
  ];

  return (
    <section
      className="relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      >
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.035] blur-[120px] pointer-events-none" />

      <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* HEADER */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* Left: Title block */}
            <div className="col-span-12 lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-5 sm:mb-7">
                <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
                <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
                  The Journey
                </span>
              </div>

              <h2
                className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 text-[#0a0a0a]"
                style={{ fontWeight: 800 }}
              >
                Your learning path,
                <br />
                <span className="text-[#0a0a0a]/35">mapped end-to-end.</span>
              </h2>

              <p className="max-w-[520px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-[#0a0a0a]/65 leading-[1.65] font-light">
                A step-by-step roadmap engineered to take you from fundamentals to job-ready expertise — with checkpoints, projects, and mentorship calibrated for every phase.
              </p>
            </div>

            {/* Right: Compass meta */}
            <div className="col-span-12 lg:col-span-5 flex lg:justify-end">
              <div className="relative flex items-center gap-4 bg-white border border-[#0a0a0a]/8 rounded-xl px-5 py-4 shadow-[0_2px_8px_rgba(10,10,10,0.04)]">
                <div className="w-10 h-10 rounded-full bg-[#ff6b35]/10 flex items-center justify-center flex-shrink-0">
                  <Compass size={18} className="text-[#ff6b35]" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-bold mb-0.5">
                    Structured Curriculum
                  </div>
                  <div className="text-[0.88rem] font-bold text-[#0a0a0a]">
                    04 Phases · 05 Months avg.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 sm:mt-12 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/20 via-[#0a0a0a]/5 to-transparent" />
        </div>

        {/* MAIN BLUEPRINT FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Corner brackets (larger, for the big frame) */}
          <div className="absolute -top-3 -left-3 w-14 sm:w-20 h-14 sm:h-20 border-t-2 border-l-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-tl-2xl" />
          <div className="absolute -top-3 -right-3 w-14 sm:w-20 h-14 sm:h-20 border-t-2 border-r-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-tr-2xl" />
          <div className="absolute -bottom-3 -left-3 w-14 sm:w-20 h-14 sm:h-20 border-b-2 border-l-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-bl-2xl" />
          <div className="absolute -bottom-3 -right-3 w-14 sm:w-20 h-14 sm:h-20 border-b-2 border-r-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-br-2xl" />

          {/* Blueprint card */}
          <div className="relative bg-white border border-[#0a0a0a]/10 rounded-2xl shadow-[0_4px_20px_rgba(10,10,10,0.05)] overflow-hidden">
            {/* Blueprint Header Strip */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3 sm:py-4 border-b border-[#0a0a0a]/8 bg-[#f5f5f0]/60">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
                  <div className="w-2 h-2 rounded-full bg-[#0a0a0a]/20" />
                  <div className="w-2 h-2 rounded-full bg-[#0a0a0a]/20" />
                </div>
                <div className="h-4 w-[1px] bg-[#0a0a0a]/15 hidden sm:block" />
                <span className="hidden sm:inline text-[0.62rem] uppercase tracking-[0.22em] text-[#0a0a0a]/55 font-bold">
                  Learning Blueprint / v.2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
                <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#ff6b35] font-bold">
                  Active
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative p-4 sm:p-6 md:p-10 bg-white">
              {/* Measurement ticks - decorative */}
              <div className="hidden md:flex absolute top-6 left-10 right-10 h-3 justify-between items-end pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-[1px] bg-[#0a0a0a]/15 ${
                      i % 3 === 0 ? "h-3" : "h-1.5"
                    }`}
                  />
                ))}
              </div>

              {/* Desktop Image */}
              <div className="hidden sm:block">
                <Image
                  src="/HOMEPAGELEARNINGPATH4.png"
                  alt="Learning Path"
                  width={1350}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Mobile Image */}
              <div className="block sm:hidden">
                <Image
                  src="/LearningpathVertical1.png"
                  alt="Learning Path Mobile"
                  width={500}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Blueprint Footer Strip */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-3 sm:py-4 border-t border-[#0a0a0a]/8 bg-[#f5f5f0]/60">
              <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-bold">
                Scroll for milestone breakdown
              </span>
              <ArrowDown
                size={14}
                className="text-[#ff6b35] animate-bounce"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </motion.div>

        {/* MILESTONE STRIP */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="mb-6 sm:mb-8 flex items-center gap-3">
            <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
              Milestone Breakdown
            </span>
            <div className="flex-1 h-[1px] bg-[#0a0a0a]/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Connector line to next card (hidden on last) */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-[34px] -right-5 w-5 h-[1px] bg-gradient-to-r from-[#ff6b35]/40 to-transparent z-[1]" />
                )}

                <div className="relative bg-white border border-[#0a0a0a]/8 rounded-xl p-5 sm:p-6 h-full hover:border-[#ff6b35]/40 hover:shadow-[0_10px_30px_rgba(10,10,10,0.06)] transition-all duration-400">
                  {/* Top row: phase + dot marker */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#0a0a0a]/55 font-bold">
                      {m.phase}
                    </span>
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#ff6b35]/15 group-hover:bg-[#ff6b35]/25 transition-colors" />
                      <div className="relative w-2 h-2 rounded-full bg-[#ff6b35]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[1rem] sm:text-[1.1rem] font-extrabold tracking-tight text-[#0a0a0a] mb-2 leading-tight">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.78rem] sm:text-[0.82rem] text-[#0a0a0a]/60 font-light leading-relaxed">
                    {m.desc}
                  </p>

                  {/* Index number - bottom corner */}
                  <div className="absolute bottom-3 right-4 text-[0.6rem] font-mono font-bold text-[#0a0a0a]/15 tracking-tight">
                    0{i + 1} / 04
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </section>
  );
};

export default LearningPath;