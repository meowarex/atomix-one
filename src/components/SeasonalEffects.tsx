"use client";

import { useEffect, useState } from "react";
import { Particle, WeatherFx } from "@once-ui-system/core";

export const SeasonalEffects = () => {
  const [isDecember, setIsDecember] = useState(false);
  const [isAutumn, setIsAutumn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkSeason = () => {
      const date = new Date();
      // Get the month in Sydney time
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Australia/Sydney",
          month: "numeric",
        });
        const month = Number.parseInt(formatter.format(date));
        // December is 12
        setIsDecember(month === 12);
        // Autumn is March (3), April (4), May (5)
        setIsAutumn(month >= 3 && month <= 5);
      } catch (error) {
        // Fallback to local time if timezone is invalid
        console.warn("Could not determine Sydney time, falling back to local time", error);
        const localMonth = date.getMonth() + 1; // getMonth() is 0-indexed
        setIsDecember(localMonth === 12);
        setIsAutumn(localMonth >= 3 && localMonth <= 5);
      }
    };
    checkSeason();
  }, []);

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing initially
    return null;
  }

  if (isDecember) {
    return (
      <WeatherFx
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
        height={24}
        type="snow"
        data-solid="contrast"
        colors={["brand-solid-strong", "neutral-solid-weak"]}
        intensity={100}
        speed={0.7}
      />
    );
  }

  if (isAutumn) {
    return (
      <WeatherFx
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
        height={24}
        type="leaves"
        colors={["warning-solid-strong", "danger-solid-strong", "success-solid-medium"]}
        intensity={120}
        speed={0.6}
        angle={5}
      />
    );
  }

  return <Particle position="absolute" interactive density={65} size="2" speed={1} opacity={50} />;
};
