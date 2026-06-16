"use client";

import { useState } from "react";
import Image from "next/image";
import { gag2Pets, gag2Images } from "@/lib/data";

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

const ALL_RARITIES = ["All", "Common", "Uncommon", "Rare", "Legendary", "Mythic", "Super"];
const ALL_ROLES = ["All", "speed", "growth", "defense", "income", "utility"];
const ALL_TIERS = ["All", "S", "A", "B", "C"];
const SORT_OPTIONS = ["Default", "Price ↑", "Price ↓", "Tier", "Name"] as const;

export function PetFilter() {
  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [role, setRole] = useState("All");
  const [tier, setTier] = useState("All");
  const [sort, setSort] = useState<typeof SORT_OPTIONS[number]>("Default");

  let filtered = gag2Pets.filter((p) => {
    if (rarity !== "All" && p.rarity !== rarity) return false;
    if (role !== "All" && p.category !== role) return false;
    if (tier !== "All" && p.tier !== tier) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.ability.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (sort === "Price ↑") filtered = [...filtered].sort((a, b) => parseInt(a.costSheckles.replace(/,/g, "")) - parseInt(b.costSheckles.replace(/,/g, "")));
  else if (sort === "Price ↓") filtered = [...filtered].sort((a, b) => parseInt(b.costSheckles.replace(/,/g, "")) - parseInt(a.costSheckles.replace(/,/g, "")));
  else if (sort === "Tier") filtered = [...filtered].sort((a, b) => ["S","A","B","C"].indexOf(a.tier) - ["S","A","B","C"].indexOf(b.tier));
  else if (sort === "Name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {/* Filter Bar */}
      <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur rounded-xl border border-[#e5e7eb] p-3 mb-6 space-y-3">
        <input type="text" placeholder="🔍 Search pet name or ability..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm font-medium text-[#4b4b4b] placeholder:text-[#aaa] focus:outline-none focus:border-garden" />
        <div className="flex flex-wrap gap-1.5">
          <span className="text-xs font-bold text-[#777] mr-1 self-center">Rarity:</span>
          {ALL_RARITIES.map((r) => (
            <button key={r} onClick={() => setRarity(r)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${rarity === r ? "bg-garden text-white" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{r}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-bold text-[#777] mr-1 self-center">Role:</span>
          {ALL_ROLES.map((r) => (
            <button key={r} onClick={() => setRole(r)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${role === r ? "bg-sky text-white" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{r}</button>
          ))}
          <span className="text-xs font-bold text-[#777] mx-2">|</span>
          <span className="text-xs font-bold text-[#777] mr-1 self-center">Tier:</span>
          {ALL_TIERS.map((t) => (
            <button key={t} onClick={() => setTier(t)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition ${tier === t ? "bg-[#FFC107] text-white" : "bg-[#f5f5f5] text-[#777] hover:bg-[#e5e7eb]"}`}>{t}</button>
          ))}
          <span className="text-xs font-bold text-[#777] mx-2">|</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as typeof SORT_OPTIONS[number])}
            className="rounded-lg border border-[#e5e7eb] px-2 py-1 text-[11px] font-bold text-[#777] bg-white cursor-pointer">
            {SORT_OPTIONS.map((o) => (<option key={o} value={o}>Sort: {o}</option>))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-[#777]">{filtered.length} pet{filtered.length !== 1 ? "s" : ""} shown</p>
        <div className="flex gap-2">
          {[{ l: "First", p: "Bunny" }, { l: "Value", p: "Deer" }, { l: "Defense", p: "Bee" }].map((q) => (
            <button key={q.l} onClick={() => setSearch(q.p)}
              className="rounded-full bg-[#C8E6C9]/50 px-3 py-1 text-[10px] font-bold text-[#4CAF50] hover:bg-[#C8E6C9] transition">{q.l}: {q.p}</button>
          ))}
        </div>
      </div>

      {/* Pet Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((pet) => (
          <div key={pet.name} className={`group rounded-2xl border-2 ${rarityBorder[pet.rarity]} bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] overflow-hidden`}>
            <div className="relative h-44 bg-[#f5f9f3] flex items-center justify-center p-4">
              <Image src={gag2Images.pet(pet.imageKey)} alt={pet.name} fill className="object-contain p-6" sizes="25vw" />
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

      {filtered.length === 0 && (
        <div className="text-center py-16 rounded-xl border border-[#e5e7eb] bg-white">
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-lg font-extrabold text-[#4b4b4b]">No pets found</p>
          <p className="text-sm text-[#777]">Try a different filter or search term</p>
        </div>
      )}
    </>
  );
}
