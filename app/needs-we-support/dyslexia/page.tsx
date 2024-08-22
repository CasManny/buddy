import DyslexiaSidebar from "@/components/dyslexia/DyslexiaSidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DyslexiaPage = () => {
  return (
    <>
      <div className="container w-full h-full flex justify-center items-center p-10">
        <DyslexiaSidebar />
        <div className="">
          <h1 className="text-center text-4xl antialiased font-extrabold mb-5">
            Welcome 👋
          </h1>
          <div className="w-full flex justify-center items-center flex-col">
            <video width="700" controls autoPlay loop>
              <source src="/Dyslexia/dyslexiavideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default DyslexiaPage;
