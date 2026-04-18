"use client";

import SectionHeading from "@/components/common/sectionheading/sectionheading";
import React, { useState, useEffect, useRef } from "react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#FF0000" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 20 20" width="14" height="14" fill={filled ? "#FBBF24" : "#E5E7EB"}>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 32 24" width="32" height="24" fill="none">
    <path d="M0 24V14.4C0 10.56 0.96 7.36 2.88 4.8 4.88 2.16 7.84 0.64 11.76 0.24L12.96 2.64C10.48 3.12 8.56 4.16 7.2 5.76 5.92 7.28 5.28 9.04 5.28 11.04H9.6V24H0ZM19.04 24V14.4C19.04 10.56 20 7.36 21.92 4.8 23.92 2.16 26.88 0.64 30.8 0.24L32 2.64C29.52 3.12 27.6 4.16 26.24 5.76 24.96 7.28 24.32 9.04 24.32 11.04H28.64V24H19.04Z" fill="currentColor" opacity="0.12"/>
  </svg>
);

// const googleReviews = [
//   {
//     title: "Good Experience with Staff & Training",
//     rating: 5,
//     text: "I have good experience from both side, admin staff to manage training as well as from the trainer also.",
//     author: "Satya Tiwari",
//     initials: "ST",
//     link: "https://g.co/kgs/tFw6AAE",
//   },
//   {
//     title: "Great Learning Platform",
//     rating: 5,
//     text: "Skillfyme is a really great platform to learn new things in tech.",
//     author: "Arnav Dave",
//     initials: "AD",
//     link: "https://g.co/kgs/tFw6AAE",
//   },
//   {
//     title: "Industry-Standard Training",
//     rating: 5,
//     text: "One of the best training sessions matching industry standards.",
//     author: "Vineet Vijay",
//     initials: "VV",
//     link: "https://g.co/kgs/tFw6AAE",
//   },
//   {
//     title: "Excellent Training",
//     rating: 5,
//     text: "Great hands-on projects and trainers are very supportive.",
//     author: "Vaisu Thilagar",
//     initials: "VT",
//     link: "https://g.co/kgs/tFw6AAE",
//   },
// ];


const googleReviews = [
  {
    
    title: "Good Experience with Staff & Training",
    rating: 5,
    text: "I have good experience from both side, admin staff to manage training as well as from the trainer also.",
    author: "Satya Tiwari",
    initials: "ST",
    link: "https://g.co/kgs/tFw6AAE",
  },
  {
    title: "Great Learning Platform",
    rating: 5,
    text: "Skillfyme is a really great platform to learn new things in tech.",
    author: "Arnav Dave",
    initials: "AD",
    link: "https://g.co/kgs/tFw6AAE",
  },
  {
    title: "Industry-Standard Training",
    rating: 5,
    text: "One of the best training sessions matching industry standards.",
    author: "Vineet Vijay",
    initials: "VV",
    link: "https://g.co/kgs/tFw6AAE",
  },
  {
    title: "Excellent Training",
    rating: 5,
    text: "Great hands-on projects and trainers are very supportive.",
    author: "Vaisu Thilagar",
    initials: "VT",
    link: "https://g.co/kgs/tFw6AAE",
  },

 
  {
    title: "Excellent Learning Experience",
    rating: 5,
    text: "I recently enrolled in the DevOps with AI course at Skillfyme, and my learning experience so far has been excellent...",
    initials: "PM",
    link: "https://g.co/kgs/tFw6AAE",
  },

  
  {
    title: "Highly Supportive & Practical Program",
    rating: 5,
    text: "I’ve been enrolled in the DevOps with AI Master Program at Skillfyme, and it has truly....",
    author: "Sangeetha S Menon",
    initials: "SM",
    link: "https://g.co/kgs/tFw6AAE",
  },
];


