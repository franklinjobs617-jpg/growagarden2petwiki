export type Tier = "S" | "A" | "B" | "C" | "D";
export type TierCategory = "Pet" | "Seed" | "Plant" | "Gear";

export type CompetitorTierRow = {
  item: string;
  category: TierCategory;
  pgg?: Tier;
  gamesgg?: Tier;
  pocketTactics?: Tier;
  beebom?: Tier;
  game8?: Tier;
  u7buy?: Tier;
  ourTier: Tier;
  role: string;
  reason: string;
  href: string;
};

export const tierRows: CompetitorTierRow[] = [
  { item: "Dragon's Breath", category: "Plant", pgg: "S", gamesgg: "S", pocketTactics: "S", u7buy: "S", ourTier: "S", role: "Late-game income", reason: "Huge crop value target for weather and mutation plans.", href: "/seeds" },
  { item: "Moon Bloom", category: "Plant", pgg: "S", gamesgg: "S", pocketTactics: "S", u7buy: "S", ourTier: "S", role: "Late-game income", reason: "One of the strongest plants to protect, mutate, and save for event windows.", href: "/seeds" },
  { item: "Ghost Pepper", category: "Plant", pgg: "S", gamesgg: "S", pocketTactics: "S", u7buy: "S", ourTier: "S", role: "Pack crop value", reason: "High-value mythic crop that belongs in late-game income routes.", href: "/seeds" },
  { item: "Venus Fly Trap", category: "Plant", pgg: "S", gamesgg: "S", pocketTactics: "S", game8: "S", u7buy: "S", ourTier: "S", role: "Value and defense", reason: "A top late-game plant because it combines strong value with defensive utility.", href: "/seeds" },
  { item: "Pomegranate", category: "Plant", pgg: "A", gamesgg: "A", pocketTactics: "A", u7buy: "A", ourTier: "A", role: "Late-game income", reason: "Strong mythic crop for players who already have defense and steady income.", href: "/seeds" },
  { item: "Acorn", category: "Plant", pgg: "A", gamesgg: "A", pocketTactics: "B", u7buy: "A", ourTier: "A", role: "Late-game upgrade", reason: "Good bridge into expensive crops once pets and basic defense are handled.", href: "/seeds" },
  { item: "Bamboo", category: "Plant", pgg: "B", gamesgg: "B", pocketTactics: "B", u7buy: "B", ourTier: "A", role: "Mid-game income", reason: "Practical income target before expensive pets, gears, and late-game seeds.", href: "/seeds" },
  { item: "Pineapple", category: "Plant", pgg: "B", gamesgg: "B", pocketTactics: "B", u7buy: "B", ourTier: "B", role: "Mid-game income", reason: "Reliable crop while building the money loop toward late-game upgrades.", href: "/seeds" },
  { item: "Mushroom", category: "Plant", pgg: "B", gamesgg: "B", pocketTactics: "B", u7buy: "B", ourTier: "B", role: "Mid-game crop", reason: "Useful income step, especially before high-cost mythic crops are realistic.", href: "/seeds" },
  { item: "Green Bean", category: "Seed", pgg: "B", pocketTactics: "B", ourTier: "B", role: "Code reward", reason: "Good early value when claimed from codes and used before bigger seed upgrades.", href: "/codes" },
  { item: "Corn", category: "Plant", pgg: "C", gamesgg: "C", pocketTactics: "C", u7buy: "C", ourTier: "C", role: "Starter income", reason: "Works for early income but should be replaced by stronger multi-harvest crops.", href: "/seeds" },
  { item: "Apple", category: "Plant", pgg: "C", gamesgg: "C", pocketTactics: "C", u7buy: "C", ourTier: "C", role: "Starter income", reason: "Acceptable first upgrade while saving for Bamboo, pets, and sprinklers.", href: "/seeds" },
  { item: "Tulip", category: "Plant", pgg: "D", gamesgg: "D", pocketTactics: "D", u7buy: "D", ourTier: "D", role: "Early filler", reason: "Use only while moving out of the first planting loop.", href: "/seeds" },

  { item: "Raccoon", category: "Pet", beebom: "S", game8: "S", ourTier: "S", role: "Night stealing", reason: "Top pet for players who actively steal at night and want more raid value.", href: "/pets" },
  { item: "Unicorn", category: "Pet", beebom: "S", game8: "S", ourTier: "S", role: "Mutation income", reason: "Best fit when your route focuses on Rainbow mutations and high-value crops.", href: "/pets" },
  { item: "Black Dragon", category: "Pet", beebom: "S", game8: "S", ourTier: "S", role: "Defense", reason: "Strong endgame defense pet for protecting expensive crops.", href: "/pets" },
  { item: "Ice Serpent", category: "Pet", beebom: "S", game8: "S", ourTier: "S", role: "Defense", reason: "Endgame defensive pet that helps stop intruders around valuable gardens.", href: "/pets" },
  { item: "Bee", category: "Pet", beebom: "A", game8: "A", ourTier: "S", role: "First defense", reason: "The first serious defense pet most players should buy before holding expensive crops.", href: "/pets" },
  { item: "Golden Dragonfly", category: "Pet", beebom: "A", game8: "A", ourTier: "A", role: "Mutation income", reason: "Good pick when Gold mutation routes matter more than basic growth.", href: "/pets" },
  { item: "Bunny", category: "Pet", beebom: "A", game8: "A", ourTier: "A", role: "Beginner speed", reason: "Best first pet because speed helps planting, selling, and escaping.", href: "/pets" },
  { item: "Deer", category: "Pet", beebom: "A", game8: "A", ourTier: "A", role: "Beginner growth", reason: "Cheap growth boost that helps the whole first income loop.", href: "/pets" },
  { item: "Frog", category: "Pet", beebom: "B", ourTier: "B", role: "Utility", reason: "Useful movement support, but not stronger than Bunny or Deer for the first route.", href: "/pets" },
  { item: "Owl", category: "Pet", beebom: "C", ourTier: "C", role: "Night vision", reason: "Helpful at night, but lower priority than growth, income, and defense pets.", href: "/pets" },

  { item: "Super Sprinkler", category: "Gear", u7buy: "S", ourTier: "S", role: "Growth", reason: "Best farming gear target because it improves crop growth and size.", href: "/gears" },
  { item: "Gnome", category: "Gear", u7buy: "S", ourTier: "S", role: "Defense", reason: "One of the best defensive gears before leaving expensive crops overnight.", href: "/gears" },
  { item: "Wheelbarrow", category: "Gear", u7buy: "A", ourTier: "S", role: "Team utility", reason: "Strong utility gear for carrying players and managing night pressure.", href: "/wheelbarrow" },
  { item: "Rainbow Carpet", category: "Gear", u7buy: "S", ourTier: "A", role: "Mobility", reason: "Excellent premium mobility, but not part of the core F2P route.", href: "/gears" },
  { item: "Legendary Sprinkler", category: "Gear", u7buy: "A", ourTier: "A", role: "Growth", reason: "Strong farm upgrade before the most expensive sprinkler target.", href: "/gears" },
  { item: "Rare Sprinkler", category: "Gear", u7buy: "A", ourTier: "A", role: "Growth", reason: "Practical early-to-mid sprinkler upgrade with clear farming value.", href: "/gears" },
  { item: "Teleporter", category: "Gear", u7buy: "A", ourTier: "A", role: "Movement", reason: "Good movement tool for shop routes, escapes, and fast repositioning.", href: "/gears" },
  { item: "Speed Mushroom", category: "Gear", u7buy: "B", ourTier: "A", role: "Movement", reason: "Cheap movement boost that is useful before expensive mobility tools.", href: "/gears" },
  { item: "Common Sprinkler", category: "Gear", u7buy: "B", ourTier: "B", role: "Beginner growth", reason: "Good first gear for faster farming while saving for better sprinklers.", href: "/gears" },
  { item: "Super Watering Can", category: "Gear", u7buy: "B", ourTier: "B", role: "Burst growth", reason: "Useful when you need a short growth push, but not the first long-term buy.", href: "/gears" },
  { item: "Flashbang", category: "Gear", u7buy: "B", ourTier: "B", role: "Defense", reason: "Situational defense option when night stealing is a problem.", href: "/gears" },
  { item: "Basic Pot", category: "Gear", u7buy: "C", ourTier: "C", role: "Utility", reason: "Useful later, but should not delay income, pets, or basic defense.", href: "/gears" },
];

