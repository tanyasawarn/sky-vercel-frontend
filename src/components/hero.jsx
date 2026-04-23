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



//  "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { ArrowUpRight, Play, Check } from "lucide-react";

// const slides = [
//   {
//     id: "01",
//     tag: "DevOps & Cloud",
//     title: "DevOps With AI Master Course",
//     desc: "Automate infrastructure with intelligent pipelines. Master the intersection of LLMs and CI/CD. Learn to build, ship, and scale production systems with Docker, Kubernetes, Terraform, and AI-driven automation — guided by engineers from top-tier companies.",
//     img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/Devops_Bg.png",
//     link: "/courses/devops-with-ai-masters-program",
//     reviewLink:
//       "https://www.youtube.com/watch?v=TrW1w9a-V7k&list=PLsNEcVckmpG7azHEQrCNmcHSbylRa-DwS",
//   modules: [
//   { num: "01", title: "DevOps Fundamentals", topics: "Git · IaC · Microservices · DevSecOps" },
//   { num: "02", title: "CI/CD & Automation", topics: "Jenkins · GitHub Actions · GitLab CI" },
//   { num: "03", title: "Docker & Kubernetes", topics: "Containers · Orchestration · Helm · GitOps" },
//   { num: "04", title: "Cloud & Deployment", topics: "AWS · Azure · Serverless · Scaling" },
//   { num: "05", title: "Infrastructure as Code", topics: "Terraform · Ansible · Modules · Workspaces" },
//   { num: "06", title: "AI in DevOps (AIOps)", topics: "Automation · Prediction · Self-Healing" },
// ],
//   },
//   {
//     id: "02",
//     tag: "Machine Learning",
//     title: "GenAI With ML Master Course",
//     desc: "From RAG architectures to Fine-tuning. Build production-ready AI agents from scratch. Master LLMs, vector databases, and deployment pipelines through real industry projects. Learn the full stack of modern GenAI — from foundational math to agent orchestration.",
//     img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/genaiwithmlbanner.png",
//     link: "/courses/genai-with-ml-masters-program",
//     reviewLink: "https://m.youtube.com/@Skillfyme/videos",
//     modules: [
//       { num: "01", title: "Python & Math for ML", topics: "NumPy · Pandas · Linear Algebra" },
//       { num: "02", title: "Machine Learning Foundations", topics: "Regression · Trees · Ensembles" },
//       { num: "03", title: "Deep Learning & Neural Nets", topics: "PyTorch · CNNs · Transformers" },
//       { num: "04", title: "LLMs & Prompt Engineering", topics: "GPT · Claude · LangChain · LlamaIndex" },
//       { num: "05", title: "RAG & Vector Databases", topics: "Pinecone · Chroma · Embeddings" },
//       { num: "06", title: "Fine-tuning & Agent Deployment", topics: "LoRA · PEFT · Production Agents" },
//     ],
//   },
// ];

// const Hero = () => {
//   const [active, setActive] = useState(0);
//   const [mounted, setMounted] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const router = useRouter();
//   const intervalRef = useRef(null);

//   const DURATION = 9000;

//   useEffect(() => {
//     setMounted(true);
//     startTimer();
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     setProgress(0);
//     const start = Date.now();
//     const t = setInterval(() => {
//       const pct = Math.min(((Date.now() - start) / DURATION) * 100, 100);
//       setProgress(pct);
//     }, 50);
//     return () => clearInterval(t);
//   }, [active]);

//   const startTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setActive((p) => (p + 1) % slides.length);
//     }, DURATION);
//   };

//   const changeSlide = (i) => {
//     setActive(i);
//     startTimer();
//   };

//   if (!mounted) return null;
//   const current = slides[active];

//   return (
//     <section
//       className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden"
//       style={{ fontFamily: "'Raleway', sans-serif" }}
//     >
//       {/* Grain Texture */}
//       <div
//         className="absolute inset-0 z-[2] pointer-events-none opacity-[0.12] mix-blend-overlay"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
//         }}
//       />

//       {/* Background Images */}
//       <div className="absolute inset-0 z-[1]">
//         {slides.map((s, i) => (
//           <div
//             key={s.id}
//             className={`absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
//               i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.08]"
//             }`}
//             style={{
//               backgroundImage: `url(${s.img})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               filter: "brightness(0.3) saturate(0.7) contrast(1.15)",
//             }}
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
//         <div className="absolute -bottom-40 -left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#7dd3c0] opacity-[0.06] blur-[120px]" />
//         <div className="absolute -top-40 -right-40 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#a4b8ff] opacity-[0.05] blur-[100px]" />
//       </div>

