"use client";

import React, { useState } from "react";
import {PlayCircle} from "lucide-react";

const GenAICurriculum = () => {
 
    const curriculumData = [
    {
      title: "Python & Statistics Essentials",
      fullTitle: "Module 1 : Python & Statistics Essentials",
      subtopics: [
        "Class 1: Python Programming Fundamentals",
        "Class 2: Data Structures, Control Flow, and File Operations",
        "Class 3A: Functions For Python",
        "Class 3B: Object-Oriented Programming For Python",
        "Class 3C:  Exception Handling For Python",
        "Class 4A: Data Analysis",
        "Class 4B: Data Visualization",
        "Class 5: Case Studies ",
      ],
    },
    {
      title: "Machine Learning",
      fullTitle: "Module 2 : Applied Machine Learning",
      subtopics: [
        "Class 1: Data Pre-processing and Feature Engineering",
        "Class 2: Supervised Learning – Regression",
        "Class 3: Supervised Learning – Classification",
        "Class 4: Unsupervised Learning",
        "Class 5: Clustering Algorithms & Dimensionality Reduction",
        "Class 6: Ensemble Learning",
        "Self-paced: Time Series Analysis & Reinforcement Learning",
        "Self-paced: Recommender Systems",
        "Note: Why are these topics considered self-paced and less important now that LLMs are emerging in the market?",
      ],
    },
    {
      title: "Deep Learning & Neural Networks",
      fullTitle: "Module 3 : Deep Learning & Neural Network Architectures",
      subtopics: [
        "Class 1: Neural Networks & Deep Learning Foundations",
        "Class 2: Tuning & Optimizing Deep Neural Networks",
        "Class 3: Convolutional Neural Networks – I",
        "Class 4: Convolutional Neural Networks – II",
        "Self-paced: Recurrent Neural Networks",
        "Self-paced: Long Short-Term Memory (LSTM) Networks",
      ],
    },
    {
      title: "Natural Language Processing",
      fullTitle: "Module 4 : Natural Language Processing (NLP)",
      subtopics: [
        "Class 1: Introduction to NLP",
        "Class 2: Text Processing & Feature Engineering",
        "Class 3: Named Entity Recognition (NER) & Parsing",
        "Class 4: Tokenization & Text Encoding",
        "Class 5: Sentiment Analysis Essentials",
        "Class 6: Advanced Sentiment Analysis",
        "Class 7: Neural Language Models",
        "Class 8: Machine Translation",
        "Class 9: Speech & Multimodal NLP",
      ],
    },
    {
      title: "Generative AI Essentials",
      fullTitle: "Module 5 : Generative AI Essentials & Prompt Engineering",
      subtopics: [
        "Class 1: Introduction to Generative AI",
        "Class 2: Autoencoders & GANs",
        "Class 3: Transformers & Attention Mechanism",
        "Class 4: Small Language Models",
        "Class 5: Prompt Engineering Essentials",
        "Class 6: Advanced Prompting Strategies",
      ],
    },
    {
      title: "LLM-based Application Development",
      fullTitle: "Module 6 : LLM-based Application Development",
      subtopics: [
        "Class 1: Introduction to Large Language Models (LLMs)",
        "Class 2: Open Source LLMs & Model Variants",
        "Class 3: Vector Databases",
        "Class 4: Retrieval-Augmented Generation (RAG) Techniques",
        "Class 5: LLM Frameworks & Development",
        "Class 6: LLM Application Development",
        "Class 7: Fine-tuning & Model Adaptation",
        "Class 8: Generative AI Application Deployment",
        "Class 9: LLM Caching & Routing Techniques",
        "Class 10: Evaluation, Metrics, and Responsible AI for LLMs",
      ],
    },
    {
      title: "Agentic AI & LLMOps",
      fullTitle: "Module 7 : Agentic AI & LLMOps for Scalable AI Systems",
      subtopics: [
        "Class 1: Agentic AI Essentials",
        "Class 2: Architectures & Design Patterns",
        "Class 3: Working with LangChain & LCEL",
        "Class 4: Building AI Agents with LangGraph",
        "Class 5: Implementing Agentic RAG",
        "Class 6: Developing AI Agents with Phidata",
        "Class 7: Multi-Agent Systems with LangGraph & CrewAI",
        "Class 8: Advanced Agent Development with Autogen",
        "Class 9: AI Agent Observability & AgentOps",
        "Class 10: RAG Architecture with Vector DBs",
        "Class 11: Continuous Integration, Deployment & Scaling LLMs (CI/CD & Scaling)",
      ],
    },
  ];

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModuleChange = (index) => {
    if (isAnimating) return;

    if (index === activeModuleIndex) {
      setActiveModuleIndex(null);
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setActiveModuleIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  return (
    <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 p-6 shadow-xl">

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-[300px] h-[300px] -top-[150px] -left-[150px] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] bottom-[20%] right-[10%] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse" />
        <div className="absolute w-[150px] h-[150px] top-[30%] left-[10%] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse" />
        <div className="absolute w-[250px] h-[250px] -bottom-[100px] -right-[100px] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-sky-400 to-blue-900 animate-pulse" />
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-center text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        <span className="bg-gradient-to-r from-sky-400 to-blue-900 bg-clip-text text-transparent">
          Course
        </span>{" "}
        Modules
      </h2>

      <div className="relative z-10 flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <div className="flex flex-col gap-4 w-full lg:max-w-[400px]">
          {curriculumData.map((module, index) => (
            <div
              key={index}
              onClick={() => handleModuleChange(index)}
              className={`relative cursor-pointer rounded-xl border p-4 backdrop-blur-md transition-all duration-300 
                ${index === activeModuleIndex
                  ? "bg-gradient-to-br from-sky-100 to-blue-100 border-sky-400 shadow-lg -translate-y-1"
                  : "bg-white/70 border-sky-200 hover:shadow-md hover:-translate-y-1"
                }`}
            >

              <div className="flex gap-4 items-center">
                <div className={`text-2xl font-extrabold min-w-[40px] 
                  ${index === activeModuleIndex ? "text-sky-400" : "text-blue-900/20"}`}>
                  0{index + 1}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-blue-900">
                    {module.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-[80px] h-[4px] bg-blue-900/20 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-900 transition-all duration-500"
                        style={{
                          width:
                            index === activeModuleIndex ? "100%" : "0%",
                        }}
                      />
                    </div>
                    <span className="text-xs text-blue-900/60">
                      {module.subtopics.length} Topics
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Details */}
              {index === activeModuleIndex && (
                <div className="mt-4 block lg:hidden bg-white/80 border border-sky-200 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">
                    {module.fullTitle}
                  </h4>

                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-900 text-white mb-3">
                    {module.subtopics.length} Classes
                  </span>

                  <div className="grid gap-2">
                    {module.subtopics.map((topic, i) => (
                      <div key={i} className="flex gap-2 bg-white p-2 rounded-lg shadow">
                        <PlayCircle className="text-sky-400" />
                        <div className="text-sm text-blue-900 flex flex-col">
                          {topic}
                          {topic.includes("Self-paced") && (
                            <span className="text-[10px] mt-1 px-2 py-[2px] bg-sky-100 border border-sky-300 rounded-full w-fit">
                              Self-paced
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="flex-1 hidden lg:block">
          {activeModuleIndex !== null && (
            <div className={`${isAnimating ? "opacity-0" : "opacity-100"} transition-opacity duration-300 mt-10`}>

              <div className="flex justify-between items-center mb-6 px-2">
                <h3 className="text-xl font-semibold text-blue-900">
                  {curriculumData[activeModuleIndex].fullTitle}
                </h3>

                <div className="px-4 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r from-sky-400 to-blue-900">
                  {curriculumData[activeModuleIndex].subtopics.length} Classes
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-sky-200 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">

                  {curriculumData[activeModuleIndex].subtopics.map((topic, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-white rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition">

                      <PlayCircle className="text-sky-400" />

                      <div className="text-sm text-blue-900 flex flex-col">
                        {topic}
                        {topic.includes("Self-paced") && (
                          <span className="text-xs mt-1 px-2 py-[2px] bg-sky-100 border border-sky-300 rounded-full w-fit">
                            Self-paced
                          </span>
                        )}
                      </div>

                    </div>
                  ))}

                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default GenAICurriculum;