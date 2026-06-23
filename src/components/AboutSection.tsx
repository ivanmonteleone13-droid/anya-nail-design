import { business, getFullAddress } from "@/lib/business";

export default function AboutSection() {
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <section id="om-oss" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            {aboutImage ? (
              <img
                src={aboutImage}
                alt={`${business.name} — ${getFullAddress()}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#E07A5F] to-[#F2CC8F]/30 text-6xl" aria-hidden>
                💅
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#E07A5F]">Om oss</p>
            <h2 className="mt-2 text-3xl font-bold text-[#3D405B] sm:text-4xl">{business.about.headline}</h2>
            <div className="mt-6 space-y-4 text-[#3D405B]/80 leading-relaxed">
              {business.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#E07A5F]/10 bg-[#FFF8F0] px-6 py-4">
              <p className="text-3xl font-bold text-[#E07A5F]">{business.rating}</p>
              <p className="text-sm text-[#3D405B]/70">{business.reviewCount}+ omdömen på Bokadirekt</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#E07A5F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3D405B]"
              >
                Boka din tid
              </a>
              {business.instagramUrl ? (
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#E07A5F] px-6 py-3 text-sm font-semibold text-[#E07A5F] transition hover:bg-[#E07A5F] hover:text-white"
                >
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
