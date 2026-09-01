import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled ? "border-b border-ivory/10 bg-teal-deep/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 md:py-5">
          <Wordmark />

          <div className="flex items-center gap-10">
            <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-ivory/80 transition-colors duration-300 hover:text-ivory"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="btn-outline hidden !min-h-11 md:inline-flex"
            >
              Request a Quote
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 grid h-11 w-11 shrink-0 place-items-center text-ivory md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
}
