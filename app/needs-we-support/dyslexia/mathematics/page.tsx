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
    <div className="container flex justify-center items-center">
      <div className="py-20 flex gap-5">
        {contents.map((content) => (
          <Link href={content.link} className="bg-buddy-blue rounded-lg text-buddy_text text-2xl p-20"> Grade {content.grade}</Link>
        ))}
      </div>
    </div>
  );
};

export default Mathematics;
