import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { logo } from "./exportimages";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-green p-4 mt-10 flex flex-col gap-6 text-left text-gray md:flex-row lg:flex-row md:items-center lg:items-center">
        <div className="flex gap-8 w-full h-full justify-between items-center *:capitalize *:text-sm">
          <div className="w-1/2 h-1/2 flex flex-col gap-2 *:text-xs md:*:text-xs lg:*:text-sm">
            <img
              src={logo}
              alt="logo image"
              className="w-24 hidden md:flex lg:flex"
            />
            <ul className="flex flex-col gap-1 ">
              <li>safeerkhanxofficial@gmail.com</li>
              <li>Near Modern City Thana,</li>
              <li>Bannu City,</li>
              <li>KPK, Pakistan</li>
            </ul>
          </div>
          <div className="w-1/2 h-1/2 flex flex-col gap-2 mt-10 md:mt-0 *:text-xs md:*:text-xs lg:*:text-sm">
            <label className="text-lg font-medium">Categoties</label>
            <ul className="flex flex-col gap-1 *:cursor-pointer">
              <li>seeds & nuts</li>
              <li>fresh fruits</li>
              <li>breads & cookies</li>
              <li>fresh vegetable</li>
              <li>regular products</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-10 w-full h-full *:capitalize *:text-xs md:*:text-xs lg:*:text-sm">
          <div className="w-1/2 h-1/2 flex flex-col gap-2 ">
            <label className="text-lg font-medium">useful links</label>
            <ul className="flex flex-col gap-1 *:cursor-pointer">
              <li>password protected</li>
              <li>404 not found</li>
              <li>style guide</li>
              <li>style guide</li>
              <li>licenses</li>
            </ul>
          </div>
          <div className="w-1/2 h-1/2 flex flex-col gap-2 ml-10 md:ml-0 md:mt-1 *:text-xs md:*:text-xs lg:*:text-sm">
            <label className="text-lg font-medium">stay up to date</label>
            <span>
              subscribe our newsletter and get all the latest information
            </span>
            <div className="flex justify-between items-center gap-2 bg-gray p-2 text-green">
              <input
                type="text"
                className="w-24 h-6 outline-none p-1 bg-gray md:w-24 lg:w-32"
              />
              <button className="p-2 bg-white hover:scale-110">
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col bg-green py-3">
        <p className="pt-7 text-center text-gray">
          Copyright &#169; 2024 - All right reserved by{" "}
          <span className="text-yellow-300 font-medium">
            xKhan Dev,{" "}
            <a
              href="https://www.linkedin.com/in/safeer-khan-x/"
              className="cursor-pointer"
            >
              Linkden
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
