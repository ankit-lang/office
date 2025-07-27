"use client";
import { NavbarDemo } from "@/components/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "1. Graphic Design Service",
    text: `At Maitreya Digital, our graphic design services are crafted to bring your brand story to life. We are dedicated to creating designs that not only captivate but also convert. From initial concept to final output, our comprehensive graphic design services are tailored to meet the evolving needs of our clients, ensuring maximum satisfaction and brand enhancement.\n\nOur service portfolio includes: \n- Logo and Brand Identity Design\n- Digital Design (social & marketing)\n- Marketing Materials (flyers, brochures, posters)\n- Packaging Design`,
    img: "/graphic/1.png",
  },
  {
    title: "2. Explainer Video Services",
    text: `In the digital age, explainer videos have become a vital tool for conveying complex ideas simply and effectively. Our team specializes in producing high-quality explainer videos that are not only informative but also engaging and visually appealing. Whether 2D animations, 3D graphics, or live-action filming, we tailor our services to meet your specific goals. These videos are perfect for enhancing your marketing efforts and boosting customer understanding.`,
    img: "/graphic/2.png",
  },
  {
    title: "3. If You Can Imagine It, We Can Design It",
    text: `Creativity knows no bounds at Maitreya Digital. ‘If you can imagine it, we can design it’ is not just a slogan—it’s a promise. Our process involves closely working with you to understand your vision and translate abstract concepts into tangible designs that resonate with your audience.`,
    img: "/graphic/3.png",
  },
  {
    title: "4. How Can We Help You?",
    text: `We understand that each business has unique needs and challenges. Our approach involves a personalized consultation to understand your objectives, then developing customized strategies encompassing graphic design, video production, and more to enhance your brand presence and achieve your business goals effectively.`,
    img: "/graphic/4.png",
  },
];

const faqs = [
  {
    q: "What types of graphic design services do you offer?",
    a: "We offer a full range of services, including logo design, corporate branding, digital and print marketing materials, packaging design, and much more.",
  },
  {
    q: "How do your explainer video services work?",
    a: "We handle everything from storyboarding and concept creation to animation or live-action filming and post-production.",
  },
  {
    q: "What makes Maitreya Digital a top choice for graphic design and video services?",
    a: "Our commitment to quality, customized approach, and comprehensive suite of services make us a leader in the digital marketing and design industries.",
  },
];
const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <NavbarDemo />
      <div className="pt-32">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
          {/* Title & Intro */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Top Graphic Design Company in India
            </h2>
            <p className="text-gray-600 leading-relaxed">
              As a premier graphic design company, Maitreya Digital stands at the
              forefront of creative innovation and design expertise. We transform
              your vision into visual masterpieces crafted to communicate your
              brand’s message compellingly.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((svc, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center lg:space-x-8 space-y-6 lg:space-y-0`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full lg:w-1/3 object-contain"
                  />
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {svc.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 py-16">
            <div className="max-w-3xl mx-auto ">
              <h3 className="text-3xl font-bold mb-8"> FAQ</h3>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-black text-white  rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                      aria-expanded={openIndex === idx}
                    >
                      <span className="font-medium">
                        Q{idx + 1}: {item.q}
                      </span>
                      <span>{openIndex === idx ? "-" : "+"}</span>
                    </button>
                    {openIndex === idx && (
                      <motion.div
                        className="px-6 pb-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-200">
                          A{idx + 1}: {item.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;