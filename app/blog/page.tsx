"use client"
import { NavbarDemo } from '@/components/Navbar'
import React, { useRef, useCallback, useLayoutEffect } from 'react'
import dynamic from 'next/dynamic';
import { ScrollStackItem } from './Scrollstack';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';
import Foot from '@/components/Footer';

const ScrollStack = dynamic(
  () => import('./Scrollstack'),
  { ssr: false }
);

const cards = [
  {
    title: "Grow Your Business with Expert Social Media Marketing!",
    img: "/images/seo.png",
    excerpt:
      "In today's fast‑paced digital world, social media marketing is essential for business success…",
    url: "/blog/blog1"
  },
  {
    title: "The Power of SEO: Boost Your Online Visibility",
    img: "/images/2.png",
    excerpt:
      "With millions of websites vying for attention, how can you make your brand stand out? The answer is SEO…",
      url: "/blog/blog2"
  },
  {

    title: "The Digital Marketing Edge: Empowering Your Business in the Modern Age",
    img: "/images/3.png",
    excerpt:
      "In the ever-evolving landscape of business, digital marketing has become a crucial tool for growth and success. Understanding its .…",
      url: "/blog/blog3"
  },
];
const page = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollToFooter = useCallback(() => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
    <main className="min-h-screen bg-gray-50">
      <NavbarDemo />
      <h1  className='text-center text-3xl pt-24' >Blogs</h1>
      <div className="h-[80vh] mx-auto px-4 py-8">
        <ScrollStack>
          {cards.map((card, index) => (
            <ScrollStackItem key={index} card={card}>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
      {/* <button onClick={scrollToFooter}>Scroll to Footer</button> */}
      <div ref={footerRef} className="h-[40vh] mt-10">
        {/* <GoogleGeminiEffectDemo /> */}
        {/* <Foot /> */}
      </div>
       
    </main>
          
    </>
  )
}



export default page

