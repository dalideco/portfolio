import React, { useEffect } from "react";
import styles from "@/styles/parts/About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const test = gsap.to("#title", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart none none reverse",
        start: "bottom 40%",
        markers: true,
      },

      scale: 0.7,
      y: -100,
      duration: 2,
    });
    return () => {
      test.kill();
    };
  }, []);

  return (
    <div>
      {/* <div style={{ height: "100vh" }}></div> */}
      <h1 id="title" className={styles.title}>
        Make a difference with your software
      </h1>
    </div>
  );
}
