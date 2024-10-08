import { buddyFeatures } from "@/constants";
import Image from "next/image";
import React from "react";

const SpecialFeatures = () => {
  return (
    <section className="container py-20" id="features">
      <div className="flex flex-col justify-center items-center text-buddy-blue">
        <h1 className="text-4xl font-extrabold mb-2">Buddy's Features</h1>
        <p>
          Everything you need to ensure every child succeeds with Buddy by their
          side
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {buddyFeatures.map((item, index) => (
          <div className="bg-buddy-bg p-10 rounded-lg text-center" key={index}>
            <Image
              src={item.image}
              alt="image"
              width={50}
              height={50}
              className="w-20 h-20 mx-auto"
            />

            <h1 className="font-bold my-2 tracking-wider text-2xl">{item.label}</h1>
            <p className="text-xl">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialFeatures;
