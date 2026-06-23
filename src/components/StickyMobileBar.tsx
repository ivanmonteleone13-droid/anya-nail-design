import { business } from "@/lib/business";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-[#E07A5F]/10 bg-[#FFF8F0]/95 p-3 backdrop-blur-md md:hidden"
      role="navigation"
      aria-label="Snabbkontakt"
    >
      {business.phoneLink && business.phone ? (
        <a
          href={business.phoneLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#E07A5F] bg-white py-3 text-sm font-semibold text-[#E07A5F]"
        >
          <span aria-hidden>📞</span>
          Ring
        </a>
      ) : null}
      <a
        href={business.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#F2CC8F] py-3 text-sm font-semibold text-[#3D405B]"
      >
        <span aria-hidden>📅</span>
        Boka
      </a>
    </div>
  );
}
