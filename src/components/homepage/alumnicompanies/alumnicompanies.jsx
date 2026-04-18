// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const CompanyLogos = () => {

//    const [isVisible, setIsVisible] = useState(false);
 
//    // Trigger animation on mount
//    useEffect(() => {
//      setIsVisible(true);
//    }, []); 

//   const companyLogos = [
//     { name: "Amazon", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg" },
//     { name: "Uber", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/uber.svg" },
//     { name: "Capgemini", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg" },
//     { name: "Deloitte", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg" },
//     { name: "EY", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg" },
//     { name: "Accenture", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg" },
//     { name: "Airbnb", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airbnb.svg" },
//     { name: "Swiggy", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg" },
//     { name: "Airtel", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg" },
//     { name: "IBM", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg" },
//     { name: "Infosys", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg" },
//     { name: "Oracle", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg" },
//     { name: "TCS", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/tcs.svg" },
//     { name: "Visa", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/visa.svg" },
//     { name: "BCG", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg" },
//   ];



//   return (
//     <>
//       {/* Heading */}
//      {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
//           transition={{ duration: 0.6 }}
//           className="relative text-center mb-10 md:mb-12"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent mt-2 leading-tight">
//  Skillfyme Learning Path
//           </h2>
  
//           {/* underline bars */}
//           <div className="flex items-center justify-center gap-2">
//             <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
//             <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"></div>
//             <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-full"></div>
//           </div>
//         </motion.div>

//       {/* Container */}
//       <div className="relative overflow-hidden w-[82%] max-w-[1200px] mx-auto flex justify-center items-center p-5 md:w-[90%] sm:w-full">
        
//         {/* Wrapper */}
//         <div className="flex justify-center items-center w-full">
          
//           {/* Scrolling Row */}
//           <div className="flex items-center w-max animate-scroll">
//             {[...companyLogos, ...companyLogos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="w-[120px] h-[120px] flex items-center justify-center bg-white mx-[10px] rounded-[16px] shadow-md border border-gray-200 hover:scale-105 transition duration-200
//                 md:w-[100px] md:h-[100px]
//                 sm:w-[80px] sm:h-[80px]
//                 xs:w-[60px] xs:h-[60px]"
//               >
//                 <img
//                   src={logo.url}
//                   alt={logo.name}
//                   loading="lazy"
//                   className="max-w-[80%] max-h-[80%]"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Tailwind custom animation */}
//       <style jsx>{`
//         @keyframes scrollLeft {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scrollLeft 20s linear infinite;
//         }
//       `}</style>
//     </>
//   );
// };

// export default CompanyLogos;


 "use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const companyLogos = [
  { name: "Amazon",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg" },
  { name: "Uber",      url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/uber.svg" },
  { name: "Capgemini", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg" },
  { name: "Deloitte",  url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg" },
  { name: "EY",        url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg" },
  { name: "Accenture", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg" },
  { name: "Airbnb",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airbnb.svg" },
  { name: "Swiggy",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg" },
  { name: "Airtel",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg" },
  { name: "IBM",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg" },
  { name: "Infosys",   url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg" },
  { name: "Oracle",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg" },
  { name: "TCS",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/tcs.svg" },
  { name: "Visa",      url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/visa.svg" },
  { name: "BCG",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg" },
];

// Split into two rows for the staggered marquee
const rowA = companyLogos.slice(0, 8);
const rowB = companyLogos.slice(7);

// Marquee row component — pure CSS scroll, no JS animation loop needed
const MarqueeRow = ({ items, reverse = false, speed = 32 }) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="cl-marquee-outer" style={{ "--speed": `${speed}s`, "--dir": reverse ? "reverse" : "normal" }}>
      <div className="cl-marquee-track">
        {repeated.map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

const LogoTile = ({ logo }) => (
  <div className="cl-tile group">
    <img
      src={logo.url}
      alt={logo.name}
      loading="lazy"
      className="cl-tile-img"
    />
    <span className="cl-tile-label">{logo.name}</span>
  </div>
);

// Stat counter
const Stat = ({ value, suffix, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    className="cl-stat"
  >
    <span className="cl-stat-val">{value}<span className="cl-stat-suf">{suffix}</span></span>
    <span className="cl-stat-lbl">{label}</span>
  </motion.div>
);

const CompanyLogos = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');

        .cl-root {
          font-family: 'Nunito', sans-serif;
          background: #ffffff;
          overflow: hidden;
        }
        .cl-display {
          font-family: 'Instrument Serif', Georgia, serif;
        }

        /* ── Marquee CSS-only scroll ── */
        @keyframes cl-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-marquee-outer {
          overflow: hidden;
          width: 100%;
          /* pause on hover */
        }
        .cl-marquee-outer:hover .cl-marquee-track {
          animation-play-state: paused;
        }
        .cl-marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: cl-scroll var(--speed) linear infinite var(--dir);
        }

        /* ── Logo tile ── */
        .cl-tile {
          position: relative;
          flex-shrink: 0;
          width: 120px;
          height: 72px;
          border-radius: 6px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          cursor: default;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(.16,1,.3,1);
        }
        .cl-tile:hover {
          border-color: #38BDF8;
          box-shadow: 0 4px 20px rgba(14,165,233,0.12);
          transform: translateY(-3px);
        }
        .cl-tile-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          filter: none;
          transition: transform 0.25s ease;
        }
        .cl-tile:hover .cl-tile-img {
          filter: none;
          transform: scale(1.06);
        }
        .cl-tile-label {
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0EA5E9;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease;
        }
        .cl-tile:hover .cl-tile-label { opacity: 1; }

        /* ── Edge fades ── */
        .cl-fade-left {
          position: absolute; left: 0; top: 0; bottom: 0; width: 80px;
          background: linear-gradient(to right, #ffffff, transparent);
          pointer-events: none; z-index: 10;
        }
        .cl-fade-right {
          position: absolute; right: 0; top: 0; bottom: 0; width: 80px;
          background: linear-gradient(to left, #ffffff, transparent);
          pointer-events: none; z-index: 10;
        }

        /* ── Stat block ── */
        .cl-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }
        .cl-stat-val {
          font-family: 'Nunito', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
          color: #0F172A;
        }
        .cl-stat-suf {
          font-size: 1.3rem;
          font-weight: 500;
          color: #0EA5E9;
        }
        .cl-stat-lbl {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #94A3B8;
        }

        /* ── Divider dot ── */
        .cl-dot-divider {
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #38BDF8;
          flex-shrink: 0;
        }

        /* ── Ticker badge ── */
        .cl-ticker {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid #BAE6FD;
          background: #F0F9FF;
          border-radius: 4px;
          padding: 4px 10px;
          font-size: 0.72rem;
          font-weight: 600;
          color: #0284C7;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .cl-ticker-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #F97316;
          animation: cl-blink 1.6s ease-in-out infinite;
        }
        @keyframes cl-blink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.8); }
        }

        /* ── Highlight word ── */
        .cl-highlight {
          position: relative;
          display: inline-block;
          color: #0EA5E9;
        }
        .cl-highlight::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 2px;
          height: 3px;
          background: linear-gradient(to right, #38BDF8, #F97316);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: cl-underline 0.7s 0.6s cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes cl-underline {
          to { transform: scaleX(1); }
        }

        /* ── Vertical rule ── */
        .cl-vr {
          width: 1px; 
          background: linear-gradient(to bottom, transparent, #BAE6FD 30%, #BAE6FD 70%, transparent);
          align-self: stretch;
          flex-shrink: 0;
        }

        /* ── Decorative grid (top-right) ── */
        .cl-grid-deco {
          position: absolute;
          top: 0; right: 0;
          width: 220px; height: 220px;
          background-image:
            linear-gradient(#E0F2FE 1px, transparent 1px),
            linear-gradient(90deg, #E0F2FE 1px, transparent 1px);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse at top right, black 20%, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse at top right, black 20%, transparent 72%);
          pointer-events: none;
          opacity: 0.7;
        }

        /* ── Orange accent bar ── */
        .cl-accent-bar {
          width: 36px; height: 4px;
          background: linear-gradient(to right, #0EA5E9, #F97316);
          border-radius: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .cl-tile { width: 96px; height: 58px; padding: 10px 12px; }
          .cl-stat-val { font-size: 1.5rem; }
        }
      `}</style>

      <section className="cl-root relative w-full py-16 md:py-20 lg:py-24 px-5">
        {/* Decorative grid top-right */}
        <div className="cl-grid-deco" />

        <div className="relative max-w-[1280px] mx-auto">

          {/* ── HEADER: editorial left-aligned layout ── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 md:mb-16">

            {/* Left: heading block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >

              {/* Heading */}
              <h2
                className="cl-display text-slate-900 leading-[1.1] mb-4"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                Skillfyme Alumni Work{" "}
                <em style={{ fontStyle: "italic", color: "#0EA5E9" }}>At Top Tech Companies</em>
              </h2>

              {/* Subtext with accent bar */}
              <div className="flex items-center gap-3 mt-5">
                <div className="cl-accent-bar" />
                <p className="text-slate-500" style={{ fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.65 }}>
                  Where industry giants shape tomorrow's innovators
                </p>
              </div>
            </motion.div>

            {/* Right: stats row */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-stretch gap-8 lg:gap-10 flex-wrap"
            >
              <Stat value="500" suffix="+" label="Enterprises" delay={0.2} />
              <div className="cl-vr hidden sm:block" />
              <Stat value="15k" suffix="+" label="Students placed" delay={0.3} />
              <div className="cl-vr hidden sm:block" />
              <Stat value="93" suffix="%" label="Placement rate" delay={0.4} />
            </motion.div>
          </div>

          {/* Thin rule below header */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="mb-10 h-px bg-gradient-to-r from-sky-300 via-sky-100 to-transparent"
          />

          {/* ── MARQUEE SECTION ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Edge fades */}
            <div className="cl-fade-left" />
            <div className="cl-fade-right" />

            {/* Row A — scrolls left */}
            <div className="mb-3">
              <MarqueeRow items={rowA} reverse={false} speed={28} />
            </div>

            {/* Row B — scrolls right, slightly different speed for depth */}
            <div>
              <MarqueeRow items={rowB} reverse={true} speed={34} />
            </div>
          </motion.div>

          {/* ── FOOTER STRIP: company count + label ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <span className="cl-dot-divider" />
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#94A3B8",
              }}
            >
              200+ partner companies & growing
            </span>
            <span className="cl-dot-divider" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CompanyLogos;