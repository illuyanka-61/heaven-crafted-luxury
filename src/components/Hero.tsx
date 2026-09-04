import heroImage from "@/assets/hero.jpg";
import { site, whatsappHref } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-teal-deep">
      <img
        src={heroImage}
        alt="Bespoke ivory sofa and solid teak coffee table in a charcoal-teal living room by Heaven Furniture Mart"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/92 via-teal-deep/55 to-teal-deep/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/88 via-teal-deep/45 to-teal-deep/40 sm:from-teal-deep/70 sm:via-transparent sm:to-teal-deep/35" />


      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-5 pt-32 pb-16 sm:px-8 lg:justify-center lg:pb-28">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">{site.tagline}</p>

          <h1 className="mt-7 font-serif text-[2.75rem] leading-[1.02] text-ivory sm:text-6xl lg:text-[5.25rem]">
            Furniture Made for You
          </h1>

          <p className="mt-7 max-w-lg text-[0.9375rem] leading-relaxed text-ivory/75 sm:text-base">
            Furniture you can see in our Agrabad showroom in Chattogram, and
            pieces crafted around your own space, size and taste.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a href="#contact" className="btn-primary bg-brass text-accent-foreground hover:bg-ivory">
              Request a Quote
            </a>
            <a href="#collections" className="btn-outline">
              Explore Collections
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link self-start text-ivory/75 transition-colors duration-300 hover:text-brass sm:ml-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <p className="mt-14 eyebrow text-ivory/45 lg:absolute lg:right-8 lg:bottom-10 lg:mt-0">
          Agrabad Access Road · Chattogram
        </p>
      </div>
    </section>
  );
}
