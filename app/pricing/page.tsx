"use client"
import { NavbarDemo } from '@/components/Navbar'
import React from 'react'
import ChromaGrid from '../../components/Chomagrid'
import SplitText from '@/components/Staggertext';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';
import { GoogleGeminiEffectDemo } from '@/components/GoogleGemini';

const items = [
  {
    image: "https://imgs.search.brave.com/Fq9cEQO-DteMPDNBlgvKTtcElKS2uc1ediaFygsV-Po/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/NDI4MTM0L3Bob3Rv/L2RpZ2l0YWwtbWFy/a2V0aW5nLXdpdGgt/cGVyc29uLXVzaW5n/LWEtbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/TlRJdUhFTXhYMWQ2/N1JmeE5nZENXREUw/TGpZajBDS0kydDVW/aXh0ajA0PQ",
    title: "Sarah Johnson",
    subtitle: "Web Design, Web Development, Deployement, Maintainance",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://imgs.search.brave.com/Fq9cEQO-DteMPDNBlgvKTtcElKS2uc1ediaFygsV-Po/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/NDI4MTM0L3Bob3Rv/L2RpZ2l0YWwtbWFy/a2V0aW5nLXdpdGgt/cGVyc29uLXVzaW5n/LWEtbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/TlRJdUhFTXhYMWQ2/N1JmeE5nZENXREUw/TGpZajBDS0kydDVW/aXh0ajA0PQ",
    title: "SEO",
    subtitle: "Backend Engineer Improving website visibility through optimized content and technical strategies.",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
,  {
      image: "https://imgs.search.brave.com/Fq9cEQO-DteMPDNBlgvKTtcElKS2uc1ediaFygsV-Po/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/NDI4MTM0L3Bob3Rv/L2RpZ2l0YWwtbWFy/a2V0aW5nLXdpdGgt/cGVyc29uLXVzaW5n/LWEtbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/TlRJdUhFTXhYMWQ2/N1JmeE5nZENXREUw/TGpZajBDS0kydDVW/aXh0ajA0PQ",
      title: "SMM",
      subtitle: "Engaging target audience and building brand awareness through social media platforms.",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
      {
      image: "https://imgs.search.brave.com/Fq9cEQO-DteMPDNBlgvKTtcElKS2uc1ediaFygsV-Po/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/NDI4MTM0L3Bob3Rv/L2RpZ2l0YWwtbWFy/a2V0aW5nLXdpdGgt/cGVyc29uLXVzaW5n/LWEtbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/TlRJdUhFTXhYMWQ2/N1JmeE5nZENXREUw/TGpZajBDS0kydDVW/aXh0ajA0PQ",
      title: "Graphic Design",
      subtitle: "Creating Graphics and Videos for Social Media Posting",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    },
    ,  {
      image: "https://imgs.search.brave.com/Fq9cEQO-DteMPDNBlgvKTtcElKS2uc1ediaFygsV-Po/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTgw/NDI4MTM0L3Bob3Rv/L2RpZ2l0YWwtbWFy/a2V0aW5nLXdpdGgt/cGVyc29uLXVzaW5n/LWEtbGFwdG9wLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/TlRJdUhFTXhYMWQ2/N1JmeE5nZENXREUw/TGpZajBDS0kydDVW/aXh0ajA0PQ",
      title: "Onl",
      subtitle: "Reaching target audience through targeted digital advertising campaigns.",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen"
    }
];

const page = () => {
  return (
    <>
      <NavbarDemo />
      <div className=" pt-32 ">
             <div className="flex items-center mb-10 relative z-[100] justify-center">
                      <SplitText
                  text="Pricing & Packages"
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
      <div className='' style={{ height: '1200px', position: 'relative' }}>
    
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
      </div>
      <GoogleGeminiEffectDemo/>
    </>
  )
}

export default page