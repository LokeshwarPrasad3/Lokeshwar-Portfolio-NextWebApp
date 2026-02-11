"use client";

import dynamic from "next/dynamic";

const DynamicBackground = dynamic(() => import("@/components/background/DynamicBackground"), {
  ssr: false,
});
const Lanyard = dynamic(() => import("@/components/ui/lanyard"), {
  ssr: false,
});
const Meteors = dynamic(() => import("@/components/ui/meteors").then((mod) => mod.Meteors), {
  ssr: false,
});

export default function Backgrounds() {
  return (
    <>
      <DynamicBackground />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      <Meteors number={20} />
    </>
  );
}
