"use client";
import { dyslexia } from "@/constants";
import React from "react";
import { Button } from "../ui/button";
import { handleAudioPlayback } from "./Introduction";
import { Play } from "lucide-react";
import { Input } from "../ui/input";

const Test = () => {
  return (
    <div>
      {dyslexia.map((item, index) => (
        <div className="border p-5 my-5">
          <h1>This is Letter {item.lesson}</h1>
          <div className="flex justify-between items-center">
            <Button onClick={() => handleAudioPlayback(item.answer)}>
              <Play />
            </Button>

            <div className="flex gap-2">
              <Input placeholder="Type the letter" />
              <Button className="bg-buddy-blue text-buddy_text">submit</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
