import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C3345] p-4 flex justify-between items-center">
      <div>
        <img className="w-[86px] h-[92px]" src={logo} alt="Logo of Mkoia" />
      </div>

      <button
        className="flex flex-col space-y-1.5 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
        <div className={`h-1 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`h-1 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
      </button>

      <nav className={`absolute top-20 right-0 w-48 bg-[#1C3345] text-white p-5 rounded-md shadow-md transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform md:static md:flex md:w-auto`}>
        <ul className="space-y-4 md:space-y-0 md:flex md:gap-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
