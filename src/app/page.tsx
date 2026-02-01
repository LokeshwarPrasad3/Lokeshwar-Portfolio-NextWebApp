import { TopNavbar } from "@/components/layouts/TopNavbar";
import { HeroSection } from "@/components/home/hero/HeroSection";
import CometPath from "@/components/home/hero/CometPath";
import { CoolMode } from "@/components/ui/cool-mode";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <div className="min-h-screen min-w-screen rotate-180 opacity-100 fixed z-0 w-full overflow-hidden">
        <Particles />
      </div> */}

      <TopNavbar />
      <CoolMode>
        <main className="w-full flex-1">
          <HeroSection />
        </main>
      </CoolMode>
    </div>
  );
}
