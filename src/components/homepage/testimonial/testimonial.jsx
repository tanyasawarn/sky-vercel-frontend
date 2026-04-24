// "use client";

// import React, { useState, useEffect } from "react";
// import { Play, ExternalLink, Star } from "lucide-react";
// import { testimonialsData } from "./testimonialdata";

// const TestimonialCarousel = ({
//   courseName,
//   isHomepage = false,
//   headingColor,
// }) => {
//   const [reviews, setReviews] = useState([]);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//     const [mounted, setMounted] = useState(false);


//   useEffect(() => {
//     setIsVisible(true);
//     let intervalId;

//     const shuffleTestimonials = () => {
//       if (isHomepage) {
//         const allTestimonials = Object.values(testimonialsData).flat();
//         const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
//         setReviews(shuffled.slice(0, 3));
//       } else {
//         const courseReviews = testimonialsData[courseName?.toLowerCase()] || [];
//         setReviews(courseReviews);
//       }
//     };

//     shuffleTestimonials();

//     if (isHomepage) {
//       intervalId = setInterval(shuffleTestimonials, 10000);
//     }

//     return () => intervalId && clearInterval(intervalId);
//   }, [courseName, isHomepage]);

//   // Google Review URL
//   const GOOGLE_REVIEW_URL = "https://g.page/r/CWnE6P9p5M1-EBM/review";

//      useEffect(() => {
//     setMounted(true);
//     setIsVisible(true);
//   }, []);

//   // ✅ AFTER all hooks
//   if (!mounted) return null;
  

//   return (
//     <div className="w-[85%] mx-auto my-8 mb-16 p-4 md:p-0">
//       {/* Modern Animated Heading - Fixed Spacing */}
//       <div className="relative mb-10">
//         <h2
//           className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
//       after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
//         >
//           <em style={{ fontStyle: "italic" }}>What Our Alumni Say</em>
//         </h2>

//         {/* Decorative elements - Reduced negative top positioning */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#0bf]/10 to-[#1a365d]/10 rounded-full blur-2xl -z-10"></div>
//         <div className="absolute top-2 left-1/4 w-32 h-32 bg-[#0bf]/5 rounded-full blur-3xl -z-10"></div>
//         <div className="absolute top-2 right-1/4 w-32 h-32 bg-[#1a365d]/5 rounded-full blur-3xl -z-10"></div>
//       </div>

//       {/* Modern Card Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//         {reviews.map((user, index) => {
//           const isGoogleReview =
//             user.source === "Google Review" || !user.videoLink;

//           return (
//             <div
//               key={index}
//               className={`group relative transform transition-all duration-500 ease-out ${
//                 isVisible
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Glass morphism background */}
//               <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
//                 {/* Animated gradient border on hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0bf] to-[#1a365d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>

//                 {/* Quote icon background */}
//                 <div className="absolute -top-3 -right-3 text-6xl opacity-5 select-none">
//                   "
//                 </div>

//                 {/* User Info Section - With Profile Image */}
//                 <div className="flex items-start gap-4 mb-5">
//                   {/* Profile Image or YouTube Play Button */}
//                   <div className="relative flex-shrink-0">
//                     {!isGoogleReview ? (
//                       // YouTube Review - Show Profile Image with Play Button Overlay
//                       <a
//                         href={user.videoLink}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="block group/play"
//                       >
//                         <div className="relative w-14 h-14">
//                           {/* Profile Image */}
//                           <img
//                             src={user.img}
//                             alt={user.name}
//                             className="w-full h-full rounded-full object-cover border-2 border-gray-200 group-hover/play:border-[#0bf] transition-colors duration-300"
//                             onError={(e) => {
//                               e.target.src =
//                                 "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e2e8f0'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%2394a3b8'%3E👤%3C/text%3E%3C/svg%3E";
//                             }}
//                           />
//                           {/* YouTube Red Play Button Overlay */}
//                           <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-red-500/30 transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white">
//                             <Play
//                               size={14}
//                               className="text-white fill-white translate-x-[0.5px]"
//                             />
//                           </div>
//                           {/* Pulsing ring effect */}
//                           <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-red-500 animate-ping opacity-20"></div>
//                         </div>
//                       </a>
//                     ) : (
//                       // Google Review - Show Profile Image Only
//                       <div className="relative w-14 h-14">
//                         <img
//                           src={user.img}
//                           alt={user.name}
//                           className="w-full h-full rounded-full object-cover border-2 border-gray-200 group-hover:border-[#0bf] transition-colors duration-300"
//                           onError={(e) => {
//                             e.target.src =
//                               "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e2e8f0'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%2394a3b8'%3E👤%3C/text%3E%3C/svg%3E";
//                           }}
//                         />
//                         {/* Google Icon Badge */}
//                         <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
//                           <svg viewBox="0 0 24 24" width="14" height="14">
//                             <path
//                               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                               fill="#4285F4"
//                             />
//                             <path
//                               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                               fill="#34A853"
//                             />
//                             <path
//                               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                               fill="#FBBC05"
//                             />
//                             <path
//                               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                               fill="#EA4335"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="text-base font-bold text-[#1a365d] group-hover:text-[#0bf] transition-colors duration-300">
//                       {user.name}
//                     </h3>

