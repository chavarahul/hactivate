'use client';
import React from 'react'
import drone from '@/app/assets/drone.png'
// import Rocket from '@/app/assets/rock3.png';
import { motion } from "framer-motion";
import Link from 'next/link';
import Arrow from '@/app/assets/arrow-right.svg';
import FlickeringGrid from './ui/flickering-grid';

const Hero = () => {
  return (
    <section className='relative flex items-center justify-center min-h-screen overflow-hidden'>
      <FlickeringGrid
        className="z-0 absolute left-0 top-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}

      />
      <div className="relative items-center w-full pt-40  lg:pt-52 lg:py-20">
        <div className="text-center max-md:px-3">
          <span className="text-sm  font-medium tracking-tight tag  px-4 py-2 rounded-full">
            Introducing Srusta
          </span>
          <h1 className="section-title my-4 max-w-[450px] mx-auto">
            SRUSTA Made{" "}
            super easy!
          </h1>
          <p className='section-description max-w-[750px] mx-auto'>
          We streamline rural healthcare management, providing doctors with seamless, accessing patient record tracking and cload synchronization for efficient and effective care delivery.
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Link
            rel="noopener noreferrer"
            href={"https://wa.me/+918074775610?text=Hi,%20I%20am%20interested%20in%20booking%20a%20free%20trial%20for%20STEM%20labs!"}
            className="btn btn-primary" aria-label="Get started with STEM labs now"
            target='_blank'
          >
            Get Started
          </Link>
          <Link href={"/"}
            className="btn btn-text flex gap-2 items-center"
            aria-label="Learn more about our STEM solutions"
          >
            <span>Learn More</span>
            <Arrow className="w-5 h-5" />
          </Link>
        </div>
        <div className="relative items-center w-full py-12 mx-auto mt-12">
          {/* <svg
            className="absolute inset-0 -mt-72 blur-3xl"
            style={{ zIndex: -1 }}
            fill="none"
            viewBox="0 0 400 400"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#03FFE0"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#7C87F8"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#4C65E4"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#043AFF"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg> */}
        </div>
      </div>
      <div className='absolute left-0 bottom-0 w-[20%] flex justify-end'>
        {/* <img
          src={Rocket.src}
          alt="Rocket"
          className="w-24 h-24 max-lg:hidden rocket-animation"
        /> */}

      </div>
      <div className="absolute top-40 w-[20%] right-0 flex">
        {/* <motion.img
          src={drone.src}
          alt="Drone"
          className='w-20 h-16 max-lg:hidden'
          animate={{
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        /> */}
      </div>
    </section>
  )
}

export default Hero