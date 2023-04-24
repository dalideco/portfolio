import { useEffect } from "react";

export default function useMouseAnimation(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    console.log("running");
    const current = ref.current;
    if (!current) return;

    const onMouseMove = (e: MouseEvent) => {
      //@ts-ignore
      const el: HTMLElement = e.target;

      const elCenterX = el.offsetLeft + el.offsetWidth / 2;
      const elCenterY = el.offsetTop + el.offsetHeight / 2;
      const mouseX = e.clientX - elCenterX;
      const mouseY = e.clientY - elCenterY;

      const transform = `translate(${mouseX * 0.3}%, ${mouseY * 0.3}%)`;
      current.style.transform = transform;
    };

    const onMouseLeave = () => {
      current.style.transform = "";
    };

    current.onmousemove = onMouseMove;
    current.onmouseleave = onMouseLeave;
    return () => {
      current.onmousemove = null;
      current.onmouseleave = null;
    };
  }, [ref]);
}
