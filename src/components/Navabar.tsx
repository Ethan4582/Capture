import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Photos", href: "./" },
  { label: "Videos", href: "./" },
  { label: "About", href: "./" },
  { label: "Contact", href: "./" },
];

const Navabar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex justify-between bg-black items-center p-8">
          <a href="./" className="text-[18px] uppercase font-bold font-['Bebas_Neue','Bebas_Neue_Placeholder',sans-serif]">Alex Smith</a>
          <div className="flex text-[14px] space-x-4">
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Photos</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Videos</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">About</a>
            <a href="./" className="hover:underline transition-all duration-300 ease-in-out">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center bg-black p-6">
        <a href="./" className="text-white font-bold text-lg">Alex Smith</a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none z-60 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ zIndex: 55 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-white font-normal text-2xl tracking-wide cursor-pointer transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navabar;