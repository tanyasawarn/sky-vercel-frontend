// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";
// import Fees from "@/components/common/CourseFees/coursefees";
// import config from "../../components/config";
// import { getCashfree } from "@/utils/utils";
// import { UserContext } from "@/context/usercontext";


// const Payment = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const courseSlug = searchParams.get("course");

//   const { userCountry } = useContext(UserContext);

//   const [totalPrice, setTotalPrice] = useState(1);
//   const [currency, setCurrency] = useState("");
//   const [beforeTaxPrice, setBeforeTaxPrice] = useState(0);
//   const [taxPercentage] = useState(18);
//   const [discountApplied, setDiscountApplied] = useState(false);
//   const [couponCode, setCouponCode] = useState("");
//   const [grandTotalPrice, setGrandTotalPrice] = useState(1);
//   const [gstPrice, setGstPrice] = useState(0);
//   const [errorMessage, setErrorMessage] = useState("");

//   const email = searchParams.get("email");
//   const phoneNumber = searchParams.get("phone");

//   const handleBackClick = () => {
//     router.push("/");
//   };

//   const handlePriceUpdate = (price, currency) => {
//     const cleanedPrice = parseFloat(String(price).replace(/,/g, ""));
//     setTotalPrice(cleanedPrice);
//     setCurrency(currency);
//   };

//   const applyCoupon = () => {
//     setErrorMessage("");

//     if (couponCode === "SKILLFY50") {
//       const price = 30000;
//       updatePrice(price);
//     } else if (couponCode === "SKILLFYME10") {
//       const price = 38000;
//       updatePrice(price);
//     } else if (couponCode === "NEWYEAR") {
//       const price = 40000;
//       updatePrice(price);
//     } else if (couponCode === "SKILLFYME35") {
//       const price = 35000;
//       updatePrice(price);
//     } else if (couponCode === "DOUBLEDISCOUNTDEAL") {
//       if (userCountry !== "IN") {
//         setGrandTotalPrice(325);
//         setBeforeTaxPrice(325);
//         setGstPrice(0);
//         setCurrency("USD");
//         setDiscountApplied(true);
//       } else {
//         setErrorMessage("This coupon is only for international learners.");
//         removeCoupon();
//       }
//     } else {
//       setErrorMessage("Invalid coupon code.");
//       removeCoupon();
//     }
//   };

//   const updatePrice = (price) => {
//     setGrandTotalPrice(price);
//     const beforeTax = price / 1.18;
//     setBeforeTaxPrice(beforeTax);
//     setGstPrice(price - beforeTax);
//     setDiscountApplied(true);
//   };

//   const removeCoupon = () => {
//     setDiscountApplied(false);
//     setErrorMessage("");

//     if (userCountry !== "IN") {
//       setTotalPrice(650);
//       setGrandTotalPrice(650);
//       setBeforeTaxPrice(650);
//       setGstPrice(0);
//       setCurrency("USD");
//     } else {
//       setGrandTotalPrice(totalPrice);
//       const dp = totalPrice / 1.18;
//       setBeforeTaxPrice(dp);
//       setGstPrice(totalPrice - dp);
//     }
//   };

//   const handleCouponInputChange = (e) => {
//     const value = e.target.value.toUpperCase();
//     setCouponCode(value);
//     setErrorMessage("");

//     if (!value) removeCoupon();
//   };

//   useEffect(() => {
//     if (userCountry && userCountry !== "IN") {
//       setTotalPrice(800);
//       setCurrency("USD");
//       setBeforeTaxPrice(800);
//       setGstPrice(0);
//       setGrandTotalPrice(800);
//     }
//   }, [userCountry]);

//   useEffect(() => {
//     if (userCountry === "IN" && totalPrice > 1) {
//       const dp = totalPrice / 1.18;
//       setBeforeTaxPrice(dp);
//       setGstPrice(totalPrice - dp);
//       setGrandTotalPrice(totalPrice);
//     }
//   }, [totalPrice, userCountry]);

//   // Cashfree
//   const loadCashfree = () => {
//     return new Promise((resolve, reject) => {
//       if (window.Cashfree) return resolve();

//       const script = document.createElement("script");
//       script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//       script.onload = resolve;
//       script.onerror = reject;
//       document.body.appendChild(script);
//     });
//   };

//   const initiateCashfreePayment = async () => {
//     await loadCashfree();

//     const cashfree = getCashfree();

//     const res = await axios.post(config.backendUrl + "users/create-order", {
//       orderAmount: grandTotalPrice,
//       orderCurrency: currency,
//       email,
//       phoneNumber,
//     });

//     if (res.data.success) {
//       cashfree.checkout({
//         paymentSessionId: res.data.data.payment_session_id,
//         redirectTarget: "_modal",
//       });
//     }
//   };

