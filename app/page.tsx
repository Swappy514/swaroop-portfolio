"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <main>
      <CustomCursor />
      <ScrollProgress />
      {!introComplete && <Intro onComplete={handleIntroComplete} />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Hobbies />
    </main>
  );
}
