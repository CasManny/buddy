"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const modules = [
  {
    module: "One",
    link: "/needs-we-support/hearing-impairment/english-language/grade-one",
  },
  {
    module: "Two",
    link: "/needs-we-support/hearing-impairment/english-language/grade-two",
  },
  {
    module: "Three",
    link: "/needs-we-support/hearing-impairment/english-language/grade-two",
  },
  {
    module: "Four",
    link: "/needs-we-support/hearing-impairment/english-language/grade-two",
  },
  {
    module: "Five",
    link: "/needs-we-support/hearing-impairment/english-language/grade-two",
  },
];

const EnglishSidebar = () => {
    const pathname = usePathname()
  return (
    <div className="w-72 flex flex-col gap-5 p-10 h-full border-r sticky top-0">
      {modules.map((module) => (
        <Link
          href={module.link}
          className={`text-2xl hover:bg-buddy-blue rounded-lg p-5 w-fit hover:text-buddy_text text-nowrap ${
            pathname === module.link && "bg-buddy-blue text-buddy_text"
          }`}
        >
         Module {module.module}
        </Link>
      ))}
    </div>
  );
};

export default EnglishSidebar;
