"use client"
import { NavbarDemo } from '@/components/Navbar'
import SplitText from '@/components/Staggertext'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarDemo />
       {/* <div className="flex items-center pt-20 mb-10 relative z-[100] justify-center">
                        <SplitText
                    text="Career And Courses"
                    className="text-5xl font-semibold text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    
                  />
                        </div> */}
    
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Career Opportunities in Digital Marketing
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Are you ready to embark on an exciting journey into the world of digital
          marketing? At Maitreya Digital, we offer a range of comprehensive courses
          designed to equip you with the skills and knowledge you need to thrive in
          this rapidly growing industry.
        </p>
      </div>

      {/* Two‑column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <div className="w-full h-64 sm:h-80 relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://www.maitreyadigital.com/mission.jpg"
            alt="Digital Marketing Career Illustration"
            
            className="object-cover"
          />
        </div>

        {/* Right content */}
        <div className="space-y-8">
          {/* Why Digital Marketing? */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <span className="mr-2 text-teal-500 text-xl">✓</span>
              Why Digital Marketing?
            </h2>
            <p className="mt-3 text-gray-600">
              Digital marketing is not just a job – it’s a dynamic and rewarding
              career path that offers endless opportunities for growth and
              advancement. With the rise of online commerce and the increasing
              importance of digital channels, the demand for skilled digital
              marketers has never been higher.
            </p>
          </div>

          {/* Why Choose Maitreya’s Courses? */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <span className="mr-2 text-teal-500 text-xl">✓</span>
              Why Choose Maitreya’s Digital Marketing Courses?
            </h2>
            <p className="mt-3 text-gray-600">
              Our courses are designed to provide you with a comprehensive overview
              of digital marketing roles, tools, and skill sets. Through a
              combination of online and offline learning, live webinars with
              industry experts, marketing simulations, and live projects, you’ll
              gain hands-on experience and practical knowledge that will set you
              apart in the job market.
            </p>
          </div>
        </div>
      </div>
    </section>
    <ProgramsSection />
    </div>
  )
}

export default page
// import React from 'react'
import ProgramCard from './ProgramCard'
import FeatureCard from './FeatureCard'
import WhoCanCard from './WhoCanCard'
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini'
import Foot from '@/components/Footer'

export  function ProgramsSection() {
  return (
    <div className="space-y-24">
      {/* Programs to Choose From */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Programs to Choose From
        </h2>
        <div className="bg-pink-500 rounded-lg overflow-hidden flex flex-col lg:flex-row items-center">
          {/* Left bullets */}
          <div className="text-white p-8 lg:w-1/2 space-y-6">
            <p>
              <span className="font-bold">• ACE:</span>{' '}
              A 5‑month course offering a solid foundation in digital marketing use‑cases.
            </p>
            <p>
              <span className="font-bold">• LEAP:</span>{' '}
              A 4‑month foundation course with placement assistance to kickstart your career in digital marketing.
            </p>
            <p>
              <span className="font-bold">• GROW:</span>{' '}
              A 6‑month program including live projects and guaranteed placements for a successful career transition.
            </p>
          </div>
          {/* Right illustration */}
          <div className="lg:w-1/2 p-8 flex justify-center">
            <img
              src="https://www.maitreyadigital.com/why.jpg"
              alt="Choose Program"
              className="max-h-48 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Certification Program */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Certification Program in Communication Skills
            </h3>
            <p className="text-gray-600 mb-6">
              Effective communication is essential in any profession. Our certification program in
              communication skills will equip you with the tools and techniques you need to
              communicate ideas in a way that is impactful, relevant, and comprehensible to your
              target audience.
            </p>
            <button className="self-start bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
              Call To Action
            </button>
          </div>
          <div className="md:w-1/2 relative h-48 md:h-auto">
            <img
              src="https://www.maitreyadigital.com/certificate.jpg"
              alt="Communication Skills"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What You Become After The Program */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          What You Become After The Program
        </h2>
        <p className="text-gray-600 mb-8">
          Our courses prepare you for a variety of exciting career opportunities in digital marketing,
          including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            'Social Media Analyst',
            'Social Media Manager',
            'Sr. PPC Analyst',
            'Content Marketing Executive',
            'Digital Marketing Executive',
            'Online Reputation Executive',
          ].map((title) => (
            <FeatureCard key={title} title={title} />
          ))}
        </div>
      </section>

      {/* Who Can Do It? */}
      <section className="max-w-7xl mx-auto px-4 sm:px6 mb-10 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Who Can Do It?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our courses are suitable for students, housewives, job seekers, working professionals,
          and business owners looking to expand their skill set and explore new career opportunities.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <WhoCanCard
            icon="https://www.maitreyadigital.com/services-1.jpg"
            title="Who Can Do It?"
            text="Students, housewives, working professionals, and business owners..."
          />
          <WhoCanCard
            icon="https://www.maitreyadigital.com/services-2.png"
            title="Free Tools & Certification"
            text="Access to industry‑leading tools, real‑world projects, and recognized certification."
          />
          <WhoCanCard
            icon="https://www.maitreyadigital.com/services-2.png"
            title="Companies That Hire Digital Marketers"
            text="GoPro, Amazon, and dozens of startups seek our program alumni."
          />
        </div>
      </section>
      {/* <GoogleGeminiEffectDemo/> */}
      <Foot/>
    </div>
  )
}
