//  "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowUpRight, Play } from "lucide-react";

// const slides = [
//   {
//     id: "01",
//     tag: "DevOps & Cloud",
//     title: "DevOps With AI Master Course",
//     desc: "Automate infrastructure with intelligent pipelines. Master the intersection of LLMs and CI/CD.",
//     img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/Devops_Bg.png",
//     link: "/courses/devops-with-ai-masters-program",
//     reviewLink:
//       "https://www.youtube.com/watch?v=TrW1w9a-V7k&list=PLsNEcVckmpG7azHEQrCNmcHSbylRa-DwS",
//   },
//   {
//     id: "02",
//     tag: "Machine Learning",
//     title: "GenAI With ML Master Course",
//     desc: "From RAG architectures to Fine-tuning. Build production-ready AI agents from scratch.",
//     img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/genaiwithmlbanner.png",
//     link: "/courses/genai-with-ml-masters-program",
//     reviewLink: "https://m.youtube.com/@Skillfyme/videos",
//   },
// ];

// const Hero = () => {
//   const [active, setActive] = useState(0);
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);

// useEffect(() => {
//   setMounted(true);

//   const timer = setInterval(() => {
//     setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   }, 7000);

//   return () => clearInterval(timer);
// }, []);

// if (!mounted) return null;

//   return (
//     <section className="relative h-[85vh] w-full bg-[#080b11] text-white overflow-hidden flex items-center font-[Inter]">

//       {/* Background Layer */}
//       <div className="absolute inset-0 z-[1]">
//         {slides.map((s, i) => (
//           <div
//             key={s.id}
//             className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
//               i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.05]"
//             }`}
//             style={{
//               backgroundImage: `url(${s.img})`,
//               filter: "brightness(0.65) contrast(1.1)",
//             }}
//           />
//         ))}

//         {/* Palette Overlay */}
//         <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(circle_at_20%_80%,rgba(173,216,230,.2)_0,transparent_20%),radial-gradient(circle_at_80%_20%,rgba(135,206,250,.2)_0,transparent_20%),radial-gradient(circle_at_40%_40%,rgba(176,224,230,.1)_0,transparent_30%)]" />

//         {/* Vignette */}
//         <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,11,17,0.9)_0%,rgba(8,11,17,0.4)_50%,rgba(8,11,17,0.1)_100%)]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-[3] w-full max-w-[1300px] mx-auto px-10 flex justify-between items-center">

//         <header className="max-w-[600px] animate-[fadeIn_1s_ease-out]">
//           <div className="mb-5">
//             <span className="inline-block text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#add8e6] px-3 py-1 rounded bg-[rgba(173,216,230,0.1)]">
//               {slides[active].tag}
//             </span>
//           </div>

//           <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.1] mb-5 tracking-[-1px]">
//             {slides[active].title}
//           </h1>

//           <p className="text-[1.1rem] text-white/70 mb-9 leading-[1.6]">
//             {slides[active].desc}
//           </p>

//           <div className="flex gap-4 flex-col md:flex-row">
//             <button
//               className="bg-white text-[#080b11] px-8 py-3 rounded-md font-bold flex items-center gap-2 hover:bg-[#add8e6] hover:-translate-y-[2px] transition"
//               onClick={() => router.push(slides[active].link)}
//             >
//               Get Started <ArrowUpRight size={18} />
//             </button>

//             <a
//               href={slides[active].reviewLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/5 border border-white/10 px-8 py-3 rounded-md flex items-center gap-2 backdrop-blur-md hover:bg-white/10 hover:border-[#add8e6] transition"
//             >
//               <Play size={16} fill="currentColor" /> Watch Trailer
//             </a>
//           </div>
//         </header>
//       </div>

//       {/* Mobile Styles */}
//       <style jsx>{`
//         @media (max-width: 768px) {
//           section {
//             height: auto;
//             min-height: 80vh;
//             padding: 60px 0;
//             background-image:
//               radial-gradient(circle at 20% 80%, rgba(173, 216, 230, 0.15) 0, transparent 40%),
//               radial-gradient(circle at 80% 20%, rgba(135, 206, 250, 0.15) 0, transparent 40%);
//           }
//           div.absolute {
//             display: none;
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;





// ----------------------------------------------New Design -----------------------------------------------------------------------------------------


