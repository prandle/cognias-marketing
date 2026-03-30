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
    accent: `
      relative overflow-hidden
      bg-gradient-to-br 
      from-primary/15 
      via-primary/5 
      to-transparent
      border-y border-primary/20
    `,
  };
/*via-background to-background*/
  return (
    <section className={`${variants[variant]} ${className}`}>
      
      {/* Glow layer ONLY for accent */}
      {variant === "accent" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,77,0,0.25),transparent_70%)]" />
        </div>
      )}

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20">
        {children}
      </div>
    </section>
  );
}