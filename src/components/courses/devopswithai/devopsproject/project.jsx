// "use client";

// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";
// import SectionHeading from "@/components/common/sectionheading/sectionheading";

// const projectLevels = {
//   beginner: [
//     {
//       title: "End-to-End Blog Platform with Automated CI/CD",
//       description:
//         "A full CI/CD setup for a blog platform (WordPress or Node.js). Covers source control, CI/CD, containerization, and deployment in a controlled environment.",
//       workflow:
//         "Developer commits → GitHub triggers Jenkins → build Docker image → push to DockerHub → deploy on a local Docker host with automated rollback on failure.",
//       tools: "GitHub, Jenkins, Docker, Linux, Nginx",
//     },
//     {
//       title: "Multi-Service To-Do Application with Docker Compose",
//       description:
//         "Deploy a multi-service application locally, focusing on microservices basics, networking, and orchestration with Docker Compose.",
//       workflow:
//         "Build backend (API), frontend, and database containers → manage with Docker Compose → integrate automated build and versioning with Git hooks.",
//       tools: "Docker, Docker Compose, Git, MySQL/Postgres",
//     },
//     {
//       title: "Terraform + Ansible Hybrid Infra Automation (Local Cloud)",
//       description:
//         "Combines IaC (Terraform) with configuration management (Ansible) to build a reproducible infrastructure for a 2-tier app.",
//       workflow:
//         "Provision VMs with Terraform → configure them with Ansible (web server, DB) → deploy a sample app automatically.",
//       tools: "Terraform, Ansible, VirtualBox/Docker, Git",
//     },
//   ],

//   intermediate: [
//     {
//       title: "Serverless E-Commerce Platform",
//       description:
//         "Build a serverless, cost-efficient e-commerce app leveraging AWS free-tier services and automated deployments.",
//       workflow:
//         "Code stored on GitHub → GitHub Actions builds & tests → deploy frontend on AWS S3 + CloudFront → backend with AWS Lambda + API Gateway → DynamoDB as database.",
//       tools:
//         "GitHub Actions, AWS Lambda, API Gateway, S3, CloudFront, DynamoDB",
//     },
//     {
//       title: "Kubernetes Microservices Deployment on AWS EKS",
//       description:
//         "Deploy a production-like microservices app on AWS-managed Kubernetes with monitoring and scaling.",
//       workflow:
//         "Build multiple microservices → push Docker images to DockerHub/ECR → deploy to AWS EKS using Helm → set up monitoring with Prometheus + Grafana.",
//       tools: "AWS EKS, Docker, Kubernetes, Helm, Prometheus, Grafana",
//     },
//     {
//       title: "Centralized Logging and Monitoring Platform on AWS",
//       description:
//         "Build a full-stack observability solution for a sample app using AWS free-tier monitoring/logging services integrated with ELK.",
//       workflow:
//         "Application logs → shipped via Fluentd/Logstash → stored in AWS OpenSearch → visualized in Kibana → CloudWatch alarms for anomalies.",
//       tools: "AWS OpenSearch, ELK Stack, CloudWatch, EC2",
//     },
//   ],

