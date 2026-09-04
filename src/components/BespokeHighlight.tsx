import bespokeImage from "@/assets/bespoke.jpg";
import { requestProjectType } from "@/lib/enquiry";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    label: "Consult",
    detail: "Sit with us (free). Tell us the room and what you need.",
  },
  {
    number: "02",
    label: "Design & quote",
    detail: "We design around your space, size and taste, then quote.",
  },
  {
    number: "03",
    label: "Craft, deliver & install",
    detail: "Made in our workshop, delivered and fitted in your room.",
  },
];

export function BespokeHighlight() {
  return (
    <section id="bespoke" className="bg-teal text-ivory">
      <div className="mx-auto grid max-w-[88rem] items-stretch gap-0 lg:grid-cols-2">
        <Reveal className="relative min-h-[24rem] lg:min-h-[42rem]">
          <img
            src={bespokeImage}
            alt="Heaven Furniture Mart craftsman hand-finishing a bespoke wooden cabinet"
            width={1280}
            height={1600}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>

        <Reveal
          delay={120}
          className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-16 lg:py-24"
        >
          <p className="eyebrow text-brass">The Bespoke Difference</p>
          <h2 className="mt-7 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Made Around You
          </h2>
          <p className="mt-6 font-serif text-2xl text-ivory/85 sm:text-[1.75rem]">
            Your space. Your dimensions. Your taste.
          </p>

          <ol className="mt-12">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-ivory/15 py-6 sm:gap-7"
              >
                <span className="eyebrow pt-1.5 text-brass">{step.number}</span>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl leading-snug text-ivory">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ivory/75">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href="#contact"
            onClick={() => requestProjectType("Fully Bespoke")}
            className="btn-primary mt-12 self-start bg-brass text-accent-foreground hover:bg-ivory"
          >
            Start Your Custom Piece
          </a>
        </Reveal>
      </div>
    </section>
  );
}
