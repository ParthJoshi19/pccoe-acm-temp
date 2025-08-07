"use client";

import React, { useEffect, useRef } from "react";
import "./Team.css";
import gsap from "gsap";
// import logo from "@/public/amc-pccoe-logo.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger);

const pastelColors = [
  '#fef6e4', '#e0f2fe', '#f1f5f9', '#f3e8ff', '#f0fdf4', '#fef9c3', '#fce7f3', '#e0e7ff', '#f1f5f9', '#fef2f2',
  '#e0f2fe', '#f3e8ff', '#f0fdf4', '#fef9c3', '#fce7f3', '#e0e7ff', '#f1f5f9', '#fef2f2', '#fef6e4', '#e0f2fe',
  '#f1f5f9', '#f3e8ff', '#f0fdf4', '#fef9c3', '#fce7f3', '#e0e7ff', '#f1f5f9', '#fef2f2', '#fef6e4', '#e0f2fe',
  '#f1f5f9', '#f3e8ff', '#f0fdf4', '#fef9c3', '#fce7f3', '#e0e7ff', '#f1f5f9',
];
const teamMembers = [
  { position: "Web Master", name: "Keyura Motegaokar", image: "url/to/image", color: pastelColors[0] },
  { position: "Web Master", name: "Path Joshi", image: "url/to/image", color: pastelColors[1] },
  { position: "Web Master", name: "Pruthviraj Kale", image: "url/to/image", color: pastelColors[2] },
  { position: "Web Master", name: "Rahul Landge", image: "url/to/image", color: pastelColors[3] },
  { position: "Web Master", name: "Vaishnavi Gaikwad", image: "url/to/image", color: pastelColors[4] },

  { position: "Technical Team", name: "Harshal Patil", image: "url/to/image", color: pastelColors[5] },
  { position: "Technical Team", name: "Parikshit Rajpurohit", image: "url/to/image", color: pastelColors[6] },
  { position: "Technical Team", name: "Piyush Patil", image: "url/to/image", color: pastelColors[7] },
  { position: "Technical Team", name: "Virjeet Kakekar", image: "url/to/image", color: pastelColors[8] },

  
  { position: "Marketing Team", name: "Bhavya Shah", image: "url/to/image", color: pastelColors[10] },
  { position: "Marketing Team", name: "Shravani Sonigra", image: "url/to/image", color: pastelColors[13] },
  { position: "Marketing Team", name: "Preksha Gangwal", image: "url/to/image", color: pastelColors[12] },
  { position: "Marketing Team", name: "Hrishikesh Patil", image: "url/to/image", color: pastelColors[11] },
  { position: "Marketing Team", name: "Aayush Kolhe", image: "url/to/image", color: pastelColors[9] },
  
  { position: "Design Team", name: "Mayur Jogde", image: "url/to/image", color: pastelColors[14] },
  { position: "Design Team", name: "Nehal Kongwad", image: "url/to/image", color: pastelColors[15] },
  { position: "Design Team", name: "Pranil Sakpal", image: "url/to/image", color: pastelColors[16] },
  { position: "Design Team", name: "Sadhyoj Hanawate", image: "url/to/image", color: pastelColors[17] },

  { position: "PR Team", name: "Aadi Kanchankar", image: "url/to/image", color: pastelColors[18] },
  { position: "PR Team", name: "Ishani Soundankar", image: "url/to/image", color: pastelColors[19] },
  { position: "PR Team", name: "Kartik Thakur", image: "url/to/image", color: pastelColors[20] },
  { position: "PR Team", name: "Keya Jadhav", image: "url/to/image", color: pastelColors[21] },
  { position: "PR Team", name: "Nirmit Mane", image: "url/to/image", color: pastelColors[22] },
  { position: "PR Team", name: "Rohan Mahanvar", image: "url/to/image", color: pastelColors[23] },
  { position: "PR Team", name: "Shravan Joshi", image: "url/to/image", color: pastelColors[24] },
  { position: "PR Team", name: "Shravani Kalapure", image: "url/to/image", color: pastelColors[25] },
  { position: "PR Team", name: "Shreya Menthe", image: "url/to/image", color: pastelColors[26] },

  { position: "Membership Chair", name: "Likhit Chaudhary", image: "url/to/image", color: pastelColors[27] },
  { position: "Membership Chair", name: "Siddhant Itkar", image: "url/to/image", color: pastelColors[28] },
  { position: "Co-treasurer", name: "Swayam Laxminarayan Mandhanimake", image: "url/to/image", color: pastelColors[29] },
  { position: "Treasurer", name: "Neelay Brijesh Shah", image: "https://res.cloudinary.com/dngqp3rve/image/upload/v1754508492/20250730_143042_c1opie.jpg", color: pastelColors[30] },
  { position: "Co-secretory", name: "Afia Shaikh", image: "url/to/image", color: pastelColors[31] },
  { position: "Secretory", name: "Prerana Ashok Rajput", image: "url/to/image", color: pastelColors[32] },
  { position: "Management Executive", name: "Rushikesh Patil", image: "https://res.cloudinary.com/dngqp3rve/image/upload/v1754508805/Screenshot_2025-08-07_010303_g3emck.png", color: pastelColors[33] },
  { position: "Vice President", name: "Mayuresh Shailesh Rane", image: "https://res.cloudinary.com/dngqp3rve/image/upload/v1754508749/Screenshot_2025-08-07_010154_abwotu.png", color: pastelColors[34] },
  { position: "President", name: "Ayush Patil", image: "https://res.cloudinary.com/dngqp3rve/image/upload/v1754419165/20250730_142648_bvv1nn.jpg", color: pastelColors[35] },
];


