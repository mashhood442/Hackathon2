"use client";

import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Products from "../../public/Components/pages/products";
import { MdCancel } from "react-icons/md";
import React, { useRef } from 'react';
import { GrSubtractCircle } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);
  
  

  const toggleCart = () => {
    if (ref.current) {
      if (ref.current.classList.contains("translate-x-full")) {
        ref.current.classList.remove("translate-x-full");
        ref.current.classList.add("translate-x-0");
      } else {
        ref.current.classList.remove("translate-x-0");
        ref.current.classList.add("translate-x-full");
      }
    }
  };

  
  return (
    
    <>
  <main className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="p-2 bg-blue-600 shadow-md">
          <div className="container mx-auto flex flex-col items-center text-center text-white">
            <h5 className="text-sm md:text-base font-bold">
              Welcome to SwiftCart – Shop Smart, Live Better!
            </h5>
            <p className="mt-2 text-xs md:text-sm font-semibold text-blue-200">
              Unbeatable deals, quality products, fast delivery.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-between items-center mx-4 sm:mx-10 p-2 bg-white shadow-lg">
          <div className="px-2">
            <img
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-xl"
              src="/New.webp"
              alt="Company logo"
            />
          </div>

         {/* Navigation Links */}
<ul className="flex flex-wrap flex-row gap-x-6 sm:gap-x-8 text-sm md:gap-x-10 text-gray-700 font-bold sm:mr-10 justify-center sm:justify-start">
  <li className="hover:text-blue-600 transition duration-200">
    <a href="#">Home</a>
  </li>
  <li className="hover:text-blue-6000">
    <a href="#">Contact</a>
  </li>
  <li className="hover:text-blue-600 ">
    <a href="#">About</a>
  </li>
  <li className="hover:text-blue-600 ">
    <a href="#">Sign Up</a>
  </li>
</ul>

{/* Search and Icons */}
<div className="flex flex-wrap items-center mt-4 sm:mt-0 space-y-2 sm:space-y-0">
  {/* Search Input */}
  <input
    type="text"
    name="Q"
    placeholder="Search here"
    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full sm:w-60 lg:w-auto"
  />
  
  {/* Search Button */}
  <button
    type="submit"
    className="ml-0 sm:ml-8 mt-2 sm:mt-0 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition duration-200"
  >
    Search
  </button>

  {/* Icons */}
  <div className="flex justify-around mr-3 space-x-4 ml-0 sm:ml-4">
    {/* Heart Icon */}
    <button>
      <FaRegHeart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 hover:text-blue-600 transition duration-200" />
    </button>

    {/* Cart Icon */}
    
    <button onClick={toggleCart}>
  <CiShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800 hover:text-blue-600 transition duration-200" />
</button>

<div
  ref={ref}
  
  className="cart absolute right-4 top-20 bg-white shadow-lg rounded-lg py-6 px-8  border-blue-800  hover:shadow-xl hover:border-blue-600 border-2 transition-transform translate-x-full w-72 sm:w-80 lg:w-96 z-50"
>

       {/* Cart Header */}
  <div className="flex justify-between items-center mb-4">
    <span className="font-extrabold text-lg text-gray-800">Shopping Cart</span>
    <MdCancel
      onClick={toggleCart}
      className="text-gray-600 w-6 h-6  cursor-pointer hover:text-red-600 transition duration-200"
    />
  </div>
  <ol className="list-decimal text-base font-medium text-gray-700 space-y-4">
    <li className="flex justify-between items-center py-2 border-b border-gray-300">
      <div className="pr-4 text-gray-600">Product Name</div>
      <div className="flex items-center space-x-2 font-bold text-gray-800">
      <IoAddCircleOutline 
  
  className="cursor-pointer text-blue-600 hover:text-blue-800 transition duration-200" 
/>
        <div className="px-1">1</div>
        <GrSubtractCircle 
        
        className="cursor-pointer text-red-600 hover:text-red-800 transition duration-200" />
      </div>
    </li>
    <li className="flex justify-between items-center py-2 border-b border-gray-300">
      <div className="pr-4 text-gray-600">Another Product</div>
      <div className="flex items-center space-x-2 font-bold text-gray-800">
        <IoAddCircleOutline  
       
        className=" cursor-pointer text-blue-600 hover:text-blue-800 transition duration-200" />
        <div className="px-1">1</div>
        <GrSubtractCircle

         className="cursor-pointer text-red-600 hover:text-red-800 transition duration-200" />
      </div>
    </li>
    </ol>
    {/* Cart Footer */}
    <div className="mt-6 text-right">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
      Checkout
    </button>
  </div>
     
    </div>
    
  </div>
</div>
</nav>

        {/* Main Content */}
        <div className="flex flex-wrap justify-center sm:justify-between mx-4 sm:mx-8 p-4 bg-gray-100 space-y-6 sm:space-y-0">
          {/* Sidebar */}
          <div className="w-full sm:w-1/4 max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="text-gray-700 font-semibold py-4 px-8 space-y-4 hover:border hover:border-blue-600">
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Men's Fashion
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Women's Fashion
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Electronics
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Home & Living
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Sports & Outdoors
              </li>
              <li className="hover:bg-blue-100 hover:text-blue-600 cursor-pointer px-4 py-2 rounded transition duration-200">
                Toys & Games
              </li>
            </ul>
          </div>

          {/* Highlight Section */}
          <div className="w-full sm:w-3/4">
            <img
              className="w-full h-auto object-contain rounded-lg shadow-md"
              src="B_NAV.webp"
              alt="Highlight of website"
            />
          </div>
        </div>

        {/* Products */}
        
      <Products />
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About SwiftCart</h3>
            <p className="text-sm">
              SwiftCart is your one-stop online shopping destination. Experience
              unbeatable deals, a wide range of products, and fast delivery at
              your fingertips.
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Shop All Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Latest Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Sign In / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <p className="text-sm mb-4">
              Stay connected on social media for the latest updates and offers!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-6">
          <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 SwiftCart. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
