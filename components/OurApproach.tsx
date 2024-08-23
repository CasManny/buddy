import Image from "next/image";
import React from "react";
const ourapproach = [
  {
    title: "Engage and Motivate",
    image: "/module-1.png",
    content:
      "By incorporating interactive elements, visual aids, and hands-on activities, we make learning fun and engaging for students with a range of special needs.",
  },
  {
    title: "Support Diverse Learning Styles",
    image: "/module-3.png",
    content:
      "Our content is tailored to accommodate various learning preferences and needs, ensuring that each student can learn in a way that works best for them.",
  },
  {
    title: "Build Confidence",
    image: "/module-4.png",
    content:
      "We provide positive reinforcement and support to help students build self-esteem and confidence in their abilities.",
  },
  {
    title: "Foster Independence",
    image: "/module-5.png",
    content:
      "Our aim is to empower students with the skills and strategies they need to succeed both academically and personally.",
  },
];

const OurApproach = () => {
  return (
    <div className="py-20  bg-buddy-yellow">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-center text-buddy-blue text-4xl font-extrabold">
          Our Approach
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {ourapproach.map((item, index) => (
            <div className="flex justify-center items-center flex-col p-10">
              <Image
                src={item.image}
                alt="approach"
                width={100}
                height={100}
                className="object-cover  w-40 h-40"
              />
              <h2 className="font-bold my-2 tracking-wider text-2xl">
                {item.title}
              </h2>
              <p className="text-xl">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
