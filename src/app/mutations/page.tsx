import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow a Garden 2 Mutations: Crop Value Strategy & Weather Actions",
  description: "Use Grow a Garden 2 mutations to increase crop value. Learn which crops to save, how to use weather, and when to harvest or defend.",
  alternates: { canonical: "https://growagarden2pet.wiki/mutations" },
};

const mutationPlan = [
  ["Gold", "Use Golden Dragonfly plans and save high-value crops for gold events."],
  ["Rainbow", "Use Unicorn plans and keep your best crops unharvested during Rainbow weather."],
  ["Electric", "During lightning, stop harvesting and let expensive crops stay on the plant."],
  ["Frozen", "During snowfall, run sprinklers and keep more crops growing."],
  ["Bloodlit", "During Blood Moon, defend first, then let valuable crops catch the night boost."],
  ["Starstruck", "During Starfall, leave ripe crops in place and check them after the event."],
];

export default function MutationsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Grow a Garden 2 Mutations Guide</h1>
      <p className="mt-2 text-sm text-[#777]">Mutations increase crop value. The best play is to save expensive crops for weather events, then harvest after the boost lands.</p>

      <section className="mt-5 rounded-2xl border-2 border-[#FFC107]/40 bg-[#FFF8E1] p-5">
        <h2 className="text-xl font-extrabold text-[#2E3B2E]">Quick Answer</h2>
        <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
          Do not harvest your best crops during weather. Keep them planted, run growth gear, defend the garden, then harvest boosted crops after the event.
        </p>
      </section>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Mutation Action Table</h2>
      <div className="overflow-x-auto rounded-xl border border-[#3c3c3c]/20 bg-white">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[#3c3c3c]/20 bg-[#F9FAFB]"><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">Mutation</th><th className="px-3 py-2 text-left text-xs font-bold text-[#777]">What to Do</th></tr></thead>
          <tbody>
            {mutationPlan.map(([name, action]) => (
              <tr key={name} className="border-b border-[#3c3c3c]/10 last:border-0">
                <td className="px-3 py-2 font-bold text-[#4b4b4b]">{name}</td>
                <td className="px-3 py-2 text-xs text-[#777]">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Best Mutation Routine</h2>
      <ol className="space-y-3">
        {[
          "Plant your best multi-harvest crops before you wait for weather.",
          "Place sprinklers so more crops grow during the event window.",
          "When weather starts, stop harvesting valuable crops.",
          "If the event happens at night, defend first with Gnome, Bee, traps, fences, or a defensive pet.",
          "After the event, harvest boosted crops and sell them before the next night risk.",
        ].map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-xs font-extrabold text-white">{index + 1}</span>
            <span className="text-sm text-[#4b4b4b]">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 mb-3 text-xl font-extrabold text-[#2E3B2E]">Crops Worth Saving</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Early", "Bamboo and Pineapple"],
          ["Mid", "Mango and Pomegranate"],
          ["Late", "Venus Fly Trap, Moon Bloom, Dragon's Breath"],
        ].map(([stage, crops]) => (
          <div key={stage} className="rounded-xl border-2 border-[#C8E6C9] bg-white p-4">
            <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#4CAF50]">{stage}</span>
            <p className="mt-1 text-sm font-bold text-[#4b4b4b]">{crops}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-[#e5e7eb] bg-[#F9FAFB] p-5">
        <h2 className="text-sm font-extrabold text-[#4b4b4b]">Next Guides</h2>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <Link href="/weather" className="font-semibold text-[#4CAF50] hover:underline">Weather Events</Link>
          <Link href="/seeds" className="font-semibold text-[#4CAF50] hover:underline">Best Crops</Link>
          <Link href="/pets" className="font-semibold text-[#4CAF50] hover:underline">Mutation Pets</Link>
          <Link href="/night-stealing" className="font-semibold text-[#4CAF50] hover:underline">Night Defense</Link>
        </div>
      </div>
    </main>
  );
}
