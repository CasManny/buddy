"use client";
import React from "react";
import ReactPlayer from "react-player";

const HearingImpairmentVideo = ({videoUrl}: { videoUrl: string}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-5">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"100%"}
        height={"70vh"}
        className="mx-auto overflow-hidden rounded-lg"
      />
    </div>
  );
};

export default HearingImpairmentVideo;