"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: "01",
    tag: "DevOps & Cloud Engineering",
    eyebrow: "Master Course · 120+ Hours",
    title: "DevOps With AI",
    desc: "Master CI/CD automation, Kubernetes, Terraform, and AI-driven infrastructure. Build production-grade pipelines trusted by 12,000+ engineers.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/Devops_Bg.png",
    link: "/courses/devops-with-ai-masters-program",
    reviewLink: "https://www.youtube.com/watch?v=TrW1w9a-V7k&list=PLsNEcVckmpG7azHEQrCNmcHSbylRa-DwS",
    accent: "#0EA5E9",
    stats: [
      { label: "Students Enrolled", value: "5K+" },
      { label: "Avg. Salary Hike", value: "68%" },
      { label: "Placement Rate", value: "93%" },
    ],
    skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS", "AIOps"],
    features: [
      "CI/CD pipelines with Jenkins, GitHub Actions & GitLab",
      "Docker & Kubernetes (Pods, Deployments, Service Mesh)",
      "Infrastructure as Code with Terraform & Ansible",
      "GitOps with ArgoCD & FluxCD",
      "Monitoring with Prometheus, Grafana & ELK stack",
      "AI-driven DevOps (AIOps & self-healing systems)",
    ],
    cohort: "April 27, 2026",
  },
  {
    id: "02",
    tag: "Generative AI & Machine Learning",
    eyebrow: "Master Course · 140+ Hours",
    title: "GenAI With ML",
    desc: "From RAG pipelines to fine-tuning LLMs. Build and deploy real-world AI agents, vector databases, and production-ready ML systems.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/genaiwithmlbanner.png",
    link: "/courses/genai-with-ml-masters-program",
    reviewLink: "https://m.youtube.com/@Skillfyme/videos",
    accent: "#F97316",
    stats: [
      { label: "Students Enrolled", value: "1K+" },
      { label: "Projects Built", value: "30+" },
      { label: "Industry Mentors", value: "15+" },
    ],
    skills: ["LangChain", "Agentic AI", "RAG", "PyTorch", "HuggingFace", "MLflow"],
    features: [
      "Python, Statistics & Data Analysis foundations",
      "Machine Learning (Regression, Classification, Clustering)",
      "Deep Learning with CNNs, LSTMs & Neural Networks",
      "NLP (NER, Sentiment Analysis, Transformers)",
      "LLMs, RAG pipelines & Vector Databases",
      "Agentic AI & multi-agent systems (LangChain, CrewAI)",
    ],
    cohort: "May 11, 2026",
  },
];

