import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import { RelatedGuides } from "@/components/related-guides";
import { gag2Images } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venom Spitter Grow a Garden 2: Seed Price, Value & Buy Advice",
  description: "Venom Spitter guide for Grow a Garden 2 with seed source, reported price, value notes, mutation prep, and whether beginners should buy it.",
  alternates: { canonical: "https://growagarden2pet.wiki/venom-spitter" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Seeds", href: "/seeds" },
  { name: "Venom Spitter", href: "/venom-spitter" },
];

const facts = [
  ["Rarity", "Mythic"],
  ["Obtainable", "Yes"],
  ["Multi-harvest", "Yes"],
  ["Date added", "June 20, 2026"],
  ["Seed Shop price", "30,000,000 Sheckles"],
  ["Robux price", "1,195 Robux"],
  ["Restock chance", "0.475%"],
  ["Ability", "Can spit venom at players at night"],
];

const valueRows = [
  ["Price-floor value", "3,610 Sheckles", "Base low-value reference for normal produce."],
  ["Average value", "4,000 Sheckles", "Useful for quick comparisons before mutation bonuses."],
  ["Price-floor weight", "8.55 kg", "Weight point tied to the price-floor value."],
  ["Average weight", "9.00 kg", "Expected normal produce weight."],
  ["Minimum weight", "6.30 kg", "Lowest listed produce weight."],
  ["Huge chance", "Unknown", "Do not plan around Huge odds until the game or wiki confirms them."],
];

const stageAdvice = [
  ["Beginner", "Do not rush Venom Spitter. The 30M seed price is far beyond the first income loop, and the seed does not replace basic progress. Use codes, cheap multi-harvest crops, Bunny, Deer, and simple defense first."],
  ["Mid game", "Save only after your farm earns reliably. If buying Venom Spitter would delay sprinklers, Bee, Gnome, or better crop coverage, keep building income first."],
  ["Late game", "Treat Venom Spitter as a premium crop target. Compare it with Venus Fly Trap, Moon Bloom, Dragon's Breath, and other high-cost crops before spending."],
  ["Public servers", "Plant it only when you can defend at night. A costly crop in an undefended garden creates more risk than value."],
];

const routine = [
  "Confirm the seed price and restock in Sam's Seed Shop before buying.",
  "Plant it when you can watch the garden or when defense is already set up.",
  "Use sprinklers or growth tools to keep the crop cycle moving.",
  "Do not harvest the best fruit during Gold, Rainbow, Electric, Frozen, Starstruck, Bloodlit, or Aurora windows.",
  "Defend first if the event overlaps with night stealing.",
  "After the boost lands, compare the result in the calculator before selling or saving another harvest.",
];

const comparisons = [
  ["Venus Fly Trap", "Better known late-game route", "Use as a safer comparison if you already know its shop timing and value."],
  ["Moon Bloom", "Weather-save target", "Good comparison when you are planning mutation windows instead of daily farming."],
  ["Dragon's Breath", "High-end crop target", "Compare when your farm already handles expensive seeds and defense."],
  ["Pomegranate", "Earlier mythic benchmark", "Use as a stepping stone if 30M Sheckles is still too expensive."],
];

const faq = [
  ["Should beginners buy Venom Spitter?", "No. A beginner gets more value from cheap multi-harvest crops, code rewards, Bunny, Deer, sprinklers, and basic defense. Venom Spitter is expensive enough that buying it too early can slow the whole farm."],
  ["Is Venom Spitter better than Venus Fly Trap?", "It depends on your current shop access, defense, and mutation plan. Venom Spitter is a strong Mythic target, but Venus Fly Trap is easier to compare if you already use it in your late-game crop route."],
  ["When should I harvest Venom Spitter?", "Harvest normal fruit when you need cash, but save the best fruit during high-value weather or mutation windows. If it is night, defend first so the crop does not get stolen before you sell."],
  ["Can Venom Spitter defend the garden?", "It is listed with a night ability that can spit venom at players, but you should still use Bee, Gnome, traps, fences, or other defense. Do not rely on one crop to protect a public-server garden."],
];

const sourceLinks = [
  ["Grow a Garden 2 Wiki: Venom Spitter", "https://growagarden2.fandom.com/wiki/Venom_Spitter"],
  ["Grow a Garden Calculator: Venom Spitter", "https://www.growagardencalculator.com/grow-a-garden-2/wiki/plants/venomspitter/"],
];

