import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { WhyChooseHeaven } from "@/components/WhyChooseHeaven";
import { Collections } from "@/components/Collections";
import { BespokeHighlight } from "@/components/BespokeHighlight";
import { SocialProof } from "@/components/SocialProof";
import { StoreLocation } from "@/components/StoreLocation";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const title = "Heaven Furniture Mart | Bespoke Furniture & Interior Styling";
const description =
  "Luxury bespoke furniture and interior styling in Chattogram, Bangladesh. Designed, crafted and customized around your space, size and taste.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FurnitureStore",
          name: "Heaven Furniture Mart",
          description,
          telephone: "+880 1960-481983",
          email: "heavenfurnituremart@gmail.com",
          foundingDate: "2020",
          founder: { "@type": "Person", name: "Abul Kalam Bhuiyan" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Agrabad Access Road",
            addressLocality: "Chattogram",
            addressCountry: "BD",
          },
          sameAs: [
            "https://facebook.com/HeavenFurnitureMart",
            "https://instagram.com/heavenfurnitureltd",
            "https://youtube.com/@HeavenFurnitureMart",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <WhyChooseHeaven />
        <Collections />
        <BespokeHighlight />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
