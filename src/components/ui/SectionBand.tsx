type SectionBandProps = {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
  className?: string;
};

export function SectionBand({
  children,
  variant = "default",
  className = "",
}: SectionBandProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-surface border-y border-border",
    accent:
      "relative bg-gradient-to-br from-primary/10 via-background to-background border-y border-primary/20",
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        {children}
      </div>
    </section>
  );
}