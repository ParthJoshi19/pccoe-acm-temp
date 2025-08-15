"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    // Animate hero text & planet glow
    gsap.fromTo(
      planetRef.current,
      { y: -150, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    // Parallax image scroll animation
    if (imageParallaxRef.current) {
      gsap.to(imageParallaxRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: imageParallaxRef.current,
          start: "top bottom",
          scrub: true,
        },
      });
    }

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="main" data-scroll-container>
      {/* HERO SECTION */}
      <section
        className="min-h-screen flex items-center text-white bg-[#0A0F1E] font-[michroma] justify-center relative overflow-hidden"
        data-scroll-section
      >
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
          <p
            className="absolute inset-0 text-[#00AEEF] blur-lg opacity-70 animate-pulse select-none"
            aria-hidden="true"
          >
            PCCOE ACM
          </p>
          <span className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-scan" />
        </div>
      </section>

                    {/* PARALLAX IMAGE SECTION */}
        <section
          className="min-h-screen flex items-center justify-center bg-white"
          data-scroll-section
        >
          <div
            ref={imageParallaxRef}
            className="w-full max-w-7xl overflow-hidden rounded-xl shadow-lg p-8"
          >
            {/* Infinite sliding with faded white edges */}
            <div className="relative w-full overflow-hidden">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Infinite sliding container */}
              <div className="flex flex-row gap-6 animate-slide-infinite" style={{ 
                width: 'fit-content',
                animationDuration: '20s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}>
                {/* First Set of Cards */}
                {/* Image Card 1 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 1"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 1</h3>
                    <p className="text-gray-600 text-base">Description for image 1 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 2 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 2"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 2</h3>
                    <p className="text-gray-600 text-base">Description for image 2 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 3 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 3"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 3</h3>
                    <p className="text-gray-600 text-base">Description for image 3 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 4 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 4"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 4</h3>
                    <p className="text-gray-600 text-base">Description for image 4 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 5 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 5"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 5</h3>
                    <p className="text-gray-600 text-base">Description for image 5 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 6 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 6"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 6</h3>
                    <p className="text-gray-600 text-base">Description for image 6 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 7 */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 7"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 7</h3>
                    <p className="text-gray-600 text-base">Description for image 7 with more space for content</p>
                  </div>
                </div>

                {/* Duplicate Set for Seamless Loop */}
                {/* Image Card 1 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 1"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 1</h3>
                    <p className="text-gray-600 text-base">Description for image 1 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 2 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 2"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 2</h3>
                    <p className="text-gray-600 text-base">Description for image 2 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 3 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 3"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 3</h3>
                    <p className="text-gray-600 text-base">Description for image 3 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 4 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 4"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 4</h3>
                    <p className="text-gray-600 text-base">Description for image 4 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 5 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 5"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 5</h3>
                    <p className="text-gray-600 text-base">Description for image 5 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 6 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 6"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 6</h3>
                    <p className="text-gray-600 text-base">Description for image 6 with more space for content</p>
                  </div>
                </div>

                {/* Image Card 7 - Duplicate */}
                <div className="card flex-shrink-0 h-100 overflow-hidden" style={{
                  width: '600px'
                }}>
                  <img
                    src="/sample.png"
                    alt="Image 7"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Image 7</h3>
                    <p className="text-gray-600 text-base">Description for image 7 with more space for content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* FEATURE CARDS */}
      <section className="min-h-screen cards py-20 px-8 bg-gray-50" data-scroll-section>
        <div className="max-w-6xl mx-auto">
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

      {/* FINAL CTA SECTION */}
      <section
        className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
        data-scroll-section
      >
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
