import { Button } from "@/components/ui/button";
import { dysgraphia } from "@/constants";
import React from "react";

const AutismSpectrumPage = () => {
  return (
    <div className="container">
      <div className="text-center py-20">
        <h1 className="text-4xl antialiased font-extrabold ">
          Letter Pronouciation Practice
        </h1>
        <p className="my-2 text-xl tracking-wider font-semibold">
          Click on a button to hear the pronouciation of each Letter
        </p>
        <div className="flex gap-4 justify-center items-center mt-10">
          {dysgraphia.map((item, index) => (
            <Button className="bg-buddy-blue text-buddy_text w-[100px] p-5 font-bold text-xl">
              play '{`${item}`}'
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutismSpectrumPage;
