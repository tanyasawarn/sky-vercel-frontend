import React from "react";

const Certificate = () => {
  return (
    <div className="flex flex-col items-center bg-transparent max-w-[1200px] mx-auto mb-4">
      
      {/* Header */}
      <div className="text-center mt-8 mb-5">
        <h2 className="relative text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold mb-0 md:mb-[2.2rem] text-transparent bg-clip-text bg-gradient-to-br from-[#0bf] to-[#1a365d] drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
          Become a Certified DevOps Professional
          
          {/* Underline */}
          <span className="absolute left-[37%] top-full w-[80px] h-[4px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center md:items-start ml-[1.7rem]">
        
        {/* Text */}
        <div className="max-w-[600px] md:max-w-[50%] md:mr-5">
          <p className="text-[1rem] lg:text-[1.1rem] text-[#192f60] font-normal text-justify md:text-left leading-[1.6] mb-[10px] mr-6">
            At Skillfyme, we believe that learning is a journey. Our certification program is a testament to your commitment and achievement. Completing our program not only provides you with a recognized certificate but also equips you with valuable skills and knowledge.
          </p>
          <p className="text-[1rem] lg:text-[1.1rem] text-[#192f60] font-normal text-justify md:text-left leading-[1.6] mb-[10px] mr-6">
            Our SME has developed a curriculum covering crucial topics and industry trends, ensuring you stay ahead in this technology field. Each module is crafted to establish a strong foundation while fostering critical thinking and problem-solving skills.
          </p>
          <p className="text-[1rem] lg:text-[1.1rem] text-[#192f60] font-normal text-justify md:text-left leading-[1.6] mb-[10px] mr-6">
            We emphasize practical skills through hands-on projects and real-world applications. This approach not only enhances your understanding but also prepares you for the challenges of the job market.
          </p>
          <p className="text-[1rem] lg:text-[1.1rem] text-[#192f60] font-normal text-justify md:text-left leading-[1.6] mb-[10px] mr-6">
            Our certificate will make you technically sound and help you crack your opportunities in the real world with complete ease.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full md:max-w-[50%] md:ml-5">
          <img
            src="https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/DevopsCertificate.svg"
            alt="Certificate"
            loading="lazy"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Certificate;