//       {/* Top Bar */}
//       <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-5 sm:pt-6">
//         <div className="flex justify-between items-center border-b border-white/10 pb-4 sm:pb-5 gap-3">
//           <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
//             <div className="relative flex-shrink-0">
//               <div className="w-2 h-2 rounded-full bg-emerald-400" />
//               <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//             </div>
//             <span className="text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/70 font-semibold truncate">
//               Applications open · Limited seats
//             </span>
//           </div>
//           <div className="hidden md:flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.18em] text-white/50 font-medium flex-shrink-0">
//             <span>Skillfyme Masters</span>
//             <span className="text-white/30">/</span>
//             <span className="text-[#7dd3c0]">{current.id} of 0{slides.length}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-36 sm:pb-32">
//         <div className="grid grid-cols-12 gap-6 lg:gap-10">
//           {/* LEFT: Title & CTAs */}
//           <div className="col-span-12 lg:col-span-7">
//             {/* Tag */}
//             <div
//               key={`tag-${active}`}
//               className="inline-flex items-center gap-3 mb-5 sm:mb-7 animate-[slideUp_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
//             >
//               <div className="h-[1px] w-8 sm:w-10 bg-[#7dd3c0]" />
//               <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#7dd3c0] font-bold">
//                 {current.tag}
//               </span>
//             </div>

//             {/* Title */}
//             <h1
//               key={`title-${active}`}
//               className="text-[clamp(2rem,5.8vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.02em] mb-5 sm:mb-6 animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]"
//               style={{ fontWeight: 800 }}
//             >
//               {current.title}
//             </h1>

//             {/* Description */}
//             <p
//               key={`desc-${active}`}
//               className="max-w-[560px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-white/65 mb-6 sm:mb-7 leading-[1.65] font-light animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]"
//             >
//               {current.desc}
//             </p>

//             {/* CTAs */}
//             <div
//               key={`cta-${active}`}
//               className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]"
//             >
//               <button
//                 onClick={() => router.push(current.link)}
//                 className="group relative bg-white text-[#0a0a0a] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-[0.9rem] sm:text-[0.95rem] flex items-center justify-center gap-3 overflow-hidden transition-transform hover:scale-[1.02]"
//               >
//                 <span className="relative z-10 tracking-wide">Get Started</span>
//                 <ArrowUpRight
//                   size={18}
//                   className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#7dd3c0] to-[#a4e8d8] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//               </button>

//               <a
//                 href={current.reviewLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/20 flex items-center justify-center gap-3 backdrop-blur-md hover:bg-white/5 hover:border-white/40 transition-all"
//               >
//                 <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7dd3c0] group-hover:text-[#0a0a0a] transition-all">
//                   <Play size={10} fill="currentColor" className="ml-[1px]" />
//                 </div>
//                 <span className="text-[0.9rem] sm:text-[0.95rem] font-semibold tracking-wide">Watch Trailer</span>
//               </a>
//             </div>

//             {/* Trust Row */}
//             <div
//               key={`trust-${active}`}
//               className="flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2.5 items-center text-[0.72rem] sm:text-[0.78rem] text-white/50 animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]"
//             >
//               <div className="flex items-center gap-2">
//                 <Check size={14} className="text-[#7dd3c0] flex-shrink-0" strokeWidth={3} />
//                 <span className="font-medium">Live Mentorship</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Check size={14} className="text-[#7dd3c0] flex-shrink-0" strokeWidth={3} />
//                 <span className="font-medium">Industry Projects</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Check size={14} className="text-[#7dd3c0] flex-shrink-0" strokeWidth={3} />
//                 <span className="font-medium">Placement Support</span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Curriculum Card */}
//           <div className="col-span-12 lg:col-span-5">
//             <div
//               key={`curr-${active}`}
//               className="relative animate-[slideUp_1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
//             >
//               {/* Decorative corner */}
//               <div className="absolute -top-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#7dd3c0]/40 pointer-events-none" />
//               <div className="absolute -bottom-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#7dd3c0]/40 pointer-events-none" />

