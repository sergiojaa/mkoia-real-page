import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C3345] p-4 flex flex-col md:flex-row justify-around items-center relative">
      <div className="flex justify-between w-full md:w-auto items-center">
        <img className="w-[86px] h-[92px]" src={logo} alt="Logo of Mkoia" />

        <button
          className="flex flex-col space-y-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
          <div className={`h-1 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
          <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
        </button>
      </div>

      <nav
        className={`w-full bg-[#1C3345] text-white rounded-md shadow-md md:w-auto md:flex md:static 
          ${isOpen ? "flex flex-col items-center p-5 space-y-4 mt-4" : "hidden"} md:flex-row md:space-y-0 md:gap-6`}
      >
        <ul className="flex  md:flex-row space-y-4 md:space-y-0 md:gap-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
