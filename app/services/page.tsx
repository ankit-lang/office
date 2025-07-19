import { NavbarDemo } from '@/components/Navbar'
import React from 'react'
import ChromaGrid from '../../components/Chomagrid'
import SplitText from '@/components/Staggertext';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';

const items = [
   {
    image: "https://www.maitreyadigital.com/service-1.webp",
    title: "Website development",
    subtitle: "Web Design, Web Development, Deployement, Maintainance",
    handle: "@maitreya",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "/website-development"
  },
  {
    image: "https://www.maitreyadigital.com/services-2.png",
    title: "Website development",
    subtitle: "Web Design, Web Development, Deployement, Maintainance",
    handle: "@maitreya",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://www.maitreyadigital.com/services-3.jpg",
    title: "SEO",
    subtitle: "Backend Engineer Improving website visibility through optimized content and technical strategies.",
    handle: "@maitreya",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
,  {
      image: "https://www.maitreyadigital.com/services-4.png",
      title: "SMM",
      subtitle: "Engaging target audience and building brand awareness through social media platforms.",
      handle: "@maitreya",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
      {
      image: "https://www.maitreyadigital.com/services-5.jpg",
      title: "Graphic Design",
      subtitle: "Creating Graphics and Videos for Social Media Posting",
      handle: "@maitreya",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
    ,  {
      image: "https://www.maitreyadigital.com/services-6.jpg",
      title: "Lead Generation",
      subtitle: "Reaching target audience through targeted digital advertising campaigns.",
      handle: "@maitreya",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    }
];
const page = () => {
  return (
    <div>
      <NavbarDemo/>
      <div className=" pt-32 ">
         <div className="flex items-center mb-10 relative z-[100] justify-center">
                  <SplitText
              text="Services"
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
                  </div>
            <div className='md:pl-20 md:pr-20 pl-2 pr-2 rounded-full' style={{ height: '1200px', position: 'relative' }}>
          
        <ChromaGrid 
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.2}
          ease="power3.out"
        />
      </div>
            </div>
            {/* <GoogleGeminiEffectDemo/> */}
    </div>
  )
}

export default page