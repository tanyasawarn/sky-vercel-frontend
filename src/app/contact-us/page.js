"use client";

import React, { useEffect, useState } from "react";
import {Phone} from "lucide-react";
import ZohoFormModal from "../../components/common/zohoformmodal/zohoformmodal";


const Contactus = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCallbackClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
  

      <div className="max-w-[900px] mx-auto mt-32 px-6 py-10 mb-8 rounded-2xl shadow-lg 
      bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] 
      border border-[rgba(13,71,161,0.1)] 
      text-[#37474f] animate-[fadeIn_0.5s_ease-in-out]">

        <p className="text-[17px] mb-4">
          Welcome to Skillfyme! We are here to support your educational journey
          and ensure you have the best experience possible. Whether you have a
          question, need assistance, or want to provide feedback, we’re here to
          help.
        </p>

        <h2 className="text-2xl font-semibold text-[#0d1b2a] mt-6 mb-3">
          Office Address
        </h2>

        <p className="mb-3">
          Visit us at our office for any in-person inquiries:
        </p>

        <address className="not-italic bg-[rgba(13,71,161,0.06)] border-l-4 border-[#01579b] p-4 rounded-lg text-[#546e7a] shadow-sm leading-relaxed mb-5">
          Address: Ground Floor,917, 5th Main Rd, opp. to AU Small Finance Bank,
          7th Sector, HSR Layout, Bengaluru, Karnataka 560102
        </address>

        <h2 className="text-2xl font-semibold text-[#0d1b2a] mt-6 mb-3">
          Feedback and Suggestions
        </h2>

        <p className="mb-4">
          We value your feedback and suggestions to improve our services. Please
          share your thoughts with us at{" "}
          <strong>support@skillfyme.com</strong>.
        </p>

        <p className="mb-6">
          Thank you for choosing Skillfyme. We look forward to assisting you!
        </p>

        <button
          onClick={handleCallbackClick}
          className="flex items-center gap-3 bg-[#01579b] hover:bg-[#0288d1] text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <Phone style={{ fontSize: "1.5rem" }} />
          Request a Callback
        </button>
      </div>

 

      {showForm && <ZohoFormModal onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Contactus;