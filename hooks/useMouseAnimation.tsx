import { useEffect } from "react";

export default function useMouseAnimation(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const onMouseMove = (e: MouseEvent) => {
      //@ts-ignore
      const el: HTMLElement = e.target;

      const coordinates = el.getBoundingClientRect();
      const elCenterX = coordinates.x + el.offsetWidth / 2;
      const elCenterY = coordinates.y + el.offsetHeight / 2;
      
      const mouseX = e.clientX - elCenterX;
      const mouseY = e.clientY - elCenterY;

      // console.log(mouseX,mouseY)

      const transform = `translate(${mouseX * 0.3}%, ${mouseY * 0.3}%)`;
      current.style.transform = transform;
    };

    const onMouseOut = () => {
      current.style.transform = "";
    };

    current.onmousemove = onMouseMove;
    current.onmouseout = onMouseOut;
    return () => {
      current.onmousemove = null;
      current.onmouseout = null;
    };
  }, [ref]);
}
