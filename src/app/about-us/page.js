"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const coreValues = [
  {
    icon: "🌐",
    title: "Global Perspective",
    description:
      "Our programs help learners break into high-demand tech roles like DevOps, Cloud, and AI — with a globally competitive mindset.",
  },
  {
    icon: "🤝",
    title: "Mentorship First",
    description:
      "Continuous guidance, real interview preparation, and support until every learner feels truly confident and job-ready.",
  },
  {
    icon: "📈",
    title: "Real Growth",
    description:
      "Hands-on projects, real-world scenarios, and skills companies actually look for — not just theoretical knowledge.",
  },
  {
    icon: "🏭",
    title: "Industry Connected",
    description:
      "Close partnerships with industry experts and hiring teams ensure our learners have direct pathways to real opportunities.",
  },
];

const stats = [
  { num: "2k+", label: "Learners Placed" },
  { num: "93%", label: "Satisfaction Rate" },
  { num: "200+", label: "Hiring Partners" },
  { num: "3", label: "Expert Domains" },
];

const features = [
  {
    title: "Hands-on Projects",
    desc: "Real-world scenarios that mirror industry challenges from day one.",
  },
  {
    title: "Mentorship Until Confidence",
    desc: "Continuous guidance until you feel genuinely ready for the job market.",
  },
  {
    title: "Direct Career Pathways",
    desc: "Industry partnerships that create real opportunities — not just certificates.",
  },
];

const leaders = [
  {
    initials: "TK",
    role: "VP Operations",
    name: "Tanya K",
    image: "/tanyafinal.jpeg",
    gradientFrom: "#38bdf8",
    gradientTo: "#0369a1",
    bio: "Passionate about building systems that truly help learners succeed, Tanya shapes the learning experience at Skillfyme — from designing programs to learner support and placement preparation.",
  },
  {
    initials: "RJ",
    role: "Director of Sales",
    name: "Raj",
    image: "/rajfinal.png",
    gradientFrom: "#0ea5e9",
    gradientTo: "#075985",
    bio: "Leading growth and industry partnerships at Skillfyme, Raj focuses on expanding the platform's reach and creating real career pathways in the rapidly evolving tech ecosystem.",
  },
];

