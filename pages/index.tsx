import Navbar from "@/components/Navbar";
import { HashRouterProvider } from "@/contexts/HashRouter.context";
import { MouseProvider } from "@/contexts/Mouse.context";

export default function Home() {
  return (
    <HashRouterProvider>
      <MouseProvider>
        <main>
          <Navbar />
        </main>

        <div style={{height: "200vh"}}></div>
      </MouseProvider>
    </HashRouterProvider>
  );
}
