import Navbar from "@/components/Navbar";
import { HashRouterProvider } from "@/contexts/HashRouter.context";

export default function Home() {
  return (
    <HashRouterProvider>
      <main>
        <Navbar />
      </main>
    </HashRouterProvider>
  );
}