//                     {/* LinkedIn/Designation or Google Stars */}
//                     <div className="flex items-center gap-2 mt-1.5">
//                       {!isGoogleReview ? (
//                         // YouTube Review - Show LinkedIn
//                         <a
//                           href={user.linkedin}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="group/linkedin"
//                         >
//                           <div className="w-7 h-7 bg-[#0077B5]/10 rounded-lg flex items-center justify-center hover:bg-[#0077B5]/20 transition-all duration-300">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="16"
//                               height="16"
//                               fill="#0077B5"
//                               viewBox="0 0 24 24"
//                               className="group-hover/linkedin:scale-110 transition-transform"
//                             >
//                               <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-12h4v2a4 4 0 012-2zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
//                             </svg>
//                           </div>
//                         </a>
//                       ) : (
//                         // Google Review - Show Stars
//                         <div className="flex items-center gap-0.5">
//                           {[1, 2, 3, 4, 5].map((star) => (
//                             <Star
//                               key={star}
//                               size={14}
//                               className="fill-yellow-400 text-yellow-400"
//                             />
//                           ))}
//                         </div>
//                       )}

//                       <span className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-[#0bf]/10 to-[#1a365d]/10 text-[#1a365d] rounded-full border border-[#0bf]/20">
//                         {user.designation}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Testimonial Text */}
//                 <div className="relative flex-1">
//                   <p className="text-sm text-gray-600 leading-relaxed text-justify mb-5 pl-1 border-l-2 border-[#0bf]/30">
//                     <span className="text-[#0bf] text-lg font-serif mr-1">
//                       "
//                     </span>
//                     {user.text}
//                     <span className="text-[#0bf] text-lg font-serif ml-1">
//                       "
//                     </span>
//                   </p>
//                 </div>

//                 {/* Bottom Section - Conditional Button */}
//                 <div className="pt-4 border-t border-gray-100 mt-auto">
//                   {!isGoogleReview ? (
//                     // YouTube Review - Watch Video Button
//                     <a
//                       href={user.videoLink}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="group/button flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl hover:from-red-100 hover:to-red-200/50 transition-all duration-300"
//                     >
//                       <Play
//                         size={16}
//                         className="text-red-600 fill-red-600 group-hover/button:scale-110 transition-transform"
//                       />
//                       <span className="text-sm font-semibold text-red-600 group-hover/button:text-red-700 transition-colors">
//                         Watch Video Testimonial
//                       </span>
//                     </a>
//                   ) : (
//                     // Google Review - Read Review Button
//                     <a
//                       href={GOOGLE_REVIEW_URL}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="group/button flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl hover:from-blue-100 hover:to-blue-200/50 transition-all duration-300"
//                     >
//                       <ExternalLink
//                         size={16}
//                         className="text-blue-600 group-hover/button:scale-110 transition-transform"
//                       />
//                       <span className="text-sm font-semibold text-blue-600 group-hover/button:text-blue-700 transition-colors">
//                         Read Full Review
//                       </span>
//                     </a>
//                   )}
//                 </div>

