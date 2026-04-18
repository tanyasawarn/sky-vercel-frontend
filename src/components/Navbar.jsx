"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // const isCoursePage = pathname.includes("devops");
const courseRoutes = ["devops", "genai", "ml", "aws"];
const isCoursePage = courseRoutes.some(route => pathname.includes(route));

  const sections = ["home", "projects", "course-fee", "testimonials"];

  // Scroll Spy
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

  // Navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    window.open(
      "https://lms.skillfyme.com/learn/account/signin",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const navLink = (id, label) => (
    <a
      href={`#${id}`}
      onClick={() => setMenuOpen(false)}
      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
        activeSection === id
          ? "text-blue-600"
          : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}

      {/* Animated underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
          activeSection === id ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/sfnewlogo.webp" className="w-32" />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {isCoursePage ? (
              <>
                {navLink("home", "Home")}
                {navLink("coursedetails", "Curriculum")}
                {navLink("projects", "Projects")}
                {navLink("course-fee", "Course Fee")}
                {navLink("testimonials", "Testimonials")}
                <Link href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</Link>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                {/* <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blogs</Link> */}
                 <Link href="/corporate-training" className="text-gray-700 hover:text-blue-600">Corporate Training</Link>
                 <Link href="/contact-us" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
                <Link href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</Link>
              </>
            )}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleLogin}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t shadow-lg p-5 space-y-4">
            {isCoursePage ? (
              <>
                {navLink("home", "Home")}
                {navLink("projects", "Projects")}
                {navLink("course-fee", "Course Fee")}
                {navLink("testimonials", "Testimonials")}
                <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </>
            ) : (
              <>
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                {/* <Link href="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link> */}
                <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
              </>
            )}

            {/* Mobile Login */}
            <button
              onClick={() => {
                handleLogin();
                setMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium"
            >
              Login
            </button>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}
