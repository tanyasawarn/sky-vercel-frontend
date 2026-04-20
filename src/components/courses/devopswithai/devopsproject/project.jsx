"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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

const FormModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[1000]">
      <div className="bg-white p-4 rounded-xl w-[80%] max-w-[700px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] relative">
        <button
          className="absolute top-[10px] right-[12px] bg-red-500 text-white border-none rounded-full w-[30px] h-[30px] cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        <iframe
          aria-label="Request A Callback"
          frameBorder="0"
          style={{ height: "700px", width: "100%", border: "none" }}
          src="https://forms.zohopublic.in/skillfyme11/form/RequestACallbackDevOpswithAI/formperma/DksoeC7mbLLtFa3YDGzLpjG0dbVjTHMZsvJR2_ZD_cI"
        ></iframe>
      </div>
    </div>
  );
};

const Project = () => {
  const [activeLevel, setActiveLevel] = useState("beginner");
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* <h2 className="text-center text-[2.5rem] font-bold mb-2 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent mt-6 relative animate-[fadeInUp_0.8s_ease_forwards]">
        Capstone Project
        <span className="block w-[180px] h-[4px] mx-auto mt-3 rounded bg-gradient-to-br from-[#0bf] to-[#1a365d] opacity-0 animate-[fadeInUp_0.8s_ease_0.3s_forwards]" />
      </h2> */}
      <SectionHeading title=" Capstone Project" />

      <div className="px-6 py-12 bg-gradient-to-br from-[#f8faff] to-[#f0f5ff] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-[1200px] w-full mx-auto my-8 font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]">
        <div className="text-center mb-10">
          <p className="text-[#37474f] text-[1.1rem] font-medium mb-6">
            Hands-on experience with real-world AI applications
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[rgba(255,255,255,0.7)] rounded-full p-[0.4rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex-wrap justify-center">
            {["beginner", "intermediate", "advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`relative bg-none border-none px-7 py-3 text-[1rem] font-semibold cursor-pointer rounded-full transition-all duration-300 z-[1] ${
                  activeLevel === level ? "text-white" : "text-[#4a5568]"
                }`}
              >
                <span className="relative z-[2]">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
                <span
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00bbff] to-[#1a365d] rounded-full z-[-1] transition-opacity duration-300 ${
                    activeLevel === level ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 items-stretch max-[768px]:grid-cols-1">
          {projectLevels[activeLevel].map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden border border-[rgba(0,187,255,0.1)] flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-gradient-to-b before:from-[#00bbff] before:to-[#1a365d] before:opacity-0 hover:before:opacity-100"
            >
              <div>
                <h3 className="text-[1.25rem] m-0 text-[#1a365d] font-bold leading-[1.4] text-left">
                  {proj.title}
                </h3>
              </div>

              <p className="text-[#4a5568] leading-[1.6] mb-6 font-medium flex-shrink-0 text-left mt-4">
                {proj.description}
              </p>

              <div className="mb-4">
                <span className="font-bold block text-[#1a365d] mb-1">
                  Workflow
                </span>
                <p>{proj.workflow}</p>
              </div>

              <div className="mb-4">
                <span className="font-bold block text-[#1a365d] mb-1">
                  Tools & Technologies
                </span>
                <p>{proj.tools}</p>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="mt-auto bg-gradient-to-br from-[#0bf] to-[#1a365d] border-none shadow-[0_4px_12px_rgba(11,191,255,0.3)] text-white text-[0.95rem] font-semibold px-5 py-3 rounded-lg cursor-pointer inline-flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0099cc] hover:to-[#162a4d] max-[480px]:mx-auto"
              >
                View Project Details <ArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>

      {showForm && <FormModal onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Project;
