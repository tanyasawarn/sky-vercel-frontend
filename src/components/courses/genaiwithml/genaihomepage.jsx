import React from "react";
import Header from "./genaiheader/genaiheader";
import GenAiCourseSection from "./coursesection/coursesection";
import GenaiInfoBox from "./genaiinfobox/genaiinfobox";
import GenAIInsights from "./genaiinsights/genaiinsights";
import GenaiCareerOptions from "./genaicareeroptions/genaicareeroptions";
import GenAICurriculum from "./curriculum/genaicurriculum";
import GenaimlToolsFrameworks from "./genaitools/genaitools";
import GenAIProject from "./projects/genaiprojects";
import GenaiLearningObjectives from "./learningobjective/genailearningobjective";
import GenAIProgramfees from "./programfees/genaiprogramfees";
import GenaiDailyKra from "./dailykra/genaidailykra";
import GenAICertificate from "./certificate/certificate";
import GenAICourseReview from "./coursereview/genaicoursereview";
import { genaiFaqs } from "../../common/faq/faqdata";
import GenaiFaq from "./genaifaq/genaifaq";

export const metadata = {
  title: "Learn Generative AI with ML Course | Skillfyme",
  description:
    "Learn Generative AI,Agentic AI, ML & LLMs with real-world projects and placement support. Become an AI Engineer with Skillfyme.",
};

const Genaihomepage = () => {
  return (
    <>
      <section id="home" className="scroll-mt-24">
        <Header />
        <GenAiCourseSection />
        <GenAIInsights />
        <GenaiInfoBox />
        <GenaiCareerOptions />
      </section>

      <section id="coursedetails" className="scroll-mt-24">
        <GenAICurriculum />
      </section>

      <GenaimlToolsFrameworks />
      <section id="projects" className="scroll-mt-24">
        <GenAIProject />
      </section>
      <GenaiLearningObjectives />
      <section id="course-fee" className="scroll-mt-24">
        <GenAIProgramfees />
      </section>
      <GenaiDailyKra />
      <GenAICertificate />
      <section id="testimonials" className="scroll-mt-24">
        <GenAICourseReview />
      </section>

      <GenaiFaq faqs={genaiFaqs} />
    </>
  );
};

export default Genaihomepage;