const Page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const slides = gsap.utils.toArray<HTMLElement>(".slide");
    const activeSlideImages =
      gsap.utils.toArray<HTMLImageElement>(".active-slide img");


    const mapRange = (
      value: number,
      inMin: number,
      inMax: number,
      outMin: number,
      outMax: number
    ) => {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    slides.forEach((slide, idx) => {
      // Dynamically set initial Z position for each slide
      const initialZ = -(slides.length - (idx + 1)) * 2500;
      slide.classList.add(`slide-${idx + 1}`);
      slide.style.top = "50%";
      slide.style.left = idx % 2 === 0 ? "70%" : "30%";
      slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${initialZ}px)`;
      slide.style.opacity = idx === slides.length - 1 ? "1" : "0";

      ScrollTrigger.create({
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const zInc = progress * 90000;
          const curr = initialZ + zInc;

          let opacity;
          if (curr > -2500) {
            opacity = mapRange(curr, -2500, 0, 0.5, 1);
          } else {
            opacity = mapRange(curr, -5000, -2500, 0, 0.5);
          }

          slide.style.opacity = `${opacity}`;
          slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${curr}px)`;

          if (curr < 100) {
            gsap.to(activeSlideImages[idx], {
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          } else {
            gsap.to(activeSlideImages[idx], {
              opacity: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        },
      });
    });
  }, []);



  return (
    <div className="min-h-screen container" ref={scrollRef}>

      <div className="active-slide ">
        {teamMembers.map((member, idx) => (
          <img key={idx} src="./amc-pccoe-logo.png" alt={member.name} className="im object-contain " />
        ))}
      </div>

      <div className="slider">
        {teamMembers.map((member, idx) => (
          <div className={`slide slide-${idx + 1} flex flex-col justify-center items-center`} key={idx}>
            <div className="slide-copy ">
              <p className="text-gray-800 font-extrabold text-xl">{member.name}</p>
              <p className="text-gray-700">{member.position}</p>
            </div>
            <div className="slide-img object-cover lg:h-[380px] h-[320px] lg:w-[390px] w-[320px] mb-10">
              <img
                className="img rounded-full border-4"
                src={member.image}
                alt={member.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
