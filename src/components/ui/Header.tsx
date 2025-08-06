"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-transparent h-[50px] absolute top-[40px] left-0 z-20 flex items-center justify-between px-5 md:px-20 mdd:px-10 lg:px-20 xxl:px-40">
      {/* Logo */}
      <div className="flex items-center z-30">
        <Image
          src="images/main_logo.svg"
          width={100}
          height={100}
          alt="Logo Neuro"
          title="Logo Neuro"
          priority
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Desktop Navigation - Centralizado */}
      <nav className="hidden h-[48px] w-[621px] md:flex absolute left-1/2 transform -translate-x-1/2 space-x-5 p-2 rounded-[100px] border border-[rgba(227,165,162,0.80)] bg-[rgba(227,165,162,0.32)] backdrop-blur-[7.5px] justify-center items-center z-30">
        <button
          onClick={() => scrollToSection("quem-sou-eu")}
          className="px-5 h-[36px] text-sm text-[#7F3835] hover:bg-[#CC6C67] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg transform"
        >
          Quem sou eu
        </button>
        <button
          onClick={() => scrollToSection("sobre-consultoria")}
          className="px-5 h-[36px] text-sm text-[#7F3835] hover:bg-[#CC6C67] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg transform"
        >
          Sobre a consultoria
        </button>
        <button
          onClick={() => scrollToSection("pacotes-atendimento")}
          className="px-5 h-[36px] text-sm text-[#7F3835] hover:bg-[#CC6C67] hover:text-white rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg transform"
        >
          Pacotes de atendimento
        </button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden z-30">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#EDFF8C"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[50px] right-0 w-full shadow-lg flex flex-col items-center space-y-2 py-5 z-50 md:hidden">
          <button
            onClick={() => scrollToSection("quem-sou-eu")}
            className="text-[#7F3835] px-4 py-2 hover:bg-[#CC6C67] hover:text-white w-full text-center"
          >
            Quem sou eu
          </button>
          <button
            onClick={() => scrollToSection("sobre-consultoria")}
            className="text-[#7F3835] px-4 py-2 hover:bg-[#CC6C67] hover:text-white w-full text-center"
          >
            Sobre a consultoria
          </button>
          <button
            onClick={() => scrollToSection("pacotes-atendimento")}
            className="text-[#7F3835] px-4 py-2 hover:bg-[#CC6C67] hover:text-white w-full text-center"
          >
            Pacotes de atendimento
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
