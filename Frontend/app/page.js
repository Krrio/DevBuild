"use client"

import HeroMain from "@/components/HeroMain";
import { StickyHeader } from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <StickyHeader />
      <main className="overflow-hidden">
        <HeroMain />
        <HeroMain />
      </main>
    </>
  );
}
