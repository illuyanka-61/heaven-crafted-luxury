import { Reveal } from "./Reveal";
import { Milestones } from "./Milestones";

export function BrandIntro() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-muted-foreground">About the House</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-brown sm:text-5xl">
              Made for
              <br />
              Your Space
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <div className="rule-accent">
              <p className="font-serif text-2xl leading-[1.45] text-brown sm:text-[1.75rem]">
                Heaven Furniture Mart is a bespoke furniture and interior styling
                house based in Chattogram, founded in 2020 by Managing Director
                Abul Kalam Bhuiyan.
              </p>
              <p className="mt-7 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
                Sofas, beds, dining sets, office pieces — every piece is designed
                and crafted around what a customer actually wants, not pulled off
                a shelf. Designed. Crafted. Customized.
              </p>
            </div>
          </Reveal>
        </div>

        <Milestones />
      </div>
    </section>
  );
}
