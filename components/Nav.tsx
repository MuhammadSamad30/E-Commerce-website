"use client";
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";
import Link from "next/link";
import { Brush, Footprints, Shirt } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-evenly text-blue-600 bg-[#c6e2e79f] p-2.5 px-5">
      <h1 className="flex items-center text-lg font-bold pr-[49%] hover:text-[#487bb9] md:pl-[2%] pl-[1%] sm:text-2xl">
        Shop.Co <i className="bx bxs-store ml-2"></i>
      </h1>
      <button
        onClick={toggleMenu}
        className="block text-xl cursor-pointer absolute top-2.5 right-5 sm:hidden"
      >
        &#9776;
      </button>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row items-center justify-center bg-[#a2c3d6] w-full p-2 absolute top-14 left-0 z-10 gap-3 sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:w-auto sm:p-0`}
      >
        <li className="flex items-center gap-2 text-lg font-semibold transition-all duration-200 ease-in hover:text-[#6a97d1] hover:no-underline">
          <Link href="/">All</Link>
          <i className="bx bxs-t-shirt text-[#39659e]"></i>
        </li>
        <li className="flex items-center gap-2 text-lg font-semibold transition-all duration-200 ease-in hover:text-[#6a97d1] hover:no-underline">
          <Link href="/men">Men&apos;s</Link>
          <i className="bx bx-male text-[#5f7a9e]"></i>
        </li>
        <li className="flex items-center gap-2 text-lg font-semibold transition-all duration-200 ease-in hover:text-[#6a97d1] hover:no-underline">
          <Link href="/women">Women&apos;s</Link>
          <i className="bx bx-female text-[#39659e]"></i>
        </li>
        <li className="flex items-center gap-2 text-lg font-semibold transition-all duration-200 ease-in hover:text-[#6a97d1] hover:no-underline">
          <Link href="/makeup">Makeup</Link>
          <Brush className='text-[#39659e]'/>
        </li>
        <li className="flex items-center gap-2 text-lg font-semibold transition-all duration-200 ease-in hover:text-[#6a97d1] hover:no-underline">
          <Link href="/shoes">Shoes</Link>
          <Footprints className='text-[#39659e]'/>
        </li>
      </ul>
    </div>
  );
};

export default Nav;






// "use client";
// import 'boxicons/css/boxicons.min.css';
// import { useState } from "react";
// import Link from "next/link";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex items-center justify-evenly text-[#98afca] hover:text-[#4784ca] p-2.5 px-5">
//       <h1 className="flex items-center text-lg font-bold pr-[51%] pl-[2%] sm:text-2xl">
//         Shop.Co <i className='bx bxs-store'></i>
//       </h1>
//       <button
//         onClick={toggleMenu}
//         className="block text-xl cursor-pointer absolute top-2.5 right-5 sm:hidden"
//       >
//         &#9776;
//       </button>
//       <ul
//         className={`${
//           isOpen ? "flex" : "hidden"
//         } flex-col sm:flex sm:flex-row items-center justify-center bg-gray-800 w-full p-2 absolute top-14 left-0 z-10 gap-5 sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:w-auto sm:p-0`}
//       >
//         <li className="flex items-center pl-[3%] pr-[20px] text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
//           <Link href="/">All</Link>
//           <i className='bx bxs-t-shirt text-[#af5b5b]'></i>
//         </li>
//         <li className="flex items-center pl-[3%] pr-[20px] text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
//           <Link href="/men">Men's</Link>
//           <i className='bx bx-male text-[#af5b5b]'></i>
//         </li>
//         <li className="flex items-center pl-[3%] pr-[20px] text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
//           <Link href="/women">Women's</Link>
//           <i className='bx bx-female text-[#af5b5b]'></i>
//         </li>
//         <li className="flex items-center pl-[3%] pr-[20px] text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
//           <Link href="/makeup">Makeup</Link>
//           <i className='bx bxs-brush text-[#af5b5b]'></i>
//         </li>
//         <li className="flex items-center pl-[3%] pr-[20px] text-lg font-semibold transition-all duration-200 ease-in hover:text-teal-500 hover:underline">
//           <Link href="/shoes">Shoes</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Nav;
