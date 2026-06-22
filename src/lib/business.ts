export const business = {
  name: "Skotjänst",
  tagline: "Skomakeri & nyckelservice i Uppsala",
  description:
    "Centralt skomakeri på Stora Torget i Uppsala. Vi reparerar skor, väskor och skidpjäxor, säljer skovårdsprodukter och erbjuder nyckel- och låsservice.",
  category: "Skomakeri / Skoreparation",
  address: {
    street: "Stora Torget 1A",
    postalCode: "753 20",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 75 54",
  phoneLink: "tel:+4618137554",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "tel:+4618137554",
  bookingLabel: "Ring oss",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Skotjänst Uppsala",
  rating: 5.0,
  reviewCount: 2,
  foundedYear: null as number | null,
  coordinates: {
    lat: 59.8588,
    lng: 17.6386,
  },
  hours: {
    note: "Ring gärna innan besök för att säkerställa att vi har öppet.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Centralt läge",
      description:
        "Beläget på Stora Torget i hjärtat av Uppsala – lätt att hitta och nära kollektivtrafik.",
    },
    {
      title: "Erfaret hantverk",
      description:
        "Noggranna reparationer av skor, väskor och lädervaror med fokus på kvalitet och hållbarhet.",
    },
    {
      title: "Brett utbud",
      description:
        "Från klackning och sulning till dragkedjor, skidpjäxor och nyckeltillverkning.",
    },
    {
      title: "Skovårdsprodukter",
      description:
        "I butiken hittar du produkter för att vårda och skydda dina skor hemma.",
    },
  ],
  services: [
    {
      id: "klackning",
      name: "Klackning",
      description: "Byte och reparation av klackar på skor i olika material.",
      duration: "Varierar",
      priceFrom: null,
      note: "Pris efter skick och material – fråga i butiken.",
    },
    {
      id: "sulning",
      name: "Sulning",
      description: "Ny sula eller förstärkning av befintlig sula för längre livslängd.",
      duration: "Varierar",
      priceFrom: null,
      note: "Anpassas efter skomodell och slitage.",
    },
    {
      id: "utlastning",
      name: "Utlästning",
      description: "Justering av passform för bekvämare skor.",
      duration: "Varierar",
      priceFrom: null,
      note: "Professionell utlästning av erfarna skomakare.",
    },
    {
      id: "dragkedja",
      name: "Dragkedjebyte",
      description: "Reparation och byte av dragkedjor på skor, väskor och plagg.",
      duration: "Varierar",
      priceFrom: null,
      note: "Vi lagar även väskor och lädervaror.",
    },
    {
      id: "skidpjaxor",
      name: "Skidpjäxor",
      description: "Service och reparation av skidpjäxor.",
      duration: "Varierar",
      priceFrom: null,
      note: "Kontakta oss för offert.",
    },
    {
      id: "nyckel",
      name: "Nyckel- & låsservice",
      description: "Kopiering och tillverkning av nycklar samt låsservice.",
      duration: "Ofta samma dag",
      priceFrom: null,
      note: "Snabb och prisvärd nyckelservice.",
    },
    {
      id: "produkter",
      name: "Skovårdsprodukter",
      description: "Försäljning av produkter för rengöring, impregnering och vård av skor.",
      duration: "Butik",
      priceFrom: null,
      note: "Fråga oss om rätt produkt för dina skor.",
    },
  ],
  testimonials: [
    {
      text: "Mycket nöjd – varmt och professionellt bemötande. Nyckeln passade perfekt och skorna kom tillbaka i fantastiskt skick.",
      author: "Kundrecension",
      source: "Reco.se (offentligt omdöme, parafraserat)",
      rating: 5,
    },
    {
      text: "Kunde kopiera vår nyckel direkt och priset var skäligt. Fantastiskt trevliga också.",
      author: "Kundrecension",
      source: "Reco.se (offentligt omdöme, parafraserat)",
      rating: 5,
    },
  ],
  seoKeywords: [
    "skomakare Uppsala",
    "skoreparation Uppsala",
    "klackning Uppsala",
    "nyckelservice Uppsala",
    "Skotjänst",
    "skomakeri Stora Torget",
    "lagning skor Uppsala",
    "skovård Uppsala",
  ],
  brandColors: {
    primary: "#5C4033",
    secondary: "#C9A227",
    accent: "#FAF7F2",
    dark: "#3D2914",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
