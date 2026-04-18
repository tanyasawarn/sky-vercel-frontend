"use client";
import React, { useEffect } from "react";


const Refund = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
    
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(160deg,#e6f7ff 0%,#f0f9ff 50%,#e3f2fd 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Title */}
          <h1
            className="mb-8"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "2.5rem",
              color: "#0d1b2a",
            }}
          >
            Refund / Cancellation Policy
          </h1>

          {/* Card Container */}
          <div
            className="p-10 rounded-2xl"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(13,71,161,0.1)",
              boxShadow: "0 16px 60px rgba(13,71,161,0.1)",
            }}
          >
            <p className="text-[15px] leading-7 mb-6 text-[#37474f]">
              At Skillfyme, we prioritize your satisfaction and strive to provide you with the best learning experience. We understand that circumstances can change, and we want to ensure that our refund and cancellation policy is clear and straightforward.
            </p>

            {[
              {
                title: "Cancellation Policy",
                content: [
                  "3-Day Risk-Free Cancellation: We offer a 3-day, no-questions-asked cancellation policy for all courses, effective from the date of enrollment.",
                  "To cancel your enrollment, please send an email to support@skillfyme.in or admission@skillfyme.in. Once your cancellation is processed, you will receive a confirmation email, and your refund will be initiated.",
                ],
              },
              {
                title: "Refund Process",
                content: [
                  "Refunds can take up to 6-10 business days from the date of cancellation. Refunds will be issued to the original payment method used during the purchase. If you do not receive your refund within the specified time, please contact our support team for assistance.",
                ],
              },
              {
                title: "How to Request a Refund",
                content: [
                  "If you need assistance with the cancellation process or have any questions about our refund policy, please contact our support team:",
                  "Email: support@skillfyme.in or admission@skillfyme.in",
                ],
              },
              {
                title: "Refund Approval",
                content: [
                  "Once your refund request is received and reviewed, we will notify you of the approval or rejection of your refund within 48 hours.",
                ],
              },
              {
                title: "Refund Method",
                content: [
                  "Refunds will be processed to the original payment method used at the time of purchase.",
                ],
              },
              {
                title: "Non-Refundable Fees",
                content: [
                  "Please note that certain fees, such as administrative or processing fees, may be non-refundable.",
                ],
              },
              {
                title: "Customer Responsibility",
                content: [
                  "Customers are responsible for reviewing and adhering to the cancellation eligibility period.",
                ],
              },
              {
                title: "No-Shows and Partial Attendance",
                content: [
                  "Refunds will not be issued for non-attendance or partial attendance without an official cancellation request.",
                ],
              },
              {
                title: "Additional Information",
                content: [
                  "Skillfyme reserves the right to modify or update this refund policy at any time.",
                  "Thank you for choosing Skillfyme.",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="mb-8">
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.4rem",
                    color: "#1565c0",
                  }}
                >
                  {section.title}
                </h2>

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

export default Refund;