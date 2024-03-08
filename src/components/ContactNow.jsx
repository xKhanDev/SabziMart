import React from "react";
import { motion } from "framer-motion";
import { tomato, salad } from "./exportimages";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactNow = () => {
  return (
    <div className="w-full h-72 bg-gray flex mt-16 p-4 box-border md:gap-7 lg:gap-12">
      <img src={tomato} alt="image" className="hidden md:flex lg:flex ml-10" />
      <div className="flex flex-col gap-3 text-left mt-10 lg:justify-center lg:-mt-4 md:justify-center md:-mt-3">
        <span className="text-lg text-green md:text-base">
          Organic & Garden Fresh
        </span>
        <h2 className="text-2xl font-bold md:text-lg">
          Need Oraganic & quality product everyday?
        </h2>

        <motion.button
          className="text-white w-36 h-10 rounded-lg cursor-pointer flex items-center justify-center gap-1"
          initial={{ backgroundColor: "green" }}
          whileHover={{
            backgroundColor: "white",
            color: "green",
            scale: 1.02,
            boxShadow: "0px 1px 3px black",
          }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
        >
          Add to Cart <FaLongArrowAltRight />
        </motion.button>
      </div>
      <img
        src={salad}
        alt="image"
        className="w-28 h-32 mt-32 md:ml-0 lg:ml-32 lg:-rotate-90 md:-rotate-90"
      />
    </div>
  );
};

export default ContactNow;
