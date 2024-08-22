"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const VideoPlayer = ({
  videoUrl,
  link,
  module,
}: {
  videoUrl: string;
  link?: string;
  module?: string;
}) => {
  return (
    <div className="w-full flex mt-5 items-end gap-5">
      <video width="700" controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
      {link && (
        <Link href={link} className="mt-5">
          <Button className="bg-buddy-blue text-buddy_text text-xl p-8">
            {module} <ArrowRight className="animate-bounce" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default VideoPlayer;
