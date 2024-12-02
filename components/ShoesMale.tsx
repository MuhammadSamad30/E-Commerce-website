"use client";
import Image from "next/image";

const ShoesMale = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {[
        {
          src: "/ShoesM-1.jpeg",
          title: "Sneakers white",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          src: "/ShoesM-2.jpeg",
          title: "Elegant Shoes",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          src: "/ShoesM-3.jpeg",
          title: "Premium Shoes",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          src: "/ShoesM-4.jpeg",
          title: "Casual Shoes",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          src: "/ShoesM-5.jpeg",
          title: "Classic Shoes",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          src: "/ShoesM-6.jpeg",
          title: "Sporty Shoes",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
          <Image
            src={product.src}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-60 object-cover"/>
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-teal-600 font-semibold">$49.99</span>
              <button className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoesMale;
