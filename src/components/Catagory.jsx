import React, { useContext } from "react";
import { orange } from "./exportimages";
import { motion } from "framer-motion";
import { DataContext } from "../App";

const Catagory = () => {
  const allData = useContext(DataContext);
  return (
    <section className="w-full flex flex-col gap-3 mt-8">
      {/* ----------------------Chilli Image ------------------------ */}
      <img src={orange} alt="Chilli Images" className="size-12 my-0 mx-auto" />
      {/* ----------------------Category Heading------------------------ */}
      <span className="text-center font-semibold text-green text-2xl">
        Choose Your Category
      </span>
      <p className="text-balance text-gray-500 text-sm text-center -mt-2">
        Organic food is believed to offer numerous health benefits
      </p>
      {/* ----------------------Category Container ------------------------ */}
      <div className="w-full flex flex-auto md:justify-center lg:justify-center gap-5 p-2 text-center overflow-y-auto hide-scroll">
        {allData.categories.map((category) => {
          return (
            <motion.div
              className="w-52 flex flex-col mt-5 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
              key={category.id}
            >
              <div
                style={{ width: "150px", height: "150px" }}
                className="rounded-full bg-gray flex justify-center items-center border-2 border-green-950 border-dashed p-2 my-0 mx-auto mb-3"
              >
                {/* Ensure the image source is correctly referenced */}
                <img src={category.image} alt={category.name} className="" />
              </div>
              <span className="font-bold">{category.name}</span>
              <p className="text-sm">30 items</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Catagory;