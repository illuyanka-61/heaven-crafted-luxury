import { site, whatsappHref } from "@/lib/site";

/** Slim, quiet contact bar — small screens only. */
export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ivory/15 bg-teal-deep/95 backdrop-blur-md md:hidden">
      <nav
        aria-label="Quick contact"
        className="mx-auto grid max-w-md grid-cols-3 divide-x divide-ivory/12"
      >
        <a
          href={`tel:${site.phoneHref}`}
          className="eyebrow flex min-h-13 items-center justify-center px-2 text-ivory/85 transition-colors duration-300 active:text-brass"
        >
          Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow flex min-h-13 items-center justify-center px-2 text-ivory/85 transition-colors duration-300 active:text-brass"
        >
          WhatsApp
        </a>
        <a
          href="#contact"
          className="eyebrow flex min-h-13 items-center justify-center bg-brass px-2 text-accent-foreground"
        >
          Quote
        </a>
      </nav>
    </div>
  );
}
