"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[#F2CC8F]" aria-label={`${rating} av 5 stjärnor`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof business.testimonials)[number] }) {
  return (
    <figure className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 text-sm leading-relaxed text-slate-100/90 whitespace-pre-line">&ldquo;{review.text}&rdquo;</blockquote>
      <figcaption className="mt-4 text-xs text-slate-300/60">
        — {review.author} ·{" "}
        <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          {review.source}
        </a>
        {review.date ? ` · ${review.date}` : ""}
      </figcaption>
    </figure>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = business.testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="omdomen" className="bg-[#E07A5F] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F2CC8F]">Omdömen</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Vad våra kunder säger</h2>
          <p className="mt-4 text-slate-300/80">
            {business.rating}/5 baserat på {business.reviewCount}+ recensioner — ordagrant från Bokadirekt.
          </p>
        </div>

        <div className="mt-12 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {business.testimonials.map((review, index) => (
                <div key={index} className="w-full shrink-0 px-1">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
          {business.testimonials.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#F2CC8F] px-8 py-3 text-sm font-semibold text-[#3D405B] transition hover:opacity-90"
          >
            Bli nästa nöjda kund — boka tid
          </a>
        </div>
      </div>
    </section>
  );
}
