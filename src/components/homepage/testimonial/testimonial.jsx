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











"use client";

import React, { useState, useEffect } from "react";
import { Play, ExternalLink, Star } from "lucide-react";
import { testimonialsData } from "./testimonialdata";

const TestimonialCarousel = ({ courseName, isHomepage = false }) => {
  const [reviews, setReviews] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let intervalId;

    const shuffleTestimonials = () => {
      if (isHomepage) {
        const all = Object.values(testimonialsData).flat();
        const shuffled = [...all].sort(() => 0.5 - Math.random());
        setReviews(shuffled.slice(0, 3));
      } else {
        const courseReviews =
          testimonialsData[courseName?.toLowerCase()] || [];
        setReviews(courseReviews);
      }
    };

    shuffleTestimonials();

    if (isHomepage) {
      intervalId = setInterval(shuffleTestimonials, 10000);
    }

    setMounted(true);

    return () => intervalId && clearInterval(intervalId);
  }, [courseName, isHomepage]);

  if (!mounted) return null;

  const GOOGLE_REVIEW_URL = "https://g.page/r/CWnE6P9p5M1-EBM/review";

  return (
    <section className="bg-gray-50 py-1 mb-2.5 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
            <span className="text-cyan-600"> What Our Alumni Say</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Hear from learners who transformed their careers through our programs.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((user, index) => {
            const isGoogleReview =
              user.source === "Google Review" || !user.videoLink;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col h-full 
                hover:border-cyan-200 hover:shadow-xl transition"
              >

                {/* USER */}
                <div className="flex items-center gap-4 mb-4">

                  <div className="relative w-12 h-12">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover border border-gray-200"
                    />

                    {!isGoogleReview && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center border border-white">
                        <Play size={12} className="text-white fill-white" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">

                      {!isGoogleReview ? (
                        <span className="text-xs text-gray-500">
                          LinkedIn Profile
                        </span>
                      ) : (
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={12}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      )}

                      <span className="text-xs px-2 py-1 bg-cyan-100 text-cyan-700 rounded-full">
                        {user.designation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  "{user.text}"
                </p>

                {/* BUTTON */}
                {!isGoogleReview ? (
                  <a
                    href={user.videoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition"
                  >
                    <Play size={14} />
                    Watch Video
                  </a>
                ) : (
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-cyan-50 text-cyan-700 text-sm font-medium hover:bg-cyan-100 transition"
                  >
                    <ExternalLink size={14} />
                    Read Review
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* DOT INDICATOR */}
        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === 1 ? "w-6 bg-cyan-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;