const ytReviews = [
  {
    name: "Surya M",
    img: "/Surya.png",
    designation: "DevOps Engineer",
    videoLink: "https://youtu.be/ZHtFXdFChSo?si=bYYeXG7rJyre7nCn",
    text: "Watch what our learner has to say about his journey.",
    initials: "SM",
  },
  {
    name: "Md. Younis Khan",
    img: "/learnertestiimage1.svg",
    designation: "AWS Cloud Architect",
    videoLink: "https://youtu.be/NguoXhguXBM",
    text: "Watch what our learner has to say about his journey.",
    initials: "MK",
  },
  {
    name: "Riju Roy",
    img: "/Riju.svg",
    designation: "DevOps Engineer",
    videoLink: "https://youtu.be/j-xu6T0flSg",
    text: "Riju shares how this program helped him transition.",
    initials: "RR",
  },
//   {
//     name: "Prosper Ibe",
//     img: "/Prosper.svg",
//     designation: "Software Engineer",
//     videoLink: "https://youtu.be/NguoXhguXBM",
//     text: "Prosper talks about the practical experience gained.",
//     initials: "PI",
//   },
];

const avatarColors = [
  "from-sky-400 to-blue-600",
  "from-blue-500 to-indigo-700",
  "from-cyan-400 to-sky-600",
  "from-indigo-400 to-blue-800",
];

const GoogleCard = ({ review, index, visible }) => (
  <div
    className="relative bg-white rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 overflow-hidden"
    style={{
      boxShadow: "0 4px 32px 0 rgba(30,80,180,0.07), 0 1.5px 6px 0 rgba(30,80,180,0.04)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.5s ease ${index * 90}ms, transform 0.5s ease ${index * 90}ms`,
    }}
  >
    {/* Subtle top accent line */}
    <div className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 opacity-70" />

    {/* Quote + stars */}
    <div className="flex items-start justify-between">
      <div className="text-blue-200 mt-1">
        <QuoteIcon />
      </div>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>
    </div>

    {/* Title */}
    <h3 className="font-semibold text-slate-800 text-[15px] leading-snug -mt-1">
      {review.title}
    </h3>

    {/* Review text */}
    <p className="text-slate-500 text-[13.5px] leading-relaxed flex-1">
      {review.text}
    </p>

    {/* Footer */}
    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
      <div className="flex items-center gap-2.5">
        <div
          className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-[11px] font-bold tracking-wide`}
        >
          {review.initials}
        </div>
        <span className="text-slate-700 text-sm font-medium">{review.author}</span>
      </div>
      <a
        href={review.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[12px] text-blue-500 font-medium hover:text-blue-700 transition-colors group"
      >
        <GoogleIcon />
        <span className="group-hover:underline underline-offset-2">Read More</span>
      </a>
    </div>
  </div>
);

const YouTubeCard = ({ review, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col"
      style={{
        boxShadow: "0 4px 32px 0 rgba(30,80,180,0.07), 0 1.5px 6px 0 rgba(30,80,180,0.04)",
        opacity: 1,
        transform: "translateY(0)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail area */}
      <a
        href={review.videoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Gradient bg as thumbnail placeholder */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${avatarColors[index % avatarColors.length]} opacity-90`}
        />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />

        {/* Avatar centered */}
   <div className="absolute inset-0 p-3 flex items-center justify-center">
  <img
    src={review.img}
    alt={review.name}
    className="max-h-full max-w-full object-contain rounded-xl"
  />
