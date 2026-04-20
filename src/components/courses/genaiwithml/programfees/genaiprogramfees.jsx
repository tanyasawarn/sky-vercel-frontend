"use client";

import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../../context/usercontext";
import Fees from "../../../common/CourseFees/coursefees";
import EnrollmentForm from "../../../common/enrollmentform/enrollmentform";
import { usePathname } from "next/navigation";

const GenAIProgramfees = () => {
  const { userCountry } = useContext(UserContext);
  const [countryCode, setCountryCode] = useState(userCountry || "IN");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const pathname = usePathname();
const courseSlug = pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    if (userCountry) setCountryCode(userCountry);
  }, [userCountry]);

  const [priceDetails, setPriceDetails] = useState({
    discountedPrice: "",
    originalPrice: "",
    savings: "",
  });

  const handlePriceUpdate = (discountedPrice) => {
    setPriceDetails((prev) => ({
      ...prev,
      discountedPrice,
    }));
  };

  const handleEnrollClick = () => {
    setFormKey((prev) => prev + 1);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => setIsFormVisible(false);
 

  return (
    <div className="max-w-[1350px] mx-auto w-full px-4 py-8 font-sans">
      {/* Heading */}

      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center py-2.5 px-2">
        Program{" "}
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          Fees
        </span>
      </h2>
      <span className="block w-[100px] h-[4px] bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-2 rounded"></span>

      <div className="flex justify-center px-5 md:px-0">
        <div className="w-full max-w-[1200px] w-full p-8 md:p-5">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Program Fee Card */}
            <div className="w-full lg:w-[35%] bg-gradient-to-r from-[#0288d1] to-[#02669d] text-white p-6 rounded-2xl shadow-[0_12px_20px_rgba(25,118,210,0.3)]">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-semibold">Program Fee</h3>
                <div className="bg-[#ff6600] px-3 py-1 rounded-full text-xs font-semibold">
                  Special Pricing
                </div>
              </div>

              <div className="bg-white/95 text-[#333] p-6 rounded-xl shadow-md text-center mt-8">
                <Fees
                  
                  onPriceUpdate={handlePriceUpdate}
                  textColor="text-black"
                  originalColor="text-gray-400"
                  savingsColor="text-green-500"
                   courseSlug={courseSlug}
                />
              </div>

              {/* Banking */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-white mb-2 mt-4 text-center">
                  Banking Partners
                </p>
                <div>
                  <img
                    src="/bankingpartner.png"
                    alt="Banking Partner"
                    className="w-[340px] ml-[-1rem] mb-2"
                  />
                  <span className="text-white text-sm ml-2 text-center">
                    & many more banks
                  </span>
                </div>
              </div>
            </div>

            {/* Installment Card */}
            <div className="w-full lg:w-[65%] bg-white p-6 rounded-2xl shadow-md border border-[#eaeaea]">
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-[#1976d2] relative pb-2">
                  Flexible Payment Options
                  <span className="absolute bottom-0 left-0 w-[40px] h-[3px] bg-[#ff6600] rounded"></span>
                </h3>
              </div>

              {countryCode === "IN" ? (
                <>
                  {/* Indian */}
                  <div className="mb-5">
                    <p className="text-gray-500 text-base">
                      Pay In Installments, as low as
                    </p>
                    <h1 className="text-3xl font-bold text-[#1976d2] my-2">
                      INR 4,200/month
                    </h1>
                    <p className="text-gray-500">(For 12 Months)</p>
                  </div>

                  <div className="flex items-start bg-[#f0f7ff] p-4 rounded-lg mb-5">
                    <div className="bg-[#1976d2] text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold mr-3">
                      i
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      We provide No-Cost EMI on credit cards & debit cards with
                      0% interest rates and no hidden costs.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* International */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-extrabold">Secure Payment Gateway</h4>
                      <p className="text-gray-500">
                        Multiple payment methods accepted with bank-level
                        security.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold">
                        Global Currency Support
                      </h4>
                      <p className="text-gray-500">
                        Pay in your local currency with transparent conversion
                        rates.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-extrabold">Money-Back Guarantee</h4>
                      <p className="text-gray-500">
                        3-day refund policy if not satisfied with the program.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {/* CTA */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gradient-to-br from-[#f8f9fa] to-[#edf2f7] p-5 rounded-xl border-[3px] border-[#ff6600] mt-10 text-center md:text-left">
                <div className="flex items-center gap-3">
                  <div className="text-lg">📅</div>
                  <p className="text-gray-700">
                    Batch Starts On:{" "}
                    <strong className="text-[#1976d2]">
                      {countryCode === "IN" ? (
                        <>
                          11<sup>th</sup> May
                        </>
                      ) : (
                        <>
                          14<sup>th</sup> Mar
                        </>
                      )}
                    </strong>
                  </p>
                </div>

                <button
                  onClick={handleEnrollClick}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#0288d1] to-[#02669d] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#e55a00] hover:to-[#e57c00] hover:-translate-y-1 transition-all shadow-md"
                >
                  <span>Enroll Now</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      {isFormVisible && (
        <EnrollmentForm
          key={formKey}
          paymentRoute="/genaiwithmlcoursepayment"
          courseName="Generative AI & MLOps Masters Program"
          courseSlug="genai-with-ml-masters-program"
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default GenAIProgramfees;
