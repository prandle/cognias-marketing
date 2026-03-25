type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
};

export function Button({
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition-colors";

const variants = {
  primary:
    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

  secondary:
    "bg-[var(--secondary)] text-[var(--primary)] hover:bg-[var(--secondary-hover)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

  outline:
    "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--secondary)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

  ghost:
    "text-[var(--text)] hover:bg-[var(--secondary)] focus:ring-[var(--focus-ring)] disabled:opacity-50",

  destructive:
  "text-[var(--danger)] hover:bg-[var(--danger-bg)] focus:ring-[var(--danger)]",
};

  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}