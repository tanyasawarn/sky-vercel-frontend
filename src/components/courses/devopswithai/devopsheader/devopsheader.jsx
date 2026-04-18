"use client";

import React, { useState } from "react";
import Enrollment from "../../../common/enrollmentform/enrollmentform";
import Downloadcurri from "../../../common/downloadbrochure/downloadbrochure";



const DevopsHeader = () => {
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);



  const devopsbackgroundimage =
    "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopsbanner1.png";

  const handleDownloadBrochure = () => {
    setBrochureDownloaded(true);
    setIsDownloadVisible(true);
    setTimeout(() => setBrochureDownloaded(false), 3000);
  };

  const handleEnrollClick = () => {
    setFormKey((prevKey) => prevKey + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleCloseDownload = () => {
    setIsDownloadVisible(false);
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] bg-[linear-gradient(90deg,#f0f7ff_0%,#e6f0fa_30%,#ffffff_100%)]">
      
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="max-w-[600px]">

          <h1 className="text-[2.5rem] md:text-[2.25rem] sm:text-[2rem] font-bold leading-[1.2] mb-4 text-[#398cec] whitespace-nowrap md:whitespace-normal text-center md:text-left">
            DevOps with AI Masters Course
          </h1>

          <p className="text-[1.1rem] text-[#4a5568] mb-8 leading-[1.6] max-w-[500px] text-center md:text-left mx-auto md:mx-0">
            Build Your Career with Our 100% Job Assistance Course
          </p>

          {/* Features */}
          <div className="mb-8">
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              
              <div className="flex items-start gap-4 p-4 bg-white border border-[#e2e8f0] rounded transition hover:border-[#398cec] hover:shadow-md">
                <span className="text-sm font-bold text-[#f60] min-w-[28px] h-[28px] flex items-center justify-center bg-[rgba(255,102,0,0.1)] rounded">
                  01
                </span>
                <span className="text-[0.95rem] text-[#2d3748] font-medium">
                  100% Live Instructor Led Program
                </span>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-[#e2e8f0] rounded transition hover:border-[#398cec] hover:shadow-md">
                <span className="text-sm font-bold text-[#f60] min-w-[28px] h-[28px] flex items-center justify-center bg-[rgba(255,102,0,0.1)] rounded">
                  02
                </span>
                <span className="text-[0.95rem] text-[#2d3748] font-medium">
                  3 Months & 6 Months Duration
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              
              <div className="flex items-start gap-4 p-4 bg-white border border-[#e2e8f0] rounded transition hover:border-[#398cec] hover:shadow-md">
                <span className="text-sm font-bold text-[#f60] min-w-[28px] h-[28px] flex items-center justify-center bg-[rgba(255,102,0,0.1)] rounded">
                  03
                </span>
                <span className="text-[0.95rem] text-[#2d3748] font-medium">
                  50+ Real World Enterprise Case Studies
                </span>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-[#e2e8f0] rounded transition hover:border-[#398cec] hover:shadow-md">
                <span className="text-sm font-bold text-[#f60] min-w-[28px] h-[28px] flex items-center justify-center bg-[rgba(255,102,0,0.1)] rounded">
                  04
                </span>
                <span className="text-[0.95rem] text-[#2d3748] font-medium">
                  100% Job Assistance Assurance
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            
            <button
              onClick={handleEnrollClick}
              className="px-8 py-3 text-sm font-semibold rounded bg-[#f60] text-white transition hover:bg-[#e55c00] hover:-translate-y-[1px] hover:shadow-md"
            >
              Apply Now
            </button>

            <button
              onClick={handleDownloadBrochure}
              className="px-8 py-3 text-sm font-semibold rounded border-2 border-[#398cec] text-[#398cec] flex items-center justify-center gap-2 transition hover:bg-[rgba(57,140,236,0.04)] hover:-translate-y-[1px]"
            >
              <svg
                className="mr-1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {brochureDownloaded ? "Downloaded" : "Download Brochure"}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center p-4 order-[-1] md:order-none">
          <div className="relative w-full max-w-[650px] p-4 scale-[1.5] md:scale-[2] mt-12 md:mt-[7rem] ml-0 md:ml-[3rem]">
            
            <img
              src={devopsbackgroundimage}
              alt="DevOps with AI Masters Course"
              className="w-full h-auto opacity-95 relative z-[2]"
            />

            <div className="absolute top-[20px] right-[20px] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle,rgba(57,140,236,0.1)_0%,transparent_70%)] z-[1]" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {isFormVisible && (
        <Enrollment
          key={formKey}
          onClose={handleCloseForm}
          courseName="DevOps With AI Masters"
        />
      )}

      {isDownloadVisible && (
        <Downloadcurri
          pdfPath="/Brochure -Devops with AI.pdf"
          courseName="Devops with AI"
          showForm={true}
          onClose={handleCloseDownload}
        />
      )}
    </div>
  );
};

export default DevopsHeader;