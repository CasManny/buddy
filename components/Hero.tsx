import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/ext-generate-effect";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center bg-buddy-white">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex">
        <div className="flex justify-center items-center flex-col">
          <TextGenerateEffect
            className="text-4xl "
            words="Buddy: A Friend who understands"
          />
          <TextGenerateEffect className="text-lg" words="Empowering Every child to learn in their way" />
          <Link href={"#needs"}>
            <Button className="bg-buddy-blue text-buddy_text mt-5 text-lg p-8">
              Get Started with Buddy
            </Button>
          </Link>
        </div>
        <Image
          src={"/developer.png"}
          alt="buddy"
          width={1000}
          height={1000}
          className="max-w-[400px] h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
