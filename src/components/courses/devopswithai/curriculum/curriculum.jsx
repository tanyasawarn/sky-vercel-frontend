// "use client";

// import React, { useState } from "react";
// import { PlayCircle } from "lucide-react";
//  import DevopsLearningStats from "./devopslearningstats/learningstats";

// const Devopscurriculum = () => {
//   const curriculumData = [
//     {
//       title: "DevOps Certification",
//       subtopics: [
//         "Devops Fundamentals",
//         "GitOps: Git, GitHub, GitLab",
//         "Infrastructure as Code (IaC): Terraform, AWS CloudFormation",
//         "Microservices: Kubernetes, Docker",
//         "DevSecOps: Jenkins (with security plugins), GitLab CI/CD (with security pipelines)",
//         "Jenkins: Job creation, pipeline as code, distributed builds (master-slave architecture)",
//         "GitLab CI/CD: CI/CD pipelines, multi-project pipelines",
//         "GitHub Actions: Advanced workflows, automation tasks",
//       ],
//     },
//     {
//       title: "Docker & Kubernetes Certification",
//       subtopics: [
//         "Docker Fundamental",
//         "Docker: DockerHub, Docker networking, Docker Swarm",
//         "Kubernetes: Pods, Services, Deployments, StatefulSets, ConfigMaps, Secrets",
//         "Istio: Service mesh for Kubernetes, traffic management, security with mTLS",
//         "Tekton: Building CI/CD pipelines in Kubernetes",
//         "FluxCD and Argo CD: GitOps tools for continuous delivery",
//       ],
//     },
//     {
//       title: "Devops Cloud Certification",
//       subtopics: [
//         "Basics of AWS,Azure and GCP",
//         "Cloud-Native Development: Twelve-Factor App methodology, serverless architectures",
//         "AWS Services: Various compute, storage, networking, and database services",
//         "Azure Services: Virtual machines, Azure Kubernetes Service (AKS), Azure Functions",
//         "Continuous Delivery: Canary releases, blue/green deployments",
//         "Security: Zero trust model, mTLS for service-to-service communication",
//       ],
//     },
//     {
//       title: "Terraform Certification",
//       subtopics: [
//         "Ansible: Basics and Advanced",
//         "Playbooks",
//         "Terraform: Providers resources, variables, output blocks, dynamic blocks, modules, workspaces, remote state management",
//         "Terraform Cloud: Collaboration, scalability, governance features",
//         "AWS and Azure: Integration with Terraform, infrastructure provisioning",
//       ],
//     },
//     {
//       title: "Monitoring, Logging and Observability",
//       subtopics: [
//         "Monitoring: Prometheus, Grafana, Nagios XI",
//         "Logging: ELK Stack (Elasticsearch, Logstash, Kibana)",
//         "Advanced Monitoring: Prometheus (advanced features, alerting), Grafana (advanced features), Jaeger (distributed tracing)",
//         "Alerting and Dashboards: Prometheus Alertmanager, Grafana dashboards",
//         "Scaling Monitoring Infrastructure: Strategies for Prometheus and Grafana",
//       ],
//     },
//     {
//       title: "Devops with AI Certification",
//       subtopics: [
//         "AI-Driven Automation",
//         "Predictive Analytics for DevOps",
//         "Incident Management and Root Cause Analysis",
//         "Enhancing Security with AI in DevOps (AIOps)",
//         "AI-Enhanced Monitoring and Observability",
//         "AI-Driven Optimization and Self-Healing Systems",
//       ],
//     },
//     // {
//     //   title: "Applied Agentic AI: Building Autonomous Systems: ",
//     //   subtopics: [
//     //    "Foundations of Agentic AI",
//     //    "Agent Architectures and Design Patterns",
//     //    "Building with LangChain and LCEL",
//     //    "Developing AI Agents using LangGraph",
//     //    " Implementing Agentic RAG Workflows",
//     //    "Creating AI Agents with Phidata",
//     //    "Multi-Agent Systems using LangGraph and CrewAI",
//     //    "Advanced Agent Development with AutoGen",
//     //    "Agent Observability and AgentOps",
//     //    "RAG Architecture with Vector Databases",
//     //    "Advanced RAG Techniques and Evaluation",
//     //    "Continuous Integration, Deployment, and Scaling for LLMs",
//     //   ],
//     // },
//     {
//       title: "Additional Tools and Technologies Covered",
//       subtopics: [
//         "Version Control: Git, GitHub, GitLab",
//         "CI/CD: Jenkins, GitLab CI/CD, GitHub Actions",
//         "Containerization: Docker",
//         "Container Orchestration: Kubernetes",
//         "Service Mesh: Istio",
//         "Infrastructure as Code: Terraform",
//         "Cloud Platforms: AWS, Azure",
//         "Monitoring and Observability: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Jaeger",
//         "GitOps Tools: FluxCD, Argo CD",
//         "Serverless Computing: AWS Lambda, Azure Functions",
//         "Security Tools: Various security plugins integrated into CI/CD pipelines",
//       ],
//     },
//     {
//       title: "Industry Grade Project",
//       subtopics: [
//         "Industry Grade Project",
//         "Develop a DevSecOps pipeline that integrates AI-driven real-time threat detection and automated security responses. Implement continuous security checks and compliance validations throughout the CI/CD process.",
//         "Tools: Jenkins Docker, Kubernetes, SonarQube, TensorFlow, ELK Stack,Prometheus, Grafana, Azure Security Center",
//       ],
//     },
//   ];

