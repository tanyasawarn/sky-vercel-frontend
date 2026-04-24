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
import CourseCard from "./homepagecoursecard";
import CallbackForm from "@/components/common/callbackform/callbackform";

const Homepagecourse = () => {
  const router = useRouter();
  const { userCountry } = useContext(UserContext);

  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  const courseData = [
    {
      number: "01",
      title: "DevOps With AI Masters Program",
      tag: "DevOps & Cloud",
      icon: "/devopsiconHP.svg",
      badge: "Best Seller",
      emiPrice: 5333.33,
      isEMI: true,
      userCountry,
      duration: "3/6 Months",
      enrolled: "5K+",
      details: [
        "3/6 Months intensive curriculum",
        "5K+ learners enrolled",
        "Live classes · 100% instructor-led",
      ],
      stack: ["AWS", "Docker", "K8s", "Terraform", "Jenkins"],
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      number: "02",
      title: "GenAI With ML Masters Program",
      tag: "Machine Learning",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Trending",
      emiPrice: 5666.66,
      isEMI: true,
      userCountry,
      duration: "6 Months",
      enrolled: "1K+",
      details: [
        "6 Months deep-dive program",
        "1K+ learners enrolled",
        "Live classes · 100% instructor-led",
      ],
      stack: ["PyTorch", "LangChain", "RAG", "LLMs", "Vector DB"],
      route: "/courses/genai-with-ml-masters-program",
    },
    {
      number: "03",
      title: "MLOps With Agentic AI Masters Program",
      tag: "MLOps & Agents",
      icon: "/MLOpsCourseIcon.svg",
      badge: "Coming Soon",
      emiPrice: 6700,
      isEMI: true,
      userCountry,
      isComingSoon: true,
      duration: "6 Months",
      enrolled: "300+",
      details: [
        "6 Months production-grade training",
        "300+ early-access signups",
        "Live classes · 100% instructor-led",
      ],
      stack: ["MLflow", "Kubeflow", "Agents", "Ray", "Weights & Biases"],
      route: "/courses/mlops-masters-program",
    },
  ];

const handleClick = (course) => {
  if (course.isComingSoon) {
    setShowCallback(true);  
    return;
  }
  router.push(course.route);
};

  const convertPrice = (price) => `INR ${price.toLocaleString()}`;

  return (
    <section
      className="relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden py-16 sm:py-20 md:py-28"
      style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      >
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Soft ambient tint */}
      <div className="absolute top-1/4 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#ff6b35] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#ff6b35] opacity-[0.05] blur-[110px] pointer-events-none" />

      <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
            {/* Left: Title block */}
            <div className="col-span-12 lg:col-span-7">
              {/* Section tag */}
              <div className="inline-flex items-center gap-3 mb-5 sm:mb-7">
                <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
                <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
                  Our Programs
                </span>
              </div>

              <h2
                className="text-[clamp(1.85rem,4.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4 sm:mb-5 text-[#0a0a0a]"
                style={{ fontWeight: 800 }}
              >
                Find the right course
                <br />
                <span className="text-[#0a0a0a]/35">for your goals.</span>
              </h2>

              <p className="max-w-[520px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-[#0a0a0a]/65 leading-[1.65] font-light">
              Expert-led master’s programs designed by industry professionals to take you from fundamentals to production-level expertise. Learn through live mentorship, hands-on projects, and dedicated placement support that helps you build real career-ready skills.
              </p>
            </div>

            {/* Right: Meta/stats */}
            <div className="col-span-12 lg:col-span-5 flex lg:justify-end">
              <div className="flex gap-6 sm:gap-10 pt-2">
                <div>
                  <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#ff6b35]">
                    03
                  </div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
                    Programs
                  </div>
                </div>
                <div>
                  <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#0a0a0a]">
                    6K+
                  </div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
                    Enrolled
                  </div>
                </div>
                <div>
                  <div className="text-[2rem] sm:text-[2.5rem] font-extrabold leading-none text-[#0a0a0a]">
                    93%
                  </div>
                  <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[#0a0a0a]/50 font-semibold mt-1.5 sm:mt-2">
                    Placed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div className="mt-10 sm:mt-14 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/20 via-[#0a0a0a]/5 to-transparent" />
        </div>

        {/* COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {courseData.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              convertPrice={convertPrice}
              handleEnrollClick={() => handleClick(course)}
            />
          ))}
        </div>

        {/* Footer CTA strip */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#0a0a0a]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <div className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.25em] text-[#0a0a0a]/50 font-bold mb-2">
              Not sure which path?
            </div>
            <p className="text-[0.95rem] sm:text-[1rem] text-[#0a0a0a]/80 font-medium">
              Talk to a program advisor — free 15-minute career consultation.
            </p>
          </div>
          <button
           onClick={() => setShowCallback(true)}
            className="group flex items-center gap-3 text-[0.85rem] sm:text-[0.9rem] font-bold text-[#ff6b35] hover:text-[#0a0a0a] transition-colors"
          >
            <span className="tracking-wide">BOOK A CALL</span>
            <div className="w-8 h-8 rounded-full border border-[#ff6b35]/40 flex items-center justify-center group-hover:bg-[#ff6b35] group-hover:border-[#ff6b35] transition-all">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="text-[#ff6b35] group-hover:text-white transition-colors"
              >
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* COMING SOON POPUP */}
      {showComingSoon && (
        <div
          className="fixed inset-0 bg-[#0a0a0a]/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-[fadeInPopup_0.3s_ease-out]"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          <div className="relative bg-white border border-[#0a0a0a]/10 px-8 py-7 rounded-2xl text-center shadow-2xl max-w-sm w-full">
            <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#ff6b35]/60 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#ff6b35]/60 rounded-br-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#ff6b35] font-bold">
                In development
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#0a0a0a] mb-2">
              Coming Soon
            </h3>
            <p className="text-sm text-[#0a0a0a]/55 font-light">
              This program launches shortly. Early-access list opens soon.
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes fadeInPopup {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      {showCallback && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="relative w-full max-w-lg">
      <CallbackForm onClose={() => setShowCallback(false)} />
    </div>
  </div>
)}
    </section>
  );
};

export default Homepagecourse;
