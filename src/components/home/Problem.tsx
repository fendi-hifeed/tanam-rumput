import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { problem } from "@/content/site";

export default function Problem() {
  return (
    <Section background="white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow label="The challenge" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-forest leading-tight">
              Degraded land is not idle land — it is a growing liability
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-2xl font-display font-semibold text-soil leading-snug">
              &ldquo;{problem.headline}&rdquo;
            </p>
            <p className="text-ink-light leading-relaxed">{problem.body}</p>
            <p className="text-ink-light leading-relaxed">{problem.impact}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
