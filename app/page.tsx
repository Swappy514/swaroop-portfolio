"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main>
      <CustomCursor />
      <ScrollProgress />
      <Intro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </main>
  );
}
