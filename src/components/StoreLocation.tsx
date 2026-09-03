import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function StoreLocation() {
  return (
    <section id="visit" className="bg-secondary">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-brass">Store Location</p>
          <h2 className="mt-7 font-serif text-4xl leading-[1.05] text-brown sm:text-5xl lg:text-[3.5rem]">
            Visit Our Showroom
          </h2>
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
            See the finishes, feel the fabrics and sit with the pieces before you
            commission them. Our team is on hand every day of the week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <Reveal className="lg:col-span-5">
            <dl className="space-y-8">
              <div className="rule-accent">
                <dt className="eyebrow text-muted-foreground">Showroom</dt>
                <dd className="mt-3 font-serif text-2xl text-brown">{site.name}</dd>
              </div>

              <div className="flex gap-4 border-t border-border pt-7">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="min-w-0">
                  <dt className="eyebrow text-muted-foreground">Address</dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-brown">
                    {site.address}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4 border-t border-border pt-7">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="min-w-0">
                  <dt className="eyebrow text-muted-foreground">Phone</dt>
                  <dd className="mt-2 text-[0.9375rem] text-brown">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="transition-colors duration-300 hover:text-brass"
                    >
                      {site.phoneLocal}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4 border-t border-border pt-7">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-brass"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div className="min-w-0">
                  <dt className="eyebrow text-muted-foreground">Opening Hours</dt>
                  <dd className="mt-2 text-[0.9375rem] text-brown">{site.hours}</dd>
                </div>
              </div>
            </dl>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 w-full sm:w-auto"
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7 lg:order-first">
            <div className="h-[20rem] w-full overflow-hidden border border-border bg-muted sm:h-[26rem] lg:h-full lg:min-h-[30rem]">
              <iframe
                title={`Map showing ${site.name} on Agrabad Access Road, Chattogram`}
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
