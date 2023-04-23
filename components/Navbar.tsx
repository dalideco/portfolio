import React from "react";
import Logo from "./Logo";
import styles from "@/styles/components/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      {/* logo */}
      <Logo />

      {/* nvaigation buttons */}
      <div>
        <Link href="/#about"> About </Link>
        <Link href="/#experience"> Experience </Link>
        <Link href="/#projects"> Projects </Link>
        <Link href="/#education"> Education </Link>
        <Link href="/#skill"> Skill </Link>
        <Link href="/#contact"> Contact </Link>
      </div>

      {/* menu button */}
    </div>
  );
}
