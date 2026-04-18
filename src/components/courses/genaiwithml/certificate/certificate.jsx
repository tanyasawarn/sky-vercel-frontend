"use client";
import React, { useState } from "react";

const FormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-[95%] max-w-3xl bg-white rounded-lg overflow-hidden">
        <button
          className="absolute top-3 right-3 text-black font-bold text-lg"
          onClick={onClose}
        >
          X
        </button>
        <iframe
          aria-label="Request A Callback"
          frameBorder="0"
          className="w-full h-[700px] border-none"
          src="https://forms.zohopublic.in/skillfyme11/form/GenAIWithMLCALLBACKFORM/formperma/GrBi_iIgonj_98FP-Ng1rTEpB7AYO2xxg9XfxP0zZ-A"
        ></iframe>
      </div>
    </div>
  );
};

const GenAICertificate = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-4 rounded-xl px-4 py-8 font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]">
      
      <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden">
        
        {/* Header */}
        <div className="text-center px-8 pt-12 pb-4 bg-gradient-to-br from-[#00bbff] to-[#1a365d] text-white md:pt-16 md:pb-6">
          <h2 className="text-[1.8rem] md:text-[2.3rem] font-bold mb-4 tracking-[-0.5px] w-[98%] mx-auto px-1 md:px-0">
            Become a Certified GenAI With Machine Learning Professional
          </h2>

          <div className="w-20 h-1 bg-white/70 mx-auto mb-5 rounded"></div>

          <p className="text-[1.1rem] opacity-90 max-w-[600px] mx-auto font-light">
            Validate your expertise with industry-recognized certification
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 md:flex-row md:p-12 md:bg-gradient-to-br md:from-[#e6f7ff] md:via-[#f0f9ff] md:to-[#e3f2fd]">
          
          {/* Text */}
          <div className="order-2 md:order-1 md:flex-1 md:pr-10">
            
            {/* Point 1 */}
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-11 text-center md:text-left">
              <div>
                <h3 className="text-[1.3rem] md:text-[1.4rem] font-semibold text-[#2d3748] mb-2">
                  Recognized Achievement
                </h3>
                <p className="text-[1rem] md:text-[1.05rem] leading-7 text-[#4a5568]">
                  At Skillfyme, we believe that learning is a journey. Our certification program is a testament to your commitment and achievement. Completing our program not only provides you with a recognized certificate but also equips you with valuable skills and knowledge.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-11 text-center md:text-left">
              <div>
                <h3 className="text-[1.3rem] md:text-[1.4rem] font-semibold text-[#2d3748] mb-2">
                  Industry-Relevant Curriculum
                </h3>
                <p className="text-[1rem] md:text-[1.05rem] leading-7 text-[#4a5568]">
                  Our SME has developed a curriculum covering crucial topics and industry trends, ensuring you stay ahead in this technology field. Each module is crafted to establish a strong foundation while fostering critical thinking and problem-solving skills.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex flex-col md:flex-row items-start mb-8 md:mb-11 text-center md:text-left">
              <div>
                <h3 className="text-[1.3rem] md:text-[1.4rem] font-semibold text-[#2d3748] mb-2">
                  Practical Skills Focus
                </h3>
                <p className="text-[1rem] md:text-[1.05rem] leading-7 text-[#4a5568]">
                  We emphasize practical skills through hands-on projects and real-world applications. This approach not only enhances your understanding but also prepares you for the challenges of the job market.
                </p>
              </div>
            </div>

          </div>

          {/* Image Section */}
          <div className="order-1 md:order-2 md:flex-1 text-center mt-8 md:mt-0 md:pl-4">
            
            <div className="relative mb-6 rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
              <img
                src="/genaiwithmlcertificate.png"
                alt="DevOps Certification"
                loading="lazy"
                className="block w-full h-auto mt-[10px] ml-[6px] mr-[-7px] mb-[-10px] transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-br from-[#00bbff] to-[#1a365d] text-white px-8 py-4 text-[1.1rem] font-semibold rounded-full shadow-[0_4px_15px_rgba(102,126,234,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(102,126,234,0.4)] w-full md:w-auto"
            >
              Start Your Certification Journey
            </button>

          </div>

        </div>
      </div>

      {showForm && <FormModal onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default GenAICertificate;