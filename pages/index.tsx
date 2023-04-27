import Navbar from "@/components/Navbar";
import { HashRouterProvider } from "@/contexts/HashRouter.context";
import { MouseProvider } from "@/contexts/Mouse.context";
import About from "@/parts/About";

export default function Home() {
  return (
    <HashRouterProvider>
      <MouseProvider>
        <main>
          <Navbar />
          <About />
        </main>

        <div style={{ height: "200vh" }}></div>
      </MouseProvider>
    </HashRouterProvider>
  );
}
