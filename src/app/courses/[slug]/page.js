import { notFound } from "next/navigation";

const courses = {
  "devops-with-ai-masters-program": {
    title: "DevOps With AI Masters Program",
  },
  "genai-with-ml-masters-program": {
    title: "Gen AI With ML Masters Program",
  },
  "mlops-masters-program": {
    title: "MLOps With Agentic AI Masters Program",
  },
};

export default function CoursePage({ params }) {
  const course = courses[params.slug];

  if (!course) return notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{course.title}</h1>
    </div>
  );
}