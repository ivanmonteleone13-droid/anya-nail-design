import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#F2CC8F]">
            Kontakt
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#E07A5F] sm:text-4xl">
            Hitta &amp; kontakta oss
          </h2>
          <p className="mt-4 text-lg text-[#E07A5F]/70">
            Hugingatan 8 — boka via Bokadirekt.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactForm />

            <div className="rounded-2xl border border-[#E07A5F]/10 bg-[#FFF8F0] p-6">
              <h3 className="font-semibold text-[#E07A5F]">Kontaktuppgifter</h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-[#E07A5F]/80">
                <p>
                  <strong className="text-[#E07A5F]">Adress:</strong>
                  <br />
                  {getFullAddress()}
                </p>
                {business.phoneLink && business.phone ? (
                  <p>
                    <strong className="text-[#E07A5F]">Telefon:</strong>
                    <br />
                    <a href={business.phoneLink} className="font-semibold text-[#E07A5F] hover:underline">
                      {business.phone}
                    </a>
                  </p>
                ) : null}
                {business.instagramUrl ? (
                  <p>
                    <strong className="text-[#E07A5F]">Instagram:</strong>
                    <br />
                    <a
                      href={business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#E07A5F] hover:underline"
                    >
                      @anyanaildesign
                    </a>
                  </p>
                ) : null}
                <p>
                  <strong className="text-[#E07A5F]">Bokning:</strong>
                  <br />
                  <a
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2CC8F] hover:underline"
                  >
                    {business.bookingLabel}
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-2xl border border-[#E07A5F]/10 bg-[#FFF8F0] p-6">
              <h3 className="font-semibold text-[#E07A5F]">Öppettider</h3>
              <p className="mt-2 text-xs text-[#E07A5F]/60">{business.hours.note}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {business.hours.regular.map((row) => (
                  <li key={row.day} className="flex justify-between text-[#E07A5F]/80">
                    <span>{row.day}</span>
                    <span className={row.hours === "Stängt" ? "text-[#E07A5F]/40" : "font-medium"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-[#E07A5F]/10 shadow-sm">
              <iframe
                title={`Karta — ${business.name}`}
                src={getMapsEmbedUrl()}
                className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-[#E07A5F] hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
