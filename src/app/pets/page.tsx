import Image from "next/image";
import Link from "next/link";
import { gag2Pets, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Pets: All 12 Prices, Abilities, Rarities & Tier List",
  description: "All 12 GAG2 pets with Sheckle prices, abilities, rarities, tier rankings, and best picks by role. Find which pet to buy first with our progression guide.",
  alternates: { canonical: "https://growagarden2pet.wiki/pets" },
};

const rarityColor: Record<string, string> = {
  Common: "bg-[#F5F5F5] text-[#9E9E9E]", Uncommon: "bg-[#E8F5E9] text-[#4CAF50]",
  Rare: "bg-[#E3F2FD] text-[#2196F3]", Legendary: "bg-[#FFF3E0] text-[#FF9800]",
  Mythic: "bg-[#FCE4EC] text-[#E91E63]", Super: "bg-[#FFF8E1] text-[#FFC107]",
};
const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#9E9E9E]" };

export default function PetsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex items-center gap-4 mb-6">
        <Image src={gag2Images.pet("bunny")} alt="Bunny" width={64} height={64} className="rounded-xl" />
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">All Pets Guide</h1>
          <p className="text-sm text-[#777]">12 pets · spawn randomly in lobby · buy before timer expires</p>
        </div>
      </div>

      <p className="text-base text-[#4b4b4b] leading-relaxed mb-6">
        Pets spawn randomly in the lobby with countdown timers. Buy them before they despawn. Other players can
        outbid you by paying double. After purchase, escort the pet to your garden. You start with <strong>3 pet slots</strong>
        (4th costs 200K, 5th costs 1M Sheckles).
      </p>

      {/* Quick Picks */}
      <div className="grid gap-2 sm:grid-cols-3 mb-8">
        {[
          { l: "Best First Pet", p: "Bunny (20K)", r: "+5 Speed to escape thieves" },
          { l: "Best Value", p: "Deer (50K)", r: "+10% growth stacks infinitely" },
          { l: "Best Defense", p: "Bee (1M)", r: "Auto-defends at low cost" },
        ].map((q) => (
          <div key={q.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
            <span className="text-[10px] font-bold text-[#777] uppercase">{q.l}</span>
            <p className="text-sm font-bold text-[#4b4b4b]">{q.p}</p>
            <p className="text-xs text-[#777]">{q.r}</p>
          </div>
        ))}
      </div>

      {/* Pets Table */}
      <h2 className="text-xl font-extrabold text-[#2E3B2E] mb-3">All Pets Database</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]">
              <th className="px-3 py-3 text-left font-bold text-[#777] text-xs uppercase w-10">#</th>
              <th className="px-3 py-3 text-left font-bold text-[#777] text-xs uppercase">Pet</th>
              <th className="px-3 py-3 text-left font-bold text-[#777] text-xs uppercase">Rarity</th>
              <th className="px-3 py-3 text-left font-bold text-[#777] text-xs uppercase">Price</th>
              <th className="px-3 py-3 text-left font-bold text-[#777] text-xs uppercase">Ability</th>
              <th className="px-3 py-3 text-center font-bold text-[#777] text-xs uppercase w-12">Tier</th>
            </tr>
          </thead>
          <tbody>
            {gag2Pets.map((p) => (
              <tr key={p.name} className="border-b border-[#3c3c3c]/10 last:border-0 hover:bg-[#C8E6C9]/10">
                <td className="px-3 py-3 text-center">
                  <Image src={gag2Images.pet(p.imageKey)} alt={p.name} width={32} height={32} className="rounded-lg" />
                </td>
                <td className="px-3 py-3 font-bold text-[#4b4b4b]">{p.name} <span className="text-base ml-1">{p.emoji}</span></td>
                <td className="px-3 py-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${rarityColor[p.rarity]}`}>
                    {p.rarity}
                  </span>
                </td>
                <td className="px-3 py-3 font-mono text-sm text-[#4b4b4b] font-semibold">{p.costSheckles}</td>
                <td className="px-3 py-3 text-xs text-[#777] leading-relaxed max-w-[280px]">{p.ability}</td>
                <td className="px-3 py-3 text-center"><span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-extrabold ${tierBg[p.tier]}`}>{p.tier}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tier List */}
      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">Tier List</h2>
      <div className="space-y-2">
        {(["S","A","B","C"] as const).map((tier) => {
          const pets = gag2Pets.filter((p) => p.tier === tier);
          return (
            <div key={tier} className="flex items-start gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${tierBg[tier]}`}>{tier}</span>
              <div className="flex flex-wrap gap-2">
                {pets.map((p) => (
                  <span key={p.name} className="text-sm font-semibold text-[#4b4b4b]">{p.emoji} {p.name}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">FAQ</h2>
      <div className="space-y-3">
        {[
          { q: "What does the Deer do?", a: "Deer (50K Sheckles, Rare) makes plants grow <strong>10% faster</strong>. This stacks — buy 2-3 Deer for massive speed." },
          { q: "Which pet should I buy first?", a: "<strong>Bunny (20K)</strong> for speed → <strong>Deer (50K)</strong> for growth → <strong>Bee (1M)</strong> for defense." },
          { q: "What is the best pet for making money?", a: "<strong>Unicorn (4M+)</strong> doubles Rainbow mutations (40× value). <strong>Raccoon (5M+)</strong> steals from other gardens at night." },
        ].map((faq) => (
          <div key={faq.q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{faq.q}</h3>
            <p className="mt-1 text-sm text-[#777]" dangerouslySetInnerHTML={{ __html: faq.a }} />
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/beginner-guide", title: "Beginner Guide", detail: "First hour walkthrough — what to buy in order", emoji: "🎯" },
        { href: "/seeds", title: "Seeds & Plants", detail: "Best crops + mutation values for max income", image: gag2Images.seed("seed-shop") },
        { href: "/wheelbarrow", title: "Wheelbarrow", detail: "What it does and when 500K is too early", image: gag2Images.gear("wheelbarrow-gag-2") },
        { href: "/codes", title: "Active Codes", detail: "TEAMGREENBEAN — verified June 15", emoji: "🎫" },
        { href: "/night-stealing", title: "Night Stealing", detail: "How to defend your garden at night", emoji: "🌙" },
        { href: "/mutations", title: "Mutations", detail: "Gold, Rainbow, Electric multipliers", emoji: "🧬" },
      ]} />
    </main>
  );
}
