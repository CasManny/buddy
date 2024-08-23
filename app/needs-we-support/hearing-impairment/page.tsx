import Footer from "@/components/Footer";
import HearingImpairmentSidebar from "@/components/hearing-impairment/HearingImpairmentSidebar";
import HearingImpairmentTest from "@/components/hearing-impairment/HearingImpairmentTest";
import React from "react";

const HearingImpairmentPage = () => {
  return (
    <>
      <div className="container w-full h-full flex justify-center items-center p-10">
        <HearingImpairmentSidebar />
        <div className="">
          <h1 className="text-center text-4xl antialiased font-extrabold mb-5">
            Welcome 👋
          </h1>
          <div className="w-full flex justify-center items-center flex-col">
            <video width="700" controls autoPlay loop>
              <source src="/hearing-impairment.mp4" type="video/mp4" />
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

export default HearingImpairmentPage;
