"use client";
import { CardSpotlightDemo } from '@/components/Cardspot'
import { NavbarDemo } from '@/components/Navbar'
import React from 'react'
import { motion } from 'framer-motion';
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import CurvedLoop from '@/components/Curvedloop';
import Carousel from '@/components/aceCaroursel';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';
import Foot from '@/components/Footer';


const page = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
   <>
   <div className="fixed z-[100] w-full">
   <NavbarDemo  />
   </div>

   <div className="flex flex-wrap md:flex-none gap-10 mx-auto pt-24 p-4 md:p-32">

   <CardSpotlightDemo  title="Leading the Digital Revolution: Maitreya Digital's Journey" description={"Since our inception in 2022, Maitreya Digital has been at the forefront of revolutionizing the digital marketing landscape. With a passion for innovation and a commitment to excellence, we have established ourselves as a leading *digital marketing agency* dedicated to helping businesses thrive in the ever-evolving online world "} />
   
   <CardSpotlightDemo title="
Our Commitment to Excellence and Client-Centric Approach"  description="
Driven by a relentless pursuit of excellence, we have continually expanded our expertise and refined our strategies to deliver unparalleled results for our clients. Our team comprises seasoned professionals with diverse backgrounds in digital marketing, design, and technology, allowing us to offer a comprehensive suite of services tailored to meet the unique needs of each client. We work closely with our clients to understand their goals, challenges, and target audience, allowing us to develop customized solutions that drive real, measurable results."/>
   
   <CardSpotlightDemo title="Building Lasting Partnerships and Driving Digital Innovation" description="
Our commitment to excellence extends beyond just delivering exceptional results; it's about building lasting partnerships based on trust, integrity, and mutual success. With Maitreya Digital as your trusted digital partner, you can rest assured that your brand's online presence is in good hands. As we continue to push the boundaries of digital innovation, we remain steadfast in our mission to empower businesses to thrive in the digital age. Join us on this journey, and let's unlock new possibilities for your brand together" />
   
   </div>

<div className="flex flex-col items-center justify-center pl-32 pr-32  ">
    
<div className="w-[80vw] h-[30vh]   ">
<CurvedLoop 
  marqueeText="Why ✦ Choose ✦ Maitreya ✦  Digital ✦ "
  speed={3}
  curveAmount={200}
  direction="left"
  interactive={true}
  className="custom-text-style"
/>
</div>

<div style={{ height: '500px', position: 'relative' }}>
  <Carousel
    baseWidth={360}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={true}
  />
</div>
 {/* <TextGenerateEffect words={"Why Choose Maitreya Digital"} /> */}
 
</div>
 <section className="bg-white px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Our Mission */}
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Through innovative solutions and tailored approaches, we empower businesses to navigate the complexities of the digital landscape with confidence. Our team is driven by a passion for excellence and a relentless pursuit of success, ensuring that every client receives personalized attention and strategic guidance tailored to their unique goals and challenges. At Maitreya Digital, we don't just provide services; we forge partnerships built on trust, integrity, and mutual growth. Join us as we embark on a journey to unlock the full potential of your brand in the digital realm.
            </p>
          </div>
          <motion.img
            src={"https://www.maitreyadigital.com/mission.jpg"}
            alt="Our Mission Illustration"
            className="w-full lg:w-1/2 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-6 lg:space-y-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={"https://www.maitreyadigital.com/approach.jpg"}
            alt="Our Approach Illustration"
            className="w-full lg:w-1/2 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              At Maitreya Digital, what distinguishes us is our unwavering focus on our clients. We recognize that each business is distinct, which is why we prioritize understanding your specific requirements and objectives. By taking the time to listen and comprehend your goals, we can customize our strategies accordingly. Whether your aim is to enhance brand visibility, drive traffic to your website, or increase conversion rates, our team possesses the expertise and experience to assist you in achieving your goals.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
    {/* <GoogleGeminiEffectDemo/> */}
    <Foot/>

   </>
  )
}

export default page