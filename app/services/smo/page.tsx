"use client";
import { NavbarDemo } from '@/components/Navbar';
import React from 'react'
import { motion } from 'framer-motion';


const services = [
  {
    title: '1. Harnessing the Power of Social Media for Marketing',
    text: `With over one-third of the world's population active on social media platforms, it's undeniably one of the most powerful channels for brand growth. Our Social Media Management Company leverages the reach and engagement of platforms like Facebook, Twitter, Instagram, LinkedIn, and YouTube to expand your brand's visibility. Through targeted ad campaigns, engaging content calendars, and real-time analytics, we help you build a loyal community and drive conversions across the digital landscape.`,
    img: "/smo/1.png",
  },
  {
    title: '2. Social Media Optimization',
    text: `Social Media Optimization (SMO) involves enhancing your profiles and content strategy to increase engagement, follower growth, and brand awareness. We perform in-depth audits of your current social channels, optimize bios, hashtags, and posting schedules, and craft platform-specific content to ensure maximum visibility and reach.`,
    img: "/smo/2.png",
  },
  {
    title: '3. Facebook Marketing Solutions',
    text: `As a premier Facebook marketing agency, we create data-driven campaigns that target your ideal audience segments. From carousel ads to video promotions and lead generation forms, our team designs and manages your Facebook ad spend for maximum ROI. We continuously test creatives and optimize audiences to scale your results.`,
    img: "/smo/3.png",
  },
  {
    title: '4. Masterful Twitter Management Solutions',
    text: `Twitter demands timely, concise messaging. Our Twitter management services include real-time tweet scheduling, hashtag research, audience engagement, and influencer outreach. We track trending topics and craft your voice for impactful conversations that drive brand recall.`,
    img: "/smo/4.png",
  },
  {
    title: '5. LinkedIn Management Services',
    text: `With LinkedIn's professional network at your disposal, we optimize your company page, publish thought leadership articles, and run precision-targeted ad campaigns. Our LinkedIn strategies boost lead generation, recruitment outreach, and B2B partnerships through sponsored content and InMail campaigns.`,
    img: "/smo/5.png",
  },
  {
    title: '6. Instagram Management Solutions',
    text: `Instagram's visual-first platform requires stunning imagery and compelling stories. We curate high-quality posts, create interactive Stories, Reels, and IGTV content, and engage with your followers daily. Our hashtag strategy and influencer collaborations drive authentic growth and brand loyalty.`,
    img: "/smo/6.png",
  },
  {
    title: '7. Pinterest Management Solutions',
    text: `Pinterest is a powerful discovery engine for lifestyle and e-commerce brands. We design eye-catching pins, create optimized boards, and implement rich pin schema to increase your organic reach. Our Pinterest ad campaigns are tailored to drive traffic and sales through Promoted Pins.`,
    img: '/smo/7.png',
  },
  {
    title: '8. YouTube Channel Management',
    text: `Video content captivates audiences longer. Our YouTube management includes channel setup, SEO-optimized video titles/descriptions, thumbnail design, and ad campaign management. We analyze watch-time metrics to refine your video strategy and grow subscribers organically.`,
    img: "/smo/8.png",
  },
];
const page = () => {
  return (
    <div>
      <NavbarDemo />
      <div className="pt-32">
             <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {services.map((svc, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              key={idx}
              className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:space-x-8 space-y-6 lg:space-y-0`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img src={svc.img} alt={svc.title} className="w-full lg:w-1/3 object-contain" />
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {svc.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
      </div>
        
    </div>
  )
}

export default page