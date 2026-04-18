"use client"; 
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const CACHE_KEY = "userLocationData";
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

const COUNTRY_TO_CURRENCY = {
  IN: "INR",
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  DE: "EUR",
  FR: "EUR",
  JP: "JPY",
};

const getTimeZoneCountry = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (tz === "Asia/Kolkata") return "IN";
  return null;
};

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    userIP: "",
    userCountry: "",
    currency: "INR",
    exchangeRate: 1,
    loading: true,
    source: "init", // debug: cache | ip | timezone | fallback
    error: null,
  });

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const initialize = async () => {
    try {
      // 1️⃣ Cache check
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          setState({ ...parsed.data, loading: false, source: "cache" });
          return;
        }
      }

      // 2️⃣ Timezone override (India-first)
      const tzCountry = getTimeZoneCountry();
      if (tzCountry === "IN") {
        await applyCountry("IN", "timezone");
        return;
      }

      // 3️⃣ IP lookup
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) throw new Error("IP lookup failed");

      const data = await res.json();
      await applyCountry(data.country_code, "ip", data.ip);
    } catch (err) {
      // console.error("UserContext error:", err);
      // 4️⃣ Final fallback
      await applyCountry("IN", "fallback");
    }
  };

  const applyCountry = async (countryCode, source, ip = "") => {
    // 🔒 India-first protection
    if (
      countryCode !== "IN" &&
      getTimeZoneCountry() === "IN"
    ) {
      countryCode = "IN";
      source = "timezone-override";
    }

    const currency = COUNTRY_TO_CURRENCY[countryCode] || "INR";
    let exchangeRate = 1;

    if (currency !== "INR") {
      try {
        const res = await fetch(
          `https://api.exchangerate.host/latest?base=INR&symbols=${currency}`
        );
        const data = await res.json();
        exchangeRate = data?.rates?.[currency] || 1;

        // Auto-fix inverted rate
        if (exchangeRate > 10) exchangeRate = 1 / exchangeRate;
      } catch {
        exchangeRate = 1;
      }
    }

    const finalData = {
      userIP: ip,
      userCountry: countryCode,
      currency,
      exchangeRate,
      loading: false,
      source,
      error: null,
    };

    setState(finalData);

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: finalData,
        timestamp: Date.now(),
      })
    );
  };

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};
