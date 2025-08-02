"use client";
import { IconRating12Plus } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Pattern from './Pattern';


const testimonials = [
  {
    text:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
   rating:5,
    bgImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    rating:5,
    bgImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    rating:5,
    bgImage: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    rating:5,
    bgImage: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    rating:5,
    bgImage: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const testimonials = [
//   {
//     name: 'Er. Pranav Dwivedi',
//     rating: 5,
//     text: "I've had the pleasure of working with Maitreya Digital for several years now, and I continue to be impressed by their professionalism and dedication to client success. Their team's expertise in digital marketing is unparalleled, and I wouldn't hesitate to recommend them to anyone looking to elevate their online presence.",
//     bgImage: '/path/to/image1.jpg',
//   },
//   {
//     name: 'Ms. Anjali Sharma',
//     rating: 5,
//     text: "Maitreya Digital revamped our website and SEO strategy — the results have been incredible! Traffic is up 75% year over year and leads have doubled. Their transparent reporting and responsive support make them a true partner.",
//     bgImage: '/path/to/image2.jpg',
//   },
//   {
//     name: 'Mr. Rakesh Patel',
//     rating: 4,
//     text: "Great team with fresh ideas! From social media campaigns to video edits, they delivered on time and within budget. Very happy with the creative approach.",
//     bgImage: '/path/to/image3.jpg',
//   },
// ];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { name, rating, text, bgImage } = testimonials[index];

  return (
      <Pattern>
    <section
      className="relative w-full h-96 overflow-hidden flex items-center justify-center text-center text-white"
      // style={{
      //   background: `url(${bgImage}) center/cover no-repeat`,
      // }}
    >
      {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
      <div className="relative z-10 max-w-2xl px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{name}</h3>
        <div className="flex justify-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 mx-0.5" />
          ))}
        </div>
        <p className="italic leading-relaxed">“{text}”</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 flex space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
className={`w-3 h-3 rounded-full transition-all ${
  i === index ? 'bg-white w-4 h-4' : 'bg-white bg-opacity-50'
}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
    </Pattern>
  );
};

export default TestimonialCarousel;
