import React, { useState, useEffect } from "react";
import {CheckCircle} from "lucide-react";
import TechnologiesSection from "./devopstechstats/devopstechstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const techData = [
  { category: "Cloud Platforms and AI", items: ["AWS", "PyTorch", "Moogsoft"] },
  { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Istio"] },
  { category: "CI/CD & Automation", items: ["Jenkins", "GitLab CI/CD", "FluxCD"] },
  { category: "Infrastructure as Code (IaC)", items: ["Terraform", "AWS CloudFormation", "Ansible"] },
];

const devopsskills = [
  "DevOps Methodology",
  "Continuous Integration",
  "Continuous Delivery",
  "Configuration Management",
  "Containerization",
  "DevOps on AWS",
  "Source Control",
  "Deployment Automation",
  "Cloud Platforms",
  "DevSecOps",
  "Version Control Systems (VCS)",
  "Infrastructure as Code (IaC)",
  "Azure DevOps",
  "Serverless Architecture",
  "Infrastructure Provisioning",
  "Microservices",
  "Logging and Monitoring",
  "Orchestration",
  "GitOps Tools",
  "AI-Driven Automation",
];

const ToolsFramework = () => {
  const [activeCategory, setActiveCategory] = useState(0);
const [isMobileView, setIsMobileView] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const DevopsTools =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopstoolsimage.png";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % techData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 
useEffect(() => {
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  handleResize(); // 👈 IMPORTANT: set initial value after mount

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const visibleSkills =
    isMobileView && !showAllSkills
      ? devopsskills.slice(0, 5)
      : devopsskills;

  return (
    <>
      {/* TOOLS SECTION */}
      <div className="max-w-[1200px] w-full mx-auto px-4 py-8 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] mt-12">
        
        {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-[-1rem] relative animate-[fadeInUp_0.8s_ease_forwards]">
          Tools & Technologies
          <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
        </h2> */}

        <SectionHeading title="Tools & Technologies" />

        <div className="flex justify-center flex-wrap gap-4 my-4">
          {techData.map((section, index) => (
            <div
              key={section.category}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-all duration-300 border-2 ${
                activeCategory === index
                  ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white border-[#0bf] shadow-[0_4px_12px_rgba(0,187,255,0.25)]"
                  : "bg-[#e6eeff] text-[#2d3748] border-transparent hover:bg-[#d0e1ff] hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(0,187,255,0.15)]"
              }`}
            >
              {section.category}
            </div>
          ))}
        </div>

        <div className="relative min-h-[300px] max-[480px]:min-h-0">
          <div className="max-w-[1200px]  w-full mx-auto">
            <img
              src={DevopsTools}
              alt="DevOps Tools"
              className="w-[1200px] h-auto max-[480px]:w-[400px] max-[480px]:mx-auto max-[480px]:p-4 max-[480px]:scale-110"
            />
          </div>
        </div>
      </div>

      <TechnologiesSection />

      {/* SKILLS SECTION */}
       
      <SectionHeading title="20+ Skills Covered"/>

      <div className="px-4 py-0 text-center mt-0">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 mt-8 mb-12 max-w-[1200px] mx-auto max-[768px]:grid-cols-1 max-[768px]:gap-4">
          
          {visibleSkills.map((skill, index) => (
            <div
              key={skill}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="relative flex items-center px-6 py-5 bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden opacity-0 animate-[fadeInUp_0.5s_ease_forwards] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(11,191,255,0.15)]"
            >
              <div className="mr-4 text-[#0bf] text-[1.8rem] flex-shrink-0">
                <CheckCircle />
              </div>

              <p className="text-[1.1rem] font-medium text-[#1a365d] text-left m-0">
                {skill}
              </p>

              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(11,191,255,0.1)] to-transparent transition-all duration-700 hover:left-[100%]" />
            </div>
          ))}
        </div>

        {isMobileView && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white px-7 py-3 text-base font-semibold rounded-full shadow-[0_5px_15px_rgba(11,191,255,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,191,255,0.4)] active:translate-y-0"
          >
            {showAllSkills ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </>
  );
};

export default ToolsFramework;