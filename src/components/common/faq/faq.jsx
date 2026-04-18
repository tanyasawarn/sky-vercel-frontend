// "use client";

// import React, { useState } from "react";

// const tabs = [
//   "Training",
//   "Curriculum Relevance",
//   "Career Outcomes",
//   "Certification & Placement Support",
// ];

// const Faq = ({ faqs }) => {
//   const [activeTab, setActiveTab] = useState("Training");
//   const [openIndex, setOpenIndex] = useState(null);
//   const [tabChanging, setTabChanging] = useState(false);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleTabChange = (tab) => {
//     if (tab === activeTab) return;

//     setTabChanging(true);
//     setOpenIndex(null);

//     setTimeout(() => {
//       setActiveTab(tab);
//       setTabChanging(false);
//     }, 300);
//   };

//   return (
//     <div className="relative py-8 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[1200px] mx-auto my-6">

//       <h2 className="text-center text-[#1a365d] text-[2.5rem] font-bold mb-6 relative">
//         Frequently{" "}
//         <span className="bg-gradient-to-r from-[#2196f3] to-[#64b5f6] bg-clip-text text-transparent">
//           Asked Questions
//         </span>
//         <div className="mx-auto mt-2 h-[4px] w-[100px] bg-gradient-to-r from-[#2196f3] to-[#64b5f6] rounded transition-all duration-500"></div>
//       </h2>

//       <div className="max-w-[1000px] mx-auto px-6 py-12 font-sans bg-white/90 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur relative overflow-hidden">

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               className={`relative px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur shadow 
//               ${
//                 activeTab === tab
//                   ? "bg-gradient-to-br from-[#4a90e2] to-[#2196f3] text-white font-semibold shadow-lg -translate-y-[2px]"
//                   : "bg-white/70 text-slate-600 hover:-translate-y-[3px] hover:shadow-xl hover:text-white hover:bg-gradient-to-br hover:from-[#4a90e2] hover:to-[#2196f3]"
//               }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-[3px] bg-gradient-to-r from-[#2196f3] to-[#64b5f6] rounded"></span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Accordion */}
//         <div className="mt-6">
//           <h3 className="text-xl font-bold mb-6 text-slate-800 pl-2 relative inline-block">
//             About {activeTab}
//             <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-6 bg-gradient-to-b from-[#4a90e2] to-[#2196f3] rounded"></span>
//           </h3>

//           <div
//             className={`flex flex-col gap-5 transition-opacity duration-300 ${
//               tabChanging ? "opacity-50" : "opacity-100"
//             }`}
//           >
//             {faqs[activeTab]?.map((item, index) => (
//               <div
//                 key={index}
//                 className={`relative bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 ${
//                   openIndex === index
//                     ? "border-blue-400 shadow-lg -translate-y-[2px]"
//                     : "hover:shadow-md hover:-translate-y-[2px]"
//                 }`}
//               >
//                 {/* Left accent */}
//                 {openIndex === index && (
//                   <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#4a90e2] to-[#2196f3] rounded"></div>
//                 )}

//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex items-center gap-3 text-left p-6 font-semibold text-slate-800"
//                 >
//                   <span className="text-blue-500 font-bold text-lg">
//                     {index + 1}.
//                   </span>

//                   <span className="flex-1">{item.q}</span>

//                   <span
//                     className={`transition-transform duration-300 ${
//                       openIndex === index ? "rotate-180 text-blue-500" : ""
//                     }`}
//                   >
//                     ▼
//                   </span>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-500 ${
//                     openIndex === index ? "max-h-[500px]" : "max-h-0"
//                   }`}
//                 >
//                   <div className="px-6 pb-6 text-slate-600 leading-relaxed">
//                     {item.a}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;




"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../sectionheading/sectionheading";

const tabs = [
  "Training",
  "Curriculum Relevance",
  "Career Outcomes",
  "Certification & Placement Support",
];

const Faq = ({ faqs }) => {
  const [activeTab, setActiveTab] = useState("Training");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1200px] mx-auto py-16 px-4">

      {/* Heading */}
      <SectionHeading title=" Frequently Asked Questions" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setOpenIndex(null);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all
              ${
                activeTab === tab
                  ? "bg-gradient-to-r from-sky-400 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-600 shadow hover:shadow-md"
              }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-5 max-w-[900px] mx-auto">

        <AnimatePresence mode="wait">
          {faqs[activeTab]?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl border transition-all
                  ${
                    isOpen
                      ? "border-blue-400 shadow-xl bg-white"
                      : "border-gray-200 bg-white hover:shadow-md"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex gap-3">
                    <span className="text-blue-500 font-bold">
                      {index + 1}.
                    </span>
                    <span className="font-semibold text-gray-800">
                      {item.q}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-500"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Faq;