// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { PlayCircle } from "lucide-react";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";


// const devopsDailyKraRoles = [
//   {
//     title: "DevOps Engineer",
//     description: [
//       "Automate deployment pipelines using CI/CD tools like Jenkins, GitLab, etc.",
//       "Collaborate with developers to ensure seamless code integration.",
//       "Monitor infrastructure and application performance.",
//       "Automate infrastructure using tools like Ansible, Terraform.",
//       "Resolve production issues and manage cloud resources.",
//     ],
//     tags: ["CI/CD", "Automation", "Cloud"],
//   },
//   {
//     title: "Site Reliability Engineer",
//     description: [
//       "Ensure system uptime by automating manual tasks.",
//       "Implement and manage monitoring tools and alerts.",
//       "Collaborate with development teams to enhance system reliability.",
//       "Analyze incidents and conduct root cause analysis.",
//       "Define and track SLOs (Service Level Objectives) and SLIs (Service Level Indicators).",
//     ],
//     tags: ["SRE", "Monitoring", "Reliability"],
//   },
//   {
//     title: "Security Engineer",
//     description: [
//       "Integrate security protocols within CI/CD pipelines.",
//       "Monitor and analyze security logs for threats.",
//       "Automate vulnerability scanning and implement fixes.",
//       "Collaborate with DevOps teams to secure application and infrastructure.",
//       "Conduct regular security audits and compliance checks.",
//     ],
//     tags: ["Security", "DevSecOps", "Compliance"],
//   },
//   {
//     title: "Infrastructure Engineer",
//     description: [
//       "Manage and maintain on-premise and cloud-based infrastructure.",
//       "Implement automation for infrastructure deployment (Terraform, CloudFormation).",
//       "Ensure network reliability and performance.",
//       "Troubleshoot infrastructure-related issues.",
//       "Collaborate with teams to optimize resource allocation.",
//     ],
//     tags: ["Infra", "Terraform", "Networking"],
//   },
//   {
//     title: "DevOps Architect",
//     description: [
//       "Design scalable, secure DevOps pipelines and infrastructure.",
//       "Define strategies for automation, CI/CD, and cloud integration.",
//       "Collaborate with teams to ensure DevOps practices align with business goals.",
//       "Implement container orchestration (e.g., Kubernetes).",
//       "Ensure fault tolerance and system reliability.",
//     ],
//     tags: ["Architecture", "Kubernetes", "Strategy"],
//   },
//   {
//     title: "Platform Engineer",
//     description: [
//       "Build and maintain internal platforms for development and deployment.",
//       "Automate infrastructure and platform provisioning.",
//       "Monitor platform performance and troubleshoot issues.",
//       "Implement tools to support developer self-service for infrastructure.",
//       "Standardize infrastructure configurations and deployments.",
//     ],
//       tags: ["Platforms", "Automation", "Self-Service"],
//   },
//   {
//     title: "Integration Specialist",
//     description: [
//       "Connect diverse systems using APIs and middleware.",
//       "Ensure smooth data transfer between integrated systems.",
//       "Troubleshoot integration issues and optimize workflows.",
//       "Automate recurring data exchanges and integrations.",
//       "Collaborate with developers to ensure seamless tool compatibility.",
//     ],
//     tags: ["APIs", "Integration", "Middleware"],
//   },
//   {
//     title: "DevOps Cloud Engineer",
//     description: [
//       "Manage cloud infrastructure (AWS, Azure, GCP).",
//       "Automate cloud provisioning and scaling processes.",
//       "Monitor cloud infrastructure for performance and security issues.",
//       "Ensure cloud-based applications meet security and compliance requirements.",
//       "Optimize cloud resource usage and manage costs.",
//     ],
//   },
//   {
//     title: "Sr. DevOps Cloud Engineer",
//     description: [
//       "Architect complex cloud environments across multiple regions.",
//       "Lead automation initiatives for cloud resource management.",
//       "Optimize CI/CD pipelines for large-scale applications.",
//       "Ensure high availability and disaster recovery for cloud services.",
//       "Mentor junior engineers and drive DevOps strategy.",
//     ],
//       tags: ["Cloud Strategy", "HA/DR", "Leadership"],
//   },
// ];

// const DevopsDailyKra = () => {
//   const [selectedRole, setSelectedRole] = useState(devopsDailyKraRoles[0]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const devopsLP =
//     "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopsLP4.png";

