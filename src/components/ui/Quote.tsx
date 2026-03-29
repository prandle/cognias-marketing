type QuoteProps = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

export function Quote({ quote, author, role, avatarUrl }: QuoteProps) {
  return (
    <div className="relative max-w-3xl mx-auto text-center">

      {/* Subtle quote mark */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-border opacity-40 select-none">
        “
      </div>

      {/* Card */}
      <div className="bg-surface border border-border rounded-[var(--radius-lg)] px-8 py-10 shadow-sm">

        {/* Quote text */}
        <p className="text-lg md:text-xl text-text leading-relaxed">
          {quote}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center justify-center gap-3">

          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}

          <div className="text-sm text-muted text-left">
            <div className="font-medium text-text">{author}</div>
            {role && <div>{role}</div>}
          </div>

        </div>
      </div>
    </div>
  );
}