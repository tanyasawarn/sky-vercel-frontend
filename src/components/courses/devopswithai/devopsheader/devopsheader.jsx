// "use client";

// import React, { useState } from "react";
// import Enrollment from "../../../common/enrollmentform/enrollmentform";
// import Downloadcurri from "../../../common/downloadbrochure/downloadbrochure";

// const DevopsHeader = () => {
//   const [brochureDownloaded, setBrochureDownloaded] = useState(false);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [isDownloadVisible, setIsDownloadVisible] = useState(false);
//   const [formKey, setFormKey] = useState(0);

//   const devopsbackgroundimage =
//     "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopsbanner1.png";

//   const handleDownloadBrochure = () => {
//     setBrochureDownloaded(true);
//     setIsDownloadVisible(true);
//     setTimeout(() => setBrochureDownloaded(false), 3000);
//   };

//   const handleEnrollClick = () => {
//     setFormKey((prevKey) => prevKey + 1);
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => setIsFormVisible(false);
//   const handleCloseDownload = () => setIsDownloadVisible(false);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         .dh {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           position: relative;
//           overflow: hidden;
//           min-height: 600px;
//           background:
//             radial-gradient(ellipse 75% 65% at 70% 48%, rgba(57,140,236,0.11) 0%, transparent 65%),
//             radial-gradient(ellipse 45% 55% at 4%  78%, rgba(57,140,236,0.06) 0%, transparent 60%),
//             linear-gradient(155deg, #f0f7ff 0%, #eaf2fc 40%, #ffffff 100%);
//         }

//         .dh::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg,
//             transparent 0%,
//             #398cec 25%,
//             #6ab4ff 50%,
//             #ff6600 78%,
//             transparent 100%);
//           z-index: 20;
//         }

//         .dh-dots {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(rgba(57,140,236,0.20) 1px, transparent 1px);
//           background-size: 26px 26px;
//           mask-image: radial-gradient(ellipse 55% 80% at 80% 50%, black 0%, transparent 75%);
//           -webkit-mask-image: radial-gradient(ellipse 55% 80% at 80% 50%, black 0%, transparent 75%);
//           pointer-events: none;
//           z-index: 0;
//         }

//         .dh-blob-1 {
//           position: absolute;
//           top: -160px; right: -120px;
//           width: 640px; height: 640px;
//           border-radius: 50%;
//           background: radial-gradient(circle at 38% 38%,
//             rgba(57,140,236,0.13) 0%,
//             rgba(57,140,236,0.03) 55%,
//             transparent 72%);
//           pointer-events: none; z-index: 0;
//         }
//         .dh-blob-2 {
//           position: absolute;
//           bottom: -100px; left: 28%;
//           width: 380px; height: 380px;
//           border-radius: 50%;
//           background: radial-gradient(circle,
//             rgba(255,102,0,0.055) 0%, transparent 65%);
//           pointer-events: none; z-index: 0;
//         }

//         .dh-grid {
//           position: relative; z-index: 2;
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 76px 52px 76px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 48px;
//           align-items: center;
//         }

//         @media (max-width: 880px) {
//           .dh-grid {
//             grid-template-columns: 1fr;
//             padding: 52px 24px 52px;
//           }
//           .dh-img-col { order: -1; }
//           .dh-heading, .dh-sub { text-align: center; }
//           .dh-btns { justify-content: center; }
//         }

//         .dh-left { max-width: 580px; }

//         .dh-heading {
//           font-size: clamp(1.9rem, 2.85vw, 2.65rem);
//           font-weight: 800;
//           line-height: 1.16;
//           letter-spacing: -0.032em;
//           color: #0c1c30;
//           margin: 0 0 14px;
//         }

//         .dh-heading-blue {
//           color: #398cec;
//           position: relative;
//           display: inline;
//         }

