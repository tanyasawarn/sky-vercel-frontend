 "use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Play } from "lucide-react";

const slides = [
  {
    id: "01",
    tag: "DevOps & Cloud",
    title: "DevOps With AI Master Course",
    desc: "Automate infrastructure with intelligent pipelines. Master the intersection of LLMs and CI/CD.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/Devops_Bg.png",
    link: "/courses/devops-with-ai-masters-program",
    reviewLink:
      "https://www.youtube.com/watch?v=TrW1w9a-V7k&list=PLsNEcVckmpG7azHEQrCNmcHSbylRa-DwS",
  },
  {
    id: "02",
    tag: "Machine Learning",
    title: "GenAI With ML Master Course",
    desc: "From RAG architectures to Fine-tuning. Build production-ready AI agents from scratch.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/genaiwithmlbanner.png",
    link: "/courses/genai-with-ml-masters-program",
    reviewLink: "https://m.youtube.com/@Skillfyme/videos",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);

  const timer = setInterval(() => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, 7000);

  return () => clearInterval(timer);
}, []);

if (!mounted) return null;

  return (
    <section className="relative h-[85vh] w-full bg-[#080b11] text-white overflow-hidden flex items-center font-[Inter]">

      {/* Background Layer */}
      <div className="absolute inset-0 z-[1]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"
            }`}
            style={{
              backgroundImage: `url(${s.img})`,
              filter: "brightness(0.65) contrast(1.1)",
            }}
          />
        ))}

        {/* Palette Overlay */}
        <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(173,216,230,.2)_0,transparent_20%),radial-gradient(circle_at_80%_20%,rgba(135,206,250,.2)_0,transparent_20%),radial-gradient(circle_at_40%_40%,rgba(176,224,230,.1)_0,transparent_30%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,11,17,0.9)_0%,rgba(8,11,17,0.4)_50%,rgba(8,11,17,0.1)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[1300px] mx-auto px-10 flex justify-between items-center">

        <header className="max-w-[600px] animate-[fadeIn_1s_ease-out]">
          <div className="mb-5">
            <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#add8e6] px-3 py-1 rounded bg-[rgba(173,216,230,0.1)]">
              {slides[active].tag}
            </span>
          </div>

          <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.1] mb-5 tracking-[-1px]">
            {slides[active].title}
          </h1>

          <p className="text-[1.1rem] text-white/70 mb-9 leading-[1.6]">
            {slides[active].desc}
          </p>

          <div className="flex gap-4 flex-col md:flex-row">
            <button
              className="bg-white text-[#080b11] px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#add8e6] hover:-translate-y-[2px] transition"
              onClick={() => router.push(slides[active].link)}
            >
              Get Started <ArrowUpRight size={18} />
            </button>

            <a
              href={slides[active].reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 border border-white/10 px-8 py-3 rounded-md flex items-center gap-2 backdrop-blur-md hover:bg-white/10 hover:border-[#add8e6] transition"
            >
              <Play size={16} fill="currentColor" /> Watch Trailer
            </a>
          </div>
        </header>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: auto;
            min-height: 80vh;
            padding: 60px 0;
            background-image:
              radial-gradient(circle at 20% 80%, rgba(173, 216, 230, 0.15) 0, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(135, 206, 250, 0.15) 0, transparent 40%);
          }
          div.absolute {
            display: none;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;


