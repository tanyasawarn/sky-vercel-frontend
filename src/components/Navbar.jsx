// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   // const isCoursePage = pathname.includes("devops");
// const courseRoutes = ["devops", "genai", "ml", "aws"];
// const isCoursePage = courseRoutes.some(route => pathname.includes(route));

//   const sections = ["home", "projects", "course-fee", "testimonials"];

//   // Scroll Spy
//   useEffect(() => {
//     if (!isCoursePage) return;

//     const handleScroll = () => {
//       let current = "home";

//       sections.forEach((id) => {
//         const el = document.getElementById(id);
//         if (el) {
//           const top = el.offsetTop - 120;
//           if (window.scrollY >= top) current = id;
//         }
//       });

//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isCoursePage]);

//   // Navbar background change on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogin = () => {
//     window.open(
//       "https://lms.skillfyme.com/learn/account/signin",
//       "_blank",
//       "noopener,noreferrer"
//     );
//   };

//   const navLink = (id, label) => (
//     <a
//       href={`#${id}`}
//       onClick={() => setMenuOpen(false)}
//       className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
//         activeSection === id
//           ? "text-blue-600"
//           : "text-gray-700 hover:text-blue-600"
//       }`}
//     >
//       {label}

//       {/* Animated underline */}
//       <span
//         className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
//           activeSection === id ? "w-full" : "w-0 group-hover:w-full"
//         }`}
//       />
//     </a>
//   );

//   return (
//     <>
//       <header
//         className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
//       >
//         <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <img src="/sfnewlogo.webp" className="w-32" />
//           </Link>

//           {/* Desktop */}
//           <nav className="hidden lg:flex items-center gap-6">
//             {isCoursePage ? (
//               <>
//                 {navLink("home", "Home")}
//                 {navLink("coursedetails", "Curriculum")}
//                 {navLink("projects", "Projects")}
//                 {navLink("course-fee", "Course Fee")}
//                 {navLink("testimonials", "Testimonials")}
//                 <Link href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
//                 {/* <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blogs</Link> */}
//                  <Link href="/corporate-training" className="text-gray-700 hover:text-blue-600">Corporate Training</Link>
//                  <Link href="/contact-us" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
//                 <Link href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</Link>
//               </>
//             )}
//           </nav>

//           {/* Right Side */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button
//               onClick={handleLogin}
//               className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               Login
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             className="lg:hidden text-2xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
// {menuOpen && (
//   <div className="lg:hidden bg-white border-t shadow-lg px-6 py-6 flex flex-col gap-4 text-center">
    
//     {isCoursePage ? (
//       <>
//         {navLink("home", "Home")}
//         {navLink("coursedetails", "Curriculum")}
//         {navLink("projects", "Projects")}
//         {navLink("course-fee", "Course Fee")}
//         {navLink("testimonials", "Testimonials")}

//         <Link
//           href="/about-us"
//           onClick={() => setMenuOpen(false)}
//           className="text-gray-700 text-base font-medium"
//         >
//           About Us
//         </Link>
//       </>
//     ) : (
//       <>
//         <Link
//           href="/"
//           onClick={() => setMenuOpen(false)}
//           className="text-gray-700 text-base font-medium"
//         >
//           Home
//         </Link>

//         <Link
//           href="/corporate-training"
//           onClick={() => setMenuOpen(false)}
//           className="text-gray-700 text-base font-medium"
//         >
//           Corporate Training
//         </Link>

//         <Link
//           href="/contact-us"
//           onClick={() => setMenuOpen(false)}
//           className="text-gray-700 text-base font-medium"
//         >
//           Contact Us
//         </Link>

//         <Link
//           href="/about-us"
//           onClick={() => setMenuOpen(false)}
//           className="text-gray-700 text-base font-medium"
//         >
//           About Us
//         </Link>
//       </>
//     )}

//     {/* Divider */}
//     <div className="border-t my-2"></div>

//     {/* Login Button */}
//     <button
//       onClick={() => {
//         handleLogin();
//         setMenuOpen(false);
//       }}
//       className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium"
//     >
//       Login
//     </button>
//   </div>
// )}
//       </header>

