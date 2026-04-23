// "use client";

// import { CheckCircle, TrendingUp, Crown, Clock, Sparkles, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// const COLORS = {
//   primary: "#0EA5E9",
//   primaryLight: "#7DD3FC",
//   primarySoft: "#E0F2FE",
//   primaryBg: "#F0F9FF",
//   dark: "#0F172A",
//   slate: "#475569",
//   slateLight: "#94A3B8",
//   border: "#E2E8F0",
//   white: "#FFFFFF",
// };

// const CourseCard = ({ course, convertPrice, handleEnrollClick }) => {
//   const isBestSeller = course.badge === "Best Seller";
//   const isTrending = course.badge === "Trending";

//   if (!course.userCountry) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.3 }}
//       className="group relative h-full"
//     >
//       {/* Animated gradient border */}
//       <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#0EA5E9]/0 via-[#0EA5E9]/30 to-[#0EA5E9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
//       {/* Main Card */}
//       <div className="relative h-full rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
//        {course.isComingSoon && (
//   <div className="
//     absolute inset-0 bg-black/90 flex items-center justify-center 
//     opacity-100 
//     md:opacity-0 md:group-hover:opacity-100 
//     transition duration-300 z-20
//   ">
//     <p className="text-orange-500 text-xl md:text-2xl font-bold">
//       Coming Soon
//     </p>
//   </div>
// )}
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0EA5E9] to-transparent rounded-full blur-2xl" />
//           <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0EA5E9] to-transparent rounded-full blur-2xl" />
//         </div>

//         {/* Content Container */}
//         <div className="relative p-6 h-full flex flex-col" style={{ background: COLORS.white }}>
          
//           {/* Modern Badge */}
//           {course.badge && (
//             <motion.div 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.1 }}
//               className="absolute top-4 right-4 z-10"
//             >
//               <div
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg"
//                 style={{
//                   background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
//                   color: COLORS.white,
//                 }}
//               >
//                 {isBestSeller}
//                 {isTrending }
//                 {!isBestSeller && !isTrending && <Clock className="w-3 h-3" />}
//                 <span>{course.badge}</span>
//               </div>
//             </motion.div>
//           )}

//           {/* Modern Icon Container */}
//           <motion.div 
//             whileHover={{ scale: 1.05, rotate: 5 }}
//             className="flex justify-center mb-6"
//           >
//             <div
//               className="relative w-24 h-24 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300"
//               style={{
//                 background: `linear-gradient(135deg, ${COLORS.primaryBg}, ${COLORS.white})`,
//                 border: `2px solid ${COLORS.primarySoft}`,
//               }}
//             >
//               {/* Animated ring */}
//               <div className="absolute inset-0 rounded-2xl border-2 border-[#0EA5E9]/20 animate-pulse" />
//               <img src={course.icon} className="w-18 h-18 object-contain relative z-10" alt={course.title} />
//             </div>
//           </motion.div>

//           {/* Title with modern styling */}
//           <h3
//             className="text-2xl font-bold text-center mb-2 leading-tight bg-gradient-to-r from-[#0F172A] to-[#475569] bg-clip-text text-transparent"
//           >
//             {course.title}
//           </h3>

        

//           {/* Modern Details List */}
//           <ul className="space-y-3 flex-1">
//             {course.details.map((detail, index) => (
//               <motion.li 
//                 key={index} 
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-start group/item"
//               >
//                 <div className="relative">
//                   <CheckCircle
//                     className="w-4 h-4 mr-3 mt-0.5 transition-transform group-hover/item:scale-110"
//                     style={{ color: COLORS.primary }}
//                   />
//                 </div>
//                 <span
//                   className="text-sm font-medium"
//                   style={{ color: COLORS.slate }}
//                 >
//                   {detail}
//                 </span>
//               </motion.li>
//             ))}
//           </ul>

//           {/* Modern Pricing Section */}
//           <div className="mt-6 pt-5">
//             <div className="relative">
//               {/* Glass morphism background */}
//               <div 
//                 className="absolute inset-0 rounded-xl opacity-50"
//                 style={{ background: COLORS.primaryBg }}
//               />
              
