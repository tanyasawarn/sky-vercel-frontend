"use client";

import { CheckCircle, TrendingUp, Crown, Clock, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const COLORS = {
  primary: "#0EA5E9",
  primaryLight: "#7DD3FC",
  primarySoft: "#E0F2FE",
  primaryBg: "#F0F9FF",
  dark: "#0F172A",
  slate: "#475569",
  slateLight: "#94A3B8",
  border: "#E2E8F0",
  white: "#FFFFFF",
};

const CourseCard = ({ course, convertPrice, handleEnrollClick }) => {
  const isBestSeller = course.badge === "Best Seller";
  const isTrending = course.badge === "Trending";

  if (!course.userCountry) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#0EA5E9]/0 via-[#0EA5E9]/30 to-[#0EA5E9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Main Card */}
      <div className="relative h-full rounded-2xl backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
       {course.isComingSoon && (
  <div className="
    absolute inset-0 bg-black/90 flex items-center justify-center 
    opacity-100 
    md:opacity-0 md:group-hover:opacity-100 
    transition duration-300 z-20
  ">
    <p className="text-orange-500 text-xl md:text-2xl font-bold">
      Coming Soon
    </p>
  </div>
)}
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0EA5E9] to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0EA5E9] to-transparent rounded-full blur-2xl" />
        </div>

        {/* Content Container */}
        <div className="relative p-6 h-full flex flex-col" style={{ background: COLORS.white }}>
          
          {/* Modern Badge */}
          {course.badge && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 right-4 z-10"
            >
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
                  color: COLORS.white,
                }}
              >
                {isBestSeller}
                {isTrending }
                {!isBestSeller && !isTrending && <Clock className="w-3 h-3" />}
                <span>{course.badge}</span>
              </div>
            </motion.div>
          )}

          {/* Modern Icon Container */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="flex justify-center mb-6"
          >
            <div
              className="relative w-24 h-24 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${COLORS.primaryBg}, ${COLORS.white})`,
                border: `2px solid ${COLORS.primarySoft}`,
              }}
            >
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#0EA5E9]/20 animate-pulse" />
              <img src={course.icon} className="w-18 h-18 object-contain relative z-10" alt={course.title} />
            </div>
          </motion.div>

          {/* Title with modern styling */}
          <h3
            className="text-2xl font-bold text-center mb-2 leading-tight bg-gradient-to-r from-[#0F172A] to-[#475569] bg-clip-text text-transparent"
          >
            {course.title}
          </h3>

        

          {/* Modern Details List */}
          <ul className="space-y-3 flex-1">
            {course.details.map((detail, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start group/item"
              >
                <div className="relative">
                  <CheckCircle
                    className="w-4 h-4 mr-3 mt-0.5 transition-transform group-hover/item:scale-110"
                    style={{ color: COLORS.primary }}
                  />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: COLORS.slate }}
                >
                  {detail}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Modern Pricing Section */}
          <div className="mt-6 pt-5">
            <div className="relative">
              {/* Glass morphism background */}
              <div 
                className="absolute inset-0 rounded-xl opacity-50"
                style={{ background: COLORS.primaryBg }}
              />
              
              <div className="relative p-4 text-center rounded-xl">
                {course.isEMI && course.userCountry === "IN" ? (
                  <>
                    <p className="text-s uppercase tracking-wider font-semibold" style={{ color: COLORS.slateLight }}>
                      Starting at
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mt-1">
                      <span className="text-4xl font-black" style={{ color: COLORS.primary }}>
                        {convertPrice(course.emiPrice)}
                      </span>
                      <span className="text-sm font-medium" style={{ color: COLORS.slateLight }}>/month</span>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: COLORS.slateLight }}>
                      One-time payment
                    </p>
                    <div className="mt-1">
                      <span className="text-3xl font-black" style={{ color: COLORS.primary }}>
                        {convertPrice(course.price)}
                      </span>
                    </div>
                  </>
                )}

                {course.offer && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-semibold mt-2"
                    style={{ color: "#f97316" }}
                  >
                   {course.offer}
                  </motion.p>
                )}
              </div>
            </div>
          </div>

          {/* Modern CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleEnrollClick(course.route)}
            disabled={course.isComingSoon}
 
            className="relative mt-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group/btn"
            style={{
              background: `linear-gradient(135deg, #f97316, #ea580c)`,
              color: "#fff",
              boxShadow: "0 4px 15px rgba(249,115,22,0.3)",
            }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            
            <span className="relative z-10 flex items-center justify-center gap-2 text-[15px]">
              ENROLL NOW
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;