//   return (
//     <>
    

//       <div className="flex flex-col mb-16 justify-between py-24">
//         <div>
//           <div className="w-full max-w-[500px] mx-auto bg-[#f7f7f7] p-[10px] rounded-lg shadow-md mt-16">
            
//             <div className="bg-[#3498db] p-[1px] rounded-t-lg text-white">
//               <h2 className="text-center text-[18px] m-8">CART SUMMARY</h2>
//             </div>

//             <div className="flex flex-col bg-white p-[10px] rounded-lg mt-[0.1rem] shadow-sm">
//               <div className="flex justify-between items-center max-md:flex-col max-md:items-start">

//                 <div className="flex-1 ml-5">
//                   <h3 className="mb-6 mt-1 text-[20px] text-[#333]">
//                     DevOps With AI Masters Course
//                   </h3>

//                   <p className="text-[#777] text-[12px]">
//                     Training type: <span className="font-bold text-[#333]">Live Instructor Led</span>
//                   </p>

//                   <p className="text-[#777] text-[12px]">
//                     Doubt Session: <span className="font-bold text-[#333]">24x7</span>
//                   </p>

//                   <p className="text-[#777] text-[12px]">
//                     Placement: <span className="font-bold text-[#333]">100% Interview Guarantee</span>
//                   </p>

//                   <p className="text-[#777] text-[12px]">
//                     Access Validity: <span className="font-bold text-[#333]">Lifetime</span>
//                   </p>

//                   <p className="text-[#777] text-[12px]">
//                     No. of learners: <span className="font-bold text-[#333]">1</span>
//                   </p>
//                 </div>

//                 <div className="text-right max-md:text-left mt-2">
//                   <h3 className="text-[18px] text-[#333]">
//                     {currency} {Number(totalPrice).toFixed(2)}
//                   </h3>
//                 </div>

//               </div>
//             </div>

//             {/* Coupon */}
//             <div className="flex justify-end gap-2 my-5 max-md:flex-col">
//               <input
//                 value={couponCode}
//                 onChange={handleCouponInputChange}
//                 placeholder="Coupon code"
//                 className="w-[34%] h-8 px-2 border rounded max-md:w-full"
//               />

//               <button
//                 onClick={applyCoupon}
//                 className="bg-[#3498db] text-white px-4 rounded hover:bg-[#0056b3]"
//               >
//                 APPLY
//               </button>
//             </div>

//             {errorMessage && (
//               <p className="text-red-500 text-sm">{errorMessage}</p>
//             )}

//             {/* Price */}
//             <div>
//               <p className="flex justify-between">
//                 <span>Total Price:</span>
//                 <span>{currency} {beforeTaxPrice.toFixed(2)}</span>
//               </p>

//               <p className="flex justify-between">
//                 <span>GST ({taxPercentage}%):</span>
//                 <span>{currency} {gstPrice.toFixed(2)}</span>
//               </p>

//               <p className="flex justify-between font-bold text-lg">
//                 <span>Grand Total:</span>
//                 <span>{currency} {grandTotalPrice.toFixed(2)}</span>
//               </p>
//             </div>

//             <div className="text-right mt-5">
//               <button
//                 onClick={initiateCashfreePayment}
//                 className="bg-[#ff6600] text-white px-6 py-2 rounded hover:bg-[#e67e00]"
//               >
//                 Pay Now
//               </button>
//             </div>

//             <div className="mt-5">
//               <button
//                 onClick={handleBackClick}
//                 className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
//               >
//                 Back
//               </button>
//             </div>

//           </div>

//           <Fees 
//             onPriceUpdate={handlePriceUpdate} 
//   showDetails={false} 
//   courseSlug={courseSlug}
//           />
//         </div>
//       </div>
 
//     </>
//   );
// };

// export default Payment;



"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Fees from "@/components/common/CourseFees/coursefees";
import config from "../../components/config";
import { getCashfree } from "@/utils/utils";
import { UserContext } from "@/context/usercontext";

const courseData = {

    "devops-with-ai-masters": {     
    title: "DevOps With AI",
  },

  "devops-with-ai-masters-program": {
    title: "DevOps With AI",
  },
  "genai-with-ml-masters-program": {
    title: "GenAI With ML Masters Program",
  },
  "mlops-masters-program": {
    title: "MLOps Masters Program",
  },
};

