// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";

// // const genaiSalaryData = [
// //   { role: "ML Engineer", min: 3.48, avg: 19, max: 30, companies: [comp1] },
// //   { role: "Generative AI Engineer", min: 4.5, avg: 13, max: 45, companies: [comp2] },
// //   { role: "AI Application Developer", min: 4, avg: 14, max: 35, companies: [comp3] },
// //   { role: "Agentic AI Engineer", min: 6, avg: 20, max: 40, companies: [comp4] },
// //   { role: "AI Solutions Architect", min: 10, avg: 32, max: 60, companies: [comp5] },
// //   { role: "AI Innovation Lead", min: 12, avg: 40, max: 80, companies: [comp6] },
// // ];

// const genaiSalaryData = [
//   {
//     role: "ML Engineer",
//     min: 3.48,
//     avg: 19,
//     max: 30,
//    // companies: ["/compslot1.png"],

//   },
//   {
//     role: "Generative AI Engineer",
//     min: 4.5,
//     avg: 13,
//     max: 45,
//     // companies: ["/compslot2.png"],
//   },
//   {
//     role: "AI Application Developer",
//     min: 4,
//     avg: 14,
//     max: 35,

//   },
//   {
//     role: "Agentic AI Engineer",
//     min: 6,
//     avg: 20,
//     max: 40,
//     // companies: ["/compslot4.png"],
//   },
//   {
//     role: "AI Solutions Architect",
//     min: 10,
//     avg: 32,
//     max: 60,
//     // companies: ["/compslot5.png"],
//   },
//   {
//     role: "AI Innovation Lead",
//     min: 12,
//     avg: 40,
//     max: 80,
//     // companies: ["/compslot6.png"],
//   },
// ];

// const GenaiCareerOptions = () => {
//   const [activeRole, setActiveRole] = useState("ML Engineer");
//   const [barAnimation, setBarAnimation] = useState(false);

//   const roleData = genaiSalaryData.find((d) => d.role === activeRole);

//   useEffect(() => {
//     setBarAnimation(false);
//     const timer = setTimeout(() => setBarAnimation(true), 300);
//     return () => clearTimeout(timer);
//   }, [activeRole]);

//   return (
//     <div className="w-full flex justify-center px-4 py-10">
//       <div className="max-w-7xl w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl p-6 md:p-10 relative overflow-hidden">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
//             What Can{" "}
//             <span className="bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
//               I Become?
//             </span>
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Explore high-demand roles and their compensation in the generative AI industry
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex overflow-x-auto gap-3 mb-8 pb-2">
//           {genaiSalaryData.map((d) => (
//             <button
//               key={d.role}
//               onClick={() => setActiveRole(d.role)}
//               className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
//                 activeRole === d.role
//                   ? "bg-blue-600 text-white shadow-md"
//                   : "bg-white border border-blue-200 text-blue-700"
//               }`}
//             >
//               {d.role}
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="grid md:grid-cols-2 gap-6">

//           {/* LEFT */}
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-xl font-bold text-blue-900 mb-1">
//               {activeRole} Salary Insights
//             </h3>
//             <p className="text-gray-500 text-sm mb-6">
//               Annual compensation in India (LPA)
//             </p>

//             <div className="flex justify-between text-center">
//               <div>
//                 <p className="text-gray-500 text-sm">Minimum</p>
//                 <p className="text-green-600 font-bold text-lg">
//                   ₹{roleData.min}L
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500 text-sm">Average</p>
//                 <p className="text-blue-600 font-bold text-lg">
//                   ₹{roleData.avg}L
//                 </p>
//               </div>

//               <div>
//                 <p className="text-gray-500 text-sm">Maximum</p>
//                 <p className="text-purple-600 font-bold text-lg">
//                   ₹{roleData.max}L+
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT CHART */}
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-xl font-bold text-blue-900 mb-4">
//               Salary Comparison
//             </h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={[roleData]}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="role" tick={false} />
//                 <YAxis />
//                 <Tooltip formatter={(v) => `₹${v}L`} />

//                 <Bar dataKey="min" fill="#22c55e" isAnimationActive={barAnimation} />
//                 <Bar dataKey="avg" fill="#3b82f6" isAnimationActive={barAnimation} />
//                 <Bar dataKey="max" fill="#a855f7" isAnimationActive={barAnimation} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="mt-12">
//   <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">
//     Top Companies Hiring
//   </h2>

//   <img
//     src="/compslot1.png"
//     alt="company"
//     className="w-full h-auto object-contain"
//   />

// </div>

//         </div>
//     </div>
//   );
// };

// export default GenaiCareerOptions;

"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const genaiSalaryData = [
  { role: "ML Engineer", min: 3.48, avg: 19, max: 30 },
  { role: "Generative AI Engineer", min: 4.5, avg: 13, max: 45 },
  { role: "AI Application Developer", min: 4, avg: 14, max: 35 },
  { role: "Agentic AI Engineer", min: 6, avg: 20, max: 40 },
  { role: "AI Solutions Architect", min: 10, avg: 32, max: 60 },
  { role: "AI Innovation Lead", min: 12, avg: 40, max: 80 },
];

