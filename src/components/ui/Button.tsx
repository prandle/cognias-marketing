import { useTheme } from "../../lib/themeContext";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
};

export function Button({
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const { themeInverse } = useTheme(); 
  
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors";

  const variants = {
    primary: themeInverse
      ? "bg-white text-[#FF4D00] hover:bg-white/90 focus:ring-white/30 disabled:opacity-50"
      : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

    secondary: themeInverse
      ? "bg-slate-700 text-white hover:bg-slate-600 focus:ring-white/30 disabled:opacity-50"
      : "bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--secondary-hover)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

    outline: themeInverse
      ? "border border-white/40 text-white hover:bg-white/10 focus:ring-white/30 disabled:opacity-50"
      : "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--secondary)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

    ghost: themeInverse
      ? "text-white hover:bg-white/10 focus:ring-white/30 disabled:opacity-50"
      : "text-[var(--primary)] hover:bg-[var(--secondary)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

    destructive: themeInverse
      ? "bg-white text-[var(--danger)] border border-[var(--danger)] hover:bg-[var(--danger)] hover:text-white focus:ring-[var(--danger)]"
      : "text-[var(--danger)] hover:bg-[var(--danger-bg)] focus:ring-[var(--danger)]",
  };

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}