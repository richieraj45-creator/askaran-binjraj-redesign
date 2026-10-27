import { Link } from "react-router-dom";

export function CategoryCard({ category, className = "h-[320px] w-full" }) {
  if (!category) return null;

  return (
    <Link
      to={`/collections/${category.slug}`}
      className={`relative group block overflow-hidden rounded-xl bg-neutral-900 border border-[#E5E0D8] transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      {/* Background Image with Smooth Zoom */}
      {category.image ? (
        <img
          src={category.image}
          alt={category.title || category.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
        />
      ) : (
        <div className="absolute inset-0 bg-[#F4F0EA]" />
      )}

      {/* Dark Elegance Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

      {/* Card Text & Action Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
          Floor Collection
        </span>
        <h3 className="font-serif text-2xl font-medium tracking-tight">
          {category.title || category.name}
        </h3>
        {category.description && (
          <p className="mt-1.5 text-xs text-gray-200 line-clamp-2 font-light">
            {category.description}
          </p>
        )}
        <div className="mt-3 flex items-center text-[11px] font-semibold uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
          Explore Floor <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </Link>
  );
}