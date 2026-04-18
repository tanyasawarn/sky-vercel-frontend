"use client";
import React, { useEffect } from "react";
 

const Privacypolicy = () => {
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
        <div className="max-w-5xl mx-auto px-6 py-20 font-[Open_Sans]">

          {/* Title */}
          <h1
            className="mb-10 pb-3 border-b-2"
            style={{
              fontSize: "2.4rem",
              color: "#0d1b2a",
              borderColor: "rgba(13,71,161,0.1)",
            }}
          >
            Privacy Policy
          </h1>

          {/* Card */}
          <div
            className="p-10 rounded-2xl"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(13,71,161,0.1)",
              boxShadow: "0 16px 60px rgba(13,71,161,0.1)",
            }}
          >
            <p className="text-[15px] leading-7 mb-6 text-[#37474f]">
              Welcome to Skillfyme ("we," "us," or "our" or “Company”). We are
              committed to protecting your privacy and safeguarding your personal
              information. This Privacy Policy outlines the types of information we
              may collect, how we use it, and how we protect your information.
            </p>

            {[
              {
                title: "Information We Collect",
                content: [
                  "Personal Information: We may collect personally identifiable information such as your name, email address, postal address, phone number, and other similar data when you voluntarily provide it to us.",
                ],
              },
              {
                title:
                  "Collection of Personal Information and Communication Consent",
                content: [
                  "When you voluntarily send us electronic mail / fill up the form, we will keep a record of this information so that we can respond to you.",
                  "We only collect information when you register or fill out a form.",
                  "We may contact you via Call, SMS, Email or WhatsApp even if DND is activated.",
                ],
              },
              {
                title: "Usage Data",
                content: [
                  "We may collect non-personal information such as IP address, browser type, device type, pages visited, and usage statistics.",
                ],
              },
              {
                title: "How We Use Your Information",
                content: [
                  "We use your information to communicate, provide services, process transactions, and improve user experience.",
                ],
              },
              {
                title: "Cookies and Tracking Technologies",
                content: [
                  "We use cookies to enhance your experience. You can disable cookies in your browser settings.",
                ],
              },
              {
                title: "Third-Party Links",
                content: [
                  "We are not responsible for third-party websites. Please review their privacy policies separately.",
                ],
              },
              {
                title: "Data Security",
                content: [
                  "We implement reasonable security measures to protect your information.",
                ],
              },
              {
                title: "Your Rights",
                content: [
                  "You can access, update, or delete your personal data by contacting us.",
                ],
              },
              {
                title: "Changes to This Policy",
                content: [
                  "We may update this policy from time to time. Updates will be posted here.",
                ],
              },
              {
                title: "Contact Us",
                content: [
                  "For any queries, contact us at support@skillfyme.com.",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="mb-10">

                {/* Section Title */}
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#1565c0",
                    borderBottom: "2px solid rgba(13,71,161,0.1)",
                    paddingBottom: "8px",
                  }}
                >
                  {section.title}
                </h2>

                {/* Content */}
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

export default Privacypolicy;