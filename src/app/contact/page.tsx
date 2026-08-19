"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { Mail, MapPin, Send } from "lucide-react";

const inquiryTypes = [
  "General inquiry",
  "B2B supply partnership",
  "Funding / grant partnership",
  "Land or project partnership",
  "Work with Carbon Bank",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: inquiryTypes[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.type}] ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Section background="cream">
        <Container>
          <Eyebrow label="Contact" />
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Get in touch
          </h1>
          <p className="mt-6 text-ink-light text-lg max-w-2xl leading-relaxed">
            We welcome conversations with commercial buyers, grant funders, land
            partners, project collaborators and anyone interested in Carbon Bank&apos;s
            work.
          </p>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: site.email,
                    href: `mailto:${site.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Operations",
                    value: site.place,
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-ink hover:text-forest transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-ink">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-cream rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                  Inquiry types
                </p>
                <ul className="space-y-2">
                  {inquiryTypes.map((t) => (
                    <li
                      key={t}
                      className="text-sm text-ink-light flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-harvest flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cream rounded-2xl p-8 md:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-6">
                    <Send size={28} className="text-forest" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-forest mb-3">
                    Opening your email client
                  </h3>
                  <p className="text-ink-light text-sm leading-relaxed max-w-xs">
                    Your message is pre-filled in your email app. Simply review
                    and send, or copy the content to write to us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-ink placeholder:text-muted focus:outline-none focus:border-forest transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-ink placeholder:text-muted focus:outline-none focus:border-forest transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Inquiry type
                    </label>
                    <select
                      id="type"
                      value={form.type}
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-ink focus:outline-none focus:border-forest transition-colors"
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-ink placeholder:text-muted focus:outline-none focus:border-forest transition-colors resize-none"
                      placeholder="Tell us about your interest in Carbon Bank..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send message
                    <Send size={16} />
                  </Button>

                  <p className="text-xs text-muted text-center">
                    Your email client will open with the message pre-filled.
                    No data is stored on our servers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
