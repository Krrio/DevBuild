"use client"

import HeroMain from "@/components/HeroMain";
import { StickyHeader } from "@/components/Navbar";
import Oferts from "@/components/Oferts";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <Spotlight className="-top-20 -left-15 hidden lg:block"/>
      <main className="overflow-hidden">
        <HeroMain />
        <Oferts />
      </main>
    </>
  );
}
