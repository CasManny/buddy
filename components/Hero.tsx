import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center bg-buddy-bg">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl antialiased font-extrabold tracking-wider">Buddy: A Friend who understands</h1>
        <p className="text-center text-lg my-2">
          Empowering Every child to learn in their way
        </p>
       <Button className="bg-buddy-blue text-buddy_text mt-5 text-lg">Get Started with Buddy</Button>
      </div>

    </div>
  );
};

export default Hero;