//               <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8">
//                 {/* Card Header */}
//                 <div className="flex items-center justify-between mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-white/10 gap-3">
//                   <div className="min-w-0">
//                     <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/40 font-bold mb-1">
//                       What you'll master
//                     </div>
//                     <div className="text-[1.05rem] sm:text-[1.15rem] font-bold tracking-tight">
//                       Core Curriculum
//                     </div>
//                   </div>
//                   <div className="text-right flex-shrink-0">
//                     <div className="text-[1.75rem] sm:text-[2rem] font-extrabold leading-none text-[#7dd3c0]">
//                       {current.modules.length}
//                     </div>
//                     <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50 font-semibold mt-1">
//                       Modules
//                     </div>
//                   </div>
//                 </div>

//                 {/* Module list */}
//                 <div className="space-y-0.5 sm:space-y-1">
//                   {current.modules.map((m, idx) => (
//                     <div
//                       key={`${active}-${idx}`}
//                       className="group flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-2.5 sm:-mx-3 rounded-lg hover:bg-white/[0.04] transition-colors cursor-default animate-[fadeIn_0.6s_ease-out_both]"
//                       style={{ animationDelay: `${0.5 + idx * 0.08}s` }}
//                     >
//                       <div className="text-[0.65rem] sm:text-[0.7rem] font-mono font-bold text-[#7dd3c0] pt-[3px] w-6 sm:w-7 tracking-tight flex-shrink-0">
//                         {m.num}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="text-[0.88rem] sm:text-[0.95rem] font-bold tracking-tight mb-0.5 text-white/95 group-hover:text-white transition-colors">
//                           {m.title}
//                         </div>
//                         <div className="text-[0.7rem] sm:text-[0.75rem] text-white/45 font-medium leading-snug">
//                           {m.topics}
//                         </div>
//                       </div>
//                       <ArrowUpRight
//                         size={14}
//                         className="text-white/20 group-hover:text-[#7dd3c0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 flex-shrink-0"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Card footer */}
//                 <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between gap-3">
//                   <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem] text-white/50 font-medium min-w-0">
//                     <div className="flex -space-x-1.5 flex-shrink-0">
//                       <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7dd3c0] to-[#4a9d8e] border-2 border-[#0a0a0a]" />
//                       <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#a4b8ff] to-[#6b83d8] border-2 border-[#0a0a0a]" />
//                       <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f0b880] to-[#c88f5a] border-2 border-[#0a0a0a]" />
//                     </div>
//                     <span className="truncate">+2k enrolled</span>
//                   </div>
//                   <button
//                     onClick={() => router.push(current.link)}
//                     className="text-[0.72rem] sm:text-[0.78rem] font-bold text-[#7dd3c0] hover:text-white flex items-center gap-1.5 transition-colors group flex-shrink-0"
//                   >
//                     Full syllabus
//                     <ArrowUpRight
//                       size={13}
//                       className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Navigation - CENTERED */}
//       <div className="absolute bottom-0 left-0 right-0 z-[10] border-t border-white/10 backdrop-blur-md bg-black/30">
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5 flex items-center justify-center">
//           <div className="flex gap-2 sm:gap-3 w-full max-w-[640px]">
//             {slides.map((s, i) => (
//               <button
//                 key={s.id}
//                 onClick={() => changeSlide(i)}
//                 className="group flex-1 text-left min-w-0"
//               >
//                 <div className="relative h-[2px] bg-white/10 mb-2.5 sm:mb-3 overflow-hidden rounded-full">
//                   <div
//                     className="absolute top-0 left-0 h-full bg-[#7dd3c0] rounded-full"
//                     style={{
//                       width: i === active ? `${progress}%` : i < active ? "100%" : "0%",
//                       transition: i === active ? "width 50ms linear" : "width 300ms ease",
//                     }}
//                   />
//                 </div>
//                 <div className="flex items-baseline gap-2 sm:gap-2.5">
//                   <span
//                     className={`text-[0.68rem] sm:text-[0.72rem] font-mono font-bold flex-shrink-0 ${
//                       i === active ? "text-[#7dd3c0]" : "text-white/35"
//                     }`}
//                   >
//                     {s.id}
//                   </span>
//                   <span
//                     className={`text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-wide transition-colors truncate ${
//                       i === active ? "text-white" : "text-white/50 group-hover:text-white/80"
//                     }`}
//                   >
//                     {s.tag}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;



