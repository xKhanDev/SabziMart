import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { orangejuise, lemon } from "./exportimages";
import { DataContext } from "../App";

const SomeVagatables = () => {
  const allData = useContext(DataContext);
  const sortedData = allData.products.sort((a, b) => b.price - a.price);
  const slicedData = sortedData.slice(0, 2);
  return (
    // ---------------------------Main Container -------------------------------
    <section className="w-full flex flex-col justify-center items-center gap-8 mt-24 md:mt-16 lg:mt-16 md:flex-row px-10">
      {/* ---------------------------Card 1 ------------------------------- */}
      <div className="w-full h-72 bg-red-200 p-4 text-center flex flex-col gap-1">
        <label className="text-gray-500 text-sm">Test the Color</label>
        <h2 className="text-xl font-semibold text-green">Orange Juise</h2>
        <motion.button
          className="flex gap-1 items-center my-0 mx-auto text-gray-700 text-xs p-2"
          whileHover={{ backgroundColor: "white", scale: 1.03 }}
        >
          Shop Now <FaLongArrowAltRight />
        </motion.button>
        <img
          src={orangejuise}
          alt="Fruit image"
          className="size-32 my-0 mx-auto mt-4"
        />
      </div>
      {/* -------------------------Card 2----------------------- */}
      <div className="w-full flex flex-col gap-4">
        {slicedData.map((product) => {
          return (
            <div
              className="w-full bg-yellow-200 flex items-center justify-center p-3 text-center md:flex-col"
              key={product.id}
            >
              <img
                src={product.image}
                alt="Fruit image"
                className="w-20 mr-10 md:my-0 md:mx-auto"
              />
              <div>
                {/* ---------------------------Sub-Card 1 Labels ------------------------------- */}
                <label className="text-gray-500 text-sm">Test the Color</label>
                <h2 className="text-xl font-semibold text-green">
                  {product.name}
                </h2>
                {/* ---------------------------Sub-Card 1 Button ------------------------------- */}
                <motion.button
                  className="flex gap-1 items-center my-0 mx-auto text-gray-700 text-xs p-2"
                  whileHover={{ scale: 1.03 }}
                >
                  Shop Now <FaLongArrowAltRight />
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
      {/* -----------------------------------Card 3------------------------------------- */}
      <div className="w-full h-72 bg-red-200 p-4 text-center flex flex-col gap-1">
        <label className="text-gray-500 text-sm">Test the Color</label>
        <h2 className="text-xl font-semibold text-green">Fresh Lemon</h2>

        <motion.button
          className="flex gap-1 items-center my-0 mx-auto text-gray-700 text-xs p-2"
          whileHover={{ backgroundColor: "white", scale: 1.03 }}
        >
          Shop Now <FaLongArrowAltRight />
        </motion.button>

        <img src={lemon} alt="Fruit image" className="w-32 my-0 mx-auto mt-4" />
      </div>
    </section>
  );
};

export default SomeVagatables;