const DURATION = 7000;

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(",");
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const router = useRouter();
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active) return;
    setPrev(active);
    setActive(idx);
    setAnimKey((k) => k + 1);
    setProgress(0);
    setTimeout(() => setPrev(null), 900);
  };

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    setProgress(0);
    startRef.current = performance.now();
    const tick = (now) => {
      const p = Math.min(((now - startRef.current) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    timerRef.current = setTimeout(() => goTo((active + 1) % slides.length), DURATION);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [active, mounted]);

  if (!mounted) return null;

  const s = slides[active];
  const rgb = hexToRgb(s.accent);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .hr-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .hr-root { font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
        .hrc { font-family: 'Barlow Condensed', sans-serif; }

        .hbg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center 30%;
          transition: opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1.6s cubic-bezier(0.4,0,0.2,1);
          will-change: opacity, transform;
        }
        .hbg-in  { opacity: 1; transform: scale(1);    z-index: 2; }
        .hbg-out { opacity: 0; transform: scale(1.04); z-index: 1; }
        .hbg-off { opacity: 0; transform: scale(1.04); z-index: 0; }

        @keyframes sli { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
        @keyframes rsi { from { opacity:0; transform:translateY(10px);  } to { opacity:1; transform:translateY(0); } }
        
        /* Smooth continuous fade-in for features - no sharp edges */
        @keyframes fti { 
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .si  { animation: sli 0.52s cubic-bezier(0.22,1,0.36,1) both; }
        .ri  { animation: rsi 0.52s cubic-bezier(0.22,1,0.36,1) both; }
        .fti { 
          animation: fti 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1) both; 
          will-change: opacity, transform;
        }

        .d0 { animation-delay:0s; }    .d1 { animation-delay:.07s; }
        .d2 { animation-delay:.14s; }  .d3 { animation-delay:.22s; }
        .d4 { animation-delay:.32s; }  .d5 { animation-delay:.44s; }

        .chip {
          padding: 4px 11px; border-radius: 3px;
          font-size: .66rem; font-weight: 500; letter-spacing: .05em;
          border: 1px solid rgba(255,255,255,.1);
          color: rgba(255,255,255,.48);
          background: rgba(255,255,255,.035);
          white-space: nowrap;
          transition: border-color .2s, color .2s;
        }
        .chip:hover { border-color: rgba(255,255,255,.22); color: rgba(255,255,255,.75); }

        .btn-enroll {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 28px; border-radius: 4px; border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: .81rem; font-weight: 500; letter-spacing: .05em;
          color: #fff; cursor: pointer;
          transition: filter .2s, transform .2s;
        }
        .btn-enroll:hover { filter: brightness(1.1); transform: translateY(-2px); }

        .btn-trailer {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: .81rem; font-weight: 400; letter-spacing: .04em;
          background: transparent; border: 1px solid rgba(255,255,255,.13);
          color: rgba(255,255,255,.6); cursor: pointer; text-decoration: none;
          transition: background .2s, border-color .2s, color .2s, transform .2s;
        }
        .btn-trailer:hover {
          background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.25);
          color: rgba(255,255,255,.9); transform: translateY(-2px);
        }

        .stab {
          position: relative; flex: 1;
          display: flex; align-items: center; gap: 16px;
          padding: 15px 26px; background: none; border: none;
          border-right: 1px solid rgba(255,255,255,.05);
          cursor: pointer; text-align: left; overflow: hidden;
          transition: background .25s;
        }
        .stab:last-child { border-right: none; }
        .stab:hover { background: rgba(255,255,255,.025); }

        @media (max-width: 960px) { .rp { display: none !important; } }
        @media (max-width: 640px) {
          .h-stats  { display: none !important; }
          .h-tabbar { display: none !important; }
          .h-mdots  { display: flex !important; }
          .hp { padding: 52px 20px 0 !important; }
        }
        @media (min-width: 641px) { .h-mdots { display: none !important; } }
      `}</style>

      <section
        className="hr-root"
        aria-label={`${s.tag} — ${s.title} Master Course`}
        style={{
          position: "relative", width: "100%",
          minHeight: "100svh", maxHeight: 900,
          background: "#05080F", color: "#fff",
          overflow: "hidden", display: "flex", flexDirection: "column",
        }}
      >
        {/* Backgrounds */}
        {slides.map((sl, i) => (
          <div key={sl.id}
            className={`hbg ${i === active ? "hbg-in" : i === prev ? "hbg-out" : "hbg-off"}`}
            style={{ backgroundImage: `url(${sl.img})`, filter: "brightness(0.28) saturate(0.8)" }}
          />
        ))}

        {/* Overlays */}
        <div style={{ position:"absolute", inset:0, zIndex:3, pointerEvents:"none",
          background:"linear-gradient(108deg,rgba(5,8,15,.98) 0%,rgba(5,8,15,.72) 44%,rgba(5,8,15,.15) 100%)" }} />
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"40%", zIndex:3, pointerEvents:"none",
          background:"linear-gradient(to top,rgba(5,8,15,1) 0%,transparent 100%)" }} />
        <div style={{ position:"absolute", inset:0, zIndex:3, pointerEvents:"none",
          background:`radial-gradient(ellipse 48% 58% at 0% 100%,rgba(${rgb},.1) 0%,transparent 60%)`,
          transition:"background 1s ease" }} />

        {/* Top accent line */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:2, zIndex:6,
          background:`linear-gradient(90deg,${s.accent} 0%,transparent 38%)`,
          transition:"background .8s ease",
        }} />

        {/* ── Content ── */}
        <div className="hp" style={{
          position:"relative", zIndex:5, flex:1,
          display:"flex", alignItems:"center",
          maxWidth:1380, margin:"0 auto", width:"100%",
          padding:"clamp(60px,9vw,100px) clamp(24px,5vw,72px) 0",
          gap:"clamp(28px,4vw,60px)",
        }}>

          {/* Left */}
          <div style={{ flex:"1 1 auto", maxWidth:600 }}>

            {/* Eyebrow row */}
            <div key={`ey-${animKey}`} className="si d0"
              style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}
            >
              <span className="hrc" style={{
                fontSize:"clamp(.9rem,1.4vw,1.05rem)", fontWeight:700,
                color:s.accent, letterSpacing:".08em", lineHeight:1,
                transition:"color .6s ease",
              }}>{s.id}</span>
              <span style={{ width:26, height:1, background:`rgba(${rgb},.45)` }} />
              <span style={{
                fontSize:".66rem", fontWeight:500,
                letterSpacing:".18em", textTransform:"uppercase",
                color:"rgba(255,255,255,.38)",
              }}>{s.eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 key={`t-${animKey}`} className="hrc si d1"
              style={{
                fontSize:"clamp(3.2rem,6.8vw,6rem)", fontWeight:800,
                lineHeight:.95, letterSpacing:".01em",
                textTransform:"uppercase", color:"#fff", marginBottom:6,
              }}
            >{s.title}</h1>

            <div key={`sub-${animKey}`} className="hrc si d2"
              style={{
                fontSize:"clamp(1.5rem,3vw,2.4rem)", fontWeight:600,
                letterSpacing:".06em", textTransform:"uppercase",
                color:s.accent, marginBottom:"1.4rem",
                transition:"color .6s ease",
              }}
            >Master Course</div>

            {/* Desc */}
            <p key={`d-${animKey}`} className="ri d3 text-cyan-600"
              style={{
                fontSize:"clamp(.85rem,1.15vw,.94rem)",
                 lineHeight:1.75,
                maxWidth:460, fontWeight:300, marginBottom:"1.4rem",
              }}
            >{s.desc}</p>

            {/* Chips */}
            <div key={`ch-${animKey}`} className="ri d3"
              style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:"1.8rem" }}
            >
              {s.skills.map((sk) => (
                <span key={sk} className="chip">{sk}</span>
              ))}
            </div>

            {/* CTAs */}
            <div key={`cta-${animKey}`} className="ri d4"
              style={{ display:"flex", flexWrap:"wrap", gap:10, alignItems:"center", marginBottom:"2rem" }}
            >
              <button className="btn-enroll"
                onClick={() => router.push(s.link)}
                style={{
                  background: s.accent,
                  boxShadow:`0 4px 22px rgba(${rgb},.28)`,
                }}
              >
                Enroll Now
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <a href={s.reviewLink} target="_blank" rel="noopener noreferrer" className="btn-trailer">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.2" stroke="currentColor" strokeWidth="1.1"/>
                  <polygon points="4.8,3.6 9.6,6 4.8,8.4" fill="currentColor"/>
                </svg>
                Watch Trailer
              </a>

              <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.28)", display:"flex", alignItems:"center", gap:5 }}>
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path d="M5 .8L6.2 3.7H9.3L6.8 5.5 7.7 8.5 5 6.8 2.3 8.5 3.2 5.5.7 3.7H3.8Z" fill="rgba(255,195,55,.7)"/>
                </svg>
                4.8/5 Rating
              </span>
            </div>

            {/* Stats */}
            <div key={`st-${animKey}`} className="ri d5 h-stats"
              style={{ display:"flex", paddingTop:18, borderTop:"1px solid rgba(255,255,255,.07)" }}
            >
              {s.stats.map((st, i) => (
                <div key={st.label} style={{
                  flex:1, paddingLeft: i===0 ? 0 : 20, paddingRight:20,
                  borderRight: i < s.stats.length-1 ? "1px solid rgba(255,255,255,.07)" : "none",
                }}>
                  <div className="hrc" style={{
                    fontSize:"clamp(1.3rem,2.2vw,1.7rem)", fontWeight:700,
                    color:"#fff", lineHeight:1, marginBottom:5, letterSpacing:".02em",
                  }}>{st.value}</div>
                  <div style={{
                    fontSize:".61rem", color:"rgba(255,255,255,.3)",
                    letterSpacing:".08em", textTransform:"uppercase",
                  }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <aside className="rp" aria-label="Course details" style={{
            flex:"0 0 auto", width:"clamp(258px,27vw,312px)",
            background:"rgba(255,255,255,.034)",
            border:"1px solid rgba(255,255,255,.08)",
            borderRadius:8, padding:"22px 20px",
            backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
          }}>
            {/* Rating */}
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
              <div style={{ display:"flex", gap:2 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 11 11">
                    <path d="M5.5.9 6.8 4H10L7.4 5.9l1 3.2L5.5 7.4l-2.9 1.7 1-3.2L1 4h3.2Z" fill="rgba(255,190,45,.88)"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontSize:".7rem", color:"rgba(255,255,255,.36)" }}>4.8 · Student reviews</span>
            </div>

            <p style={{
              fontSize:".58rem", letterSpacing:".16em",
              textTransform:"uppercase", color:"rgba(255,255,255,.24)",
              marginBottom:12,
            }}>Curriculum highlights</p>

            {/* 
              SMOOTH FEATURE ANIMATION - No sharp edges
              All features fade in gently with a subtle upward motion
              Same sequential timing but each entry is smooth and continuous
            */}
            <div style={{ display:"flex", flexDirection:"column" }}>
              {s.features.map((f, i) => {
                // Calculate staggered delay: 0s, 0.08s, 0.16s, 0.24s, 0.32s, 0.40s
                const delay = i * 0.08;
                return (
                  <div 
                    key={`${active}-${i}`} 
                    className="fti"
                    style={{ 
                      animationDelay: `${delay}s`,
                      animationFillMode: "both"
                    }}
                  >
                    <div style={{
                      display:"flex", alignItems:"flex-start", gap:10,
                      padding:"8px 0",
                      borderBottom: i < s.features.length - 1
                        ? "1px solid rgba(255,255,255,.05)" : "none",
                    }}>
                      <span className="hrc" style={{
                        fontSize:".8rem", fontWeight:700, lineHeight:1,
                        color:"#fff", minWidth:18, marginTop:2, flexShrink:0,
                        transition:"color .6s ease",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{
                        fontSize:".8rem", color:"#fff",
                        lineHeight:1.48, fontWeight:300,
                      }}>{f}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ borderTop:"1px solid rgba(255,255,255,.07)", margin:"14px 0" }} />

            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <div>
                <p style={{
                  fontSize:".57rem", letterSpacing:".12em",
                  textTransform:"uppercase", color:"rgba(255,255,255,.24)", marginBottom:3,
                }}>Next Cohort</p>
                <p style={{ fontSize:".84rem", color:"#fff", fontWeight:500 }}>{s.cohort}</p>
              </div>
              <span style={{
                fontSize:".61rem", padding:"4px 10px", borderRadius:20,
                background:`rgba(${rgb},.13)`, color:s.accent, fontWeight:500,
                transition:"background .6s, color .6s",
              }}>Seats filling fast</span>
            </div>
          </aside>
        </div>

        {/* Tab bar */}
        <nav className="h-tabbar" aria-label="Course navigation" style={{
          position:"relative", zIndex:5, display:"flex",
          borderTop:"1px solid rgba(255,255,255,.06)",
          background:"rgba(5,8,15,.9)", backdropFilter:"blur(16px)",
        }}>
          {slides.map((sl, i) => {
            const slRgb = hexToRgb(sl.accent);
            const on = i === active;
            return (
              <button key={sl.id} className="stab" onClick={() => goTo(i)} aria-pressed={on}>
                {on && (
                  <div style={{
                    position:"absolute", top:0, left:0, height:2,
                    width:`${progress}%`, background:s.accent,
                    transition:"width .06s linear",
                  }} />
                )}
                <span className="hrc" style={{
                  fontSize:"clamp(1.5rem,2.5vw,2rem)", fontWeight:700, lineHeight:1, flexShrink:0,
                  color: on ? sl.accent : "rgba(255,255,255,.14)",
                  transition:"color .4s ease",
                }}>{sl.id}</span>
                <div>
                  <div style={{
                    fontSize:".74rem", fontWeight: on ? 500 : 400,
                    color: on ? "rgba(255,255,255,.88)" : "rgba(255,255,255,.28)",
                    transition:"color .4s", marginBottom:2,
                  }}>{sl.tag}</div>
                  <div style={{
                    fontSize:".61rem",
                    color: on ? `rgba(${slRgb},.65)` : "rgba(255,255,255,.16)",
                    transition:"color .4s", letterSpacing:".04em",
                  }}>{sl.eyebrow}</div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Mobile dots */}
        <div className="h-mdots" style={{
          position:"relative", zIndex:5, justifyContent:"center", gap:8, padding:"15px 0 20px",
        }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`} style={{
              width: i===active ? 22 : 6, height:6, borderRadius:4,
              border:"none", cursor:"pointer", padding:0,
              background: i===active ? s.accent : "rgba(255,255,255,.18)",
              transition:"all .3s ease",
            }} />
          ))}
        </div>
      </section>
    </>
  );
}