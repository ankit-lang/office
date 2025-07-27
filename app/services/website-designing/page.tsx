"use client";
import { NavbarDemo } from "@/components/Navbar";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Page = () => {
  const steps = [
    "Analysis: We start by understanding your business, your market, your competitors, and your target audience. This stage sets the foundation for all design and development work.",
    "Your Team: You’ll meet the dedicated team of designers, developers, and project managers who will bring your vision to life. This team stays with you through every phase of the process.",
    "Design Stage: Our designers create a visual representation of your website, focusing on user experience and brand alignment. We ensure that the design is both aesthetically pleasing and functional.",
    "Development Stage: Our developers turn designs into reality using the latest web technologies. They ensure your site is fast, secure, and error-free.",
    "Launch: After rigorous testing and quality assurance, your website goes live. But our service doesn’t stop here; we continue to offer support and maintenance to ensure smooth operation.",
  ];

  const faqs = [
    {
      q: "Why should I choose Maitreya Digital for my website development?",
      a: "Maitreya Digital combines technical expertise, innovative design, and a client-centric approach to deliver high-quality websites that meet your business needs and exceed expectations.",
    },
    {
      q: "How long does it take to build a website?",
      a: "The timeline varies depending on the complexity and scope of the project. Generally, it can take anywhere from a few weeks to several months. We provide a timeline estimate after the initial analysis stage.",
    },
    {
      q: "Are your websites mobile-friendly?",
      a: "Absolutely! We ensure all our websites are responsive, meaning they look great and function well on all devices, from desktops to smartphones.",
    },
    {
      q: "What kind of support do you offer post-launch?",
      a: "We offer various support packages that include site maintenance, security updates, and content updates. Our goal is to ensure your website continues to operate flawlessly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <NavbarDemo />
      <div className="p-32">
        <section className="px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Best Website Development Company in India
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Maitreya Digital stands out as the best website development company in India, recognized for its innovative
              solutions, cutting-edge technology, and exceptional customer service. We specialize in creating custom websites
              that are not only visually appealing but also functionally robust, helping businesses across various industries
              to maximize their online presence.
            </p>
          </motion.div>

          {/* Services Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="order-2 lg:order-1 text-gray-700"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What Kind of Website Do You Need?
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>
                  <strong>Corporate Websites:</strong> Professional sites designed to reflect your brand's integrity and core values.
                </li>
                <li>
                  <strong>E-commerce Sites:</strong> Robust online stores with intuitive navigation and secure payment solutions.
                </li>
                <li>
                  <strong>Portfolio Websites:</strong> Beautifully crafted sites to showcase your work and attract potential clients or employers.
                </li>
                <li>
                  <strong>Landing Pages:</strong> Optimized for marketing campaigns to convert visitors into leads and sales.
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src={"/webdesign/website.webp"} alt="Website Development Illustration" className="w-full max-w-sm" />
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-gray-700"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Take Your Business Success to Another Level
              </h2>
              <p className="leading-relaxed">
                Elevate your business with Maitreya Digital’s affordable website designing services. Our team combines aesthetics
                with functionality to create websites that not only look great but also perform excellently. By focusing on your
                business goals and the needs of your target audience, we design websites that facilitate a seamless user
                experience, drive engagement, and convert visitors into loyal customers.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <img src={"/webdesign/website.webp"} alt="Business Growth Illustration" className="w-full max-w-sm" />
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16">
          {/* Process Section */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Website Designing Process</h2>
            <motion.img
              src={"/webdesign/2.png"}
              alt="Process Illustration"
              className="w-full max-w-md mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                <span className="text-xl font-semibold text-indigo-600">{idx + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-20 py-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-8">6. FAQ</h3>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <div key={idx} className="bg-black bg-opacity-30 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                      aria-expanded={openIndex === idx}
                    >
                      <span className="font-medium">Q{idx + 1}: {item.q}</span>
                      <span>{openIndex === idx ? "-" : "+"}</span>
                    </button>
                    {openIndex === idx && (
                      <motion.div
                        className="px-6 pb-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-white">A{idx + 1}: {item.a}</p>
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
  );
};

export default Page;