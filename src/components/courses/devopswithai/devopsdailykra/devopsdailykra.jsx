"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import SectionHeading from "@/components/common/sectionheading/sectionheading";


const devopsDailyKraRoles = [
  {
    title: "DevOps Engineer",
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
    description: [
      "Manage cloud infrastructure (AWS, Azure, GCP).",
      "Automate cloud provisioning and scaling processes.",
      "Monitor cloud infrastructure for performance and security issues.",
      "Ensure cloud-based applications meet security and compliance requirements.",
      "Optimize cloud resource usage and manage costs.",
    ],
  },
  {
    title: "Sr. DevOps Cloud Engineer",
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

const DevopsDailyKra = () => {
  const [selectedRole, setSelectedRole] = useState(devopsDailyKraRoles[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const devopsLP =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopsLP4.png";

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [selectedRole]);

  const handleRoleSelect = (role, index) => {
    setSelectedRole(role);
    setActiveIndex(index);
  };

  return (
    <>
      {/* Container */}
      <div className="relative p-12 px-6 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-xl overflow-hidden max-w-[1200px] w-full mx-auto font-sans">

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-[300px] h-[300px] top-[5%] left-[-50px] rounded-full opacity-15 bg-gradient-to-br from-[#00bbff40] to-[#1a365d30] animate-[float_15s_ease-in-out_infinite]" />
          <div className="absolute w-[200px] h-[200px] bottom-[-40px] right-[10%] rounded-full opacity-15 bg-gradient-to-br from-[#ff660030] to-[#ff990030] animate-[float_15s_ease-in-out_infinite]" />
          <div className="absolute w-[150px] h-[150px] top-[45%] left-[78%] rounded-full opacity-15 bg-gradient-to-br from-[#1d289630] to-[#00bbff20] animate-[float_15s_ease-in-out_infinite]" />
        </div>

        {/* Heading */}
        {/* <h2 className="relative z-10 text-center text-[2.2rem] font-bold 
          bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text mb-9 mt-[-1rem]
          after:content-[''] after:absolute after:left-[42%] after:top-full after:w-[90px] after:h-[4px]
          after:bg-gradient-to-br after:from-[#0bf] after:to-[#1a365d] after:rounded">
          What Does Day to Day Look Like?
        </h2> */}
        <SectionHeading title=" What Does Day to Day Look Like?" />

        {/* Content */}
        <div className="flex gap-8 relative z-10 items-start max-w-[1400px] mx-auto 
          max-[1024px]:flex-col">

          {/* Roles Selector */}
          <div className="flex flex-col w-[350px] max-[1024px]:w-full">

            {/* Dots */}
            <div className="flex justify-center gap-2 mb-5">
              {devopsDailyKraRoles.map((_, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleRoleSelect(devopsDailyKraRoles[index], index)
                  }
                  className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all 
                    ${index === activeIndex ? "bg-[#0bf] scale-125" : "bg-gray-300 hover:bg-[#1a365d]"}`}
                />
              ))}
            </div>

            {/* Roles List */}
            <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2
              max-[1024px]:flex-row max-[1024px]:overflow-x-auto max-[1024px]:max-h-none">

              {devopsDailyKraRoles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => handleRoleSelect(role, index)}
                  className={`flex items-center p-5 rounded-[15px] cursor-pointer relative overflow-hidden
                  transition-all shadow-md
                  ${selectedRole.title === role.title
                      ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white"
                      : "bg-white/90 hover:-translate-y-1 hover:shadow-lg"}`}
                >
                  {/* Icon */}
                  <div className="relative mr-4 w-[40px] h-[40px] flex items-center justify-center">
                    <div className={`absolute w-full h-full rounded-full transition 
                      ${selectedRole.title === role.title ? "bg-white/20 scale-100" : "bg-[#00bbff14] scale-0 group-hover:scale-100"}`} />
                    <span className={`font-bold z-10 
                      ${selectedRole.title === role.title ? "text-white" : "text-[#0bf]"}`}>
                      {index + 1}
                    </span>
                  </div>

                  <span className="font-semibold flex-1">{role.title}</span>

                  <div className={`w-[10px] h-[10px] rounded-full 
                    ${selectedRole.title === role.title ? "bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" : ""}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className={`flex-1 transition-all duration-500 
            ${isAnimating ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"}`}>

            <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-10 shadow-xl border border-white/60 relative flex flex-col h-full">

              {/* Left Border */}
              <div className="absolute left-0 top-0 w-[5px] h-full bg-gradient-to-br from-[#0bf] to-[#1a365d]" />

              {/* Header */}
              <div className="mb-6 text-center">
                <h3 className="text-[2.2rem] font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text">
                  {selectedRole.title}
                </h3>
                <div className="w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded mx-auto mt-2" />
              </div>

              {/* Description */}
              <ul className="space-y-4 mb-6">
                {selectedRole.description.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 rounded-lg bg-[#00bbff08] hover:bg-[#00bbff14] transition hover:translate-x-1"
                  >
                    <div className="mr-4 text-[#0bf]">
                      <PlayCircle />
                    </div>
                    <span className="text-[1.1rem] text-[#2c3e50] leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-auto pt-5 border-t border-black/5 flex flex-wrap gap-3">
                {selectedRole.tags &&
                  selectedRole.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-semibold text-[#0bf]
                      bg-gradient-to-br from-[#e6f7ff] to-[#f0f9ff] shadow"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="text-center mt-10">
  <SectionHeading title=" Career Assistance Services" />


        <div className="flex justify-center">
          <Image
            src="/casdevops.png"
            alt="devops-learning-path"
            width={1200}
            height={600}
            className="mt-[-.5rem] mb-[1rem] scale-115"
          />
        </div>
      </div>
    </>
  );
};

export default DevopsDailyKra;