"use client"
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { NavbarDemo } from "../components/Navbar";
import Image from "next/image";
import { VideoText } from "@/components/magicui/video-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Carousel from "@/components/ui/carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ColourfulText from "@/components/ui/colourful-text";
// import { motion } from "motion/react";
import React from "react";
import { FeaturesSectionDemo } from "@/components/Featuresection";

import { LensDemo } from "@/components/Lensphoto";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGemini";
import { LampDemo } from "@/components/Lamp";

import { motion } from "framer-motion";

import { HeroParallaxDemo } from "@/components/Blog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/Accordian";


import { MarqueeDemo } from "@/components/Movingcard";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import RollingGallery from "@/components/carouselcompany";
const content = [
  {
    title: "Welcome to Maitreya",
    description:
      "Discover digital success with Maitreya Digital, India's premier digital marketing agency. Based in Delhi NCR, we excel in driving business growth through innovative strategies and expertise. For a top digital marketing company or a reliable marketing agency near you, choose Maitreya Digital.",
    content: (
      <LensDemo img="/banner/1.png"  title="Expertise" subtitle='With an experience and a proven track record of success, we have the expertise to deliver results that matter.' />
    ),
  },
  {
    title: "Our Mission",
    description:
      "At Maitreya Digital, our mission is simple: to empower brands with the tools and strategies they need to succeed in the digital age. We believe in the power of technology to drive meaningful connections and create lasting impressions. With our unique blend of creativity, expertise, and dedication, we strive to deliver unparalleled results that exceed our clients' expectations.",
    content: (
      <LensDemo img="/banner/2.png" title="Innovation" subtitle="We stay ahead of the curve with cutting-edge strategies and technologies to ensure your brand remains competitive." />
    ),
  },
  {
    title: "Our Approach",
    description:
      "What sets us apart at Maitreya Digital is our client-centric approach. We understand that every business is unique, which is why we take the time to listen to your needs, understand your goals, and tailor our strategies accordingly. Whether you're looking to increase brand visibility, drive website traffic, or boost conversion rates, we have the knowledge and experience to help you achieve your objectives.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <LensDemo img="/banner/3.png"  title="Commitment" subtitle="We are committed to our clients' success and go above and beyond to deliver exceptional service and results." />
      </div>
    ),
  },
  
 
];
const slideData = [
  {
    title: "Social Media Optimization",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/service-1.webp",
  },
  {
    title: "Urban Dreams",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/services-2.png",
  },
  {
    title: "web Design",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/services-3.jpg",
  },
  {
    title: "Graphic Design",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/services-4.png",
  },
  {
    title: "Content Writing",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/services-5.jpg",
  },
  {
    title: "Video Editing",
    button: "Explore ",
    src: "https://www.maitreyadigital.com/services-6.jpg",
  },

];
const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Home() {
  return (
    <>
      <NavbarDemo />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <ScrollProgress className="!h-2 z-[100] " />

        <div className="relative    md:w-[80vw]  h-[32vw] m-auto overflow-visible flex gap-[-10px] items-center justify-center">
          <VideoText
            className="mt-32 !w-[100vw] left-10 md:left-0 md:mt-0"
            src="https://cdn.magicui.design/ocean-small.webm"
          >
            Maitreya
          </VideoText>
          <VideoText
            className="mt-32 relative  left-[-10px] md:left-0  md:mt-0  "
            src="https://cdn.magicui.design/ocean-small.webm"
          >
            Digital
          </VideoText>
        </div>
      </motion.div>

      <div className="relative h-[600px] translate-y-[-40vw]  w-full md:translate-y-[-25vw] overflow-hidden">
        <RetroGrid angle={65} opacity={0.9} />
      </div>
      <div className=" overflow-y-hidden mt-[-20vw]  ">
        <StickyScroll content={content} />

      </div>



      <div className=" w-full mt-40 md:mt-8 md:h-[40vw] flex flex-col items-center justify-center relative overflow-hidden bg-white">

        <h1 className="text-2xl  md:text-5xl lg:text-7xl font-bold text-center text-black relative z-2 font-sans">
          Welcome To <ColourfulText text="Maitreya" /> <br />
        </h1>
        <div className="mt-10">
          <FeaturesSectionDemo />
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
      <div className="hidden mt-10 md:mb-10 h-[100vh] md:flex">
        <LampDemo />
      </div>
      <HeroParallaxDemo />
      <div className="px-20">
      <div className="!text-4xl text-center">
      <TextGenerateEffect words={"Our Happy Clients"} />
      </div>
<RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
      <div className="text-center text-3xl ">
        <h1>Testinomial</h1>
      </div>
      
      <AnimatedTestimonials autoplay={true} testimonials={testimonials} />
  <div className="text-center text-3xl md:mx-24 mx-2 mt-10 mb-10">
  <TextGenerateEffect words={"Frequently Asked Question"} />
  <Accordion type="single" collapsible>
  <AccordionItem value="item-1" className="flex flex-col items-start ">
    <AccordionTrigger className="md:!text-xl text-sm">Q: What services does Maitreya Digital offer?</AccordionTrigger>
    <AccordionContent >
    Maitreya Digital offers a comprehensive range of digital marketing services including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website design and development.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="flex flex-col items-start ">
    <AccordionTrigger className="md:!text-xl text-sm">Q: What services does Maitreya Digital offer?</AccordionTrigger>
    <AccordionContent >
    Maitreya Digital offers a comprehensive range of digital marketing services including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website design and development.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3" className="flex flex-col items-start ">
    <AccordionTrigger className="md:!text-xl text-sm">Q: How does Maitreya Digital ensure the success of its digital marketing campaigns?
    </AccordionTrigger>
    <AccordionContent >
    At Maitreya Digital, we tailor our strategies to meet the unique needs and goals of each client. We start by conducting thorough research and analysis to understand your target audience and industry landscape. We then implement data-driven strategies, continually monitor performance metrics, and make optimizations to ensure the success of your campaigns.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-4" className="flex flex-col items-start ">
    <AccordionTrigger className="md:!text-xl text-sm">Q: Can Maitreya Digital help my business improve its search engine rankings?
    </AccordionTrigger>
    <AccordionContent >
    Absolutely! SEO is one of our core specialties. We employ a combination of on-page optimization, quality content creation, link building, and technical SEO techniques to help improve your website's visibility and rankings on search engines like Google.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-5" className="flex flex-col items-start ">
    <AccordionTrigger className="md:!text-xl text-sm">Q: How long does it take to see results from Maitreya Digital's digital marketing efforts?
    </AccordionTrigger>
    <AccordionContent >
    The timeline for seeing results can vary depending on factors such as the competitiveness of your industry, the current state of your digital presence, and the specific goals of your campaign. However, we typically start to see noticeable improvements within the first few months of engagement.
    </AccordionContent>
  </AccordionItem>



  
  
</Accordion>
  </div>
      {/* <h1 className="text-center text-3xl mt-10 mb-[]"> Frequently Asked Question</h1>
      <MarqueeDemo /> */}
 <div className="">
       <GoogleGeminiEffectDemo />
 </div>
    </>
  );
}
