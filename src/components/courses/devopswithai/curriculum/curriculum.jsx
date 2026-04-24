
// "use client";

// import React, { useState } from "react";
// import DevopsLearningStats from "./devopslearningstats/learningstats";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const Devopscurriculum = () => {
//   const curriculumData = [
//     {
//       title: "DevOps Certification",
//       subtopics: [
//         "Devops Fundamentals",
//         "GitOps: Git, GitHub, GitLab",
//         "Infrastructure as Code (IaC): Terraform, AWS CloudFormation",
//         "Microservices: Kubernetes, Docker",
//         "DevSecOps: Jenkins (with security plugins), GitLab CI/CD (with security pipelines)",
//         "Jenkins: Job creation, pipeline as code, distributed builds (master-slave architecture)",
//         "GitLab CI/CD: CI/CD pipelines, multi-project pipelines",
//         "GitHub Actions: Advanced workflows, automation tasks",
//       ],
//     },
//     {
//       title: "Docker & Kubernetes Certification",
//       subtopics: [
//         "Docker Fundamental",
//         "Docker: DockerHub, Docker networking, Docker Swarm",
//         "Kubernetes: Pods, Services, Deployments, StatefulSets, ConfigMaps, Secrets",
//         "Istio: Service mesh for Kubernetes, traffic management, security with mTLS",
//         "Tekton: Building CI/CD pipelines in Kubernetes",
//         "FluxCD and Argo CD: GitOps tools for continuous delivery",
//       ],
//     },
//     {
//       title: "Devops Cloud Certification",
//       subtopics: [
//         "Basics of AWS,Azure and GCP",
//         "Cloud-Native Development: Twelve-Factor App methodology, serverless architectures",
//         "AWS Services: Various compute, storage, networking, and database services",
//         "Azure Services: Virtual machines, Azure Kubernetes Service (AKS), Azure Functions",
//         "Continuous Delivery: Canary releases, blue/green deployments",
//         "Security: Zero trust model, mTLS for service-to-service communication",
//       ],
//     },
//     {
//       title: "Terraform Certification",
//       subtopics: [
//         "Ansible: Basics and Advanced",
//         "Playbooks",
//         "Terraform: Providers resources, variables, output blocks, dynamic blocks, modules, workspaces, remote state management",
//         "Terraform Cloud: Collaboration, scalability, governance features",
//         "AWS and Azure: Integration with Terraform, infrastructure provisioning",
//       ],
//     },
//     {
//       title: "Monitoring, Logging and Observability",
//       subtopics: [
//         "Monitoring: Prometheus, Grafana, Nagios XI",
//         "Logging: ELK Stack (Elasticsearch, Logstash, Kibana)",
//         "Advanced Monitoring: Prometheus (advanced features, alerting), Grafana (advanced features), Jaeger (distributed tracing)",
//         "Alerting and Dashboards: Prometheus Alertmanager, Grafana dashboards",
//         "Scaling Monitoring Infrastructure: Strategies for Prometheus and Grafana",
//       ],
//     },
//     {
//       title: "Devops with AI Certification",
//       subtopics: [
//         "AI-Driven Automation",
//         "Predictive Analytics for DevOps",
//         "Incident Management and Root Cause Analysis",
//         "Enhancing Security with AI in DevOps (AIOps)",
//         "AI-Enhanced Monitoring and Observability",
//         "AI-Driven Optimization and Self-Healing Systems",
//       ],
//     },
//     {
//       title: "Additional Tools and Technologies Covered",
//       subtopics: [
//         "Version Control: Git, GitHub, GitLab",
//         "CI/CD: Jenkins, GitLab CI/CD, GitHub Actions",
//         "Containerization: Docker",
//         "Container Orchestration: Kubernetes",
//         "Service Mesh: Istio",
//         "Infrastructure as Code: Terraform",
//         "Cloud Platforms: AWS, Azure",
//         "Monitoring and Observability: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Jaeger",
//         "GitOps Tools: FluxCD, Argo CD",
//         "Serverless Computing: AWS Lambda, Azure Functions",
//         "Security Tools: Various security plugins integrated into CI/CD pipelines",
//       ],
//     },
//     {
//       title: "Industry Grade Project",
//       subtopics: [
//         "Industry Grade Project",
//         "Develop a DevSecOps pipeline that integrates AI-driven real-time threat detection and automated security responses. Implement continuous security checks and compliance validations throughout the CI/CD process.",
//         "Tools: Jenkins Docker, Kubernetes, SonarQube, TensorFlow, ELK Stack,Prometheus, Grafana, Azure Security Center",
//       ],
//     },
//   ];

//   const [activeModuleIndex, setActiveModuleIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleModuleChange = (index) => {
//     if (isAnimating) return;

//     if (index === activeModuleIndex) {
//       setActiveModuleIndex(null);
//       return;
//     }

