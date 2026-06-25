import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { gag2Images } from "@/lib/data";
import { RelatedGuides } from "@/components/related-guides";
import { SeedFilter } from "@/components/seed-filter";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Seeds: Best Crops, Acorn, Venus Fly Trap & Dragon Breath",
  description: "Grow a Garden 2 seed route with best early crops, mid-game upgrades, late-game crops, price notes, weather prep, and a searchable seed table.",
  alternates: { canonical: "https://growagarden2pet.wiki/seeds" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Farming & Weather", href: "/weather" },
  { name: "Seeds", href: "/seeds" },
];

const firstBuys = [
  ["Starter", "Strawberry / Blueberry", "Move out of single-harvest starter crops and build repeat income."],
  ["Early income", "Corn / Apple", "Use cheap multi-harvest crops to fund pets and sprinklers."],
  ["Mid game", "Bamboo / Pineapple", "Push income before buying expensive utility gear."],
  ["Late game", "Pomegranate / Venus Fly Trap", "Start protecting crops and saving the best harvests for events."],
  ["Weather save", "Moon Bloom / Dragon's Breath", "Hold the highest-value crops for weather and mutation boosts."],
];

const plantTiers = [
  ["S", "Venus Fly Trap, Moon Bloom, Dragon's Breath", "Best late-game targets to protect, mutate, and save for weather."],
  ["A", "Bamboo, Pineapple, Pomegranate, Acorn", "Strong income path before the most expensive crops."],
  ["B", "Corn, Apple, Mushroom, Green Bean", "Good early and mid-game crops that keep the farm moving."],
  ["C", "Tulip, Cactus, single-harvest filler crops", "Use only when you are still building the first income loop."],
];

const stageSeeds = [
  ["Beginner", "Cheap multi-harvest crops", "Prioritize crops that keep producing while you save for Bunny and Deer."],
  ["Mid game", "Stable income crops", "Use Bamboo, Pineapple, and other reliable crops before novelty purchases."],
  ["Late game", "High-value crops", "Protect expensive crops with Bee, Gnome, fences, or traps."],
  ["Weather prep", "Crops worth saving", "Leave valuable crops unharvested during weather, then harvest after boosts land."],
];

const seedDecisionTable = [
  ["Strawberry / Blueberry", "Beginner", "First repeat income", "Stable early shop crops", "Buy first", "Move out of single-harvest starter crops quickly."],
  ["Tomato / Bamboo", "Early to mid", "Reliable income route", "Check current Seed Shop", "High priority", "Use these before expensive pets, gear, or late-game crops."],
  ["Pineapple / Mushroom", "Mid game", "Stronger crop loop", "Check current Seed Shop", "Buy when affordable", "Good bridge before legendary and mythic seeds."],
  ["Venus Fly Trap", "Late game", "Value and defensive crop role", "Price can change by update", "Buy after defense", "Confirm the current price in Sam's Seed Shop before buying."],
  ["Moon Bloom", "Late game", "Weather and mutation target", "Price can change by update", "Late-game only", "Save for weather windows and protect it at night."],
  ["Dragon's Breath", "Late game", "High-end crop target", "Price can change by update", "Late-game only", "Compare against Moon Bloom and Venus Fly Trap before spending."],
  ["Venom Spitter", "Late game", "Mythic multi-harvest choice", "Confirm in-game before buying", "Compare first", "Use the Venom Spitter guide before spending a large amount."],
] as const;

const priceHighlights = [
  ["Venom Spitter", "Late-game mythic target", "Check the current shop and compare value before spending. Do not rush it before defense is ready."],
  ["Acorn", "Late-game upgrade", "Worth considering after your farm can protect expensive crops."],
  ["Venus Fly Trap", "Late-game defensive crop", "Best when you also care about night defense and high-value harvests."],
  ["Green Bean", "Code reward crop", "Use active codes first so free seeds start earning immediately."],
  ["Bamboo", "Core income target", "A practical early-to-mid upgrade before expensive gear."],
];

