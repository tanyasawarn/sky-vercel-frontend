// "use client";
// import React, { useState } from "react";
// import {ArrowRight} from "lucide-react";

// const projectLevels = {
//   beginner: [
//     {
//       title: "Retail Sales Prediction using Regression",
//       description:
//         "Develop a predictive model that estimates future retail sales using historical data with regression.",
//       workflow:
//         "Data preprocessing → feature engineering → regression models → model evaluation",
//       tools: "Python, Pandas, Scikit-learn, Matplotlib",
//     },
//     {
//       title: "Movie Review Sentiment Classifier",
//       description:
//         "Create an NLP model to classify movie reviews as positive or negative using TF-IDF and ML models.",
//       workflow:
//         "Tokenization → TF-IDF vectorization → Logistic Regression / SVM classifier",
//       tools: "Python, NLTK/SpaCy, Scikit-learn",
//     },
//     {
//       title: "Handwritten Digit Classifier (MNIST)",
//       description:
//         "Train a neural network to recognize handwritten digits from the MNIST dataset.",
//       workflow: "Train Neural Network → evaluate accuracy → visualize predictions",
//       tools: "Python, TensorFlow/Keras, Matplotlib",
//     },
//   ],
//   intermediate: [
//     {
//       title: "Customer Segmentation using Clustering + Visualization",
//       description:
//         "Cluster customers based on demographics and purchase behavior using K-Means/DBSCAN and visualize insights.",
//       workflow:
//         "Preprocessing → K-Means & DBSCAN → PCA/t-SNE → Cluster visualization",
//       tools: "Scikit-learn, Pandas, Seaborn, Matplotlib",
//     },
//     {
//       title: "Image Style Transfer (Deep Learning & Autoencoders)",
//       description:
//         "Apply artistic styles to images using CNNs, autoencoders, or GANs for creative visual transformations..",
//       workflow:
//         "CNN-based transfer learning + autoencoder/GAN variant for artistic rendering",
//       tools: "TensorFlow/Keras, PyTorch, OpenCV",
//     },
//     {
//       title: "Question-Answering Bot with Open-Source LLM",
//       description:
//         "Build a chatbot that answers questions from PDFs/text using embeddings, vector DB, and RAG with open-source LLMs.",
//       workflow:
//         "Text preprocessing → Embedding generation → Vector DB search → RAG pipeline",
//       tools: "Hugging Face (Falcon/Mistral), FAISS, LangChain",
//     },
//   ],
//   advanced: [
//     {
//       title:
//         "Enterprise-Grade RAG Chatbot with Multi-Source Data Integration",
//       description:
//         "Production chatbot that ingests multi-source data, uses hybrid search, and deploys at scale.",
//       workflow:
//         "Data ingestion → Embedding generation → Hybrid search → RAG pipeline",
//       tools:
//         "Hugging Face LLMs, LangChain, FAISS/Weaviate, FastAPI, Streamlit",
//     },
//     {
//       title: "Multi-Agent Research & Workflow Automation System",
//       description:
//         "Intelligent multi-agent system for research, summarization, code generation, and testing.",
//       workflow:
//         "Define agent roles → Orchestration → Inter-agent communication → Monitoring → Deployment",
//       tools:
//         "LangChain, LangGraph, CrewAI, Autogen, Phidata, Streamlit, Docker",
//     },
//     {
//       title:
//         "LLMOps CI/CD Platform with Auto-Retraining & Canary Deployments",
//       description:
//         "End-to-end LLMOps pipeline with retraining, model versioning, CI/CD, canary rollouts, and monitoring.",
//       workflow:
//         "Data pipeline → Fine-tuning → Model registry → CI/CD →K8 deployment",
//       tools:
//         "MLflow/DVC, Hugging Face, Kubernetes, GitHub Actions/GitLab CI, Prometheus",
//     },
//   ],
// };

