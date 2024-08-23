import { needsWeSupport } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialNeeds = () => {
  return (
    <section className="container py-10" id="needs">
      <div className="flex justify-center items-center flex-col text-buddy-blue">
        <h1 className=" text-4xl font-extrabold mb-2">Special Needs We support</h1>
        <p>
          Buddy is here to cater to the diverse needs of children with various
          challenge
        </p>
      </div>
      <div className="needs-container grid grid-cols-3 gap-4 mt-5">
        {needsWeSupport.map((item, index) => (
          <Link href={`/needs-we-support${item.link}`} className="bg-buddy-bg p-10 text-center rounded-lg hover:scale-105 transition-all">
            <Image src={item.image} alt="image" width={50} height={50} className="w-20 h-20 mx-auto" />
            <h2 className="font-bold my-2 tracking-wider text-2xl">{item.title}</h2>
            <p className="text-xl">{ item.content}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SpecialNeeds;
