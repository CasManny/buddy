"use client";
import { dysgraphia } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import { handleAudioPlayback } from "../dyslexia/Introduction";

const DysgraphiaTest = () => {
  return (
    <div className="flex gap-5 my-5">
      {dysgraphia.map((item, index) => (
        <Button
          key={index}
          className="w-[100px] bg-buddy-blue text-buddy_text text-2xl"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleAudioPlayback(e.target.value)
          }
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default DysgraphiaTest;