const lateGameCrops = [
  ["Venus Fly Trap", "Buy when you want a late-game crop with defensive value.", "Best after Bee, Gnome, or other night protection is ready.", "/seeds"],
  ["Moon Bloom", "Use as a high-value weather and mutation target.", "Hold harvests for event boosts instead of selling too early.", "/mutations"],
  ["Dragon's Breath", "Compare as a top-end crop before large Seed Shop spending.", "Better for farms that can already protect expensive plants.", "/calculator"],
  ["Venom Spitter", "Check the dedicated guide before buying.", "Useful only when the current shop price and your income make sense.", "/venom-spitter"],
] as const;

const faq = [
  ["What is the best seed in Grow a Garden 2?", "For most players, the best seed is the strongest multi-harvest crop they can afford and protect. Bamboo is a practical early target; Venus Fly Trap and Moon Bloom are stronger late-game targets."],
  ["What should beginners plant first?", "Beginners should move into cheap multi-harvest crops, redeem codes, then use income to buy Bunny, Deer, and better seeds."],
  ["What is the Venus Fly Trap price in GAG2?", "Treat Venus Fly Trap as a late-game crop target. Check Sam's Seed Shop before buying because prices and stock can change by update."],
  ["Should I buy Dragon's Breath or Moon Bloom first?", "Buy the one you can afford and protect without slowing the rest of your farm. If both are too expensive, keep building income with Bamboo, Pineapple, Mushroom, or Venus Fly Trap first."],
  ["Is Acorn worth buying?", "Acorn is worth buying after your starter and mid-game income loop is stable. Do not delay core pets, sprinklers, or basic defense just to rush it."],
];

