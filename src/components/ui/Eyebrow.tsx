interface EyebrowProps {
  label: string;
  className?: string;
}

export default function Eyebrow({ label, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-widest text-harvest ${className}`}
    >
      {label}
    </p>
  );
}
