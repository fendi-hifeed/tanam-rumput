import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "forest" | "soil" | "harvest";
}

export default function Section({
  children,
  className = "",
  id,
  background = "cream",
}: SectionProps) {
  const bgClass =
    background === "cream"
      ? "bg-cream"
      : background === "white"
        ? "bg-white"
        : background === "forest"
          ? "bg-forest text-cream"
          : background === "soil"
            ? "bg-soil text-cream"
            : background === "harvest"
              ? "bg-harvest/10"
              : "bg-cream";

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
