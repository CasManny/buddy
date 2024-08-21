import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className= "bg-[#8383C3] text-buddy_text">
      <h1 className="text-center text-2xl py-5 font-medium">Buddy - Your Learning Companion</h1>
      <nav className="w-full flex justify-center items-center gap-4 border-t border-b p-5">
        {headerLinks.map((link, index) => (
          <Link href={link.href} key={index} className="text-lg">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