//       {/* Spacer */}
//       <div className="h-16"></div>
//     </>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const courseRoutes = ["devops", "genai", "ml", "aws"];
  const isCoursePage = courseRoutes.some((route) => pathname.includes(route));

  const sections = ["home", "coursedetails", "projects", "course-fee", "testimonials"];

  useEffect(() => {
    if (!isCoursePage) return;
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCoursePage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogin = () => {
    window.open(
      "https://lms.skillfyme.com/learn/account/signin",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const courseLinks = [
    { id: "home", label: "Home" },
    { id: "coursedetails", label: "Curriculum" },
    { id: "projects", label: "Projects" },
    { id: "course-fee", label: "Pricing" },
    { id: "testimonials", label: "Reviews" },
  ];

  const staticLinks = [
    { href: "/", label: "Home" },
    { href: "/corporate-training", label: "Corporate" },
    { href: "/contact-us", label: "Contact" },
    { href: "/about-us", label: "About" },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes navFloatIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes mobileStagger {
          from {
            opacity: 0;
            transform: translateX(-24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.45);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(255, 107, 53, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
          }
        }
      `}</style>

      {/* ────────── DESKTOP CAPSULE (matches hero width) ────────── */}
      <header
        className="fixed left-0 right-0 z-[100] hidden lg:block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          fontFamily: "'Raleway', sans-serif",
          top: scrolled ? "14px" : "24px",
          animation: "navFloatIn 0.9s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div
            className={`relative flex items-stretch justify-between bg-white/85 backdrop-blur-2xl border border-[#0a0a0a]/8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "px-1.5 py-1.5" : "px-2 py-2"
            }`}
            style={{
              boxShadow:
                "0 20px 50px rgba(10, 10, 10, 0.08), 0 4px 14px rgba(10, 10, 10, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            }}
          >
            {/* Orange tint glow */}
            <div className="absolute -inset-[1px] rounded-full pointer-events-none opacity-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#ff6b35]/8 to-transparent" />
            </div>

            {/* LEFT CLUSTER: Brand + Nav */}
            <div className="flex items-stretch">
              {/* ZONE 1: BRAND */}
              <Link
                href="/"
                className="group relative flex items-center gap-2.5 pl-4 pr-5 rounded-full hover:bg-[#0a0a0a]/[0.03] transition-all duration-300"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                  <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-ping" />
                </div>

                <img
                  src="/sfnewlogo.webp"
                  alt="Skillfyme"
                  className={`object-contain transition-all duration-500 ${
                    scrolled ? "h-7" : "h-8"
                  }`}
                  style={{ mixBlendMode: "multiply" }}
                />
              </Link>

              {/* DIVIDER */}
              <div className="w-[1px] bg-[#0a0a0a]/10 my-2.5" />

              {/* ZONE 2: NAVIGATION */}
              <nav className="flex items-center px-2">
                {isCoursePage
                  ? courseLinks.map((link, i) => (
                      <CapsuleLink
                        key={i}
                        id={link.id}
                        label={link.label}
                        isActive={activeSection === link.id}
                        isScroll
                      />
                    ))
                  : staticLinks.map((link, i) => (
                      <CapsuleLink
                        key={i}
                        href={link.href}
                        label={link.label}
                        isActive={pathname === link.href}
                      />
                    ))}
              </nav>
            </div>

            {/* RIGHT CLUSTER: Divider + Action */}
            <div className="flex items-stretch">
              <div className="w-[1px] bg-[#0a0a0a]/10 my-2.5" />

              {/* ZONE 3: ACTION */}
              <div className="flex items-center gap-1.5 pl-2 pr-1.5">
           
       

                <button
                  onClick={handleLogin}
                  className={`group relative bg-[#ff6b35] text-white rounded-full overflow-hidden transition-all hover:scale-[1.04] shadow-[0_6px_20px_rgba(255,107,53,0.35)] ${
                    scrolled ? "h-10 px-4" : "h-11 px-5"
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-[0.75rem] font-bold tracking-[0.1em] uppercase">
                      Login
                    </span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.5}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#ff4d1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ────────── MOBILE CAPSULE (matches hero width) ────────── */}
      <header
        className="fixed top-4 left-0 right-0 z-[100] lg:hidden"
        style={{
          fontFamily: "'Raleway', sans-serif",
          animation: "navFloatIn 0.9s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div
            className="relative flex items-center justify-between bg-white/90 backdrop-blur-2xl border border-[#0a0a0a]/8 rounded-full px-4 py-2.5"
            style={{
              boxShadow:
                "0 14px 40px rgba(10, 10, 10, 0.08), 0 4px 14px rgba(10, 10, 10, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            }}
          >
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-ping" />
              </div>
              <img
                src="/sfnewlogo.webp"
                alt="Skillfyme"
                className="h-7 object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLogin}
                className="hidden sm:flex h-9 px-4 bg-[#ff6b35] text-white rounded-full items-center gap-1.5 shadow-[0_4px_14px_rgba(255,107,53,0.35)]"
              >
                <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase">
                  Login
                </span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-9 h-9 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-[0_4px_14px_rgba(255,107,53,0.35)] hover:scale-105 transition-transform"
                aria-label="Toggle menu"
                style={{ animation: "pulseRing 2.5s ease-out infinite" }}
              >
                <div className="relative w-4 h-4">
                  <Menu
                    size={16}
                    strokeWidth={2.5}
                    className={`absolute inset-0 text-white transition-all duration-400 ${
                      menuOpen
                        ? "opacity-0 rotate-90 scale-50"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={16}
                    strokeWidth={2.5}
                    className={`absolute inset-0 text-white transition-all duration-400 ${
                      menuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-50"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ────────── MOBILE FULLSCREEN MENU ────────── */}
      <div
        className={`lg:hidden fixed inset-0 z-[99] transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ fontFamily: "'Raleway', sans-serif" }}
      >
        <div
          className="absolute inset-0 bg-[#fafaf7]/97 backdrop-blur-2xl"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,10,10,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,10,10,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#ff6b35] opacity-[0.08] blur-[130px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#ff6b35] opacity-[0.06] blur-[100px] pointer-events-none" />

        <div className="relative h-full flex flex-col pt-24 px-6 sm:px-10 pb-8 overflow-y-auto">
          <div
            className="inline-flex items-center gap-3 mb-3"
            style={{
              animation: menuOpen
                ? "mobileStagger 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both"
                : "none",
            }}
          >
            <div className="h-[1px] w-10 bg-[#ff6b35]" />
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#ff6b35] font-bold">
              Navigate
            </span>
          </div>

          <h2
            className="text-[2rem] sm:text-[2.4rem] font-extrabold tracking-[-0.02em] leading-[1.05] mb-8 text-[#0a0a0a]"
            style={{
              animation: menuOpen
                ? "mobileStagger 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s both"
                : "none",
            }}
          >
            Where to?
            <br />
            <span className="text-[#0a0a0a]/30">Pick your path.</span>
          </h2>

          <nav className="flex flex-col flex-1">
            {(isCoursePage ? courseLinks : staticLinks).map((link, i) => (
              <MobileNavLink
                key={i}
                id={link.id}
                href={link.href}
                label={link.label}
                number={String(i + 1).padStart(2, "0")}
                activeSection={activeSection}
                onClose={() => setMenuOpen(false)}
                delay={0.22 + i * 0.05}
                menuOpen={menuOpen}
                isScroll={isCoursePage}
              />
            ))}
          </nav>

          <div
            className="mt-8 pt-6 border-t border-[#0a0a0a]/10"
            style={{
              animation: menuOpen
                ? "mobileStagger 0.6s cubic-bezier(0.22,1,0.36,1) 0.55s both"
                : "none",
            }}
          >
            <button
              onClick={() => {
                handleLogin();
                setMenuOpen(false);
              }}
              className="group relative w-full bg-[#ff6b35] text-white py-4 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(255,107,53,0.35)] transition-transform hover:scale-[1.01] mb-5"
            >
              <div className="relative z-10 flex items-center justify-center gap-2.5">
                <span className="text-[0.85rem] font-bold tracking-[0.1em] uppercase">
                  Login to Dashboard
                </span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.22em] font-bold">
              <div className="flex items-center gap-2 text-[#0a0a0a]/55">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
                <span>Applications Open</span>
              </div>
              <span className="text-[#0a0a0a]/40">Skillfyme · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ────────── CAPSULE LINK (DESKTOP) ────────── */
const CapsuleLink = ({ id, href, label, isActive, isScroll }) => {
  const baseClasses = `relative px-4 h-9 flex items-center rounded-full text-[0.78rem] font-semibold tracking-wide transition-all duration-300 ${
    isActive
      ? "bg-[#0a0a0a] text-white"
      : "text-[#0a0a0a]/65 hover:text-[#0a0a0a] hover:bg-[#0a0a0a]/[0.05]"
  }`;

  const content = (
    <>
      <span className="relative z-10">{label}</span>
      {isActive && (
        <div
          className="ml-2 w-1 h-1 rounded-full bg-[#ff6b35]"
          style={{ boxShadow: "0 0 8px rgba(255,107,53,0.8)" }}
        />
      )}
    </>
  );

  if (isScroll) {
    return (
      <a href={`#${id}`} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {content}
    </Link>
  );
};

/* ────────── MOBILE NAV LINK ────────── */
const MobileNavLink = ({
  id,
  href,
  label,
  number,
  activeSection,
  onClose,
  delay = 0,
  menuOpen,
  isScroll = false,
}) => {
  const isActive = isScroll ? activeSection === id : false;

  const content = (
    <div className="group relative flex items-center gap-5 py-4 border-b border-[#0a0a0a]/[0.08] hover:border-[#ff6b35]/40 transition-all duration-400">
      <span
        className={`text-[0.65rem] font-mono font-bold tracking-tight w-8 flex-shrink-0 transition-colors duration-300 ${
          isActive ? "text-[#ff6b35]" : "text-[#0a0a0a]/30 group-hover:text-[#ff6b35]"
        }`}
      >
        / {number}
      </span>

      <span
        className={`text-[1.5rem] sm:text-[1.75rem] font-extrabold tracking-tight transition-all duration-400 ${
          isActive
            ? "text-[#ff6b35] translate-x-2"
            : "text-[#0a0a0a] group-hover:text-[#ff6b35] group-hover:translate-x-2"
        }`}
      >
        {label}
      </span>

      <div
        className={`ml-auto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
          isActive
            ? "bg-[#ff6b35] text-white"
            : "bg-[#0a0a0a]/[0.04] text-[#0a0a0a]/40 group-hover:bg-[#ff6b35] group-hover:text-white"
        }`}
      >
        <ChevronRight size={16} strokeWidth={2.5} />
      </div>
    </div>
  );

  const animationStyle = {
    animation: menuOpen
      ? `mobileStagger 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s both`
      : "none",
  };

  if (isScroll) {
    return (
      <a href={`#${id}`} onClick={onClose} style={animationStyle}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClose} style={animationStyle}>
      {content}
    </Link>
  );
};