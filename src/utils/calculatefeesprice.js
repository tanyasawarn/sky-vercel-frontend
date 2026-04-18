// export const calculatePrice = ({
//   basePriceINR,
//   discount,
//   coupon,
//   regionMultiplier = 1,
//   currency,
//   exchangeRate,
// }) => {
//   // Step 1: base discount
//   let discounted = basePriceINR * (1 - discount);

//   // Step 2: apply coupon
//   if (coupon) {
//     if (coupon.type === "percentage") {
//       discounted = discounted * (1 - coupon.value / 100);
//     } else if (coupon.type === "flat") {
//       discounted = discounted - coupon.value;
//     }
//   }

//   // Step 3: region pricing
//   discounted = discounted * regionMultiplier;
//   const original = basePriceINR * regionMultiplier;

//   // Step 4: currency conversion
//   const finalPrice =
//     currency === "INR" ? discounted : discounted * exchangeRate;

//   const originalPrice =
//     currency === "INR" ? original : original * exchangeRate;

//   return {
//     finalPrice,
//     originalPrice,
//     savings: originalPrice - finalPrice,
//   };
// };






export const calculatePrice = ({
  basePriceINR,
  discount,
  coupon,
  regionMultiplier = 1,
  currency,
  exchangeRate,
}) => {
  // Step 1: Apply base discount
  let discounted = basePriceINR * (1 - discount);

  // Step 2: Apply coupon (if any)
  if (coupon) {
    if (coupon.type === "percentage") {
      discounted = discounted * (1 - coupon.value / 100);
    } else if (coupon.type === "flat") {
      discounted = discounted - coupon.value;
    }
  }

  // Step 3: Region multiplier
  const original = basePriceINR * regionMultiplier;
  discounted = discounted * regionMultiplier;

  // Step 4: Currency conversion
  const finalPrice =
    currency === "INR" ? discounted : discounted * exchangeRate;

  const originalPrice =
    currency === "INR" ? original : original * exchangeRate;

  const savings = originalPrice - finalPrice;

 
  // ✅ CRITICAL: return ALL values
  return {
    finalPrice,
    originalPrice,
    savings,
  };
};