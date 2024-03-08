import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openMobSubManu, setOpenMobSubManu] = useState({
    product: false,
    pages: false,
  });
  const [openWebSubManu, setOpenWebSubManu] = useState({
    product: false,
    pages: false,
  });

  const handleMobSubMenuToggle = (menu) => {
    setOpenMobSubManu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleWebSubMenuToggle = (menu) => {
    setOpenWebSubManu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <nav className="w-full">
      <div className="w-full h-20 flex items-center py-4 px-4 bg-green-800 fixed top-0 left-0 z-20 lg:hidden">
        <motion.span
          className="bg-green p-2 rounded-lg text-white fixed top-4 left-4 z-50"
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.8 }}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RxCross2 className="text-3xl font-bold cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="text-3xl font-bold cursor-pointer" />
          )}
        </motion.span>

        {toggle && (
          <motion.div
            className=" bg-green-800 text-gray-300 w-1/2 md:w-1/3 absolute top-20 -left-5 p-4"
            initial={{ x: -500 }}
            animate={toggle ? { x: 0 } : { x: -500 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col justify-start gap-10 items-center w-full h-screen mt-8 px-2 ml-4">
              <li className="w-full flex flex-col hover:text-white">
                <a
                  href="#"
                  className="flex items-center font-semibold gap-1 text-2xl"
                >
                  Home
                </a>
              </li>
              {/* --------------------------Product Manu------------------------------- */}
              <li className="w-full flex flex-col cursor-pointer">
                <a
                  className="flex items-center font-semibold gap-1 text-2xl"
                  onClick={() => handleMobSubMenuToggle("product")}
                >
                  Products <IoIosArrowDown />
                </a>
                {/* --------------------------Products sub Manu------------------------------- */}
                {openMobSubManu.product && (
                  <motion.ul
                    className="ml-8"
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.li
                      className="w-full p-2 hover:bg-green-900 hover:text-white"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      All Products
                    </motion.li>
                    <motion.li
                      className="w-full p-2 hover:bg-green-900 hover:text-white"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      Trending Products
                    </motion.li>
                    <motion.li
                      className="w-full p-2 hover:bg-green-900 hover:text-white"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      Most Seller
                    </motion.li>
                  </motion.ul>
                )}
              </li>
              {/* --------------------------Pages Manu------------------------------- */}
              <li className="w-full flex flex-col cursor-pointer">
                <a
                  href="#"
                  className="flex items-center font-semibold gap-1 text-2xl"
                  onClick={() => handleMobSubMenuToggle("pages")}
                >
                  Pages <IoIosArrowDown />
                </a>
                {/* --------------------------Pages sub Manu------------------------------- */}
                {openMobSubManu.pages && (
                  <motion.ul
                    className="ml-8"
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.li
                      className="w-full p-2 hover:bg-green-900 hover:text-white"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      About
                    </motion.li>
                    <motion.li
                      className="w-full p-2 hover:bg-green-900 hover:text-white"
                      whileHover={{ scale: 0.98 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", duration: 0.6 }}
                    >
                      Security
                    </motion.li>
                  </motion.ul>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
      {/* --------------------------Web Manu------------------------------- */}
      <div className="w-full h-16 flex justify-between items-center p-2 shadow-[rgb(0,75,63)_0px_5px_8px_0px] rounded-lg">
        <span className="w-28">
          <label className="text-gray-400 text-3xl font-bold">Sabzi</label>
          <label className="text-green text-3xl font-bold">Mart</label>
        </span>
        <div className="w-1/3">
          {/* --------------------------web Manu list------------------------------- */}
          <motion.ul className="flex justify-between">
            <motion.li
              className="flex items-center gap-1 cursor-pointer text-xl"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              Home
            </motion.li>
            {/* --------------------------Product Manu------------------------------- */}
            <motion.li
              className="flex items-center gap-1 cursor-pointer text-xl"
              onClick={() => handleWebSubMenuToggle("product")}
            >
              Products <IoIosArrowDown />
              {/* --------------------------Products web sub Manu------------------------------- */}
              {openWebSubManu.product && (
                <motion.ul
                  className="absolute top-16 w-44 text-center text-xl gap-2 bg-gray z-30 pb-2"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.li
                    className="w-full p-2 hover:bg-green-900 hover:text-white"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    All Products
                  </motion.li>
                  <motion.li
                    className="w-full p-2 hover:bg-green-900 hover:text-white"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    Trending Products
                  </motion.li>
                  <motion.li
                    className="w-full p-2 hover:bg-green-900 hover:text-white"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    Most Seller
                  </motion.li>
                </motion.ul>
              )}
            </motion.li>
            {/* --------------------------Pages web Manu------------------------------- */}
            <li
              className="flex items-center gap-1 cursor-pointer text-xl"
              onClick={() => handleWebSubMenuToggle("pages")}
            >
              Pages <IoIosArrowDown />
              {/* --------------------------Pages web sub Manu------------------------------- */}
              {openWebSubManu.pages && (
                <motion.ul
                  className="absolute top-16 w-44 text-center text-xl gap-2 bg-gray z-30 pb-2"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.li
                    className="w-full p-2 hover:bg-green-900 hover:text-white"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    About
                  </motion.li>
                  <motion.li
                    className="w-full p-2 hover:bg-green-900 hover:text-white"
                    whileHover={{ scale: 0.98 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    Security
                  </motion.li>
                </motion.ul>
              )}
            </li>
          </motion.ul>
        </div>
        <div>
          <motion.button
            className="flex items-center gap-1 text-xl"
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.6, bounce: 0.5 }}
          >
            <BsCart4 />
            Cart(1)
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
