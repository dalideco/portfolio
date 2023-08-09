import React, { useEffect } from "react";
import styles from "@/styles/parts/About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleAnimation = gsap.to("#title", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart none none reverse",
        start: "bottom 40%",
        markers: false,
      },

      scale: 0.7,
      y: -100,
      duration: 2,
    });

    const aboutmeAnimation = gsap.to("#about-me-container", {
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart none none reverse",
        start: "bottom 40%",
        markers: false,
      },

      y: -120,
      duration: 1,
    });

    return () => {
      titleAnimation.kill();
      aboutmeAnimation.kill();
    };
  }, []);

  return (
    <div>
      {/* <div style={{ height: "100vh" }}></div> */}
      {/* Title */}
      <h1 id="title" className={styles.title}>
        Make a difference with your software
      </h1>

      {/* Information rectangle */}
      <div id="about" className={styles.aboutmeContainer}>


      </div>
    </div>
  );
}
