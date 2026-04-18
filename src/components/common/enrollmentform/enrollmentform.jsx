// "use client";

// import React, { useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { UserContext } from "../../../context/usercontext";
// import {
//   getCountryOptions,
//   getCountryByCode,
// } from "../countriesdata/countriesdata";
// import axios from "axios";
// import config from "../../config";
// import { ClipLoader } from "react-spinners";


// const EnrollmentForm = ({ onClose, paymentRoute, courseName }) => {
//   const { userCountry } = useContext(UserContext);
//   const router = useRouter();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [experience, setExperience] = useState("");
//   const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
//   const [countryOptions, setCountryOptions] = useState([]);
//   const [errorMessage, setErrorMessage] = useState({ email: "", phone: "" });
//   const [isLoading, setIsLoading] = useState(false);

//   const isFormValid =
//     firstName.trim() &&
//     lastName.trim() &&
//     email.trim() &&
//     phone.trim() &&
//     experience;

//   useEffect(() => {
//     setCountryOptions(getCountryOptions());

//     if (userCountry) {
//       const countryExists = getCountryByCode(userCountry);
//       if (countryExists) setSelectedCountryCode(userCountry);
//     }
//   }, [userCountry]);

//   const validateEmail = (email) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const validatePhone = (phone) =>
//     /^[0-9]{10,15}$/.test(phone);

//   const handleEnroll = async (e) => {
//     e.preventDefault();

//     if (!isFormValid) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     const isEmailValid = validateEmail(email);
//     const isPhoneValid = validatePhone(phone);

//     if (isEmailValid && isPhoneValid) {
//       setIsLoading(true);

//       try {
//         const response = await axios.post(
//           config.backendUrl + "users",
//           {
//             firstName,
//             lastName,
//             email,
//             phoneNumber: phone,
//             countryCode: selectedCountryCode,
//             experience,
//             activity: "ENROLL NOW",
//             course: courseName,
//           }
//         );

//         router.push(paymentRoute || "/payment");

