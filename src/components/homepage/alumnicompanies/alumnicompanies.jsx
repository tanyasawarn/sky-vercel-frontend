//  "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion } from "framer-motion";

// const companyLogos = [
//   { name: "Amazon",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/amazon.svg" },
//   { name: "Uber",      url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/uber.svg" },
//   { name: "Capgemini", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/capgemini.svg" },
//   { name: "Deloitte",  url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/delloitte.svg" },
//   { name: "EY",        url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ey.svg" },
//   { name: "Accenture", url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/acc.svg" },
//   { name: "Airbnb",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airbnb.svg" },
//   { name: "Swiggy",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/swiggy.svg" },
//   { name: "Airtel",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/airtel.svg" },
//   { name: "IBM",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/ibm.svg" },
//   { name: "Infosys",   url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/infosys.svg" },
//   { name: "Oracle",    url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/oracle.svg" },
//   { name: "TCS",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/tcs.svg" },
//   { name: "Visa",      url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/visa.svg" },
//   { name: "BCG",       url: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/bcg.svg" },
// ];

// // Split into two rows for the staggered marquee
// const rowA = companyLogos.slice(0, 8);
// const rowB = companyLogos.slice(7);

// // Marquee row component — pure CSS scroll, no JS animation loop needed
// const MarqueeRow = ({ items, reverse = false, speed = 32 }) => {
//   const repeated = [...items, ...items, ...items, ...items];
//   return (
//     <div className="cl-marquee-outer" style={{ "--speed": `${speed}s`, "--dir": reverse ? "reverse" : "normal" }}>
//       <div className="cl-marquee-track">
//         {repeated.map((logo, i) => (
//           <LogoTile key={`${logo.name}-${i}`} logo={logo} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const LogoTile = ({ logo }) => (
//   <div className="cl-tile group">
//     <img
//       src={logo.url}
//       alt={logo.name}
//       loading="lazy"
//       className="cl-tile-img"
//     />
//     <span className="cl-tile-label">{logo.name}</span>
//   </div>
// );

// // Stat counter
// const Stat = ({ value, suffix, label, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 16 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//     className="cl-stat"
//   >
//     <span className="cl-stat-val">{value}<span className="cl-stat-suf">{suffix}</span></span>
//     <span className="cl-stat-lbl">{label}</span>
//   </motion.div>
// );

// const CompanyLogos = () => {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap');

//         .cl-root {
//           font-family: 'Nunito', sans-serif;
//           background: #ffffff;
//           overflow: hidden;
//         }
//         .cl-display {
//           font-family: 'Instrument Serif', Georgia, serif;
//         }

//         /* ── Marquee CSS-only scroll ── */
//         @keyframes cl-scroll {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         .cl-marquee-outer {
//           overflow: hidden;
//           width: 100%;
//           /* pause on hover */
//         }
//         .cl-marquee-outer:hover .cl-marquee-track {
//           animation-play-state: paused;
//         }
//         .cl-marquee-track {
//           display: flex;
//           gap: 12px;
//           width: max-content;
//           animation: cl-scroll var(--speed) linear infinite var(--dir);
//         }

//         /* ── Logo tile ── */
//         .cl-tile {
//           position: relative;
//           flex-shrink: 0;
//           width: 120px;
//           height: 72px;
//           border-radius: 6px;
//           border: 1px solid #E2E8F0;
//           background: #FFFFFF;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 14px 18px;
//           cursor: default;
//           transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(.16,1,.3,1);
//         }
//         .cl-tile:hover {
//           border-color: #38BDF8;
//           box-shadow: 0 4px 20px rgba(14,165,233,0.12);
//           transform: translateY(-3px);
//         }
//         .cl-tile-img {
//           max-width: 100%;
//           max-height: 100%;
//           object-fit: contain;
//           filter: none;
//           transition: transform 0.25s ease;
//         }
//         .cl-tile:hover .cl-tile-img {
//           filter: none;
//           transform: scale(1.06);
//         }
//         .cl-tile-label {
//           position: absolute;
//           bottom: -28px;
//           left: 50%;
//           transform: translateX(-50%);
//           font-size: 0.65rem;
//           font-weight: 600;
//           letter-spacing: 0.06em;
//           text-transform: uppercase;
//           color: #0EA5E9;
//           white-space: nowrap;
//           opacity: 0;
//           pointer-events: none;
//           transition: opacity 0.2s ease;
//         }
//         .cl-tile:hover .cl-tile-label { opacity: 1; }

