import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galleri",
  description: "Skomakeri och reparationer hos Skotjänst i Uppsala – illustrativa platshållare.",
};

const galleryItems = [
  { title: "Klackning", gradient: "from-amber-100 to-amber-300", emoji: "👞" },
  { title: "Sulning", gradient: "from-stone-200 to-stone-400", emoji: "🔧" },
  { title: "Lädervård", gradient: "from-orange-100 to-orange-300", emoji: "✨" },
  { title: "Nyckelservice", gradient: "from-yellow-100 to-yellow-300", emoji: "🔑" },
  { title: "Väskreparation", gradient: "from-rose-100 to-rose-300", emoji: "👜" },
  { title: "Skovårdsprodukter", gradient: "from-emerald-100 to-emerald-300", emoji: "🧴" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3D2914] to-[#5C4033] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Galleri</h1>
          <p className="mt-6 max-w-2xl text-lg text-amber-50/90">
            Platshållarbilder i demo-webbplatsen. Besök butiken på Stora Torget för att se vårt
            arbete.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.title}
                className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}
              >
                <div className="flex h-full flex-col items-center justify-center p-6 text-center transition group-hover:scale-105">
                  <span className="text-6xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <figcaption className="mt-4 text-lg font-semibold text-[#3D2914]/80">
                    {item.title}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#5C4033]/60">
            Bilder i detta galleri är illustrativa platshållare. Inga upphovsrättsskyddade bilder
            används.
          </p>
        </div>
      </section>
    </>
  );
}
