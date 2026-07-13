import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import { model } from "@/content/site";
import { ArrowRight } from "lucide-react";

export default function ModelPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-cream">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-harvest mb-4">
            Our model
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-forest leading-tight max-w-3xl">
            {model.headline}
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            {model.subheadline}
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-16">
        <Container>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/value-chain.jpg"
              alt="Eight-step integrated value chain from land preparation through soil improvement, nursery, cultivation, harvesting, processing, storage, to buyer fulfilment"
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="space-y-3">
            {model.steps.map((step, i) => (
              <div
                key={step.label}
                className="relative pl-12 py-6 border-l-2 border-cream-dark group hover:border-forest transition-colors duration-300"
              >
                <span className="absolute left-0 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-forest text-cream text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest mb-2">
                      {step.label}
                    </h3>
                    <p className="text-ink-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < model.steps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="text-cream-dark flex-shrink-0 mt-1 group-hover:text-forest transition-colors"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="harvest">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest">
              Why this model is durable
            </h2>
            <p className="mt-6 text-lg text-forest/80 leading-relaxed">
              {model.whyDurable}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