//     setIsAnimating(true);
//     setTimeout(() => {
//       setActiveModuleIndex(index);
//       setTimeout(() => setIsAnimating(false), 300);
//     }, 300);
//   };

//   return (
//     <>
//       {/* Heading */}
//       {/* <h2 className="relative text-center text-[2.2rem] font-bold mb-12 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//         Course Modules
//         <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
//       </h2> */}

//       <SectionHeading title="Course Modules" />

//       <div className="relative max-w-[1200px] w-full mx-auto p-6 md:p-10 rounded-xl bg-[linear-gradient(135deg,#f8faff,#f0f5ff)] shadow-[0_25px_50px_-12px_rgba(66,100,255,0.15)] overflow-hidden">
//         {/* Floating Shapes */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute w-[300px] h-[300px] -top-[150px] -left-[150px] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
//           <div className="absolute w-[200px] h-[200px] bottom-[20%] right-[10%] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
//         </div>

//         <div className="relative flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="flex-1 max-w-[400px] flex flex-col gap-4">
//             {curriculumData.map((module, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleModuleChange(index)}
//                 className={`relative p-5 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md ${
//                   index === activeModuleIndex
//                     ? "shadow-lg border-blue-300 bg-white/90 scale-[1.02]"
//                     : "bg-white/80 border-gray-200 hover:shadow-md hover:scale-[1.01]"
//                 }`}
//               >
//                 <div className="flex gap-4 items-start">
//                   {/* Number */}
//                   <div className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-md">
//                     0{index + 1}
//                   </div>

//                   {/* Title */}
//                   <div className="flex-1">
//                     <h3 className="text-sm font-semibold text-[#2c3e6d] leading-tight">
//                       {module.title}
//                     </h3>

//                     {/* Progress */}
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-[80px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
//                         <div
//                           className="h-full bg-gradient-to-br from-[#0bf] to-[#1a365d] transition-all duration-500 rounded-full"
//                           style={{
//                             width: index === activeModuleIndex ? "100%" : "0%",
//                           }}
//                         ></div>
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {module.subtopics.length} Topics
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile Expand */}
//                 {index === activeModuleIndex && (
//                   <div className="mt-4 p-4 bg-white rounded-lg border lg:hidden">
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       <span className="px-3 py-1 text-xs bg-gradient-to-br from-[#0bf]/10 to-[#1a365d]/10 rounded-full text-[#2c3e6d] font-medium">
//                         {module.subtopics.length} Topics
//                       </span>
//                     </div>

