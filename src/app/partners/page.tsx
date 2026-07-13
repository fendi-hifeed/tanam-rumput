import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import {
  ShoppingCart,
  Handshake,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

const tracks = [
  {
    icon: ShoppingCart,
    label: "B2B Buyers",
    headline: "Reliable local supply for your operations",
    description:
      "PLTR supplies forage, biomass and planting materials to livestock farms, feed producers, agricultural companies and cooperatives. We offer consistent quality, local logistics and the ability to scale production based on your requirements.",
    outcomes: [
      "Consistent quality-assured raw materials",
      "Reduced logistics complexity with local sourcing",
      "Scalable production aligned to your volume needs",
    ],
    cta: "Discuss supply terms",
    color: "forest",
  },
  {
    icon: Handshake,
    label: "Funders & Grant Partners",
    headline: "A model where restoration pays for itself",
    description:
      "PLTR offers grant funders a replicable, commercially grounded restoration model. Revenue from biomass and nursery operations creates the economic incentive to maintain restored land after project funding ends — impact that outlives the grant.",
    outcomes: [
      "Measurable impact with clear theory of change",
      "Commercial sustainability beyond grant period",
      "Scalable model for additional sites",
    ],
    cta: "Explore funding partnership",
    color: "harvest",
  },
  {
    icon: MapPin,
    label: "Land & Project Partners",
    headline: "Turn underperforming land into productive assets",
    description:
      "PLTR works with landowners, village governments and project partners to convert degraded or underutilised land into productive agricultural infrastructure. Landowners gain a pathway to economic value; project partners gain implementation capacity.",
    outcomes: [
      "Land restored to productive use",
      "Recurring revenue from commercial output",
      "Community employment and local supply chain",
    ],
    cta: "Discuss land partnership",
    color: "soil",
  },
  {
    icon: Users,
    label: "Women & Workers",
    headline: "Paid work, training and a pathway to more",
    description:
      "PLTR recruits low-income rural women for paid roles across nursery operations, land preparation, planting, maintenance, harvesting, processing and local supply. Selected participants progress into recurring workers, team leaders and local suppliers.",
    outcomes: [
      "Paid training and work in agricultural operations",
      "Practical skills in regenerative agriculture",
      "Pathway to team-lead and supplier roles",
    ],
    cta: "Register interest",
    color: "forest",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <Container>
          <Eyebrow label="Partnerships" />
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Partner with PLTR
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            Whether you are a commercial buyer, grant funder, land partner or
            project collaborator — we welcome conversations that explore mutual
            value.
          </p>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="space-y-16">
            {tracks.map((track) => (
              <div
                key={track.label}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      track.color === "forest"
                        ? "bg-forest/10 text-forest"
                        : track.color === "harvest"
                          ? "bg-harvest/15 text-soil"
                          : "bg-soil/10 text-soil"
                    }`}
                  >
                    <track.icon size={24} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-harvest mb-2">
                    {track.label}
                  </p>
                  <h2 className="font-display text-3xl font-semibold text-forest mb-4">
                    {track.headline}
                  </h2>
                  <p className="text-ink-light leading-relaxed">
                    {track.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-cream rounded-2xl p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                      What partners gain
                    </p>
                    <ul className="space-y-3">
                      {track.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-forest mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-ink-light">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={`mailto:${site.email}?subject=Partnership inquiry: ${track.label}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark transition-colors"
                  >
                    {track.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
