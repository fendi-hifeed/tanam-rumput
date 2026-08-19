import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { reports, site } from "@/content/site";
import { FileText, DollarSign, BarChart3, Download } from "lucide-react";

export default function ReportsPage() {
  return (
    <>
      <Section background="cream">
        <Container>
          <Eyebrow label="Transparency" />
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Reports & financial summary
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            Carbon Bank is committed to transparency with grantors, partners and
            stakeholders. Below is a summary of operating financials and grant
            utilisation.
          </p>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-harvest/15 flex items-center justify-center">
                  <DollarSign size={20} className="text-soil" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Financial summary
                </p>
              </div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">
                FY2025 Operating Revenue
              </p>
              <p className="font-display text-4xl font-semibold text-forest mb-1">
                {reports.currency} {reports.fy2025Revenue}
              </p>
              <p className="text-sm text-ink-light mb-6">
                Excludes grant funding, loans, investment proceeds, asset sales
                and interest income.
              </p>
              <div className="border-t border-cream-dark pt-4">
                <p className="text-xs text-muted">
                  Carbon Bank has not received any external grant, financial award,
                  bank loan, institutional investment or philanthropic funding
                  to date.
                </p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                  <BarChart3 size={20} className="text-forest" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Grant utilisation plan
                </p>
              </div>
              <p className="text-xs text-muted uppercase tracking-widest mb-2">
                Applied grant amount
              </p>
              <p className="font-display text-4xl font-semibold text-forest mb-6">
                {reports.grantAmount}
              </p>
              <ul className="space-y-3">
                {reports.grantBreakdown.map((item) => (
                  <li
                    key={item.category}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-sm text-ink-light flex-1">
                      {item.category}
                    </span>
                    <span className="text-sm font-semibold text-forest whitespace-nowrap">
                      {item.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <Eyebrow label="Documents" />
          <h2 className="mt-4 font-display text-4xl font-semibold text-forest mb-12">
            Downloadable resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Theory of Change",
                desc: "One-page overview of Carbon Bank's theory of change and impact model",
                icon: FileText,
              },
              {
                title: "FY2025 Financial Summary",
                desc: "Operating revenue breakdown and financial position",
                icon: BarChart3,
              },
              {
                title: "Grant Utilisation Plan",
                desc: "Detailed breakdown of SGD 250,000 grant allocation",
                icon: DollarSign,
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-2xl p-8 border border-cream-dark hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-6">
                  <doc.icon size={24} className="text-forest" />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-ink-light mb-6 leading-relaxed">
                  {doc.desc}
                </p>
                <button
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark transition-colors"
                  disabled
                  title="Document template — to be finalised"
                >
                  <Download size={16} />
                  Download (PDF)
                </button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="harvest">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-semibold text-forest">
              For grant reviewers
            </h2>
            <p className="mt-4 text-forest/80 leading-relaxed">
              All information provided in this application is accurate to the best
              of Carbon Bank&apos;s knowledge. For additional documentation or
              clarification, please contact{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline underline-offset-2"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
