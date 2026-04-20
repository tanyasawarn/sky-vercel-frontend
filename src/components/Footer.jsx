"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaQuora,
  FaGoogle,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer
      className={`relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #e6f7ff, #f0f9ff 51%, #e3f2fd)",
      }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200px] h-[200px] top-[-50px] left-[-50px] rounded-full bg-blue-300/20 animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute w-[150px] h-[150px] bottom-[50px] right-[10%] rounded-full bg-blue-300/20 animate-[float_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute w-[100px] h-[100px] top-[30%] right-[-30px] rounded-full bg-blue-300/20 animate-pulse" />
        <div className="absolute w-[120px] h-[120px] bottom-[-30px] left-[20%] rounded-full bg-blue-300/20 animate-[float_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative max-w-[1200px] w-full mx-auto px-5 py-16 text-[#1a365d]">
        <div className="flex flex-wrap gap-10 mb-10">

          {/* Brand */}
          <div className="flex-1 min-w-[280px]">
            <h2 className="text-[1.8rem] font-bold bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mb-4">
              SkillfyMe
            </h2>

            <p className="text-[#4a5568] mb-6 max-w-[300px]">
              Transforming careers through innovative learning experiences
            </p>

            {/* Orbit Images */}
            {/* <div className="relative w-[100px] h-[100px]">
              {[1,2,3,4,5,6,7,8].map((num, idx) => (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 w-[30px] h-[30px]"
                  style={{
                    transform: "translate(-50%, -50%)",
                    animation: `orbit${num} ${8 + idx * 2}s linear infinite ${
                      idx % 2 ? "reverse" : ""
                    }`,
                  }}
                >
                  <img
                    src={`/f${num}.png`}
                    alt={`orbit-${num}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Columns */}
          <div className="flex-[2] flex flex-wrap gap-5">

            {/* Resources */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
                Resources
              </h3>

              <ul className="space-y-3">
                {[
                  ["About Us", "/about-us"],
                  ["Terms & Condition", "/terms&condition"],
                  ["Refund/Cancellation Policy", "/refund-policy"],
                  ["Privacy Policy", "/privacypolicy"],
                ].map(([label, link], i) => (
                  <li key={i} className="animate-fadeInUp">
                    <Link href={link} className="text-[#4a5568] hover:text-[#0bf]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1 min-w-[200px]">
              <Link href="/contact-us">
                <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
                  Contact Us
                </h3>
              </Link>

              <div className="space-y-3">
                <p className="flex gap-2 items-center">
                  <Mail size={16} className="text-blue-600" />
                  support@skillfyme.in
                </p>
                <p className="flex gap-2 items-center">
                  <Phone size={16} className="text-blue-600" />
                  +91-9148463995
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
                Follow Us On
              </h3>

              <ul className="space-y-3">
                {[
                  ["YouTube", FaYoutube, "https://www.youtube.com/@Skillfyme"],
                  ["Instagram", FaInstagram, "https://www.instagram.com/skillfyme"],
                  ["Quora", FaQuora, "https://www.quora.com"],
                  ["Google", FaGoogle, "https://www.google.com"],
                  ["LinkedIn", FaLinkedin, "https://www.linkedin.com"],
                ].map(([label, Icon, link], i) => (
                  <li key={i}>
                    <a href={link} target="_blank" className="flex items-center gap-2 hover:text-[#0bf]">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                        <Icon />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* SEO Section */}
        {/* <div className="mt-8 text-sm text-[#444] space-y-6">
          <div>
            <h4 className="font-semibold text-[#222] mb-2">Trending Courses</h4>
            <p>
              <Link href="#">DevOps with AI Course</Link> |{" "}
              <Link href="#">MLOps Course</Link> |{" "}
              <Link href="#">Gen AI Course</Link>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#222] mb-2">Trending Categories</h4>
            <p>
              <Link href="#">AI & DevOps</Link> |{" "}
              <Link href="#">MLOps</Link> |{" "}
              <Link href="#">Generative AI |{" "}</Link>
              <Link href="#">Agentic AI|{" "}</Link>
            </p>
          </div>
        </div> */}

        <div className="mt-8 text-sm text-[#444] space-y-6">
  <div>
    <h4 className="font-semibold text-[#222] mb-2">Trending Courses</h4>
    <p>
      <Link href="#">DevOps with AI Course</Link> |{" "}
      <Link href="#">DevOps Certification Training</Link> |{" "}
      <Link href="#">MLOps Course</Link> |{" "}
      <Link href="#">MLOps Certification</Link> |{" "}
      <Link href="#">Generative AI Course</Link> |{" "}
      <Link href="#">Gen AI Certification</Link> |{" "}
      <Link href="#">Agentic AI Course</Link> |{" "}
      <Link href="#">AI for DevOps Engineers</Link> |{" "}
      <Link href="#">AWS DevOps Course</Link> |{" "}
      <Link href="#">Docker & Kubernetes Course</Link> |{" "}
      <Link href="#">CI/CD Pipeline Training</Link> |{" "}
      <Link href="#">Machine Learning Engineer Course</Link> |{" "}
      <Link href="#">Data Science & AI Course</Link>
    </p>
  </div>

  <div>
    <h4 className="font-semibold text-[#222] mb-2">Trending Categories</h4>
    <p>
      <Link href="#">AI & DevOps</Link> |{" "}
      <Link href="#">MLOps</Link> |{" "}
      <Link href="#">Generative AI</Link> |{" "}
      <Link href="#">Agentic AI</Link> |{" "}
      <Link href="#">Cloud Computing</Link> |{" "}
      <Link href="#">AWS & Azure</Link> |{" "}
      <Link href="#">Kubernetes & Docker</Link> |{" "}
      <Link href="#">CI/CD & Automation</Link> |{" "}
      <Link href="#">Machine Learning</Link> |{" "}
      <Link href="#">Deep Learning</Link> |{" "}
      <Link href="#">Data Engineering</Link> |{" "}
      <Link href="#">AI Tools & LLMs</Link>
    </p>
  </div>
</div>

        {/* Bottom */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#0bf] to-transparent" />
            <div className="w-2 h-2 bg-[#0bf] rounded-full mx-3 animate-pulse" />
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#0bf] to-transparent" />
          </div>

          <p className="text-sm text-[#4a5568]">
            © {new Date().getFullYear()} Learnsyte Learning Private Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform: translateY(30px); }
          to { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;






 