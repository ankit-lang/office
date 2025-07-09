"use client";
import { CardSpotlightDemo } from '@/components/Cardspot'
import { NavbarDemo } from '@/components/Navbar'
import React from 'react'

import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import CurvedLoop from '@/components/Curvedloop';
import Carousel from '@/components/aceCaroursel';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';


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

<div style={{ height: '800px', position: 'relative' }}>
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
    <GoogleGeminiEffectDemo/>

   </>
  )
}

export default page