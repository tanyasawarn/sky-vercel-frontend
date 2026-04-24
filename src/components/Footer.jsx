// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   FaYoutube,
//   FaLinkedin,
//   FaInstagram,
//   FaQuora,
//   FaGoogle,
// } from "react-icons/fa";
// import { Mail, Phone } from "lucide-react";

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <footer
//       className={`relative overflow-hidden transition-all duration-700 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
//       }`}
//       style={{
//         background:
//           "linear-gradient(135deg, #e6f7ff, #f0f9ff 51%, #e3f2fd)",
//       }}
//     >
//       {/* Background Shapes */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[200px] h-[200px] top-[-50px] left-[-50px] rounded-full bg-blue-300/20 animate-[float_15s_ease-in-out_infinite]" />
//         <div className="absolute w-[150px] h-[150px] bottom-[50px] right-[10%] rounded-full bg-blue-300/20 animate-[float_12s_ease-in-out_infinite_reverse]" />
//         <div className="absolute w-[100px] h-[100px] top-[30%] right-[-30px] rounded-full bg-blue-300/20 animate-pulse" />
//         <div className="absolute w-[120px] h-[120px] bottom-[-30px] left-[20%] rounded-full bg-blue-300/20 animate-[float_10s_ease-in-out_infinite]" />
//       </div>

//       <div className="relative max-w-[1200px] w-full mx-auto px-5 py-16 text-[#1a365d]">
//         <div className="flex flex-wrap gap-10 mb-10">

//           {/* Brand */}
//           <div className="flex-1 min-w-[280px]">
//             <h2 className="text-[1.8rem] font-bold bg-gradient-to-r from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mb-4">
//               SkillfyMe
//             </h2>

//             <p className="text-[#4a5568] mb-6 max-w-[300px]">
//               Transforming careers through innovative learning experiences
//             </p>

//             {/* Orbit Images */}
//             {/* <div className="relative w-[100px] h-[100px]">
//               {[1,2,3,4,5,6,7,8].map((num, idx) => (
//                 <div
//                   key={idx}
//                   className="absolute top-1/2 left-1/2 w-[30px] h-[30px]"
//                   style={{
//                     transform: "translate(-50%, -50%)",
//                     animation: `orbit${num} ${8 + idx * 2}s linear infinite ${
//                       idx % 2 ? "reverse" : ""
//                     }`,
//                   }}
//                 >
//                   <img
//                     src={`/f${num}.png`}
//                     alt={`orbit-${num}`}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               ))}
//             </div> */}
//           </div>

//           {/* Columns */}
//           <div className="flex-[2] flex flex-wrap gap-5">

//             {/* Resources */}
//             <div className="flex-1 min-w-[200px]">
//               <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
//                 Resources
//               </h3>

//               <ul className="space-y-3">
//                 {[
//                   ["About Us", "/about-us"],
//                   ["Terms & Condition", "/terms&condition"],
//                   ["Refund/Cancellation Policy", "/refund-policy"],
//                   ["Privacy Policy", "/privacypolicy"],
//                 ].map(([label, link], i) => (
//                   <li key={i} className="animate-fadeInUp">
//                     <Link href={link} className="text-[#4a5568] hover:text-[#0bf]">
//                       {label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="flex-1 min-w-[200px]">
//               <Link href="/contact-us">
//                 <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
//                   Contact Us
//                 </h3>
//               </Link>

//               <div className="space-y-3">
//                 <p className="flex gap-2 items-center">
//                   <Mail size={16} className="text-blue-600" />
//                   support@skillfyme.in
//                 </p>
//                 <p className="flex gap-2 items-center">
//                   <Phone size={16} className="text-blue-600" />
//                   +91-9148463995
//                 </p>
//               </div>
//             </div>

//             {/* Social */}
//             <div className="flex-1 min-w-[200px]">
//               <h3 className="text-lg mb-4 border-b border-[#0bf] inline-block">
//                 Follow Us On
//               </h3>

