import { needsWeSupport } from "@/constants";
import Link from "next/link";
import React from "react";

const SpecialNeeds = () => {
  return (
    <section className="container py-5">
      <div className="flex justify-center items-center flex-col text-buddy-blue">
        <h1 className=" text-4xl font-extrabold mb-2">Special Needs We support</h1>
        <p>
          Buddy is here to cater to the diverse needs of children with various
          challenge
        </p>
      </div>
      <div className="needs-container grid grid-cols-3 gap-3 mt-5">
        {needsWeSupport.map((item, index) => (
          <Link href={`/needs-we-support/${item.title}`} className="bg-buddy_text p-10 text-center rounded-lg">
            <h2 className="font-bold my-2 tracking-wider text-lg">{item.title}</h2>
            <p>{ item.content}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialNeeds;
