import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, GuideJsonLd } from "@/components/seo-helpers";
import {
  beginnerRoute,
  goalPicks,
  overallBestPicks,
  quickAnswers,
  rankingRules,
  rowsByCategory,
  rowsByTier,
  tierFaq,
  type CompetitorTierRow,
  type Tier,
} from "@/lib/tier-list-data";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Tier List: Best Pets, Seeds, Plants & Gears",
  description: "Grow a Garden 2 tier list for the best pets, seeds, plants, gears, beginner picks, F2P route, and what to buy first.",
  alternates: { canonical: "https://growagarden2pet.wiki/tier-list" },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Tier List", href: "/tier-list" },
];

const tierStyles: Record<Tier, string> = {
  S: "border-[#f4d77b] bg-[#fff8e1] text-[#9a6b00]",
  A: "border-[#b8dcc2] bg-[#eaf7ed] text-[#2d6a3f]",
  B: "border-[#bfdbfe] bg-[#eff6ff] text-[#1d4ed8]",
  C: "border-[#e5e7eb] bg-[#f9fafb] text-[#4b5563]",
  D: "border-[#fecaca] bg-[#fff1f2] text-[#be123c]",
};

function TierRows({ title, rows, tiers, links }: { title: string; rows: CompetitorTierRow[]; tiers: readonly Tier[]; links: { href: string; label: string }[] }) {
  return (
    <section className="mt-10">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-black tracking-tight text-soil">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full border border-[#d7e5d3] bg-white px-3 py-1 text-xs font-black text-garden hover:border-garden">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {rowsByTier(rows, tiers).map(({ tier, rows: tierRows }) => (
          <div key={tier} className="rounded-2xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-xl font-black ${tierStyles[tier]}`}>{tier}</span>
              <div className="grid flex-1 gap-2">
                {tierRows.map((row) => (
                  <Link key={`${row.category}-${row.item}`} href={row.href} className="grid gap-1 rounded-xl border border-[#edf2ea] bg-[#fbfdf9] p-3 transition hover:border-garden sm:grid-cols-[160px_160px_1fr] sm:items-start">
                    <p className="text-sm font-black text-soil">{row.item}</p>
                    <p className="text-xs font-black uppercase tracking-[0.08em] text-garden">{row.role}</p>
                    <p className="text-sm font-semibold leading-6 text-charcoal">{row.reason}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TierListPage() {
  const seedRows = rowsByCategory("Plant").concat(rowsByCategory("Seed"));
  const petRows = rowsByCategory("Pet");
  const gearRows = rowsByCategory("Gear");

  return (
    <main className="bg-gradient-to-b from-[#f6fbf4] via-white to-white">
      <GuideJsonLd
        id="tier-list"
        title="Grow a Garden 2 Tier List"
        description="Best pets, seeds, plants, gears, beginner picks, F2P route, and what to buy first in Grow a Garden 2."
        path="/tier-list"
        breadcrumbs={breadcrumbs}
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <section className="rounded-[28px] border border-[#dce8d8] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.12em] text-garden">GAG2 picks</p>
          <h1 className="mt-2 max-w-4xl text-4xl font-black leading-tight text-soil text-balance sm:text-5xl">
            Grow a Garden 2 Tier List
          </h1>
          <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-charcoal">
            Use this tier list to choose the best pets, seeds, plants, gears, beginner buys, and F2P route before spending Sheckles or Robux.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {quickAnswers.map((answer) => (
              <Link key={answer.title} href={answer.href} className="rounded-2xl border border-[#d7e5d3] bg-[#f8fbf6] p-4 transition hover:-translate-y-0.5 hover:border-garden hover:bg-white">
                <h2 className="text-base font-black text-soil">{answer.title}</h2>
                <p className="mt-2 text-sm font-black leading-6 text-garden">{answer.picks}</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-ash">{answer.detail}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Overall Best Picks</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <table className="min-w-[760px] w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Pick</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Category</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Best For</th>
                  <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.1em] text-ash">Why</th>
                </tr>
              </thead>
              <tbody>
                {overallBestPicks.map(([rank, pick, category, bestFor, why]) => (
                  <tr key={rank} className="border-b border-[#edf2ea] last:border-0">
                    <td className="px-4 py-3 text-lg font-black text-garden">{rank}</td>
                    <td className="px-4 py-3 font-black text-soil">{pick}</td>
                    <td className="px-4 py-3 font-semibold text-charcoal">{category}</td>
                    <td className="px-4 py-3 font-semibold text-charcoal">{bestFor}</td>
                    <td className="px-4 py-3 text-sm font-medium leading-6 text-ash">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <TierRows
          title="Seeds & Plants Tier List"
          rows={seedRows}
          tiers={["S", "A", "B", "C", "D"]}
          links={[
            { href: "/seeds", label: "Seeds guide" },
            { href: "/values", label: "Crop values" },
            { href: "/calculator", label: "Calculator" },
          ]}
        />

        <TierRows
          title="Pets Tier List"
          rows={petRows}
          tiers={["S", "A", "B", "C"]}
          links={[{ href: "/pets", label: "Pets guide" }]}
        />

        <TierRows
          title="Gear Tier List"
          rows={gearRows}
          tiers={["S", "A", "B", "C", "D"]}
          links={[
            { href: "/gears", label: "Gears guide" },
            { href: "/wheelbarrow", label: "Wheelbarrow" },
          ]}
        />

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Best Picks by Goal</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {goalPicks.map(([goal, picks, why]) => (
              <div key={goal} className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-garden">{goal}</p>
                <h3 className="mt-2 text-base font-black text-soil">{picks}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ash">{why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Best Beginner Picks</h2>
          <div className="mt-3 grid gap-3 lg:grid-cols-7">
            {beginnerRoute.map(([step, pick, why]) => (
              <div key={step} className="rounded-2xl border border-[#d7e5d3] bg-white p-4 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-garden text-sm font-black text-white">{step}</span>
                <h3 className="mt-3 text-sm font-black text-soil">{pick}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-ash">{why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#dce8d8] bg-[#f8fbf6] p-5">
          <h2 className="text-2xl font-black tracking-tight text-soil">How We Rank the Tier List</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {rankingRules.map((rule) => (
              <span key={rule} className="rounded-full border border-[#d7e5d3] bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-charcoal">
                {rule}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-soil">Tier List FAQ</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {tierFaq.map(([question, answer]) => (
              <section key={question} className="rounded-2xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
                <h3 className="text-sm font-black text-soil">{question}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-ash">{answer}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
