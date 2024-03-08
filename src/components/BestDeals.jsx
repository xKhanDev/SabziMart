import React, { useContext } from "react";
import { motion } from "framer-motion";
import { farmer, tomato } from "./exportimages";
import { BsCart4 } from "react-icons/bs";
import { DataContext } from "../App";

const BestDeals = () => {
  const allData = useContext(DataContext);
  const sortedData = allData.products.sort((a, b) => b.views - a.views);
  const slicedData = sortedData.slice(0, 1);
  return (
    <section className="w-full h-screen p-3 mt-8 md:mt-12 lg:mt-20 bg-gray md:flex lg:flex md:p-10 lg:p-12 md:h-1/2">
      {/* -------------------Left Container ----------------------- */}
      <div className="w-full h-full text-center flex flex-col gap-3 bg-gray my-0 mx-auto relative md:w-1/2 lg:w-1/2 md:-ml-6 lg:-ml-6 md:gap-1">
        <label className="text-gray-700 mt-4 text-lg md:text-left lg:text-left md:mt-0 lg:mt-4">
          Weekily Offer
        </label>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl text-green">Best Deals</h2>
          <img
            src={tomato}
            alt=""
            className="w-12 absolute right-10 top-8 md:hidden"
          />
        </div>
        <span className="text-left text-gray-700 text-lg">
          Exciting offer for next 7 days
        </span>
        <p className="text-left text-gray-500 text-xs">
          Get your offer as aerly as possible
        </p>
        {/* -------------------Left Container Card----------------------- */}
        {slicedData.map((product) => {
          return (
            <motion.div
              className="w-80 h-1/2 flex flex-col mt-2 text-center p-3 my-0 mx-auto bg-white md:h-1/2 lg:h-96 md:gap-2 lg:gap-3 hover:shadow-sm lg:mt-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.1 }}
              key={product.id}
            >
              <div className="w-full">
                <img
                  src={product.image}
                  alt="Vegetable image"
                  className="w-32 my-0 mx-auto p-2"
                />
              </div>
              <h2 className="text-lg font-bold md:text-2xl lg:text-2xl">
                {product.name}
              </h2>

              <label className="text-sm">
                ${product.minmaxPrice} USD / peice
              </label>

              <div className="flex items-center justify-center gap-2">
                <label className="text-sm">Available: 20</label>
                <motion.button
                  className="text-green w-36 h-10 rounded-lg my-6 cursor-pointer flex items-center justify-center gap-1 bg-gray"
                  whileHover={{
                    backgroundColor: "green",
                    color: "white",
                    boxShadow: "0px 1px 2px 1px black",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
                >
                  Add to Cart <BsCart4 />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* -------------------Right Container ----------------------- */}
      <div className="hidden md:flex lg:flex w-1/2 justify-end md:full">
        <img src={farmer} alt="Farmer image" className="size-full" />
      </div>
    </section>
  );
};

export default BestDeals;
