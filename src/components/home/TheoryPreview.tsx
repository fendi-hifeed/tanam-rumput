import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { theoryOfChange } from "@/content/metrics";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TheoryPreview() {
  return (
    <Section background="forest">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow label="Theory of change" className="text-harvest/80" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-cream leading-tight">
              Why productive land needs a commercial reason to stay restored
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              {theoryOfChange.principle}
            </p>
            <Link
              href="/impact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-harvest hover:text-harvest-light transition-colors"
            >
              Read full theory of change
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-8">
            {[
              {
                label: "We do",
                items: theoryOfChange.activities,
                dotClass: "bg-harvest",
              },
              {
                label: "To deliver",
                items: theoryOfChange.outputs,
                dotClass: "bg-harvest/60",
              },
              {
                label: "So families achieve",
                items: theoryOfChange.outcomes,
                dotClass: "bg-cream/60",
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-3">
                  {group.label}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${group.dotClass}`}
                      />
                      <span className="text-sm text-cream/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
