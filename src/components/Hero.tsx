import { business } from "@/lib/business";
import TrustBadges from "@/components/TrustBadges";

export default function Hero() {
  const heroImage = "heroImage" in business ? business.heroImage : null;

  return (
    <section
      id="hem"
      className="relative overflow-hidden bg-gradient-to-br from-[#3D405B] via-[#E07A5F] to-[#E07A5F]/80 text-white"
    >
      {heroImage && (
        <>
          <img
            src={heroImage}
            alt={`${business.name} — nagelstudio på ${business.address.street}, ${business.address.city}`}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#3D405B]/70" aria-hidden />
        </>
      )}
      {!heroImage && (
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#F2CC8F] blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F2CC8F]/20 px-4 py-1.5 text-sm font-semibold text-[#F2CC8F] ring-1 ring-[#F2CC8F]/30">
            <span aria-hidden>★</span>
            {business.rating}/5 · {business.reviewCount}+ omdömen
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Builder gel & nail art
            <span className="block text-[#F2CC8F]">på Hugingatan, Luthagen</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{business.description}</p>
          <TrustBadges />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#F2CC8F] px-8 py-4 text-base font-semibold text-[#3D405B] shadow-lg transition hover:opacity-90"
            >
              {business.bookingLabel}
            </a>
            {business.phoneLink && business.phone ? (
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Ring {business.phone}
              </a>
            ) : null}
          </div>
        </div>
        <div className="relative hidden lg:block">
          {heroImage ? (
            <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img src={heroImage} alt={business.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
