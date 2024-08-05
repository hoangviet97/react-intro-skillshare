"use client";
import { useEffect } from "react";
import "./App.scss";
import Lenis from "@studio-freight/lenis/types";
import Hero from "./pages/Hero";
import ZoomParallax from "./pages/ZoomParallax";
import Theory from "./pages/Theory";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <ZoomParallax />
      <Theory />
    </>
  );
}

export default App;
