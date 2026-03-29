import { Button } from "../ui/index";

type CTAProps = {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaUrl?: string;
    // ctaButton?: string;
    // optional: openInNewTab?: boolean;
};

const DEFAULTS = {
  title: "Start building with Cognias",
  subtitle: "Create AI assistants that do more than just respond.",
  ctaText: "Get Started",
  ctaUrl: "https://app.cognias.io",
} as const;


export function GetStarted(props: CTAProps) {
// export function GetStarted({ title, subtitle, ctaText, ctaUrl }: CTAProps) {

  const title = props.title ?? DEFAULTS.title;
  const subtitle = props.subtitle ?? DEFAULTS.subtitle;
  const ctaText = props.ctaText ?? DEFAULTS.ctaText;
  const ctaUrl = props.ctaUrl ?? DEFAULTS.ctaUrl;

    return (
        <section className="text-center space-y-6 pt-10">
            <h2 className="text-2xl font-semibold text-text">
                {title}
            </h2>

            <p className="text-muted">
                {subtitle}
            </p>

            <a href={ctaUrl}>
                <Button className="px-6 py-3 bg-[#FF4D00] hover:bg-[#e64500] text-white">
                    {ctaText}
                </Button>
            </a>
        </section>

    );
}          