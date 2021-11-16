import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/logoGOC.png'

const categoiesList = [
  { name: "Tech News", slug: "technews" },
  { name: "Apps", slug: "apps" },
  { name: "Softwares", slug: "softwares" },
  { name: "Unique Gadgets", slug: "uniquegadgets" },
  { name: "Books", slug: "books" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <nav className="bg-bluish p-2 font-nunito shadow-lg rounded-b-lg md:rounded-b-xl">
        <div className=" md:max-w-7xl mx-auto flex  justify-between items-center ">
          <Link passHref href="/">
            <div className="flex justify-center items-center space-x-2 ">
              <div className="p-0.5 rounded-full bg-white flex items-center hover:animate-slowSpin">
                <img
                  src='/logoGOC.png'
                  width="50"
                  height="50"
                  alt="Logo image for www.gearonlinecolts.com"
                />
              </div>
              <h1 className="uppercase cursor-pointer text-blue-500 font-semibold first-letter:text-3xl first-letter:italic first-letter:font-extrabold transform hover:scale-105 transition duration-300 ease-in-out">
                GOC
              </h1>
            </div>
          </Link>
          <div className="hidden md:flex justify-center items-center px-2">
            <ul className="flex items-center text-blue-500 font-semibold space-x-5 ">
              {categoiesList.map((category, index) => (
                <Link passHref key={category.slug} href={`/categories/${category.slug}`}>
                  <li className="uppercase cursor-pointer hover:text-green-300 transform hover:scale-105 transition duration-300 ease-in-out">
                    {category.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <button
            className="md:hidden text-blue-400"
            onClick={() => toggleMenu()}
          >
            {!toggle ? (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 transform transition duration-1000 ease-in-out "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {toggle && (
        <div className="bg-bluish md:hidden flex justify-center items-center  py-2  transform transition duration-1000 ease-in-out rounded-t-lg">
          <ul className="flex flex-col mx-auto text-blue-400 font-semibold  ">
            <li
              className=" border-b-2 border-b-bluetext-blue-400 w-screen py-2 uppercase "
              onClick={() => toggleMenu()}
            >
              <a className="ml-5">Home</a>
            </li>
            {categoiesList.map((category, index) => (
              <Link passHref key={category.slug} href={`/categories/${category.slug}`}>
                <li
                  className=" border-b-2 border-b-bluetext-blue-400 w-screen py-2 uppercase "
                  onClick={() => toggleMenu()}
                >
                  <a className="ml-5">{category.name}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
