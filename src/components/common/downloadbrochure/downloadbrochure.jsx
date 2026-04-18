"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../../context/usercontext";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../.././config";
import {
  getCountryOptions,
  getCountryByCode,
} from "../countriesdata/countriesdata";

const DownloadForm = ({ showForm, onClose, pdfPath, courseName }) => {
  const { userCountry } = useContext(UserContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [countryOptions, setCountryOptions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errorMessage, setErrorMessage] = useState({ fullName: "", email: "", phoneNumber: "" });
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm) setIsVisible(true);
  }, [showForm]);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${courseName}Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validateFullName = (name) => name && name.trim().length >= 3;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{7,15}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phoneNumber);

    if (!isNameValid || !isEmailValid || !isPhoneValid) {
      setErrorMessage({
        fullName: isNameValid ? "" : "Full name must be at least 3 characters",
        email: isEmailValid ? "" : "Invalid email address",
        phoneNumber: isPhoneValid ? "" : "Invalid phone number (7-15 digits)",
      });
      toast.error("Please fill all fields correctly");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(config.backendUrl + "users", {
        fullName,
        email,
        phoneNumber,
        countryCode,
        activity: "Download Brochure",
        course: courseName,
      });

      if (response.status === 200) {
        toast.success("Your brochure is being downloaded!");
        downloadPDF();
        handleClose();
      } else {
        toast.error("Failed to process your request.");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error(error.response.data.message || "User already exists");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const options = getCountryOptions().map((c) => ({
      name: c.name,
      code: c.callingCode,
      countryCode: c.code,
      flag: c.flag,
    }));
    setCountryOptions(options);

    if (userCountry) {
      const userCountryData = getCountryByCode(userCountry);
      if (userCountryData) {
        setCountryCode(userCountryData.callingCode);
      }
    }
  }, [userCountry]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!showForm) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(12px)" }}
    >
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[999]">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-[#0bf]/20 border-t-[#0bf] border-r-[#1a365d] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto transition-all duration-500 ${
            isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-90 opacity-0"
          }`}
        >
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#0bf]/20 overflow-hidden">
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0bf]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1a365d]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#0bf]/20 flex items-center justify-center text-[#1a365d] hover:bg-white hover:rotate-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#0bf]/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-2xl blur-xl opacity-40 animate-pulse" />
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-xl transform transition-transform hover:scale-105 duration-300">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#1a365d] to-[#0bf] bg-clip-text text-transparent">
                    Download{" "}
                    <span className="bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent font-extrabold">
                      {courseName}
                    </span>
                  </span>
                </h2>

                <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Get instant access to complete course brochure
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'fullName' ? 'opacity-40' : ''}`} />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errorMessage.fullName) setErrorMessage({ ...errorMessage, fullName: "" });
                    }}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                {errorMessage.fullName && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt- -mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage.fullName}
                  </p>
                )}

                {/* Email */}
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'email' ? 'opacity-40' : ''}`} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMessage.email) setErrorMessage({ ...errorMessage, email: "" });
                    }}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email address"
                    className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                {errorMessage.email && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt- -mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage.email}
                  </p>
                )}

                {/* Phone with Country Code */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative group sm:w-40">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'country' ? 'opacity-40' : ''}`} />
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      onFocus={() => setFocusedField('country')}
                      onBlur={() => setFocusedField(null)}
                      className="relative w-full px-3 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 cursor-pointer appearance-none"
                    >
                      {countryOptions.map((o, i) => (
                        <option key={i} value={o.code}>
                          {o.flag} {o.name} ({o.code})
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative group flex-1">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'phone' ? 'opacity-40' : ''}`} />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        if (errorMessage.phoneNumber) setErrorMessage({ ...errorMessage, phoneNumber: "" });
                      }}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone Number"
                      className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
                {errorMessage.phoneNumber && (
                  <p className="text-red-500 text-sm flex items-center gap-1 mt- -mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage.phoneNumber}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white font-bold text-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-[#0bf]/30 hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Brochure
                  </span>
                </button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-4 pt-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Instant Download</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>No Spam</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadForm;