import { Container } from "../layout/index";
import { Quote as QuoteIcon } from "lucide-react";
import { useTheme } from "../../lib/themeContext";

type QuoteProps = {
  quote?: string;
  author?: string;
  role?: string;
  avatarUrl?: string;
  themeInverse?: boolean;
};

export function Quotation({ quote, author, role, avatarUrl, themeInverse: propInverse }: QuoteProps) {
    const { themeInverse: contextInverse } = useTheme();
    const themeInverse = propInverse ?? contextInverse;
  return (
    <Container size="narrow" className={`relative ${
        themeInverse ? "theme-inverse" : ""
      }`}>

      {/* Card */}
      {/* <div className="relative bg-surface border border-border rounded-[var(--radius-lg)] px-8 py-10 shadow-sm overflow-hidden theme-inverse:bg-gradient-to-br theme-inverse:from-primary/80 theme-inverse:via-[#e64500] theme-inverse:to-[#cc3d00]"> */}
      <div className="
        relative 
        bg-surface 
        border border-border 
        rounded-[var(--radius-lg)] 
        px-8 py-10 
        shadow-sm 
        overflow-hidden

        theme-inverse:bg-white/10
        theme-inverse:border-white/30
        backdrop-blur-md
      ">
        {/* Quote icon inside padding */}
        <QuoteIcon
          size={48}
          className="
            absolute bottom-6 right-6 
            text-border opacity-30 
            pointer-events-none 
            theme-inverse:text-white/70
          "
        />
        {/* Quote text */}
        <p className="text-lg md:text-xl leading-relaxed text-text theme-inverse:text-white ml-14">
          {quote}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3 ml-14">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}

          <div className="text-sm text-muted theme-inverse:text-white/70">
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