export const quickAnswers = [
  { title: "Best Pets", picks: "Raccoon, Unicorn, Black Dragon, Ice Serpent, Bee", href: "/pets", detail: "Defense, mutation income, and night stealing value." },
  { title: "Best Seeds / Plants", picks: "Dragon's Breath, Moon Bloom, Venus Fly Trap, Ghost Pepper, Pomegranate", href: "/seeds", detail: "Late-game crop value for weather and mutation routes." },
  { title: "Best Gears", picks: "Super Sprinkler, Gnome, Wheelbarrow, Rainbow Carpet", href: "/gears", detail: "Growth, defense, utility, and mobility upgrades." },
  { title: "Best Beginner Picks", picks: "Bunny, Deer, Bamboo, Common Sprinkler", href: "/beginner-guide", detail: "Cheap route before expensive pets, crops, and premium gear." },
] as const;

export const overallBestPicks = [
  ["1", "Dragon's Breath", "Plant", "Late-game income", "Top crop target for high-value harvests and weather plans."],
  ["2", "Moon Bloom", "Plant", "Mutation route", "Save it for event windows and protect it at night."],
  ["3", "Bee", "Pet", "First defense", "Buy before leaving expensive crops exposed overnight."],
  ["4", "Super Sprinkler", "Gear", "Growth", "Improves the farming route instead of only adding novelty utility."],
  ["5", "Venus Fly Trap", "Plant", "Value and defense", "Strong late-game plant with useful defensive value."],
  ["6", "Unicorn", "Pet", "Mutation income", "Best pick when Rainbow mutation income matters."],
  ["7", "Raccoon", "Pet", "Night stealing", "Best pet for players actively raiding at night."],
  ["8", "Gnome", "Gear", "Garden defense", "Useful defense gear before high-value crop storage."],
  ["9", "Bunny", "Pet", "Beginner speed", "The best first pet because movement helps every route."],
  ["10", "Bamboo", "Plant", "Mid-game income", "Practical income bridge before mythic crops."],
] as const;

