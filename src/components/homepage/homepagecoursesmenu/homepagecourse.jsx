// "use client";

// import { useState, useContext, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import CourseCard from "./homepagecoursecard";
// import { UserContext } from "../../../context/usercontext";
// import { motion } from "framer-motion";

// const Homepagecourse = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [isVisible, setIsVisible] = useState(false);
//   const router = useRouter();
//   const { userCountry, currency, exchangeRate } = useContext(UserContext);
//   const [mounted, setMounted] = useState(false);
//   const [showComingSoon, setShowComingSoon] = useState(false);

  

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);


//    useEffect(() => {
//     setMounted(true);
//     setIsVisible(true);
//   }, []);

//   // ✅ AFTER all hooks
//   if (!mounted) return null;

//   const convertPrice = (priceInINR, courseTitle) => {
//     if (userCountry === "IN") {
//       return `INR${priceInINR.toLocaleString()}`;
//     }

//     const fixedUSDPrices = {
//       "DevOps With AI Masters Program": 650,
//       "Gen AI With ML Masters Program": 990,
//       "MLOps With Agentic AI Masters Program": 880,
//       "Data Science & Machine Learning Masters Program": 850,
//     };

//     return `$${fixedUSDPrices[courseTitle] || "N/A"}`;
//   };

//   const courseData = [
//     {
//       title: "DevOps With AI Masters Program",
//       icon: "/devopsiconHP.svg",
//       badge: "Best Seller",
//       isEMI: true,
//       emiPrice: 5333.33,
//       price: 64000,
//       offer: "* Limited Period offer",
//       details: [
//         "3/6 Months",
//         "5K+ Enrolled",
//         "Live Classes / 100% Instructor-led",
//       ],
//       route: "/courses/devops-with-ai-masters-program",
//       gradient: "from-blue-500 to-cyan-400",
//       accentColor: "#00bbff",
//     },
//     {
//       title: "Gen AI With ML Masters Program",
//       icon: "/MLOpsCourseIcon.svg",
//       badge: "Trending",
//       isEMI: true,
//       emiPrice: 5666.66,
//       price: 68000,
//       offer: "* Limited Period offer",
//       details: [
//         "6 Months",
//         "1k+ Enrolled",
//         "Live Classes / 100% Instructor-led",
//       ],
//       route: "/courses/genai-with-ml-masters-program",
//       gradient: "from-purple-500 to-pink-400",
//       accentColor: "#a855f7",
//     },
//     {
//       title: "MLOps With Agentic AI Masters Program",
//       icon: "/MLOpsCourseIcon.svg",
//       badge: "Best Seller",
      
//   isComingSoon: true,
//       isEMI: true,
//       emiPrice: 6700,
//       price: 80000,
//       offer: "* Limited Period offer",
//       details: [
//         "6 Months",
//         "300+ Enrolled",
//         "Live Classes / 100% Instructor-led",
//       ],
//       route: "/courses/mlops-masters-program",
//       gradient: "from-orange-500 to-red-400",
//       accentColor: "#f97316",
//     },
//   ];

 




// // const handleEnrollClick = (course) => {
// //   if (course?.isComingSoon) {
// //   //  alert(" This course is coming soon!");
// //     return;  
// //   }

// //   if (course?.route) {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //     router.push(course.route);
// //   }
// // };


// const handleEnrollClick = (course) => {
//   if (course?.isComingSoon) {
//     setShowComingSoon(true);

//     // auto close after 2 sec (optional)
//     setTimeout(() => setShowComingSoon(false), 2000);
//     return;
//   }

//   if (course?.route) {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     router.push(course.route);
//   }
// };

//   return (
//     <div className="relative py-16 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
//       </div>

//       {/* Header Section */}
 
//    <h2
//         className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
//       after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
//       >
//          <em style={{ fontStyle: "italic"}}>
// Find The Right Course For Your Goals         </em>
//       </h2>
 

//       {/* Grid Container */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {courseData.map((course, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//            <CourseCard
//   course={{ ...course, userCountry }}
//   convertPrice={(price) => convertPrice(price, course.title)}
//   handleEnrollClick={() => handleEnrollClick(course)}
// />
//           </motion.div>
//         ))}
//       </div>
//       {showComingSoon && (
//   <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
//     <h1 className="text-orange-500 text-4xl md:text-6xl font-bold animate-pulse">
//       Coming Soon
//     </h1>
//   </div>
// )}
//     </div>
//   );
// };

// export default Homepagecourse;







// --------------------------------------------new design--------------------------------------------------------------



"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../context/usercontext";

const Homepagecourse = () => {
  const router = useRouter();
  const { userCountry } = useContext(UserContext);

  const [showComingSoon, setShowComingSoon] = useState(false);

  const courseData = [
    {
      title: "DevOps With AI Masters Program",
      icon: "/devopsiconHP.svg",
      badge: "Best Seller",
      emiPrice: 5333.33,
      details: [
        "3/6 Months",
        "5K+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      title: "Gen AI With ML Masters Program",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Trending",
      emiPrice: 5666.66,
      details: [
        "6 Months",
        "1k+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/genai-with-ml-masters-program",
    },
    {
      title: "MLOps With Agentic AI Masters Program",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Best Seller",
      emiPrice: 6700,
      isComingSoon: true,
      details: [
        "6 Months",
        "300+ Enrolled",
        "Live Classes / 100% Instructor-led",
      ],
      route: "/courses/mlops-masters-program",
    },
  ];

  const handleClick = (course) => {
    if (course.isComingSoon) {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
      return;
    }
    router.push(course.route);
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
     
            <span className="text-cyan-600">  Find the right course for your goals</span>
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Curated programs designed by industry experts to accelerate your tech career
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {courseData.map((course, index) => (
            <div
              key={index}
              // className="h-full flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 md:p-7 
              // hover:shadow-xl transition-all duration-300 hover:-translate-y-1"

              className="h-full flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 md:p-7 
  hover:border-cyan-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* TOP ROW (Badge + Icon aligned) */}
              <div className="flex items-center justify-between mb-5">
                {course.badge && (
                  <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">
                    {course.badge}
                  </span>
                )}

                <div className="w-18 h-18 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <img src={course.icon} alt="" className="w-full h-auto" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-snug">
                {course.title}
              </h3>

              {/* DETAILS */}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {course.details.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* PRICE */}
              <div className="mt-6">
                <p className="text-xs text-gray-400">Starting at</p>
                <p className="text-2xl font-semibold text-gray-900">
                  INR {course.emiPrice.toLocaleString()}
                  <span className="text-sm text-gray-400"> /month</span>
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={() => handleClick(course)}
                className={`mt-6 w-full py-3 rounded-lg text-sm font-medium transition
                  ${
                    course.isComingSoon
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-cyan-600 text-white hover:bg-cyan-700"
                  }`}
              >
                {course.isComingSoon ? "Coming Soon" : "View Program"}
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* COMING SOON POPUP */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Coming Soon 🚀
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              This course will be available shortly.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Homepagecourse;