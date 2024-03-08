import React, { useContext } from "react";
import { motion } from "framer-motion";
import { tomato } from "./exportimages";
import { BsCart4 } from "react-icons/bs";
import { DataContext } from "../App";

const MostViewProducts = () => {
  const allData = useContext(DataContext);
  const filterMostViewedProducts = allData.products
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <div className="w-full p-4 flex flex-col gap-6 md:-mt-60 lg:mt-0">
      <img src={tomato} alt="logo image" className="w-8 my-0 mx-auto" />
      <h2 className="text-center text-3xl font-bold text-green">
        Most View Products
      </h2>
      <p className="text-balance text-center text-gray-500 md:w-1/2 lg:w-1/2 my-0 mx-auto">
        Organic farmers prioritize the use of compost, cover crops, and crop
        rotation to enrich the soil with nutrients and maintain
      </p>
      {/* -----------------------------------card container ----------------------------- */}
      <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center gap-8 mt-12 md:gap-6">
        {filterMostViewedProducts.map((product) => {
          return (
            <motion.div
              className="w-72 h-96 bg-gray p-3 rounded-md"
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 2px 1px 0.1px black,inset 0px 1.5px 0px gray",
              }}
              key={product.id}
            >
              <img
                src={product.image}
                alt="card image"
                className="my-6 mx-auto w-32 h-36"
              />
              <div className="flex flex-col justify-center items-center gap-3 mt-16">
                <h2 className="text-xl font-semibold capitalize">
                  {product.name}
                </h2>
                <span className="text-sm">${product.price}.00 USD/kg</span>
                <motion.button
                  className="text-green w-36 h-10 rounded-lg cursor-pointer flex items-center justify-center gap-1 bg-gray"
                  initial={{ backgroundColor: "white" }}
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MostViewProducts;
