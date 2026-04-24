"use client";

import React, { useContext } from "react";
import DevopsHeader from "./devopsheader/devopsheader";
import { UserContext } from "@/context/usercontext";
import Stats from "@/components/common/Stats/Stats";
import CourseFeatures from './devopscoursefeature/devopscoursefeature';
import DevOpsOpportunities from './devopsopportunities/devopsopportunities'
import DevOpsRoles from './devopsjobrole/devopsjobrole'
import BatchDetails from './devopsbatchdetail/batchdetail'
import Devopscurriculum from './curriculum/curriculum'
import ToolsFramework from './devopstools/tools'
import ProjectShowcase from './devopsproject/project'
import DevopsBatchProfileApp from './devopsjobprofile/devopsjobprofile'
import DevopsDailyKra from './devopsdailykra/devopsdailykra'
import PricingComponent from './devopscoursefee/coursefee'
import DevOpsVideoTestimonials from './devopstestimonial/devopstestimonial'
import Certificate from "./certificate/certificate"
import Faq from "@/components/common/faq/faq";
import { devopsFaqs } from "@/components/common/faq/faqdata";


export const metadata = {
  title: "DevOps with AI Course & Interview Gurantee | Skillfyme",
  description:
    "Master DevOps with AI tools, real-time projects & placement support. Become a job-ready DevOps Engineer with Skillfyme.",
};

const deopshomapage = () => {
  const { userCountry, loading } = useContext(UserContext);

  const devOpsStats = [
    {
      value: "Launch Your Career",
      description: "Assured Internships & jobs up to 5 LPA",
    },
    {
      value: "Fast-Track Growth",
      description: "0–3 yrs:Assured Job Roles up to 12 LPA",
    },
    {
      value: "Level Up to Leader",
      description: "5+ yrs: Transition to Senior DevOps roles",
    },
    {
      value: "Why Choose Us?",
      description: "Assured Outcomes after completion",
    },
  ];

  const devOpsStatsInternationalLearners = [
    {
      value: "Launch Your Career",
      description: "Master in-demand DevOps skills for global opportunities",
    },
    {
      value: "Fast-Track Growth",
      description:
        "Gain real-world project experience to accelerate your career",
    },
    {
      value: "Level Up to Leader",
      description: "Advance to senior DevOps roles with expert-led training",
    },
    {
      value: "Why Choose Us?",
      description:
        "Job-ready skills, certifications & lifetime learning access",
    },
  ];

  // Decide which stats to show
  const statsToShow =
    userCountry === "IN" ? devOpsStats : devOpsStatsInternationalLearners;

  return (
    <>
    
    
      <section id="home">
        <DevopsHeader />
      </section>
      {!loading && <Stats statsData={statsToShow} />}
      <CourseFeatures />
      <DevOpsOpportunities />
      <DevOpsRoles />
      <BatchDetails />
     <section id="coursedetails" className="scroll-mt-24">
         <Devopscurriculum />
     </section>
      <ToolsFramework />
      <section id="projects" className="scroll-mt-24">
         <ProjectShowcase />
      </section>
    
      <DevopsBatchProfileApp/>
      <DevopsDailyKra />
      <section id="course-fee" className="scroll-mt-27">
       <PricingComponent />
      </section>
    
            <Certificate />
     <section id="testimonials" className="scroll-mt-24">
         <DevOpsVideoTestimonials/>
     </section>
      <Faq faqs={devopsFaqs} />
 
    </>
  );
};

export default deopshomapage;
