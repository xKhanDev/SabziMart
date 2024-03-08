import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { DataContext } from "../App";
import { motion } from "framer-motion";

const AllProducts = () => {
  const allData = useContext(DataContext);
  return (
    <section className="w-full bg-green pb-6">
      <h2 className="mb-6 text-3xl text-center text-green font-bold text-gray bg-green h-16 flex items-center justify-center">
        All Products
      </h2>
      <div className="w-full flex gap-4 p-2 text-center flex-wrap justify-center md:gap-8 lg:gap-6 mb-10">
        {/* ---------------------Card-------------------------------- */}
        {allData.products.map((product) => {
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
    </section>
  );
};

export default AllProducts;
