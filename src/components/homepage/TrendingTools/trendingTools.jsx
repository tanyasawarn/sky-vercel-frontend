// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const TrendingTools = () => {
//   const router = useRouter();

//   const categories = [
//     {
//       imgSrc: "/devopsiconHP-3460c705.webp",
//       title: "DevOps",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/terraformHPicon.webp",
//       title: "Terraform",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/dockerhomepage.webp",
//       title: "Docker",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/ds&mliconHP.webp",
//       title: "Machine Learning",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//     {
//       imgSrc: "/machinelearninghomepage.webp",
//       title: "Agentic AI",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//     {
//       imgSrc: "/aihomepage.webp",
//       title: "AI",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//   ];

//   const handleCategoryClick = (route) => {
//     router.push(route);
//   };

//   return (
//     <section className="max-w-[1200px] w-full mx-auto w-[90%] px-5 py-5 text-center mt-[-1rem]">
//       {/* Heading */}
//       <h2
//         className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
//       after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
//       >
//          <em style={{ fontStyle: "italic"}}>
//              Discover Top Categories
//          </em>
//       </h2>
  

//       {/* Grid */}
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             onClick={() => handleCategoryClick(category.route)}
//             className="bg-white p-5 rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 text-center cursor-pointer"
//           >
//             <Image
//               src={category.imgSrc}
//               alt={category.title}
//               width={80}
//               height={80}
//               className="object-contain mb-[10px] mx-auto"
//             />
//             <p className="text-[1rem] font-bold text-[#333] whitespace-nowrap">
//               {category.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TrendingTools;



// -----------------------------------new design ------------------------------------------------------------------------



// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const TrendingTools = () => {
//   const router = useRouter();

//   const categories = [
//     {
//       imgSrc: "/devopsiconHP-3460c705.webp",
//       title: "DevOps",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/terraformHPicon.webp",
//       title: "Terraform",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/dockerhomepage.webp",
//       title: "Docker",
//       route: "/courses/devops-with-ai-masters-program",
//     },
//     {
//       imgSrc: "/ds&mliconHP.webp",
//       title: "Machine Learning",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//     {
//       imgSrc: "/machinelearninghomepage.webp",
//       title: "Agentic AI",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//     {
//       imgSrc: "/aihomepage.webp",
//       title: "AI",
//       route: "/courses/genai-with-ml-masters-program",
//     },
//   ];

//   const handleCategoryClick = (route) => {
//     router.push(route);
//   };

//   return (
//     <section className="bg-gray-50 py-16 px-4 md:px-6">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* HEADER */}
//         <div className="mb-10">
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
           
//             <span className="text-cyan-600">Discover Top Categories</span>
//           </h2>

//           <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
//             Explore the most in-demand tools and technologies to accelerate your career in tech.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

//           {categories.map((category, index) => (
//             <div
//               key={index}
//               onClick={() => handleCategoryClick(category.route)}
//               className=" p-4 flex flex-col items-center justify-center cursor-pointer"
//             >
//               {/* ICON */}
//               <div className="w-34 h-auto flex items-center justify-center mb-3">
//                 <Image
//                   src={category.imgSrc}
//                   alt={category.title}
//                   width={62}
//                   height={62}
//                   className="object-contain"
//                 />
//               </div>

//               {/* TITLE */}
//               <p className="text-sm font-medium text-gray-800 text-center">
//                 {category.title}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default TrendingTools;


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TrendingTools = () => {
  const router = useRouter();

  const categories = [
    {
      imgSrc: "/devopsiconHP-3460c705.webp",
      title: "DevOps",
      tag: "Infrastructure",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/terraformHPicon.webp",
      title: "Terraform",
      tag: "IaC",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/dockerhomepage.webp",
      title: "Docker",
      tag: "Containers",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/ds&mliconHP.webp",
      title: "Machine Learning",
      tag: "Models",
      route: "/courses/genai-with-ml-masters-program",
    },
    {
      imgSrc: "/machinelearninghomepage.webp",
      title: "Agentic AI",
      tag: "LLM Agents",
      route: "/courses/genai-with-ml-masters-program",
    },
    {
      imgSrc: "/aihomepage.webp",
      title: "AI",
      tag: "GenAI",
      route: "/courses/genai-with-ml-masters-program",
    },
  ];

  return (
    <section
      className="relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden py-14 sm:py-16 md:py-20"
      style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      
    >
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#ff6b35] opacity-[0.035] blur-[120px] pointer-events-none" />

      <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* HEADER */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-8">
          {/* Left: Tag + headline */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
              <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
              <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#ff6b35] font-bold">
                Top Categories
              </span>
            </div>

            <h2
              className="text-[clamp(1.6rem,3.8vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#0a0a0a]"
              style={{ fontWeight: 800 }}
            >
              The stack that
              <span className="text-[#0a0a0a]/35"> hires.</span>
            </h2>
          </div>

          {/* Right: Short caption + count */}
          <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
            <p className="max-w-[260px] text-[0.8rem] sm:text-[0.88rem] text-[#0a0a0a]/60 leading-[1.5] font-light text-left sm:text-right">
              The most in-demand tools learners master before landing roles.
            </p>
            <div className="hidden sm:flex flex-col items-end border-l border-[#0a0a0a]/10 pl-5">
              <div className="text-[1.5rem] sm:text-[1.75rem] font-extrabold leading-none text-[#ff6b35]">
                {categories.length}
              </div>
              <div className="text-[0.58rem] uppercase tracking-[0.2em] text-[#0a0a0a]/50 font-bold mt-1">
                Tools
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mb-8 sm:mb-10 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/15 via-[#0a0a0a]/5 to-transparent" />

        {/* CATEGORY RAIL */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => router.push(category.route)}
              className="group relative bg-white border border-[#0a0a0a]/8 rounded-xl p-4 sm:p-5 hover:border-[#ff6b35]/40 hover:shadow-[0_15px_40px_rgba(10,10,10,0.06)] hover:-translate-y-1 transition-all duration-400 text-left overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ff6b35] opacity-[0.08] blur-[60px] rounded-full" />
              </div>

              {/* Top: index + arrow */}
              <div className="relative flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-[0.55rem] font-mono font-bold text-[#0a0a0a]/30 tracking-tight">
                  / {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-6 h-6 rounded-full bg-[#0a0a0a]/[0.04] flex items-center justify-center group-hover:bg-[#ff6b35] transition-all duration-400">
                  <ArrowUpRight
                    size={11}
                    strokeWidth={2.5}
                    className="text-[#0a0a0a]/35 group-hover:text-white transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>

              {/* Icon */}
              <div className="relative flex items-center justify-center mb-3 sm:mb-4 h-14 sm:h-16">
                <div className="relative transition-transform duration-500 group-hover:scale-[1.08]">
                  <Image
                    src={category.imgSrc}
                    alt={category.title}
                    width={52}
                    height={52}
                    className="object-contain w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[0.82rem] sm:text-[0.9rem] font-extrabold tracking-tight text-[#0a0a0a] leading-tight mb-1 group-hover:text-[#ff6b35] transition-colors duration-400">
                {category.title}
              </h3>

              {/* Tag */}
              <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[#0a0a0a]/45 font-bold">
                {category.tag}
              </p>

              {/* Bottom accent line - grows on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8a5e] transition-all duration-500" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;