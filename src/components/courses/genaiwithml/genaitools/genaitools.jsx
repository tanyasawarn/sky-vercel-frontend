"use client";

import React, { useState, useEffect, useRef } from "react";
import {CheckCircle} from "lucide-react";

const GenaimlToolsFrameworks = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const sectionRef = useRef(null);

  const toolsFrameworksImage =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/genaitools.png";

  const skills = [
    "Python Programming",
    "Agentic AI systems",
    "Model performance monitoring",
    "Retraining automation",
    "Model versioning",
    "Multi-cloud integration",
    "Metrics monitoring",
    "MLOps pipeline design",
    "RAG architecture",
    "LLM fine-tuning",
    "Cost optimization",
    "Workflow orchestration",
    "Model registry",
    "Vector retrieval",
    "LLM lifecycle management",
    "Model deployment",
    "Advanced deployments",
    "CI/CD automation",
    "Hyperparameter tuning",
    "Feature engineering",
    "MLFlow",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id && !animatedItems.includes(id)) {
              setAnimatedItems((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll("[data-id]");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, [animatedItems]);

  const visibleSkills =
    isMobileView && !showAllSkills ? skills.slice(0, 5) : skills;

  return (
    <div
      className="max-w-[1200px] mx-auto px-4"
      ref={sectionRef}
    >
      {/* HERO */}
      <div className="relative text-center my-8 p-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100">

        {/* Floating Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[100px] h-[100px] top-[10%] left-[10%] rounded-full opacity-30 blur-2xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse hidden md:block" />
          <div className="absolute w-[80px] h-[80px] top-[60%] right-[15%] rounded-full opacity-30 blur-2xl bg-gradient-to-br from-blue-900 to-sky-400 animate-pulse hidden md:block" />
          <div className="absolute w-[120px] h-[120px] bottom-[10%] left-[20%] rounded-full opacity-30 blur-2xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse hidden md:block" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-sky-400 bg-clip-text text-transparent">
            Tools, Languages & Frameworks
          </h2>

          <div className="relative inline-block">
            <img
              src={toolsFrameworksImage}
              alt="Tools"
              className="rounded-lg max-w-full scale-95"
            />
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="py-10 text-center">
         <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center py-2.5 px-2">
         20+ Skills{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          Covered
        </span>
         <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-2 rounded"></span>
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              data-id={`skill-${index}`}
              style={{ animationDelay: `${index * 0.05}s` }}
              className={`relative flex items-center p-5 bg-white rounded-xl shadow transition-all duration-300 overflow-hidden
              ${
                animatedItems.includes(`skill-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }
              hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-sky-400 text-2xl mr-4">
                <CheckCircle />
              </div>

              <p className="text-blue-900 text-base font-medium text-left">
                {skill}
              </p>

              {/* Hover shine */}
              <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-sky-200/30 to-transparent transition-all duration-700 group-hover:left-full"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        {isMobileView && (
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="relative px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-sky-400 to-blue-900 shadow-lg hover:-translate-y-1 transition-all"
          >
            {showAllSkills ? "View Less" : "View More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default GenaimlToolsFrameworks;