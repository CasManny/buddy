import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DyslexiaPage = () => {
  return (
    <div className="container w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-center text-4xl antialiased font-extrabold mb-5">Welcome 👋</h1>
      <div className="w-full flex justify-center items-center flex-col">
        <video width="700" controls autoPlay loop>
          <source src="/Dyslexia/dyslexiavideo.mp4" type="video/mp4" />
        </video>
        <Link href={'/needs-we-support/dyslexia/module-one'} className="mt-5">
          <Button className="bg-buddy-blue text-buddy_text text-xl">Move module One</Button>
        </Link>
      </div>
    </div>
  );
};

export default DyslexiaPage;
