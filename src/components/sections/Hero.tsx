import { ArrowRight, Clock, Facebook, Instagram, Scissors, ShieldCheck, SprayCan, Youtube } from "lucide-react";
import { siteConfig } from "@/config/site";

const heroArt = "/images/hero-unisex.webp";
const heroArtSmall = "/images/hero-unisex-746.webp";

const features = [
  { icon: Scissors, title: "Expert Barbers", copy: ["Skilled professionals", "for your best look"] },
  { icon: SprayCan, title: "Premium Products", copy: ["Top quality products", "for healthy hair"] },
  { icon: ShieldCheck, title: "Hygiene First", copy: ["Clean tools,", "safe environment"] },
  { icon: Clock, title: "On Time", copy: ["Your time is", "our priority"] },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-canvas">
      {/* Full-bleed hero image — no white space on any screen size */}
      <div className="absolute inset-0">
        <img
          src={heroArt}
          srcSet={`${heroArtSmall} 746w, ${heroArt} 1445w`}
          sizes="100vw"
          alt="Portrait of a stylish man and woman at A4 Unisex Salon Nalbari, showcasing modern unisex haircuts and grooming"
          width={1445}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full animate-fade-in object-cover object-center"
        />
      </div>

      {/* Dark overlay so white copy remains readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
      />

      {/* Dot grid, right side above the feature strip */}
      <div
        aria-hidden="true"
        className="absolute bottom-[26%] right-4 h-12 w-10 opacity-70 sm:bottom-[24%] sm:right-8 sm:h-16 sm:w-14 lg:right-12"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.2px)",
          backgroundSize: "9px 9px",
          color: "var(--color-primary)",
        }}
      />

      <div className="container-page relative">
        {/* Copy column — left half on every size, mirroring the reference */}
        <div className="w-[56%] pt-8 sm:w-[54%] sm:pt-14 lg:w-[50%] lg:pt-20">
          <p className="animate-fade-in text-[0.5rem] font-bold uppercase leading-tight tracking-[0.06em] text-white sm:text-xs lg:text-sm">
            Define your <span className="text-primary">style</span>. Own your{" "}
            <span className="text-primary">look</span>.
          </p>

          <h1 className="mt-2 animate-fade-up font-display text-[1.85rem] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white sm:mt-3 sm:text-5xl lg:text-7xl">
            Style that
            <br />
            <span className="text-primary">Speaks</span> you
          </h1>

          <span aria-hidden="true" className="mt-3 block h-[3px] w-12 bg-white sm:w-16" />

          <p className="mt-3 text-[0.7rem] leading-snug text-white/80 sm:mt-4 sm:text-sm lg:text-base">
            Premium grooming, haircuts &amp; styling for both men and women.
          </p>

          <div className="mt-5 flex items-center gap-2 sm:mt-8 sm:gap-5">
            <a
              href={`sms:+91${siteConfig.phone.replace(/^0/, "")}?body=${encodeURIComponent("Hi A4 Unisex Salon, I would like to book an appointment.")}`}
              className="btn-base btn-primary shrink-0 px-4 py-3 text-[0.55rem] sm:text-[0.75rem] lg:text-[0.8125rem]"
              aria-label="Book your style via text message"
            >
              Book your style
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>
        </div>

        {/* Feature strip */}
        <ul className="relative mt-10 grid grid-cols-4 sm:mt-16 lg:mt-20">
          {features.map(({ icon: Icon, title, copy }, i) => (
            <li
              key={title}
              className={`px-1.5 text-center sm:px-4 ${i > 0 ? "border-l border-white/20" : ""}`}
            >
              <Icon className="mx-auto h-4 w-4 text-primary sm:h-6 sm:w-6" />
              <p className="mt-1.5 text-[0.45rem] font-bold uppercase tracking-[0.06em] text-white sm:mt-3 sm:text-[0.65rem]">
                {title}
              </p>
              <p className="mt-1 text-[0.4rem] leading-tight text-white/70 sm:text-[0.6rem]">
                {copy[0]}
                <br />
                {copy[1]}
              </p>
            </li>
          ))}
        </ul>

        {/* Follow us */}
        <div className="relative flex items-center gap-3 pb-6 pt-6 sm:gap-4 sm:pb-10 sm:pt-10">
          <span className="text-[0.5rem] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-[0.65rem]">
            Follow us
          </span>
          <div className="flex items-center gap-2.5 text-white sm:gap-3">
            <a href="#contact" aria-label="Instagram">
              <Instagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a href="#contact" aria-label="Facebook">
              <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a href="#contact" aria-label="YouTube">
              <Youtube className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </div>
          <span aria-hidden="true" className="h-4 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}

