import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { metrics, theoryOfChange } from "@/content/metrics";

export default function ImpactPage() {
  const kpis = metrics.kpis;

  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <Container>
          <Eyebrow label="Impact" />
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Theory of change
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            {theoryOfChange.principle}
          </p>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="relative w-full aspect-[1376/768] rounded-2xl overflow-hidden">
            <Image
              src="/images/theory-of-change.jpg"
              alt="Theory of change diagram showing activities producing outputs that lead to outcomes"
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <Eyebrow label="The model in detail" />
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-forest mb-12">
            Activities, outputs, outcomes
          </h2>

          <div className="space-y-12">
            {[
              {
                label: "Activities",
                items: theoryOfChange.activities,
                desc: "What PLTR does",
                color: "bg-forest",
              },
              {
                label: "Outputs",
                items: theoryOfChange.outputs,
                desc: "What activities deliver",
                color: "bg-harvest",
              },
              {
                label: "Short-term outcomes",
                items: theoryOfChange.outcomes,
                desc: "What beneficiaries achieve",
                color: "bg-soil",
              },
            ].map((group) => (
              <div key={group.label}>
                <div className="flex items-baseline gap-4 mb-5">
                  <h3 className="font-display text-xl font-semibold text-forest">
                    {group.label}
                  </h3>
                  <span className="text-sm text-muted">{group.desc}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-white rounded-xl p-5 border border-cream-dark"
                    >
                      <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${group.color}`} />
                      <p className="text-sm text-ink-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow label="Measurement" />
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-forest leading-tight">
                KPIs we track
              </h2>
              <p className="mt-4 text-ink-light leading-relaxed">
                We monitor performance across land restoration, soil health,
                biomass production, worker activation and recurring commercial
                sales.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/kpi-charts.jpg"
                alt="Charts and graphs representing hectares growth, progress, growth trajectory, and impact progress bars"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {kpis.map((kpi) => (
              <div
                key={kpi.id}
                className="bg-cream rounded-xl p-6 border border-cream-dark"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3 line-clamp-2">
                  {kpi.label}
                </p>
                <div className="flex items-baseline gap-2">
                  {kpi.status === "current" && (
                    <>
                      <span className="font-display text-3xl font-semibold text-forest">
                        {kpi.current}
                      </span>
                      {kpi.unit && (
                        <span className="text-harvest text-sm font-semibold">
                          {kpi.unit}
                        </span>
                      )}
                    </>
                  )}
                  {kpi.status === "target" && (
                    <>
                      <span className="font-display text-3xl font-semibold text-forest">
                        {kpi.target}
                      </span>
                      <span className="text-harvest text-sm font-semibold">
                        {kpi.unit}
                      </span>
                    </>
                  )}
                  {kpi.status === "baseline" && (
                    <span className="text-sm text-ink-light italic">
                      {kpi.baseline}
                    </span>
                  )}
                  {kpi.status === "tracking" && (
                    <span className="text-sm text-ink-light italic">
                      Tracking in progress
                    </span>
                  )}
                </div>
                {kpi.target && kpi.status !== "target" && (
                  <p className="text-xs text-muted mt-1">
                    Target: {kpi.target} {kpi.unit}
                  </p>
                )}
                {kpi.status === "baseline" && (
                  <p className="text-xs text-muted mt-1">
                    Target: {kpi.target}
                  </p>
                )}
                <p className="text-xs text-muted mt-2 capitalize">
                  Status: {kpi.status}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="forest">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-semibold text-cream">
              Long-term impact
            </h2>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed">
              {theoryOfChange.longTerm}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
