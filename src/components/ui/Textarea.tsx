type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`
        w-full
        rounded-[var(--radius-sm)]
        border border-[var(--border)]
        bg-[var(--bg-surface)]
        px-3 py-2

        text-[var(--text)]
        placeholder:text-[var(--text-muted)]

        focus:outline-none
        focus:border-[var(--primary)]
        focus:ring-2
        focus:ring-[var(--focus-ring)]

        disabled:opacity-50
        disabled:cursor-not-allowed

        resize-y
        transition

        ${className}
      `}
      {...props}
    />
  );
}