//         .dh-heading-blue::after {
//           content: '';
//           position: absolute;
//           left: 0; bottom: -3px;
//           width: 100%; height: 2.5px;
//           background: linear-gradient(90deg, #398cec 55%, #ff6600 100%);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           animation: dh-line-in 0.55s cubic-bezier(0.77,0,0.18,1) 0.55s forwards;
//         }
//         @keyframes dh-line-in { to { transform: scaleX(1); } }

//         .dh-sub {
//           font-size: 1.01rem;
//           font-weight: 500;
//           color: #5a7190;
//           margin: 0 0 34px;
//           line-height: 1.55;
//           max-width: 480px;
//         }

//         .dh-panel {
//           margin-bottom: 38px;
//           border-radius: 16px;
//           overflow: hidden;
//           border: 1px solid rgba(57,140,236,0.14);
//           background: rgba(255,255,255,0.82);
//           backdrop-filter: blur(14px);
//           -webkit-backdrop-filter: blur(14px);
//           box-shadow:
//             0 0 0 1px rgba(255,255,255,0.8) inset,
//             0 2px 4px rgba(57,140,236,0.04),
//             0 12px 40px rgba(57,140,236,0.07);
//         }

//         .dh-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//         }
//         .dh-row:first-child {
//           border-bottom: 1px solid rgba(57,140,236,0.09);
//         }

//         .dh-feat {
//           display: flex;
//           align-items: center;
//           gap: 13px;
//           padding: 17px 18px;
//           position: relative;
//           overflow: hidden;
//           transition: background 0.22s;
//         }
//         .dh-row .dh-feat:first-child {
//           border-right: 1px solid rgba(57,140,236,0.09);
//         }

//         .dh-feat::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg,
//             rgba(57,140,236,0.055) 0%,
//             rgba(57,140,236,0.015) 100%);
//           opacity: 0;
//           transition: opacity 0.22s;
//           pointer-events: none;
//         }
//         .dh-feat:hover::after { opacity: 1; }

//         .dh-feat::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 0; bottom: 0;
//           width: 3px;
//           background: linear-gradient(180deg, #398cec, #ff6600);
//           border-radius: 0 2px 2px 0;
//           opacity: 0;
//           transition: opacity 0.22s;
//         }
//         .dh-feat:hover::before { opacity: 1; }

//         .dh-num {
//           flex-shrink: 0;
//           width: 32px; height: 32px;
//           border-radius: 9px;
//           background: linear-gradient(145deg,
//             rgba(255,102,0,0.13) 0%,
//             rgba(255,102,0,0.05) 100%);
//           border: 1px solid rgba(255,102,0,0.16);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 0.69rem;
//           font-weight: 800;
//           color: #e85c00;
//           letter-spacing: 0.02em;
//         }

//         .dh-feat-text {
//           font-size: 0.845rem;
//           font-weight: 600;
//           color: #192d44;
//           line-height: 1.35;
//         }

//         .dh-btns {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//         }

//         .dh-btn-primary {
//           position: relative;
//           height: 48px;
//           padding: 0 30px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.875rem;
//           font-weight: 700;
//           letter-spacing: 0.015em;
//           color: #fff;
//           border: none;
//           border-radius: 12px;
//           cursor: pointer;
//           overflow: hidden;
//           background: linear-gradient(135deg, #ff7520 0%, #f04e00 100%);
//           box-shadow:
//             0 1px 0  rgba(255,255,255,0.22) inset,
//             0 -1px 0 rgba(0,0,0,0.12) inset,
//             0 4px 18px rgba(240,78,0,0.30),
//             0 1px 3px  rgba(240,78,0,0.18);
//           transition: transform 0.17s, box-shadow 0.17s;
//         }
//         .dh-btn-primary::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 50%;
//           background: linear-gradient(180deg,
//             rgba(255,255,255,0.18) 0%,
//             rgba(255,255,255,0) 100%);
//           border-radius: 12px 12px 0 0;
//           pointer-events: none;
//         }
//         .dh-btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow:
//             0 1px 0  rgba(255,255,255,0.22) inset,
//             0 -1px 0 rgba(0,0,0,0.12) inset,
//             0 8px 28px rgba(240,78,0,0.38),
//             0 2px 6px  rgba(240,78,0,0.20);
//         }
//         .dh-btn-primary:active { transform: translateY(0); }

