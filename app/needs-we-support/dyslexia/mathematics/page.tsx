import Footer from "@/components/Footer";
import Link from "next/link";
import React from "react";

const contents = [
  {
    grade: "1",
    link: "/needs-we-support/dyslexia/mathematics/grade-one",
  },
  {
    grade: "2",
    link: "/needs-we-support/dyslexia/mathematics/grade-two",
  },
  {
    grade: "3",
    link: "/needs-we-support/dyslexia/mathematics/grade-three",
  },
  {
    grade: "4",
    link: "/needs-we-support/dyslexia/mathematics/grade-four",
  },
  {
    grade: "5",
    link: "/needs-we-support/dyslexia/mathematics/grade-five",
  },
];

const Mathematics = () => {
  return (
    <>
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-3xl text-dark-500 font-extrabold my-5 animate-bounce">
          Click on your Level to progress with your Lesson
        </h1>
        <div className="py-20 flex gap-5">
          {contents.map((content) => (
            <Link
              href={content.link}
              className="bg-buddy-blue rounded-lg text-buddy_text text-2xl p-20 transition-all hover:scale-105 shadow-2xl "
            >
              {" "}
              Grade {content.grade}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Mathematics;
