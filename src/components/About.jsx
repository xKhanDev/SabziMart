import React from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { veglogo, gardening, leaf } from "./exportimages";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full h-screen flex mt-12 md:h-96 lg:h-screen">
      {/* --------------------------------left Container------------------------------ */}
      <div className="hidden md:flex lg:flex lg:w-1/2 md:w-1/2 bg-gray flex-col relative">
        {/* ---------------------left Container 'Experience Text'---------------------- */}
        <span
          className="text-green text-3xl font-bold mt-32 ml-32 md:hidden lg:block"
          style={{ letterSpacing: "5px" }}
        >
          Experience
        </span>
        {/* ---------------------left Container '17 Years Text'---------------------- */}
        <span
          className="text-green text-3xl font-bold absolute left-0 top-32 -rotate-90 mt-40 ml-9 md:hidden lg:block lg:text-3xl"
          style={{ letterSpacing: "5px" }}
        >
          17 Years of
        </span>
        {/* ---------------------left Container Image---------------------- */}
        <img
          src={gardening}
          alt="Gardening Image"
          className="relative ml-28 -mt-12 md:-mt-0 md:-ml-0 md:left-16 md:top-16 md:w-full lg:ml-28 lg:-mt-12"
          style={{ width: "65%", height: "65%" }}
        />
      </div>
      {/* --------------------------right Container ------------------------- */}
      <div className="w-full flex flex-col gap-6 p-2 text-center md:w-1/2 md:text-left lg:w-1/2 lg:text-left md:p-4 lg:p-10 md:gap-3 lg:gap-8 relative">
        {/* --------------------------Leaf Icon ------------------------- */}
        <img
          src={leaf}
          alt="leaf logo"
          className="size-36 absolute bottom-0 right-20 -z-10 md:hidden lg:-z-0 lg:flex"
        />
        {/* --------------------------right Container Heading------------------------- */}
        <span className="text-4xl font-bold text-green md:text-2xl lg:text-4xl">
          Fresh & Healthy food from farm to your door.
        </span>
        {/* --------------------------right Container sub-heading------------------------- */}
        <div className="text-balance md:text-sm lg:text-base">
          <p className="text-gray-500">
            Oranic famers prioritize the use of compost, cover crops, and crop
            rotation to enrich the soil with nutrients and maintain
          </p>
        </div>
        {/* --------------------------Natural/High-Quality Text ------------------------- */}
        <div className="flex justify-between mx-7 md:*:text-sm lg:*:text-base">
          <span className="flex items-center gap-1 font-bold text-lg text-green">
            <label className="size-10 bg-green rounded-full text-gray flex justify-center items-center text-3xl md:size-6 md:text-xl lg:size-10 lg:text-3xl">
              <TiTick />
            </label>
            Natural Products
          </span>
          <span className="flex items-center gap-1 font-bold text-lg text-green">
            <label className="size-10 bg-green rounded-full text-gray flex justify-center items-center text-3xl md:size-6 md:text-xl lg:size-10 lg:text-3xl">
              <TiTick />
            </label>
            High Quality
          </span>
        </div>
        {/* --------------------------Sub-Heading------------------------- */}
        <div>
          <p className="text-balance text-gray-500 md:text-sm lg:text-base">
            Oranic famers prioritize the use of compost, cover crops, and crop
            rotation to enrich the soil with nutrients and maintain its
            fertility By doing so,they promote the growth of healthy
          </p>
        </div>
        {/* --------------------------Vegetable icon------------------------- */}
        <div className="w-full flex gap-2 items-center md:hidden lg:flex">
          <img
            src={veglogo}
            alt="vegetable icon"
            className="size-12 ml-8 md:ml-0 lg:ml-0"
          />
          {/* --------------------------Heading------------------------- */}
          <span className="text-xl text-green font-semibold text-left">
            Every day fresh and Quality products devivery to your doorstep
          </span>
        </div>
        {/* --------------------------Learn More Button------------------------- */}
        <motion.button
          className="w-36 h-22 p-3 bg-green text-gray mt-8 flex items-center gap-2 justify-center my-0 mx-auto md:mx-0 lg:mx-0 text-gray"
          whileHover={{ color: "white" }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
        >
          Learn More <FaLongArrowAltRight />
        </motion.button>
      </div>
    </section>
  );
};

export default About;
