"use client";

import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCard from "./homepagecoursecard";
import { UserContext } from "../../../context/usercontext";
import { motion } from "framer-motion";

const Homepagecourse = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { userCountry, currency, exchangeRate } = useContext(UserContext);
  const [mounted, setMounted] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  

  useEffect(() => {
    setIsVisible(true);
  }, []);


   useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // ✅ AFTER all hooks
  if (!mounted) return null;

  const convertPrice = (priceInINR, courseTitle) => {
    if (userCountry === "IN") {
      return `INR${priceInINR.toLocaleString()}`;
    }

    const fixedUSDPrices = {
      "DevOps With AI Masters Program": 650,
      "Gen AI With ML Masters Program": 990,
      "MLOps With Agentic AI Masters Program": 880,
      "Data Science & Machine Learning Masters Program": 850,
    };

    return `$${fixedUSDPrices[courseTitle] || "N/A"}`;
  };

  const courseData = [
    {
      title: "DevOps With AI Masters Program",
      icon: "/devopsiconHP.svg",
      badge: "Best Seller",
      isEMI: true,
      emiPrice: 5333.33,
      price: 64000,
      offer: "* Limited Period offer",
      details: [
        "3/6 Months",
        "5K+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/devops-with-ai-masters-program",
      gradient: "from-blue-500 to-cyan-400",
      accentColor: "#00bbff",
    },
    {
      title: "Gen AI With ML Masters Program",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Trending",
      isEMI: true,
      emiPrice: 5666.66,
      price: 68000,
      offer: "* Limited Period offer",
      details: [
        "6 Months",
        "1k+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/genai-with-ml-masters-program",
      gradient: "from-purple-500 to-pink-400",
      accentColor: "#a855f7",
    },
    {
      title: "MLOps With Agentic AI Masters Program",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Best Seller",
      
  isComingSoon: true,
      isEMI: true,
      emiPrice: 6700,
      price: 80000,
      offer: "* Limited Period offer",
      details: [
        "6 Months",
        "300+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/mlops-masters-program",
      gradient: "from-orange-500 to-red-400",
      accentColor: "#f97316",
    },
  ];

 




// const handleEnrollClick = (course) => {
//   if (course?.isComingSoon) {
//   //  alert(" This course is coming soon!");
//     return;  
//   }

//   if (course?.route) {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     router.push(course.route);
//   }
// };


const handleEnrollClick = (course) => {
  if (course?.isComingSoon) {
    setShowComingSoon(true);

    // auto close after 2 sec (optional)
    setTimeout(() => setShowComingSoon(false), 2000);
    return;
  }

  if (course?.route) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(course.route);
  }
};

  return (
    <div className="relative py-16 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Header Section */}
 
   <h2
        className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
      after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
      >
         <em style={{ fontStyle: "italic"}}>
Find The Right Course For Your Goals         </em>
      </h2>
 

      {/* Grid Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courseData.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
           <CourseCard
  course={{ ...course, userCountry }}
  convertPrice={(price) => convertPrice(price, course.title)}
  handleEnrollClick={() => handleEnrollClick(course)}
/>
          </motion.div>
        ))}
      </div>
      {showComingSoon && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
    <h1 className="text-orange-500 text-4xl md:text-6xl font-bold animate-pulse">
      Coming Soon
    </h1>
  </div>
)}
    </div>
  );
};

export default Homepagecourse;