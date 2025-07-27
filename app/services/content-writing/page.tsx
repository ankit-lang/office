"use client";
import { NavbarDemo } from '@/components/Navbar';
import React, { useState } from 'react'

import { motion } from 'framer-motion';

const services = [
  {
    title: '1. Content Marketing',
    text: `Content marketing is more than just creating and sharing content; it’s about crafting relevant, valuable, and consistent content to attract and retain a clearly defined audience — and ultimately, to drive profitable customer actions. At Maitreya Digital, we take a strategic approach to content marketing by understanding your business objectives and audience needs, which allows us to create tailored content that aligns perfectly with your marketing goals.\n\nOur comprehensive content marketing services include:\n- Content Strategy: Developing a plan that supports both short-term wins and long-term goals.\n- Content Creation: Crafting high-quality, engaging content that resonates with your audience.\n- Content Distribution: Strategically sharing your content across various channels to maximize reach.\n- Influencer Marketing: Collaborating with industry influencers to expand your content’s credibility and reach.`,
    img: "/contentwrite/1.png",
  },
  {
    title: '2. Blogging',
    text: `Blogging is a powerful tool in content marketing, offering a way to provide value through in-depth insights, advice, and entertainment. Maitreya Digital’s blogging services are tailored to position your brand as a thought leader. We focus on creating SEO-optimized blog posts that not only attract traffic but also engage readers and encourage interaction. From topic ideation to writing and publishing, we manage the entire blogging process to enhance your content marketing efforts.`,
    img: "/contentwrite/2.png",
  },
  {
    title: '3. Publishing on External Platforms',
    text: `At our Content Marketing agency, we specialize in crafting high-quality, SEO-optimized blog posts and articles to drive traffic and engagement. From guest posting on authoritative websites to submitting to industry platforms, we handle outreach, content adaptation, and relationship building to secure placements that boost your brand’s visibility and credibility.`,
    img: "/contentwrite/3.png",
  },
  {
    title: '4. Article Submission',
    text: `Article submission is another facet of our content marketing strategy designed to boost your online presence and SEO. We distribute informative, engaging, and well-researched articles to high-authority websites. This process drives backlinks, improves domain authority, and supports both your lead-generation and brand-awareness efforts.`,
    img: "/contentwrite/4.png",
  },
  {
    title: '5. Pinterest Management Solutions',
    text: `To expand your reach and establish authority, we harness the power of Pinterest through eye-catching pins, optimized boards, and trend-based content. Our campaigns include detail-oriented pin designs, keyword-rich descriptions, and strategic board curation to drive traffic and brand discovery.`,
    img: "/contentwrite/5.png",
  },
  {
    title: '6. YouTube Channel Management',
    text: `Unlock the full potential of your YouTube channel with our channel management services. From crafting engaging video titles, thumbnails, and descriptions to running targeted ad campaigns, we help you grow subscribers and maximize watch-time. We analyze performance metrics to continually refine your content strategy for sustained channel growth.`,
    img: "/contentwrite/6.png",
  },
];

const faqs = [
  {
    q: 'What is content marketing and why is it important?',
    a: 'Content marketing involves creating and distributing valuable, relevant, and consistent content to attract and retain a target audience. It builds trust with customers, improves conversions, and supports other digital marketing strategies.',
  },
  {
    q: 'How does Maitreya Digital measure the success of a content marketing campaign?',
    a: 'We use metrics such as website traffic, engagement rates, lead generation, and conversions to measure the effectiveness of our content marketing campaigns.',
  },
  {
    q: 'What makes Maitreya Digital different from other content marketing agencies in Delhi NCR?',
    a: 'Our customized approach, extensive network on multiple online media distribution platforms, and commitment to delivering measurable results set us apart.',
  },
];

const page = () => {
       const [openIndex, setOpenIndex] = useState<Number | null>(null);
  return (
    <div>
      <NavbarDemo />
      <div className="pt-32">
           <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">Content Marketing Agency in Delhi NCR</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Maitreya Digital stands as a premier Content Marketing Agency in Delhi NCR, specializing in creating compelling, innovative, and results-driven content strategies that enhance brand visibility and engage your audience across multiple channels.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((svc, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              key={idx}
              className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:space-x-8 space-y-6 lg:space-y-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={svc.img} alt={svc.title} className="w-full lg:w-1/3 object-contain" />
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{svc.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{svc.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <section
        className="mt-20 py-16"
      //   style={{ backgroundImage: `url(${faqBg})`, backgroundSize: 'cover' }}
      >
        <div className="max-w-3xl mx-auto text-white">
          <h3 className="text-3xl font-bold text-black mb-8"> FAQ</h3>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-black  rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium">Q{idx + 1}: {item.q}</span>
                  <span>{openIndex === idx ? '-' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-gray-200">A{idx + 1}: {item.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
      </div>
        
    </div>
  )
}

export default page