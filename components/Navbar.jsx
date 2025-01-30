"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); 

  const handleMenuClick = () => setMenuOpen(false);

  return (
    <>
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md relative">
        <nav className="flex items-center justify-between w-full">
          <Link href="/">
            <img
              src="https://www.teleadhesivo.com/es/img/as050-jpg/folder/products-listado-merchanthover/vinilos-decorativos-jimi-hendrix.jpg"
              alt="Logo"
              className="w-20 h-20 hover:scale-105 transition-all"
            />
          </Link>

          <button
            className="xl:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          <ul
            role="menu"
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute xl:static top-20 left-0 xl:flex xl:items-center xl:gap-12 font-semibold text-base bg-white xl:bg-transparent w-full xl:w-auto p-6 xl:p-0 shadow-lg xl:shadow-none transition-all duration-300`}
            aria-hidden={!menuOpen}
          >
            <li className="p-3 hover:bg-indigo-600 hover:text-white rounded-md transition-all cursor-pointer">
              <Link href="/" onClick={handleMenuClick}>Home</Link>
            </li>
            <li className="p-3 hover:bg-indigo-600 hover:text-white rounded-md transition-all cursor-pointer">
              <Link href="/catalogo" onClick={handleMenuClick}>Catálogo</Link>
            </li>
            <li className="p-3 hover:bg-indigo-600 hover:text-white rounded-md transition-all cursor-pointer relative">
              <Link href="/carrito" onClick={handleMenuClick}>
                🛒 Carrito
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

