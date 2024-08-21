import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-buddy-bg  py-10">
      <section className="flex justify-between items-center w-full container">
        <h1 className="text-center text-2xl text-dark-600 font-medium border-b-4 border-dashed border-buddy-blue">
          Buddy - Your Learning Companion
        </h1>
        <nav className="flex gap-3 items-center">
          {headerLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-xl hover:text-buddy-blue text-dark-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
