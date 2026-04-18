import React from "react";

const Stats = ({ statsData, variant }) => {
  return (
    <div
      className={`flex flex-wrap justify-center items-stretch gap-6 p-4 max-w-[1200px] mx-auto mb-8 relative z-[10] border-[3px] border-[#d0e5ff] rounded-[24px] shadow-[0_15px_35px_rgba(30,100,200,0.1),0_5px_15px_rgba(0,100,200,0.07)] ${
        variant === "genai"
          ? "bg-[linear-gradient(135deg,#e6f7ff_0%,#f0f9ff_51%,#e3f2fd_100%)] mt-[-3rem] p-[25px] shadow-[0_6px_18px_rgba(0,0,0,0.12)] rounded-[16px]"
          : "bg-white mt-[-2rem]"
      }`}
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-center p-4 min-w-[200px] flex-1 rounded-[20px] border border-[#c5e1ff] transition-all duration-300 relative overflow-hidden ${
            variant === "genai"
              ? "bg-white border-[#dce9f5] rounded-[12px] px-[20px] py-[15px] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
              : "bg-[linear-gradient(135deg,#e6f2ff_0%,#d9ebff_100%)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,136,229,0.2)] hover:bg-[linear-gradient(135deg,#d9ebff_0%,#cce5ff_100%)]"
          }`}
        >
          {/* Top Border Animation */}
          {variant !== "genai" && (
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#1e88e5] to-[#1565c0] opacity-0 group-hover:opacity-100 transition" />
          )}

          {/* Icon */}
          {variant !== "genai" && (
            <div className="mb-5 hidden">
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-gradient-to-br from-[#42a5f5] to-[#1976d2] text-white text-[1.8rem] font-bold shadow-lg">
                {stat.value.match(/\d+/)?.[0]?.[0] || "★"}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col justify-center">
            <div
              className={`font-extrabold mb-3 leading-tight tracking-tight ${
                variant === "genai"
                  ? "text-[1.8rem] text-[#007acc]"
                  : "text-[1.5rem] text-[#f60]"
              }`}
            >
              {stat.value}
            </div>

            <div
              className={`font-semibold leading-[1.5] ${
                variant === "genai"
                  ? "text-[0.95rem] text-[#444] mt-[6px]"
                  : "text-[1rem] text-[#504d4d] max-w-[180px]"
              }`}
            >
              {stat.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;