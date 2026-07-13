import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { FileText, Handshake } from "lucide-react";

export default function CTAStrip() {
  return (
    <Section background="cream">
      <Container>
        <div className="bg-forest rounded-3xl p-12 md:p-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream">
              Partner with PLTR
            </h2>
            <p className="mt-4 text-cream/70 leading-relaxed">
              Whether you are a commercial buyer, grant funder, land partner or
              project collaborator — we would like to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/partners"
                variant="secondary"
                size="lg"
                className="bg-cream text-forest hover:bg-cream-dark"
              >
                <Handshake size={18} />
                Explore partnerships
              </Button>
              <Button
                href="/reports"
                variant="outline"
                size="lg"
                className="border-cream/30 text-cream hover:bg-cream/10"
              >
                <FileText size={18} />
                Download impact brief
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted">
            Questions? Contact us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-forest hover:text-forest-dark transition-colors"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
