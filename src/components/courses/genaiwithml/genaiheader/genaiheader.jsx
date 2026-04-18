"use client";

import React, { useState, useContext } from "react";
import Downloadcurri from "../../../common/downloadbrochure/downloadbrochure";
import Enrollment from "../../../common/enrollmentform/enrollmentform";
import {CheckCircle} from "lucide-react";
import Stats from "../../../common/Stats/Stats";
import { UserContext } from "@/context/usercontext";

const Header = () => {
  const genAIStats = [
    { value: "6 Months", description: "100% Live Session" },
    { value: "60%", description: "Average Salary Hike" },
    { value: "100%", description: "Placement assistance till 1.5 years" },
    { value: "60 LPA", description: "Average super-dream job CTC" },
  ];

  const genAIStatsInternationalLearners = [
    { value: "6 Months", description: "100% Live Sessions" },
    { value: "Hands-On", description: "Real-world GenAI projects & case studies" },
    { value: "Global Skills", description: "Build job-ready AI skills for any market" },
    { value: "Lifetime Access", description: "Ongoing community & learning resources" },
  ];

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const { userCountry } = useContext(UserContext);

  const genaiBackgroundImage =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/genAIbanner.png";
  const genaiBackgroundImageMobile =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/genaimobilebanner.png";

  const handleEnrollClick = () => {
    setFormKey((prev) => prev + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => setIsFormVisible(false);

  const handleBrochureClick = () => {
    setFormKey((prev) => prev + 1);
    setIsDownloadVisible(true);
  };

  const handleCloseDownload = () => setIsDownloadVisible(false);

  const statsToShow =
    userCountry === "IN" ? genAIStats : genAIStatsInternationalLearners;

  return (
    <>
      <div className="w-full relative overflow-hidden flex justify-center items-center px-8 py-12 border-b border-[#d0e8ff] bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd]">

        {/* Background radial effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(173,216,230,0.2)_0%,transparent_20%),radial-gradient(circle_at_80%_20%,rgba(135,206,250,0.2)_0%,transparent_20%),radial-gradient(circle_at_40%_40%,rgba(176,224,230,0.1)_0%,transparent_30%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-8 text-[1.6rem]">

          {/* LEFT TEXT */}
          <div className="flex-1 p-4 animate-[fadeInUp_0.8s_ease-out] w-full">

            <h1 className="text-[2rem] md:text-[3rem] font-extrabold mb-6 text-center md:text-left leading-tight text-[#2c3e50]">
              <span className="bg-gradient-to-r from-[#1e88e5] to-[#0288d1] bg-clip-text text-transparent">
                GenAI With ML
              </span>
              <br />
              Masters Course
            </h1>

            <p className="text-center md:text-left text-[#546e7a] text-[0.9rem] md:text-[1.25rem] leading-relaxed mb-6 max-w-full md:max-w-[90%]">
              Transform Your Career With Our Advanced GenAI and ML Curriculum
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-left">
              {[
                "100% Live Classes",
                "6 Months",
                "20+ Case Studies",
                "10+ Tools Covered",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/70 rounded-xl border border-[#e1f5fe] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <CheckCircle className="text-[#039be5] bg-[#e1f5fe] rounded-full p-[4px]" />
                  <span className="text-sm md:text-base text-black">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={handleBrochureClick}
                className="min-w-[130px] px-5 py-2.5 rounded-full border-2 border-[#0288d1] text-[#0288d1] text-sm font-bold shadow-md hover:bg-[#0288d1]/10 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Download Brochure
              </button>

              <button
                onClick={handleEnrollClick}
                className="min-w-[150px] px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0288d1] to-[#02669d] text-white text-sm font-bold shadow-md hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">
            <img
              src={genaiBackgroundImage}
              alt="GenAI"
              className="hidden md:block w-[90%] ml-32 max-w-[1200px] scale-125 drop-shadow-xl"
            />
            <img
              src={genaiBackgroundImageMobile}
              alt="GenAI Mobile"
              className="block md:hidden w-full"
            />
          </div>
        </div>

        {/* MODALS */}
        {isFormVisible && (
          <Enrollment
            key={formKey}
            onClose={handleCloseForm}
            courseName="GenAI With ML Masters Program"
            paymentRoute="/genaiwithmlcoursepayment"
          />
        )}

        {isDownloadVisible && (
          <Downloadcurri
            showForm={true}
            pdfPath="/GenAI-with-ML_Masters_Program_Brochure.pdf"
            courseName="GenAI With ML"
            buttonText="Download Curriculum"
            onClose={handleCloseDownload}
          />
        )}
      </div>

      {/* STATS */}
      <div className="mt-6">
        <Stats statsData={statsToShow} variant="genai" />
      </div>
    </>
  );
};

export default Header;