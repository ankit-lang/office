"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";
import { CardHoverEffectDemo } from "./CardHover";

export function LampDemo() {
      return (
            <LampContainer >

                  <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                              delay: 0.3,
                              duration: 0.8,
                              ease: "easeInOut",
                        }}
                        className=" mt-[20vw]  bg-gradient-to-br from-white to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                  >
                        Our Services<br />
                  </motion.h1>
                  <div className="">
                        <CardHoverEffectDemo />
                  </div>
            </LampContainer>
      );
}