//   advanced: [
//     {
//       title: "AI-Powered CI/CD Pipeline with Predictive Build Optimization",
//       description:
//         "Enhance DevOps pipeline efficiency with AI-driven predictions to reduce build times and increase reliability.",
//       workflow:
//         "Developer commits → Jenkins/GitHub Actions pipeline → AI model analyzes build history → predicts build failures or flaky tests → skips/optimizes unnecessary stages → deploy to staging/prod automatically.",
//       tools:
//         "Jenkins/GitHub Actions, Python (scikit-learn/TensorFlow), AWS S3, Docker, Kubernetes",
//     },
//     {
//       title: "GitOps-Driven Multi-Cloud Deployment with ArgoCD & Terraform",
//       description:
//         "Enterprise-level GitOps project deploying applications across multiple clouds with full automation.",
//       workflow:
//         "Define infra as code (Terraform) → Git acts as the single source of truth → ArgoCD syncs applications across AWS + Azure clusters → deploy multi-cloud resilient app with monitoring.",
//       tools:
//         "Terraform, ArgoCD, Kubernetes (EKS + AKS), Helm, Prometheus, Grafana",
//     },
//     {
//       title: "Self-Healing Scalable Application Platform",
//       description:
//         "A next-gen DevOps project where your platform automatically detects and resolves issues, ensuring resilience and minimal downtime.",
//       workflow:
//         "Deploy app on AWS with Kubernetes → set up autoscaling (HPA, VPA, cluster autoscaler) → integrate monitoring with Prometheus → configure self-healing with AI-based anomaly detection → automate recovery actions.",
//       tools:
//         "Kubernetes, AWS EKS, Prometheus, Grafana, Python (AI anomaly detection), Terraform",
//     },
//   ],
// };

// const FormModal = ({ onClose }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[1000]">
//       <div className="bg-white p-4 rounded-xl w-[80%] max-w-[700px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] relative">
//         <button
//           className="absolute top-[10px] right-[12px] bg-red-500 text-white border-none rounded-full w-[30px] h-[30px] cursor-pointer"
//           onClick={onClose}
//         >
//           X
//         </button>
//         <iframe
//           aria-label="Request A Callback"
//           frameBorder="0"
//           style={{ height: "700px", width: "100%", border: "none" }}
//           src="https://forms.zohopublic.in/skillfyme11/form/RequestACallbackDevOpswithAI/formperma/DksoeC7mbLLtFa3YDGzLpjG0dbVjTHMZsvJR2_ZD_cI"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// const Project = () => {
//   const [activeLevel, setActiveLevel] = useState("beginner");
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//       {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-6 relative animate-[fadeInUp_0.8s_ease_forwards]">
//         Capstone Project
//         <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
//       </h2> */}
//       <SectionHeading title=" Capstone Project" />

//       <div className="px-6 py-12 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[1200px] w-full mx-auto my-8 font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]">
//         <div className="text-center mb-10">
//           <p className="text-[#37474f] text-[1.1rem] font-medium mb-6">
//             Hands-on experience with real-world AI applications
//           </p>
//         </div>

//         <div className="flex justify-center mb-10">
//           <div className="inline-flex bg-[rgba(255,255,255,0.7)] rounded-full p-[0.4rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex-wrap justify-center">
//             {["beginner", "intermediate", "advanced"].map((level) => (
//               <button
//                 key={level}
//                 onClick={() => setActiveLevel(level)}
//                 className={`relative bg-none border-none px-7 py-3 text-[1rem] font-semibold cursor-pointer rounded-full transition-all duration-300 z-[1] ${
//                   activeLevel === level ? "text-white" : "text-[#4a5568]"
//                 }`}
//               >
//                 <span className="relative z-[2]">
//                   {level.charAt(0).toUpperCase() + level.slice(1)}
//                 </span>
//                 <span
//                   className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00bbff] to-[#1a365d] rounded-full z-[-1] transition-opacity duration-300 ${
//                     activeLevel === level ? "opacity-100" : "opacity-0"
//                   }`}
//                 ></span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 items-stretch max-[768px]:grid-cols-1">
//           {projectLevels[activeLevel].map((proj, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden border border-[rgba(0,187,255,0.1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-gradient-to-b before:from-[#00bbff] before:to-[#1a365d] before:opacity-0 hover:before:opacity-100"
//             >
//               <div>
//                 <h3 className="text-[1.25rem] m-0 text-[#1a365d] font-bold leading-[1.4] text-left">
//                   {proj.title}
//                 </h3>
//               </div>

//               <p className="text-[#4a5568] leading-[1.6] mb-6 font-medium flex-shrink-0 text-left mt-4">
//                 {proj.description}
//               </p>

//               <div className="mb-4">
//                 <span className="font-bold block text-[#1a365d] mb-1">
//                   Workflow
//                 </span>
//                 <p>{proj.workflow}</p>
//               </div>

