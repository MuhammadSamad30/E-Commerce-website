import Makeups from "@/components/Makeup";
import ShoesFemale from "@/components/ShoesFemale";
import Womens from "@/components/Women";
import React from "react";

const Women = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl pt-7 pl-[40%] font-bold mb-4 text-center md:text-left text-[#709ec9]">
        Women's category
      </h2>
      <Womens />
      <Makeups />
      <ShoesFemale />
    </div>
  );
};

export default Women;
