"use client";
import React from "react";
import Image from "next/image";
import { useCart, Product } from "../app/context/CartContext";

const ShoesFemale: React.FC = () => {
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      src: "/shoesF-1.jpeg",
      title: "Sneakers",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/shoesF-2.jpeg",
      title: "Normal Chappal",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/shoesF-3.jpeg",
      title: "Premium Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/shoesF-4.jpeg",
      title: "Casual Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/ShoesF-5.jpeg",
      title: "Classic Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
    {
      src: "/ShoesF-6.jpeg",
      title: "Sporty Shoes",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      quantity: 1,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <Image
            src={product.src}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-teal-600 font-semibold">$49.99</span>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoesFemale;
