import { Container } from "../layout/index";
import { Quote } from "lucide-react";

type QuoteProps = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

export function Quotation({ quote, author, role, avatarUrl }: QuoteProps) {
  return (
    <Container size="narrow" className="relative">

      {/* Top-left quote icon */}
      <Quote size="60" className="absolute -top-4 -left-4 text-4xl opacity-40 select-none pointer-events-none 
                   text-border theme-inverse:text-white/40"
      />

      {/* Card */}
      <div className="relative bg-surface border border-border rounded-[var(--radius-lg)] px-8 py-10 shadow-sm overflow-hidden">
        
        {/* Quote text */}
        <p className="text-lg md:text-xl leading-relaxed text-text theme-inverse:text-white/80">
          {quote}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center justify-start gap-3">

          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}

          <div className="text-sm text-muted theme-inverse:text-white/60">
            <div className="font-medium text-text theme-inverse:text-white">
              {author}
            </div>
            {role && <div>{role}</div>}
          </div>

        </div>
      </div>
    </Container>
  );
}