//         .dh-btn-secondary {
//           position: relative;
//           height: 48px;
//           padding: 0 24px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 0.875rem;
//           font-weight: 700;
//           letter-spacing: 0.015em;
//           color: #2b7de9;
//           background: rgba(255,255,255,0.72);
//           border: 1.5px solid rgba(57,140,236,0.32);
//           border-radius: 12px;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//           box-shadow:
//             0 0 0 1px rgba(255,255,255,0.6) inset,
//             0 2px 8px  rgba(57,140,236,0.08);
//           transition: transform 0.17s, border-color 0.17s, box-shadow 0.17s, background 0.17s;
//         }
//         .dh-btn-secondary:hover {
//           transform: translateY(-2px);
//           border-color: rgba(57,140,236,0.55);
//           background: rgba(255,255,255,0.92);
//           box-shadow:
//             0 0 0 1px rgba(255,255,255,0.7) inset,
//             0 6px 22px rgba(57,140,236,0.13);
//         }
//         .dh-btn-secondary:active { transform: translateY(0); }

//         .dh-dl-icon { flex-shrink: 0; transition: transform 0.2s; }
//         .dh-btn-secondary:hover .dh-dl-icon { transform: translateY(2px); }

//         /* ─── IMAGE COLUMN — no card box ─── */
//         .dh-img-col {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 8px;
//         }

//         .dh-img-stage {
//           position: relative;
//           width: 100%;
//           max-width: 780px;
//         }

//         .dh-img-glow {
//           position: absolute;
//           inset: -32px;
//           background: radial-gradient(ellipse at 50% 55%,
//             rgba(57,140,236,0.20) 0%,
//             rgba(57,140,236,0.05) 55%,
//             transparent 75%);
//           border-radius: 50%;
//           filter: blur(28px);
//           pointer-events: none;
//         }

//         .dh-img-stage img {
//           width: 100%;
//           height: auto;
//           display: block;
//           position: relative;
         
//           transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
//           transform: scale(1.7);
//           margin-top:8rem;
//           margin-left: 3rem;
//         }
        

//         /* ─────────── ENTRANCE ANIMATIONS ─────────── */
//         .dh-left > * {
//           opacity: 0;
//           transform: translateY(16px);
//           animation: dhUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
//         }
//         .dh-left > *:nth-child(1) { animation-delay: 0.04s; }
//         .dh-left > *:nth-child(2) { animation-delay: 0.14s; }
//         .dh-left > *:nth-child(3) { animation-delay: 0.24s; }
//         .dh-left > *:nth-child(4) { animation-delay: 0.36s; }

//         .dh-img-col {
//           opacity: 0;
//           transform: translateY(16px);
//           animation: dhUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s forwards;
//         }

//         @keyframes dhUp { to { opacity: 1; transform: translateY(0); } }
//       `}</style>

//       <div className="dh">
//         <div className="dh-dots" />
//         <div className="dh-blob-1" />
//         <div className="dh-blob-2" />

//         <div className="dh-grid">

//           {/* ── LEFT ── */}
//           <div className="dh-left">
//             <h1 className="dh-heading">
//               <span className="dh-heading-blue">DevOps with AI</span>{" "}
//               Masters Course
//             </h1>

//             <p className="dh-sub">
//               Build Your Career with Our 100% Job Assistance Course
//             </p>

