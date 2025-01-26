import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const navLinkColor =
    location.pathname === "/" ? "text-white" : "text-blue-500";
  const hamburgerColor =
    location.pathname === "/" ? "bg-white" : "bg-gray-500";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4">
        <div className="flex items-center mt-[20px] justify-between w-full">
          <Link to={"/"}>
            <img
              className="cursor-pointer xl:ml-[100px] w-[80px] ml-[50px]"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Hamburger icon */}
          <div
            className="md:hidden ml-4 cursor-pointer z-20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
            <div className={`h-1 w-8 mb-1 ${hamburgerColor}`}></div>
            <div className={`h-1 w-8 ${hamburgerColor}`}></div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && isMobile && (
          <div
            className={`fixed top-0 right-0 h-full w-[200px] bg-blue-500 flex flex-col items-center py-10 space-y-6 text-white shadow-lg z-10 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold transition duration-300 hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold transition duration-300 hover:text-gray-200"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold transition duration-300 hover:text-gray-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold transition duration-300 hover:text-gray-200"
            >
              Contact
            </Link>
          </div>
        )}

        {/* Desktop menu */}
        {!menuOpen && (
          <div className="items-center lg:mr-[100px] ml-6 hidden md:flex">
            <Link
              to="/"
              className={`font-poppins ${navLinkColor} mr-6 text-xl pb-1 transition duration-300 hover:text-gray-400 ${location.pathname === "/" ? "border-b-2 border-white" : ""
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${location.pathname === "/about" ? "border-b-2 border-blue" : ""
                }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-poppins ${navLinkColor} text-xl pb-1 mr-6 transition duration-300 hover:text-gray-400 ${location.pathname === "/services" ? "border-b-2 border-blue" : ""
                }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`font-poppins ${navLinkColor} text-xl pb-1 transition duration-300 hover:text-gray-400 ${location.pathname === "/contact" ? "border-b-2 border-blue" : ""
                }`}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      {location.pathname !== "/" && (
        <div className="mt-[20px] h-[1px] w-full bg-gray-500"></div>
      )}
    </header>
  );
}
