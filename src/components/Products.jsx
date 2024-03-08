import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { tomato } from "./exportimages";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { DataContext } from "../App";
import { AllProducts } from ".";

const Products = () => {
  const allData = useContext(DataContext);
  const [loadedComponents, setLoadedComponents] = useState(6);
  const slicedData = allData.products.slice(0, loadedComponents);

  return (
    <section className="w-full mt-10 lg:mt-20">
      <div className="w-full text-center flex flex-col gap-3">
        <img src={tomato} alt="tomato image" className="w-8 my-0 mx-auto" />
        <h2 className="text-green text-3xl font-semibold">Ragular Products</h2>
        <p className="text-gray-500 text-balance px-4 md:1/2 lg:1/2">
          Oranic famers prioritize the use of compost, cover crops, and crop
          rotation to enrich the soil with nutrients and maintain
        </p>
      </div>
      <div className="w-full flex gap-4 p-2 text-center flex-wrap justify-center md:gap-4 lg:gap-2 mb-10">
        {/* ---------------------Card-------------------------------- */}
        {slicedData.map((product) => {
          return (
            <motion.div
              className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-72 bg-gray rounded-xl shadow-sm shadow-black flex flex-col"
              whileHover={{ boxShadow: "0px 2px 3px black", scale: 1.02 }}
              transition={{ duration: 0.1 }}
              key={product.id}
            >
              <div className="w-full">
                <img
                  src={product.image}
                  alt="Vegetable image"
                  className="size-32 my-0 mx-auto p-2"
                />
              </div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <label className="text-sm">${product.price}.00 USD/KG</label>
              <motion.button
                className="bg-green-200 w-36 h-10 rounded-lg my-6 mx-auto cursor-pointer flex items-center justify-center gap-1"
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
            </motion.div>
          );
        })}
      </div>
      <div className="w-full mt-12">
        <motion.button
          className="w-40 h-22 p-3 bg-green text-gray mt-8 flex items-center gap-2 justify-center my-0 mx-auto"
          whileHover={{ color: "white" }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
          onClick={() => setLoadedComponents(loadedComponents + 2)}
        >
          Load More <FaLongArrowAltRight />
        </motion.button>
      </div>
    </section>
  );
};

export default Products;