export const goalPicks = [
  ["Make money faster", "Dragon's Breath, Moon Bloom, Venus Fly Trap, Bamboo", "Use valuable multi-harvest crops and protect them for weather boosts."],
  ["Defend your garden", "Bee, Gnome, Ice Serpent, Black Dragon", "Stack pet and gear defense before holding expensive crops overnight."],
  ["Start as beginner", "Bunny, Deer, Bamboo, Common Sprinkler", "These picks improve movement, growth, income, and farming speed early."],
  ["F2P route", "Bunny, Deer, Bamboo, Sprinklers, Bee", "Build income first, then add defense before chasing novelty gear."],
  ["Mutation income", "Unicorn, Golden Dragonfly, Moon Bloom, Dragon's Breath", "Use mutation pets with high-value crops and weather windows."],
  ["Night stealing", "Raccoon, Wheelbarrow, Speed Mushroom", "Prioritize stealing value, carrying utility, and escape movement."],
  ["Movement", "Bunny, Speed Mushroom, Teleporter, Rainbow Carpet", "Use movement tools for shop routes, defense, and night pressure."],
] as const;

export const beginnerRoute = [
  ["1", "Redeem codes", "Claim free seeds before spending Sheckles."],
  ["2", "Buy Bunny", "Movement speed makes planting, selling, and escaping easier."],
  ["3", "Buy Deer", "Growth boost improves the first real income loop."],
  ["4", "Buy Bamboo / Mushroom", "Move into better crop value before novelty purchases."],
  ["5", "Buy Common or Rare Sprinkler", "Add growth gear that improves every crop route."],
  ["6", "Buy Bee", "Start defending crops before night stealing becomes expensive."],
  ["7", "Save late-game crops", "Hold valuable crops for weather, mutation, and defense setups."],
] as const;

export const rankingRules = [
  "income value",
  "seed cost",
  "harvest type",
  "pet ability",
  "defense value",
  "mutation value",
  "gear utility",
  "beginner usefulness",
  "F2P usefulness",
] as const;

export const tierFaq = [
  ["What is the best item in Grow a Garden 2?", "Dragon's Breath, Moon Bloom, Bee, Super Sprinkler, and Venus Fly Trap are the strongest overall targets because they improve income, defense, or growth."],
  ["What is the best pet in Grow a Garden 2?", "Raccoon, Unicorn, Black Dragon, Ice Serpent, and Bee are top pets. Beginners should still buy Bunny and Deer first."],
  ["What is the best seed in Grow a Garden 2?", "Dragon's Breath, Moon Bloom, Ghost Pepper, Venus Fly Trap, and Pomegranate are the best late-game crop targets."],
  ["What is the best gear in Grow a Garden 2?", "Super Sprinkler is the best farming gear, while Gnome and Wheelbarrow are stronger for defense and utility."],
  ["What should beginners buy first?", "Redeem codes, buy Bunny, buy Deer, upgrade into Bamboo or Mushroom, then buy sprinklers and Bee."],
  ["Are pets or seeds more important first?", "Seeds build income first, but Bunny and Deer are cheap enough to buy early because they speed up the whole route."],
  ["Is Wheelbarrow worth buying?", "Wheelbarrow is worth buying after income, pets, and basic defense are stable. It is strong utility, not the first farming purchase."],
] as const;

export function rowsByCategory(category: TierCategory) {
  return tierRows.filter((row) => row.category === category);
}

export function rowsByTier(rows: CompetitorTierRow[], tiers: readonly Tier[]) {
  return tiers.map((tier) => ({
    tier,
    rows: rows.filter((row) => row.ourTier === tier),
  }));
}
