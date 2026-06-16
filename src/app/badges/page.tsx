import Image from "next/image";
import { gag2Badges, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Badges & Achievements: All 23 & How to Unlock",
  description: "All 23 GAG2 badges and achievements with unlock requirements. Plant height, fruit weight, pet, mutation, and limited-time event badges with images.",
  alternates: { canonical: "https://growagarden2pet.wiki/badges" },
};

const badgeImage: Record<string, string> = {
  "Carrot!": "/grow-a-garden-2/badges/01_First_Seed.webp",
  "We are so back!": "/grow-a-garden-2/badges/02_We_are_so_back.webp",
  "Builder!": "/grow-a-garden-2/badges/03_Builder.webp",
  "First Pet!": "/grow-a-garden-2/badges/04_First_Pet.webp",
  "Egg Hatcher!": "/grow-a-garden-2/badges/05_Egg_Hatcher.webp",
  "OMG it's BIG!": "/grow-a-garden-2/badges/06_OMG_its_BIG.webp",
  "OMG it's HUGE!": "/grow-a-garden-2/badges/07_OMG_its_HUGE.webp",
  "First Mutation!": "/grow-a-garden-2/badges/08_First_Mutation.webp",
  "Golden!": "/grow-a-garden-2/badges/09_Golden.webp",
  "Rainbow!": "/grow-a-garden-2/badges/10_Rainbow.webp",
  "5kg Fruit!": "/grow-a-garden-2/badges/11_5kg_Fruit.webp",
  "10kg Fruit!": "/grow-a-garden-2/badges/12_10kg_Fruit.webp",
  "25kg Fruit!": "/grow-a-garden-2/badges/13_25kg_Fruit.webp",
  "50kg Fruit!": "/grow-a-garden-2/badges/14_50kg_Fruit.webp",
  "100kg Fruit!": "/grow-a-garden-2/badges/15_100kg_Fruit.webp",
  "10ft Plant!": "/grow-a-garden-2/badges/16_10ft_Plant.webp",
  "25ft Plant!": "/grow-a-garden-2/badges/17_25ft_Plant.webp",
  "50ft Plant!": "/grow-a-garden-2/badges/18_50ft_Plant.webp",
  "100ft Plant!": "/grow-a-garden-2/badges/19_100ft_Plant.webp",
  "500ft Plant!": "/grow-a-garden-2/badges/20_500ft_Plant.webp",
  "1000ft Plant!": "/grow-a-garden-2/badges/21_1000ft_Plant.webp",
  "Stole a Fruit!": "/grow-a-garden-2/badges/22_Stole_A_Fruit.webp",
  OG: "/grow-a-garden-2/badges/23_OG_Badge.webp",
};

const categories = [...new Set(gag2Badges.map((badge) => badge.category))];

export default function BadgesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center gap-4">
        <Image
          src="/grow-a-garden-2/badges/23_OG_Badge.webp"
          alt="Grow a Garden 2 badge icon"
          width={64}
          height={64}
          className="rounded-xl bg-[#f5f9f3] p-1"
        />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Badges & Achievements</h1>
          <p className="text-sm text-[#777]">23 badges across plant height, fruit weight, pets, mutations, and limited events.</p>
        </div>
      </div>

      <div className="mb-8 grid gap-2 sm:grid-cols-3">
        {[
          { label: "Easiest", badges: "Carrot! + First Pet!", tip: "Start with the tutorial and first pet route." },
          { label: "Hardest", badges: "1000ft Plant! + 100kg Fruit!", tip: "Use late-game crops, growth gear, and patience." },
          { label: "Limited", badges: "OG + We are so back!", tip: "Finish limited-time tasks before they leave." },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-[#C8E6C9]/50 p-4">
            <span className="text-[10px] font-bold uppercase text-[#777]">{item.label}</span>
            <p className="text-sm font-bold text-[#4b4b4b]">{item.badges}</p>
            <p className="text-xs text-[#777]">{item.tip}</p>
          </div>
        ))}
      </div>

      {categories.map((category) => {
        const badges = gag2Badges.filter((badge) => badge.category === category);
        return (
          <section key={category} className="mt-6">
            <h2 className="mb-3 text-lg font-extrabold text-[#2E3B2E]">{category}</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3 transition hover:-translate-y-0.5 hover:border-sprout hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
                >
                  <Image
                    src={badgeImage[badge.name]}
                    alt={`${badge.name} badge`}
                    width={58}
                    height={58}
                    className="h-14 w-14 shrink-0 rounded-xl bg-[#f5f9f3] object-contain p-1"
                  />
                  <div>
                    <p className="text-sm font-extrabold text-[#4b4b4b]">{badge.name}</p>
                    <p className="mt-1 text-xs text-[#777]">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <RelatedGuides guides={[
        { href: "/pets", title: "All Pets", detail: "Egg hatching gives pets", image: gag2Images.pet("bunny") },
        { href: "/eggs", title: "Egg Guide", detail: "Hatch eggs for pet badges", emoji: "Eggs" },
        { href: "/mutations", title: "Mutations", detail: "Get mutation badges", emoji: "Mutations" },
      ]} />
    </main>
  );
}
