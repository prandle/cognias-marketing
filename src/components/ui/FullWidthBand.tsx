type FullWidthBandProps = {
  children: React.ReactNode;
  variant?: "primary" | "subtle";
};

export function FullWidthBand({ children, variant = "primary" }: FullWidthBandProps) {
  const variants = {
    primary: "bg-gradient-to-br from-[#e64500] via-[#e64500] to-[#cc3d00] text-white/80",
    subtle: "bg-surface border-y border-border",
  };

  return (
    <section className={`relative w-full ${variants[variant]}`}>
      
      {/* Optional glow / texture */}
      {/* {variant === "primary" && (
        <div className="absolute inset-0 pointer-events-none">      
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"/>
        </div>
        
      )} */}

      {/* INNER CONTAINER (this is key) */}
      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {children}
      </div>
    </section>
  );
}