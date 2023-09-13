import React from "react";

export default function CharacterSplit({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`tracking-[-0.15em] ${char === " " ? "mr-1" : ""}`}
        >
          {char}{" "}
        </span>
      ))}
    </>
  );
}
