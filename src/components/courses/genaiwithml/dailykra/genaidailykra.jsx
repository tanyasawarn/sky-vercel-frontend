"use client";
import React, { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";

const genaiDailyKraRoles = [
  {
    title: "Machine Learning Engineer",
    description: [
      "Build, train, and evaluate ML models using real-world datasets.",
      "Deploy ML pipelines on cloud (AWS, Azure, GCP) for scalability.",
      "Automate feature engineering and preprocessing workflows.",
      "Monitor model performance, retrain when accuracy drops.",
      "Collaborate with data engineers and software teams to integrate ML into products.",
    ],
  },
  {
    title: "NLP Engineer",
    description: [
      "Process, clean, and analyze text datasets.",
      "Build NLP pipelines for tokenization, embeddings, and text classification.",
      "Train and fine-tune language models for tasks like NER, sentiment, and summarization.",
      "Integrate NLP models into chatbots, search, or recommendation systems.",
      "Optimize pipelines for low latency and multilingual support.",
    ],
  },
  {
    title: "Generative AI Engineer",
    description: [
      "Experiment with GANs, VAEs, and diffusion models for image/audio/text generation.",
      "Fine-tune foundation models for creative use cases.",
      "Work on prompt optimization for better output quality.",
      "Ensure responsible AI practices (bias detection, content safety).",
      "Collaborate with product teams to embed GenAI into user-facing applications.",
    ],
  },
  {
    title: "AI Application Developer",
    description: [
      "Build end-to-end AI-powered web or mobile apps.",
      "Integrate APIs, SDKs, and LLM frameworks into applications.",
      "Implement chatbots, recommendation engines, or AI copilots.",
      "Work with UX teams to design AI-first user experiences.",
      "Ensure performance, scalability, and real-time AI responses.",
    ],
  },
  {
    title: "Agentic AI Engineer",
    description: [
      "Design and develop AI agents that can reason, plan, and act.",
      "Work with LangChain, LangGraph, Autogen, CrewAI, or Phidata frameworks.",
      "Build multi-agent systems for workflows like research, coding, or automation.",
      "Implement observability, debugging, and AgentOps practices.",
      "Optimize agents for collaboration, memory, and task efficiency.",
    ],
  },
  {
    title: "AI Solutions Architect",
    description: [
      "Design enterprise AI solutions and system architectures.",
      "Choose appropriate ML/LLM frameworks and cloud services.",
      "Ensure scalability, performance, and security of AI systems.",
      "Guide cross-functional teams (data scientists, engineers, DevOps).",
      "Translate business needs into AI-driven technical solutions.",
    ],
  },
  {
    title: "AI Product Manager",
    description: [
      "Define AI product vision, roadmap, and business goals.",
      "Translate user/business requirements into AI features.",
      "Collaborate with engineering teams to build and launch AI products.",
      "Track KPIs and product performance metrics.",
      "Ensure ethical, responsible AI deployment.",
    ],
  },
  {
    title: "AI Consultant",
    description: [
      "Advise clients on AI adoption strategy and roadmap.",
      "Assess feasibility and ROI of AI initiatives.",
      "Recommend tech stacks, tools, and platforms for AI projects.",
      "Lead workshops and training for client teams.",
      "Ensure compliance with data privacy and AI ethics standards.",
    ],
  },
  {
    title: "Applied AI Scientist",
    description: [
      "Research and prototype advanced AI/ML models for practical problems.",
      "Test new algorithms and benchmark against existing ones.",
      "Publish applied research in whitepapers or journals.",
      "Work on domain-specific applications (healthcare, finance, retail).",
      "Bridge the gap between research and production deployment.",
    ],
  },
];

const GenaiDailyKra = () => {
  const [selectedRole, setSelectedRole] = useState(genaiDailyKraRoles[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className="relative max-w-[1200px] mx-auto w-full px-6 py-12 rounded-xl overflow-hidden bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] font-sans">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[300px] h-[300px] top-[5%] -left-[50px] rounded-full opacity-15 bg-gradient-to-br from-[rgba(0,187,255,0.25)] to-[rgba(26,54,93,0.2)] animate-float"></div>

        <div className="absolute w-[200px] h-[200px] bottom-[-40px] right-[10%] rounded-full opacity-15 bg-gradient-to-br from-[rgba(255,102,0,0.18)] to-[rgba(255,153,0,0.16)] animate-float delay-[-5s]"></div>

        <div className="absolute w-[150px] h-[150px] top-[45%] left-[78%] rounded-full opacity-15 bg-gradient-to-br from-[rgba(29,40,150,0.18)] to-[rgba(0,187,255,0.12)] animate-float delay-[-10s]"></div>
      </div>

      {/* Heading */}

      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center py-2.5 px-2">
        What Does Day to Day{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          Look Like?
        </span>
      </h2>
      <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-0 mb-2 rounded"></span>

      {/* Content */}
      <div className="flex gap-8 relative z-10 items-start max-w-[1400px] mx-auto lg:flex-row flex-col">
        {/* LEFT */}
        <div className="flex flex-col lg:w-[350px] w-full">
          {/* dots */}
          <div className="flex justify-center gap-2 mb-5">
            {genaiDailyKraRoles.map((_, index) => (
              <div
                key={index}
                onClick={() =>
                  handleRoleSelect(genaiDailyKraRoles[index], index)
                }
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-[#0bf] scale-125"
                    : "bg-gray-300 hover:bg-[#1a365d]"
                }`}
              />
            ))}
          </div>

          {/* roles list */}
          <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 lg:flex-col flex-row lg:overflow-y-auto overflow-x-auto">
            {genaiDailyKraRoles.map((role, index) => (
              <div
                key={index}
                onClick={() => handleRoleSelect(role, index)}
                className={`flex items-center p-5 rounded-[15px] cursor-pointer relative overflow-hidden transition-all duration-200 shadow-md min-w-[260px] lg:min-w-0
                ${
                  selectedRole.title === role.title
                    ? "bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white shadow-lg"
                    : "bg-white/90 hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {/* icon */}
                <div className="relative mr-4 w-10 h-10 flex items-center justify-center">
                  <div
                    className={`absolute w-full h-full rounded-full transition-all ${
                      selectedRole.title === role.title
                        ? "bg-white/20 scale-100"
                        : "bg-[#0bf]/10 scale-0 group-hover:scale-100"
                    }`}
                  />
                  <span
                    className={`font-bold text-[1.05rem] z-10 ${
                      selectedRole.title === role.title
                        ? "text-white"
                        : "text-[#0bf]"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                <span className="flex-1 font-semibold text-[1.05rem]">
                  {role.title}
                </span>

                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    selectedRole.title === role.title
                      ? "bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={`flex-1 transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-5" : "opacity-100"
          }`}
        >
          <div className="bg-white/95 rounded-[20px] p-10 shadow-2xl backdrop-blur border border-white/60 relative flex flex-col h-full">
            {/* left border */}
            <div className="absolute left-0 top-0 w-[5px] h-full bg-gradient-to-br from-[#0bf] to-[#1a365d]" />

            {/* header */}
            <div className="mb-6">
              <h3 className="text-[2.2rem] font-extrabold bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text">
                {selectedRole.title}
              </h3>
              <div className="w-[80px] h-[5px] mt-2 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d]" />
            </div>

            {/* list */}
            <div className="mb-6">
              <ul>
                {selectedRole.description.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start mb-5 p-4 rounded-lg bg-[#0bf]/5 hover:bg-[#0bf]/10 transition hover:translate-x-1"
                  >
                    <div className="mr-4 text-[#0bf] min-w-[28px] flex justify-center">
                      <PlayCircle fontSize="medium" />
                    </div>
                    <span className="text-[1.1rem] leading-[1.6] text-[#2c3e50]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* footer */}
            <div className="mt-auto pt-5 border-t border-black/5">
              <div className="flex gap-3 flex-wrap">
                {["AI", "Tech", "Innovation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-semibold rounded-full text-[#0bf] bg-gradient-to-br from-[#e6f7ff] to-[#f0f9ff] shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenaiDailyKra;
