import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { banana, redguava } from "./exportimages";
import { BsCart4 } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { DataContext } from "../App";

const Trending_BestProducts = () => {
  const allData = useContext(DataContext);

  // Filter Trending Products
  const trendigData = allData.products
    .filter((product) => product.price > 25)
    .slice(0, 3);

  // Best Seller Products
  const bestSellerProducts = allData.products
    .sort((a, b) => a.price - b.price)
    .slice(0, 3);

  // ---------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------
  return (
    <section className="w-full h-screen flex gap-8 mt-6">
      {/* ------------------------ Most Sell container----------------------- */}
      <div className="w-full md:1/2 lg:w-1/3 flex flex-col mx-6 rounded-sm gap-6">
        <span className="text-3xl text-green font-medium my-2">
          Trending Products
        </span>
        {/* -----------------------card---------------------------- */}
        {trendigData.map((product) => {
          return (
            <div className="flex bg-gray gap-4 p-4 text-left" key={product.id}>
              <img
                src={product.image}
                alt="card image"
                className="w-24 bg-white p-3"
              />
              <div>
                <h2 className="text-lg font-bold md:text-2xl lg:text-2xl">
                  {product.name}
                </h2>

                <label className="text-sm">${product.price}.00 USD/KG</label>
                <motion.button
                  className="text-green w-36 h-10 rounded-lg cursor-pointer flex items-center justify-center gap-1 bg-gray mt-4 bg-white"
                  whileHover={{
                    backgroundColor: "green",
                    color: "white",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
                >
                  Add to Cart <BsCart4 />
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
      {/* --------------------Middle Container----------------------------- */}
      <div className="hidden lg:flex flex-col items-center justify-start mt-20 gap-6 w-1/3">
        {/* ------------------------  Red Card ----------------------- */}
        <div className="w-full h-1/3 bg-red-200 p-4">
          <div>
            <label className="text-gray-500 text-sm">Test the Color</label>
            <h2 className="text-xl font-semibold text-green">Fresh Banana</h2>

            {/* ------------------------ Red Card Button ----------------------- */}
            <motion.button
              className="flex gap-1 items-center text-gray-700 text-xs p-2"
              whileHover={{ scale: 1.03 }}
            >
              Shop Now <FaLongArrowAltRight />
            </motion.button>
            {/* ------------------------ Red Card Image ----------------------- */}
            <img
              src={banana}
              alt="Fruit image"
              className="w-24 my-0 mx-auto -mt-8"
            />
          </div>
        </div>
        {/* ------------------------ Yellow Card ----------------------- */}
        <div className="w-full h-1/3 bg-yellow-200 p-4">
          <div>
            <label className="text-gray-500 text-sm">Test the Color</label>
            <h2 className="text-xl font-semibold text-green">
              Fresh Red Guava
            </h2>
            {/* ------------------------ yellow card button ----------------------- */}
            <motion.button
              className="flex gap-1 items-center text-gray-700 text-xs p-2"
              whileHover={{ scale: 1.03 }}
            >
              Shop Now <FaLongArrowAltRight />
            </motion.button>
            {/* ------------------------ yellow card image ----------------------- */}
            <img
              src={redguava}
              alt="Fruit image"
              className="w-24 my-0 mx-auto  -mt-8"
            />
          </div>
        </div>
      </div>
      {/* ------------------------ Most Sell Container----------------------- */}
      <div className="hidden w-full md:1/2 lg:w-1/3 md:flex lg:flex flex-col mx-6 rounded-sm gap-6">
        {/* ------------------------ Heading ----------------------- */}
        <span className="text-3xl text-green font-medium my-2 text-right">
          Best Seller
        </span>
        {/* -----------------------card ---------------------------- */}
        {bestSellerProducts.map((product) => {
          return (
            <div className="flex bg-gray gap-4 p-4 text-left" key={product.id}>
              {/* ------------------------ card image----------------------- */}
              <img
                src={product.image}
                alt="card image"
                className="w-24 bg-white p-3"
              />
              <div>
                <h2 className="text-lg font-bold md:text-2xl lg:text-2xl">
                  {product.name}
                </h2>

                <label className="text-sm">${product.price}.00 USD/KG</label>
                {/* ------------------------ card button ----------------------- */}
                <motion.button
                  className="text-green w-36 h-10 rounded-lg cursor-pointer flex items-center justify-center gap-1 bg-gray mt-4 bg-white"
                  whileHover={{
                    backgroundColor: "green",
                    color: "white",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
                >
                  Add to Cart <BsCart4 />
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trending_BestProducts;