export default function SeedsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="seeds"
        title="Grow a Garden 2 Seeds & Plants Guide"
        description="Best seeds, plant tier list, price route, weather prep, and seed buying order for Grow a Garden 2."
        path="/seeds"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Grow a Garden 2 Seeds & Plants Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Buy seeds from Sam, prioritize multi-harvest crops, and save your best plants for weather events.</p>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Best Seeds to Buy First</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Stage</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed target</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Why it matters</th></tr></thead>
            <tbody>
              {firstBuys.map((row) => (
                <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                  <td className="px-3 py-2 font-black text-[#4CAF50]">{row[0]}</td>
                  <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[1]}</td>
                  <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Seed Route</h2>
        <p className="mt-2 text-sm leading-6 text-[#777]">
          Start with cheap multi-harvest crops, move into Bamboo or Pineapple, then compare late-game crops only after your garden can defend expensive plants. For rare or costly seeds, check the current Seed Shop before buying.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            ["Calculate crop value", "/calculator"],
            ["Compare crop values", "/values"],
            ["Use mutations", "/mutations"],
            ["Plan weather harvests", "/weather"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full border border-[#e5d08a] bg-white px-3 py-1.5 text-xs font-black text-[#8A5A00] transition hover:-translate-y-0.5">
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-2 sm:grid-cols-3">
        {[
          { l: "Early: 0-10K", c: "Strawberry and Blueberry", t: "Move from Carrot into multi-harvest crops as fast as possible." },
          { l: "Mid: 10K-500K", c: "Tomato, Bamboo, Pineapple", t: "Bamboo is the main value target before expensive pets and gear." },
          { l: "Late: 500K+", c: "Acorn, Pomegranate, Venus Fly Trap", t: "Protect these crops at night and save them for weather boosts." },
        ].map((stage) => (
          <div key={stage.l} className="rounded-xl bg-[#C8E6C9]/50 p-4">
            <span className="text-[10px] font-black uppercase text-[#777]">{stage.l}</span>
            <p className="text-sm font-bold text-[#4b4b4b]">{stage.c}</p>
            <p className="mt-1 text-xs text-[#777]">{stage.t}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("seed-shop")} alt="Seed Shop" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Check Sam&apos;s Seed Shop often for upgrades.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#3c3c3c]/20 bg-white">
          <Image src={gag2Images.seed("venus-fly-trap")} alt="Venus Fly Trap" width={600} height={338} className="w-full" />
          <p className="border-t border-[#3c3c3c]/10 px-3 py-2 text-center text-xs text-[#777]">Venus Fly Trap is a late-game crop with defensive value.</p>
        </div>
      </div>

      <div className="mt-8 mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Plants Tier List</h2>
        <Link href="/tier-list" className="text-sm font-black text-[#4CAF50] underline decoration-2 underline-offset-4">Full Grow a Garden 2 tier list</Link>
      </div>
      <div className="space-y-2">
        {plantTiers.map(([tier, crops, reason]) => (
          <div key={tier} className="flex gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8E1] text-sm font-black text-[#F57F17]">{tier}</span>
            <div>
              <p className="text-sm font-extrabold text-[#4b4b4b]">{crops}</p>
              <p className="mt-1 text-xs leading-5 text-[#777]">{reason}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Seeds by Stage</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stageSeeds.map(([stage, target, body]) => (
          <div key={stage} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{stage}</p>
            <h3 className="mt-1 text-sm font-extrabold text-[#4b4b4b]">{target}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Seed Table and Price Confidence</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full min-w-[760px] text-sm">
          <thead><tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Seed</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Stage</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Use</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Price confidence</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Buy priority</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Notes</th></tr></thead>
          <tbody>
            {seedDecisionTable.map((row) => (
              <tr key={row[0]} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{row[0]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[1]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[2]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[3]}</td>
                <td className="px-3 py-2 text-xs font-semibold text-[#4b4b4b]">{row[4]}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Late-Game Crop Comparison</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {lateGameCrops.map(([crop, bestFor, caution, href]) => (
          <Link key={crop} href={href} className="rounded-xl border border-[#e5e7eb] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{crop}</h3>
            <p className="mt-2 text-sm leading-6 text-[#777]">{bestFor}</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-[#4b4b4b]">{caution}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Seed Price Notes</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {priceHighlights.map(([seed, role, body]) => (
          <div key={seed} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{seed}</h3>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</p>
            <p className="mt-2 text-sm leading-6 text-[#777]">{body}</p>
            {seed === "Venom Spitter" && <Link href="/venom-spitter" className="mt-2 inline-block text-sm font-bold text-[#4CAF50] hover:underline">Open Venom Spitter guide</Link>}
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">All Seeds</h2>
      <SeedFilter />

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">How to Use Weather With Seeds</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Plant before events", "Keep your best crops planted when you expect weather."],
          ["Stop harvesting", "When weather begins, leave valuable crops on the plant."],
          ["Defend at night", "Use Bee, Gnome, traps, or fences if weather overlaps with night."],
          ["Check rare seeds", "For Venom Spitter and other costly seeds, verify the shop price before planting."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{title}</h3>
            <p className="mt-1 text-sm text-[#777]">{body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Bargain System</h2>
      <p className="text-sm leading-relaxed text-[#777]">
        Use Bargain only on valuable crops where the extra sell price matters. Skip it on normal early crops and reinvest your Sheckles into seeds, Deer, and basic defense.
      </p>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {[...faq, ["When should I buy Bamboo?", "Buy Bamboo once your starter loop is running. It is the main early-to-mid game upgrade."], ["Should I harvest during weather?", "Leave high-value crops unharvested while weather is active, then harvest after the event."]].map(([q, a]) => (
          <div key={q} className="rounded-xl border-2 border-[#3c3c3c]/10 bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#4b4b4b]">{q}</h3>
            <p className="mt-1 text-sm text-[#777]">{a}</p>
          </div>
        ))}
      </div>

      <RelatedGuides guides={[
        { href: "/weather", title: "Weather Events", detail: "Save high-value crops for events", emoji: "Weather" },
        { href: "/venom-spitter", title: "Venom Spitter", detail: "Late-game seed buy advice", emoji: "Venom" },
        { href: "/mutations", title: "Mutations Guide", detail: "Use boosted crops for bigger payouts", emoji: "Mutations" },
        { href: "/pets", title: "All Pets", detail: "Deer helps your crop route", image: gag2Images.pet("deer") },
        { href: "/codes", title: "Active Codes", detail: "Redeem free seed rewards first", emoji: "Codes" },
        { href: "/night-stealing", title: "Night Defense", detail: "Protect your best crops", emoji: "Defense" },
      ]} />
    </main>
  );
}