//             <div className="dh-panel">
//               <div className="dh-row">
//                 <div className="dh-feat">
//                   <span className="dh-num">01</span>
//                   <span className="dh-feat-text">100% Live Instructor Led Program</span>
//                 </div>
//                 <div className="dh-feat">
//                   <span className="dh-num">02</span>
//                   <span className="dh-feat-text">3 Months &amp; 6 Months Duration</span>
//                 </div>
//               </div>
//               <div className="dh-row">
//                 <div className="dh-feat">
//                   <span className="dh-num">03</span>
//                   <span className="dh-feat-text">50+ Real World Enterprise Case Studies</span>
//                 </div>
//                 <div className="dh-feat">
//                   <span className="dh-num">04</span>
//                   <span className="dh-feat-text">100% Job Assistance Assurance</span>
//                 </div>
//               </div>
//             </div>

//             <div className="dh-btns">
//               <button className="dh-btn-primary" onClick={handleEnrollClick}>
//                 Apply Now
//               </button>

//               <button className="dh-btn-secondary" onClick={handleDownloadBrochure}>
//                 <svg
//                   className="dh-dl-icon"
//                   viewBox="0 0 24 24"
//                   width="16" height="16"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                   <polyline points="7 10 12 15 17 10" />
//                   <line x1="12" y1="15" x2="12" y2="3" />
//                 </svg>
//                 {brochureDownloaded ? "Downloaded" : "Download Brochure"}
//               </button>
//             </div>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="dh-img-col">
//             <div className="dh-img-stage">
//               <div className="dh-img-glow" />
//               <img
//                 src={devopsbackgroundimage}
//                 alt="DevOps with AI Masters Course"
//               />
//             </div>
//           </div>
//         </div>

//         {isFormVisible && (
//           <Enrollment
//             key={formKey}
//             onClose={handleCloseForm}
//             courseName="DevOps With AI Masters"
//           />
//         )}
//         {isDownloadVisible && (
//           <Downloadcurri
//             pdfPath="/Brochure -Devops with AI.pdf"
//             courseName="Devops with AI"
//             showForm={true}
//             onClose={handleCloseDownload}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default DevopsHeader;




"use client";

import React, { useState } from "react";
import Enrollment from "../../../common/enrollmentform/enrollmentform";
import Downloadcurri from "../../../common/downloadbrochure/downloadbrochure";