"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Play, Sparkles, TrendingUp } from "lucide-react";

const slides = [
  {
    id: "01",
    tag: "DevOps & Cloud",
    title: "DevOps With AI Master Course",
    desc: "Automate infrastructure with intelligent pipelines. Master the intersection of LLMs and CI/CD. Learn to build, ship, and scale production systems with Docker, Kubernetes, Terraform, and AI-driven automation — guided by engineers from top-tier companies.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/Devops_Bg.png",
    link: "/courses/devops-with-ai-masters-program",
    reviewLink:
      "https://www.youtube.com/watch?v=TrW1w9a-V7k&list=PLsNEcVckmpG7azHEQrCNmcHSbylRa-DwS",
    duration: "16 Weeks",
    placements: "94%",
    modules: [
      { num: "01", title: "DevOps Fundamentals", topics: "Git · IaC · Microservices · DevSecOps" },
      { num: "02", title: "CI/CD & Automation", topics: "Jenkins · GitHub Actions · GitLab CI" },
      { num: "03", title: "Docker & Kubernetes", topics: "Containers · Orchestration · Helm · GitOps" },
      { num: "04", title: "Cloud & Deployment", topics: "AWS · Azure · Serverless · Scaling" },
      { num: "05", title: "Infrastructure as Code", topics: "Terraform · Ansible · Modules · Workspaces" },
      { num: "06", title: "AI in DevOps (AIOps)", topics: "Automation · Prediction · Self-Healing" },
    ],
  },
  {
    id: "02",
    tag: "Machine Learning",
    title: "GenAI With ML Master Course",
    desc: "From RAG architectures to Fine-tuning. Build production-ready AI agents from scratch. Master LLMs, vector databases, and deployment pipelines through real industry projects. Learn the full stack of modern GenAI — from foundational math to agent orchestration.",
    img: "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo@main/genaiwithmlbanner.png",
    link: "/courses/genai-with-ml-masters-program",
    reviewLink: "https://m.youtube.com/@Skillfyme/videos",
    duration: "20 Weeks",
    placements: "91%",
    modules: [
      { num: "01", title: "Python & Math for ML", topics: "NumPy · Pandas · Linear Algebra" },
      { num: "02", title: "Machine Learning Foundations", topics: "Regression · Trees · Ensembles" },
      { num: "03", title: "Deep Learning & Neural Nets", topics: "PyTorch · CNNs · Transformers" },
      { num: "04", title: "LLMs & Prompt Engineering", topics: "GPT · Claude · LangChain · LlamaIndex" },
      { num: "05", title: "RAG & Vector Databases", topics: "Pinecone · Chroma · Embeddings" },
      { num: "06", title: "Fine-tuning & Agent Deployment", topics: "LoRA · PEFT · Production Agents" },
    ],
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const intervalRef = useRef(null);

  const DURATION = 9000;

  useEffect(() => {
    setMounted(true);
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const t = setInterval(() => {
      const pct = Math.min(((Date.now() - start) / DURATION) * 100, 100);
      setProgress(pct);
    }, 50);
    return () => clearInterval(t);
  }, [active]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, DURATION);
  };

  const changeSlide = (i) => {
    setActive(i);
    startTimer();
  };

  if (!mounted) return null;
  const current = slides[active];

  return (
    <section
      className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* Grain Texture */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Images */}
      <div className="absolute inset-0 z-[1]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.12]"
            }`}
            style={{
              backgroundImage: `url(${s.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.28) saturate(0.55) contrast(1.15)",
            }}
          />
        ))}
        {/* Gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />
        {/* Orange glows — the vibrant accent */}
        <div className="absolute -bottom-40 -left-40 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-[#ff6b35] opacity-[0.08] blur-[140px]" />
        <div className="absolute top-[10%] -right-40 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full bg-[#ff6b35] opacity-[0.06] blur-[120px]" />
      </div>

      {/* Diagonal decorative line pattern (top-right) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none z-[3] opacity-[0.12] hidden lg:block">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={i * 25}
              y1="0"
              x2="300"
              y2={300 - i * 25}
              stroke="#ff6b35"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Top Bar */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-5 sm:pt-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 sm:pb-5 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="relative flex-shrink-0">
              
               
            </div>
          
          </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-36 sm:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* LEFT: Title & CTAs */}
          <div className="col-span-12 lg:col-span-7 relative">
            {/* Tag with animated line */}
            <div
              key={`tag-${active}`}
              className="inline-flex items-center gap-3 mb-5 sm:mb-7 animate-[slideRight_0.8s_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <div className="relative h-[1px] w-10 sm:w-14 bg-[#ff6b35] origin-left animate-[expandLine_1s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff6b35]" />
              </div>
              <span className="text-[0.65rem] sm:text-[0.72rem] uppercase tracking-[0.3em] text-[#ff6b35] font-bold">
                {current.tag}
              </span>
            </div>

            {/* Title — split into words for stagger effect */}
            <h1
              key={`title-${active}`}
              className="text-[clamp(2rem,5.8vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.02em] mb-5 sm:mb-6"
              style={{ fontWeight: 800 }}
            >
              {current.title.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="inline-block mr-[0.25em] overflow-hidden"
                >
                  <span
                    className="inline-block animate-[slideUpWord_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
                    style={{ animationDelay: `${0.1 + idx * 0.08}s` }}
                  >
                    {word === "AI" || word === "ML" || word === "GenAI" ? (
                      <span className="text-[#ff6b35]">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              key={`desc-${active}`}
              className="max-w-[560px] text-[0.95rem] sm:text-[1.05rem] lg:text-[1.1rem] text-white/65 mb-6 sm:mb-7 leading-[1.7] font-light animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]"
            >
              {current.desc}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${active}`}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.6s_both]"
            >
              <button
                onClick={() => router.push(current.link)}
                className="group relative bg-[#ff6b35] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-[0.9rem] sm:text-[0.95rem] flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgba(255,107,53,0.35)]"
              >
                <span className="relative z-10 tracking-[0.05em] uppercase">
                  Get Started
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                {/* Darker hover fill */}
                <div className="absolute inset-0 bg-[#ff4d1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <a
                href={current.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/20 flex items-center justify-center gap-3 backdrop-blur-md hover:bg-white/5 hover:border-[#ff6b35]/50 transition-all"
              >
                <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#ff6b35] transition-all overflow-hidden">
                  <Play
                    size={10}
                    fill="currentColor"
                    className="ml-[1px] text-white relative z-10 group-hover:text-white"
                  />
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full bg-[#ff6b35]/40 scale-0 group-hover:scale-[2.5] transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                </div>
                <span className="text-[0.9rem] sm:text-[0.95rem] font-semibold tracking-wide">
                  Watch Trailer
                </span>
              </a>
            </div>

            {/* Stats inline row — new addition */}
            <div
              key={`stats-${active}`}
              className="flex items-center gap-5 sm:gap-8 animate-[slideUp_0.9s_cubic-bezier(0.22,1,0.36,1)_0.75s_both]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#ff6b35]/30 flex items-center justify-center bg-[#ff6b35]/5">
                  <TrendingUp
                    size={13}
                    className="text-[#ff6b35]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <div className="text-[0.88rem] sm:text-[0.95rem] font-extrabold text-white leading-none">
                    {current.placements}
                  </div>
                  <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/50 font-semibold mt-0.5">
                    Placed
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-8 bg-white/15" />
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-[#ff6b35]/30 flex items-center justify-center bg-[#ff6b35]/5">
                  <Sparkles
                    size={13}
                    className="text-[#ff6b35]"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <div className="text-[0.88rem] sm:text-[0.95rem] font-extrabold text-white leading-none">
                    {current.duration}
                  </div>
                  <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/50 font-semibold mt-0.5">
                    Duration
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-8 bg-white/15 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2.5">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#c94a1f] border-2 border-[#0a0a0a]" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#a4b8ff] to-[#6b83d8] border-2 border-[#0a0a0a]" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7dd3c0] to-[#4a9d8e] border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <div className="text-[0.88rem] font-extrabold text-white leading-none">
                    2K+
                  </div>
                  <div className="text-[0.58rem] uppercase tracking-[0.2em] text-white/50 font-semibold mt-0.5">
                    Enrolled
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Curriculum Card */}
          <div className="col-span-12 lg:col-span-5">
            <div
              key={`curr-${active}`}
              className="relative animate-[slideUpCard_1.1s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
            >
              {/* Floating number badge (behind card) */}
              <div className="absolute -top-8 -right-2 sm:-right-4 z-[0] hidden sm:block pointer-events-none select-none">
                <div
                  className="text-[7rem] sm:text-[8rem] md:text-[9rem] font-black leading-none text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(255,107,53,0.15)",
                  }}
                >
                  {current.id}
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#ff6b35]/50 pointer-events-none z-[3]" />
              <div className="absolute -bottom-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#ff6b35]/50 pointer-events-none z-[3]" />

              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden z-[2]">
                {/* Subtle orange glow inside card */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#ff6b35] opacity-[0.08] blur-[100px] rounded-full pointer-events-none" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-white/10 gap-3">
                  <div className="min-w-0">
                    <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/40 font-bold mb-1">
                      What you'll master
                    </div>
                    <div className="text-[1.05rem] sm:text-[1.15rem] font-bold tracking-tight">
                      Core Curriculum
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[1.75rem] sm:text-[2rem] font-extrabold leading-none text-[#ff6b35]">
                      {current.modules.length}
                    </div>
                    <div className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/50 font-semibold mt-1">
                      Modules
                    </div>
                  </div>
                </div>

                {/* Module list */}
                <div className="relative space-y-0.5 sm:space-y-1">
                  {current.modules.map((m, idx) => (
                    <div
                      key={`${active}-${idx}`}
                      className="group flex items-start gap-3 sm:gap-4 p-2.5 sm:p-3 -mx-2.5 sm:-mx-3 rounded-lg hover:bg-white/[0.04] transition-colors cursor-default animate-[fadeInSlide_0.6s_ease-out_both]"
                      style={{ animationDelay: `${0.6 + idx * 0.07}s` }}
                    >
                      <div className="text-[0.65rem] sm:text-[0.7rem] font-mono font-bold text-[#ff6b35] pt-[3px] w-6 sm:w-7 tracking-tight flex-shrink-0">
                        {m.num}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[0.88rem] sm:text-[0.95rem] font-bold tracking-tight mb-0.5 text-white/95 group-hover:text-white transition-colors">
                          {m.title}
                        </div>
                        <div className="text-[0.7rem] sm:text-[0.75rem] text-white/45 font-medium leading-snug">
                          {m.topics}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-white/20 group-hover:text-[#ff6b35] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="relative mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[0.7rem] sm:text-[0.75rem] text-white/50 font-medium min-w-0">
                    <div className="flex -space-x-1.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#c94a1f] border-2 border-[#0a0a0a]" />
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#a4b8ff] to-[#6b83d8] border-2 border-[#0a0a0a]" />
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7dd3c0] to-[#4a9d8e] border-2 border-[#0a0a0a]" />
                    </div>
                    <span className="truncate">+2k enrolled</span>
                  </div>
                  <button
                    onClick={() => router.push(current.link)}
                    className="text-[0.72rem] sm:text-[0.78rem] font-bold text-[#ff6b35] hover:text-white flex items-center gap-1.5 transition-colors group flex-shrink-0"
                  >
                    Full syllabus
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - CENTERED */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] border-t border-white/10 backdrop-blur-md bg-black/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5 flex items-center justify-center">
          <div className="flex gap-2 sm:gap-3 w-full max-w-[640px]">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => changeSlide(i)}
                className="group flex-1 text-left min-w-0"
              >
                <div className="relative h-[2px] bg-white/10 mb-2.5 sm:mb-3 overflow-hidden rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#ff6b35] rounded-full"
                    style={{
                      width:
                        i === active
                          ? `${progress}%`
                          : i < active
                          ? "100%"
                          : "0%",
                      transition:
                        i === active
                          ? "width 50ms linear"
                          : "width 300ms ease",
                      boxShadow: i === active ? "0 0 8px rgba(255,107,53,0.5)" : "none",
                    }}
                  />
                </div>
                <div className="flex items-baseline gap-2 sm:gap-2.5">
                  <span
                    className={`text-[0.68rem] sm:text-[0.72rem] font-mono font-bold flex-shrink-0 ${
                      i === active ? "text-[#ff6b35]" : "text-white/35"
                    }`}
                  >
                    {s.id}
                  </span>
                  <span
                    className={`text-[0.75rem] sm:text-[0.82rem] font-semibold tracking-wide transition-colors truncate ${
                      i === active
                        ? "text-white"
                        : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap");

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

        @keyframes slideUpWord {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpCard {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;