// const FormModal = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]">
//       <div className="bg-white p-4 rounded-xl w-[80%] max-w-[700px] shadow-lg relative">
//         <button
//           className="absolute top-[10px] right-[12px] bg-red-500 text-white w-[30px] h-[30px] rounded-full"
//           onClick={onClose}
//         >
//           X
//         </button>

//         <iframe
//           aria-label="Request A Callback"
//           className="w-full border-none"
//           style={{ height: "700px" }}
//           src="https://forms.zohopublic.in/skillfyme11/form/GenAIWithMLCALLBACKFORM/formperma/GrBi_iIgonj_98FP-Ng1rTEpB7AYO2xxg9XfxP0zZ-A"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// const GenAIProject = () => {
//   const [activeLevel, setActiveLevel] = useState("beginner");
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//       <h2 className="text-[2.5rem] font-bold text-[#1a365d] text-center relative pb-2 mt-[-1rem] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-[4px] after:bg-gradient-to-r after:from-[#2196f3] after:to-[#64b5f6] after:rounded">
//         Capstone{" "}
//         <span className="genai-gradient-text-career">Project</span>
//       </h2>

//       <div className="p-[3rem_1.5rem] bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd] rounded-[24px] max-w-[1200px] mx-auto my-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        
//         <div className="text-center mb-10">
//           <p className="text-[#37474f] text-[1.1rem] font-medium">
//             Hands-on experience with real-world AI applications
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="inline-flex bg-white/70 rounded-full p-1 shadow-md flex-wrap justify-center">
//             {["beginner", "intermediate", "advanced"].map((level) => (
//               <button
//                 key={level}
//                 onClick={() => setActiveLevel(level)}
//                 className={`relative px-7 py-3 text-[1rem] font-semibold rounded-full transition-all duration-300 ${
//                   activeLevel === level
//                     ? "text-blue"
//                     : "text-[#4a5568]"
//                 }`}
//               >
//                 <span>
//                   {level.charAt(0).toUpperCase() + level.slice(1)}
//                 </span>

//                 <span
//                   className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#00bbff] to-[#1a365d] -z-10 transition-opacity duration-300 ${
//                     activeLevel === level ? "opacity-100" : "opacity-0"
//                   }`}
//                 ></span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8">
//           {projectLevels[activeLevel].map((proj, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden border border-[#00bbff1a] flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-gradient-to-b before:from-[#00bbff] before:to-[#1a365d] before:opacity-0 hover:before:opacity-100"
//             >
//               <div className="flex items-center mb-5">
//                 <h3 className="text-[1.25rem] font-bold text-[#1a365d] leading-[1.4]">
//                   {proj.title}
//                 </h3>
//               </div>

//               <p className="text-[#4a5568] leading-[1.6] mb-6 font-medium">
//                 {proj.description}
//               </p>

//               <div className="mb-5">
//                 <span className="block text-[0.85rem] font-bold text-[#00bbff] uppercase tracking-wide mb-1">
//                   Workflow
//                 </span>
//                 <p className="text-[#4a5568] text-[0.95rem] line-clamp-3">
//                   {proj.workflow}
//                 </p>
//               </div>

//               <div className="mb-5">
//                 <span className="block text-[0.85rem] font-bold text-[#00bbff] uppercase tracking-wide mb-1">
//                   Tools & Technologies
//                 </span>
//                 <p className="text-[#4a5568] text-[0.95rem] line-clamp-3">
//                   {proj.tools}
//                 </p>
//               </div>

//               <button
//                 onClick={() => setShowForm(true)}
//                 className="flex items-center justify-center w-full bg-gradient-to-br from-[#00bbff] to-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold mt-auto hover:-translate-y-1 transition-all"
//               >
//                 View Project Details
//                 <ArrowRight className="ml-2 text-[1.1rem]" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showForm && <FormModal onClose={() => setShowForm(false)} />}
//     </>
//   );
// };

// export default GenAIProject;







