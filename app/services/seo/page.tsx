"use client";
import { NavbarDemo } from '@/components/Navbar';
import React from 'react'
import { motion } from 'framer-motion';
const seoItems = [
  {
    title: '1. Best SEO Agency in Delhi NCR',
    text: `At Maitreya Digital, we're recognized as the leading SEO agency in Delhi NCR, specializing in elevating online visibility and driving organic traffic. Our dedicated team has a proven track record of delivering exceptional results for businesses across various industries. As your trusted SEO agency partner, we meticulously craft customized strategies tailored to your specific goals and objectives.`,
    img: "/seo/1.png",
  },
  {
    title: '2. Our Result-Oriented SEO Services in Delhi',
    text: `As the premier SEO agency in Delhi NCR, our services are meticulously crafted to propel your business to new heights. With a strategic approach, we work to not just enhance your online presence but also to generate tangible outcomes through cutting-edge SEO techniques and in-depth analysis, we specialize in driving organic traffic to your website, thereby enhancing visibility across search engines. Our ultimate goal is to translate this increased visibility into tangible growth for your business.`,
    img: "/seo/2.png",
  },
  {
    title: '3. How Can We Help You Grow Your Business Through SEO?',
    text: `At the Best SEO Agency in Delhi NCR, we recognize the distinctiveness of each business, prompting us to customize our SEO strategies according to your goals and objectives. Whether your aim is to boost website traffic, generate more leads, or enhance online sales, we possess the proficiency and insight to accomplish your aspirations.`,
    img: "/seo/3.png",
  },
  {
    title: '4. We Have an Expert and Specialized Team',
    text: `Boost your online presence with the premier SEO Agency in Delhi NCR. Our seasoned team of SEO specialists leverages years of industry expertise and a profound comprehension of search engine algorithms. With a meticulous focus on keyword research, on-page optimization, and strategic link building, we propel your website toward unparalleled visibility and success.`,
    img: "/seo/4.png",
  },
  {
    title: '5. Our SEO Work Includes',
    text: `- Comprehensive website audits to identify areas for improvement
- Keyword research to target the most relevant and high-traffic keywords
- On-page optimization to ensure your website is search engine friendly
- Off-page optimization to build quality backlinks and improve domain authority
- Regular performance tracking and reporting to measure the success of our efforts`,
    img: "/seo/5.png",
  },
];
const page = () => {
  return (
    <div>
      <NavbarDemo/>
      <div className="container">
              <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {seoItems.map((item, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              key={idx}
              className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:space-x-8 space-y-6 lg:space-y-0`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full lg:w-1/3 object-contain"
              />
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {item.text}
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