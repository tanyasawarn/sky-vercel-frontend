"use client";
import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

/* Google SVG */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

/* YouTube SVG */
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22">
    <path fill="#FF0000" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);


const googleReviews = [
   {
    title: "Practical and Easy to Follow",
    rating: 5,
    text: "Skillfyme's MLOps training was very practical and easy to follow. I learned ML pipelines, Docker, Kubernetes, and deployment with hands-on projects that boosted my confidence at work. Highly recommend!",
    author: "Neetesh Pal",
    initials: "NP",
    link: "https://g.co/kgs/tFw6AAE",
  },
  {
    title: "Great Learning Experience",
    rating: 5,
    text: "Great learning experience with Skillfyme's MLOps training! The content was clear, practical, and well-structured. The trainer explained concepts like CI/CD and Docker very effectively. Highly recommended for upskilling in MLOps.",
    author: "Kunal Kumar",
    initials: "KK",
    link: "https://g.co/kgs/tFw6AAE",
  },
  {
    title: "Good Experience with Staff & Training",
    rating: 5,
    text: "I have good experience from both side admin staff to manage training as well as from trainer also. Teaching approach, interactive sessions, and latest updated materials were excellent. Admin staff were equally appreciable.",
    author: "Satya Tiwari",
    initials: "ST",
    link: "https://g.co/kgs/tFw6AAE",
  },
];

const ytReviews = [
    {
    name: "Nishant Gowda",
    designation: "Sr.DevSecOps Engineer",
    initials: "NG",
    videoLink: "https://youtu.be/R6AVw7CJ7JY",
    text: "Nishant highlights how the course structure made even complex topics easy to grasp, the instructor's clear teaching from scratch, and the instant doubt resolution that kept his learning smooth.",
  },
  {
    name: "Chandrasekhar",
    designation: "Platform Engineer",
    initials: "CS",
    videoLink: "https://youtu.be/ti1sz6RrOY0",
    text: "ChandraSekhar shares how Skillfyme's MLOps with Agentic AI program helped him master new workflows, simplify daily tasks, clear doubts instantly, and gain real-world project experience.",
  },
  {
    name: "Sachin",
    designation: "DevOps-SOC Engineer",
    initials: "SP",
    videoLink: "https://youtu.be/bQFseAEjQw0",
    text: "Sachin shares how the MLOps with Agentic AI Master Course helped him build real-world project experience, strengthen MLOps knowledge from scratch, and reinforce concepts with class assignments.",
  },
];

const GenAICourseReview = () => {
  const [activeTab, setActiveTab] = useState("google");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="px-5 py-[60px] max-w-[1200px] w-full mx-auto rounded-xl flex justify-center items-center bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e3f2fd]">

      <div className={`w-full max-w-[1200px] transition-all duration-700 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        {/* Heading */}
        <h2 className="relative text-center text-[#1a365d] text-[2.5rem] font-bold mb-6 mt-[-1rem] pb-2
          after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[100px] after:h-[4px] after:rounded after:bg-gradient-to-r after:from-[#2196f3] after:to-[#64b5f6]
          max-[480px]:text-[1.8rem] max-[480px]:font-black max-[480px]:mt-4 max-[480px]:px-1 max-[480px]:w-[98%] max-[480px]:mx-auto">
          What Our Learners Has To Say
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-5 mb-10 max-md:flex-col max-md:items-center">
          
          {/* Google */}
          <button
            onClick={() => setActiveTab("google")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow
              ${activeTab === "google"
                ? "bg-gradient-to-br from-[#00bbff] to-[#1a365d] text-white shadow-lg"
                : "bg-white/70 text-[#555] backdrop-blur-md hover:-translate-y-1 hover:shadow-lg"
              }`}
          >
            <GoogleIcon />
            Google Reviews
          </button>

          {/* Youtube */}
          <button
            onClick={() => setActiveTab("youtube")}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow
              ${activeTab === "youtube"
                ? "bg-gradient-to-br from-[#00bbff] to-[#1a365d] text-white shadow-lg"
                : "bg-white/70 text-[#555] backdrop-blur-md hover:-translate-y-1 hover:shadow-lg"
              }`}
          >
            <YoutubeIcon />
            Video Testimonials
          </button>

        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] max-md:grid-cols-1">

          {/* GOOGLE */}
          {activeTab === "google" &&
            googleReviews.map((review, index) => (
              <div key={index}
                className="relative flex flex-col p-8 rounded-[20px] bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                border-t-[5px] border-[#4285f4] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-5">
                  <h3 className="text-[#1a365d] font-bold text-[1rem] mb-2 text-left">
                    {review.title}
                  </h3>

                  <div className="text-[#ffb400] text-[1.2rem] tracking-[2px] mt[1rem]">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>

                <p className="text-[#444] leading-6 mb-5 flex-grow">
                  {review.text}
                </p>

                <div className="h-[2px] my-4 bg-gradient-to-r from-transparent via-[#add8e6] to-transparent"></div>

                <div className="flex justify-between items-center max-md:gap-4">
                  <span className="font-semibold text-[#1a365d]">
                    {review.author}
                  </span>

                  <a href={review.link} target="_blank"
                    className="flex items-center gap-2 text-[0.8rem] font-semibold text-[#4285f4] hover:text-[#1a365d]">
                    <GoogleIcon />
                    Read on Google
                  </a>
                </div>

              </div>
            ))}

          {/* YOUTUBE */}
          {activeTab === "youtube" &&
            ytReviews.map((review, index) => (
              <div key={index}
                className="relative flex flex-col p-8 rounded-[20px] bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                border-t-[5px] border-[#ff0000] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br from-[#00bbff] to-[#1a365d]">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{review.name}</h3>
                    <div className="text-[0.9rem] text-[#666]">
                      {review.designation}
                    </div>
                  </div>
                </div>

                <p className="text-[#444] leading-6 mb-5 flex-grow">
                  {review.text}
                </p>

                <a href={review.videoLink} target="_blank"
                  className="flex items-center gap-2 text-[0.8rem] font-semibold text-[#ff0000] hover:text-[#cc0000]">
                  <Play />
                  Watch Testimonial
                </a>

                <div className="absolute top-4 right-4 opacity-20 hover:opacity-80 transition">
                  <YoutubeIcon />
                </div>

              </div>
            ))}

        </div>

      </div>
    </div>
  );
};

export default GenAICourseReview;