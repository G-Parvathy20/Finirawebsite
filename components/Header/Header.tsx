import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-3 border-b">
        <div className="flex items-center space-x-4">
          <img
            src="Finira Logo.png" 
            alt="Bupaalan Group Logo"
            className="h-20 w-48"
          />
        </div>
        
        {/* Sidebar for Mobile */}
        <Sheet open={isOpen} onOpenChange={toggleMenu}>
          <SheetTrigger>
            <IoMdMenu className="text-purple-700 text-2xl lg:hidden md:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-64">
            <SheetHeader>
              <SheetTitle className="text-xl font-semibold text-black">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col mt-4 space-y-4">
              <Link href="#about-us" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>About Us</Link>
              <Link href="#our-team" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>Our Team</Link>
              <Link href="#companies" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>Companies</Link>
              <Link href="#careers" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>Careers</Link>
              <Link href="#media" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>Media</Link>
              <Link href="#contact-us" className="text-lg text-purple-500 font-bold" onClick={toggleMenu}>Contact Us</Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about-us" className="text-lg text-purple-500 font-bold">About Us</Link>
          <Link href="#our-team" className="text-lg text-purple-500 font-bold">Our Team</Link>
          <Link href="#companies" className="text-lg text-purple-500 font-bold">Companies</Link>
          <Link href="#careers" className="text-lg text-purple-500 font-bold">Careers</Link>
          <Link href="#media" className="text-lg text-purple-500 font-bold">Media</Link>
          <Link href="#contact-us" className="text-lg text-purple-500 font-bold">Contact Us</Link>
        </nav>
      </header>

      <div className="relative flex justify-center items-center h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('backimg.png')" }}>
        <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold"><span className="text-purple-600">Finira</span> Group<span className="text-purple-600"> of</span> Companies</h2>
          <b><p className="mt-2 text-lg">Finira Group of Companies is a <span className="text-purple-600">Conglomerate. </span>Our vision is to top in all <br />the industries with <span className="text-purple-600">innovation</span> and <span className="text-purple-600">Technology</span></p></b>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
