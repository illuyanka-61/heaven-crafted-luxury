import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { navItems, site, whatsappHref } from "@/lib/site";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables?.length) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-teal-deep/70 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-teal px-7 pt-7 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow text-ivory/50">Menu</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 grid h-11 w-11 shrink-0 place-items-center text-ivory"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        <nav className="mt-12 flex flex-col" aria-label="Mobile">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-baseline gap-4 border-b border-ivory/12 py-5 font-serif text-3xl text-ivory transition-colors duration-300 hover:text-brass"
            >
              <span className="eyebrow text-brass/70">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-10">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              onClick={onClose}
              className="btn-outline w-full"
            >
              Call
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-outline w-full"
            >
              WhatsApp
            </a>
          </div>
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary mt-3 w-full bg-brass text-accent-foreground"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
