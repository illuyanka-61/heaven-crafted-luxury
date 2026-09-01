import { Reveal } from "./Reveal";

const milestones = [
  { year: "2020", text: "Founded by Abul Kalam Bhuiyan" },
  { year: "2021", text: "Opened the Agrabad showroom" },
  { year: "2024–25", text: "Exhibited at the International Furniture Fair, Chattogram" },
  { year: "2025", text: "Became a member of the Chamber of Commerce" },
  { year: "2026", text: "Received nationwide BFIA recognition" },
];

export function Milestones() {
  return (
    <Reveal as="div" className="mt-20 border-t border-border pt-10 sm:mt-28">
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {milestones.map((item) => (
          <li key={item.year} className="relative pl-5 lg:pt-6 lg:pl-0">
            <span
              aria-hidden
              className="absolute top-2 left-0 h-1.5 w-1.5 rounded-full bg-brass lg:top-0 lg:left-0"
            />
            <p className="eyebrow text-brown">{item.year}</p>
            <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
