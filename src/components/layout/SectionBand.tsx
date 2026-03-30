type SectionBandProps = {
  children: React.ReactNode;
  variant?: "default" | "muted" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function SectionBand({
  children,
  variant = "default",
  size = "md",
  className = "",
}: SectionBandProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-surface/40 border-y border-border/60",
    accent: `
      relative overflow-hidden
      bg-gradient-to-br 
      from-primary/10 
      via-primary/5 
      to-transparent
      border-y border-primary/20
    `,
  };

  const sizes = {
    sm: "py-10",
    md: "py-14",
    lg: "py-20",
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      
      {/* Glow layer ONLY for accent */}
      {variant === "accent" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,77,0,0.15),transparent_70%)]" />
        </div>
      )}

      <div className={`relative mx-auto w-full max-w-6xl px-4 ${sizes[size]}`}>
        {children}
      </div>
    </section>
  );
}