"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import AnimatedNavbar from "@/components/animated-navbar";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    gsap.to(planetRef.current, {
      y: 100,
      duration: 0.8,
    });

    gsap.to(titleRef.current, {
      y: -50,
      duration: 0.8,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="main" data-scroll data-scroll-container>
      <section
        className="min-h-screen flex items-center text-white bg-[#0A0F1E] font-[michroma] justify-center relative overflow-hidden"
        data-scroll-target=".main"
      >
        {/* Glowing bottom border circle */}
        <div
          ref={planetRef}
          className="absolute h-[1000px] w-[1000px] -top-[600px] z-1 rounded-full border-b-8 border-[#00AEEF]
             shadow-[0_20px_40px_#00AEEF] before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-b-[40px] before:border-[#00AEEF]/50 before:blur-[40px]"
        ></div>


        <div className="relative z-10 mt-[100px]">
          <p
            ref={titleRef}
            className="relative z-10 lg:text-9xl text-3xl text-white drop-shadow-[0_0_10px_#00AEEF]"
          >
            PCCOE ACM
          </p>

          {/* Blue glow layer */}
          <p
            className="absolute inset-0 text-[#00AEEF] blur-lg opacity-70 animate-pulse select-none"
            aria-hidden="true"
          >
            PCCOE ACM
          </p>

          {/* Scan-line effect */}
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-scan" />
        </div>
      </section>

      <section className="min-h-screen cards py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative space-y-8"></div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4"></div>
              <h4 className="text-black font-michroma text-lg">Research</h4>
            </div>

            <div
              className="text-center"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.1"
            >
              <div className="w-16 h-16 bg-white border-2 border-blue-600 rounded-full mx-auto mb-4"></div>
              <h4 className="text-black font-michroma text-lg">Events</h4>
            </div>

            <div
              className="text-center"
              data-scroll
              data-scroll-speed="7"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.2"
            >
              <div className="w-16 h-16 bg-blue-800 rounded-full mx-auto mb-4"></div>
              <h4 className="text-black font-michroma text-lg">Network</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white font-michroma text-6xl mb-8">Join Us</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Be part of the future of computing at PCCOE ACM
          </p>
        </div>
      </section>
    </div>
  );
}
