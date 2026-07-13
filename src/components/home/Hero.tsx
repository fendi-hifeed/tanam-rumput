import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a961_0%,_transparent_60%)] opacity-20 pointer-events-none" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-forest leading-[1.1] tracking-tight whitespace-pre-line">
            {hero.headline}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-light leading-relaxed max-w-2xl">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/impact" variant="primary" size="lg">
              {hero.cta.primary}
            </Button>
            <Button href="/partners" variant="outline" size="lg">
              {hero.cta.secondary}
            </Button>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { value: "74M", unit: "ha", label: "of Indonesian rainforest degraded since 1950" },
            { value: "11.15", unit: "ha", label: "currently under management" },
            { value: "16", unit: "", label: "land and warehouse workers" },
            { value: "100", unit: "", label: "rural women targeted over 2 years" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl md:text-4xl font-semibold text-forest">
                  {item.value}
                </span>
                <span className="text-harvest font-semibold text-lg">
                  {item.unit}
                </span>
              </div>
              <p className="text-xs text-ink-light mt-1 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
