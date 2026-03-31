import React, { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../../data/portfolioData";

const LoadingScreen = () => {
  const [percent, setPercent] = useState(0);
  const loadingText = portfolioData.loadingText;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPercent((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          return 100;
        }
        return current + 5;
      });
    }, 55);

    return () => window.clearInterval(timer);
  }, []);

  const line = useMemo(() => {
    const index = Math.min(Math.floor(percent / 20), loadingText.length - 1);
    return loadingText[index];
  }, [percent, loadingText]);

  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center" style={{ background: "var(--color-bg)" }}>
      <p className="text-lg" style={{ color: "var(--color-text)" }}>{line}</p>
      <p className="mt-3" style={{ color: "var(--color-accent)" }}>Loading {percent}%</p>
    </div>
  );
};

export default LoadingScreen;