</div>
        {/* Play button overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0, background: "rgba(0,0,0,0.25)" }}
        >
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg pl-0.5">
            <PlayIcon />
          </div>
        </div>

        {/* YouTube badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 rounded-md px-2 py-1 flex items-center gap-1.5">
          <YoutubeIcon />
          <span className="text-white text-[11px] font-medium">Watch</span>
        </div>
      </a>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-slate-800 font-semibold text-[15px]">{review.name}</h3>
          <span className="text-[12px] font-medium text-blue-500 tracking-wide uppercase">{review.designation}</span>
        </div>
        <p className="text-slate-500 text-[13.5px] leading-relaxed flex-1">{review.text}</p>
        <a
          href={review.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] text-red-500 font-semibold hover:text-red-600 transition-colors group mt-auto pt-2 border-t border-slate-100"
        >
          <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center pl-0.5">
            <svg viewBox="0 0 12 12" width="10" height="10" fill="white"><path d="M3 2v8l6-4z"/></svg>
          </span>
          Watch Testimonial
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" className="ml-auto group-hover:translate-x-0.5 transition-transform">
            <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const DotNav = ({ total, current, onClick }) => (
  <div className="flex items-center justify-center gap-2 mt-6">
    {[...Array(total)].map((_, i) => (
      <button
        key={i}
        onClick={() => onClick(i)}
        className="transition-all duration-300 rounded-full focus:outline-none"
        style={{
          width: i === current ? 24 : 8,
          height: 8,
          background: i === current
            ? "linear-gradient(90deg, #38bdf8, #1d4ed8)"
            : "#CBD5E1",
        }}
        aria-label={`Go to page ${i + 1}`}
      />
    ))}
  </div>
);

export default function DevOpsVideoTestimonials() {
  const [activeTab, setActiveTab] = useState("google");
  const [pageIndex, setPageIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const perPage = 3;
  const totalPages = Math.ceil(googleReviews.length / perPage);
  const timerRef = useRef(null);
   const devopscompanies= "https://cdn.jsdelivr.net/gh/tanyasawarn/Website-Repo/devopscomp.png";

  const changePage = (next) => {
    setVisible(false);
    setTimeout(() => {
      setPageIndex(next);
      setVisible(true);
    }, 350);
  };

  useEffect(() => {
    if (activeTab !== "google") return;
    timerRef.current = setInterval(() => {
      changePage((pageIndex + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [activeTab, pageIndex]);

  const currentReviews = googleReviews.slice(pageIndex * perPage, pageIndex * perPage + perPage);

  return (
    <>
    <section className="relative w-full max-w-[1160px] mx-auto px-4 py-16 select-none">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-100 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl" />

      {/* Header */}
      <div className="relative text-center mb-12">
        <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-sky-500 mb-2">
          Success Stories
        </p>
        <SectionHeading title="What Our Learners Has To Say" />
        <p className="mt-3 text-slate-500 text-[15px] max-w-xl mx-auto leading-relaxed">
          Real feedback from real people who transformed their careers with Skillfyme.
        </p>

        {/* Divider line */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-300" />
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-300" />
        </div>
      </div>

      {/* Tab switcher */}
      <div className="flex justify-center mb-10">
        <div className="relative flex bg-slate-100 rounded-full p-1 gap-1">
          {/* Sliding indicator */}
          <div
            className="absolute top-1 bottom-1 rounded-full bg-white shadow-md transition-all duration-300"
            style={{
              width: "calc(50% - 4px)",
              left: activeTab === "google" ? 4 : "calc(50%)",
            }}
          />
          {[
            { key: "google", label: "Google Reviews", Icon: GoogleIcon },
            { key: "youtube", label: "Video Stories", Icon: YoutubeIcon },
          ].map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setPageIndex(0);
                setVisible(true);
              }}
              className="relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
              style={{
                color: activeTab === key ? "#1e40af" : "#64748b",
              }}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {activeTab === "google"
          ? currentReviews.map((review, i) => (
              <GoogleCard key={review.author} review={review} index={i} visible={visible} />
            ))
          : ytReviews.map((review, i) => (
              <YouTubeCard key={review.name} review={review} index={i} />
            ))}
      </div>

      {/* Dot nav for Google reviews */}
      {activeTab === "google" && totalPages > 1 && (
        <DotNav
          total={totalPages}
          current={pageIndex}
          onClick={(i) => {
            clearInterval(timerRef.current);
            changePage(i);
          }}
        />
      )}

      {/* Bottom badge */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://g.co/kgs/tFw6AAE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow"
        >
          <GoogleIcon />
          <span className="text-slate-600 text-[13px] font-medium">Rated 4.8 on Google</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
          </div>
        </a>
      </div>
    </section>
    <div className="devops-companies-alumni-container-image">
        <SectionHeading title="Our DevOps Alumni Works At" />
        <img src={devopscompanies} alt="companies hiring for devops" 
        className="w-[1200px] max-w-full mx-auto"
        />
      </div>
      </>

  );
}