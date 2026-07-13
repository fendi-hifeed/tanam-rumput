import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import Approach from "@/components/home/Approach";
import Metrics from "@/components/home/Metrics";
import TheoryPreview from "@/components/home/TheoryPreview";
import CTAStrip from "@/components/home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Metrics />
      <TheoryPreview />
      <CTAStrip />
    </>
  );
}
