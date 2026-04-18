// "use client";

// import React, { useState, useEffect } from "react";
// import { CheckCircle } from "lucide-react";
// import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";

// const BatchDetails = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [openForm, setOpenForm] = useState(false);
//   const showForm = true;

//   const devopsLP =
//     "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/cas44.png";

//   useEffect(() => {
//     setIsVisible(true);
//     return () => setIsVisible(false);
//   }, []);

//   const handleOpenForm = () => {
//     if (showForm) setOpenForm(true);
//   };

//   const weekendBatch = {
//     title: "Weekday Batch",
//     tag: "Popular",
//     items: [
//       { label: "Schedule", value: "Mon - Fri" },
//       { label: "Timing", value: "07:00 PM - 09:00 AM" },
//       { label: "Batch Size", value: "32 Students" },
//       { label: "Start Date", value: "13th April" },
//     ],
//     perfectFor: [
//       "Fast-paced learner",
//       "Dedicated Learners",
//       "Fast-track Career Change",
//     ],
//     theme: "blue",
//   };

//   const weekdayBatch = {
//     title: "Weekend Batch",
//     tag: "Intensive",
//     items: [
//       { label: "Schedule", value: "Sat & Sun" },
//       { label: "Timing", value: "8:00 PM - 11:00 PM" },
//       { label: "Batch Size", value: "25 Students" },
//       { label: "Start Date", value: "Yet To Come" },
//     ],
//     perfectFor: [
//       "Working Professionals",
//       "Career Switchers",
//       "Students with Part-time Jobs",
//     ],
//     theme: "green",
//   };

//   const BatchCard = ({ batchData }) => {
//     return (
//       <div
//         className={`flex flex-col justify-between w-full p-6 rounded-xl border shadow-md bg-[linear-gradient(135deg,#f8faff,#f0f5ff)] ${
//           batchData.theme === "blue"
//             ? "bg-blue-50"
//             : "bg-green-50"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2
//             className={`text-lg font-bold ${
//               batchData.theme === "blue"
//                 ? "text-blue-700"
//                 : "text-orange-500"
//             }`}
//           >
//             {batchData.title}
//           </h2>
//           <span
//             className={`px-3 py-1 text-xs font-semibold rounded-full ${
//               batchData.theme === "blue"
//                 ? "bg-blue-100 text-blue-800"
//                 : "bg-orange-500 text-white"
//             }`}
//           >
//             {batchData.tag}
//           </span>
//         </div>

//         {/* Details */}
//         <div className="flex flex-col gap-6 bg-white p-4 rounded-lg border shadow-sm">
//           {batchData.items.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border border-dotted border-[#004963] rounded-xl p-4"
//             >
//               <span className="text-gray-600 font-medium">
//                 {item.label}
//               </span>
//               <span className="text-sm font-semibold text-gray-800">
//                 {item.value}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Perfect For */}
//         <div className="mt-8">
//           <h3
//             className={`text-md font-bold mb-3 ${
//               batchData.theme === "blue"
//                 ? "text-blue-700"
//                 : "text-orange-500"
//             }`}
//           >
//             Perfect For:
//           </h3>

//           <ul className="flex flex-col gap-2">
//             {batchData.perfectFor.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-center gap-2 text-gray-600"
//               >
//                 <CheckCircle
//                   className={`w-5 h-5 ${
//                     batchData.theme === "blue"
//                       ? "text-blue-500"
//                       : "text-orange-500"
//                   }`}
//                 />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA */}
//         <div className="mt-8 text-center">
//           <button
//             onClick={handleOpenForm}
//             className={`px-6 py-2 rounded-full font-semibold text-white shadow-md transition hover:-translate-y-1 ${
//               batchData.theme === "blue"
//                 ? "bg-gradient-to-r from-blue-500 to-blue-800"
//                 : "bg-gradient-to-r from-orange-500 to-orange-700"
//             }`}
//           >
//             Enroll Now
//           </button>
//         </div>

//         {openForm && <EnrollmentForm onClose={() => setOpenForm(false)} />}
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Title */}
//       <h2 className="text-center text-[2.2rem] font-bold mt-8 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent relative inline-block">
//         Batch Details & Schedule
//         <span className="absolute left-[32%] bottom-0 w-[140px] h-[3px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
//       </h2>

//       {/* Cards */}
//       <div className="max-w-[1200px] mx-auto p-8 flex flex-col lg:flex-row gap-16">
//         <BatchCard batchData={weekendBatch} />
//         <BatchCard batchData={weekdayBatch} />
//       </div>

//       {/* Learning Path */}
//       <h2 className="text-center text-[2.2rem] font-bold mt-8 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent relative inline-block">
//         Learning Path
//         <span className="absolute left-[32%] bottom-0 w-[100px] h-[3px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
//       </h2>

//       <div className="max-w-[1200px] mx-auto mt-[-3rem] mb-[-1rem]">
//         <img
//           src={devopsLP}
//           alt="devops-learning-path"
//           className="w-full max-w-[1200px] mx-auto"
//         />
//       </div>
//     </>
//   );
// };

// export default BatchDetails;