//               <ul className="space-y-3">
//                 {[
//                   ["YouTube", FaYoutube, "https://www.youtube.com/@Skillfyme"],
//                   ["Instagram", FaInstagram, "https://www.instagram.com/skillfyme"],
//                   ["Quora", FaQuora, "https://www.quora.com"],
//                   ["Google", FaGoogle, "https://www.google.com"],
//                   ["LinkedIn", FaLinkedin, "https://www.linkedin.com"],
//                 ].map(([label, Icon, link], i) => (
//                   <li key={i}>
//                     <a href={link} target="_blank" className="flex items-center gap-2 hover:text-[#0bf]">
//                       <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
//                         <Icon />
//                       </span>
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* SEO Section */}
//         {/* <div className="mt-8 text-sm text-[#444] space-y-6">
//           <div>
//             <h4 className="font-semibold text-[#222] mb-2">Trending Courses</h4>
//             <p>
//               <Link href="#">DevOps with AI Course</Link> |{" "}
//               <Link href="#">MLOps Course</Link> |{" "}
//               <Link href="#">Gen AI Course</Link>
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold text-[#222] mb-2">Trending Categories</h4>
//             <p>
//               <Link href="#">AI & DevOps</Link> |{" "}
//               <Link href="#">MLOps</Link> |{" "}
//               <Link href="#">Generative AI |{" "}</Link>
//               <Link href="#">Agentic AI|{" "}</Link>
//             </p>
//           </div>
//         </div> */}

//         <div className="mt-8 text-sm text-[#444] space-y-6">
//   <div>
//     <h4 className="font-semibold text-[#222] mb-2">Trending Courses</h4>
//     <p>
//       <Link href="#">DevOps with AI Course</Link> |{" "}
//       <Link href="#">DevOps Certification Training</Link> |{" "}
//       <Link href="#">MLOps Course</Link> |{" "}
//       <Link href="#">MLOps Certification</Link> |{" "}
//       <Link href="#">Generative AI Course</Link> |{" "}
//       <Link href="#">Gen AI Certification</Link> |{" "}
//       <Link href="#">Agentic AI Course</Link> |{" "}
//       <Link href="#">AI for DevOps Engineers</Link> |{" "}
//       <Link href="#">AWS DevOps Course</Link> |{" "}
//       <Link href="#">Docker & Kubernetes Course</Link> |{" "}
//       <Link href="#">CI/CD Pipeline Training</Link> |{" "}
//       <Link href="#">Machine Learning Engineer Course</Link> |{" "}
//       <Link href="#">Data Science & AI Course</Link>
//     </p>
//   </div>

//   <div>
//     <h4 className="font-semibold text-[#222] mb-2">Trending Categories</h4>
//     <p>
//       <Link href="#">AI & DevOps</Link> |{" "}
//       <Link href="#">MLOps</Link> |{" "}
//       <Link href="#">Generative AI</Link> |{" "}
//       <Link href="#">Agentic AI</Link> |{" "}
//       <Link href="#">Cloud Computing</Link> |{" "}
//       <Link href="#">AWS & Azure</Link> |{" "}
//       <Link href="#">Kubernetes & Docker</Link> |{" "}
//       <Link href="#">CI/CD & Automation</Link> |{" "}
//       <Link href="#">Machine Learning</Link> |{" "}
//       <Link href="#">Deep Learning</Link> |{" "}
//       <Link href="#">Data Engineering</Link> |{" "}
//       <Link href="#">AI Tools & LLMs</Link>
//     </p>
//   </div>
// </div>

//         {/* Bottom */}
//         <div className="mt-10 text-center">
//           <div className="flex items-center justify-center mb-4">
//             <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#0bf] to-transparent" />
//             <div className="w-2 h-2 bg-[#0bf] rounded-full mx-3 animate-pulse" />
//             <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#0bf] to-transparent" />
//           </div>

//           <p className="text-sm text-[#4a5568]">
//             © {new Date().getFullYear()} Learnsyte Learning Private Limited. All rights reserved.
//           </p>
//         </div>
//       </div>

//       {/* Keyframes */}
//       <style jsx global>{`
//         @keyframes float {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes fadeInUp {
//           from { opacity:0; transform: translateY(30px); }
//           to { opacity:1; transform: translateY(0); }
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;






 
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaQuora,
} from "react-icons/fa";
import { Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const resourceLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Corporate Training", href: "/corporate-training" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Terms & Conditions", href: "/terms&condition" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Privacy Policy", href: "/privacypolicy" },
  ];

  const socials = [
    { label: "YouTube", Icon: FaYoutube, href: "https://www.youtube.com/@Skillfyme" },
    { label: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/skillfyme" },
    { label: "LinkedIn", Icon: FaLinkedin, href: "https://www.linkedin.com" },
    { label: "Quora", Icon: FaQuora, href: "https://www.quora.com" },
  ];

  const trendingCourses = [
    "DevOps with AI Course",
    "DevOps Certification Training",
    "MLOps Course",
    "MLOps Certification",
    "Generative AI Course",
    "Gen AI Certification",
    "Agentic AI Course",
    "AI for DevOps Engineers",
    "AWS DevOps Course",
    "Docker & Kubernetes Course",
    "CI/CD Pipeline Training",
    "Machine Learning Engineer Course",
    "Data Science & AI Course",
  ];

  const trendingCategories = [
    "AI & DevOps",
    "MLOps",
    "Generative AI",
    "Agentic AI",
    "Cloud Computing",
    "AWS & Azure",
    "Kubernetes & Docker",
    "CI/CD & Automation",
    "Machine Learning",
    "Deep Learning",
    "Data Engineering",
    "AI Tools & LLMs",
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>

      <footer
        className={`relative w-full bg-[#fafaf7] text-[#0a0a0a] overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
       style={{
          fontFamily: "'Raleway', sans-serif",
          background: "linear-gradient(135deg, #f8faff 0%, #f0f5ff 100%)",
          color: "#0a0a0a",
        }}
      
      >
        {/* Subtle grid backdrop */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at top, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 40%, transparent 90%)",
          }}
        />

        {/* Ambient orange glow */}
        <div className="absolute top-0 -left-40 w-[500px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.04] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.035] blur-[110px] pointer-events-none" />

        <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-8">
          {/* ═══════ BRAND STATEMENT ═══════ */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
              <div className="col-span-12 lg:col-span-8">
                <div className="inline-flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="h-[1px] w-8 sm:w-10 bg-[#ff6b35]" />
                  <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#007bff] font-bold">
                    Skillfyme
                  </span>
                </div>

                <h2
                  className="text-[clamp(1.8rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0a0a0a] mb-3 sm:mb-4"
                  style={{ fontWeight: 800 }}
                >
                  Transforming careers
                  <br />
                  <span className="text-[#0a0a0a]/35">through mastery.</span>
                </h2>

                <p className="max-w-[480px] text-[0.9rem] sm:text-[1rem] text-[#0a0a0a]/60 leading-[1.6] font-light">
                  Industry-led master's programs designed for engineers who want production skills, real mentorship, and measurable outcomes.
                </p>
              </div>

              {/* Newsletter / CTA card */}
              <div className="col-span-12 lg:col-span-4">
                <div className="relative bg-[#0a0a0a] text-white rounded-2xl p-5 sm:p-6 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff6b35] opacity-[0.2] blur-[60px] rounded-full pointer-events-none" />

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Sparkles
                        size={12}
                        className="text-[#ff6b35]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#ff6b35] font-bold">
                        Get Updates
                      </span>
                    </div>

                    <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold tracking-tight leading-tight mb-4">
                      Free career roadmap & cohort invites.
                    </h3>
                     
                     <a
                    
                      href="/contact-us"
                      className="group relative flex items-center justify-between bg-white/5 border border-white/10 rounded-full px-4 py-2.5 hover:bg-white/10 hover:border-[#ff6b35]/40 transition-all duration-400"
                    >
                      <span className="text-[0.78rem] font-bold tracking-[0.08em] uppercase text-white/80 group-hover:text-white transition-colors">
                        Talk to an advisor
                      </span>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="text-[#ff6b35] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-10 sm:mb-12 h-[1px] w-full bg-gradient-to-r from-[#0a0a0a]/15 via-[#0a0a0a]/5 to-transparent" />

          {/* ═══════ LINK COLUMNS ═══════ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-10 mb-12 sm:mb-14">
            {/* Resources */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                  Resources
                </span>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[0.85rem] sm:text-[0.9rem] text-[#0a0a0a]/70 hover:text-[#0a0a0a] font-medium transition-colors"
                    >
                      <span className="border-b border-transparent group-hover:border-[#ff6b35] transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={11}
                        strokeWidth={2.5}
                        className="text-[#0a0a0a]/0 group-hover:text-[#ff6b35] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
               
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                  Contact
                </span>
              </div>
              <ul className="space-y-3 sm:space-y-3.5">
                <li>
                  <a
                    href="mailto:support@skillfyme.in"
                    className="group flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0a]/[0.04] flex items-center justify-center group-hover:bg-[#ff6b35] transition-colors duration-400 flex-shrink-0">
                      <Mail
                        size={13}
                        className="text-[#0a0a0a]/60 group-hover:text-white transition-colors"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div>
                      <div className="text-[0.58rem] uppercase tracking-[0.2em] text-[#0a0a0a]/45 font-bold">
                        Email
                      </div>
                      <div className="text-[0.85rem] sm:text-[0.88rem] text-[#0a0a0a] font-semibold mt-0.5">
                        support@skillfyme.in
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919148463995"
                    className="group flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0a]/[0.04] flex items-center justify-center group-hover:bg-[#ff6b35] transition-colors duration-400 flex-shrink-0">
                      <Phone
                        size={13}
                        className="text-[#0a0a0a]/60 group-hover:text-white transition-colors"
                        strokeWidth={2.2}
                      />
                    </div>
                    <div>
                      <div className="text-[0.58rem] uppercase tracking-[0.2em] text-[#0a0a0a]/45 font-bold">
                        Phone
                      </div>
                      <div className="text-[0.85rem] sm:text-[0.88rem] text-[#0a0a0a] font-semibold mt-0.5">
                        +91 91484 63995
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Rail */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-4">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                  Follow
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ label, Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group relative w-10 h-10 rounded-full bg-white border border-[#0a0a0a]/8 flex items-center justify-center hover:border-[#ff6b35]/40 hover:bg-[#ff6b35] transition-all duration-400 shadow-[0_2px_8px_rgba(10,10,10,0.03)]"
                  >
                    <Icon
                      size={14}
                      className="text-[#0a0a0a]/60 group-hover:text-white transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>

              {/* Social caption */}
              <p className="mt-4 text-[0.72rem] text-[#0a0a0a]/50 font-light leading-relaxed max-w-[260px]">
                Daily insights on AI, DevOps & career growth — delivered where you scroll.
              </p>
            </div>
          </div>

          {/* ═══════ SEO TAG CLOUDS ═══════ */}
          <div className="mb-10 sm:mb-12 pt-10 sm:pt-12 border-t border-[#0a0a0a]/8">
            {/* Trending Courses */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                  Trending Courses
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {trendingCourses.map((course, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-[0.7rem] sm:text-[0.75rem] font-semibold text-[#0a0a0a]/65 bg-white border border-[#0a0a0a]/8 px-3 py-1.5 rounded-md hover:border-[#ff6b35]/40 hover:text-[#ff6b35] hover:bg-[#ff6b35]/5 transition-all duration-300"
                  >
                    {course}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Categories */}
            <div>
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
             
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#0a0a0a]/55 font-bold">
                  Trending Categories
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {trendingCategories.map((cat, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="text-[0.7rem] sm:text-[0.75rem] font-semibold text-[#0a0a0a]/65 bg-[#f5f5f0] px-3 py-1.5 rounded-md hover:bg-[#ff6b35] hover:text-white transition-all duration-300"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════ BOTTOM SIGN-OFF ═══════ */}
          <div className="pt-8 border-t border-[#0a0a0a]/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:gap-6">
              {/* Left: Brand mark + copyright */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  
                </div>
                <p className="text-[0.72rem] sm:text-[0.78rem] text-[#0a0a0a]/55 font-medium">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-extrabold text-[#0a0a0a]">
                    Learnsyte Learning Private Limited(SkillfyMe)
                  </span>{" "}
                  All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;