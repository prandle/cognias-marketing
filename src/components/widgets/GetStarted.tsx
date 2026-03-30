import { Button } from "../ui/index";

type CTAProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  themeInverse?: boolean;
};

const DEFAULTS = {
  title: "Start building with Cognias",
  subtitle: "Create AI assistants that do more.",
  ctaText: "Get Started",
  ctaUrl: "https://app.cognias.io",
} as const;

export function GetStarted(props: CTAProps) {
  const title = props.title ?? DEFAULTS.title;
  const subtitle = props.subtitle ?? DEFAULTS.subtitle;
  const ctaText = props.ctaText ?? DEFAULTS.ctaText;
  const ctaUrl = props.ctaUrl ?? DEFAULTS.ctaUrl;
  const themeInverse = props.themeInverse ?? false;

  return (
    <div
      className={`text-center space-y-6 ${
        themeInverse ? "theme-inverse" : ""
      }`}
    >
      <h2
        className={`text-2xl font-semibold ${
          themeInverse ? "text-white/80" : "text-text"
        }`}
      >
        {title}
      </h2>

      <p className={`${themeInverse ? "text-white/60" : "text-muted"}`}>
        {subtitle}
      </p>

      <a href={ctaUrl}>
        <Button
          variant={themeInverse ? "ghost" : "primary"}
          className="px-6 py-3"
        >
          {ctaText}
        </Button>
      </a>
    </div>
  );
}