import CharacterSplit from "@/components/CharacterSplit";
import UnderlinedLink from "@/components/UnderlinedLink";
import React from "react";

export default function Biography() {
  return (
    <div className="min-h-[70vh] flex flex-col px-32 justify-center">
      <p className="font-semibold text-lg">
        <CharacterSplit
          text="I am Mohamed Ali, a software engineering student with a passion for
            software development. Throughout my academic career, I have demonstrated
            a strong understanding of programming concepts and have applied my
            knowledge to develop high-quality software solutions. I have a sharp eye
            for detail and a knack for problem-solving, which makes me an invaluable
            asset to any team. I am committed to staying up-to-date with the latest
            industry trends and technologies, ensuring that I am always equipped
            with the tools necessary to deliver outstanding results. My drive and
            commitment to excellence make me a rising star in the field of software
            engineering."
        />{" "}
        <UnderlinedLink className="ml-2">View CV {'->'} </UnderlinedLink>
      </p>
    </div>
  );
}
