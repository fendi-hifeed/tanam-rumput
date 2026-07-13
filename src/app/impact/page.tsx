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
          <div className="space-y-16">
            {[
              {
                label: "Activities",
                items: theoryOfChange.activities,
                desc: "What PLTR does",
                color: "bg-forest",
                textColor: "text-forest",
              },
              {
                label: "Outputs",
                items: theoryOfChange.outputs,
                desc: "What activities deliver",
                color: "bg-harvest",
                textColor: "text-soil",
              },
              {
                label: "Short-term outcomes",
                items: theoryOfChange.outcomes,
                desc: "What beneficiaries achieve",
                color: "bg-soil",
                textColor: "text-soil",
              },
            ].map((group) => (
              <div key={group.label}>
                <div className="flex items-baseline gap-4 mb-6">
                  <h2 className="font-display text-2xl font-semibold text-forest">
                    {group.label}
                  </h2>
                  <span className="text-sm text-muted">{group.desc}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-cream rounded-xl p-5"
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

      <Section background="cream">
        <Container>
          <Eyebrow label="KPIs" />
          <h2 className="mt-4 font-display text-4xl font-semibold text-forest mb-12">
            How we measure impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kpis.map((kpi) => (
              <div
                key={kpi.id}
                className="bg-white rounded-xl p-6 border border-cream-dark"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
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
