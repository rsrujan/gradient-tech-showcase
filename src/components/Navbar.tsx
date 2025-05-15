
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  title: string;
  onClick: () => void;
}

const NavLink = ({ href, title, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors px-4 py-2"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth"
        });
        onClick();
      }}
    >
      {title}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex-1">
          <a href="#home" className="text-xl font-bold gradient-text">
            RS
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="#about" title="About Me" onClick={closeMenu} />
          <NavLink href="#skills" title="Skills" onClick={closeMenu} />
          <NavLink href="#projects" title="Projects" onClick={closeMenu} />
          <NavLink href="#contact" title="Contact" onClick={closeMenu} />
        </nav>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <X />
          </Button>
          <div className="flex flex-col items-center gap-8 text-xl">
            <NavLink href="#about" title="About Me" onClick={closeMenu} />
            <NavLink href="#skills" title="Skills" onClick={closeMenu} />
            <NavLink href="#projects" title="Projects" onClick={closeMenu} />
            <NavLink href="#contact" title="Contact" onClick={closeMenu} />
          </div>
        </div>
      </div>
    </header>
  );
}