//         onClose();
//       } catch (error) {
//         if (error.response?.status === 409) {
//           toast.error(error.response.data.message || "User already exists");
//         } else {
//           toast.error("Something went wrong. Please try again.");
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       setErrorMessage({
//         email: isEmailValid ? "" : "Invalid email address",
//         phone: isPhoneValid ? "" : "Invalid phone number",
//       });
//     }
//   };

//   return (
//     <div
//       onClick={onClose}
//       className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5"
//     >
     
// {isLoading ? (
//   <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
//     <ClipLoader size={50} color="#0bf" />
//   </div>
// ) : (
//         <div
//           onClick={(e) => e.stopPropagation()}
//           className="relative w-full max-w-[520px] max-h-[90vh] overflow-y-auto rounded-[24px] border border-white/50 p-8 shadow-[0_25px_50px_rgba(11,102,255,0.2)] bg-[linear-gradient(135deg,#e6f7ff,#f0f9ff_51%,#e3f2fd)]"
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow hover:bg-white hover:rotate-90 transition"
//           >
//             ✕
//           </button>

//           {/* Header */}
//           <div className="text-center mb-6">
//             <div className="w-[70px] h-[70px] mx-auto mb-4 flex items-center justify-center rounded-[18px] text-white bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-lg animate-bounce">
//               🎓
//             </div>

//             <h2 className="text-2xl font-bold text-[#1a365d]">
//               Enroll in{" "}
//               <span className="bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//                 {courseName}
//               </span>
//             </h2>

//             <p className="text-[#4a5568] text-sm mt-1">
//               Start your learning journey with us today
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleEnroll} className="flex flex-col gap-3">

//             {/* Row */}
//             <div className="flex flex-col md:flex-row gap-4">
//               <input
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="First Name"
//                 className="flex-1 p-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-blue-300"
//               />
//               <input
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Last Name"
//                 className="flex-1 p-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-blue-300"
//               />
//             </div>

//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="p-3 rounded-xl border bg-white/90 focus:ring-2 focus:ring-blue-300"
//             />
//             {errorMessage.email && (
//               <p className="text-red-500 text-sm">{errorMessage.email}</p>
//             )}

//             {/* Phone */}
//             <div className="flex gap-3 flex-col md:flex-row">
//               <select
//                 value={selectedCountryCode}
//                 onChange={(e) => setSelectedCountryCode(e.target.value)}
//                 className="p-3 rounded-xl border bg-white/90"
//               >
//                 {countryOptions.map((c) => (
//                   <option key={c.code} value={c.code}>
//                     {c.flag} {c.callingCode}
//                   </option>
//                 ))}
//               </select>

//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone Number"
//                 className="flex-1 p-3 rounded-xl border bg-white/90"
//               />
//             </div>
//             {errorMessage.phone && (
//               <p className="text-red-500 text-sm">{errorMessage.phone}</p>
//             )}

//             {/* Experience */}
//             <select
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               className="p-3 rounded-xl border bg-white/90"
//             >
//               <option value="">Years of Experience</option>
//               <option value="0-3">0-3 years</option>
//               <option value="3-5">3-5 years</option>
//               <option value="5-7">5-7 years</option>
//               <option value="10+">10+ years</option>
//             </select>

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={!isFormValid || isLoading}
//               className="mt-3 p-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#0bf] to-[#1a365d] shadow-lg hover:-translate-y-1 transition"
//             >
//               Enroll Now →
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnrollmentForm;



"use client";

import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../context/usercontext";
import {
  getCountryOptions,
  getCountryByCode,
} from "../countriesdata/countriesdata";
import axios from "axios";
import config from "../../config";
import { ClipLoader } from "react-spinners";

const EnrollmentForm = ({ onClose, paymentRoute, courseName,courseSlug }) => {
  const { userCountry } = useContext(UserContext);
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("IN");
  const [countryOptions, setCountryOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState({ email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    email.trim() &&
    phone.trim() &&
    experience;

  useEffect(() => {
    setCountryOptions(getCountryOptions());

    if (userCountry) {
      const countryExists = getCountryByCode(userCountry);
      if (countryExists) setSelectedCountryCode(userCountry);
    }
  }, [userCountry]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const getCourseSlug = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

  const handleEnroll = async (e) => {
    e.preventDefault();

    const slug = getCourseSlug(courseName);

    if (!isFormValid) {
      toast.error("Please fill all required fields");
      return;
    }

    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);

    if (isEmailValid && isPhoneValid) {
      setIsLoading(true);

      try {
        const response = await axios.post(config.backendUrl + "users", {
          firstName,
          lastName,
          email,
          phoneNumber: phone,
          countryCode: selectedCountryCode,
          experience,
          activity: "ENROLL NOW",
          course: courseName,
        });

        console.log("Sending slug:", courseSlug);

        router.push(paymentRoute || "/payment");
      //  router.push(`/payment?course=devops-with-ai&email=${email}&phone=${phone}`);
      router.push(`/payment?course=${slug}&email=${email}&phone=${phone}`);
        onClose();
      } catch (error) {
        if (error.response?.status === 409) {
          toast.error(error.response.data.message || "User already exists");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage({
        email: isEmailValid ? "" : "Invalid email address",
        phone: isPhoneValid ? "" : "Invalid phone number",
      });
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-300"
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
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border border-[#0bf]/20 animate-in slide-in-from-bottom-8 duration-300"
        >
          {/* Decorative gradient blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0bf]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1a365d]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#1a365d] to-[#0bf] bg-clip-text text-transparent">
                  Enroll in{" "}
                  <span className="bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent font-extrabold">
                    {courseName}
                  </span>
                </span>
              </h2>

              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Start your learning journey with us today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleEnroll} className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'firstName' ? 'opacity-40' : ''}`} />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="First Name"
                    className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="relative group">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'lastName' ? 'opacity-40' : ''}`} />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Last Name"
                    className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'email' ? 'opacity-40' : ''}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Email Address"
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
                <div className="relative group sm:w-36">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'country' ? 'opacity-40' : ''}`} />
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    onFocus={() => setFocusedField('country')}
                    onBlur={() => setFocusedField(null)}
                    className="relative w-full px-3 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 cursor-pointer appearance-none"
                  >
                    {countryOptions.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.callingCode}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Phone Number"
                    className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
              {errorMessage.phone && (
                <p className="text-red-500 text-sm flex items-center gap-1 mt- -mt-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errorMessage.phone}
                </p>
              )}

              {/* Experience Dropdown */}
              <div className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#0bf] to-[#1a365d] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 ${focusedField === 'experience' ? 'opacity-40' : ''}`} />
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  onFocus={() => setFocusedField('experience')}
                  onBlur={() => setFocusedField(null)}
                  className="relative w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white/90 focus:border-[#0bf] focus:ring-2 focus:ring-[#0bf]/20 transition-all duration-200 outline-none text-gray-700 cursor-pointer appearance-none"
                >
                  <option value="">Years of Experience</option>
                  <option value="0-3">0-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-7">5-7 years</option>
                  <option value="10+">10+ years</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="relative w-full mt-6 px-6 py-4 rounded-xl bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white font-bold text-lg overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-[#0bf]/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Enroll Now
                </span>
              </button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-4 pt-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Instant Access</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-[#0bf]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollmentForm;