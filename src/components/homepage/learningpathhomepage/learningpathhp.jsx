 "use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LearningPath = () => {
  const [isVisible, setIsVisible] = useState(false);
   const [mounted, setMounted] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);


     useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // ✅ AFTER all hooks
  if (!mounted) return null;

  return (
    <section className="relative py-12 md:py-1 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      
      {/* Background glow (matches your course + feature sections) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

    <h2
        className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
      after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
      >
         <em style={{ fontStyle: "italic"}}>
            Learning Path
         </em>
      </h2>
 
      {/* Image Section */}
      <div className="relative w-full max-w-[1400px] h-[380px] sm:h-[420px] md:h-[550px] mx-auto -mt-[60px] md:-mt-[80px]">
        
        {/* Desktop Image */}
        <Image
          src="/HOMEPAGELEARNINGPATH4.png"
          alt="Learning Path Desktop"
          fill
          className="object-contain hidden sm:block"
          priority
        />

        {/* Mobile Image */}
        <Image
          src="/LearningpathVertical1.png"
          alt="Learning Path Mobile"
          fill
          className="object-contain block sm:hidden"
          priority
        />
      </div>

    </section>
  );
};

export default LearningPath;