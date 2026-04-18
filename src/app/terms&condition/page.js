"use client";
import React, { useEffect } from "react";


const termscondition = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      

      {/* Background */}
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 50%,#e3f2fd 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Page Title */}
          <h1
            className="mb-10"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.5rem",
              color: "#0d1b2a",
            }}
          >
            Terms & Conditions
          </h1>

          {/* Main Card */}
          <div
            className="p-10 rounded-2xl"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(13,71,161,0.1)",
              boxShadow: "0 16px 60px rgba(13,71,161,0.1)",
            }}
          >

            {/* Intro */}
            <p className="text-[15px] leading-7 mb-6 text-[#37474f]">
              Welcome to Skillfyme.com ("we," "us," or "our"). By accessing and
              using our website, you agree to comply with and be bound by these
              Terms and Conditions. If you do not agree with these terms, please do
              not use our website.
            </p>

            {/* Sections */}
            {[
              {
                title: "User Agreement",
                content: [
                  "By using our website, you confirm that you are at least 18 years old or the legal age of majority in your jurisdiction.",
                  "If you are using our services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.",
                ],
              },
              {
                title: "Use of Content",
                content: [
                  "All content, materials, and resources provided on our website are for educational and informational purposes only.",
                  "You agree not to reproduce, distribute, modify, or otherwise use our content without our explicit permission.",
                ],
              },
              {
                title: "Governing Law",
                content: [
                  "These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bangalore India.",
                  "Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the Patna High Court.",
                  "Any dispute shall be settled by binding arbitration in accordance with applicable rules.",
                ],
              },
              {
                title: "Contact Us",
                content: [
                  "If you have any questions or concerns about these Terms and Conditions, please contact us at support@skillfyme.com.",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="mb-10">

                {/* Section Title */}
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.4rem",
                    color: "#1565c0",
                  }}
                >
                  {section.title}
                </h2>

                {/* Section Content */}
                {section.content.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-[14.5px] leading-7 mb-3 text-[#546e7a]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>

     
    </>
  );
};

export default termscondition;