//   useEffect(() => {
//     setIsAnimating(true);
//     const timer = setTimeout(() => setIsAnimating(false), 500);
//     return () => clearTimeout(timer);
//   }, [selectedRole]);

//   const handleRoleSelect = (role, index) => {
//     setSelectedRole(role);
//     setActiveIndex(index);
//   };

//   return (
//     <>
//       {/* Container */}
//       <div className="relative p-12 px-6 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-xl overflow-hidden max-w-[1200px] w-full mx-auto font-sans">

//         {/* Floating Shapes */}
//         <div className="absolute inset-0 overflow-hidden z-0">
//           <div className="absolute w-[300px] h-[300px] top-[5%] left-[-50px] rounded-full opacity-15 bg-gradient-to-br from-[#00bbff40] to-[#1a365d30] animate-[float_15s_ease-in-out_infinite]" />
//           <div className="absolute w-[200px] h-[200px] bottom-[-40px] right-[10%] rounded-full opacity-15 bg-gradient-to-br from-[#ff660030] to-[#ff990030] animate-[float_15s_ease-in-out_infinite]" />
//           <div className="absolute w-[150px] h-[150px] top-[45%] left-[78%] rounded-full opacity-15 bg-gradient-to-br from-[#1d289630] to-[#00bbff20] animate-[float_15s_ease-in-out_infinite]" />
//         </div>

//         {/* Heading */}
//         {/* <h2 className="relative z-10 text-center text-[2.2rem] font-bold 
//           bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text mb-9 mt-[-1rem]
//           after:content-[''] after:absolute after:left-[42%] after:top-full after:w-[90px] after:h-[4px]
//           after:bg-gradient-to-br after:from-[#0bf] after:to-[#1a365d] after:rounded">
//           What Does Day to Day Look Like?
//         </h2> */}
//         <SectionHeading title=" What Does Day to Day Look Like?" />

//         {/* Content */}
//         <div className="flex gap-8 relative z-10 items-start max-w-[1400px] mx-auto 
//           max-[1024px]:flex-col">

//           {/* Roles Selector */}
//           <div className="flex flex-col w-[350px] max-[1024px]:w-full">

//             {/* Dots */}
//             <div className="flex justify-center gap-2 mb-5">
//               {devopsDailyKraRoles.map((_, index) => (
//                 <div
//                   key={index}
//                   onClick={() =>
//                     handleRoleSelect(devopsDailyKraRoles[index], index)
//                   }
//                   className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all 
//                     ${index === activeIndex ? "bg-[#0bf] scale-125" : "bg-gray-300 hover:bg-[#1a365d]"}`}
//                 />
//               ))}
//             </div>

//             {/* Roles List */}
//             <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2
//               max-[1024px]:flex-row max-[1024px]:overflow-x-auto max-[1024px]:max-h-none">

//               {devopsDailyKraRoles.map((role, index) => (
//                 <div
//                   key={index}
//                   onClick={() => handleRoleSelect(role, index)}
//                   className={`flex items-center p-5 rounded-[15px] cursor-pointer relative overflow-hidden
//                   transition-all shadow-md
//                   ${selectedRole.title === role.title
//                       ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white"
//                       : "bg-white/90 hover:-translate-y-1 hover:shadow-lg"}`}
//                 >
//                   {/* Icon */}
//                   <div className="relative mr-4 w-[40px] h-[40px] flex items-center justify-center">
//                     <div className={`absolute w-full h-full rounded-full transition 
//                       ${selectedRole.title === role.title ? "bg-white/20 scale-100" : "bg-[#00bbff14] scale-0 group-hover:scale-100"}`} />
//                     <span className={`font-bold z-10 
//                       ${selectedRole.title === role.title ? "text-white" : "text-[#0bf]"}`}>
//                       {index + 1}
//                     </span>
//                   </div>

//                   <span className="font-semibold flex-1">{role.title}</span>

//                   <div className={`w-[10px] h-[10px] rounded-full 
//                     ${selectedRole.title === role.title ? "bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" : ""}`} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Details */}
//           <div className={`flex-1 transition-all duration-500 
//             ${isAnimating ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`}>

//             <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-10 shadow-xl border border-white/60 relative flex flex-col h-full">

//               {/* Left Border */}
//               <div className="absolute left-0 top-0 w-[5px] h-full bg-gradient-to-br from-[#0bf] to-[#1a365d]" />

