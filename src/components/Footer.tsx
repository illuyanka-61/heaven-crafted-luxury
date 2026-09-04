import { Facebook, Instagram, Youtube } from "lucide-react";
import { navItems, site } from "@/lib/site";

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-brown pb-13 text-ivory md:pb-0">
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl">Heaven Furniture Mart</p>
            <p className="eyebrow mt-4 text-brass">{site.tagline}</p>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow text-ivory/45">Visit & Contact</p>
            <address className="mt-4 space-y-2 text-sm leading-relaxed text-ivory/80 not-italic">
              <p>{site.address}</p>
              <p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors duration-300 hover:text-brass"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors duration-300 hover:text-brass"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <p className="eyebrow text-ivory/45">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
              {[...navItems, { label: "Request a Quote", href: "#contact" }].map(
                (item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors duration-300 hover:text-brass"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/45">
            © {new Date().getFullYear()} Heaven Furniture Mart. Chattogram, Bangladesh.
          </p>
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${label}`}
                  className="grid h-11 w-11 place-items-center border border-ivory/20 text-ivory/75 transition-colors duration-300 hover:border-brass hover:text-brass"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.4} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
