import { ReactNode } from "react";

interface StatProps {
  value: string | number;
  label: string;
  unit?: string;
  icon?: ReactNode;
  className?: string;
}

export default function Stat({
  value,
  label,
  unit,
  icon,
  className = "",
}: StatProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-1.5">
        {icon && <span className="text-harvest">{icon}</span>}
        <span className="font-display text-4xl md:text-5xl font-semibold text-forest">
          {value}
        </span>
        {unit && (
          <span className="text-harvest text-xl font-semibold">{unit}</span>
        )}
      </div>
      <p className="text-sm text-ink-light mt-1 leading-snug max-w-xs">
        {label}
      </p>
    </div>
  );
}
