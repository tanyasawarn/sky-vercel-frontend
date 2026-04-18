"use client";

import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../../../context/usercontext";
import axios from "axios";
import config from "../../config";
import { 
  X, 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  User, 
  MessageSquare,
  Globe,
  ArrowRight,
  Sparkles
} from "lucide-react";

const CallbackForm = ({ onClose }) => {
  const { userCountry } = useContext(UserContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        if (userCountry) {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${userCountry}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch country code");
          }
          const countryData = await response.json();
          const callingCode = countryData[0]?.idd?.root + countryData[0]?.idd?.suffixes[0];
          if (callingCode) {
            setCountryCode(callingCode);
          }
        }
      } catch (error) {
        // console.error("Error fetching country code:", error);
      }
    };

    fetchCountryCode();
  }, [userCountry]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${config.backendUrl}/api/users`,
        {
          name,
          phone,
          email,
          message,
          countryCode,
        }
      );

      if (response.status === 200) {
        setIsFormVisible(false);
        setIsAlertVisible(true);

        setTimeout(() => {
          setIsAlertVisible(false);
          onClose();
        }, 2500);
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsFormVisible(false);
    onClose();
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isFormVisible && !isAlertVisible) {
    return null;
  }

  const InputField = ({ icon: Icon, label, type, value, onChange, placeholder, required, error, name }) => (
    <div className="relative group">
      <div className={`relative transition-all duration-300 ${
        focusedField === name ? 'transform scale-[1.02]' : ''
      }`}>
       
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          placeholder={placeholder}
          required={required}
          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none bg-white/50 backdrop-blur-sm
            ${error 
              ? 'border-red-500 focus:border-red-500 bg-red-50/50' 
              : focusedField === name
                ? 'border-[#00aaff] shadow-lg shadow-[#00aaff]/20'
                : 'border-gray-200 hover:border-gray-300'
            }`}
        />
        {label && (
          <label className={`absolute -top-2 left-3 px-1 text-xs transition-all duration-300 bg-white rounded
            ${focusedField === name ? 'text-[#00aaff]' : 'text-gray-500'}`}>
            {label}
          </label>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-4 animate-shake">
          {error}
        </p>
      )}
    </div>
  );

  return (
    <>
      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
          {/* Animated Background Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-md animate-fadeIn"
            onClick={handleClose}
          />
          
          {/* Modal Container */}
          <div
            ref={formRef}
            className="relative w-full max-w-lg animate-slideUp"
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#00aaff]/20 to-[#1a365d]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#00aaff]/10 to-[#1a365d]/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500">
              {/* Header Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00aaff] via-[#1a365d] to-[#00aaff]" />
              
              {/* Header Section */}
              <div className="relative px-8 pt-8 pb-4 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
                >
                  <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:rotate-90 transition-all duration-300" />
                </button>
                
                <div className="flex items-center gap-3 mb-3">
                
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00aaff] to-[#1a365d] bg-clip-text text-transparent text-center">
                    Request a Callback
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Fill in your details and our program advisor will reach out to you shortly
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <InputField
                  icon={User}
                  label="Full Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />

                <InputField
                  icon={Mail}
                  label="Email Address"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  error={errors.email}
                />

                {/* Phone Field with Country Code */}
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#00aaff] focus:shadow-lg focus:shadow-[#00aaff]/20 outline-none transition-all duration-300 bg-white/50 appearance-none cursor-pointer"
                      >
                        <option value={countryCode}>{countryCode}</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="flex-[2]">
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="9876543210"
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none bg-white/50
                            ${errors.phone 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-200 focus:border-[#00aaff] focus:shadow-lg focus:shadow-[#00aaff]/20'
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-xs ml-1 animate-shake">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <InputField
                  icon={MessageSquare}
                  label="Message (Optional)"
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I'm interested in learning more about..."
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#00aaff] to-[#1a365d] p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-[#00aaff]/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-[#00aaff]/10 to-[#1a365d]/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-white font-semibold">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-white font-semibold">Request Callback</span>
                          <Send className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </div>
                  </div>
                </button>

                {/* Trust Badge */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Alert */}
      {isAlertVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-scaleUp">
            {/* Animated Checkmark */}
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#00aaff] to-[#1a365d] rounded-full flex items-center justify-center animate-bounce-in">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-[#00aaff] to-[#1a365d] rounded-full opacity-20 animate-ping" />
            </div>
            
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h4>
            <p className="text-gray-600 mb-6">
              Our Program Advisor Will Reach Out To You Soon
            </p>
            
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00aaff] to-transparent rounded-full animate-slideIn" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes slideIn {
          from {
            width: 0%;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
};

export default CallbackForm;