//         /* ── Edge fades ── */
//         .cl-fade-left {
//           position: absolute; left: 0; top: 0; bottom: 0; width: 80px;
//           background: linear-gradient(to right, #ffffff, transparent);
//           pointer-events: none; z-index: 10;
//         }
//         .cl-fade-right {
//           position: absolute; right: 0; top: 0; bottom: 0; width: 80px;
//           background: linear-gradient(to left, #ffffff, transparent);
//           pointer-events: none; z-index: 10;
//         }

//         /* ── Stat block ── */
//         .cl-stat {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           gap: 2px;
//         }
//         .cl-stat-val {
//           font-family: 'Nunito', sans-serif;
//           font-size: 2rem;
//           font-weight: 900;
//           line-height: 1;
//           color: #0F172A;
//         }
//         .cl-stat-suf {
//           font-size: 1.3rem;
//           font-weight: 500;
//           color: #0EA5E9;
//         }
//         .cl-stat-lbl {
//           font-size: 0.72rem;
//           font-weight: 500;
//           letter-spacing: 0.1em;
//           text-transform: uppercase;
//           color: #94A3B8;
//         }

//         /* ── Divider dot ── */
//         .cl-dot-divider {
//           display: inline-block;
//           width: 5px; height: 5px;
//           border-radius: 50%;
//           background: #38BDF8;
//           flex-shrink: 0;
//         }

//         /* ── Ticker badge ── */
//         .cl-ticker {
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           border: 1px solid #BAE6FD;
//           background: #F0F9FF;
//           border-radius: 4px;
//           padding: 4px 10px;
//           font-size: 0.72rem;
//           font-weight: 600;
//           color: #0284C7;
//           letter-spacing: 0.05em;
//           text-transform: uppercase;
//         }
//         .cl-ticker-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: #F97316;
//           animation: cl-blink 1.6s ease-in-out infinite;
//         }
//         @keyframes cl-blink {
//           0%,100% { opacity:1; transform:scale(1); }
//           50%      { opacity:0.4; transform:scale(0.8); }
//         }

//         /* ── Highlight word ── */
//         .cl-highlight {
//           position: relative;
//           display: inline-block;
//           color: #0EA5E9;
//         }
//         .cl-highlight::after {
//           content: '';
//           position: absolute;
//           left: 0; right: 0; bottom: 2px;
//           height: 3px;
//           background: linear-gradient(to right, #38BDF8, #F97316);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           animation: cl-underline 0.7s 0.6s cubic-bezier(.16,1,.3,1) forwards;
//         }
//         @keyframes cl-underline {
//           to { transform: scaleX(1); }
//         }

//         /* ── Vertical rule ── */
//         .cl-vr {
//           width: 1px; 
//           background: linear-gradient(to bottom, transparent, #BAE6FD 30%, #BAE6FD 70%, transparent);
//           align-self: stretch;
//           flex-shrink: 0;
//         }

//         /* ── Decorative grid (top-right) ── */
//         .cl-grid-deco {
//           position: absolute;
//           top: 0; right: 0;
//           width: 220px; height: 220px;
//           background-image:
//             linear-gradient(#E0F2FE 1px, transparent 1px),
//             linear-gradient(90deg, #E0F2FE 1px, transparent 1px);
//           background-size: 22px 22px;
//           mask-image: radial-gradient(ellipse at top right, black 20%, transparent 72%);
//           -webkit-mask-image: radial-gradient(ellipse at top right, black 20%, transparent 72%);
//           pointer-events: none;
//           opacity: 0.7;
//         }

//         /* ── Orange accent bar ── */
//         .cl-accent-bar {
//           width: 36px; height: 4px;
//           background: linear-gradient(to right, #0EA5E9, #F97316);
//           border-radius: 2px;
//           flex-shrink: 0;
//         }

//         @media (max-width: 640px) {
//           .cl-tile { width: 96px; height: 58px; padding: 10px 12px; }
//           .cl-stat-val { font-size: 1.5rem; }
//         }
//       `}</style>

//       <section className="cl-root relative w-full py-16 md:py-20 lg:py-24 px-5">
//         {/* Decorative grid top-right */}
//         <div className="cl-grid-deco" />

//         <div className="relative max-w-[1280px] mx-auto">

//           {/* ── HEADER: editorial left-aligned layout ── */}
//           <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14 md:mb-16">

//             {/* Left: heading block */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               className="max-w-xl"
//             >

//               {/* Heading */}
//               <h2
//                 className="cl-display text-slate-900 leading-[1.1] mb-4"
//                 style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
//               >
//                 Skillfyme Alumni Work{" "}
//                 <em style={{ fontStyle: "italic", color: "#0EA5E9" }}>At Top Tech Companies</em>
//               </h2>

//               {/* Subtext with accent bar */}
//               <div className="flex items-center gap-3 mt-5">
//                 <div className="cl-accent-bar" />
//                 <p className="text-slate-500" style={{ fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.65 }}>
//                   Where industry giants shape tomorrow's innovators
//                 </p>
//               </div>
//             </motion.div>

//             {/* Right: stats row */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
//               className="flex items-stretch gap-8 lg:gap-10 flex-wrap"
//             >
//               <Stat value="500" suffix="+" label="Enterprises" delay={0.2} />
//               <div className="cl-vr hidden sm:block" />
//               <Stat value="15k" suffix="+" label="Students placed" delay={0.3} />
//               <div className="cl-vr hidden sm:block" />
//               <Stat value="93" suffix="%" label="Placement rate" delay={0.4} />
//             </motion.div>
//           </div>

//           {/* Thin rule below header */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
//             style={{ transformOrigin: "left" }}
//             className="mb-10 h-px bg-gradient-to-r from-sky-300 via-sky-100 to-transparent"
//           />

//           {/* ── MARQUEE SECTION ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
//             className="relative"
//           >
//             {/* Edge fades */}
//             <div className="cl-fade-left" />
//             <div className="cl-fade-right" />

//             {/* Row A — scrolls left */}
//             <div className="mb-3">
//               <MarqueeRow items={rowA} reverse={false} speed={28} />
//             </div>

//             {/* Row B — scrolls right, slightly different speed for depth */}
//             <div>
//               <MarqueeRow items={rowB} reverse={true} speed={34} />
//             </div>
//           </motion.div>

//           {/* ── FOOTER STRIP: company count + label ── */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.55 }}
//             className="mt-10 flex items-center justify-center gap-3"
//           >
//             <span className="cl-dot-divider" />
//             <span
//               style={{
//                 fontSize: "0.72rem",
//                 fontWeight: 600,
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 color: "#94A3B8",
//               }}
//             >
//               200+ partner companies & growing
//             </span>
//             <span className="cl-dot-divider" />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CompanyLogos;



// --------------------------------------------new design--------------------------------------------------------------



"use client";

import React, { useEffect, useRef, useState } from "react";
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

const rowA = companyLogos.slice(0, 8);
const rowB = companyLogos.slice(7);

const RECENT_PLACEMENTS = [
  { role: "Cloud Engineer", company: "Amazon", location: "Bangalore" },
  { role: "ML Engineer", company: "Uber", location: "Hyderabad" },
  { role: "DevOps Engineer", company: "Oracle", location: "Remote" },
  { role: "Data Scientist", company: "Accenture", location: "Pune" },
  { role: "SRE", company: "IBM", location: "Bangalore" },
  { role: "AI Engineer", company: "Airbnb", location: "Remote" },
  { role: "Platform Engineer", company: "Visa", location: "Mumbai" },
];

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
          const duration = 1500;
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

