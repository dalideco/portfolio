import React from "react";
import Logo from "./Logo";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";
import { useHashRouter } from "@/contexts/HashRouter.context";
import MenuButton from "./MenuButton";

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
            <Link key={route} href={`/#${route}`}>
              {route.charAt(0).toUpperCase() + route.substring(1)}
            </Link>
          ))}
        </div>

        {/* menu button */}
        <MenuButton />
      </div>
    </div>
  );
}
