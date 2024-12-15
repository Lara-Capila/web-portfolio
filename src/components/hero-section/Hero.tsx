"use client";

import {
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useSectionInView } from "../../hooks/useSectionInView";

const handWaveAnimation = {
  rotate: [
    "0deg",
    "15deg",
    "-10deg",
    "15deg",
    "-10deg",
    "15deg",
    "-10deg",
    "15deg",
    "-10deg",
    "15deg",
    "0deg",
  ],
  transition: {
    duration: 1.5,
    ease: easeInOut,
  },
};

const animateIn1 = {
  opacity: [0, 1],
  y: ["16px", "0px"],
  transition: {
    delay: 1.5,
    duration: 0.7,
    ease: easeIn,
  },
};

const animateIn2 = {
  ...animateIn1,
  transition: {
    ...animateIn1.transition,
    delay: 2,
  },
};

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <span className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-4">
            Olá
          </span>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/svgs/hand-wave.svg"
              width={30}
              height={30}
              alt="hand-waving"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">Sou </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Lara Capila
          </span>
          <p>Desenvolvedora Front End</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          Focada em criar interfaces de usuário que conectam.
        </motion.p>
      </div>

      <div>
        <motion.div
          ref={imgRef}
          style={{ rotate }}
          className="h-image flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/images/eu.jpeg"
            alt="working"
            width={400}
            height={400}
            quality="95"
            className="w-96 h-96 shadow-md shadow-slate-500 border border-white rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
