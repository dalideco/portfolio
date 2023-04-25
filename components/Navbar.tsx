import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";
import { useHashRouter } from "@/contexts/HashRouter.context";
import MenuButton from "./MenuButton";
import useMouseAnimation from "@/hooks/useMouseAnimation";
import { useMouse } from "@/contexts/Mouse.context";

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
        </div>

        {/* menu button */}
        <MenuButton />
      </div>
    </div>
  );
}
