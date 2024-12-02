"use client";
import ShoesFemale from "@/components/ShoesFemale";
import ShoesMale from "@/components/ShoesMale";
import { useState } from "react";

const Shoes1 = () => {
  const [shoes, setShoes] = useState("both");

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center md:justify-start space-x-2 mt-3 gap-2 md:space-x-4 mb-6">
        <button
          onClick={() => setShoes("both")}
          className={`px-4 py-2 font-bold rounded-lg ${
            shoes === "both" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Both
        </button>
        <button
          onClick={() => setShoes("shoesMale")}
          className={`px-4 py-2 font-bold rounded-lg ${
            shoes === "shoesMale" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Men&apos;s Shoes
        </button>
        <button
          onClick={() => setShoes("shoesFemale")}
          className={`px-4 py-2 font-bold rounded-lg ${
            shoes === "shoesFemale" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Women&apos;s Shoes
        </button>
      </div>

      <div>
        {shoes === "both" && (
          <>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Women&apos;s Shoes
              </h2>
              <ShoesFemale />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Men&apos;s Shoes
              </h2>
              <ShoesMale />
            </div>
          </>
        )}
        {shoes === "shoesMale" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Men&apos;s Shoes
            </h2>
            <ShoesMale />
          </div>
        )}
        {shoes === "shoesFemale" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Women&apos;s Shoes
            </h2>
            <ShoesFemale />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shoes1;
