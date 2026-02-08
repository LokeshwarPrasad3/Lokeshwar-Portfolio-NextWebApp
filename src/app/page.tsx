import { TopNavbar } from "@/components/layouts/TopNavbar";
import { HeroSection } from "@/components/home/hero/HeroSection";
import { FunStatsSection } from "@/components/home/stats/FunStatsSection";
import { ProofSection } from "@/components/home/proof/ProofSection";
import { RealityCheckSection } from "@/components/home/reality-check/RealityCheckSection";
import { WorkSection } from "@/components/home/work/WorkSection";
import { OneLastThing } from "@/components/home/footer/OneLastThing";
import { Footer } from "@/components/layouts/Footer";
import CometPath from "@/components/home/hero/CometPath";
import { CoolMode } from "@/components/ui/cool-mode";
import Particles from "@/components/Particles";
import Lanyard from "@/components/ui/lanyard";
import TrafficChart from "@/components/analytics/TrafficChart";

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
          <FunStatsSection />
          <ProofSection />
          <RealityCheckSection />
          <WorkSection />
          <OneLastThing />
          <Footer />
        </main>
      </CoolMode>
    </div>
  );
}
