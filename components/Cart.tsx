"use client";
import { useState } from "react";

// Define types for Product and Cart items
type Product = {
  id: number;
  name: string;
  price: number;
};

const CartComponent: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]); // Stores products added to the cart
  const [cartOpen, setCartOpen] = useState<boolean>(false); // Toggles the cart visibility

  // Sample products
  const products: Product[] = [
    { id: 1, name: "Men's Shoes", price: 50 },
    { id: 2, name: "Women's Shoes", price: 60 },
    { id: 3, name: "Makeup Kit", price: 40 },
  ];

  // Add to Cart handler
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="relative">
      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        Cart ({cart.length})
      </button>

      {/* Cart Modal */}
      {cartOpen && (
        <div className="fixed bottom-16 right-5 bg-white p-4 w-72 shadow-lg border rounded-lg">
          <h3 className="text-lg font-bold mb-3">Your Cart</h3>
          {cart.length > 0 ? (
            <ul className="space-y-2">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="border-b pb-2 flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span className="text-gray-600">${item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
          <button
            onClick={() => setCartOpen(false)}
            className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