//   const [activeModuleIndex, setActiveModuleIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleModuleChange = (index) => {
//     if (isAnimating) return;

//     if (index === activeModuleIndex) {
//       setActiveModuleIndex(null);
//       return;
//     }

//     setIsAnimating(true);
//     setTimeout(() => {
//       setActiveModuleIndex(index);
//       setTimeout(() => setIsAnimating(false), 300);
//     }, 300);
//   };

//   return (
//     <>
//       {/* Heading */}

//      <h2 className="relative text-center text-[2.2rem] font-bold mb-12 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
//   Course Modules
//   <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
// </h2>

//       <div className="relative max-w-[1200px] mx-auto p-10 rounded-xl bg-[linear-gradient(135deg,#f8faff,#f0f5ff)] shadow-[0_25px_50px_-12px_rgba(66,100,255,0.15)] overflow-hidden">
//         {/* Floating Shapes */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute w-[300px] h-[300px] -top-[150px] -left-[150px] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
//           <div className="absolute w-[200px] h-[200px] bottom-[20%] right-[10%] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
//         </div>

//         <div className="relative flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="flex-1 max-w-[400px] flex flex-col gap-4">
//             {curriculumData.map((module, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleModuleChange(index)}
//                 className={`relative p-5 rounded-xl cursor-pointer transition-all border backdrop-blur-md ${
//                   index === activeModuleIndex
//                     ? "shadow-lg border-blue-300"
//                     : "bg-white/80 border-gray-200 hover:shadow-md"
//                 }`}
//               >
//                 <div className="flex gap-4 items-start">
//                   {/* Number */}
//                   <div className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d]">
//                     0{index + 1}
//                   </div>

//                   {/* Title */}
//                   <div>
//                     <h3 className="text-sm font-semibold text-[#2c3e6d]">
//                       {module.title}
//                     </h3>

//                     {/* Progress */}
//                     <div className="flex items-center gap-2 mt-2">
//                       <div className="w-[80px] h-[4px] bg-gray-200 rounded">
//                         <div
//                           className="h-full bg-gradient-to-br from-[#0bf] to-[#1a365d] transition-all"
//                           style={{
//                             width: index === activeModuleIndex ? "100%" : "0%",
//                           }}
//                         ></div>
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {module.subtopics.length} Topics
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Mobile Expand */}
//                 {index === activeModuleIndex && (
//                   <div className="mt-4 p-4 bg-white rounded-lg border md:hidden">
//                     <div className="flex flex-wrap gap-2 mb-3">
//                       <span className="px-3 py-1 text-xs bg-blue-100 rounded-full">
//                         {module.subtopics.length} Topics
//                       </span>
//                     </div>

