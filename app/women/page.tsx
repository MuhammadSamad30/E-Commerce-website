import Makeups from "@/components/Makeup";
import ShoesFemale from "@/components/ShoesFemale";
import Womens from "@/components/Women";
import React from "react";

const Women = () => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl pt-7 md:pl-[40%] pl-[6%] font-bold mb-4 text-center md:text-left text-[#709ec9]">
        Women&apos;s category
      </h2>
      <Womens />
      <Makeups />
      <ShoesFemale />
    </div>
  );
};

export default Women;