//                     <div className="space-y-2">
//                       {module.subtopics.map((topic, i) => (
//                         <div key={i} className="flex gap-2 text-sm">
//                           <span className="text-[#007daa] mt-0.5">•</span>
//                           <span className="text-gray-700">{topic}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Desktop Content */}
//           <div className="flex-1 hidden lg:block">
//             {activeModuleIndex !== null && (
//               <div
//                 className={`transition-all duration-300 ${
//                   isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
//                 }`}
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-xl font-semibold text-[#2c3e6d]">
//                     {curriculumData[activeModuleIndex].title}
//                   </h3>

//                   <span className="px-4 py-1 text-white text-sm rounded-full bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-md">
//                     {curriculumData[activeModuleIndex].subtopics.length} Topics
//                   </span>
//                 </div>

//                 <div className="bg-white/90 rounded-xl p-6 backdrop-blur-md border border-white/50 shadow-lg">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {curriculumData[activeModuleIndex].subtopics.map(
//                       (topic, i) => (
//                         <div
//                           key={i}
//                           className="flex gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-100 hover:border-[#0bf]/30 group"
//                         >
//                           <span className="text-[#007daa] font-bold group-hover:text-[#0bf] transition-colors">•</span>
//                           <span className="text-sm text-[#2c3e6d] leading-relaxed">
//                             {topic}
//                           </span>
//                         </div>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <DevopsLearningStats />
//     </>
//   );
// };

// export default Devopscurriculum;







// ---------------------------------new design --------------------------------------------------------


"use client";

import React, { useState, useEffect } from "react";
import DevopsLearningStats from "./devopslearningstats/learningstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const Devopscurriculum = () => {
  const curriculumData = [
    {
      title: "DevOps Certification",
      subtopics: [
        "Devops Fundamentals",
        "GitOps: Git, GitHub, GitLab",
        "Infrastructure as Code (IaC): Terraform, AWS CloudFormation",
        "Microservices: Kubernetes, Docker",
        "DevSecOps: Jenkins (with security plugins), GitLab CI/CD (with security pipelines)",
        "Jenkins: Job creation, pipeline as code, distributed builds (master-slave architecture)",
        "GitLab CI/CD: CI/CD pipelines, multi-project pipelines",
        "GitHub Actions: Advanced workflows, automation tasks",
      ],
    },
    {
      title: "Docker & Kubernetes Certification",
      subtopics: [
        "Docker Fundamental",
        "Docker: DockerHub, Docker networking, Docker Swarm",
        "Kubernetes: Pods, Services, Deployments, StatefulSets, ConfigMaps, Secrets",
        "Istio: Service mesh for Kubernetes, traffic management, security with mTLS",
        "Tekton: Building CI/CD pipelines in Kubernetes",
        "FluxCD and Argo CD: GitOps tools for continuous delivery",
      ],
    },
    {
      title: "Devops Cloud Certification",
      subtopics: [
        "Basics of AWS, Azure and GCP",
        "Cloud-Native Development: Twelve-Factor App methodology, serverless architectures",
        "AWS Services: Various compute, storage, networking, and database services",
        "Azure Services: Virtual machines, Azure Kubernetes Service (AKS), Azure Functions",
        "Continuous Delivery: Canary releases, blue/green deployments",
        "Security: Zero trust model, mTLS for service-to-service communication",
      ],
    },
    {
      title: "Terraform Certification",
      subtopics: [
        "Ansible: Basics and Advanced",
        "Playbooks",
        "Terraform: Providers resources, variables, output blocks, dynamic blocks, modules, workspaces, remote state management",
        "Terraform Cloud: Collaboration, scalability, governance features",
        "AWS and Azure: Integration with Terraform, infrastructure provisioning",
      ],
    },
    {
      title: "Monitoring, Logging and Observability",
      subtopics: [
        "Monitoring: Prometheus, Grafana, Nagios XI",
        "Logging: ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Advanced Monitoring: Prometheus (advanced features, alerting), Grafana (advanced features), Jaeger (distributed tracing)",
        "Alerting and Dashboards: Prometheus Alertmanager, Grafana dashboards",
        "Scaling Monitoring Infrastructure: Strategies for Prometheus and Grafana",
      ],
    },
    {
      title: "Devops with AI Certification",
      subtopics: [
        "AI-Driven Automation",
        "Predictive Analytics for DevOps",
        "Incident Management and Root Cause Analysis",
        "Enhancing Security with AI in DevOps (AIOps)",
        "AI-Enhanced Monitoring and Observability",
        "AI-Driven Optimization and Self-Healing Systems",
      ],
    },
    {
      title: "Additional Tools and Technologies Covered",
      subtopics: [
        "Version Control: Git, GitHub, GitLab",
        "CI/CD: Jenkins, GitLab CI/CD, GitHub Actions",
        "Containerization: Docker",
        "Container Orchestration: Kubernetes",
        "Service Mesh: Istio",
        "Infrastructure as Code: Terraform",
        "Cloud Platforms: AWS, Azure",
        "Monitoring and Observability: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Jaeger",
        "GitOps Tools: FluxCD, Argo CD",
        "Serverless Computing: AWS Lambda, Azure Functions",
        "Security Tools: Various security plugins integrated into CI/CD pipelines",
      ],
    },
    {
      title: "Industry Grade Project",
      subtopics: [
        "Industry Grade Project",
        "Develop a DevSecOps pipeline that integrates AI-driven real-time threat detection and automated security responses. Implement continuous security checks and compliance validations throughout the CI/CD process.",
        "Tools: Jenkins Docker, Kubernetes, SonarQube, TensorFlow, ELK Stack, Prometheus, Grafana, Azure Security Center",
      ],
    },
  ];

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModuleChange = (index) => {
    if (index === activeModuleIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveModuleIndex(index);
      setIsAnimating(false);
    }, 200);
  };

  const activeModule = curriculumData[activeModuleIndex];

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
        {/* Gradient blobs */}
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
            background:
              "radial-gradient(circle, #1a365d 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          {/* Heading */}
          <div className="mb-10 lg:mb-14">
            <SectionHeading title="Course Modules" />
          </div>

          {/* Main layout: Module index (left) + Topic grid (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 lg:gap-10">
            {/* ---------- LEFT: Module index ---------- */}
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
                <span className="text-[11px] tracking-[0.25em] font-semibold text-[#1a365d]/60 uppercase">
                  Syllabus Index
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a365d]/30 to-transparent" />
              </div>

              <ul className="flex flex-col gap-2">
                {curriculumData.map((module, index) => {
                  const isActive = activeModuleIndex === index;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleModuleChange(index)}
                        className={`group relative w-full text-left rounded-xl overflow-hidden transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-[0_10px_30px_-12px_rgba(26,54,93,0.25)] ring-1 ring-[#0bf]/30"
                            : "bg-white/40 hover:bg-white hover:shadow-[0_6px_20px_-12px_rgba(26,54,93,0.2)] ring-1 ring-[#1a365d]/5"
                        }`}
                      >
                        {/* Active indicator bar */}
                        <span
                          className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-b from-[#0bf] to-[#1a365d]"
                              : "bg-transparent"
                          }`}
                        />

                        <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4">
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            {/* Module number */}
                            <span
                              className={`flex-shrink-0 font-mono text-xs tabular-nums transition-colors duration-300 ${
                                isActive ? "text-[#0bf]" : "text-[#1a365d]/40"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Title + progress */}
                            <div className="min-w-0 flex-1">
                              <h3
                                className={`text-sm sm:text-[15px] font-semibold truncate transition-colors duration-300 ${
                                  isActive
                                    ? "text-[#1a365d]"
                                    : "text-[#1a365d]/70 group-hover:text-[#1a365d]"
                                }`}
                              >
                                {module.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-1.5">
                                <div className="h-[3px] flex-1 max-w-[100px] bg-[#1a365d]/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-[#0bf] to-[#1a365d] transition-all duration-500 rounded-full"
                                    style={{
                                      width: isActive ? "100%" : "15%",
                                    }}
                                  />
                                </div>
                                <span
                                  className={`text-[10px] font-semibold tracking-wider uppercase tabular-nums transition-colors ${
                                    isActive
                                      ? "text-[#0bf]"
                                      : "text-[#1a365d]/45"
                                  }`}
                                >
                                  {module.subtopics.length} Topics
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Arrow */}
                          <svg
                            className={`flex-shrink-0 w-4 h-4 transition-all duration-300 ${
                              isActive
                                ? "text-[#0bf] translate-x-0 opacity-100"
                                : "text-[#1a365d]/40 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </div>

                        {/* Inline expanded topics — mobile/tablet only */}
                        {isActive && (
                          <div className="lg:hidden px-4 sm:px-5 pb-4 -mt-1">
                            <div className="pl-7 sm:pl-8 border-l-2 border-[#0bf]/20">
                              <ul className="flex flex-col gap-2 pt-1">
                                {module.subtopics.map((topic, i) => (
                                  <li
                                    key={i}
                                    className="flex gap-2 text-[13px] text-[#475569] leading-[1.6]"
                                  >
                                    <span className="text-[#0bf] font-bold mt-0.5 flex-shrink-0">
                                      ›
                                    </span>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ---------- RIGHT: Topic detail panel ---------- */}
            <div className="relative hidden lg:block">
              <article
                className={`relative h-full bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5 transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 translate-y-2"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Top accent band */}
                <div className="h-1.5 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6 flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                      <span className="font-mono tabular-nums text-[#0bf]">
                        {String(activeModuleIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-[#1a365d]/30" />
                      Module {String(activeModuleIndex + 1).padStart(2, "0")} /{" "}
                      {String(curriculumData.length).padStart(2, "0")}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0bf] animate-pulse" />
                      <span className="text-[11px] font-semibold text-[#1a365d] tracking-wide tabular-nums">
                        {activeModule.subtopics.length} Topics
                      </span>
                    </div>
                  </div>

                  {/* Module title */}
                  <h3 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-extrabold text-[#1a365d] tracking-tight mb-2 sm:mb-3">
                    {activeModule.title}
                  </h3>

                  {/* Subline */}
                  <p className="text-[14px] text-[#1a365d]/60 mb-7 sm:mb-8">
                    Everything you'll learn in this module, taught by industry
                    practitioners.
                  </p>

                  {/* Topic grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeModule.subtopics.map((topic, i) => (
                      <div
                        key={i}
                        className="group/topic relative flex gap-3 p-4 rounded-xl bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#0bf]/30"
                      >
                        {/* Topic number */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <span className="font-mono text-[10px] tabular-nums font-bold text-[#0bf] tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="w-px flex-1 bg-gradient-to-b from-[#0bf]/30 to-transparent mt-1" />
                        </div>

                        {/* Topic text */}
                        <p className="text-[13.5px] text-[#1a365d] leading-[1.6] font-medium">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer hint — prev/next */}
                  <div className="mt-8 sm:mt-10 pt-6 border-t border-[#1a365d]/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() =>
                        handleModuleChange(
                          (activeModuleIndex - 1 + curriculumData.length) %
                            curriculumData.length
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a365d]/60 hover:text-[#0bf] transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5M11 18l-6-6 6-6" />
                      </svg>
                      Previous
                    </button>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-1.5">
                      {curriculumData.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activeModuleIndex
                              ? "w-6 bg-gradient-to-r from-[#0bf] to-[#1a365d]"
                              : "w-1.5 bg-[#1a365d]/20"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        handleModuleChange(
                          (activeModuleIndex + 1) % curriculumData.length
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1a365d]/60 hover:text-[#0bf] transition-colors"
                    >
                      Next
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <DevopsLearningStats />
    </>
  );
};

export default Devopscurriculum;