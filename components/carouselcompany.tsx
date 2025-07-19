"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
  ResolvedValues,
} from "framer-motion";

const IMGS: string[] = [
  "https://www.maitreyadigital.com/ruz_logo.jpg",
  "https://www.maitreyadigital.com/gatbro_logo.jpg",
  "https://www.maitreyadigital.com/perfume_logo.jpg",
  "https://www.maitreyadigital.com/bath_logo.jpg",
  "https://www.maitreyadigital.com/karmand_logo.png",
  "https://www.maitreyadigital.com/admire_logo.jpg",
  "https://www.maitreyadigital.com/prans_logo.jpg",
  
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryImages = images.length > 0 ? images : IMGS;

  // Initialize as false to avoid SSR window access
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    // Safe to access window here
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize(); // Set initial value on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-[380px] md:h-[350px] lg:h-[500px]">
      {/* Left shadow - purple, reduced width on mobile */}
      {/* <div
        className="absolute top-0 left-0 h-full w-[10px] sm:w-[16px] md:w-[24px] lg:w-[32px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #a855f7 100%)",
        }}
      /> */}
      {/* Right shadow - purple, reduced width on mobile */}
      {/* <div */}
        {/* className="absolute top-0 right-0 h-full w-[10px] sm:w-[16px] md:w-[24px] lg:w-[32px] z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #a855f7 100%)",
        }}
      /> */}
      <div className="flex h-[40vh] items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            // Responsive cylinder width
            width:
              typeof window !== "undefined"
                ? window.innerWidth < 640
                  ? 600
                  : window.innerWidth < 1024
                  ? 1300
                  : 1100
                : 1100,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[120px]  md:min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center   md:p-[6%] [backface-visibility:hidden]"
              style={{
                width: `${
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 300
                      : window.innerWidth < 1024
                      ? 240
                      : 300
                    : 300
                }px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none !h-[200px] w-[180px]  md:h-[100px] md:w-[220px] lg:h-[160px] lg:w-[300px] rounded-[10px] border-[2px] border-white object-cover transition-transform duration-100 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
