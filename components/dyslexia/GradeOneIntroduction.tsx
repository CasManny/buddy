"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";
import { handleAudioPlayback } from "./Introduction";
import VideoPlayer from "../VideoPlayer";
import { Input } from "../ui/input";
import Link from "next/link";

const GradeOneIntroduction = () => {
  const [target] = useState<string>("1");
  const [userInput, setUserInput] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleCheckAnswer = () => {
    if (userInput === target) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  useEffect(() => {
    handleCheckAnswer();
  }, [userInput]);
  return (
    <div className="container overflow-auto pb-20 scrollbar-hide">
      <div className=" my-5">
        <h1 className="text-3xl text-dark-400 antialiased font-extrabold">
          Introduction to Number 1
        </h1>
      </div>
      <div className="">
        <Image
          src={"/Dyslexia/Maths/Grade 1/Images/number1.png"}
          width={100}
          height={100}
          alt="number"
          className="w-56 h-56"
        />
        <Button
          className="text-buddy_text mt-2 bg-buddy-blue text-2xl p-8"
          onClick={() =>
            handleAudioPlayback(
              "Let's learn about the number 1. This is the number 1."
            )
          }
        >
          <Play className="animate-ping" /> Play Instruction
        </Button>
        <VideoPlayer videoUrl="/Dyslexia/Maths/Grade 1/Animation /I am number 1_.mp4" />
      </div>
      <div className="flex gap-5 mt-5 items-center">
        <Input
          placeholder="Type the Number 1"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="placeholder:text-dark-400 p-8 placeholder:text-lg text-lg"
        />
      </div>
      {userInput && (
        <div className="mt-5">
          {isCorrect && userInput ? (
            <div className="mt-5 text-xl font-bold">
              <p className="text-buddy-green text-lg">You are correct!</p>
              <Link
                href={"/needs-we-support/dyslexia/mathematics/grade-two"}
                className="mt-5"
              >
                <Button className="bg-buddy-blue text-buddy_text text-xl p-8">
                  Move to Module Two <ArrowRight className="animate-bounce" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="">
              <p className="text-buddy-red text-lg">You got is Wrong! Try Again... </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GradeOneIntroduction;
