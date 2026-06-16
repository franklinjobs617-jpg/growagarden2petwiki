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

const rarityBorder: Record<string, string> = {
  Common: "border-[#9E9E9E]", Uncommon: "border-[#4CAF50]", Rare: "border-[#2196F3]",
  Legendary: "border-[#FF9800]", Mythic: "border-[#E91E63]", Super: "border-[#FFC107]",
};
const rarityBg: Record<string, string> = {
  Common: "bg-[#F5F5F5] text-[#9E9E9E]", Uncommon: "bg-[#E8F5E9] text-[#4CAF50]",
  Rare: "bg-[#E3F2FD] text-[#2196F3]", Legendary: "bg-[#FFF3E0] text-[#FF9800]",
  Mythic: "bg-[#FCE4EC] text-[#E91E63]", Super: "bg-[#FFF8E1] text-[#FFC107]",
};
const tierBg: Record<string, string> = { S: "bg-[#FFF8E1] text-[#FFC107]", A: "bg-[#E8F5E9] text-[#4CAF50]", B: "bg-[#E3F2FD] text-[#2196F3]", C: "bg-[#F5F5F5] text-[#9E9E9E]" };

export default function PetsPage() {
 return (
  <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
   <div className="flex items-center gap-4 mb-6">
    <Image src={gag2Images.pet("bunny")} alt="Bunny" width={64} height={64} className="rounded-xl" />
    <div>
     <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2E3B2E]">All Pets Guide</h1>
     <p className="text-sm text-[#777]">13 pets · spawn randomly · buy before timer expires</p>
    </div>
   </div>

   <p className="text-base text-[#4b4b4b] leading-relaxed mb-6">
    Pets spawn in the lobby with countdown timers. Buy before they despawn. Other players can outbid you by paying double.
    Escort the pet to your garden. Start with <strong>3 slots</strong> (4th = 200K, 5th = 1M Sheckles).
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

   {/* Pet Cards Grid */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mb-4">All Pets</h2>
   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {gag2Pets.map((pet) => (
     <div key={pet.name} className={`group rounded-2xl border-2 ${rarityBorder[pet.rarity]} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] overflow-hidden`}>
      <div className="relative h-44 bg-[#f5f9f3] flex items-center justify-center p-4">
       <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} fill className="object-contain p-6" sizes="(max-width: 640px) 50vw, 25vw" />
      </div>
      <div className="p-4">
       <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-extrabold text-[#4b4b4b]">{pet.emoji} {pet.name}</h3>
        <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold ${tierBg[pet.tier]}`}>{pet.tier}</span>
       </div>
       <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${rarityBg[pet.rarity]}`}>{pet.rarity}</span>
       <p className="mt-2 font-mono text-sm font-bold text-[#4b4b4b]">💰 {pet.costSheckles}</p>
       <p className="mt-2 text-xs text-[#777] leading-relaxed">{pet.ability}</p>
      </div>
     </div>
    ))}
   </div>

   {/* Tier List */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-10 mb-3">Tier List</h2>
   <div className="space-y-2">
    {(["S","A","B","C"] as const).map((tier) => {
     const pets = gag2Pets.filter((p) => p.tier === tier);
     return (
      <div key={tier} className="flex items-start gap-3 rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
       <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${tierBg[tier]}`}>{tier}</span>
       <div className="flex flex-wrap gap-2">{pets.map((p) => (<span key={p.name} className="text-sm font-semibold text-[#4b4b4b]">{p.emoji} {p.name}</span>))}</div>
      </div>
     )})}
   </div>

   {/* FAQ */}
   <h2 className="text-xl font-extrabold text-[#2E3B2E] mt-8 mb-3">FAQ</h2>
   <div className="space-y-3">
    {[
     { q: "What does the Deer do?", a: "Deer (50K Sheckles, Rare) makes plants grow <strong>10% faster</strong>. This stacks — buy 2-3 Deer for massive speed." },
     { q: "Which pet should I buy first?", a: "<strong>Bunny (20K)</strong> for speed → <strong>Deer (50K)</strong> for growth → <strong>Bee (1M)</strong> for defense." },
     { q: "Can you stack pets?", a: "Yes! Multiple Deer stack growth speed. Multiple Bunnies stack movement speed. <strong>Deer is the most important pet to stack.</strong>" },
    ].map((faq) => (
     <div key={faq.q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
      <h3 className="text-sm font-extrabold text-[#4b4b4b]">{faq.q}</h3>
      <p className="mt-1 text-sm text-[#777]" dangerouslySetInnerHTML={{ __html: faq.a }} />
     </div>
    ))}
   </div>

   <RelatedGuides guides={[
    { href: "/eggs", title: "Egg Hatching Guide", detail: "Common + Epic egg odds", emoji: "🥚" },
    { href: "/beginner-guide", title: "Beginner Guide", detail: "First hour walkthrough", emoji: "🎯" },
    { href: "/seeds", title: "Seeds & Plants", detail: "Best crops + mutation values", image: gag2Images.seed("seed-shop") },
    { href: "/night-stealing", title: "Night Stealing", detail: "Steal & defend your garden", emoji: "🌙" },
   ]} />
  </main>
 );
}
