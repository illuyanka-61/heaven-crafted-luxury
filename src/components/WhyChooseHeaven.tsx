import { Reveal } from "./Reveal";

const points = [
  {
    title: "Free design consultation",
    detail: "Sit with our designers before a single piece is cut.",
  },
  {
    title: "Fully bespoke",
    detail: "Built to your space and dimensions, never mass-produced.",
  },
  {
    title: "Premium wood & materials",
    detail: "Skilled in-house craftsmanship on every joint and finish.",
  },
  {
    title: "Large Agrabad showroom",
    detail:
      "Visit the showroom: Agrabad Access Road, Chattogram. See and feel the work in person.",
  },
  {
    title: "Delivery & installation",
    detail: "Included, and fitted properly in your room.",
  },
  {
    title: "Easy payment options",
    detail: "Flexible arrangements to suit your project.",
  },
  {
    title: "Hundreds of homeowners",
    detail: "Trusted across Chattogram since 2020.",
  },
];

export function WhyChooseHeaven() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-muted-foreground">Why Heaven</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-brown sm:text-5xl">
              Reasons clients
              <br />
              stay with us
            </h2>
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-relaxed text-muted-foreground">
              A studio process, a real workshop, and a showroom you can walk
              into — start to finish, handled by one house.
            </p>
          </Reveal>

          <ol className="lg:col-span-8 lg:grid lg:grid-cols-2 lg:gap-x-14">
            {points.map((point, index) => (
              <Reveal
                as="li"
                key={point.title}
                delay={index * 60}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-t border-border py-6"
              >
                <span className="eyebrow pt-1 text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl leading-snug text-brown">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {point.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
