"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../../../context/usercontext";
import {Mail,Phone} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../../../config";
import {
  getCountryOptions,
  getCountryByCode,
} from "../../../common/countriesdata/countriesdata";

const GenaiformCallbackForm = ({ showForm, onClose, courseName, inline = false }) => {
  const { userCountry } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("IN");
  const [countryOptions, setCountryOptions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && !inline) setIsVisible(true);
  }, [showForm, inline]);

  useEffect(() => {
    const options = getCountryOptions().map((country) => ({
      name: country.name,
      code: country.callingCode,
      countryCode: country.code,
    }));
    setCountryOptions(options);

    if (userCountry) {
      const userCountryData = getCountryByCode(userCountry);
      if (userCountryData) setCountryCode(userCountryData.callingCode);
    }
  }, [userCountry]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{7,15}$/.test(phone);

  const resetForm = () => {
    setEmail("");
    setPhoneNumber("");
    setCountryCode("IN");
    setErrors({});
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) newErrors.email = "Please enter a valid email address";
    if (!validatePhone(phoneNumber)) newErrors.phone = "Please enter a valid phone number";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post(config.backendUrl + "users", {
        email,
        phoneNumber,
        countryCode,
        activity: "Callback",
        course: courseName,
      });

      if (response.status === 200) {
        toast.success("We will reach out to you soon!");
        resetForm();
        if (!inline) onClose();
      } else {
        toast.error("Failed to process your request. Please try again.");
        resetForm();
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      resetForm();
    }
  };

  if (inline) {
    return (
      <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        
        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-bold text-[#1a365d] mb-2">
            Request A Callback
          </h2>
          <p className="text-[14px] text-[#666]">
            Enter your details and we'll call you back soon
          </p>
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0bf]" />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-11 pr-4 py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff] focus:border-[#0bf] focus:outline-none focus:shadow-[0_0_0_3px_rgba(0,187,255,0.2)]"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 pl-2">{errors.email}</p>}
        </div>

        <div className="flex flex-col mt-4">
          <div className="relative mb-3">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0bf]" />
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="w-full pl-11 pr-10 py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff] focus:border-[#0bf] outline-none"
            >
              {countryOptions.map((o, i) => (
                <option key={i} value={o.code}>
                  {o.name} ({o.code})
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone No."
              className="w-full pl-4 pr-4 py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff] focus:border-[#0bf] outline-none"
            />
          </div>
        </div>

        {errors.phone && <p className="text-red-500 text-xs mt-1 pl-2">{errors.phone}</p>}

        <div className="mt-6">
          <button className="w-full py-4 rounded-xl bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white font-semibold hover:-translate-y-1 transition">
            Request Callback
          </button>
        </div>
      </form>
    );
  }

  if (!showForm) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black/70 z-[9999] transition ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      
      <div className={`bg-white/95 backdrop-blur-md p-8 rounded-[20px] shadow-xl w-full max-w-[450px] relative transition ${isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-12 scale-90 opacity-0"}`}>

        <span
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-red-500 hover:text-white transition"
        >
          ×
        </span>

        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-bold text-[#1a365d] mb-2">
            Request A Callback
          </h2>
          <p className="text-[14px] text-[#666]">
            Enter your details and we'll call you back soon
          </p>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-4 py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <select className="w-full py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff]">
            {countryOptions.map((o, i) => (
              <option key={i}>{o.name}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Phone Number"
            className="w-full py-4 border-2 border-[#e6f7ff] rounded-xl bg-[#f9fdff]"
          />
        </div>

        <button className="w-full mt-6 py-4 rounded-xl bg-gradient-to-br from-[#0bf] to-[#1a365d] text-white font-semibold">
          Request Callback
        </button>

        <div className="mt-4 border-t pt-3 text-xs text-gray-500 text-center">
          Your information is secure and will not be shared
        </div>
      </div>
    </div>
  );
};

export default GenaiformCallbackForm;