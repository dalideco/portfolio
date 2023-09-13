import React, { useEffect } from "react";
import styles from "@/styles/parts/About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const animateTitle = () => {
    return gsap.to("#title", {
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
  };

  const animateAboutMeContainer = () => {
    return gsap.to("#about-me-container", {
      scrollTrigger: {
        trigger: "#title",
        scrub: true,
        start: "bottom 40%",
        markers: false,
      },
      y: -50,
      duration: 1,
    });
  };

  const animateImage = () => {
    return gsap.to("#about-me-container img", {
      scrollTrigger: {
        trigger: "#title",
        scrub: true,
        start: "bottom 40%",
        markers: false,
      },
      scale: 0.9,
      duration: 0.5,
    });
  };

  const animateSubtitle = () => {
    return gsap.to("#about-me-container #subtitle", {
      scrollTrigger: {
        trigger: "#about-me-container",
        scrub: true,
        start: "top 40%",
        markers: false,
      },
      x: 30,
      duration: 1,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleAnimation = animateTitle();
    const aboutmeAnimation = animateAboutMeContainer();
    const imageAnimation = animateImage();
    const subtitleAnimation = animateSubtitle();

    return () => {
      titleAnimation.kill();
      aboutmeAnimation.kill();
      imageAnimation.kill();
      subtitleAnimation.kill();
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
      <div
        id="about-me-container"
        className="h-[70vh] mx-6 bg-lightgray flex overflow-hidden flex-col lg:flex-row items-center lg:items-stretch"
      >
        <div className="flex-1 flex flex-col justify-center p-8">
          <h2> Mohamed Ali Sahnoun </h2>
          <p id="subtitle" className="text-gray ml-2 mt-2">
            {" "}
            Based in Tunisia{" "}
          </p>
        </div>

        <Image
          className="flex-1 object-cover scale-110"
          src="/photos/me.jpeg"
          width={200}
          height={200}
          alt="me"
        />

        <div className="flex-1 flex flex-col justify-center p-8">
          <h3> sahnoun.mohamedali1@gmail.com </h3>
        </div>
      </div>
    </div>
  );
}