//               <div className="mb-4">
//                 <span className="font-bold block text-[#1a365d] mb-1">
//                   Tools & Technologies
//                 </span>
//                 <p>{proj.tools}</p>
//               </div>

//               <button
//                 onClick={() => setShowForm(true)}
//                 className="mt-auto bg-gradient-to-br from-[#0bf] to-[#1a365d] border-none shadow-[0_4px_12px_rgba(11,191,255,0.3)] text-white text-[0.95rem] font-semibold px-5 py-3 rounded-lg cursor-pointer inline-flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0099cc] hover:to-[#162a4d] max-[480px]:mx-auto"
//               >
//                 View Project Details <ArrowRight />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showForm && <FormModal onClose={() => setShowForm(false)} />}
//     </>
//   );
// };

// export default Project;





// --------------------------------------------new design ---------------------------------------------------------------

"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, GitBranch, Wrench } from "lucide-react";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const projectLevels = {
  beginner: [
    {
      title: "End-to-End Blog Platform with Automated CI/CD",
      description:
        "A full CI/CD setup for a blog platform (WordPress or Node.js). Covers source control, CI/CD, containerization, and deployment in a controlled environment.",
      workflow:
        "Developer commits → GitHub triggers Jenkins → build Docker image → push to DockerHub → deploy on a local Docker host with automated rollback on failure.",
      tools: "GitHub, Jenkins, Docker, Linux, Nginx",
    },
    {
      title: "Multi-Service To-Do Application with Docker Compose",
      description:
        "Deploy a multi-service application locally, focusing on microservices basics, networking, and orchestration with Docker Compose.",
      workflow:
        "Build backend (API), frontend, and database containers → manage with Docker Compose → integrate automated build and versioning with Git hooks.",
      tools: "Docker, Docker Compose, Git, MySQL/Postgres",
    },
    {
      title: "Terraform + Ansible Hybrid Infra Automation (Local Cloud)",
      description:
        "Combines IaC (Terraform) with configuration management (Ansible) to build a reproducible infrastructure for a 2-tier app.",
      workflow:
        "Provision VMs with Terraform → configure them with Ansible (web server, DB) → deploy a sample app automatically.",
      tools: "Terraform, Ansible, VirtualBox/Docker, Git",
    },
  ],
  intermediate: [
    {
      title: "Serverless E-Commerce Platform",
      description:
        "Build a serverless, cost-efficient e-commerce app leveraging AWS free-tier services and automated deployments.",
      workflow:
        "Code stored on GitHub → GitHub Actions builds & tests → deploy frontend on AWS S3 + CloudFront → backend with AWS Lambda + API Gateway → DynamoDB as database.",
      tools:
        "GitHub Actions, AWS Lambda, API Gateway, S3, CloudFront, DynamoDB",
    },
    {
      title: "Kubernetes Microservices Deployment on AWS EKS",
      description:
        "Deploy a production-like microservices app on AWS-managed Kubernetes with monitoring and scaling.",
      workflow:
        "Build multiple microservices → push Docker images to DockerHub/ECR → deploy to AWS EKS using Helm → set up monitoring with Prometheus + Grafana.",
      tools: "AWS EKS, Docker, Kubernetes, Helm, Prometheus, Grafana",
    },
    {
      title: "Centralized Logging and Monitoring Platform on AWS",
      description:
        "Build a full-stack observability solution for a sample app using AWS free-tier monitoring/logging services integrated with ELK.",
      workflow:
        "Application logs → shipped via Fluentd/Logstash → stored in AWS OpenSearch → visualized in Kibana → CloudWatch alarms for anomalies.",
      tools: "AWS OpenSearch, ELK Stack, CloudWatch, EC2",
    },
  ],
  advanced: [
    {
      title: "AI-Powered CI/CD Pipeline with Predictive Build Optimization",
      description:
        "Enhance DevOps pipeline efficiency with AI-driven predictions to reduce build times and increase reliability.",
      workflow:
        "Developer commits → Jenkins/GitHub Actions pipeline → AI model analyzes build history → predicts build failures or flaky tests → skips/optimizes unnecessary stages → deploy to staging/prod automatically.",
      tools:
        "Jenkins/GitHub Actions, Python (scikit-learn/TensorFlow), AWS S3, Docker, Kubernetes",
    },
    {
      title: "GitOps-Driven Multi-Cloud Deployment with ArgoCD & Terraform",
      description:
        "Enterprise-level GitOps project deploying applications across multiple clouds with full automation.",
      workflow:
        "Define infra as code (Terraform) → Git acts as the single source of truth → ArgoCD syncs applications across AWS + Azure clusters → deploy multi-cloud resilient app with monitoring.",
      tools:
        "Terraform, ArgoCD, Kubernetes (EKS + AKS), Helm, Prometheus, Grafana",
    },
    {
      title: "Self-Healing Scalable Application Platform",
      description:
        "A next-gen DevOps project where your platform automatically detects and resolves issues, ensuring resilience and minimal downtime.",
      workflow:
        "Deploy app on AWS with Kubernetes → set up autoscaling (HPA, VPA, cluster autoscaler) → integrate monitoring with Prometheus → configure self-healing with AI-based anomaly detection → automate recovery actions.",
      tools:
        "Kubernetes, AWS EKS, Prometheus, Grafana, Python (AI anomaly detection), Terraform",
    },
  ],
};

