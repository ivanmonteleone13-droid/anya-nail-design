import { business, getFullAddress } from "@/lib/business";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F2CC8F] to-[#e0c060] p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D405B] sm:text-4xl">
                Skapa ditt drömset idag
              </h2>
              <p className="mt-4 text-lg text-[#3D405B]/80">
                Boka tid på Bokadirekt{business.instagramUrl ? " eller kontakta oss på Instagram" : ""}. Vi finns på{" "}
                {getFullAddress()} — välkommen in!
              </p>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[#3D405B]/70">
                <li>★ {business.rating} betyg</li>
                <li>·</li>
                <li>{business.reviewCount}+ omdömen</li>
                <li>·</li>
                <li>Uppsala, Hugingatan</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#3D405B] px-8 py-4 font-semibold text-white transition hover:bg-black"
              >
                {business.bookingLabel}
              </a>
              {business.phoneLink && business.phone ? (
                <a
                  href={business.phoneLink}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#3D405B] bg-transparent px-8 py-4 font-semibold text-[#3D405B] transition hover:bg-[#3D405B]/10"
                >
                  Ring {business.phone}
                </a>
              ) : business.instagramUrl ? (
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#3D405B] bg-transparent px-8 py-4 font-semibold text-[#3D405B] transition hover:bg-[#3D405B]/10"
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
