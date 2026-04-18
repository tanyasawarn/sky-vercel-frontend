// "use client";

// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../Usercontext/Usercontext";

// const Fees = ({
//   basePriceINR,         
//   discount = 0,           
//   onPriceUpdate,
//   showDetails = true,
//   className = "",        
// }) => {
//   const { currency, exchangeRate, loading } =
//     useContext(UserContext);

//   const [finalPrice, setFinalPrice] = useState(0);
//   const [originalPrice, setOriginalPrice] = useState(0);
//   const [savings, setSavings] = useState(0);

//   if (loading || !currency) return null;

//   useEffect(() => {
//     if (loading) return;

//     const discountedINR = basePriceINR * (1 - discount);

//     const convertedOriginal =
//       currency === "INR"
//         ? basePriceINR
//         : basePriceINR * exchangeRate;

//     const convertedFinal =
//       currency === "INR"
//         ? discountedINR
//         : discountedINR * exchangeRate;

//     setOriginalPrice(convertedOriginal);
//     setFinalPrice(convertedFinal);
//     setSavings(convertedOriginal - convertedFinal);

//     if (onPriceUpdate) {
//       onPriceUpdate(
//         convertedFinal.toLocaleString(undefined, {
//           maximumFractionDigits: 2,
//         }),
//         currency
//       );
//     }
//   }, [currency, exchangeRate, loading, basePriceINR, discount]);

//   if (!showDetails || loading) return null;

//   return (
//     <div className={className}>
//       {/* Final Price */}
//       <p className="text-[2rem] text-black font-semibold mt-4 font-[Open_Sans]">
//         {currency}{" "}
//         {finalPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//       </p>

//       {/* Original Price */}
//       <p className="text-[2rem] text-black line-through -mt-3.5 font-[Open_Sans]">
//         {currency}{" "}
//         {originalPrice.toLocaleString(undefined, {
//           maximumFractionDigits: 2,
//         })}
//       </p>

//       {/* Savings */}
//       <p className="text-green-600 font-normal -mt-3.5 font-[Open_Sans]">
//         Your total savings: {currency}{" "}
//         {savings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
//       </p>
//     </div>
//   );
// };

// export default Fees;






"use client";

import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserContext } from "@/context/usercontext";
import { calculatePrice } from "@/utils/calculatefeesprice";
import { PRICING_CONFIG } from "@/components/common/CourseFees/constantPrice/priceconfig";
import { COUPONS } from "@/components/common/CourseFees/constantPrice/coupon";
import { REGION_PRICING } from "@/components/common/CourseFees/regionalprice";
import { COURSE_SLUG_MAP } from "@/components/common/CourseFees/constantPrice/courseslugmap";

const Fees = ({ couponCode = null, showDetails = true, onPriceUpdate, courseSlug,  textColor = "text-blue-600",originalColor = "text-red-600",savingsColor = "text-green-600" }) => {
  const pathname = usePathname();

  const { userCountry, currency, exchangeRate, loading } =
    useContext(UserContext);

  const [priceData, setPriceData] = useState(null);

 

useEffect(() => {
  if (loading || !currency) return;

  //const slug = pathname.split("/").filter(Boolean).pop();
  // const slug = courseSlug || pathname.split("/").filter(Boolean).pop();
//   const rawSlug = courseSlug || pathname.split("/").filter(Boolean).pop();

//const slug = COURSE_SLUG_MAP[rawSlug] || rawSlug;

const rawSlug = courseSlug || pathname.split("/").filter(Boolean).pop();
const slug = COURSE_SLUG_MAP[rawSlug] || rawSlug;
console.log("rawSlug:", rawSlug, "mappedSlug:", slug); // add this
  console.log("PRICING_CONFIG keys:", Object.keys(PRICING_CONFIG));

  const courseData = PRICING_CONFIG[slug];
 

  if (!courseData) {
     // console.error("Invalid course slug:", slug);
    return;
  }

  const coupon = couponCode ? COUPONS[couponCode] : null;
  const regionMultiplier = REGION_PRICING[userCountry] || 1;

  const result = calculatePrice({
    basePriceINR: courseData.basePriceINR,
    discount: courseData.discount,
    coupon,
    regionMultiplier,
    currency,
    exchangeRate,
  });

    // console.log("FINAL RESULT:", result);

 setPriceData(result);
  if (onPriceUpdate && result?.finalPrice) {
  onPriceUpdate(result.finalPrice, currency);
}
}, [courseSlug, pathname, couponCode, currency, exchangeRate, userCountry, loading]);

  if (!priceData || loading || !showDetails) return null;

  const finalPrice = priceData?.finalPrice;
const originalPrice = priceData?.originalPrice;
const savings = priceData?.savings;

// console.log("Rendering with:", priceData);

  return (


    <div>
  {finalPrice !== undefined && (
    <p className={`text-[2rem] font-semibold mt-4 px-2 py-2 ${textColor}`}>
      {currency}{" "}
      {finalPrice.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}
    </p>
  )}

  {originalPrice !== undefined && (
    <p className={`text-[2rem] line-through -mt-3.5 py-2 ${originalColor}`}>
      {currency}{" "}
      {originalPrice.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}
    </p>
  )}

  {savings !== undefined && (
    <p className={`${savingsColor} -mt-3.5 py-1`}>
      Your total savings: {currency}{" "}
      {savings.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })}
    </p>
  )}
</div>
  );
};

export default Fees;