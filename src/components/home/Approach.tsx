import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Leaf, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Leaf,
    label: "Land Restoration",
    headline: "Soil health first",
    description:
      "We rehabilitate degraded land by improving soil conditions and establishing regenerative vegetation systems — the foundation of long-term productivity.",
    href: "/programs#land-restoration",
    color: "forest",
  },
  {
    icon: Users,
    label: "Women's Activation",
    headline: "Paid work at scale",
    description:
      "Rural women are integrated as paid operators, workers and suppliers — building practical skills, recurring income and access to formal agricultural supply chains.",
    href: "/programs#womens-livelihood",
    color: "harvest",
  },
  {
    icon: TrendingUp,
    label: "Commercial Biomass",
    headline: "Revenue sustains restoration",
    description:
      "Forage, biomass and seedling sales create recurring economic incentive to maintain restored land — long after project funding ends.",
    href: "/programs#biomass-nursery",
    color: "soil",
  },
];

export default function Approach() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <Eyebrow label="How Carbon Bank works" className="justify-center" />
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-forest">
            Three pillars. One integrated model.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <a
              key={pillar.label}
              href={pillar.href}
              className="group bg-white rounded-2xl p-8 border border-cream-dark hover:shadow-lg hover:border-forest/20 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  pillar.color === "forest"
                    ? "bg-forest/10 text-forest"
                    : pillar.color === "harvest"
                      ? "bg-harvest/15 text-soil"
                      : "bg-soil/10 text-soil"
                }`}
              >
                <pillar.icon size={24} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                {pillar.label}
              </p>
              <h3 className="font-display text-xl font-semibold text-forest mb-3">
                {pillar.headline}
              </h3>
              <p className="text-sm text-ink-light leading-relaxed">
                {pillar.description}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