// Meta for each level
const levelMeta = {
  beginner: { label: "Beginner", index: 1, dots: 1, tagline: "Foundation builders" },
  intermediate: { label: "Intermediate", index: 2, dots: 2, tagline: "Production-ready systems" },
  advanced: { label: "Advanced", index: 3, dots: 3, tagline: "Enterprise-grade platforms" },
};

// ---------- Modal ----------
const FormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[rgba(10,20,40,0.7)] backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl w-full max-w-[720px] shadow-[0_30px_80px_-20px_rgba(10,20,40,0.5)] ring-1 ring-[#1a365d]/10 overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        {/* Accent band */}
        <div className="h-1 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close form"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[#1a365d]/10 text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all duration-300 shadow-md"
        >
          <X className="w-4 h-4" strokeWidth={2.5} />
        </button>

        <iframe
          aria-label="Request A Callback"
          frameBorder="0"
          style={{ height: "700px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.in/skillfyme11/form/RequestACallbackDevOpswithAI/formperma/DksoeC7mbLLtFa3YDGzLpjG0dbVjTHMZsvJR2_ZD_cI"
        />
      </div>
    </div>
  );
};

// ---------- Component ----------
const Project = () => {
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLevelChange = (level) => {
    if (level === activeLevel) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveLevel(level);
      setIsTransitioning(false);
    }, 200);
  };

  const activeProjects = projectLevels[activeLevel];
  const activeMeta = levelMeta[activeLevel];
  const levels = ["beginner", "intermediate", "advanced"];

  return (
    <>
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8faff]">
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#dbe7f5 1px, transparent 1px), linear-gradient(90deg, #dbe7f5 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Gradient blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #0bf 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-16 w-[380px] h-[380px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #1a365d 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          {/* ---------- Heading ---------- */}
          <div className="mb-8 lg:mb-10">
            <SectionHeading title="Capstone Project" />
            <p className="mt-4 text-center text-[#475569] text-[15px] sm:text-base leading-[1.75] max-w-2xl mx-auto">
              Real-world, portfolio-worthy projects — graduated across skill
              levels so you can pick where you are and build toward where you
              want to be.
            </p>
          </div>

          {/* ---------- Level selector ---------- */}
          <div className="mb-8 sm:mb-10 flex justify-center">
            <div className="relative inline-flex items-center gap-1 p-1.5 bg-white rounded-full shadow-[0_10px_30px_-12px_rgba(26,54,93,0.2)] ring-1 ring-[#1a365d]/10">
              {levels.map((level) => {
                const meta = levelMeta[level];
                const isActive = activeLevel === level;
                return (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                      isActive
                        ? "bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white shadow-md"
                        : "text-[#1a365d]/60 hover:text-[#1a365d]"
                    }`}
                  >
                    {/* Difficulty dots */}
                    <span className="hidden sm:flex items-center gap-0.5">
                      {[1, 2, 3].map((d) => (
                        <span
                          key={d}
                          className={`w-1 h-1 rounded-full transition-colors ${
                            d <= meta.dots
                              ? isActive
                                ? "bg-white"
                                : "bg-[#0bf]"
                              : isActive
                              ? "bg-white/30"
                              : "bg-[#1a365d]/15"
                          }`}
                        />
                      ))}
                    </span>
                    {meta.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------- Level context bar ---------- */}
          <div
            className={`mb-6 sm:mb-8 flex items-center justify-center transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 translate-y-1"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/55">
              <span className="w-8 h-px bg-[#1a365d]/30" />
              <span className="font-mono tabular-nums text-[#0bf]">
                Level {activeMeta.index} / 3
              </span>
              <span className="text-[#1a365d]/35">·</span>
              <span>{activeMeta.tagline}</span>
              <span className="w-8 h-px bg-[#1a365d]/30" />
            </div>
          </div>

          {/* ---------- Projects grid ---------- */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
          >
            {activeProjects.map((proj, index) => (
              <article
                key={`${activeLevel}-${index}`}
                className="group/card relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_-20px_rgba(26,54,93,0.25)] ring-1 ring-[#1a365d]/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(26,54,93,0.3)] hover:ring-[#0bf]/20"
              >
                {/* Top accent band */}
                <div className="h-1 bg-gradient-to-r from-[#0bf] via-[#4a90e2] to-[#1a365d]" />

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Header row: index + level badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-semibold uppercase text-[#1a365d]/50">
                      <span className="font-mono tabular-nums text-[#0bf]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-5 h-px bg-[#1a365d]/30" />
                      Project
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0bf]/10 border border-[#0bf]/20 text-[10px] font-bold uppercase tracking-wider text-[#1a365d]">
                      <span className="flex items-center gap-0.5">
                        {[1, 2, 3].map((d) => (
                          <span
                            key={d}
                            className={`w-1 h-1 rounded-full ${
                              d <= activeMeta.dots
                                ? "bg-[#0bf]"
                                : "bg-[#1a365d]/20"
                            }`}
                          />
                        ))}
                      </span>
                      {activeMeta.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[1.1rem] sm:text-[1.2rem] font-extrabold text-[#1a365d] leading-[1.3] tracking-tight mb-3">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] text-[#475569] leading-[1.65] mb-5 pb-5 border-b border-dashed border-[#1a365d]/10">
                    {proj.description}
                  </p>

                  {/* Workflow */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <GitBranch
                        className="w-3.5 h-3.5 text-[#0bf]"
                        strokeWidth={2.5}
                      />
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1a365d]/55">
                        Workflow
                      </p>
                    </div>
                    <p className="text-[12.5px] text-[#475569] leading-[1.65] pl-[22px]">
                      {proj.workflow}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench
                        className="w-3.5 h-3.5 text-[#0bf]"
                        strokeWidth={2.5}
                      />
                      <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#1a365d]/55">
                        Tools & Technologies
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-[22px]">
                      {proj.tools.split(",").map((tool, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-[linear-gradient(135deg,#f5f9ff,#e1eeff)] border border-[#1a365d]/5 text-[#1a365d]/80"
                        >
                          {tool.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setShowForm(true)}
                    className="group/btn mt-auto inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#0bf] to-[#1a365d] text-white text-sm font-semibold tracking-wide shadow-[0_10px_25px_-10px_rgba(11,191,255,0.5)] transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(11,191,255,0.6)]"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showForm && <FormModal onClose={() => setShowForm(false)} />}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Project;