//                 {/* Hover overlay effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0bf]/5 via-transparent to-[#1a365d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom decorative wave */}
//       <div className="mt-12 flex justify-center">
//         <div className="flex gap-2">
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 i === 1 ? "bg-[#0bf] w-6" : "bg-[#1a365d]/30"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;






// --------------------------------------------new design--------------------------------------------------------------



"use client";

import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Star, Quote, ArrowUpRight, Sparkles } from "lucide-react";
import { testimonialsData } from "./testimonialdata";

const TestimonialCarousel = ({ courseName, isHomepage = false }) => {
  const [reviews, setReviews] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    let intervalId;

    const shuffleTestimonials = () => {
      if (isHomepage) {
        const all = Object.values(testimonialsData).flat();
        const shuffled = [...all].sort(() => 0.5 - Math.random());
        setReviews(shuffled.slice(0, 9));
      } else {
        const courseReviews = testimonialsData[courseName?.toLowerCase()] || [];
        setReviews(courseReviews);
      }
    };

    shuffleTestimonials();
    if (isHomepage) intervalId = setInterval(shuffleTestimonials, 12000);
    setMounted(true);

    return () => intervalId && clearInterval(intervalId);
  }, [courseName, isHomepage]);


  const GOOGLE_REVIEW_URL = "https://g.page/r/CWnE6P9p5M1-EBM/review";

  // Split: video testimonials (with videoLink) vs text reviews
  const videoTestimonials = reviews.filter((r) => r.videoLink && !r.source);
  const textReviews = reviews.filter((r) => r.source === "Google Review" || !r.videoLink);

  // Auto-advance video spotlight every 8s
  useEffect(() => {
    if (videoTestimonials.length <= 1) return;
    const t = setInterval(() => {
      setActiveVideo((p) => (p + 1) % videoTestimonials.length);
    }, 8000);
    return () => clearInterval(t);
  }, [videoTestimonials.length]);

   if (!mounted) return null;

  const featuredVideo = videoTestimonials[activeVideo];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spotlightFade {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes marqueeScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .reviews-marquee {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marqueeScroll 60s linear infinite;
        }
        .reviews-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24"
        style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#ff6b35] opacity-[0.05] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.04] blur-[110px] pointer-events-none" />

        <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          {/* HEADER */}
          <div className="mb-10 sm:mb-14">
            <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
              <div className="col-span-12 lg:col-span-7">
                <div className="inline-flex items-center gap-3 mb-5">
                  <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
                  <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
                    Alumni Stories
                  </span>
                </div>

                <h2
                  className="text-[clamp(1.85rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 text-[#0a0a0a]"
                  style={{ fontWeight: 800 }}
                >
                  Real careers,
                  <br />
                  <span className="text-[#0a0a0a]/35">real outcomes.</span>
                </h2>

                <p className="max-w-[520px] text-[0.95rem] sm:text-[1.05rem] text-[#0a0a0a]/65 leading-[1.65] font-light">
                  Hear directly from learners who switched roles, doubled salaries, and shipped to production — in their own words.
                </p>
              </div>

              {/* Right: Aggregate rating card */}
              <div className="col-span-12 lg:col-span-5 flex lg:justify-end">
                <div className="relative bg-white border border-[#0a0a0a]/8 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 shadow-[0_4px_20px_rgba(10,10,10,0.04)] flex items-center gap-5">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          className="fill-[#ff6b35] text-[#ff6b35]"
                        />
                      ))}
                    </div>
                    <div className="text-[2rem] sm:text-[2.25rem] font-extrabold leading-none text-[#0a0a0a]">
                      4.9
                      <span className="text-[1rem] text-[#0a0a0a]/35 font-bold">
                        /5
                      </span>
                    </div>
                  </div>
                  <div className="w-[1px] h-12 bg-[#0a0a0a]/10" />
                  <div>
                    <div className="text-[0.62rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-bold mb-1">
                      Verified Reviews
                    </div>
                    <div className="text-[0.9rem] font-extrabold text-[#0a0a0a]">
                      2,400+ on Google
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/15 via-[#0a0a0a]/5 to-transparent" />
          </div>

          {/* ──────── ZONE 1: FEATURED VIDEO SPOTLIGHT ──────── */}
          {featuredVideo && (
            <div className="mb-12 sm:mb-16 grid grid-cols-12 gap-5 lg:gap-6">
              {/* LEFT: Spotlight video card */}
              <div className="col-span-12 lg:col-span-8 relative">
                {/* Corner brackets */}
                <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#ff6b35]/50 rounded-tl-2xl pointer-events-none z-[2]" />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#ff6b35]/50 rounded-br-2xl pointer-events-none z-[2]" />

                <a
                  href={featuredVideo.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(10,10,10,0.15)]"
                  key={`spotlight-${activeVideo}`}
                  style={{
                    animation: "spotlightFade 0.7s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                >
                  {/* Background image with dark wash */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                    <img
                      src={featuredVideo.img}
                      alt={featuredVideo.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                      style={{ filter: "brightness(0.55) contrast(1.1)" }}
                    />

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-transparent" />

                    {/* Orange accent glow */}
                    <div className="absolute top-0 right-0 w-60 h-60 bg-[#ff6b35] opacity-[0.15] blur-[80px] rounded-full" />
                  </div>

                  {/* TOP LEFT: Featured badge */}
                  <div className="absolute top-5 left-5 sm:top-6 sm:left-6 inline-flex items-center gap-2 bg-[#ff6b35] px-3 py-1.5 rounded-full">
                    <Sparkles size={11} className="text-white" strokeWidth={2.5} />
                    <span className="text-[0.6rem] uppercase tracking-[0.22em] text-white font-bold">
                      Featured Story
                    </span>
                  </div>

                  {/* TOP RIGHT: Counter */}
                  <div className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[0.65rem] font-mono font-bold text-white/50 tracking-tight">
                    0{activeVideo + 1} / 0{videoTestimonials.length}
                  </div>

                  {/* CENTER: Play button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      {/* Outer pulsing ring */}
                      <div className="absolute inset-0 rounded-full bg-[#ff6b35]/30 animate-ping" />
                      <div className="relative w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#ff6b35] flex items-center justify-center shadow-[0_8px_30px_rgba(255,107,53,0.5)] group-hover:scale-110 transition-transform duration-500">
                        <Play
                          size={26}
                          fill="white"
                          className="text-white ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM: Quote + Person info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-8">
                    <Quote
                      size={28}
                      className="text-[#ff6b35] mb-3 opacity-80"
                      strokeWidth={2}
                    />
                    <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] text-white/85 font-light leading-[1.55] mb-5 max-w-[640px]">
                      "{featuredVideo.text.length > 180
                        ? featuredVideo.text.substring(0, 180) + "..."
                        : featuredVideo.text}"
                    </p>

                    <div className="flex items-end justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredVideo.img}
                          alt={featuredVideo.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-white/20"
                        />
                        <div>
                          <div className="text-white text-[0.95rem] sm:text-[1.05rem] font-extrabold tracking-tight leading-tight">
                            {featuredVideo.name}
                          </div>
                          <div className="text-white/55 text-[0.75rem] sm:text-[0.8rem] font-medium mt-0.5">
                            {featuredVideo.designation}
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-2 text-white/80 text-[0.75rem] font-bold">
                        <span className="uppercase tracking-[0.15em]">
                          Watch Story
                        </span>
                        <ArrowUpRight size={16} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* RIGHT: Other video stories list */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-bold">
                    More Stories
                  </span>
                  <span className="text-[0.6rem] font-mono font-bold text-[#0a0a0a]/30 tracking-tight">
                    {videoTestimonials.length} videos
                  </span>
                </div>

                {videoTestimonials.map((video, i) => {
                  const isActive = i === activeVideo;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveVideo(i)}
                      className={`group relative text-left bg-white rounded-xl p-3 sm:p-4 transition-all duration-400 border ${
                        isActive
                          ? "border-[#ff6b35]/40 shadow-[0_8px_24px_rgba(10,10,10,0.06)]"
                          : "border-[#0a0a0a]/8 hover:border-[#ff6b35]/30 hover:shadow-[0_8px_24px_rgba(10,10,10,0.04)]"
                      }`}
                    >
                      {/* Active indicator line */}
                      {isActive && (
                        <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#ff8a5e] rounded-full" />
                      )}

                      <div className="flex items-center gap-3">
                        {/* Thumbnail with play overlay */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a]">
                          <img
                            src={video.img}
                            alt={video.name}
                            className="w-full h-full object-cover"
                            style={{ filter: "brightness(0.7)" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isActive
                                  ? "bg-[#ff6b35] scale-100"
                                  : "bg-white/90 scale-90 group-hover:bg-[#ff6b35] group-hover:scale-100"
                              }`}
                            >
                              <Play
                                size={11}
                                fill={isActive ? "white" : "#0a0a0a"}
                                className={`ml-[1px] ${
                                  isActive
                                    ? "text-white"
                                    : "text-[#0a0a0a] group-hover:text-white group-hover:fill-white"
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-[0.85rem] sm:text-[0.9rem] font-extrabold tracking-tight leading-tight truncate transition-colors ${
                              isActive ? "text-[#ff6b35]" : "text-[#0a0a0a]"
                            }`}
                          >
                            {video.name}
                          </div>
                          <div className="text-[0.7rem] sm:text-[0.72rem] text-[#0a0a0a]/55 font-medium mt-0.5 truncate">
                            {video.designation}
                          </div>
                        </div>

                        {/* Arrow */}
                        <ArrowUpRight
                          size={14}
                          className={`flex-shrink-0 transition-all ${
                            isActive
                              ? "text-[#ff6b35]"
                              : "text-[#0a0a0a]/25 group-hover:text-[#ff6b35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`}
                          strokeWidth={2.5}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ──────── ZONE 2: TEXT REVIEWS MARQUEE ──────── */}
          {textReviews.length > 0 && (
            <div className="relative">
              {/* Section label */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="h-[1px] w-8 bg-[#0a0a0a]/30" />
                  <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                    Verified Google Reviews
                  </span>
                </div>

                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-[0.72rem] sm:text-[0.78rem] font-bold text-[#ff6b35] hover:text-[#0a0a0a] transition-colors"
                >
                  <span className="tracking-wide">Write a review</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* Edge fades */}
              <div className="relative">
                <div
                  className="absolute left-0 top-0 bottom-0 w-20 z-[2] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #f8faff 20%, transparent)",
                  }}
                />
                <div
                  className="absolute right-0 top-0 bottom-0 w-20 z-[2] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to left, #f0f5ff 20%, transparent)",
                  }}
                />

                {/* Marquee */}
                <div className="overflow-hidden">
                  <div className="reviews-marquee py-2">
                    {[...textReviews, ...textReviews].map((review, i) => (
                      <div
                        key={i}
                        className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] bg-white border border-[#0a0a0a]/8 rounded-xl p-5 sm:p-6 hover:border-[#ff6b35]/30 hover:shadow-[0_10px_30px_rgba(10,10,10,0.06)] transition-all duration-400"
                      >
                        {/* Top: Stars + Google badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                size={12}
                                className="fill-[#ff6b35] text-[#ff6b35]"
                              />
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 px-2 py-1 bg-[#f5f5f0] rounded-full">
                            <div className="w-1 h-1 rounded-full bg-[#ff6b35]" />
                            <span className="text-[0.55rem] uppercase tracking-[0.18em] text-[#0a0a0a]/65 font-bold">
                              Google
                            </span>
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-[0.82rem] sm:text-[0.85rem] text-[#0a0a0a]/75 font-normal leading-[1.6] mb-5 line-clamp-5">
                          {review.text}
                        </p>

                        {/* Person */}
                        <div className="flex items-center gap-3 pt-4 border-t border-[#0a0a0a]/8">
                          <img
                            src={review.img}
                            alt={review.name}
                            className="w-9 h-9 rounded-full object-cover border border-[#0a0a0a]/8 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-[0.82rem] font-extrabold text-[#0a0a0a] tracking-tight truncate">
                              {review.name}
                            </div>
                            <div className="text-[0.65rem] uppercase tracking-[0.15em] text-[#0a0a0a]/45 font-bold mt-0.5">
                              Verified Learner
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TestimonialCarousel;



