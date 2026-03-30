import { Button } from "../ui/index";

type CTAProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
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

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-semibold text-text">
        {title}
      </h2>

      <p className="text-muted">
        {subtitle}
      </p>

      <a href={ctaUrl}>
        <Button className="px-6 py-3">
          {ctaText}
        </Button>
      </a>
    </div>
  );
}