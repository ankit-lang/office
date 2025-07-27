"use client";
import { NavbarDemo } from '@/components/Navbar';
import React, { useState } from 'react'
  // Remove this duplicate useState declaration; useState should be called inside the component and with the correct type.
import { motion } from 'framer-motion';



const services = [
  {
    title: '1. Tell Your Brand Story Effectively Through Video',
    text: `In today’s digital landscape, video content is one of the most powerful tools for storytelling. At Maitreya Digital, we help you tell your brand story effectively through video. Our expert team collaborates with you to understand your brand and audience, crafting videos that captivate and convert.`,
    img: "/videoedit/1.png",
  },
  {
    title: '2. Explainer Video Services That We Offer',
    text: `Explainer videos are a fantastic way to simplify complex ideas and present them in an engaging manner. We specialize in scriptwriting, storyboarding, animation, and branding to make your explainer videos truly impactful.`,
    img: "/videoedit/2.png",
  },
  {
    title: '3. Social Awareness Video',
    text: `Creating impactful social awareness videos is one of our specialties. We craft videos that address important social issues, sparking emotion and conversation to help you spread your message effectively.`,
    img: "/videoedit/3.png",
  },
  {
    title: '4. Social Media Videos',
    text: `In the fast-paced world of social media, attention is key. Our social media video services focus on creating short-form, engaging clips optimized for platforms like Instagram, Facebook, and TikTok to maximize reach and engagement.`,
    img: "/videoedit/4.png",
  },
  {
    title: '5. SaaS Video',
    text: `For software-as-a-service (SaaS) companies, clear and concise video content is essential. We create demo videos, feature walkthroughs, and testimonial videos that highlight the value of your SaaS offering.`,
    img: "/videoedit/5.png",
  },
  {
    title: '6. Tutorial Video',
    text: `Tutorial videos are an excellent way to educate your audience. We produce tutorial content that is clear, concise, and visually engaging, making it easy for viewers to follow along and learn.`,
    img: "/videoedit/6.png",
  },
  {
    title: '7. Whiteboard Video',
    text: `Whiteboard videos are perfect for explaining intricate concepts in a simple and engaging manner. Our whiteboard animations combine hand-drawn illustrations and voiceover to deliver memorable educational content.`,
    img: "/videoedit/7.png",
  },
  {
    title: '8. E-Learning Video',
    text: `Enhance your online courses with our e-learning video services. We create interactive and engaging video modules that keep learners motivated and improve knowledge retention.`,
    img: "/videoedit/1.png",
  },
];

const faqs = [
  { q: 'What types of videos can Maitreya Digital create?', a: 'We produce marketing videos, explainer videos, social awareness videos, SaaS videos, tutorial videos, whiteboard videos, and e-learning videos.' },
  { q: 'How does the video creation process work at Maitreya Digital?', a: 'Our process involves scriptwriting, storyboarding, animation/design, voiceover recording, and post-production.' },
  { q: 'Are your videos optimized for different platforms?', a: 'Yes. We deliver multiple versions tailored to Instagram, Facebook, YouTube, and more to ensure maximum reach and engagement.' },
  { q: 'How long does it take to produce a video?', a: 'Timeline varies with complexity and length; typically 2-6 weeks after finalizing requirements.' },
];

const page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div>
      <NavbarDemo />
      <div className="pt-32">
             <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >Top Video Editing Service</motion.h2>
      </div>

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
                <p className="text-gray-600 leading-relaxed">{svc.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ */}
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