const Payment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course");
  console.log("courseSlug:", courseSlug);

  const { userCountry } = useContext(UserContext);

  const [totalPrice, setTotalPrice] = useState(1);
  const [currency, setCurrency] = useState("");
  const [beforeTaxPrice, setBeforeTaxPrice] = useState(0);
  const [taxPercentage] = useState(18);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [grandTotalPrice, setGrandTotalPrice] = useState(1);
  const [gstPrice, setGstPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  const email = searchParams.get("email");
  const phoneNumber = searchParams.get("phone");
  // const selectedCourse = courseData[courseSlug] || courseData["devops"];
  const selectedCourse =
  courseData[courseSlug] ||
  courseData["devops-with-ai-masters-program"];

  const handleBackClick = () => router.push("/");

  const handlePriceUpdate = (price, currency) => {
     console.log("handlePriceUpdate called:", price, currency); 
    const cleanedPrice = parseFloat(String(price).replace(/,/g, ""));
    setTotalPrice(cleanedPrice);
    setCurrency(currency);
  };

  const applyCoupon = () => {
    setErrorMessage("");
    setCouponSuccess("");

    if (couponCode === "SKILLFY50") {
      updatePrice(30000);
      setCouponSuccess("Coupon applied! You saved ₹15,000.");
    } else if (couponCode === "SKILLFYME10") {
      updatePrice(38000);
      setCouponSuccess("Coupon applied! You saved ₹7,000.");
    } else if (couponCode === "NEWYEAR") {
      updatePrice(40000);
      setCouponSuccess("Coupon applied! You saved ₹5,000.");
    } else if (couponCode === "SKILLFYME35") {
      updatePrice(35000);
      setCouponSuccess("Coupon applied! You saved ₹10,000.");
    } else if (couponCode === "DOUBLEDISCOUNTDEAL") {
      if (userCountry !== "IN") {
        setGrandTotalPrice(325);
        setBeforeTaxPrice(325);
        setGstPrice(0);
        setCurrency("USD");
        setDiscountApplied(true);
        setCouponSuccess("Coupon applied! You saved $325.");
      } else {
        setErrorMessage("This coupon is only for international learners.");
        removeCoupon();
      }
    } else {
      setErrorMessage("Invalid coupon code. Please try again.");
      removeCoupon();
    }
  };

  const updatePrice = (price) => {
    setGrandTotalPrice(price);
    const beforeTax = price / 1.18;
    setBeforeTaxPrice(beforeTax);
    setGstPrice(price - beforeTax);
    setDiscountApplied(true);
  };

  const removeCoupon = () => {
    setDiscountApplied(false);
    setCouponSuccess("");
    if (userCountry !== "IN") {
      setTotalPrice(650);
      setGrandTotalPrice(650);
      setBeforeTaxPrice(650);
      setGstPrice(0);
      setCurrency("USD");
    } else {
      setGrandTotalPrice(totalPrice);
      const dp = totalPrice / 1.18;
      setBeforeTaxPrice(dp);
      setGstPrice(totalPrice - dp);
    }
  };

  const handleCouponInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setCouponCode(value);
    setErrorMessage("");
    setCouponSuccess("");
    if (!value) removeCoupon();
  };

  useEffect(() => {
    if (userCountry && userCountry !== "IN") {
      setTotalPrice(800);
      setCurrency("USD");
      setBeforeTaxPrice(800);
      setGstPrice(0);
      setGrandTotalPrice(800);
    }
  }, [userCountry]);

  useEffect(() => {
    if (userCountry === "IN" && totalPrice > 1) {
      const dp = totalPrice / 1.18;
      setBeforeTaxPrice(dp);
      setGstPrice(totalPrice - dp);
      setGrandTotalPrice(totalPrice);
    }
  }, [totalPrice, userCountry]);

  const loadCashfree = () =>
    new Promise((resolve, reject) => {
      if (window.Cashfree) return resolve();
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });

  const initiateCashfreePayment = async () => {
      console.log("CLICKED PAY");
    await loadCashfree();
    const cashfree = getCashfree();
    // const res = await axios.post(config.backendUrl + "users/create-order", {
    //   orderAmount: grandTotalPrice,
    //   orderCurrency: currency,
    //   email,
    //   phoneNumber,
    // });
    //  console.log("API RESPONSE:", res.data);
    // if (res.data.success) {
    //   cashfree.checkout({
    //     paymentSessionId: res.data.data.payment_session_id,
    //     redirectTarget: "_modal",
    //   });


      try {
    const res = await axios.post(config.backendUrl + "users/create-order", {
      orderAmount: grandTotalPrice,
      orderCurrency: currency,
      email,
      phoneNumber,
    });

    console.log("API RESPONSE:", res.data);

    if (res.data.success) {
      cashfree.checkout({
        paymentSessionId: res.data.data.payment_session_id,
        redirectTarget: "_modal",
      });
    } else {
      console.error("Payment session failed");
    }
  } catch (err) {
    console.error("PAYMENT ERROR:", err);
    }
  };

  const features = [
    {label: "Live Instructor Led" },
    {label: "24×7 Doubt Support" },
    { label: "100% Interview Guarantee" },
    { label: "Lifetime Access" },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">

      {/* Decorative background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#3498db]/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff6600]/10 blur-3xl" />
      </div>

      <div className="w-full max-w-lg">

        {/* Back button */}
        <button
          onClick={handleBackClick}
          className="group flex items-center gap-2 text-sm text-[#3498db] font-medium mb-6 hover:gap-3 transition-all duration-200"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
          Back to Home
        </button>

        {/* Main card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header stripe */}
          <div className="relative bg-[#3498db] px-8 pt-8 pb-10">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 60%)",
              }}
            />
            <p className="text-[#bde3f7] text-xs font-semibold tracking-widest uppercase mb-1">Checkout</p>
            <h1 className="text-white text-2xl font-bold leading-tight">Order Summary</h1>
          </div>

          {/* Course card — overlaps header */}
          <div className="mx-6 -mt-5 bg-white rounded-2xl border border-[#e8f4fd] shadow-md p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block bg-[#e8f4fd] text-[#3498db] text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full mb-3">
                  Masters Course
                </span>
                <h2 className="text-[#1a2533] text-[17px] font-bold leading-snug">
                 {selectedCourse.title}
                </h2>
              
              </div>
              <div className="text-right shrink-0">
                <p className="text-[10px] text-[#9ca3af] uppercase tracking-wide">Price</p>
                <p className="text-[#1a2533] text-lg font-bold">
                  {currency} {Number(totalPrice).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 bg-[#f8fbff] rounded-xl px-3 py-2"
                >
                 
                  <span className="text-[11px] text-[#374151] font-medium leading-tight">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 pb-6 pt-5 space-y-5">

            {/* Coupon section */}
            <div>
              <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-2">Have a coupon?</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                 
                  <input
                    value={couponCode}
                    onChange={handleCouponInputChange}
                    placeholder="Enter coupon code"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#f8fbff] border border-[#dbeafe] rounded-xl outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 transition-all placeholder:text-[#c4d4e8] font-medium tracking-wide"
                  />
                </div>
                <button
                  onClick={applyCoupon}
                  className="bg-[#3498db] hover:bg-[#2180c0] active:scale-95 text-white text-sm font-bold px-5 rounded-xl transition-all duration-150 whitespace-nowrap shadow-sm shadow-[#3498db]/30"
                >
                  Apply
                </button>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 mt-2 bg-red-50 border border-red-100 text-red-500 text-xs font-medium px-3 py-2 rounded-lg">
                  <span>✕</span> {errorMessage}
                </div>
              )}
              {couponSuccess && (
                <div className="flex items-center gap-2 mt-2 bg-green-50 border border-green-100 text-green-600 text-xs font-medium px-3 py-2 rounded-lg">
                  <span>✓</span> {couponSuccess}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />

            {/* Price breakdown */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-sm text-[#6b7280]">
                <span>Subtotal</span>
                <span className="font-medium text-[#374151]">
                  {currency} {beforeTaxPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-[#6b7280]">
                <span>GST ({taxPercentage}%)</span>
                <span className="font-medium text-[#374151]">
                  {currency} {gstPrice.toFixed(2)}
                </span>
              </div>

              {/* Grand total */}
              <div className="flex justify-between items-center bg-[#f0f8ff] rounded-2xl px-4 py-3 mt-1 border border-[#dbeafe]">
                <div>
                  <p className="text-[10px] text-[#9ca3af] uppercase tracking-widest">Total Payable</p>
                  <p className="text-[#1a2533] text-xl font-bold mt-0.5">
                    {currency} {grandTotalPrice.toFixed(2)}
                  </p>
                </div>
                {discountApplied && (
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Discount Applied
                  </span>
                )}
              </div>
            </div>

            {/* Pay button */}
            <button
              onClick={initiateCashfreePayment}
              className="group relative w-full bg-[#ff6600] hover:bg-[#e55a00] active:scale-[0.98] text-white font-bold text-base py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-[#ff6600]/30 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Proceed to Pay</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              {/* Shine sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
            </button>

            {/* Trust line */}
            <p className="text-center text-[11px] text-[#9ca3af] flex items-center justify-center gap-1.5">
             
              Secured by Cashfree · 256-bit SSL Encrypted
            </p>

          </div>
        </div>

        {/* Hidden Fees component for data */}
        <div className="hidden">
          <Fees
            onPriceUpdate={handlePriceUpdate}
            showDetails={false}
            courseSlug={courseSlug}
          />
        </div>

      </div>
    </div>
  );
};

export default Payment;