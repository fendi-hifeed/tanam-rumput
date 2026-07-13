import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer";

  const variantClass =
    variant === "primary"
      ? "bg-forest text-cream hover:bg-forest-dark rounded-full"
      : variant === "secondary"
        ? "bg-soil text-cream hover:bg-soil-light rounded-full"
        : variant === "ghost"
          ? "text-forest hover:text-forest-dark rounded-full"
          : "border border-forest text-forest hover:bg-forest/5 rounded-full";

  const sizeClass =
    size === "sm"
      ? "text-sm px-4 py-2"
      : size === "lg"
        ? "text-base px-8 py-4"
        : "text-sm px-6 py-3";

  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
