"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const objectives = [
  {
    title: "Master Python & Data Foundations",
    description:
      "Develop strong programming, statistics, and visualization skills to handle data workflows for AI/ML projects.",
  },
  {
    title: "Building & Optimizing Machine Learning Models",
    description:
      "Learn supervised, unsupervised, and ensemble techniques to design, evaluate, and improve predictive models.",
  },
  {
    title: "Deep Learning & Computer Vision",
    description:
      "Implement and optimize neural networks and CNNs for image recognition, transfer learning, and advanced tasks.",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Gain expertise in tokenization, embeddings, NER, sentiment analysis, and machine translation using modern language models.",
  },
  {
    title: "Generative AI & Prompt Engineering",
    description:
      "Understand transformers, GANs, and autoencoders, while mastering prompt engineering strategies for LLMs.",
  },
  {
    title: "Working with Large Language Models (LLMs)",
    description:
      "Learn to fine-tune, adapt, and deploy open-source LLMs with RAG, vector databases, and LLM frameworks.",
  },
  {
    title: "Developing GenAI Applications",
    description:
      "Build scalable, production-ready GenAI apps, integrating caching, routing, and evaluation metrics.",
  },
  {
    title: "Agentic AI Development",
    description:
      "Design, implement, and scale AI agents with LangChain, LangGraph, CrewAI, Phidata, and Autogen.",
  },
  {
    title: "LLMOps & AI Scalability",
    description:
      "Apply CI/CD, observability, and responsible AI practices for deploying and managing enterprise-grade AI systems.",
  },
];

const GenaiLearningObjectives = () => {
  const GenAiLp =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/genaics3.png";

  return (
    <>
      {/* Heading */}

      <div className="py-10 text-center">
        <h2 className="text-[2.8rem]  text-center font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
          Learning{" "}
          <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
            Objectives
          </span>
          <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-0 rounded"></span>
        </h2>
      </div>

      {/* Objectives Section */}
      <section className="bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] p-6 md:p-12 rounded-2xl max-w-[1200px] w-full mx-auto text-center">
        <h4 className="text-[#0d47a1] text-xs md:text-sm font-semibold uppercase tracking-widest mb-6">
          WHAT YOU WILL LEARN IN GENAI WITH MACHINE LEARNING
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 text-left">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-4 border-l-4 border-blue-300 hover:border-blue-700 hover:translate-x-1 transition-all duration-300"
            >
              <span className="bg-gradient-to-br from-blue-100 to-blue-300 text-[#0d47a1] text-sm rounded-full p-2 flex items-center justify-center shadow">
                <FaArrowRight />
              </span>

              <div>
                <h3 className="text-[1rem] md:text-[1.1rem] font-semibold text-[#0d1b2a] mb-1">
                  {obj.title}
                </h3>
                <p className="text-sm text-[#37474f] leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <div className="max-w-[1200px] w-full mx-auto bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] rounded-xl mt-8 text-center">
        <h2 className="text-[2.8rem] font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
          Grow With{" "}
          <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
            Skillfyme
          </span>
          <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-0 rounded"></span>
        </h2>

        <img
          src={GenAiLp}
          alt="gen-ai-learning-path"
          className="mx-auto w-full max-w-[900px] scale-100 md:scale-125 -mt-8 md:-mt-20 p-4 hidden sm:block"
        />
      </div>

      {/* Alumni Section */}
      <div className="max-w-[1200px] w-full mx-auto my-8 p-6 bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] rounded-2xl text-center">

        <h2 className="text-[2.8rem] font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
           Our Alumni{" "}
            <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
             Works At
            </span>
             <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-2 rounded"></span>

          </h2>

       
        <img
          src="/genAIcompanies.png"
          alt="alumni-companies"
          className="w-full max-w-[900px] mx-auto block p-2"
        />
      </div>
    </>
  );
};

export default GenaiLearningObjectives;
