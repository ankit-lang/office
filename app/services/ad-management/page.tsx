"use client";
import { NavbarDemo } from '@/components/Navbar';
import { motion } from 'framer-motion';
import React, { useState } from 'react'


const platforms = [
  { title: '1. Google Ads Management', img: "/ad/1.png", text: `Our Google Ads Management services are designed to maximize your visibility on the world’s largest search engine. We manage Search Ads, Display Ads, Shopping Ads, App Install Ads, and Dynamic Remarketing to meet your goals.` },
  { title: '2. Facebook Ads', img: "/ad/2.png", text: `With billions of active users, Facebook is a powerful platform for reaching your target audience. Our Facebook Ads services focus on creating engaging and effective campaigns to grow your brand and drive conversions.` },
  { title: '3. Instagram Ads', img: "/ad/3.png", text: `Instagram is all about visuals, and our Instagram Ads services leverage this platform’s creative strengths with photo, video, and Stories ads to drive engagement and conversions.` },
  { title: '4. Bing Ads', img: "/ad/4.png", text: `Bing Ads are a valuable addition to your digital marketing strategy, offering access to a unique audience. We manage Search and Shopping campaigns on Bing to diversify your reach and reduce CPC.` },
  { title: '5. LinkedIn Ads', img: "/ad/5.png", text: `For B2B marketing, LinkedIn is an essential platform. Our LinkedIn Ads services help you target professionals and decision-makers through Sponsored Content, InMail, and Display Ads.` },
  { title: '6. Twitter Ads', img: "/ad/6.png", text: `Twitter Ads deliver fast-paced reach for real-time engagement. Our services include Promoted Tweets, Trends, and Accounts to help you engage with your audience instantly.` },
];
const campaignTypes = [
  'Search Ads',
  'Display Ads',
  'Shopping Ads',
  'App Install Ads',
  'Dynamic Remarketing',
];

const faqs = [
  { q: 'What platforms do you manage for ad campaigns?', a: 'We manage ad campaigns on Google, Facebook, Instagram, Bing, LinkedIn, and Twitter.' },
  { q: 'How do you ensure the best ROI for ad campaigns?', a: 'We ensure the best ROI through comprehensive keyword research, optimized targeting, effective remarketing strategies, and continuous performance analysis.' },
  { q: 'Can you handle remarketing campaigns?', a: 'Yes, we specialize in remarketing campaigns to re-engage previous visitors and increase conversion rates.' },
  { q: 'What types of Google Ads campaigns do you manage?', a: 'We manage various Google Ads campaigns, including Search Ads, Display Ads, Shopping Ads, App Install Ads, and Dynamic Remarketing.' },
];

const ppcProcess = [
  'Keyword Research: We conduct thorough keyword research to identify the most relevant and high-performing keywords for your ads.',
  'Audience Targeting: We refine your audience targeting to ensure your ads reach the right people at the right time.',
  'Ad Creation: We develop persuasive ad creatives and copy that resonate with your target audience.',
  'Bid Management: We continuously optimize bids to maximize ROI and stay within budget.',
  'Analytics & Optimization: We track performance metrics and adjust strategies to improve results over time.',
];
const page = () => {
       const [openIndex, setOpenIndex] = useState<Number | null>(null);

  return (
    <div>
      <NavbarDemo />
      <div className="pt-32">
 <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      {/* Intro */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">Ads Management Agency in Delhi NCR</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Maitreya Digital is your go-to Ads Management Agency in Delhi NCR, specializing in creating and managing high-performance ad campaigns across various platforms. Our experts leverage advanced tools and proven strategies to ensure your ads reach the right audience, generate high-quality leads, and achieve the best possible ROI.
        </p>
      </motion.div>

      {/* Platform Services */}
      <div className="max-w-5xl mx-auto space-y-12">
        {platforms.map((item, idx) => {
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
              <img src={item.img} alt={item.title} className="w-full lg:w-1/3 object-contain" />
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* PPC Process */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Our PPC Optimization Process: This Is How We Get the Best ROI for Your Campaigns
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {ppcProcess.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>

      {/* Campaign Types */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Types of Campaigns This Trusted PPC Management Company in Delhi Can Handle
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {campaignTypes.map((type, i) => (
              <li key={i}>{type}</li>
            ))}
          </ul>
        </div>
        <img src={"/ad/7.png"} alt="Campaign Types" className="w-full lg:w-1/3 mt-6 lg:mt-0 object-contain" />
      </div>

      {/* FAQ */}
      <section
        className="mt-20 py-16"
      //   style={{ backgroundImage: `url(${faqBg})`, backgroundSize: 'cover' }}
      >
        <div className="max-w-3xl mx-auto text-white">
          <h3 className="text-3xl font-bold mb-8 text-black "> FAQ</h3>
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