"use client";
import React, { useState } from "react";

const projectLevels = {
  beginner: {
    tag: "Foundation",
    tagline: "Build core ML intuition through hands-on implementation",
    projects: [
      {
        index: "01",
        title: "Retail Sales Prediction",
        subtitle: "Regression Modeling",
        description:
          "Develop a predictive model that estimates future retail sales using historical data with regression techniques and feature engineering.",
        workflow: ["Data Preprocessing", "Feature Engineering", "Regression Models", "Model Evaluation"],
        tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      },
      {
        index: "02",
        title: "Movie Review Classifier",
        subtitle: "NLP & Sentiment Analysis",
        description:
          "Create an NLP model to classify movie reviews as positive or negative using TF-IDF vectorization and classical ML classifiers.",
        workflow: ["Tokenization", "TF-IDF Vectorization", "Logistic Regression", "SVM Classifier"],
        tools: ["Python", "NLTK / SpaCy", "Scikit-learn"],
      },
      {
        index: "03",
        title: "Handwritten Digit Recognition",
        subtitle: "Neural Networks & MNIST",
        description:
          "Train a neural network to recognize handwritten digits from the MNIST dataset with high accuracy and visual prediction output.",
        workflow: ["Dataset Loading", "Neural Network Training", "Accuracy Evaluation", "Visualize Predictions"],
        tools: ["Python", "TensorFlow / Keras", "Matplotlib"],
      },
    ],
  },
  intermediate: {
    tag: "Applied AI",
    tagline: "Engineer sophisticated systems with real-world complexity",
    projects: [
      {
        index: "01",
        title: "Customer Segmentation",
        subtitle: "Clustering & Visualization",
        description:
          "Cluster customers based on demographics and purchase behavior using K-Means and DBSCAN, then visualize insights with PCA and t-SNE.",
        workflow: ["Preprocessing", "K-Means & DBSCAN", "PCA / t-SNE Reduction", "Cluster Visualization"],
        tools: ["Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
      },
      {
        index: "02",
        title: "Image Style Transfer",
        subtitle: "Deep Learning & Autoencoders",
        description:
          "Apply artistic styles to images using CNNs, autoencoders, or GANs for creative visual transformations and style synthesis.",
        workflow: ["CNN Transfer Learning", "Autoencoder Architecture", "GAN Variant Training", "Artistic Rendering"],
        tools: ["TensorFlow / Keras", "PyTorch", "OpenCV"],
      },
      {
        index: "03",
        title: "Q&A Chatbot with RAG",
        subtitle: "Open-Source LLM Integration",
        description:
          "Build a chatbot that answers questions from PDFs and text using embeddings, vector databases, and a retrieval-augmented generation pipeline.",
        workflow: ["Text Preprocessing", "Embedding Generation", "Vector DB Search", "RAG Pipeline"],
        tools: ["Hugging Face", "FAISS", "LangChain"],
      },
    ],
  },
  advanced: {
    tag: "Production Systems",
    tagline: "Architect enterprise-grade AI infrastructure at scale",
    projects: [
      {
        index: "01",
        title: "Enterprise RAG Chatbot",
        subtitle: "Multi-Source Data Integration",
        description:
          "Production-ready chatbot that ingests data from multiple sources, uses hybrid search strategies, and deploys at enterprise scale.",
        workflow: ["Data Ingestion", "Embedding Generation", "Hybrid Search", "RAG Pipeline"],
        tools: ["Hugging Face LLMs", "LangChain", "FAISS / Weaviate", "FastAPI", "Streamlit"],
      },
      {
        index: "02",
        title: "Multi-Agent Automation",
        subtitle: "Research & Workflow Orchestration",
        description:
          "Intelligent multi-agent system for automated research, summarization, code generation, testing, and inter-agent communication.",
        workflow: ["Agent Role Definition", "Orchestration Layer", "Inter-Agent Comms", "Monitoring & Deployment"],
        tools: ["LangChain", "LangGraph", "CrewAI", "Autogen", "Docker"],
      },
      {
        index: "03",
        title: "LLMOps CI/CD Platform",
        subtitle: "Auto-Retraining & Canary Deployments",
        description:
          "End-to-end LLMOps pipeline with automated retraining, model versioning, CI/CD integration, canary rollouts, and production monitoring.",
        workflow: ["Data Pipeline", "Fine-Tuning", "Model Registry", "CI/CD → K8s Deployment"],
        tools: ["MLflow / DVC", "Hugging Face", "Kubernetes", "GitHub Actions", "Prometheus"],
      },
    ],
  },
};

const LEVELS = ["beginner", "intermediate", "advanced"];

const FormModal = ({ onClose }) => (
  <div
    className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
    style={{ background: "rgba(15,30,60,0.55)", backdropFilter: "blur(10px)" }}
  >
    <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-xs transition-all hover:scale-110"
        style={{ background: "#1a365d" }}
        aria-label="Close"
      >
        ✕
      </button>
      <iframe
        aria-label="Request A Callback"
        className="w-full border-none"
        style={{ height: "680px" }}
        src="https://forms.zohopublic.in/skillfyme11/form/GenAIWithMLCALLBACKFORM/formperma/GrBi_iIgonj_98FP-Ng1rTEpB7AYO2xxg9XfxP0zZ-A"
      />
    </div>
  </div>
);

const ToolPill = ({ name }) => (
  <span
    className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold"
    style={{
      background: "rgba(0,155,210,0.07)",
      color: "#0077aa",
      border: "1px solid rgba(0,155,210,0.18)",
      fontFamily: "'DM Mono', monospace",
    }}
  >
    {name}
  </span>
);

const ProjectCard = ({ proj, onCTA }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden bg-white h-full"
      style={{
        border: hovered ? "1.5px solid rgba(0,155,210,0.4)" : "1.5px solid #e4edf8",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,100,180,0.13), 0 2px 8px rgba(0,0,0,0.04)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: hovered
            ? "linear-gradient(90deg, #00bbff 0%, #1a365d 100%)"
            : "linear-gradient(90deg, #ddeeff 0%, #c5d8ef 100%)",
          transition: "background 0.4s ease",
        }}
      />

      <div className="p-6 flex flex-col flex-1 gap-5">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span
              className="text-xs font-bold tracking-widest"
              style={{ color: "#00bbff", fontFamily: "'DM Mono', monospace" }}
            >
              {proj.index}
            </span>
            <span
              className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
              style={{
                background: "rgba(0,155,210,0.08)",
                color: "#0077aa",
                border: "1px solid rgba(0,155,210,0.15)",
              }}
            >
              {proj.subtitle}
            </span>
          </div>
          <h3
            className="text-lg font-bold leading-snug"
            style={{
              color: "#0d1e3b",
              fontFamily: "'Sora', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {proj.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "#5a6a85" }}>
          {proj.description}
        </p>

        {/* Workflow */}
        <div
          className="rounded-xl p-4"
          style={{ background: "#f3f8fd", border: "1px solid #deeaf8" }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2.5"
            style={{ color: "#0099cc" }}
          >
            Workflow
          </p>
          <div className="flex flex-wrap gap-y-1.5 gap-x-1 items-center">
            {proj.workflow.map((step, i) => (
              <React.Fragment key={i}>
                <span
                  className="text-xs font-medium"
                  style={{ color: "#3a5070", fontFamily: "'DM Mono', monospace" }}
                >
                  {step}
                </span>
                {i < proj.workflow.length - 1 && (
                  <span style={{ color: "#00bbff", fontSize: "10px", opacity: 0.65 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2.5"
            style={{ color: "#0099cc" }}
          >
            Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {proj.tools.map((tool) => (
              <ToolPill key={tool} name={tool} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onCTA}
          className="mt-auto flex items-center justify-between w-full px-5 py-3.5 rounded-xl font-semibold text-sm"
          style={{
            background: hovered
              ? "linear-gradient(135deg, #00bbff 0%, #1a365d 100%)"
              : "#eef5fc",
            color: hovered ? "#ffffff" : "#1a365d",
            border: "1.5px solid",
            borderColor: hovered ? "transparent" : "#cfe0f4",
            boxShadow: hovered ? "0 6px 20px rgba(0,187,255,0.25)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <span>View Project Details</span>
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
};

const GenAIProject = () => {
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [showForm, setShowForm] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setAnimKey((k) => k + 1);
  };

  const levelData = projectLevels[activeLevel];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim {
          animation: fadeSlideUp 0.42s ease forwards;
          opacity: 0;
        }
      `}</style>

      <section
        className="relative py-16 px-2"
      >
        {/* Ambient glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(0,187,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(26,54,93,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(0,187,255,0.08)",
                border: "1px solid rgba(0,187,255,0.22)",
                color: "#0099cc",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00bbff" }}
              />
              Capstone Projects
            </div>

            <h2
              className="text-5xl font-extrabold leading-tight"
              style={{
                color: "#0d1e3b",
                letterSpacing: "-0.03em",
                fontFamily: "'Sora', sans-serif",
              }}
            >
              Build What{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00bbff 0%, #1a365d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Actually Matters
              </span>
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#7a8fa8" }}>
              Hands-on AI engineering through projects designed to mirror real production environments.
            </p>
          </div>

          {/* Level tabs */}
          <div className="flex justify-center mb-10">
            <div
              className="flex gap-1 p-1 rounded-2xl"
              style={{
                background: "#ffffff",
                border: "1.5px solid #e0eaf5",
                boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
              }}
            >
              {LEVELS.map((level) => {
                const isActive = activeLevel === level;
                return (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className="relative px-6 py-2.5 rounded-xl text-sm font-semibold"
                    style={{
                      color: isActive ? "#ffffff" : "#5a6a85",
                      background: isActive
                        ? "linear-gradient(135deg, #00bbff 0%, #1a365d 100%)"
                        : "transparent",
                      boxShadow: isActive ? "0 4px 16px rgba(0,187,255,0.28)" : "none",
                      transition: "all 0.3s ease",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Context bar */}
          <div
            className="flex items-center justify-between gap-4 mb-10 px-6 py-4 rounded-2xl"
            style={{
              background: "#ffffff",
              border: "1.5px solid #e0eaf5",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #00bbff 0%, #1a365d 100%)",
                }}
              >
                {levelData.tag}
              </span>
              <p className="text-sm" style={{ color: "#7a8fa8" }}>
                {levelData.tagline}
              </p>
            </div>
            <span
              className="text-xs font-semibold flex-shrink-0"
              style={{ color: "#b0c4d8", fontFamily: "'DM Mono', monospace" }}
            >
              3 projects
            </span>
          </div>

          {/* Cards grid */}
          <div key={animKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {levelData.projects.map((proj, index) => (
              <div
                key={index}
                className="card-anim"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProjectCard proj={proj} onCTA={() => setShowForm(true)} />
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #eaf5ff 0%, #f0f4fb 100%)",
              border: "1.5px solid #d4e8f8",
            }}
          >
            <div>
              <p className="font-bold text-base" style={{ color: "#0d1e3b" }}>
                Ready to start building?
              </p>
              <p className="text-sm mt-0.5" style={{ color: "#7a8fa8" }}>
                Get expert guidance and mentorship on every project.
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #00bbff 0%, #1a365d 100%)",
                boxShadow: "0 8px 24px rgba(0,187,255,0.22)",
                letterSpacing: "0.02em",
              }}
            >
              Request a Callback
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {showForm && <FormModal onClose={() => setShowForm(false)} />}
    </>
  );
};

export default GenAIProject;