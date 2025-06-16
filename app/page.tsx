import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { NavbarDemo } from "../components/Navbar";
import Image from "next/image";
import { VideoText } from "@/components/magicui/video-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Carousel from "@/components/ui/carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
import React from "react";
import { FeaturesSectionDemo } from "@/components/Featuresection";

import { LensDemo } from "@/components/Lensphoto";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGemini";
import { LampDemo } from "@/components/Lamp";
import { InfiniteMovingCardsDemo } from "@/components/Movingcard";

import { HeroParallaxDemo } from "@/components/Blog";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <LensDemo />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <LensDemo />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <LensDemo />
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <LensDemo />
    ),
  },
];
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

      <ScrollProgress className="!h-2  " />

      <div className="relative    md:w-[80vw]  h-[28vw] m-auto overflow-visible flex gap-0 items-center justify-center">
        <VideoText
          className="mt-32 !w-[100vw] left-10 md:left-0 md:mt-0"
          src="https://cdn.magicui.design/ocean-small.webm"
        >
          Maitriya
        </VideoText>
        <VideoText
          className="mt-32 relative left-[-10] md:left-0  md:mt-0  "
          src="https://cdn.magicui.design/ocean-small.webm"
        >
          Digital
        </VideoText>
      </div>

      <div className="relative h-[600px] translate-y-[-40vw]  w-full md:translate-y-[-25vw] overflow-hidden">
        <RetroGrid angle={65} opacity={0.9} />
      </div>
      <div className=" overflow-y-hidden mt-[-20vw]  ">
        <StickyScroll content={content} />

      </div>
      <div className=" w-full mt-40 md:mt-0 md:h-[40vw] flex flex-col items-center justify-center relative overflow-hidden bg-white">

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
      <div className="hidden  md:mb-10 h-[100vh] md:flex">
        <LampDemo />
      </div>
      <HeroParallaxDemo />
      <div className="text-center text-3xl md:mt-[-18vw]">
        <h1>Testinomial</h1>
      </div>
      <AnimatedTestimonials autoplay={true} testimonials={testimonials} />
      <h1 className="text-center text-3xl mt-10 mb-[]"> Frequently Asked Question</h1>
      <InfiniteMovingCardsDemo />
      <GoogleGeminiEffectDemo />
    </>
  );
}
