"use client";

import React, { useState, useContext } from "react";
import { UserContext } from "@/context/usercontext";
import Fees from "@/components/common/CourseFees/coursefees";
import EnrollmentForm from "@/components/common/enrollmentform/enrollmentform";
import { usePathname } from "next/navigation";



const PricingComponent = () => {
  const { userCountry, loading } = useContext(UserContext);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const [priceDetails, setPriceDetails] = useState({ discountedPrice: "" });
  const [couponCode, setCouponCode] = useState("");
  const pathname = usePathname();
  const courseSlug = pathname.split("/").filter(Boolean).pop();


  const handlePriceUpdate = (discountedPrice) => {
    setPriceDetails((prev) => ({ ...prev, discountedPrice }));
  };

  const handleEnrollClick = () => {
    setFormKey((prev) => prev + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => setIsFormVisible(false);

  if (loading) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .pricing-root {
          font-family: 'DM Sans', sans-serif;
        }

        .pricing-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 2.6rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #38bdf8 0%, #1a365d 60%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pricing-card {
          background: #ffffff;
          border: 1px solid rgba(186, 219, 255, 0.4);
          border-radius: 24px;
          box-shadow:
            0 2px 4px rgba(25, 118, 210, 0.04),
            0 8px 24px rgba(25, 118, 210, 0.08),
            0 32px 64px rgba(25, 118, 210, 0.06);
          position: relative;
          overflow: hidden;
        }

        .pricing-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #38bdf8, #1976d2, #1a365d);
        }

        /* Subtle grid texture */
        .pricing-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(25, 118, 210, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(25, 118, 210, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .fee-panel {
          background: linear-gradient(145deg, #0f2a4a 0%, #1565c0 50%, #1976d2 100%);
          border-radius: 18px;
          position: relative;
          overflow: hidden;
        }

        .fee-panel::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .fee-panel::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .fee-inner {
          background: rgba(255, 255, 255, 0.97);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow:
            0 4px 16px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.8);
          position: relative;
          z-index: 1;
        }

        .divider-line {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #38bdf8, #1976d2);
          border-radius: 2px;
          margin: 10px auto 0;
        }

        .emi-card {
          background: linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 18px;
          position: relative;
          overflow: hidden;
        }

        .emi-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #38bdf8, #1976d2);
          border-radius: 2px 0 0 2px;
        }

        .emi-amount {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2rem;
          background: linear-gradient(135deg, #1976d2, #1a365d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feature-pill {
          background: white;
          border: 1px solid rgba(25, 118, 210, 0.12);
          border-radius: 12px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(56,189,248,0.06), rgba(25,118,210,0.04));
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .feature-pill:hover::before {
          opacity: 1;
        }

        .feature-pill:hover {
          border-color: rgba(25, 118, 210, 0.3);
          box-shadow: 0 4px 16px rgba(25, 118, 210, 0.1);
          transform: translateY(-2px);
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #e0f0ff, #c5e1ff);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-strip {
          background: linear-gradient(135deg, #f0f7ff 0%, #e5f0fd 100%);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .cta-strip::before {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 160px;
          height: 160px;
          background: radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .batch-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid rgba(25,118,210,0.15);
          border-radius: 100px;
          padding: 8px 18px;
          box-shadow: 0 2px 8px rgba(25,118,210,0.08);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .enroll-btn {
          background: linear-gradient(135deg, #ff6600 0%, #e65c00 100%);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          padding: 14px 36px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow:
            0 4px 12px rgba(255, 102, 0, 0.35),
            0 1px 3px rgba(255, 102, 0, 0.2);
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .enroll-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .enroll-btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 8px 24px rgba(255, 102, 0, 0.45),
            0 2px 8px rgba(255, 102, 0, 0.3);
        }

        .enroll-btn:hover::before {
          opacity: 1;
        }

        .enroll-btn:active {
          transform: translateY(0px);
        }

        .section-label {
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f60;
        }
      `}</style>

      <div className="pricing-root w-full px-4 py-6">

        {/* ── Heading ── */}
        <div className="text-center mb-10">
          <h2 className="pricing-heading">Program Fees</h2>
          <div className="divider-line"></div>
        </div>

        {/* ── Main Card ── */}
        <div className="flex justify-center">
          <div className="pricing-card w-full max-w-[1160px] p-6 md:p-10 relative z-10">

            {/* ── Top Row: Fee Panel + Info Panel ── */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">

              {/* 💰 Fee Panel */}
              <div className="fee-panel p-5 flex items-center justify-center md:w-[280px] shrink-0">
                <div className="fee-inner p-6 w-full text-center">
                  <p className="section-label mb-3" style={{ color: '#1976d2' }}>
                    Total Investment
                  </p>
                  <Fees
                     courseSlug={courseSlug}
                    couponCode={couponCode || null}
                    onPriceUpdate={handlePriceUpdate}
                  />
                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="text-xs text-gray-400 font-medium">All taxes included</span>
                  </div>
                </div>
              </div>

              {/* 🌍 Conditional Info Panel */}
              {userCountry === "IN" ? (
                <div className="emi-card flex-1 p-6 md:p-8 pl-8 md:pl-10">
                  <p className="section-label mb-2 font-extrabold">No-Cost EMI Available</p>
                  <p className="text-gray-900 text-sm font-bold mb-3">Pay in easy installments starting at{" "}</p>
                  <p className="emi-amount">INR{" "} 5,333<span className="text-base font-normal text-gray-400">.33 / month</span></p>

                  <div className="w-full h-px bg-gradient-to-r from-sky-200 to-transparent my-5"></div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    Enjoy <span className="font-semibold text-[#1976d2]">0% interest</span> EMI on Credit & Debit Cards with absolutely no hidden charges or processing fees.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Visa", "Mastercard", "RuPay", "Amex"].map((card) => (
                      <span
                        key={card}
                        className="text-xs font-medium text-gray-500 bg-white border border-gray-100 px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {card}
                      </span>
                    ))}
                    <span className="text-xs font-medium text-[#1976d2] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
                      + many more
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex-1 p-6 md:p-8">
                  <p className="section-label mb-4">Payment Options</p>
                  <h3
                    className="text-[1.35rem] font-semibold mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#1a365d' }}
                  >
                    Flexible & Secure Global Payments
                  </h3>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        icon: "🔒",
                        title: "Secure Gateway",
                        desc: "Bank-level encryption across all payment methods",
                      },
                      {
                        icon: "🌐",
                        title: "Global Currencies",
                        desc: "Pay in your local currency with transparent rates",
                      },
                      {
                        icon: "↩️",
                        title: "3-Day Refund",
                        desc: "Full refund guarantee if you're not satisfied",
                      },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="feature-pill flex items-start gap-4 p-4">
                        <div className="feature-icon">
                          <span className="text-base">{icon}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1a365d] mb-0.5">{title}</p>
                          <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── CTA Strip ── */}
            <div className="cta-strip flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-6">
              <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
                <div className="batch-badge">
                  <span className="pulse-dot"></span>
                  <span className="text-sm font-medium text-gray-600">
                    Batch starts <span className="text-[#1976d2] font-semibold">27<sup>th</sup> April</span>
                  </span>
                </div>
                <span className="text-xs text-gray-400 hidden sm:block">·</span>
                <span className="text-xs text-gray-400 font-medium">Limited seats available</span>
              </div>

              <button className="enroll-btn" onClick={handleEnrollClick}>
                Apply Now →
              </button>
            </div>

          </div>

          {/* ── Enrollment Form ── */}
          {isFormVisible && (
            <EnrollmentForm
              key={formKey}
               courseName="DevOps With AI Masters Program"
              courseSlug="devops-with-ai-masters-program"
              onClose={handleCloseForm}
              paymentRoute="/payment"
              amount={priceDetails.discountedPrice}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PricingComponent;