//                     {module.subtopics.map((topic, i) => (
//                       <div key={i} className="flex gap-2 mb-2 text-sm">
//                         <PlayCircle className="w-4 h-4 text-[#007daa]" />
//                         <span>{topic}</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Desktop Content */}
//           <div className="flex-1 hidden md:block">
//             {activeModuleIndex !== null && (
//               <div
//                 className={`transition-all ${
//                   isAnimating ? "opacity-0" : "opacity-100"
//                 }`}
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-xl font-semibold text-[#2c3e6d]">
//                     {curriculumData[activeModuleIndex].title}
//                   </h3>

//                   <span className="px-4 py-1 text-white text-sm rounded-full bg-gradient-to-br from-[#0bf] to-[#1a365d]">
//                     {curriculumData[activeModuleIndex].subtopics.length} Topics
//                   </span>
//                 </div>

//                 <div className="bg-white/80 rounded-xl p-6 backdrop-blur-md">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {curriculumData[activeModuleIndex].subtopics.map(
//                       (topic, i) => (
//                         <div
//                           key={i}
//                           className="flex gap-3 p-3 rounded-lg bg-white shadow hover:shadow-md transition"
//                         >
//                           <PlayCircle className="w-5 h-5 text-[#007daa]" />
//                           <span className="text-sm text-[#2c3e6d]">
//                             {topic}
//                           </span>
//                         </div>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <DevopsLearningStats />
//     </>
//   );
// };

// export default Devopscurriculum;





"use client";

import React, { useState } from "react";
import DevopsLearningStats from "./devopslearningstats/learningstats";
import SectionHeading from "@/components/common/sectionheading/sectionheading";

const Devopscurriculum = () => {
  const curriculumData = [
    {
      title: "DevOps Certification",
      subtopics: [
        "Devops Fundamentals",
        "GitOps: Git, GitHub, GitLab",
        "Infrastructure as Code (IaC): Terraform, AWS CloudFormation",
        "Microservices: Kubernetes, Docker",
        "DevSecOps: Jenkins (with security plugins), GitLab CI/CD (with security pipelines)",
        "Jenkins: Job creation, pipeline as code, distributed builds (master-slave architecture)",
        "GitLab CI/CD: CI/CD pipelines, multi-project pipelines",
        "GitHub Actions: Advanced workflows, automation tasks",
      ],
    },
    {
      title: "Docker & Kubernetes Certification",
      subtopics: [
        "Docker Fundamental",
        "Docker: DockerHub, Docker networking, Docker Swarm",
        "Kubernetes: Pods, Services, Deployments, StatefulSets, ConfigMaps, Secrets",
        "Istio: Service mesh for Kubernetes, traffic management, security with mTLS",
        "Tekton: Building CI/CD pipelines in Kubernetes",
        "FluxCD and Argo CD: GitOps tools for continuous delivery",
      ],
    },
    {
      title: "Devops Cloud Certification",
      subtopics: [
        "Basics of AWS,Azure and GCP",
        "Cloud-Native Development: Twelve-Factor App methodology, serverless architectures",
        "AWS Services: Various compute, storage, networking, and database services",
        "Azure Services: Virtual machines, Azure Kubernetes Service (AKS), Azure Functions",
        "Continuous Delivery: Canary releases, blue/green deployments",
        "Security: Zero trust model, mTLS for service-to-service communication",
      ],
    },
    {
      title: "Terraform Certification",
      subtopics: [
        "Ansible: Basics and Advanced",
        "Playbooks",
        "Terraform: Providers resources, variables, output blocks, dynamic blocks, modules, workspaces, remote state management",
        "Terraform Cloud: Collaboration, scalability, governance features",
        "AWS and Azure: Integration with Terraform, infrastructure provisioning",
      ],
    },
    {
      title: "Monitoring, Logging and Observability",
      subtopics: [
        "Monitoring: Prometheus, Grafana, Nagios XI",
        "Logging: ELK Stack (Elasticsearch, Logstash, Kibana)",
        "Advanced Monitoring: Prometheus (advanced features, alerting), Grafana (advanced features), Jaeger (distributed tracing)",
        "Alerting and Dashboards: Prometheus Alertmanager, Grafana dashboards",
        "Scaling Monitoring Infrastructure: Strategies for Prometheus and Grafana",
      ],
    },
    {
      title: "Devops with AI Certification",
      subtopics: [
        "AI-Driven Automation",
        "Predictive Analytics for DevOps",
        "Incident Management and Root Cause Analysis",
        "Enhancing Security with AI in DevOps (AIOps)",
        "AI-Enhanced Monitoring and Observability",
        "AI-Driven Optimization and Self-Healing Systems",
      ],
    },
    {
      title: "Additional Tools and Technologies Covered",
      subtopics: [
        "Version Control: Git, GitHub, GitLab",
        "CI/CD: Jenkins, GitLab CI/CD, GitHub Actions",
        "Containerization: Docker",
        "Container Orchestration: Kubernetes",
        "Service Mesh: Istio",
        "Infrastructure as Code: Terraform",
        "Cloud Platforms: AWS, Azure",
        "Monitoring and Observability: Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Jaeger",
        "GitOps Tools: FluxCD, Argo CD",
        "Serverless Computing: AWS Lambda, Azure Functions",
        "Security Tools: Various security plugins integrated into CI/CD pipelines",
      ],
    },
    {
      title: "Industry Grade Project",
      subtopics: [
        "Industry Grade Project",
        "Develop a DevSecOps pipeline that integrates AI-driven real-time threat detection and automated security responses. Implement continuous security checks and compliance validations throughout the CI/CD process.",
        "Tools: Jenkins Docker, Kubernetes, SonarQube, TensorFlow, ELK Stack,Prometheus, Grafana, Azure Security Center",
      ],
    },
  ];

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModuleChange = (index) => {
    if (isAnimating) return;

    if (index === activeModuleIndex) {
      setActiveModuleIndex(null);
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setActiveModuleIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  return (
    <>
      {/* Heading */}
      {/* <h2 className="relative text-center text-[2.2rem] font-bold mb-12 bg-gradient-to-br from-[#0bf] to-[#1a365d] bg-clip-text text-transparent">
        Course Modules
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[80px] h-[5px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded"></span>
      </h2> */}

      <SectionHeading title="Course Modules" />

      <div className="relative max-w-[1200px] mx-auto p-6 md:p-10 rounded-xl bg-[linear-gradient(135deg,#f8faff,#f0f5ff)] shadow-[0_25px_50px_-12px_rgba(66,100,255,0.15)] overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[300px] h-[300px] -top-[150px] -left-[150px] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
          <div className="absolute w-[200px] h-[200px] bottom-[20%] right-[10%] rounded-full bg-blue-400/10 blur-[40px] animate-pulse"></div>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="flex-1 max-w-[400px] flex flex-col gap-4">
            {curriculumData.map((module, index) => (
              <div
                key={index}
                onClick={() => handleModuleChange(index)}
                className={`relative p-5 rounded-xl cursor-pointer transition-all duration-300 border backdrop-blur-md ${
                  index === activeModuleIndex
                    ? "shadow-lg border-blue-300 bg-white/90 scale-[1.02]"
                    : "bg-white/80 border-gray-200 hover:shadow-md hover:scale-[1.01]"
                }`}
              >
                <div className="flex gap-4 items-start">
                  {/* Number */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-md">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#2c3e6d] leading-tight">
                      {module.title}
                    </h3>

                    {/* Progress */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-[80px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-br from-[#0bf] to-[#1a365d] transition-all duration-500 rounded-full"
                          style={{
                            width: index === activeModuleIndex ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {module.subtopics.length} Topics
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Expand */}
                {index === activeModuleIndex && (
                  <div className="mt-4 p-4 bg-white rounded-lg border lg:hidden">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 text-xs bg-gradient-to-br from-[#0bf]/10 to-[#1a365d]/10 rounded-full text-[#2c3e6d] font-medium">
                        {module.subtopics.length} Topics
                      </span>
                    </div>

                    <div className="space-y-2">
                      {module.subtopics.map((topic, i) => (
                        <div key={i} className="flex gap-2 text-sm">
                          <span className="text-[#007daa] mt-0.5">•</span>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Content */}
          <div className="flex-1 hidden lg:block">
            {activeModuleIndex !== null && (
              <div
                className={`transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-[#2c3e6d]">
                    {curriculumData[activeModuleIndex].title}
                  </h3>

                  <span className="px-4 py-1 text-white text-sm rounded-full bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-md">
                    {curriculumData[activeModuleIndex].subtopics.length} Topics
                  </span>
                </div>

                <div className="bg-white/90 rounded-xl p-6 backdrop-blur-md border border-white/50 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {curriculumData[activeModuleIndex].subtopics.map(
                      (topic, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-100 hover:border-[#0bf]/30 group"
                        >
                          <span className="text-[#007daa] font-bold group-hover:text-[#0bf] transition-colors">•</span>
                          <span className="text-sm text-[#2c3e6d] leading-relaxed">
                            {topic}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <DevopsLearningStats />
    </>
  );
};

export default Devopscurriculum;