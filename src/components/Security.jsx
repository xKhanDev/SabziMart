import React from "react";
import { delivery, payment, guarantee } from "./exportimages";

const Security = () => {
  return (
    <div className="w-full h-60  mt-12 p-4 flex items-center gap-8">
      {/* ----------------------Sub-Container------------------------ */}
      <div className="w-1/2 flex flex-col gap-4 md:flex-row lg:flex-row md:items-center lg:items-center lg:ml-24">
        <img src={delivery} alt="logo image" className="w-16" />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-green text-lg md:text-xl lg:text-xl">
            Free Delivery
          </h2>
          <p className="text-gray-800 text-balance text-xs md:text-sm lg:text-sm">
            Get free delivery for order spent $100 or over.
          </p>
        </div>
      </div>
      {/* ----------------------Sub-Container------------------------ */}
      <div className="w-1/2 flex flex-col gap-4 md:flex-row lg:flex-row md:items-center lg:items-center">
        <img src={payment} alt="logo image" className="w-16" />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-green text-lg md:text-xl lg:text-xl">
            Safe Payment
          </h2>
          <p className="text-gray-800 text-balance text-xs md:text-sm lg:text-sm">
            Payment system is very much sage and secure
          </p>
        </div>
      </div>
      {/* ----------------------Sub-Container------------------------ */}
      <div className="w-1/2 flex flex-col gap-4 md:flex-row lg:flex-row md:items-center lg:items-center">
        <img src={guarantee} alt="logo image" className="w-16" />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-green text-lg md:text-xl lg:text-xl">
            Money Back
          </h2>
          <p className="text-gray-800 text-balance text-xs md:text-sm lg:text-sm">
            Very easy to make your money back option
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
