import { Reveal, Stagger, StaggerItem } from "../components/reveal";
import { CategoryCard } from "../components/categorycard"; // Lowercase 'c' to match categorycard.jsx
import { CATEGORIES } from "../Data/sitedata";

export default function Collections() {
  return (
    <main data-testid="collections-page" className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      {/* Header Section */}
      <section className="border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-16 lg:px-12">
          <Reveal>
            <p className="eyebrow" data-testid="collections-eyebrow">Collections</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Every floor of the mall, <span className="italic text-brand-red">curated</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-mid">
              Explore our diverse range of fashion essentials — from statement tees to stylish jeans, footwear, and more, all in one place.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Collections Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-12">
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.slug} className="w-full block">
              <CategoryCard category={c} className="h-[320px] w-full block" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}