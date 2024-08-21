import DysgraphiaTest from "@/components/dysgraphia/DysgraphiaTest";
import React from "react";

const DysgraphiaPage = () => {
  return (
    <div className="container">
      <div className="text-center py-20">
        <h1 className="text-4xl antialiased font-extrabold ">Dysgraphia-Friendly Letter Learning</h1>
        <p className="my-2 text-xl tracking-wider font-semibold">click on a letter to hear its pronunciation</p>
        <div className="flex w-full items-center justify-center flex-col">
        <DysgraphiaTest />
        <p>You are listening to letter A</p>

        </div>
      </div>
    </div>
  );
};

export default DysgraphiaPage;
