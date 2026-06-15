import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Use", description: "Terms of Use for GAG2 Pet Wiki." };
export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-extrabold text-[#2E3B2E]">Terms of Use</h1>
      <p className="text-sm text-[#777] mt-2">Last updated: June 15, 2026</p>
      <p className="mt-4 text-sm text-[#4b4b4b]">GAG2 Pet Wiki is an unofficial fan guide. All game assets, names, and trademarks belong to The Garden Game and Roblox Corporation. Content is provided for informational purposes only. Game data may change — we strive to keep information current but cannot guarantee 100% accuracy.</p>
    </main>
  );
}
