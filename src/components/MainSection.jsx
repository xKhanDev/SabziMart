import React from "react";
import { motion } from "framer-motion";
import { mainsectionimg, certifiedlogo, certifiedlogo2 } from "./exportimages";

const MainSection = () => {
  return (
    <section className="w-full flex pt-4 overflow-hidden">
      <div className="w-full md:w-1/2 lg:w-1/2 bg-gray p-4 text-center md:text-left lg:text-left md:gap-4 lg:gap-6">
        <span className="text-4xl md:text-4xl lg:text-5xl font-bold text-green">
          Farm Fresh Delights: <br /> Embarce the Organic Goodness!
        </span>
        <p className="mt-4 text-gray-500 text-balance">
          Organic food Believed to offer numerous health benefits. Since organic
          farming avoids synthetic pesticides and fertilizers.
        </p>
        {/* --------------------------Shop Now Button------------------------- */}
        <motion.button
          className="w-32 h-22 p-3 bg-green text-gray mt-12"
          whileHover={{ color: "white" }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
        >
          Shop Now
        </motion.button>
        {/* --------------------------Certified Logo 2 and Heading------------------------- */}
        <div className="w-full flex justify-between text-gray-500 mt-20 text-left md:gap-6 lg:gap-8">
          <div className="w-1/2">
            <div className="flex items-center gap-2 mb-2">
              {/* --------------------------Logo------------------------- */}
              <img src={certifiedlogo} alt="" className="size-12" />
              {/* --------------------------Heading------------------------- */}
              <h2 className="font-semibold text-black">
                Certified Organic <br /> Product
              </h2>
            </div>
            {/* --------------------------Sub-heading------------------------- */}
            <span className="text-xs">
              Organic food is believed to offer numerous health benefits.
            </span>
          </div>
          <div className="w-1/2">
            {/* --------------------------Certified Logo 2 and Heading------------------------- */}
            <div className="flex items-center gap-2 mb-2">
              {/* --------------------------Logo------------------------- */}
              <img src={certifiedlogo2} alt="" className="size-12" />
              {/* --------------------------Heading------------------------- */}
              <h2 className="font-semibold text-black">
                Certified Organic <br /> Product
              </h2>
            </div>
            {/* --------------------------Sub-heading------------------------- */}
            <span className="text-xs">
              Organic food is believed to offer numerous health benefits.
            </span>
          </div>
        </div>
      </div>
      {/* --------------------------Main Section Image------------------------- */}
      <div className="hidden md:flex lg:flex w-1/2 bg-green">
        <img
          src={mainsectionimg}
          alt="Main Section image"
          className="absolute bottom-11 w-1/2 mb-1 md:bottom-72 md:w-96 lg:bottom-11 lg:w-1/2"
        />
        {/* --------------------------Rotated Text------------------------- */}
        <span className="text-7xl text-gray absolute top-72 right-0 -mr-20 rotate-90 opacity-85 uppercase md:rotate-0 md:mr-10 lg:-mr-20 lg:rotate-90">
          Organic
        </span>
      </div>
    </section>
  );
};

export default MainSection;
