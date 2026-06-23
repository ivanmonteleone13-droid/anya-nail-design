import { business } from "@/lib/business";

export default function Testimonials() {
  return (
    <section className="bg-[#3D405B] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Vad våra kunder säger</h2>
          <p className="mt-4 text-[#F2CC8F]/80">Ordagrant från verifierade omdömen på Bokadirekt.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {business.testimonials.map((review, index) => (
            <figure key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex gap-1 text-[#F2CC8F]" aria-label={`${review.rating} av 5 stjärnor`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-white/90 whitespace-pre-line">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-xs text-white/60">
                — {review.author} ·{" "}
                <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  {review.source}
                </a>
                {review.date ? ` · ${review.date}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
