import Image from "next/image";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Beginner Guide: First Hour Route & Fast Sheckles",
  description: "Start Grow a Garden 2 with a clear first-hour route: redeem codes, buy the right seeds, get Bunny and Deer, defend at night, and avoid costly mistakes.",
  alternates: { canonical: "https://growagarden2pet.wiki/beginner-guide" },
};

const route = [
  ["First 10 minutes", "Redeem TEAMGREENBEAN, plant the free seeds, then buy Strawberry or Blueberry from Sam."],
  ["First 30 minutes", "Keep multi-harvest crops planted, sell to Steven, and buy a Common Watering Can from George."],
  ["First hour", "Buy Bunny for speed, then save for Deer. Add Gnome or Bee before holding expensive crops overnight."],
];

const steps = [
  ["Claim your garden plot", "Stay near your plot at the start so you can plant, harvest, and sell without wasting time."],
  ["Redeem TEAMGREENBEAN", "Open Settings, paste the code, claim the Green Bean Seeds, and plant them immediately."],
  ["Buy multi-harvest seeds", "Use Strawberry, Blueberry, Tomato, and Bamboo before spending on single-harvest crops."],
  ["Water high-value crops", "Use watering gear on the crops that make the most Sheckles per harvest."],
  ["Sell and reinvest", "Sell to Steven, then put most early profit back into seeds and growth."],
  ["Buy Bunny, then Deer", "Bunny speeds up every route. Deer makes your farm grow faster."],
  ["Prepare for night", "Harvest valuable crops before dark and add Gnome or Bee when your garden starts holding expensive plants."],
];

const mistakes = [
  ["Buying novelty gear too early", "Buy crops, Bunny, Deer, and defense before Wheelbarrow or decorative props."],
  ["Holding valuables overnight", "Harvest expensive crops before night unless you have defense ready."],
  ["Ignoring shop restocks", "Check Sam and George often. Restocks are the fastest way to find upgrades."],
  ["Skipping multi-harvest crops", "Multi-harvest seeds keep producing and make the first hour smoother."],
];

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center gap-4">
        <Image src={gag2Images.icon} alt="Grow a Garden 2 icon" width={56} height={56} className="rounded-xl" />
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Beginner Guide</h1>
          <p className="text-sm text-[#777]">Follow this route to turn your first seeds into a protected farm.</p>
        </div>
      </div>

      <section className="rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">First-Hour Route</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {route.map(([time, action]) => (
            <div key={time} className="rounded-xl border border-[#dfead8] bg-white p-4">
              <p className="text-sm font-black text-[#4CAF50]">{time}</p>
              <p className="mt-1 text-sm leading-6 text-[#4b4b4b]">{action}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Step-by-Step Start</h2>
      <div className="space-y-3">
        {steps.map(([title, body], index) => (
          <div key={title} className="flex gap-3 rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
            <div>
              <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
              <p className="mt-1 text-sm text-[#777]">{body}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Spending Priority</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Order</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Buy</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Cost</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why</th></tr></thead>
          <tbody>
            {[
              ["1", "Strawberry / Blueberry", "5-10", "Early multi-harvest income"],
              ["2", "Common Watering Can", "2,000", "Speed up your best crops"],
              ["3", "Bamboo", "700 each", "Strong early-to-mid game crop"],
              ["4", "Bunny", "20,000", "Move faster everywhere"],
              ["5", "Deer", "50,000", "Grow crops faster"],
              ["6", "Gnome", "50,000", "Cheap night defense"],
              ["7", "Bee", "1,000,000", "Better defense for expensive crops"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-extrabold text-[#4CAF50]">{row[0]}</td>
                <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[1]}</td>
                <td className="px-3 py-2 font-mono text-xs text-[#4b4b4b]">{row[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Where to Go</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {[
          ["Sam", "Seed Shop", "Buy seeds and check restocks."],
          ["George", "Gear Shop", "Buy watering cans, sprinklers, Gnome, and Wheelbarrow."],
          ["Steven", "Sell Shop", "Sell harvested crops for Sheckles."],
          ["Charlotte", "Props Shop", "Buy crates, traps, fences, and doors."],
          ["Gilbert", "Guild Stand", "Create or manage guilds."],
        ].map(([npc, location, action]) => (
          <div key={npc} className="rounded-xl border border-[#3c3c3c]/20 bg-white p-3">
            <span className="text-sm font-extrabold text-[#4CAF50]">{npc}</span>
            <p className="text-xs font-bold text-[#4b4b4b]">{location}</p>
            <p className="text-xs text-[#777]">{action}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Common Beginner Mistakes</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {mistakes.map(([bad, fix]) => (
          <div key={bad} className="rounded-xl border border-[#E53935]/20 bg-[#FFEBEE] p-3">
            <p className="text-xs font-extrabold text-[#E53935]">{bad}</p>
            <p className="mt-1 text-xs text-[#E53935]/80">{fix}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/tier-list", title: "Tier List", detail: "Best beginner picks and what to buy first", image: gag2Images.hero("all_pets") },
        { href: "/codes", title: "Codes", detail: "Claim free seeds before you buy more", image: gag2Images.hero("codes") },
        { href: "/seeds", title: "Seeds & Plants", detail: "Follow the crop upgrade route", image: gag2Images.seed("seed-shop") },
        { href: "/pets", title: "Pets", detail: "Buy Bunny, Deer, then Bee", image: gag2Images.pet("bunny") },
        { href: "/night-stealing", title: "Night Defense", detail: "Protect crops before dark", emoji: "Defense" },
        { href: "/weather", title: "Weather Events", detail: "Save valuable crops for events", emoji: "Weather" },
      ]} />
    </main>
  );
}