//               {/* Header */}
//               <div className="mb-6 text-center">
//                 <h3 className="text-[2.2rem] font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text">
//                   {selectedRole.title}
//                 </h3>
//                 <div className="w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded mx-auto mt-2" />
//               </div>

//               {/* Description */}
//               <ul className="space-y-4 mb-6">
//                 {selectedRole.description.map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-start p-4 rounded-lg bg-[#00bbff08] hover:bg-[#00bbff14] transition hover:translate-x-1"
//                   >
//                     <div className="mr-4 text-[#0bf]">
//                       <PlayCircle />
//                     </div>
//                     <span className="text-[1.1rem] text-[#2c3e50] leading-6">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Tags */}
//               <div className="mt-auto pt-5 border-t border-black/5 flex flex-wrap gap-3">
//                 {selectedRole.tags &&
//                   selectedRole.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 rounded-full text-sm font-semibold text-[#0bf]
//                       bg-gradient-to-br from-[#e6f7ff] to-[#f0f9ff] shadow"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Learning Path */}
//       <div className="text-center mt-10">
//   <SectionHeading title=" Career Assistance Services" />


//         <div className="flex justify-center">
//           <Image
//             src="/casdevops.png"
//             alt="devops-learning-path"
//             width={1200}
//             height={600}
//             className="mt-[-.5rem] mb-[1rem] scale-115"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default DevopsDailyKra;





"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const devopsDailyKraRoles = [
  {
    title: "DevOps Engineer",
    shortTitle: "DevOps Engineer",
    description: [
      "Automate deployment pipelines using CI/CD tools like Jenkins, GitLab, etc.",
      "Collaborate with developers to ensure seamless code integration.",
      "Monitor infrastructure and application performance.",
      "Automate infrastructure using tools like Ansible, Terraform.",
      "Resolve production issues and manage cloud resources.",
    ],
    tags: ["CI/CD", "Automation", "Cloud"],
  },
  {
    title: "Site Reliability Engineer",
    shortTitle: "SRE",
    description: [
      "Ensure system uptime by automating manual tasks.",
      "Implement and manage monitoring tools and alerts.",
      "Collaborate with development teams to enhance system reliability.",
      "Analyze incidents and conduct root cause analysis.",
      "Define and track SLOs (Service Level Objectives) and SLIs (Service Level Indicators).",
    ],
    tags: ["SRE", "Monitoring", "Reliability"],
  },
  {
    title: "Security Engineer",
    shortTitle: "Security",
    description: [
      "Integrate security protocols within CI/CD pipelines.",
      "Monitor and analyze security logs for threats.",
      "Automate vulnerability scanning and implement fixes.",
      "Collaborate with DevOps teams to secure application and infrastructure.",
      "Conduct regular security audits and compliance checks.",
    ],
    tags: ["Security", "DevSecOps", "Compliance"],
  },
  {
    title: "Infrastructure Engineer",
    shortTitle: "Infra",
    description: [
      "Manage and maintain on-premise and cloud-based infrastructure.",
      "Implement automation for infrastructure deployment (Terraform, CloudFormation).",
      "Ensure network reliability and performance.",
      "Troubleshoot infrastructure-related issues.",
      "Collaborate with teams to optimize resource allocation.",
    ],
    tags: ["Infra", "Terraform", "Networking"],
  },
  {
    title: "DevOps Architect",
    shortTitle: "Architect",
    description: [
      "Design scalable, secure DevOps pipelines and infrastructure.",
      "Define strategies for automation, CI/CD, and cloud integration.",
      "Collaborate with teams to ensure DevOps practices align with business goals.",
      "Implement container orchestration (e.g., Kubernetes).",
      "Ensure fault tolerance and system reliability.",
    ],
    tags: ["Architecture", "Kubernetes", "Strategy"],
  },
  {
    title: "Platform Engineer",
    shortTitle: "Platform",
    description: [
      "Build and maintain internal platforms for development and deployment.",
      "Automate infrastructure and platform provisioning.",
      "Monitor platform performance and troubleshoot issues.",
      "Implement tools to support developer self-service for infrastructure.",
      "Standardize infrastructure configurations and deployments.",
    ],
    tags: ["Platforms", "Automation", "Self-Service"],
  },
  {
    title: "Integration Specialist",
    shortTitle: "Integration",
    description: [
      "Connect diverse systems using APIs and middleware.",
      "Ensure smooth data transfer between integrated systems.",
      "Troubleshoot integration issues and optimize workflows.",
      "Automate recurring data exchanges and integrations.",
      "Collaborate with developers to ensure seamless tool compatibility.",
    ],
    tags: ["APIs", "Integration", "Middleware"],
  },
  {
    title: "DevOps Cloud Engineer",
    shortTitle: "Cloud Engineer",
    description: [
      "Manage cloud infrastructure (AWS, Azure, GCP).",
      "Automate cloud provisioning and scaling processes.",
      "Monitor cloud infrastructure for performance and security issues.",
      "Ensure cloud-based applications meet security and compliance requirements.",
      "Optimize cloud resource usage and manage costs.",
    ],
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    title: "Sr. DevOps Cloud Engineer",
    shortTitle: "Sr. Cloud",
    description: [
      "Architect complex cloud environments across multiple regions.",
      "Lead automation initiatives for cloud resource management.",
      "Optimize CI/CD pipelines for large-scale applications.",
      "Ensure high availability and disaster recovery for cloud services.",
      "Mentor junior engineers and drive DevOps strategy.",
    ],
    tags: ["Cloud Strategy", "HA/DR", "Leadership"],
  },
];

