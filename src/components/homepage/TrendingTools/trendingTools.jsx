"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TrendingTools = () => {
  const router = useRouter();

  const categories = [
    {
      imgSrc: "/devopsiconHP-3460c705.webp",
      title: "DevOps",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/terraformHPicon.webp",
      title: "Terraform",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/dockerhomepage.webp",
      title: "Docker",
      route: "/courses/devops-with-ai-masters-program",
    },
    {
      imgSrc: "/ds&mliconHP.webp",
      title: "Data Science",
      route: "/courses/mlops-masters",
    },
    {
      imgSrc: "/machinelearninghomepage.webp",
      title: "Machine Learning",
      route: "/courses/mlops-masters-program",
    },
    {
      imgSrc: "/aihomepage.webp",
      title: "Artificial Intelligence",
      route: "/courses/mlops-masters-program",
    },
  ];

  const handleCategoryClick = (route) => {
    router.push(route);
  };

  return (
    <section className="max-w-[1200px] mx-auto w-[90%] px-5 py-5 text-center mt-[-1rem]">
      {/* Heading */}
      <h2
        className="relative text-center mb-[2.2rem] text-[2.2rem] font-bold bg-gradient-to-br from-[#00e6ff] to-[#2e2e99] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] 
      after:content-[''] after:absolute after:bottom-0 after:left-[48%] after:w-[80px] after:h-[4px] after:bg-gradient-to-br after:from-[#00e6ff] after:to-[#2e2e99] after:rounded after:transition-all"
      >
         <em style={{ fontStyle: "italic"}}>
             Discover Top Categories
         </em>
      </h2>
  

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.route)}
            className="bg-white p-5 rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 text-center cursor-pointer"
          >
            <Image
              src={category.imgSrc}
              alt={category.title}
              width={80}
              height={80}
              className="object-contain mb-[10px] mx-auto"
            />
            <p className="text-[1rem] font-bold text-[#333] whitespace-nowrap">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTools;
