type FullWidthBandProps = {
  children: React.ReactNode;
  variant?: "primary" | "subtle";
};

export function FullWidthBand({ children, variant = "primary" }: FullWidthBandProps) {
  const variants = {
    primary: "bg-primary text-white",
    subtle: "bg-surface border-y border-border",
  };

  return (
    <section className={`relative w-full ${variants[variant]}`}>
      
      {/* Optional glow / texture */}
      {variant === "primary" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_70%)]" />
        </div>
      )}

      {/* INNER CONTAINER (this is key) */}
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {children}
      </div>
    </section>
  );
}