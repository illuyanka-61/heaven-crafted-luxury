import livingImage from "@/assets/living.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import diningImage from "@/assets/dining.jpg";
import officeImage from "@/assets/office.jpg";
import bespokeImage from "@/assets/bespoke.jpg";
import { CollectionCard, type Collection } from "./CollectionCard";
import { Reveal } from "./Reveal";

const feature: Collection = {
  number: "01",
  title: "Living",
  items: "Sofas · Coffee Tables · TV Units · Consoles",
  image: livingImage,
  alt: "Handcrafted ivory sofa with teak base and brass detail in a warm living room",
  width: 1280,
  height: 1600,
};

const supporting: Collection[] = [
  {
    number: "02",
    title: "Bedroom",
    items: "Beds · Wardrobes · Dressing Tables · Bedside Tables",
    image: bedroomImage,
    alt: "Bespoke upholstered bed and solid wood wardrobe in a bedroom",
    width: 1280,
    height: 1024,
  },
  {
    number: "03",
    title: "Dining",
    items: "Dining Tables · Dining Chairs · Cabinets",
    image: diningImage,
    alt: "Solid wood dining table with upholstered chairs under brass pendants",
    width: 1280,
    height: 1024,
  },
  {
    number: "04",
    title: "Office & Study",
    items: "Executive Tables · Bookshelves · Workstations",
    image: officeImage,
    alt: "Executive walnut desk with built-in bookshelves in a study",
    width: 1280,
    height: 1024,
  },
  {
    number: "05",
    title: "Bespoke / Custom",
    items: "Anything built to your own space, size, and taste",
    image: bespokeImage,
    alt: "Craftsman finishing a bespoke wooden cabinet with brass hardware",
    width: 1280,
    height: 1600,
  },
];

export function Collections() {
  return (
    <section id="collections" className="bg-background">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="eyebrow text-muted-foreground">Collections</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] text-brown sm:text-5xl">
              A snapshot of the work
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Five families of furniture, each made to order in our own workshop.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <CollectionCard collection={feature} feature />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {supporting.map((collection, index) => (
              <Reveal key={collection.number} delay={index * 80}>
                <CollectionCard collection={collection} />
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
