"use client";
import React, { useState } from "react";
import GenaiformCallbackForm from "../genaiform/genaiform";
import { genaiData } from "./genaidata";
import CourseComparison from "../../../common/courseComparison/courseComparison";


 
const GenAiCourseSection = () => {
  const features = [
    {
      title: "Your Learning, Your Pace",
      desc: "Go slow or fast: every module (Python, ML, Deep Learning, NLP, GenAI, LLMs, Agentic AI, and LLMOps) includes guided mentorship, with the option of up to 6 extra months of handholding.",
      image: "/personalisedLearning.png",
    },
    {
      title: "Showcase Work that Gets You Hired",
      desc: "Showcase your LLM apps, GenAI agents, MLOps pipelines, and ML projects on GitHub, Kaggle, and LinkedIn. Build a portfolio that stands out in AI, ML, and DevOps job markets.",
      image: "/genAIProject.png",
    },
    {
      title: "Capstone Project",
      desc: "Bring a real business problem from your office or dream company, solve it with expert project guides.",
      image: "/genAicapstoneproject.png",
    },
    {
      title: "End-to-End Career Acceleration",
      desc: "Crack top roles in AI/ML, MLOps, and GenAI with resume building, mock interviews, system design prep, personalized coaching, and soft skills training tailored to senior professionals.",
      image: "/genaicareersupport.png",
    },
  ];

  const [formKey, setFormKey] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleFormSuccess = () => {
    setFormKey((prev) => prev + 1);
  };

  const handlecallbackForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <div className="py-0 text-center">
    

       <h2 className="text-[2.8rem] font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
            GenAI With Machine Learning{" "}
            <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
               Master Program
            </span>
          </h2>
       <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-2 rounded"></span>
      </div>

      <div className="py-8 flex items-center">
        <div className="max-w-[1200px] w-full  mx-auto px-4">
          <div className="flex justify-between items-start gap-12 p-12 bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] backdrop-blur-[10px] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex-wrap">

            {/* LEFT */}
            <div className="flex-[2] min-w-[300px]">
              <h2 className="text-[2.2rem] font-bold text-[#1a365d] mb-10 relative pb-3
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:w-[60px] after:h-[4px] after:bg-gradient-to-r after:from-[#2196f3] after:to-[#64b5f6] after:rounded">
                Custom-made for every domain
              </h2>
             

              <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
                {features.map((f, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[16px] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.05)] flex flex-col gap-3 text-left transition-all duration-300 border-l-4 border-transparent"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-[#e6f7ff] to-[#c5e6ff] p-2 rounded-[12px] flex justify-center items-center">
                        <img
                          src={f.image}
                          alt={f.title}
                          className="w-[42px] h-[42px] object-contain"
                        />
                      </div>
                      <h3 className="text-[1.2rem] font-semibold text-[#1a365d]">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-[0.95rem] text-[#455a64] leading-[1.5]">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 min-w-[280px] flex flex-col gap-10 mt-[6.4rem] max-md:mt-0">
              <div className="bg-white rounded-[16px] p-8 shadow-[0_8px_20px_rgba(0,0,0,0.08)] relative overflow-hidden border border-[#e3f2fd] h-[31.2rem]">
                
                {/* top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-br from-[#00bbff] to-[#1a365d]" />

                <div>
                  <h3 className="mb-2 text-[2rem] font-bold text-[#1a365d]">
                    Still Not Sure ?
                  </h3>
                  <p className="text-[1.2rem] mb-6 text-[#455a64]">
                    Talk To Us!!
                  </p>
                </div>

                <GenaiformCallbackForm
                  showForm={showForm}
                  inline={true}
                  courseName="GenAI With ML Master Program"
                  variant="genai"
                  key={formKey}
                  onReset={() => setFormKey((prev) => prev + 1)}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <CourseComparison title="Course" data={genaiData} />
    </>
  );
};

export default GenAiCourseSection;