import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Skoreparation, klackning, sulning, nyckelservice och skovårdsprodukter hos Skotjänst i Uppsala.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3D2914] to-[#5C4033] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Tjänster</h1>
          <p className="mt-6 max-w-2xl text-lg text-amber-50/90">
            Vi erbjuder ett brett utbud av reparationer och service. Pris beror på skick och
            material – fråga oss i butiken eller ring för rådgivning.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6">
            {business.services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col gap-4 rounded-2xl border border-[#5C4033]/10 bg-[#FAF7F2] p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#3D2914]">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C4033]/70">
                    {service.description}
                  </p>
                  <p className="mt-2 text-xs text-[#5C4033]/60">{service.note}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-sm font-medium text-[#5C4033]">{service.duration}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
            <p>
              <strong>Bokning:</strong> Se tillgängliga tider på Bokadirekt.
            </p>
            <p>
              <strong>Offert:</strong> Vi ger pris efter att vi sett skorna eller nyckeln.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href={business.bookingUrl}
              className="inline-flex rounded-full bg-[#5C4033] px-8 py-4 font-semibold text-white transition hover:bg-[#3D2914]"
            >
              {business.bookingLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