"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Calendar, Clock, Users, Sparkles, ArrowRight, Star, Zap, Shield } from "lucide-react";
import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const BatchDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openForm, setOpenForm] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const showForm = true;

  const devopsLP = "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/cas44.png";

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleOpenForm = (batchType) => {
    if (showForm) setOpenForm(batchType);
  };

  const weekendBatch = {
    id: "weekday",
    title: "Weekday Batch",
    tag: "Popular",
    items: [
      { label: "Schedule", value: "Mon - Fri", icon: Calendar },
      { label: "Timing", value: "07:00 PM - 09:00 AM", icon: Clock },
      { label: "Batch Size", value: "32 Students", icon: Users },
      { label: "Start Date", value: "13th April", icon: Sparkles },
    ],
    perfectFor: [
      "Fast-paced learner",
      "Dedicated Learners",
      "Fast-track Career Change",
    ],
    features: [
      "Live Interactive Sessions",
      "24/7 Lab Access",
      "Industry Projects",
      "Placement Assistance"
    ],
    theme: "blue",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 via-white to-cyan-50",
    borderGradient: "from-blue-200 to-cyan-200"
  };

  const weekdayBatch = {
    id: "weekend",
    title: "Weekend Batch",
    tag: "Intensive",
    items: [
      { label: "Schedule", value: "Sat & Sun", icon: Calendar },
      { label: "Timing", value: "8:00 PM - 11:00 PM", icon: Clock },
      { label: "Batch Size", value: "25 Students", icon: Users },
      { label: "Start Date", value: "Yet To Come", icon: Sparkles },
    ],
    perfectFor: [
      "Working Professionals",
      "Career Switchers",
      "Students with Part-time Jobs",
    ],
    features: [
      "Weekend Live Classes",
      "Recorded Sessions",
      "Flexible Deadlines",
      "1-on-1 Mentoring"
    ],
    theme: "orange",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 via-white to-red-50",
    borderGradient: "from-orange-200 to-red-200"
  };

  const BatchCard = ({ batchData, index, isHovered, onHover, onOpenForm }) => {

    
    return (
      <div
        className={`relative group transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } ${isHovered === batchData.id ? "scale-105" : "scale-100"}`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => onHover(batchData.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Animated Background */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${batchData.borderGradient} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
        
        {/* Main Card */}
        <div className={`relative bg-gradient-to-br ${batchData.bgGradient} backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100`}>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"></div>
          
          {/* Header Section */}
          <div className="relative p-8 pb-0">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${
                  batchData.theme === "blue" 
                    ? "from-blue-600 to-cyan-600" 
                    : "from-orange-500 to-red-600"
                } bg-clip-text text-transparent`}>
                  {batchData.title}
                </h2>
                <div className="flex items-center gap-2">
                  <div className={`h-1 w-12 bg-gradient-to-r ${
                    batchData.theme === "blue" ? "from-blue-600 to-cyan-600" : "from-orange-500 to-red-600"
                  } rounded-full`}></div>
                  <div className={`h-1 w-6 bg-gradient-to-r ${
                    batchData.theme === "blue" ? "from-blue-600 to-cyan-600" : "from-orange-500 to-red-600"
                  } rounded-full opacity-50`}></div>
                </div>
              </div>
              
              <div className={`relative px-4 py-2 rounded-full bg-gradient-to-r ${
                batchData.theme === "blue" 
                  ? "from-blue-500 to-cyan-500" 
                  : "from-orange-500 to-red-500"
              } shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300`}>
                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse"></div>
                <div className="relative flex items-center gap-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {batchData.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-8 pt-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {batchData.items.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative group/item p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${
                        batchData.theme === "blue" 
                          ? "from-blue-100 to-cyan-100" 
                          : "from-orange-100 to-red-100"
                      }`}>
                        <ItemIcon className={`w-4 h-4 ${
                          batchData.theme === "blue" ? "text-blue-600" : "text-orange-600"
                        }`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-gray-800">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Perfect For Section */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
              
                Perfect For:
              </h3>
              <div className="flex flex-wrap gap-3">
                {batchData.perfectFor.map((item, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full bg-white border ${
                      batchData.theme === "blue" 
                        ? "border-blue-200 text-blue-700" 
                        : "border-orange-200 text-orange-700"
                    } shadow-sm`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-4">What You Get:</h3>
              <div className="grid grid-cols-2 gap-2">
                {batchData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 ${
                      batchData.theme === "blue" ? "text-blue-500" : "text-orange-500"
                    }`} />
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenForm(batchData.id)}
              className={`relative w-full group/btn overflow-hidden rounded-2xl bg-gradient-to-r ${
                batchData.gradient
              } p-[2px] shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <div className="relative px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover/btn:bg-white/20">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-white font-semibold">Enroll Now</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {openForm === batchData.id && <EnrollmentForm onClose={() => onOpenForm(null)} />}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
            Batch Details & Schedule
          </h2>
           */}

          <SectionHeading title="Batch Details & Schedule" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the batch that fits your schedule and learning style. Both options come with comprehensive curriculum and expert mentorship.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          <BatchCard 
            batchData={weekendBatch} 
            index={0}
            isHovered={hoveredCard}
            onHover={setHoveredCard}
            onOpenForm={handleOpenForm}
          />
          <BatchCard 
            batchData={weekdayBatch} 
            index={1}
            isHovered={hoveredCard}
            onHover={setHoveredCard}
            onOpenForm={handleOpenForm}
          />
        </div>

        {/* Learning Path Section */}
        <div className="relative">
          <div className="text-center">
           
               {/* <h2 className="relative text-center text-[2.2rem] font-bold mb-[-12] bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
 Learning Path
  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
</h2>*/}

  <SectionHeading title="Learning Path" />
          </div> 

         

          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img
              src={devopsLP}
              alt="devops-learning-path"
              className="w-full transform group-hover:scale-105 transition-transform duration-700 mt-0"
            />
            <div className="absolute inset-0 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default BatchDetails;