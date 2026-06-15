import Link from "next/link";
import Image from "next/image";

interface Guide {
  href: string;
  title: string;
  detail: string;
  image?: string;
  emoji?: string;
}

export function RelatedGuides({ guides }: { guides: Guide[] }) {
  return (
    <div className="mt-10 border-t-2 border-graphite pt-8">
      <h2 className="text-xl font-extrabold text-soil mb-4">Explore More Guides</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group flex items-start gap-3 rounded-xl border-2 border-graphite/20 bg-white p-4 transition-all hover:border-sprout hover:-translate-y-0.5"
          >
            {g.image && (
              <Image src={g.image} alt={g.title} width={48} height={48} className="rounded-lg shrink-0" />
            )}
            {g.emoji && <span className="text-2xl shrink-0">{g.emoji}</span>}
            <div>
              <p className="text-sm font-extrabold text-charcoal group-hover:text-garden transition-colors">{g.title}</p>
              <p className="text-xs text-ash mt-0.5">{g.detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