// Workday time allocation (same across roles — feels like a real day)
const timeSlots = ["09:00", "10:30", "12:00", "14:30", "16:30"];
const durations = ["1.5h", "1.5h", "2.5h", "2.0h", "1.5h"];
const barWidths = [30, 35, 55, 45, 35];

const DevopsDailyKra = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealStep, setRevealStep] = useState(-1);
  const [displayNumber, setDisplayNumber] = useState(1);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const selectedRole = devopsDailyKraRoles[activeIndex];

  // Animated counter for the role number in the meta row
  useEffect(() => {
    const target = activeIndex + 1;
    let current = displayNumber;
    if (current === target) return;
    const step = current < target ? 1 : -1;
    const interval = setInterval(() => {
      current += step;
      setDisplayNumber(current);
      if (current === target) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // Sequential reveal of daily tasks
  useEffect(() => {
    setRevealStep(-1);
    const timers = [];
    selectedRole.description.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setRevealStep(i);
        }, 180 + i * 130)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [activeIndex, selectedRole.description]);

  // Position the sliding indicator under the active tab
  useEffect(() => {
    const updateIndicator = () => {
      const el = tabRefs.current[activeIndex];
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    };
    updateIndicator();
    // Re-measure after layout settles
    const raf = requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeIndex]);

  // Auto-scroll active tab into view (for mobile)
  useEffect(() => {
    const el = tabRefs.current[activeIndex];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  return (
    <>
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8faff]">
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#dbe7f5 1px, transparent 1px), linear-gradient(90deg, #dbe7f5 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0bf 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #1a365d 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          {/* ---------- Heading ---------- */}
          <div className="mb-8 lg:mb-12">
            <SectionHeading title="What Does Day to Day Look Like?" />
            <p className="mt-4 text-center text-[#475569] text-[15px] sm:text-base leading-[1.75] max-w-2xl mx-auto">
              Step into any role and watch a real workday unfold — tasks, timing,
              and the rhythm of the job.
            </p>
          </div>

          {/* ---------- Tab rail with sliding indicator ---------- */}
          <div className="relative mb-6 sm:mb-8">
            <div
              ref={tabsRef}
              className="relative overflow-x-auto scrollbar-hide bg-white rounded-2xl ring-1 ring-[#1a365d]/5 shadow-[0_10px_30px_-15px_rgba(26,54,93,0.2)] p-1.5"
            >
              <div className="relative flex min-w-max">
                {/* Sliding gradient indicator */}
                <div
                  className="absolute top-0 h-full rounded-xl transition-all duration-500 pointer-events-none"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    transitionTimingFunction:
                      "cubic-bezier(0.32, 0.72, 0, 1)",
                    background:
                      "linear-gradient(135deg, #0bf 0%, #1a365d 100%)",
                    boxShadow:
                      "0 8px 25px -8px rgba(11,191,255,0.55), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                />

                {/* Tabs */}
                {devopsDailyKraRoles.map((role, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={index}
                      ref={(el) => (tabRefs.current[index] = el)}
                      onClick={() => setActiveIndex(index)}
                      className="relative z-10 px-4 sm:px-5 py-3 flex items-center gap-2.5 whitespace-nowrap transition-colors duration-300 rounded-xl"
                    >
                      <span
                        className={`font-mono text-[11px] tabular-nums font-bold tracking-wider transition-colors duration-300 ${
                          isActive ? "text-white/75" : "text-[#0bf]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[13px] sm:text-sm font-semibold transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#1a365d]/70"
                        }`}
                      >
                        {role.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Edge fade on mobile (hints at horizontal scroll) */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none rounded-r-2xl bg-gradient-to-l from-[#f8faff] to-transparent sm:hidden"
            />
          </div>

          {/* ---------- Main detail panel ---------- */}
          <article
            key={activeIndex}
            className="relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_25px_70px_-25px_rgba(26,54,93,0.3)] ring-1 ring-[#1a365d]/5 animate-[panelFade_0.6s_ease-out]"
          >
            {/* Top accent band with sweeping shimmer */}
            <div className="relative h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_2.8s_ease-in-out_infinite]"
              />
            </div>

            {/* Meta row */}
            <div className="flex items-center justify-between px-6 sm:px-8 lg:px-10 py-4 border-b border-[#1a365d]/10 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0bf] animate-pulse" />
                  <span
                    className="w-2 h-2 rounded-full bg-[#0bf]/50 animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-[#0bf]/25 animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  />
                </div>
                <div className="h-4 w-px bg-[#1a365d]/15" />
                <span className="text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/55">
                  Live Feed
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                <span>Role</span>
                <span className="font-mono tabular-nums text-[#0bf] text-[13px]">
                  {String(displayNumber).padStart(2, "0")}
                </span>
                <span>/</span>
                <span className="font-mono tabular-nums">
                  {String(devopsDailyKraRoles.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {/* Title block with slide-up reveal */}
              <div className="mb-8 sm:mb-10">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0bf] mb-2 overflow-hidden">
                  <span className="inline-block animate-[slideUp_0.5s_ease-out]">
                    A Day in the Life of a
                  </span>
                </p>
                <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] leading-[1.05] font-extrabold text-[#1a365d] tracking-tight overflow-hidden">
                  <span className="inline-block animate-[slideUp_0.6s_ease-out]">
                    {selectedRole.title}
                  </span>
                </h3>
              </div>

              {/* Content grid: Tasks (left) + Workday visualizer (right) */}
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-8 lg:gap-10">
                {/* ===== Daily Tasks with sequential reveal ===== */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1a365d]/55">
                      Daily Tasks
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#1a365d]/15 to-transparent" />
                    <span className="text-[10px] font-mono tabular-nums font-bold text-[#0bf] tracking-wider">
                      {String(selectedRole.description.length).padStart(2, "0")}{" "}
                      items
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {selectedRole.description.map((item, index) => {
                      const isRevealed = index <= revealStep;
                      return (
                        <li
                          key={`${activeIndex}-${index}`}
                          className="relative transition-all duration-500 ease-out"
                          style={{
                            opacity: isRevealed ? 1 : 0,
                            transform: isRevealed
                              ? "translateY(0) scale(1)"
                              : "translateY(10px) scale(0.98)",
                          }}
                        >
                          <div className="group/task relative flex gap-4 p-4 rounded-xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 transition-all duration-300 hover:border-[#0bf]/30 hover:shadow-[0_8px_25px_-10px_rgba(11,191,255,0.3)] hover:-translate-y-0.5 overflow-hidden">
                            {/* Number + time */}
                            <div className="flex-shrink-0 flex flex-col items-center pt-0.5">
                              <div className="w-7 h-7 rounded-lg bg-white border border-[#0bf]/25 flex items-center justify-center transition-all duration-300 group-hover/task:border-[#0bf] group-hover/task:bg-[#0bf]">
                                <span className="font-mono text-[10px] tabular-nums font-bold text-[#0bf] transition-colors duration-300 group-hover/task:text-white">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                              </div>
                              <span className="font-mono text-[9px] tabular-nums text-[#1a365d]/40 mt-1.5 tracking-wider">
                                {timeSlots[index] || ""}
                              </span>
                            </div>

                            {/* Text */}
                            <div className="flex-1 min-w-0 pt-0.5">
                              <p className="text-[14px] text-[#1a365d] leading-[1.6] font-medium">
                                {item}
                              </p>
                            </div>

                            {/* Reveal line that sweeps across when item appears */}
                            {isRevealed && (
                              <span
                                key={`line-${activeIndex}-${index}`}
                                aria-hidden="true"
                                className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-transparent rounded-full animate-[drawLine_0.9s_ease-out_forwards]"
                              />
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* ===== Workday visualizer (right) ===== */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1a365d]/55">
                      Workday
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-[#1a365d]/15 to-transparent" />
                    <span className="text-[10px] font-mono tabular-nums font-bold text-[#0bf] tracking-wider">
                      09:00 → 18:00
                    </span>
                  </div>

                  {/* Dark timeline card */}
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-[#1a365d] via-[#0f2642] to-[#0bf]/95 text-white overflow-hidden">
                    {/* Decorative rings */}
                    <div
                      aria-hidden="true"
                      className="absolute -right-12 -top-12 w-40 h-40 rounded-full border border-white/10"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -right-6 -top-6 w-24 h-24 rounded-full border border-white/5"
                    />

                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60 mb-4 relative z-10">
                      Time Allocation
                    </p>

                    {/* Animated bars */}
                    <div className="flex flex-col gap-3 relative z-10">
                      {selectedRole.description.map((_, i) => {
                        const isRevealed = i <= revealStep;
                        const barWidth = barWidths[i] || 30;
                        return (
                          <div
                            key={`bar-${activeIndex}-${i}`}
                            className="flex items-center gap-3"
                          >
                            <span className="font-mono text-[10px] tabular-nums text-white/50 w-10 tracking-wider">
                              {timeSlots[i]}
                            </span>
                            <div className="flex-1 h-5 bg-white/5 rounded-md overflow-hidden relative">
                              <div
                                className="h-full rounded-md transition-all duration-[900ms] ease-out relative overflow-hidden"
                                style={{
                                  width: isRevealed ? `${barWidth}%` : "0%",
                                  background:
                                    "linear-gradient(90deg, #0bf 0%, #4fbfee 100%)",
                                  transitionDelay: `${i * 80}ms`,
                                }}
                              >
                                {/* Shimmer inside bar */}
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full animate-[shimmerBar_2.2s_ease-in-out_infinite]"
                                  style={{ animationDelay: `${i * 0.18}s` }}
                                />
                              </div>
                            </div>
                            <span
                              className={`font-mono text-[10px] tabular-nums font-bold tracking-wider transition-opacity duration-500 ${
                                isRevealed
                                  ? "text-white opacity-100"
                                  : "text-white/30 opacity-0"
                              }`}
                              style={{
                                transitionDelay: `${i * 80 + 200}ms`,
                              }}
                            >
                              {durations[i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer stat */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/55">
                        Productive Hours
                      </span>
                      <span className="font-extrabold text-lg tabular-nums tracking-tight">
                        9h
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  {selectedRole.tags && selectedRole.tags.length > 0 && (
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#1a365d]/55">
                          Core Stack
                        </p>
                        <span className="h-px flex-1 bg-gradient-to-r from-[#1a365d]/15 to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedRole.tags.map((tag, index) => (
                          <span
                            key={`${activeIndex}-tag-${index}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#0bf]/25 text-[11px] font-bold text-[#1a365d] shadow-sm hover:border-[#0bf] hover:bg-[#0bf]/5 hover:-translate-y-0.5 transition-all duration-300"
                            style={{
                              animation: `popIn 0.5s ease-out ${
                                0.4 + index * 0.1
                              }s both`,
                            }}
                          >
                            <span className="w-1 h-1 rounded-full bg-[#0bf]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ==================== Career Assistance Services ==================== */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8faff]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#dbe7f5 1px, transparent 1px), linear-gradient(90deg, #dbe7f5 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          <div className="mb-8 lg:mb-12">
            <SectionHeading title="Career Assistance Services" />
          </div>

          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5">
            <div className="relative h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_2.8s_ease-in-out_infinite]"
              />
            </div>

            <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-[#1a365d]/10">
              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/55">
                <span className="font-mono tabular-nums text-[#0bf]">CAS</span>
                <span className="w-6 h-px bg-[#1a365d]/30" />
                End-to-End Support
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#1a365d]/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                Job-ready outcomes
              </span>
            </div>

            <div className="relative group overflow-hidden">
              <Image
                src="/casdevops.png"
                alt="DevOps Career Assistance Services"
                width={1200}
                height={600}
                className="w-full h-auto block transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Animations & scrollbar hide ---------- */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes panelFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes shimmerBar {
          0% {
            transform: translateX(-100%);
          }
          60%,
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes drawLine {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0;
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(4px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default DevopsDailyKra;