//               <div className="relative p-4 text-center rounded-xl">
//                 {course.isEMI && course.userCountry === "IN" ? (
//                   <>
//                     <p className="text-s uppercase tracking-wider font-semibold" style={{ color: COLORS.slateLight }}>
//                       Starting at
//                     </p>
//                     <div className="flex items-baseline justify-center gap-1 mt-1">
//                       <span className="text-4xl font-black" style={{ color: COLORS.primary }}>
//                         {convertPrice(course.emiPrice)}
//                       </span>
//                       <span className="text-sm font-medium" style={{ color: COLORS.slateLight }}>/month</span>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: COLORS.slateLight }}>
//                       One-time payment
//                     </p>
//                     <div className="mt-1">
//                       <span className="text-3xl font-black" style={{ color: COLORS.primary }}>
//                         {convertPrice(course.price)}
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {course.offer && (
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-xs font-semibold mt-2"
//                     style={{ color: "#f97316" }}
//                   >
//                    {course.offer}
//                   </motion.p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Modern CTA Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => handleEnrollClick(course.route)}
//             disabled={course.isComingSoon}
 
//             className="relative mt-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group/btn"
//             style={{
//               background: `linear-gradient(135deg, #f97316, #ea580c)`,
//               color: "#fff",
//               boxShadow: "0 4px 15px rgba(249,115,22,0.3)",
//             }}
//           >
//             {/* Animated gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            
//             <span className="relative z-10 flex items-center justify-center gap-2 text-[15px]">
//               ENROLL NOW
//               <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
//             </span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CourseCard;


// ------------------------------------new design ----------------------------------------------------


"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, Clock3 } from "lucide-react";

const CourseCard = ({ course, convertPrice, handleEnrollClick }) => {
  if (!course.userCountry) return null;

  const isComingSoon = course.isComingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Decorative corner brackets */}
      <div className="absolute -top-2 -left-2 w-10 sm:w-12 h-10 sm:h-12 border-t-2 border-l-2 border-[#2ba88c]/40 group-hover:border-[#2ba88c] transition-colors duration-500 pointer-events-none z-[2] rounded-tl-2xl" />
      <div className="absolute -bottom-2 -right-2 w-10 sm:w-12 h-10 sm:h-12 border-b-2 border-r-2 border-[#2ba88c]/40 group-hover:border-[#2ba88c] transition-colors duration-500 pointer-events-none z-[2] rounded-br-2xl" />

      {/* Main Card */}
      <div
        className={`relative h-full rounded-2xl bg-white border border-[#0a0a0a]/8 shadow-[0_2px_8px_rgba(10,10,10,0.04)] group-hover:shadow-[0_20px_50px_rgba(10,10,10,0.1)] group-hover:border-[#0a0a0a]/15 transition-all duration-500 overflow-hidden ${
          isComingSoon ? "" : ""
        }`}
      >
        {/* Hover accent wash */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#2ba88c] opacity-[0.05] blur-[80px] rounded-full" />
        </div>

        {/* Coming Soon pill (top-right) */}
        {isComingSoon && (
          <div className="absolute top-4 right-4 z-[3] flex items-center gap-2 bg-[#0a0a0a] px-3 py-1.5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2ba88c] animate-pulse" />
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#2ba88c] font-bold">
              Soon
            </span>
          </div>
        )}

        {/* Content */}
        <div className="relative p-5 sm:p-6 md:p-7 h-full flex flex-col">
          {/* Top Row: Number + Icon */}
          <div className="flex items-start justify-between mb-6 sm:mb-7">
            <div>
              <div className="text-[2rem] sm:text-[2.25rem] font-extrabold leading-none text-[#2ba88c] mb-2 tracking-tight">
                {course.number}
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="h-[1px] w-5 bg-[#0a0a0a]/25" />
                <span className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.22em] text-[#0a0a0a]/55 font-bold">
                  {course.tag}
                </span>
              </div>
            </div>

            {/* Icon */}
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#f5f5f0] border border-[#0a0a0a]/8 flex items-center justify-center p-2.5 group-hover:border-[#2ba88c]/30 group-hover:bg-[#2ba88c]/8 transition-all duration-500">
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(365%) hue-rotate(118deg) brightness(92%) contrast(88%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Badge (if not coming soon) */}
          {course.badge && !isComingSoon && (
            <div className="mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.62rem] uppercase tracking-[0.15em] font-bold ${
                  course.badge === "Best Seller"
                    ? "bg-[#2ba88c]/10 text-[#2ba88c] border border-[#2ba88c]/20"
                    : "bg-[#c88f3a]/10 text-[#c88f3a] border border-[#c88f3a]/20"
                }`}
              >
                <div
                  className={`w-1 h-1 rounded-full ${
                    course.badge === "Best Seller"
                      ? "bg-[#2ba88c]"
                      : "bg-[#c88f3a]"
                  }`}
                />
                {course.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] font-extrabold leading-[1.15] tracking-tight text-[#0a0a0a] mb-4 sm:mb-5">
            {course.title}
          </h3>

          {/* Meta Stats (duration + enrolled) */}
          <div className="flex items-center gap-4 sm:gap-5 pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-[#0a0a0a]/8">
            <div className="flex items-center gap-2">
              <Clock3 size={13} className="text-[#2ba88c]" strokeWidth={2.5} />
              <span className="text-[0.75rem] sm:text-[0.8rem] text-[#0a0a0a]/75 font-semibold">
                {course.duration}
              </span>
            </div>
            <div className="w-[1px] h-3 bg-[#0a0a0a]/15" />
            <div className="flex items-center gap-2">
              <Users size={13} className="text-[#2ba88c]" strokeWidth={2.5} />
              <span className="text-[0.75rem] sm:text-[0.8rem] text-[#0a0a0a]/75 font-semibold">
                {course.enrolled} Enrolled
              </span>
            </div>
          </div>

          {/* Tech Stack pills */}
          {course.stack && (
            <div className="mb-5 sm:mb-6">
              <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/45 font-bold mb-2.5">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {course.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[0.68rem] sm:text-[0.72rem] font-semibold text-[#0a0a0a]/75 bg-[#f5f5f0] border border-[#0a0a0a]/8 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Details list */}
          <ul className="space-y-2 mb-5 sm:mb-6 flex-1">
            {course.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[0.8rem] sm:text-[0.85rem] text-[#0a0a0a]/65 font-normal leading-relaxed"
              >
                <div className="w-1 h-1 rounded-full bg-[#2ba88c] mt-2 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Price Section */}
          <div className="mb-5 sm:mb-6 pt-5 border-t border-[#0a0a0a]/8">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#0a0a0a]/45 font-bold mb-1.5">
                  Starting at
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[1.5rem] sm:text-[1.75rem] font-extrabold text-[#0a0a0a] leading-none tracking-tight">
                    {convertPrice(course.emiPrice)}
                  </span>
                  <span className="text-[0.75rem] text-[#0a0a0a]/50 font-medium">
                    /mo
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#0a0a0a]/40 font-bold">
                  EMI Available
                </div>
                <div className="text-[0.7rem] text-[#2ba88c] font-semibold mt-1">
                  No cost option
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => !isComingSoon && handleEnrollClick(course.route)}
            disabled={isComingSoon}
            className={`group/btn relative w-full rounded-full overflow-hidden transition-all duration-300 ${
              isComingSoon
                ? "bg-[#f5f5f0] border border-[#0a0a0a]/10 cursor-not-allowed"
                : "bg-[#0a0a0a] hover:scale-[1.02]"
            }`}
          >
            <div className="relative z-10 flex items-center justify-center gap-2.5 py-3.5 px-6">
              <span
                className={`text-[0.8rem] sm:text-[0.85rem] font-bold tracking-[0.1em] uppercase ${
                  isComingSoon ? "text-[#0a0a0a]/40" : "text-white"
                }`}
              >
                {isComingSoon ? "Join Waitlist" : "View Program"}
              </span>
              {!isComingSoon && (
                <ArrowUpRight
                  size={16}
                  className="text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              )}
            </div>
            {!isComingSoon && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#2ba88c] to-[#3cc4a4] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;