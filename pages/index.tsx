import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { asPath } = useRouter();

  useEffect(() => {
    const route = asPath.split("#")[1] || null;
    console.log(route)
  }, [asPath]);

  return (
    <main>
      <Navbar />
    </main>
  );
}
