"use client";
import React from "react";
import ReactPlayer from "react-player";

const HearingImpairmentVideo = ({
  letter,
  data,
}: {
  letter: string;
  data: { lesson: string; videoUrl: string };
}) => {
  return (
    <div className="w-[600px] mx-auto mt-5">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={true}
        width={"100%"}
        height={"70vh"}
        className="mx-auto overflow-hidden rounded-lg"
      />
    </div>
  );
};

export default HearingImpairmentVideo;
