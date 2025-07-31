"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
      return <HeroParallax products={products} />;
}
export const products = [
      {
            title: "Grow Your Business with Expert Social Media Marketing!",
            link: "https://gomoonbeam.com",
            thumbnail:
                  "/blog/1.png",
      },
      {
            title: "The Power of SEO: Boost Your Online Visibility",
            link: "https://cursor.so",
            thumbnail:
                  "/blog/2.png",
      },
      {
            title: "Harnessing the Power of Social Media Marketing",
            link: "https://userogue.com",
            thumbnail:
                  "/blog/3.png",
      },

      {
            title: "The ROI of Email Marketing: Why It's Worth the Investment",
            link: "https://editorially.org",
            thumbnail:
                  "/blog/4.png",
      },
      {
            title: "The Digital Marketing Edge: Empowering Your Business in the Modern Age",
            link: "https://editrix.ai",
            thumbnail:
                  "/blog/5.png",
      },
      {
            title: "Tips to Make Your Website More SEO Friendly",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                  "/blog/6.png",
      },

      {
            title: "The Power of Email Marketing",
            link: "https://algochurn.com",
            thumbnail:
                  "/blog/7.png",
      },
     
];
