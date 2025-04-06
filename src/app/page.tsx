"use client";

import AboutMeCard from "./pages/AboutMe";
import BlogCard from "./pages/BlogCard";
import BriefIntroduction from "./pages/BriefIntroduction";
import ColorSelectorCard from "./pages/ColorSelectorCard";
import CopyrightCard from "./pages/CopyrightCard";
import NowCard from "./pages/NowCard";
import PlaygroundCard from "./pages/PlaygroundCard";
import TimeCard from "./pages/TimeCard";
import WorkTogetherCard from "./pages/WorkTogetherCard";
import WorksCard from "./pages/WorksCard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-white font-sans antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 animate-grid bg-fancy-grid" />

      <main className="relative z-10 flex flex-col gap-12 px-4 sm:px-6 md:px-8 py-20 max-w-6xl mx-auto">

        <section className="flex flex-col lg:flex-row gap-6 items-start w-full">
          <div className="flex-1 min-w-0">
            <BriefIntroduction />
          </div>
          <div className="w-full lg:max-w-sm">
            <AboutMeCard />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <WorkTogetherCard />
            <ColorSelectorCard />
          </div>

          <div className="flex flex-col gap-6">
            <TimeCard />
            <NowCard />
            <BlogCard />
          </div>

          <div className="flex flex-col gap-6">
            <PlaygroundCard />
            <WorksCard />
            <CopyrightCard />
          </div>
        </section>
      </main>
    </div>
  );
}
