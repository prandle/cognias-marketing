import { Button } from "../ui/index";
import { useTheme } from "../../lib/themeContext";

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
  const { themeInverse: contextInverse } = useTheme();
  const themeInverse = props.themeInverse ?? contextInverse;

  return (
    <div
      className={`text-center space-y-6 ${
        themeInverse ? "theme-inverse" : ""
      }`}
    >
      <h1
        className={`${
          themeInverse ? "text-white/80" : "text-text"
        }`}
      >
        {title}
      </h1>

      <h4 className={`${themeInverse ? "text-white/60" : "text-muted"}`}>
        {subtitle}
      </h4>

      <a href={ctaUrl}>
        <Button
          variant="primary"
          className={themeInverse ? "bg-white text-[#FF4D00] hover:bg-white/90" : ""}
        >
          {ctaText}
        </Button>
      </a>
    </div>
  );
}