const GenaiCareerOptions = () => {
  const [activeRole, setActiveRole] = useState("ML Engineer");
  const [animate, setAnimate] = useState(false);
  const [barAnimation, setBarAnimation] = useState(false);

  const roleData = genaiSalaryData.find((d) => d.role === activeRole);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setBarAnimation(true), 300);
    return () => clearTimeout(timer);
  }, [activeRole]);

  return (
    <div className="p-4 perspective-[1000px]">
      <div
        className={`max-w-[1200px] w-full mx-auto my-8 p-10 rounded-[24px] relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-700 ${
          animate
            ? "opacity-100 translate-y-0 rotate-x-0"
            : "opacity-0 translate-y-5 rotate-x-[5deg]"
        }`}
        style={{
          background: "linear-gradient(135deg, #e6f7ff, #f0f9ff 51%, #e3f2fd)",
        }}
      >
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-[200px] h-[200px] rounded-full opacity-10 top-[-50px] left-[-50px] bg-gradient-to-br from-[#0bf] to-[#1a365d] animate-[float_15s_infinite]" />
          <div className="absolute w-[150px] h-[150px] rounded-full opacity-10 bottom-[-30px] right-[10%] bg-gradient-to-br from-[#0bf] to-[#1a365d] animate-[float_15s_infinite_-5s]" />
          <div className="absolute w-[100px] h-[100px] rounded-full opacity-10 top-[40%] right-[-30px] bg-gradient-to-br from-[#0bf] to-[#1a365d] animate-[float_15s_infinite_-10s]" />
        </div>

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-[2.8rem] font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
            What Can{" "}
            <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
              I Become?
            </span>
          </h2>
          <p className="text-[#37474f] max-w-[600px] mx-auto leading-relaxed">
            Explore high-demand roles and their compensation in the generative
            AI industry
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 overflow-x-auto pb-2 relative z-10">
          <div className="flex gap-3 p-2 min-w-full w-max bg-white/70 backdrop-blur-md rounded-2xl shadow-md border border-white/50">
            {genaiSalaryData.map((d) => (
              <button
                key={d.role}
                onClick={() => {
                  setAnimate(false);
                  setBarAnimation(false);
                  setActiveRole(d.role);
                }}
                className={`relative px-6 py-4 text-sm font-semibold rounded-xl whitespace-nowrap transition-all duration-300 ${
                  activeRole === d.role
                    ? "text-white bg-gradient-to-br from-[#0bf] to-[#1a365d] shadow-lg"
                    : "text-gray-500 hover:text-white hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {d.role}
                {activeRole === d.role && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-gradient-to-br from-[#0bf] to-[#1a365d] rounded animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-wrap gap-8 relative z-10">
          {/* Left */}
          <div className="flex-1 min-w-[280px] flex flex-col gap-8">
            <div className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/60 shadow-md hover:-translate-y-1 transition-all">
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                  {activeRole} Salary Insights
                </h3>
                <p className="text-gray-500 mb-6">
                  Annual compensation in India (Lakhs per annum)
                </p>

                <div className="flex flex-col gap-5">
                  {[
                    { label: "Minimum", value: roleData.min, color: "green" },
                    { label: "Average", value: roleData.avg, color: "blue" },
                    { label: "Maximum", value: roleData.max, color: "purple" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm hover:translate-x-1 transition"
                    >
                      <div className="font-semibold text-gray-700">
                        {item.label}
                      </div>
                      <div
                        className={`font-extrabold px-4 py-1 rounded-lg ${
                          item.color === "green"
                            ? "bg-green-100 text-green-800"
                            : item.color === "blue"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        ₹{item.value}L{item.label === "Maximum" && "+"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Chart */}
          <div className="flex-[1.5] min-w-[320px]">
            <div className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/60 shadow-md hover:-translate-y-1 transition">
              <div className="p-8">
                <h3 className="text-center text-lg font-bold text-[#1a365d] mb-6">
                  Salary Comparison
                </h3>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[roleData]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="role" tick={false} />
                    <YAxis />
                    <Tooltip formatter={(v) => [`₹${v}L`, "Salary"]} />

                    <Bar
                      dataKey="min"
                      barSize={60}
                      isAnimationActive={barAnimation}
                    >
                      <Cell fill="#4CAF50" />
                    </Bar>
                    <Bar
                      dataKey="avg"
                      barSize={60}
                      isAnimationActive={barAnimation}
                    >
                      <Cell fill="#2196F3" />
                    </Bar>
                    <Bar
                      dataKey="max"
                      barSize={60}
                      isAnimationActive={barAnimation}
                    >
                      <Cell fill="#9C27B0" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Companies */}

        <div className="text-center mb-1 relative z-10">
          <h2 className="text-[2.8rem] font-extrabold mb-4 bg-gradient-to-br from-[#0bf] to-[#1a365d] text-transparent bg-clip-text relative inline-block">
            Top Companies{" "}
            <span className="bg-gradient-to-br from-[#2196f3] to-[#0d47a1] text-transparent bg-clip-text">
              Hiring
            </span>
          </h2>
        </div>

        <div className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/60 shadow-md hover:-translate-y-1 transition">
          <div className="p-8">
            <div className="flex justify-center w-full">
              <img
                src="/compslot1.png"
                alt="company"
                className="w-full h-auto object-contain transition hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenaiCareerOptions;
