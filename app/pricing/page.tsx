"use client"
import { NavbarDemo } from '@/components/Navbar'
import React from 'react'
import ChromaGrid from '../../components/Chomagrid'
import SplitText from '@/components/Staggertext';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';

const items = [
  {
    image: "/price/1.png",
    title: "Website Development",
    subtitle: "Web Design, Web Development, Deployement, Maintainance",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "/price/2.png",
    title: "Search Engine Optimization",
    subtitle: "Improving website visibility through optimized content and technical strategies..",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
,  {
      image: "/price/3.png",
      title: "Social Media Marketing",
      subtitle: "Engaging target audience and building brand awareness through social media platforms.",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
      {
      image: "/price/4.png",
      title: "Graphic Designing and Reels/Video Creation",
      subtitle: "Reaching target audience through targeted digital advertising campaigns.",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
    ,  {
      image: "/price/5.png",
      title: "Online Ads/Lead Generation",
      subtitle: "Creating Graphics and Videos for Social Media Posting",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    }
];

const page = () => {
  return (
    <>
      <NavbarDemo />
      <div className=" pt-32 ">
             <div className="flex items-center mb-10 relative  justify-center">
                
                      <SplitText
                  text="Pricing & Packages"
                  className="md:text-5xl text-3xl pb-10 font-semibold text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  
                />
                      </div>
      <div className='pl-2 md:pl-20 md:pr-20  pr-2' style={{ height: '1200px', position: 'relative' }}>
    
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.2}
    ease="power3.out"
  />
</div>
      </div>
      {/* <GoogleGeminiEffectDemo/> */}
    </>
  )
}

export default page