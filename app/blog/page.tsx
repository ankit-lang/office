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
    img: "/images/social-media.jpg",
    excerpt:
      "In today's fast‑paced digital world, social media marketing is essential for business success…",
  },
  {
    title: "The Power of SEO: Boost Your Online Visibility",
    img: "/images/seo.jpg",
    excerpt:
      "With millions of websites vying for attention, how can you make your brand stand out? The answer is SEO…",
  },
  {
    title: "Harnessing the Power of Social Media Marketing",
    img: "/images/social-power.jpg",
    excerpt:
      "With over 4.2 billion active users worldwide, leverage social media to connect with your audience…",
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
      </div>
    </main>
          
    </>
  )
}



export default page