/* ─────────────────────────────────────────────
   HOOK: simple intersection observer for fade-in
───────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function SectionLabel({ children }) {
  return (
    <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-500 mb-2">
      {children}
    </p>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      className="w-3.5 h-3.5 stroke-white fill-none"
      strokeWidth={2.5}
    >
      <polyline points="2,7 5.5,10.5 12,3.5" />
    </svg>
  );
}

function FadeSection({ children, className = "" }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function AboutUs() {
  const [dotPulse, setDotPulse] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] overflow-x-hidden font-[family-name:var(--font-dm-sans)]">

      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[88vh] px-6 pt-28 pb-20 overflow-hidden">
        {/* Glow blob */}
        <div className="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-sky-300/20 blur-[100px]" />

        {/* Badge */}
      

        {/* Heading */}
        <h1 className="animate-[fadeUp_0.7s_0.1s_ease_both] font-serif text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.08] tracking-tight text-slate-900 max-w-[820px]">
          We believe in{" "}
          <span className="relative italic text-sky-600">
            transforming careers
            <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 to-sky-700 animate-[lineGrow_0.8s_0.75s_ease_both_forwards] scale-x-0 origin-left" />
          </span>
        </h1>

        {/* Sub */}
        <p className="animate-[fadeUp_0.7s_0.2s_ease_both] mt-7 text-lg text-slate-500 max-w-[540px] leading-relaxed font-light">
          Practical learning and the right mentorship can unlock life-changing
          career opportunities in the tech industry.
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px mx-12 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

      {/* ── STATS BAR ── */}
      <FadeSection className="max-w-3xl mx-auto px-6 pt-14 pb-0">
        <div className="flex flex-wrap bg-white/70 border border-sky-200/50 rounded-2xl overflow-hidden backdrop-blur-md shadow-sm">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 min-w-[140px] px-6 py-7 text-center border-r border-sky-100/60 last:border-r-0"
            >
              <div className="font-serif text-4xl font-black text-sky-600 leading-none mb-1">
                {s.num}
              </div>
              <div className="text-xs text-slate-400 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── CORE VALUES ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeSection className="text-center mb-12">
          <SectionLabel>Our Principles</SectionLabel>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold text-slate-900 leading-snug">
            Built on four core values
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((v, i) => (
            <FadeSection key={i}>
              <div className="group relative h-full bg-white/70 border border-sky-200/40 rounded-2xl p-8 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)] transition-all duration-300 overflow-hidden">
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               
                <h3 className="text-[1rem] font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{v.description}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <FadeSection className="mx-6 lg:mx-16">
        <div className="relative rounded-[28px] bg-gradient-to-br from-sky-600 to-sky-800 px-8 py-16 text-center overflow-hidden">
          {/* Decorative quote */}
          <span className="pointer-events-none select-none absolute -top-10 left-4 font-serif text-[16rem] text-white/5 leading-none">
            "
          </span>
          {/* Subtle dot grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <blockquote className="relative font-serif text-[clamp(1.25rem,2.5vw,1.8rem)] italic text-white max-w-2xl mx-auto leading-relaxed">
            "Our mission is simple — help learners gain real skills, crack
            interviews, and build successful careers in tech."
          </blockquote>
          <cite className="not-italic block mt-5 text-[0.78rem] tracking-[0.14em] uppercase text-white/55 font-medium font-sans">
            — The Skillfyme Team
          </cite>
        </div>
      </FadeSection>

      {/* ── DIFFERENTIATOR ── */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeSection>
          <SectionLabel>What Sets Us Apart</SectionLabel>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold text-slate-900 leading-snug mb-5">
            A different kind of<br />learning platform
          </h2>
          <p className="text-[1rem] text-slate-500 leading-relaxed font-light">
            We want every learner who joins us to grow into a confident
            professional. Our vision is to help people unlock opportunities they
            once thought were out of reach — and build careers they can truly be
            proud of.
          </p>
        </FadeSection>

        <FadeSection className="flex flex-col gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/70 border border-sky-200/40 rounded-2xl p-5 backdrop-blur-md hover:shadow-[0_10px_30px_rgba(14,165,233,0.10)] transition-shadow duration-300"
            >
              <div className="mt-0.5 w-7 h-7 min-w-[28px] rounded-lg bg-gradient-to-br from-sky-400 to-sky-700 flex items-center justify-center">
                <CheckIcon />
              </div>
              <div>
                <h4 className="text-[0.95rem] font-semibold text-slate-900 mb-0.5">
                  {f.title}
                </h4>
                <p className="text-sm text-slate-500 font-light leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </FadeSection>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <FadeSection className="text-center mb-12">
          <SectionLabel>Our People</SectionLabel>
          <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.7rem)] font-bold text-slate-900 leading-snug">
            Meet the minds behind Skillfyme
          </h2>
          <p className="mt-3 text-sm text-slate-400 font-light">
            Visionary leaders driving innovation in tech education
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map((l, i) => (
            <FadeSection key={i}>
              <div className="group relative h-full bg-white/70 border border-sky-200/40 rounded-3xl p-10 text-center backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(14,165,233,0.13)] transition-all duration-300 overflow-hidden">
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Avatar */}
                <div
                  className="relative w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-[6px] ring-sky-400/15"
                  style={{
                    background: `linear-gradient(135deg, ${l.gradientFrom}, ${l.gradientTo})`,
                  }}
                >
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  {/* Fallback initials if image fails */}
                
                </div>

                <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-sky-500 mb-1">
                  {l.role}
                </p>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                  {l.name}
                </h3>
                <p className="text-sm text-slate-500 leading-[1.8] font-light text-left">
                  {l.bio}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── GLOBAL ANIMATION STYLES ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --font-dm-sans: 'DM Sans', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </main>
  );
}