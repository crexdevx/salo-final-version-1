import { createFileRoute } from "@tanstack/react-router";
import { siteConfig, SITE_URL } from "@/config/site";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";


const title = "A4 Unisex Salon Nalbari | Best Unisex Salon & Hair Salon";
const description =
  "A4 Unisex Salon in Nalbari, Assam — men's and women's haircuts, hairstyling, hair spa, keratin treatment, facials and wedding grooming near MNC College, Ward No. 7. Call 084867 54335.";
const pageUrl = `${SITE_URL}/`;
const ogImage = `${SITE_URL}/images/hero-unisex-og.jpg`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HairSalon", "BeautySalon"],
  "@id": `${SITE_URL}/#a4-unisex-salon-nalbari`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  description,
  url: pageUrl,
  image: ogImage,
  telephone: `+91${siteConfig.phone.replace(/^0/, "")}`,
  priceRange: "$$",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.street}, ${siteConfig.address.ward}`,
    addressLocality: "Nalbari",
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Nalbari" },
    { "@type": "AdministrativeArea", name: "Nalbari district, Assam" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: siteConfig.closingTime,
    },
  ],
  hasMap: siteConfig.googleMapsDirectionsUrl,
  makesOffer: siteConfig.services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service, areaServed: "Nalbari, Assam" },
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Unisex hair and grooming services in Nalbari",
    itemListElement: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "A4 Unisex Salon Nalbari, unisex salon in Nalbari, best unisex salon in Nalbari, best salon in Nalbari, best men's salon in Nalbari, best women's salon in Nalbari, men's salon in Nalbari, women's salon in Nalbari, gents salon in Nalbari, hair salon in Nalbari, hair spa in Nalbari, keratin treatment in Nalbari, men's haircut in Nalbari, women's haircut in Nalbari",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "business.business" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "geo.region", content: "IN-AS" },
      { name: "geo.placename", content: "Nalbari, Assam" },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-unisex.webp",
        imageSrcSet: "/images/hero-unisex-746.webp 746w, /images/hero-unisex.webp 1445w",
        imageSizes: "(max-width: 640px) 68vw, (max-width: 1024px) 58vw, 52vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

