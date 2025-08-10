"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X, Sun, Moon, MenuIcon, Cross, Tally1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";
import logo from "@/public/amc-pccoe-logo.png";
import SpotlightCard from "./NavComponent";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Achievements", href: "/achievements" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];
export default function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mainNavRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (mainNavRef.current) {
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(mainNavRef.current, {
        opacity: 1,
        left: 0,
        pointerEvents: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
      tl.current.fromTo(mainNavRef.current.children[0],{opacity:0},{
        opacity:1
      })
      tl.current.fromTo(
        mainNavRef.current.children[2].children,
        { opacity: 0, scale: 0.5,stagger:0.1,duration:0.1 },
        {
          opacity: 1,
          scale: 1,
          stagger:0.1,
          duration:0.1
        }
      );
    }
  }, []);
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5,
      }
    );

    gsap.to(logoRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);
  const openMenu = () => {
    tl.current?.play();
  };

  const closeMenu = () => {
    tl.current?.reverse();
  };
  return (
    <nav
      className={`fixed font-[Michroma]  z-50 transition-all text-white duration-500 mt-6 rounded-full w-screen bg-opacity-90 backdrop-blur-2xl shadow-inner`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div
              ref={logoRef}
              className="relative w-14 h-14 bg-transparent rounded-xl flex items-center justify-center group-hover:shadow-blue-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-700 rounded-xl blur opacity-30 group-hover:opacity-55 transition-opacity"></div>
              <Image src={logo} alt="pccoe acm logo" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold font-[Michroma] group-hover:text-blue-400 transition-colors">
                PCCOE ACM
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 relative">
            <div
              ref={indicatorRef}
              className="absolute bottom-0 border-black border-b-1 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300"
            />
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-md font-[Michroma] transition-all duration-300 relative group ${
                  pathname === item.href
                    ? "text-blue-500 bg-blue-500/10"
                    : "hover:text-blue-400 hover:bg-blue-500/5"
                }`}
              >
                {item.name}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <MenuIcon
              className="w-6 h-6 text-blue-500 cursor-pointer"
              onClick={() => openMenu()}
            />
          </div>

          <div
            ref={mainNavRef}
            className="absolute opacity-0 -top-6 lg:left-full left-[350px] lg:overflow-hidden overflow-scroll w-screen min-h-screen space-y-6 p-5 bg-black text-white"
          >
            <div className="font-[Michroma] lg:text-7xl text-3xl text-blue-400 font-bold text-center">
              <p>PCCOE ACM</p>
              <X
                className="lg:w-10 lg:h-10 w-7 h-7 absolute lg:top-8 lg:right-14 top-7 right-4 cursor-pointer "
                onClick={() => closeMenu()}
              />
            </div>

            <Separator className="bg-blue-500/20 h-[3px]" />

            <div
              id="nav-compo"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center gap-4 font-[Michroma] text-center mt-6"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => closeMenu()}
                  className="flex w-full items-center justify-center"
                >
                  <SpotlightCard
                    className=" flex lg:h-44 h-20 w-[80%] font-bold items-center justify-center lg:text-2xl bg-transparent border border-blue-500/30 transition-all"
                    spotlightColor="rgba(0, 0, 200, 0.6)"
                  >
                    {item.name}
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => openMenu()}
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className={`lg:hidden bg-opacity-95 backdrop-blur-xl border-t border-blue-500/20`}
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-blue-500 bg-blue-500/10"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-400 hover:bg-blue-500/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-blue-500/20">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg">
                <MenuIcon
                  className="w-5 h-5 mr-2 inline"
                  onClick={() => openMenu()}
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
