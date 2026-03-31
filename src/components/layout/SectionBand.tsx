import type { ReactNode } from "react";
import { Container } from "./index";
import { ThemeContext } from "../../lib/themeContext";

type SectionBandProps = {
  children: ReactNode;
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
  const isInverse = false;

  const variants = {
    default: "bg-background",

    muted: `
      relative
      bg-surface/30
    `,

    accent: `
      relative overflow-hidden
      bg-gradient-to-br 
      from-[var(--primary)]/30 
      via-[var(--primary)]/15 
      to-transparent
    `,
  };

  const sizes = {
    sm: "py-10",
    md: "py-14",
    lg: "py-20",
  };

  return (
    <ThemeContext.Provider value={{ themeInverse: isInverse }}>
      
      <section className={`${variants[variant]} ${className}`}>

        {variant === "muted" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="
              absolute top-0 left-1/2 -translate-x-1/2 
              w-[600px] h-[300px] 
              bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.04),transparent_70%)]
            " />
          </div>
        )}

        {variant === "accent" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="
              absolute top-[-200px] left-1/2 -translate-x-1/2 
              w-[700px] h-[700px] 
              bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.15),transparent_70%)]
            " />
          </div>
        )}

        <Container className={`relative ${sizes[size]}`}>
          {children}
        </Container>

      </section>

    </ThemeContext.Provider>
  );
}