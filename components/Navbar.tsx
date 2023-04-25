import { useHashRouter } from "@/contexts/HashRouter.context";
import { useMouse } from "@/contexts/Mouse.context";
import useMouseAnimation from "@/hooks/useMouseAnimation";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";
import { useRef } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

function RouteLink({ route }: { route: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useMouseAnimation(ref);
  const { triggerHover, stopHover } = useMouse();

  return (
    <Link
      ref={ref}
      key={route}
      href={`/#${route}`}
      onMouseOver={triggerHover}
      onMouseOut={stopHover}
    >
      {route.charAt(0).toUpperCase() + route.substring(1)}
    </Link>
  );
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
          <div className={styles.highlight}></div>
        </div>

        {/* menu button */}
        <MenuButton />
      </div>
    </div>
  );
}
