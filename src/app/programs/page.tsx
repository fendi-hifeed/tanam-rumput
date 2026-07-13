import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { programs } from "@/content/programs";
import { Leaf, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  forest: Leaf,
  harvest: Users,
  soil: TrendingUp,
};

export default function ProgramsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <Container>
          <Eyebrow label="Programs" />
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Three integrated pillars
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            PLTR&apos;s operating model is built on three interconnected pillars
            — each reinforcing the others to create durable restoration and
            lasting impact.
          </p>
        </Container>
      </section>

      {programs.map((pillar, index) => {
        const Icon = iconMap[pillar.color] || Leaf;
        const isEven = index % 2 === 1;

        return (
          <Section
            key={pillar.id}
            id={pillar.id}
            background={isEven ? "white" : "cream"}
          >
            <Container>
              <div className={`grid md:grid-cols-2 gap-16 items-start ${
                isEven ? "md:grid-flow-dense" : ""
              }`}>
                <div className={isEven ? "md:col-start-2" : ""}>
                  <Eyebrow label={pillar.label} />
                  <h2 className="mt-4 font-display text-4xl font-semibold text-forest leading-tight">
                    {pillar.headline}
                  </h2>
                  <p className="mt-6 text-ink-light text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  <p className="mt-6 text-sm font-medium text-forest bg-forest/5 inline-block px-4 py-2 rounded-full">
                    {pillar.status}
                  </p>
                </div>

                <div className={`space-y-8 ${isEven ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <div className="bg-white rounded-2xl p-8 border border-cream-dark">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                        <Icon size={20} className="text-forest" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                        Key activities
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {pillar.activities.map((a) => (
                        <li key={a} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="text-forest mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-ink-light">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-8 border border-cream-dark">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                      Outcomes
                    </p>
                    <ul className="space-y-3">
                      {pillar.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-harvest mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-ink-light">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