const DevopsHeader = () => {
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const devopsbackgroundimage =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopsbanner1.png";

  const handleDownloadBrochure = () => {
    setBrochureDownloaded(true);
    setIsDownloadVisible(true);
    setTimeout(() => setBrochureDownloaded(false), 3000);
  };

  const handleEnrollClick = () => {
    setFormKey((prevKey) => prevKey + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => setIsFormVisible(false);
  const handleCloseDownload = () => setIsDownloadVisible(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ─────────── ROOT ─────────── */
        .dh {
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 600px;
          background:
            radial-gradient(ellipse 75% 65% at 70% 48%, rgba(57,140,236,0.11) 0%, transparent 65%),
            radial-gradient(ellipse 45% 55% at 4%  78%, rgba(57,140,236,0.06) 0%, transparent 60%),
            linear-gradient(155deg, #f0f7ff 0%, #eaf2fc 40%, #ffffff 100%);
        }

        .dh::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg,
            transparent 0%,
            #398cec 25%,
            #6ab4ff 50%,
            #ff6600 78%,
            transparent 100%);
          z-index: 20;
        }

        .dh-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(57,140,236,0.20) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 55% 80% at 80% 50%, black 0%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 55% 80% at 80% 50%, black 0%, transparent 75%);
          pointer-events: none;
          z-index: 0;
        }

        .dh-blob-1 {
          position: absolute;
          top: -160px; right: -120px;
          width: 640px; height: 640px;
          border-radius: 50%;
          background: radial-gradient(circle at 38% 38%,
            rgba(57,140,236,0.13) 0%,
            rgba(57,140,236,0.03) 55%,
            transparent 72%);
          pointer-events: none; z-index: 0;
        }
        .dh-blob-2 {
          position: absolute;
          bottom: -100px; left: 28%;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle,
            rgba(255,102,0,0.055) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* ─────────── GRID — DESKTOP (unchanged) ─────────── */
        .dh-grid {
          position: relative; z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 76px 52px 76px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        /* ─────────── LEFT ─────────── */
        .dh-left { max-width: 580px; }

        .dh-heading {
          font-size: clamp(1.9rem, 2.85vw, 2.65rem);
          font-weight: 800;
          line-height: 1.16;
          letter-spacing: -0.032em;
          color: #0c1c30;
          margin: 0 0 14px;
        }

        .dh-heading-blue {
          color: #398cec;
          position: relative;
          display: inline;
        }

        .dh-heading-blue::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 100%; height: 2.5px;
          background: linear-gradient(90deg, #398cec 55%, #ff6600 100%);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: dh-line-in 0.55s cubic-bezier(0.77,0,0.18,1) 0.55s forwards;
        }
        @keyframes dh-line-in { to { transform: scaleX(1); } }

        .dh-sub {
          font-size: 1.01rem;
          font-weight: 500;
          color: #5a7190;
          margin: 0 0 34px;
          line-height: 1.55;
          max-width: 480px;
        }

        /* ─────────── FEATURE PANEL ─────────── */
        .dh-panel {
          margin-bottom: 38px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(57,140,236,0.14);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.8) inset,
            0 2px 4px rgba(57,140,236,0.04),
            0 12px 40px rgba(57,140,236,0.07);
        }

        .dh-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .dh-row:first-child {
          border-bottom: 1px solid rgba(57,140,236,0.09);
        }

        .dh-feat {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 17px 18px;
          position: relative;
          overflow: hidden;
          transition: background 0.22s;
        }
        .dh-row .dh-feat:first-child {
          border-right: 1px solid rgba(57,140,236,0.09);
        }

        .dh-feat::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg,
            rgba(57,140,236,0.055) 0%,
            rgba(57,140,236,0.015) 100%);
          opacity: 0;
          transition: opacity 0.22s;
          pointer-events: none;
        }
        .dh-feat:hover::after { opacity: 1; }

        .dh-feat::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #398cec, #ff6600);
          border-radius: 0 2px 2px 0;
          opacity: 0;
          transition: opacity 0.22s;
        }
        .dh-feat:hover::before { opacity: 1; }

        .dh-num {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 9px;
          background: linear-gradient(145deg,
            rgba(255,102,0,0.13) 0%,
            rgba(255,102,0,0.05) 100%);
          border: 1px solid rgba(255,102,0,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.69rem;
          font-weight: 800;
          color: #e85c00;
          letter-spacing: 0.02em;
        }

        .dh-feat-text {
          font-size: 0.845rem;
          font-weight: 600;
          color: #192d44;
          line-height: 1.35;
        }

        /* ─────────── BUTTONS ─────────── */
        .dh-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .dh-btn-primary {
          position: relative;
          height: 48px;
          padding: 0 30px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.015em;
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          background: linear-gradient(135deg, #ff7520 0%, #f04e00 100%);
          box-shadow:
            0 1px 0  rgba(255,255,255,0.22) inset,
            0 -1px 0 rgba(0,0,0,0.12) inset,
            0 4px 18px rgba(240,78,0,0.30),
            0 1px 3px  rgba(240,78,0,0.18);
          transition: transform 0.17s, box-shadow 0.17s;
        }
        .dh-btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 50%;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0) 100%);
          border-radius: 12px 12px 0 0;
          pointer-events: none;
        }
        .dh-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 1px 0  rgba(255,255,255,0.22) inset,
            0 -1px 0 rgba(0,0,0,0.12) inset,
            0 8px 28px rgba(240,78,0,0.38),
            0 2px 6px  rgba(240,78,0,0.20);
        }
        .dh-btn-primary:active { transform: translateY(0); }

        .dh-btn-secondary {
          position: relative;
          height: 48px;
          padding: 0 24px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.015em;
          color: #2b7de9;
          background: rgba(255,255,255,0.72);
          border: 1.5px solid rgba(57,140,236,0.32);
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.6) inset,
            0 2px 8px  rgba(57,140,236,0.08);
          transition: transform 0.17s, border-color 0.17s, box-shadow 0.17s, background 0.17s;
        }
        .dh-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(57,140,236,0.55);
          background: rgba(255,255,255,0.92);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.7) inset,
            0 6px 22px rgba(57,140,236,0.13);
        }
        .dh-btn-secondary:active { transform: translateY(0); }

        .dh-dl-icon { flex-shrink: 0; transition: transform 0.2s; }
        .dh-btn-secondary:hover .dh-dl-icon { transform: translateY(2px); }

        /* ─────────── IMAGE COLUMN — DESKTOP ─────────── */
        .dh-img-col {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px;
        }

        .dh-img-stage {
          position: relative;
          width: 100%;
          max-width: 780px;
        }

        .dh-img-glow {
          position: absolute;
          inset: -32px;
          background: radial-gradient(ellipse at 50% 55%,
            rgba(57,140,236,0.20) 0%,
            rgba(57,140,236,0.05) 55%,
            transparent 75%);
          border-radius: 50%;
          filter: blur(28px);
          pointer-events: none;
        }

        /* Desktop image — scaled up and offset as original */
        .dh-img-stage img {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 2;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          transform: scale(1.7);
          margin-top: 8rem;
          margin-left: 3rem;
        }

        /* ─────────── ENTRANCE ANIMATIONS ─────────── */
        .dh-left > * {
          opacity: 0;
          transform: translateY(16px);
          animation: dhUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .dh-left > *:nth-child(1) { animation-delay: 0.04s; }
        .dh-left > *:nth-child(2) { animation-delay: 0.14s; }
        .dh-left > *:nth-child(3) { animation-delay: 0.24s; }
        .dh-left > *:nth-child(4) { animation-delay: 0.36s; }

        .dh-img-col {
          opacity: 0;
          transform: translateY(16px);
          animation: dhUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.18s forwards;
        }

        @keyframes dhUp { to { opacity: 1; transform: translateY(0); } }

        /* ═══════════════════════════════════════════
           TABLET  ≤ 1024px
        ═══════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .dh-grid {
            padding: 56px 36px 56px;
            gap: 32px;
          }

          /* Tighten the aggressive desktop scale on tablet */
          .dh-img-stage img {
            transform: scale(1.35);
            margin-top: 5rem;
            margin-left: 1.5rem;
          }

          .dh-heading {
            font-size: clamp(1.7rem, 3vw, 2.2rem);
          }
        }

        /* ═══════════════════════════════════════════
           SMALL TABLET / LARGE MOBILE  ≤ 880px
           Switch to single-column, image on top
        ═══════════════════════════════════════════ */
        @media (max-width: 880px) {
          .dh {
            min-height: unset;
          }

          .dh-grid {
            grid-template-columns: 1fr;
            padding: 48px 24px 48px;
            gap: 0;
          }

          /* Image moves above text */
          .dh-img-col {
            order: -1;
            padding: 0;
            margin-bottom: 8px;
          }

          /* Reset the desktop scale/offset completely */
          .dh-img-stage {
            max-width: 420px;
            margin: 0 auto;
          }

          .dh-img-stage img {
            transform: none !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
            width: 100%;
          }

          /* Centre all left-column text */
          .dh-left {
            max-width: 100%;
            text-align: center;
          }

          .dh-heading {
            font-size: clamp(1.65rem, 5vw, 2rem);
            text-align: center;
          }

          .dh-sub {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .dh-btns {
            justify-content: center;
          }

          /* Feature panel — keep 2-col grid but allow wrap */
          .dh-row {
            grid-template-columns: 1fr 1fr;
          }

          .dh-feat {
            padding: 14px 14px;
          }

          .dh-feat-text {
            font-size: 0.8rem;
          }
        }

        /* ═══════════════════════════════════════════
           MOBILE  ≤ 540px
        ═══════════════════════════════════════════ */
        @media (max-width: 540px) {
          .dh-grid {
            padding: 40px 16px 40px;
          }

          .dh-img-stage {
            max-width: 320px;
          }

          .dh-heading {
            font-size: 1.55rem;
            letter-spacing: -0.02em;
          }

          .dh-sub {
            font-size: 0.92rem;
            margin-bottom: 24px;
          }

          /* Stack feature cards to single column on small phones */
          .dh-row {
            grid-template-columns: 1fr;
          }

          /* Remove the right border that only makes sense in 2-col layout */
          .dh-row .dh-feat:first-child {
            border-right: none;
            border-bottom: 1px solid rgba(57,140,236,0.09);
          }

          .dh-feat {
            padding: 13px 16px;
          }

          .dh-feat-text {
            font-size: 0.82rem;
          }

          .dh-panel {
            margin-bottom: 28px;
          }

          /* Full-width buttons on small screens */
          .dh-btns {
            flex-direction: column;
            gap: 10px;
          }

          .dh-btn-primary,
          .dh-btn-secondary {
            width: 100%;
            justify-content: center;
            height: 50px;
            font-size: 0.92rem;
          }
        }

        /* ═══════════════════════════════════════════
           VERY SMALL  ≤ 380px
        ═══════════════════════════════════════════ */
        @media (max-width: 380px) {
          .dh-grid {
            padding: 32px 14px 36px;
          }

          .dh-heading {
            font-size: 1.35rem;
          }

          .dh-img-stage {
            max-width: 270px;
          }
        }
      `}</style>

      <div className="dh">
        <div className="dh-dots" />
        <div className="dh-blob-1" />
        <div className="dh-blob-2" />

        <div className="dh-grid">

          {/* ── LEFT ── */}
          <div className="dh-left">
            <h1 className="dh-heading">
              <span className="dh-heading-blue">DevOps with AI</span>{" "}
              Masters Course
            </h1>

            <p className="dh-sub">
              Build Your Career with Our 100% Job Assistance Course
            </p>

            <div className="dh-panel">
              <div className="dh-row">
                <div className="dh-feat">
                  <span className="dh-num">01</span>
                  <span className="dh-feat-text">100% Live Instructor Led Program</span>
                </div>
                <div className="dh-feat">
                  <span className="dh-num">02</span>
                  <span className="dh-feat-text">3 Months &amp; 6 Months Duration</span>
                </div>
              </div>
              <div className="dh-row">
                <div className="dh-feat">
                  <span className="dh-num">03</span>
                  <span className="dh-feat-text">50+ Real World Enterprise Case Studies</span>
                </div>
                <div className="dh-feat">
                  <span className="dh-num">04</span>
                  <span className="dh-feat-text">100% Job Assistance Assurance</span>
                </div>
              </div>
            </div>

            <div className="dh-btns">
              <button className="dh-btn-primary" onClick={handleEnrollClick}>
                Apply Now
              </button>

              <button className="dh-btn-secondary" onClick={handleDownloadBrochure}>
                <svg
                  className="dh-dl-icon"
                  viewBox="0 0 24 24"
                  width="16" height="16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {brochureDownloaded ? "Downloaded" : "Download Brochure"}
              </button>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="dh-img-col">
            <div className="dh-img-stage">
              <div className="dh-img-glow" />
              <img
                src={devopsbackgroundimage}
                alt="DevOps with AI Masters Course"
              />
            </div>
          </div>
        </div>

        {isFormVisible && (
          <Enrollment
            key={formKey}
            onClose={handleCloseForm}
            courseName="DevOps With AI Masters"
          />
        )}
        {isDownloadVisible && (
          <Downloadcurri
            pdfPath="/Brochure -Devops with AI.pdf"
            courseName="Devops with AI"
            showForm={true}
            onClose={handleCloseDownload}
          />
        )}
      </div>
    </>
  );
};

export default DevopsHeader;