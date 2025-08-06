"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import AnimatedNavbar from "@/components/animated-navbar";

const infoCards = [
  {
    title: "Innovation",
    description:
      "Driving technological advancement through cutting-edge research and development in computer science.",
    bgColor: "bg-white",
    textColor: "text-black",
    border: "border border-blue-200",
    scrollSpeed: "8",
    marginLeft: "ml-0",
  },
  {
    title: "Community",
    description:
      "Building a strong network of passionate developers, researchers, and tech enthusiasts.",
    bgColor: "bg-blue-600",
    textColor: "text-white",
    border: "",
    scrollSpeed: "6",
    marginLeft: "ml-12",
  },
  {
    title: "Excellence",
    description:
      "Striving for the highest standards in education, research, and professional development.",
    bgColor: "bg-white",
    textColor: "text-black",
    border: "border border-blue-200",
    scrollSpeed: "4",
    marginLeft: "ml-24",
  },
  {
    title: "Future",
    description:
      "Preparing the next generation of computer scientists for tomorrow's challenges.",
    bgColor: "bg-blue-800",
    textColor: "text-white",
    border: "",
    scrollSpeed: "2",
    marginLeft: "ml-36",
  },
];



export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="main" data-scroll data-scroll-container>
      <AnimatedNavbar />

      <section
        className="min-h-screen flex items-center text-black font-[michroma] text-9xl justify-center bg-white"
        data-scroll-sticky
        data-scroll-target=".main"
      >
        PCCOE ACM
      </section>

      <section
        className="min-h-screen cards bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-8"
        data-scroll-section
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative space-y-8">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} ${card.border} ${card.marginLeft} rounded-2xl p-8 shadow-lg`}
                data-scroll
                data-scroll-sticky
                data-scroll-target=".cards"
                data-scroll-speed={card.scrollSpeed}
                data-scroll-direction="vertical"
                data-scroll-delay={index * 0.1}
              >
                <h3 className={`${card.textColor} font-michroma text-2xl mb-4`}>
                  {card.title}
                </h3>
                <p
                  className={`${
                    card.textColor === "text-white"
                      ? "text-blue-100"
                      : "text-gray-700"
                  } text-lg leading-relaxed`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional animated elements */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center"
              data-scroll
              data-scroll-speed="3"
              data-scroll-direction="horizontal"
            >
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

      <section
        className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
        data-scroll-section
      >
        <div className="text-center" data-scroll data-scroll-speed="4">
          <h2 className="text-white font-michroma text-6xl mb-8">Join Us</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Be part of the future of computing at PCCOE ACM
          </p>
        </div>
      </section>
    </div>
  );
}
