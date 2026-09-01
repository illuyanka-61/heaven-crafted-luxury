import bespokeImage from "@/assets/bespoke.jpg";
import { Reveal } from "./Reveal";

const steps = [
  { label: "Your space", detail: "Measured room by room, corner by corner." },
  { label: "Your dimensions", detail: "Built to fit, not adapted to fit." },
  { label: "Your taste", detail: "Wood, finish, fabric and form, chosen by you." },
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

          <ul className="mt-12">
            {steps.map((step) => (
              <li
                key={step.label}
                className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)] gap-5 border-t border-ivory/15 py-5"
              >
                <span className="eyebrow pt-1 text-ivory/55">{step.label}</span>
                <span className="text-sm leading-relaxed text-ivory/80">
                  {step.detail}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-primary mt-12 self-start bg-brass text-accent-foreground hover:bg-ivory"
          >
            Start Your Custom Piece
          </a>
        </Reveal>
      </div>
    </section>
  );
}
