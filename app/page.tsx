"use client";
import { useState } from "react";
import Makeups from "@/components/Makeup";
import Mens from "@/components/Mens";
import ShoesFemale from "@/components/ShoesFemale";
import ShoesMale from "@/components/ShoesMale";
import Womens from "@/components/Women";

export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <div className="p-4">
      <h1
        className="mb-8 text-[20px] pl-[10px] md:pl-[20px] lg:pl-[30px] pt-[30px] md:pt-[40px] lg:pt-[45px] 
                   font-bold leading-none tracking-tight text-gray-900 
                   md:text-[30px] lg:text-[50px] dark:text-white text-center md:text-left">
        Your
        <span className="text-blue-600 font-extrabold dark:text-blue-500">
          {" "}
          Shop.Co{" "}
        </span> — Order Everything <br />
        You Love!
        <i
          className="bx bxs-store-alt bx-tada text-[#5856c7] text-[30px] md:text-[40px] lg:text-[50px] 
                     inline-block align-middle ml-2"
          aria-hidden="true"></i>
      </h1>

      <div className="flex flex-wrap justify-center md:justify-start space-x-3 space-y-3  md:space-x-4 mb-6">
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          All
        </button>
        <button
          onClick={() => setCategory("mens")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "mens" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Men's
        </button>
        <button
          onClick={() => setCategory("womens")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "womens" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Women's
        </button>
        <button
          onClick={() => setCategory("shoesMale")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "shoesMale" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Men's Shoes
        </button>
        <button
          onClick={() => setCategory("shoesFemale")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "shoesFemale"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}>
          Women's Shoes
        </button>
        <button
          onClick={() => setCategory("makeups")}
          className={`px-4 py-2 font-bold rounded-lg ${
            category === "makeups" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}>
          Makeups
        </button>
      </div>

      <div className="mt-6">
        {category === "all" && (
          <>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Men's Products
              </h2>
              <Mens />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Women's Products
              </h2>
              <Womens />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Men's Shoes
              </h2>
              <ShoesMale />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Women's Shoes
              </h2>
              <ShoesFemale />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
                Makeup Products
              </h2>
              <Makeups />
            </div>
          </>
        )}

        {category === "mens" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Men's Products
            </h2>
            <Mens />
          </div>
        )}
        {category === "womens" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Women's Products
            </h2>
            <Womens />
          </div>
        )}
        {category === "shoesMale" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Men's Shoes
            </h2>
            <ShoesMale />
          </div>
        )}
        {category === "shoesFemale" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Women's Shoes
            </h2>
            <ShoesFemale />
          </div>
        )}
        {category === "makeups" && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              Makeup Products
            </h2>
            <Makeups />
          </div>
        )}
      </div>
    </div>
  );
}