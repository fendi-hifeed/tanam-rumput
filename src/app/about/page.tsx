import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { about, site } from "@/content/site";
import { team, companySize } from "@/content/team";
import { Target, MapPin, Building2, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-cream">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <Eyebrow label="About PLTR" />
              <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
                {about.headline}
              </h1>
            </div>
            <div className="relative aspect-square w-full max-w-xs md:ml-auto rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/logo-bg.jpg"
                alt="PLTR logo — PT Lampung Tanam Rumput, Regenerative Agriculture"
                fill
                sizes="(min-width: 768px) 33vw, 80vw"
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Section background="white" className="!py-0">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 py-20">
            <div className="space-y-6">
              {about.story.map((para, i) => (
                <p key={i} className="text-ink-light leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-cream rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  Quick facts
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Target, label: "Founded", value: site.founded },
                    { icon: MapPin, label: "Operations", value: site.place },
                    { icon: Building2, label: "Legal entity", value: site.legalEntity },
                    { icon: Users, label: "Team size", value: `${companySize.fullTime} full-time + ${companySize.dailyWorkers} daily workers` },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <item.icon size={16} className="text-forest mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted">{item.label}</p>
                        <p className="text-sm font-medium text-ink">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                  Target customers
                </p>
                <ul className="space-y-2">
                  {about.targetCustomers.map((c) => (
                    <li key={c} className="text-sm text-ink-light">
                      &mdash; {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-3">
                  Sales channels
                </p>
                <ul className="space-y-2">
                  {about.salesChannels.map((c) => (
                    <li key={c} className="text-sm text-ink-light">
                      &mdash; {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="cream">
        <Container>
          <Eyebrow label="The team" />
          <h2 className="mt-4 font-display text-4xl font-semibold text-forest mb-12">
            Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 border border-cream-dark"
              >
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-6">
                  <span className="font-display text-xl font-semibold text-forest">
                    {member.initials}
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-harvest mb-1">
                  {member.role}
                </p>
                <h3 className="font-display text-xl font-semibold text-forest mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-cream-dark flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-harvest/10 flex items-center justify-center flex-shrink-0">
              <Users size={18} className="text-soil" />
            </div>
            <div>
              <p className="text-sm font-medium text-ink">
                {companySize.fullTime} full-time employees + {companySize.dailyWorkers} active daily workers
              </p>
              <p className="text-xs text-muted mt-0.5">
                Advisors: {companySize.advisors}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
