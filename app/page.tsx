"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import AnimatedNavbar from "@/components/animated-navbar";

export default function Home() {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  if (!isClient) return null; // avoid hydration mismatch

  return (
    <div ref={scrollRef} data-scroll-container>
      <AnimatedNavbar />

      <section
        id="sticky-section"
        className="relative h-[200vh]"
        data-scroll-section
      >
        <div
          className="w-full h-screen flex items-center justify-center bg-white text-black text-4xl font-bold"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#sticky-section"
        >
          I stay sticky until section scrolls past!
        </div>

        <section
          className="h-screen bg-blue-500"
          data-scroll-section
        >
          <div className="flex items-center justify-center h-full text-white text-3xl">
            Section 2
          </div>
        </section>
      </section>
    </div>
  );
}