const AnimatedCounter = ({ target, suffix = "" }) => {
  const { count, ref } = useAnimatedCounter(target);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const MarqueeRow = ({ items, reverse = false, speed = 32 }) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div
      className="cl-marquee-outer"
      style={{ "--speed": `${speed}s`, "--dir": reverse ? "reverse" : "normal" }}
    >
      <div className="cl-marquee-track">
        {repeated.map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
};

const LogoTile = ({ logo }) => (
  <div className="cl-tile group/tile">
    <div className="absolute top-1.5 left-2 text-[0.54rem] font-mono font-bold text-[#0a0a0a]/25 tracking-tight opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300">
      /{String(Math.floor(Math.random() * 99) + 1).padStart(2, "0")}
    </div>

    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#ff6b35] opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300" />

    <img src={logo.url} alt={logo.name} loading="lazy" className="cl-tile-img" />

    <span className="cl-tile-label">{logo.name}</span>
  </div>
);

const PlacementTicker = () => {
  const doubled = [...RECENT_PLACEMENTS, ...RECENT_PLACEMENTS];
  return (
    <div className="cl-ticker-outer">
      <div className="cl-ticker-track">
        {doubled.map((p, i) => (
          <div key={i} className="cl-ticker-item">
            <div className="w-1 h-1 rounded-full bg-[#ff6b35]" />
            <span className="text-[0.72rem] font-semibold text-[#0a0a0a]/70">
              {p.role}
            </span>
            <span className="text-[0.68rem] text-[#0a0a0a]/35">@</span>
            <span className="text-[0.72rem] font-extrabold text-[#0a0a0a]">
              {p.company}
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.18em] text-[#0a0a0a]/40 font-bold">
              · {p.location}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyLogos = () => {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

        .cl-root {
          font-family: "Raleway", sans-serif;
        }

        @keyframes cl-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .cl-marquee-outer {
          overflow: hidden;
          width: 100%;
        }
        .cl-marquee-outer:hover .cl-marquee-track {
          animation-play-state: paused;
        }
        .cl-marquee-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: cl-scroll var(--speed) linear infinite var(--dir);
        }

        .cl-tile {
          position: relative;
          flex-shrink: 0;
          width: 140px;
          height: 84px;
          border-radius: 12px;
          border: 1px solid rgba(10, 10, 10, 0.08);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 22px;
          cursor: default;
          transition: border-color 0.4s ease, box-shadow 0.4s ease,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            background 0.4s ease;
          box-shadow: 0 1px 3px rgba(10, 10, 10, 0.02);
        }
        .cl-tile:hover {
          border-color: rgba(255, 107, 53, 0.4);
          box-shadow: 0 12px 32px rgba(10, 10, 10, 0.08),
            0 0 0 4px rgba(255, 107, 53, 0.05);
          transform: translateY(-4px);
          background: #ffffff;
        }
        .cl-tile-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.4s ease;
          filter: grayscale(100%) opacity(0.55);
        }
        .cl-tile:hover .cl-tile-img {
          transform: scale(1.08);
          filter: grayscale(0%) opacity(1);
        }
        .cl-tile-label {
          position: absolute;
          bottom: -26px;
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff6b35;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .cl-tile:hover .cl-tile-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        .cl-fade-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to right, #fafaf7 20%, transparent);
          pointer-events: none;
          z-index: 10;
        }
        .cl-fade-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to left, #fafaf7 20%, transparent);
          pointer-events: none;
          z-index: 10;
        }

        @keyframes cl-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .cl-ticker-outer {
          overflow: hidden;
          width: 100%;
        }
        .cl-ticker-track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: cl-ticker-scroll 45s linear infinite;
        }
        .cl-ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        @keyframes cl-blink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .cl-blink {
          animation: cl-blink 1.6s ease-in-out infinite;
        }

        @keyframes cl-fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .cl-tile {
            width: 108px;
            height: 68px;
            padding: 12px 14px;
            border-radius: 10px;
          }
          .cl-fade-left,
          .cl-fade-right {
            width: 50px;
          }
        }
      `}</style>

      <section className="cl-root relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden py-16 sm:py-20 md:py-28"
      style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      
      >
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.035] blur-[130px] pointer-events-none" />

        <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-10 sm:mb-14 md:mb-16">
            <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
              <div className="col-span-12 lg:col-span-7">
                <div className="inline-flex items-center gap-3 mb-5 sm:mb-7">
                  <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
                  <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
                    Placement Record
                  </span>
                </div>

                <h2
                  className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 text-[#0a0a0a]"
                  style={{ fontWeight: 800 }}
                >
                  Where our alumni
                  <br />
                  <span className="text-[#0a0a0a]/35">build the future.</span>
                </h2>

                <p className="max-w-[520px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-[#0a0a0a]/65 leading-[1.65] font-light">
                  From global tech giants to breakout startups — our learners ship production code at companies shaping the industry. This is a live snapshot of where Skillfyme graduates land.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-5 flex lg:justify-end">
                <div className="flex gap-6 sm:gap-10 pt-2">
                  <div>
                    <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#ff6b35]">
                      <AnimatedCounter target={200} suffix="+" />
                    </div>
                    <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
                      Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-10 sm:mt-14 h-[1px] bg-gradient-to-r from-[#0a0a0a]/20 via-[#0a0a0a]/5 to-transparent"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-2 -left-2 w-10 sm:w-14 h-10 sm:h-14 border-t-2 border-l-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-tl-2xl" />
            <div className="absolute -top-2 -right-2 w-10 sm:w-14 h-10 sm:h-14 border-t-2 border-r-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-tr-2xl" />
            <div className="absolute -bottom-2 -left-2 w-10 sm:w-14 h-10 sm:h-14 border-b-2 border-l-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-bl-2xl" />
            <div className="absolute -bottom-2 -right-2 w-10 sm:w-14 h-10 sm:h-14 border-b-2 border-r-2 border-[#ff6b35]/50 pointer-events-none z-[3] rounded-br-2xl" />

            <div className="relative bg-white border border-[#0a0a0a]/8 rounded-2xl shadow-[0_4px_20px_rgba(10,10,10,0.04)] overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#0a0a0a]/8 bg-[#f5f5f0]/60">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] cl-blink" />
                    <div className="w-2 h-2 rounded-full bg-[#0a0a0a]/20" />
                    <div className="w-2 h-2 rounded-full bg-[#0a0a0a]/20" />
                  </div>
                  <div className="h-4 w-[1px] bg-[#0a0a0a]/15 hidden sm:block" />
                  <span className="hidden sm:inline text-[0.6rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#0a0a0a]/55 font-bold">
                    Partner Directory / Live
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="hidden sm:flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/45 font-bold">
                    <span>
                      {companyLogos.length} of <AnimatedCounter target={200} />+
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
                    <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#ff6b35] font-bold">
                      Syncing
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative py-8 sm:py-10 md:py-12 px-2">
                <div className="cl-fade-left" />
                <div className="cl-fade-right" />

                <div className="mb-10 sm:mb-12">
                  <MarqueeRow items={rowA} reverse={false} speed={38} />
                </div>
                <div>
                  <MarqueeRow items={rowB} reverse={true} speed={44} />
                </div>
              </div>

              <div className="border-t border-[#0a0a0a]/8 bg-[#f5f5f0]/60">
                <div className="flex items-center">
                  <div className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-r border-[#0a0a0a]/10 bg-[#0a0a0a]">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
                      <span className="text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.22em] text-[#ff6b35] font-bold whitespace-nowrap">
                        Recent Placements
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden py-3 sm:py-4">
                    <PlacementTicker />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
          />
        </div>
      </section>
    </>
  );
};

export default CompanyLogos;