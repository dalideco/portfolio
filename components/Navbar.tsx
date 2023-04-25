import { useHashRouter } from "@/contexts/HashRouter.context";
import { useMouse } from "@/contexts/Mouse.context";
import useMouseAnimation from "@/hooks/useMouseAnimation";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

function RouteLink({ route }: { route: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { currentRoute } = useHashRouter();

  useMouseAnimation(ref);
  const { triggerHover, stopHover } = useMouse();

  return (
    <Link
      ref={ref}
      href={`/#${route}`}
      id={`${route}-button`}
      className={
        currentRoute === route || (route === "about" && !currentRoute)
          ? styles.current
          : ""
      }
      onMouseOver={triggerHover}
      onMouseOut={stopHover}
    >
      {route.charAt(0).toUpperCase() + route.substring(1)}
    </Link>
  );
}

function ButtonHighlight() {
  const { currentRoute } = useHashRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const route = currentRoute || "about";

    const button = document.getElementById(`${route}-button`);
    if (!button) return;
    const width = button.offsetWidth;
    const position = button.offsetLeft;

    current.style.width = width + "px";
    current.style.transform = `translateX(${position}px)`;
  }, [currentRoute]);
  return <div ref={ref} className={styles.highlight}></div>;
}

export default function Navbar() {
  const { ROUTES } = useHashRouter();

  return (
    <div className={styles.container}>
      {/* logo */}
      <Logo />

      <div className="flex items-center">
        {/* navigation buttons */}
        <div className={styles.links}>
          {ROUTES.map((route) => (
            <RouteLink key={route} route={route}></RouteLink>
          ))}
          <ButtonHighlight />
        </div>

        {/* menu button */}
        <MenuButton />
      </div>
    </div>
  );
}
