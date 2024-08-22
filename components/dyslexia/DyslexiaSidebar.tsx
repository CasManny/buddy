'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const modules = [
  {
    chapter: "Mathematics",
    link: "/needs-we-support/dyslexia/mathematics",
  },
  {
    chapter: "Discovery Time",
    link: "/needs-we-support/dyslexia/discovery-time",
  },
  {
    chapter: "English Language",
    link: "/needs-we-support/dyslexia/english",
  },
 
];

const DyslexiaSidebar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="w-72 flex flex-col gap-5 p-10 h-full">
      {modules.map((module) => (
        <Link
          href={module.link}
          className={`text-2xl hover:bg-buddy-blue rounded-lg p-5 w-fit hover:text-buddy_text text-nowrap ${pathname === module.link && 'bg-buddy-blue text-buddy_text'}`}
        >
          {module.chapter}
        </Link>
      ))}
    </div>
  );
};

export default DyslexiaSidebar;