export default function VenomSpitterPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <GuideJsonLd
        id="venom-spitter"
        title="Venom Spitter Grow a Garden 2 Guide"
        description="Seed source, price notes, value checks, and buy advice for Venom Spitter in Grow a Garden 2."
        path="/venom-spitter"
        breadcrumbs={breadcrumbs}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-[#2E3B2E] sm:text-4xl">Venom Spitter Grow a Garden 2 Guide</h1>
          <p className="mt-3 text-base font-semibold leading-7 text-[#4b4b4b]">
            Venom Spitter is an obtainable Mythic, multi-harvest crop added on June 20, 2026. It is listed at 30,000,000 Sheckles or 1,195 Robux in the Seed Shop, with a 0.475% restock chance, so most players should treat it as a late-game buy rather than a beginner goal.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Mythic", "Multi-harvest", "30M Sheckles", "0.475% restock"].map((item) => (
              <span key={item} className="rounded-full border border-[#C8E6C9] bg-[#F6FBF4] px-3 py-1.5 text-xs font-black text-[#2E3B2E]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
          <Image src={gag2Images.hero("seeds_plants")} alt="Grow a Garden 2 late-game seed plants" width={640} height={420} className="h-52 w-full object-cover" />
          <p className="border-t border-[#e5e7eb] px-4 py-3 text-xs font-semibold leading-5 text-[#777]">
            Use Venom Spitter as a late-game seed target after your income and defense are ready.
          </p>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border-2 border-[#C8E6C9] bg-[#F6FBF4] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Venom Spitter Quick Facts</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#777]">{label}</p>
              <p className="mt-1 text-sm font-black text-[#2E3B2E]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Value and Weight Data</h2>
      <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] bg-white">
        <table className="w-full min-w-[680px] text-sm">
          <thead>
            <tr className="border-b border-[#e5e7eb] bg-[#F9FAFB]">
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Metric</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Current data</th>
              <th className="px-3 py-2 text-left text-xs font-bold text-[#777]">How to use it</th>
            </tr>
          </thead>
          <tbody>
            {valueRows.map(([metric, value, note]) => (
              <tr key={metric} className="border-b border-[#e5e7eb] last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{metric}</td>
                <td className="px-3 py-2 font-mono text-xs font-black text-[#2E3B2E]">{value}</td>
                <td className="px-3 py-2 text-xs leading-5 text-[#777]">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Is Venom Spitter Worth Buying?</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {stageAdvice.map(([stage, body]) => (
          <section key={stage} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{stage}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{body}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-white p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Sell Value and Mutation Routine</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Venom Spitter value depends on weight, quantity, mutation multipliers, and whether you can keep the crop safe long enough to sell at the right moment. Use this route when you plant an expensive seed.
        </p>
        <ol className="mt-4 space-y-3">
          {routine.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-black text-white">{index + 1}</span>
              <span className="text-sm font-semibold leading-6 text-[#4b4b4b]">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/calculator" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">Open crop calculator</Link>
          <Link href="/values" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">Compare crop values</Link>
          <Link href="/mutations" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">Plan mutations</Link>
          <Link href="/night-stealing" className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">Set up night defense</Link>
        </div>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">What to Compare Before Spending 30M</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {comparisons.map(([crop, role, note]) => (
          <section key={crop} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{crop}</h3>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-[#4CAF50]">{role}</p>
            <p className="mt-2 text-sm leading-6 text-[#777]">{note}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Venom Spitter FAQ</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {faq.map(([q, a]) => (
          <section key={q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
            <h3 className="text-sm font-extrabold text-[#2E3B2E]">{q}</h3>
            <p className="mt-1 text-sm leading-6 text-[#777]">{a}</p>
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Data Confidence</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Rarity, obtainability, multi-harvest status, date added, shop price, Robux price, restock chance, value, and weight are taken from current public wiki and calculator pages. Growth time and Huge chance are still listed as unknown, so do not build a buying plan around those numbers. Always confirm the Seed Shop price in-game before spending Sheckles or Robux.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {sourceLinks.map(([label, href]) => (
            <a key={href} href={href} className="font-bold text-[#4CAF50] underline decoration-2 underline-offset-4">
              {label}
            </a>
          ))}
        </div>
      </section>

      <RelatedGuides guides={[
        { href: "/seeds", title: "Seeds", detail: "Seed route and late-game crops", emoji: "Seeds" },
        { href: "/values", title: "Crop Values", detail: "Compare profit and sell value", emoji: "Values" },
        { href: "/mutations", title: "Mutations", detail: "When to save boosted crops", emoji: "Mutations" },
        { href: "/night-stealing", title: "Night Defense", detail: "Protect expensive crops", emoji: "Defense" },
      ]} />
    </main>
  );
}
