"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const VideoPlayer = ({
  videoUrl,
  link,
  module,
}: {
  videoUrl: string;
  link: string;
  module?: string;
}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <video width="700" controls autoPlay loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
      {module && (
        <Link href={link} className="mt-5">
          <Button className="bg-buddy-blue text-buddy_text text-xl">
            {module}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default VideoPlayer;
