"use client";

import React, { useEffect, useState, useRef } from "react";
import AnimatedNavbar from "@/components/animated-navbar";
import Loader from "@/components/Loader";
import gsap from 'gsap';

const MainComponent = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const mainRef=useRef<HTMLDivElement>(null);


  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }, 2300);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <div className="min-h-screen main text-white transition-all overflow-x-hidden">
      {isLoading ? (
        <div
          ref={loaderRef}
          className="flex items-center justify-center min-h-screen bg-[#e5e9fc] overflow-hidden"
        >
          <Loader />
        </div>
      ) : (
        <data >
          <AnimatedNavbar />
          <div>{children}</div>
        </data>
      )}
    </div>
  );
};

export default MainComponent;
