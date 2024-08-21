"use client";
import { hearingImpairment } from "@/constants";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import HearingImpairmentVideo from "./HearingImpairmenVideo";

const HearingImpairmentTest = () => {
  const [data, setData] = useState(hearingImpairment);
  const [letter, setLetter] = useState("hello");
  const [selectedData, setSelectedData] = useState([]);

  const handleChange = () => {
    if (letter) {
      const d = data.find((item) => item.lesson === letter);
      setSelectedData(d);
    }
  };

  useEffect(() => {
    handleChange()
  }, [letter]);

  return (
    <div className="flex justify-center items-center flex-col py-16">
      <h1 className="text-center text-4xl mb-2 tracking-wider">
        Learn Sign Language
      </h1>
      <p className="my-2 text-lg tracking-wider">
        Select a letter to see its sign Language representation
      </p>
      <div className="flex gap-5">
        {data.map((item, index) => (
          <Button className="bg-buddy-blue text-xl text-buddy_text w-[100px] font-extrabold p-8">
            {item.lesson}
          </Button>
        ))}
      </div>
      <HearingImpairmentVideo letter={letter} data={selectedData} />
    </div>
  );
};

export default HearingImpairmentTest;
