"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(to right, #ff4500, #ffb700)",
        zIndex: 9997,
        boxShadow: "0 0 6px rgba(255,85,0,0.5)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
