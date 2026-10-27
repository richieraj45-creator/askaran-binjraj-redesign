import { Link } from "react-router-dom";

export function CategoryCard({ category, className = "h-[320px] w-full" }) {
  if (!category) return null;

  return (
    <Link
      to={`/collections/${category.slug}`}
      className={`relative group block overflow-hidden rounded-lg bg-neutral-900 border border-[#E5E0D8] transition-all duration-500 hover:shadow-xl ${className}`}
    >
      {/* Background Image with Zoom Effect */}
      {category.image ? (
        <img
          src={category.image}
          alt={category.title || category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
        />
      ) : (
        <div className="absolute inset-0 bg-[#F4F0EA]" />
      )}

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" />

      {/* Card Content (Positioned at the bottom cleanly) */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
        <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-1">
          Collection
        </span>
        <h3 className="font-serif text-2xl font-medium tracking-tight">
          {category.title || category.name}
        </h3>
        {category.description && (
          <p className="mt-2 text-sm text-gray-200 line-clamp-2">
            {category.description}
          </p>
        )}
        <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
          Explore Floor <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  );
}