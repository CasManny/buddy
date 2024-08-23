"use client";
import { hearingImpairment } from "@/constants";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import HearingImpairmentVideo from "./HearingImpairmenVideo";
import Image from "next/image";

interface LessonData {
  lesson: string;
  videoUrl: string;
  image: string;
}

const HearingImpairmentTest = () => {
  const [selectedLesson, setSelectedLesson] = useState<LessonData | null>(null);

  const handleButtonClick = ({ lesson }: { lesson: string }) => {
    const selectedData = hearingImpairment.find(
      (item) => item.lesson === lesson
    );
    setSelectedLesson(selectedData || null);
  };

  return (
    <div className="container flex justify-center items-center flex-col py-16 scrollbar-hide overflow-auto">
      <h1 className="text-center text-4xl mb-2 tracking-wider">
        Learn Sign Language
      </h1>
      <p className="my-2 text-lg tracking-wider">
        Select a letter to see its sign Language representation
      </p>
      <div className="flex gap-5">
        {hearingImpairment.map((item) => (
          <Button
            key={item.lesson}
            onClick={() => handleButtonClick({ lesson: item.lesson })}
            className="bg-buddy-blue text-xl text-buddy_text w-[100px] font-extrabold p-8"
          >
            {item.lesson}
          </Button>
        ))}
      </div>
      {selectedLesson && (
        <HearingImpairmentVideo videoUrl={selectedLesson.videoUrl} />
      )}
    </div>
  );
};

export default HearingImpairmentTest;
