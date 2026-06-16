import Image from "next/image";
import { gag2Codes, gag2Images } from "@/lib/data";
import type { Metadata } from "next";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Codes (June 2026): TEAMGREENBEAN & Redeem Steps",
  description: "Use active Grow a Garden 2 codes for free rewards. Redeem TEAMGREENBEAN for Green Bean Seeds and follow the steps if a code does not work.",
  alternates: { canonical: "https://growagarden2pet.wiki/codes" },
};

export default function CodesPage() {
  const activeCodes = gag2Codes.filter((code) => code.status === "active");

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Codes</h1>
          <p className="text-sm text-[#777]">Redeem codes from the Settings menu for free seeds and event rewards.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#1B5E20] bg-[#1B5E20] p-5 text-white">
        <p className="text-sm font-black uppercase tracking-[0.12em] text-[#A5D6A7]">Use this code first</p>
        {activeCodes.map((code) => (
          <div key={code.code} className="mt-3 rounded-xl bg-white/10 p-4">
            <p className="select-all font-mono text-2xl font-black tracking-wider">{code.code}</p>
            <p className="mt-2 text-sm font-semibold text-[#C8E6C9]">Reward: {code.reward}</p>
          </div>
        ))}
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Redeem</h2>
      <ol className="space-y-3">
        {[
          "Launch Grow a Garden 2 on Roblox.",
          "Open Settings from the top-left gear icon.",
          "Paste the code into the code box exactly as shown.",
          "Press Claim and plant the reward seeds right away.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">If a Code Does Not Work</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Check capitalization", "Codes are case-sensitive. Paste the code instead of typing it by hand."],
          ["Restart the game", "Rejoin the server, open Settings again, and claim the code once more."],
          ["Look for spaces", "Remove extra spaces before and after the code."],
          ["Move on quickly", "Do not wait on one code. Use your seeds, build income, and check back later."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/beginner-guide", title: "Beginner Route", detail: "Spend your free seeds in the first hour", emoji: "Start" },
        { href: "/seeds", title: "Seeds & Plants", detail: "Pick the best crops after redeeming codes", image: gag2Images.seed("seed-shop") },
        { href: "/pets", title: "All Pets", detail: "Buy Bunny, Deer, then defense pets", image: gag2Images.pet("bunny") },
        { href: "/weather", title: "Weather Events", detail: "Save high-value crops for event boosts", emoji: "Weather" },
      ]} />
    </main>
  );
}
