'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const modules = [
  {
    chapter: "Introduction",
    link: "/needs-we-support/dyslexia",
  },
  {
    chapter: "Module One",
    link: "/needs-we-support/dyslexia/module-one",
  },
  {
    chapter: "Module Two",
    link: "/needs-we-support/dyslexia/module-two",
  },
  {
    chapter: "Module Three",
    link: "/needs-we-support/dyslexia/module-three",
  },
  {
    chapter: "Module Four",
    link: "/needs-we-support/dyslexia/module-four",
  },
  {
    chapter: "Module Five",
    link: "/needs-we-support/dyslexia/module-five",
  },
];

const DyslexiaSidebar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-72 flex flex-col gap-5 p-10 border-r h-full">
      {modules.map((module) => (
        <Link
          href={module.link}
          className={`text-2xl hover:bg-buddy-blue rounded-lg p-5 hover:text-buddy_text text-nowrap ${pathname === module.link && 'bg-buddy-blue text-buddy_text'}`}
        >
          {module.chapter}
        </Link>
      ))}
    </div>
  );
};

export default DyslexiaSidebar;
