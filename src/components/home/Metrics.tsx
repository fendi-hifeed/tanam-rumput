import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Stat from "@/components/ui/Stat";
import { metrics } from "@/content/metrics";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Metrics() {
  const items = [
    { value: metrics.current.hectares, unit: "ha", label: "Land under management" },
    { value: metrics.current.workers, unit: "", label: "Workers in paid roles" },
    { value: metrics.current.b2bTransactions, unit: "", label: "B2B transactions" },
    { value: metrics.current.womenTarget, unit: "+", label: "Women targeted over 2 years" },
  ];

  return (
    <Section background="white">
      <Container>
        <div className="mb-16">
          <Eyebrow label="Operating snapshot" />
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-forest">
            Early results. Clear trajectory.
          </h2>
          <p className="mt-4 text-ink-light text-lg max-w-2xl">
            Carbon Bank is in revenue-generating early commercial stage. Current
            operations provide the foundation for planned scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {items.map((item) => (
            <Stat
              key={item.label}
              value={item.value}
              unit={item.unit}
              label={item.label}
            />
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-cream-dark flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-forest">
              FY2025 Operating Revenue
            </p>
            <p className="text-xs text-muted mt-1">
              Excludes grant funding, loans and non-operating income
            </p>
          </div>
          <div className="text-right">
            <p className="font-display text-3xl font-semibold text-soil">
              IDR {metrics.current.revenueFY2025}
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark transition-colors"
          >
            View full impact metrics
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
