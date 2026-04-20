"use client";
import React, { useState } from "react";

const tabs = [
  "Training",
  "Curriculum Relevance",
  "Career Outcomes",
  "Certification & Placement Support",
];

const faqs = {
  Training: [
    {
      q: "What is the duration of the program?",
      a: "The program runs for 4 months with weekend classes (3 hours per session).",
    },
    {
      q: "What is the class format?",
      a: (
        <>
          <p>Mode: Live (majority) + Self-paced (select topics).</p>
          <p>Schedule: Weekends, 3 hours each.</p>
          <p>Support: Recorded sessions, doubt-clearing, and mentorship.</p>
        </>
      ),
    },
    {
      q: "What if I miss a class?",
      a: "All sessions are recorded and uploaded. You'll also receive assignments, notes, and doubt-clearing sessions to stay on track.",
    },
    {
      q: "Is there a refund policy?",
      a: "Yes. We offer a 100% refund within 3 days of enrollment. After 3 days, no refunds will be issued.",
    },
    {
      q: "Do I need to know Python, Statistics, or ML before joining?",
      a: (
        <>
          <p>No. We cover all prerequisites in class (Python, Statistics, ML basics).</p>
          <ul className="list-disc pl-6">
            <li>Beginners can learn from scratch.</li>
            <li>Experienced professionals can use it as a quick refresher.</li>
          </ul>
        </>
      ),
    },
    {
      q: "What kind of learner support is provided?",
      a: (
        <ul className="list-disc pl-6">
          <li>Dedicated Slack/Discord community</li>
          <li>1:1 mentorship and doubt clearing</li>
          <li>Career guidance, resume reviews, and interview prep</li>
        </ul>
      ),
    },
    {
      q: "What is the certification policy?",
      a: "On completion, you'll receive a Skillfyme Certification in Generative AI, LLMs & Agentic AI, validating your applied, job-ready skills.",
    },
  ],
  "Curriculum Relevance": [],
  "Career Outcomes": [],
  "Certification & Placement Support": [],
};

const GenaiFaq = () => {
  const [activeTab, setActiveTab] = useState("Training");
  const [openIndex, setOpenIndex] = useState(null);
  const [tabChanging, setTabChanging] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setTabChanging(true);
    setOpenIndex(null);

    setTimeout(() => {
      setActiveTab(tab);
      setTabChanging(false);
    }, 300);
  };

  return (
    <div className="relative max-w-[1200px] w-full mx-auto mt-4 mb-8 rounded-xl py-8 bg-[radial-gradient(ellipse_at_top,_#f0f9ff,_#e6f7ff)]">
      
      <h2 className="text-center text-[2.5rem] font-bold text-[#1a365d] mb-6 relative">
        Frequently{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
          Asked Questions
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[4px] w-[100px] bg-gradient-to-r from-blue-500 to-blue-300 rounded"></span>
      </h2>

      <div className="max-w-[1000px] mx-auto px-6 py-12 rounded-[24px] bg-white/90 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-md relative overflow-hidden">
        
        <div className="text-center mb-10">
          <p className="text-[#64748b] text-[1.1rem] max-w-[600px] mx-auto">
            Find answers to common questions about our program
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`relative px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg -translate-y-[2px]"
                  : "bg-white/70 text-gray-600 hover:-translate-y-[3px] hover:shadow-lg hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[30px] h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded"></span>
              )}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div>
          <h3 className="text-[1.5rem] font-bold text-[#1e293b] mb-6 pl-2 relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[24px] bg-gradient-to-b from-blue-500 to-blue-400 rounded"></span>
            About {activeTab}
          </h3>

          <div className={`flex flex-col gap-5 transition ${tabChanging ? "opacity-50" : ""}`}>
            {faqs[activeTab]?.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border bg-white shadow transition-all ${
                  openIndex === index
                    ? "border-blue-400 shadow-lg -translate-y-[2px]"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6 font-semibold text-[#1e293b]"
                >
                  <span className="flex gap-3">
                    <span className="text-blue-500 font-bold">
                      {index + 1}.
                    </span>
                    {item.q}
                  </span>

                  <span
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180 text-blue-500" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-[#475569] leading-7">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenaiFaq;