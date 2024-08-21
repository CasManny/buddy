import { headerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="container">
      <h1 className="text-center">Buddy - Your Learning Companion</h1>
      <nav>
        {headerLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
