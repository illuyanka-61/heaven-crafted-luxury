import showroomImage from "@/assets/showroom.jpg";
import { Reveal } from "./Reveal";

export function SocialProof() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <blockquote className="rule-accent">
              <p className="font-serif text-[1.625rem] leading-[1.4] text-brown sm:text-[2rem]">
                “At Heaven Furniture Mart, we believe furniture is more than just
                function; it is a reflection of lifestyle, taste, and comfort.
                Every piece we create is designed to bring lasting elegance into
                the homes of our clients.”
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-xl text-brown">Abul Kalam Bhuiyan</p>
                <p className="eyebrow mt-1.5 text-muted-foreground">
                  Managing Director
                </p>
              </footer>
            </blockquote>

            <p className="eyebrow mt-10 text-brown">
              Trusted by hundreds of happy homeowners
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <figure>
              <img
                src={showroomImage}
                alt="The Heaven Furniture Mart showroom in Agrabad, Chattogram, with sofas and dining sets"
                width={1600}
                height={1104}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="eyebrow mt-4 text-muted-foreground">
                The showroom · Agrabad Access Road, Chattogram
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
