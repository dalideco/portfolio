import styles from "@/styles/components/Mouse.module.css";
import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useRef
} from "react";

export interface MouseElement {
  triggerHover: () => void;
  stopHover: () => void;
}

const MouseComponent = (_: {}, ref: ForwardedRef<MouseElement>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    triggerHover: () => {
      circleRef.current?.classList.add(styles.hovering);
    },
    stopHover: () => {
      circleRef.current?.classList.remove(styles.hovering);
    },
  }));

  useEffect(() => {
    const current = containerRef.current;
    if (!current) return;

    const mousemove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const transform = `translate(${x}px, ${y}px)`;

      current.style.transform = transform;
    };
    window.onmousemove = mousemove;
    return () => {
      window.onmousemove = null;
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={circleRef} className={styles.circle}>
        {" "}
      </div>
    </div>
  );
};

const Mouse = React.forwardRef(MouseComponent);

export default Mouse;
