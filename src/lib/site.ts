export const site = {
  name: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  address: "Agrabad Access Road, Chattogram, Bangladesh",
  phoneDisplay: "+880 1960-481983",
  phoneLocal: "01960481983",
  phoneHref: "+8801960481983",
  whatsapp: "8801960481983",
  email: "heavenfurnituremart@gmail.com",
  hours: "9:00 AM – 9:30 PM, Saturday - Thursday",
  mapsLink: "https://maps.app.goo.gl/rK5m4wDLYkXaB8cQA",
  mapsEmbed:
    "https://www.google.com/maps?q=Heaven+Furniture+Mart,+Agrabad+Access+Road,+Chattogram&ll=22.3296222,91.7930853&z=17&hl=en&output=embed",
  social: {
    facebook: "https://facebook.com/HeavenFurnitureMart",
    instagram: "https://instagram.com/heavenfurnitureltd",
    youtube: "https://youtube.com/@HeavenFurnitureMart",
  },
} as const;

export const navItems = [
  { label: "Collections", href: "#collections" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "About", href: "#about" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Short, polite opener used by every one-tap WhatsApp control. */
export const whatsappGreeting =
  `Hello ${site.name}, I'd like to ask about your furniture.`;

export const whatsappHref = whatsappLink(whatsappGreeting);
