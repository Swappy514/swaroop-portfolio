"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Intro from "@/components/Intro";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main>
      <CustomCursor />
      <ScrollProgress />
      <Intro onComplete={() => setIntroComplete(true)} />
      {introComplete && <Navbar />}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "monospace",
          color: "#ff5500",
          fontSize: "20px",
        }}
      >
        Swaroop.dev — Building... 🚀
      </div>
    </main>
  );
}
