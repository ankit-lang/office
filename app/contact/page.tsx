"use client"
import { NavbarDemo } from '@/components/Navbar'
import SplitText from '@/components/Staggertext'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarDemo />
       {/* <div className="flex items-center pt-20 mb-10 relative z-[100] justify-center">
                        <SplitText
                    text="Contact"
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
                        <div className="text-3xl font-bold pt-32 text-center ">
                          Contact us
                        </div>
                        <ContactSection />
                        {/* <GoogleGeminiEffectDemo/> */}
                        <div className="">

                        <Foot/>
                        </div>
    </div>
  )
}

export default page

// app/components/ContactSection.tsx
// 'use client' 

// import React from 'react'
import Image from 'next/image'
import { HiLocationMarker, HiMail, HiPhone, HiArrowSmUp } from 'react-icons/hi'
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini'
import Foot from '@/components/Footer'

export function ContactSection() {
  return (
    <section className="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12">
      {/* Left Info Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 relative">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in touch</h2>
        <p className="text-gray-500 mb-8">
          Let’s start the conversation! Contact us today to discuss how we can help elevate
          your brand’s online presence and achieve your business objectives.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 text-gray-600">
          <div className="flex items-start space-x-4">
            <HiLocationMarker className="text-2xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800">Location:</h3>
              <address className="not-italic text-gray-500">
                C-1/61 Sanjay Enclave<br />
                Uttam Nagar, New Delhi, 110059<br />
                India
              </address>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <HiMail className="text-2xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800">Email:</h3>
              <p className="text-gray-500">info@maitreyaDigital.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <HiPhone className="text-2xl text-teal-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800">Contact No:</h3>
              <p className="text-gray-500">+91 9899790360, 011‑42487285</p>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 transition"
          aria-label="Back to top"
        >
          <HiArrowSmUp size={24} />
        </button> */}
      </div>

      {/* Right Contact Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <textarea
          rows={6}
          placeholder="Message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
        />

        <button
          type="submit"
          className="mt-4 bg-teal-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-teal-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
