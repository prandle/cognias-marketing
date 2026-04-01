import { SectionBand, FullWidthBand } from "../components/layout";
import { SEO, Button, HeroAnimation } from "../components/ui";
import { GetStarted } from "../components/widgets";
import { Database, Layers, Workflow } from "lucide-react";

export default function HomePage() {
return (
  <>
    <SEO
      title="Cognias - AI Assistants for Your Business"
      description="Build AI assistants for compliance, auditing, and business workflows with Cognias."
    />

    <div className="relative overflow-hidden">

      {/* HERO */}
      <SectionBand size="lg">
        <div className="text-center space-y-6">

          <h1>
            AI Assistants for Real Business Workflows
          </h1>

          <p className="max-w-2xl mx-auto">
            Build, deploy and manage AI assistants for compliance, auditing,
            knowledge bases and more — all in one platform.
          </p>

          <div className="flex justify-center gap-4">
            <a href="https://app.cognias.io">
              <Button variant="primary" className="px-6 py-3">
                Get Started
              </Button>
            </a>

            <a href="/features">
              <Button variant="secondary" className="px-6 py-3">
                Explore Features
              </Button>
            </a>
          </div>

        </div>
      </SectionBand>

      {/* FEATURES */}
      <SectionBand variant="accent" size="md">
        <div className="grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Multi-tenant AI",
              desc: "Run multiple assistants with isolated knowledge bases and branding.",
              icon: <Layers className="mb-3 text-[var(--primary)]" />,
            },
            {
              title: "Document ingestion",
              desc: "Upload documents and turn them into intelligent, searchable knowledge.",
              icon: <Database className="mb-3 text-[var(--primary)]" />,
            },
            {
              title: "Custom workflows",
              desc: "Adapt AI to auditing, compliance, or completely custom use cases.",
              icon: <Workflow className="mb-3 text-[var(--primary)]" />,
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="
                bg-surface border border-border 
                rounded-[var(--radius-lg)] 
                p-6 shadow-sm 
                hover:shadow-md hover:-translate-y-1 
                transition
              "
            >
              {feature.icon}

              <h4>{feature.title}</h4>
              <p className="text-sm opacity-80">{feature.desc}</p>
            </div>
          ))}

        </div>
      </SectionBand>

      {/* VISUAL / ANIMATION */}
      <SectionBand size="md">
        <div className="max-w-4xl mx-auto">
          <HeroAnimation />
        </div>
      </SectionBand>

      {/* VALUE */}
      <SectionBand size="md">
        <div className="
          bg-surface border border-border 
          rounded-[var(--radius-lg)] 
          p-8 shadow-sm
        ">
          <div className="space-y-4 max-w-2xl">

            <h2>
              Built for real-world use
            </h2>

            <p className="opacity-80">
              Whether you're managing compliance frameworks, building internal tools,
              or launching AI-powered products — Cognias gives you the foundation
              to move fast without complexity.
            </p>

          </div>
        </div>
      </SectionBand>

      {/* CTA */}
      <FullWidthBand variant="primary">
        <GetStarted />
        {/* <div className="text-center space-y-4 max-w-2xl mx-auto">

          <h2>
            Start building your AI assistant today
          </h2>

          <a href="https://app.cognias.io">
            <Button className="px-6 py-3">
              Get Started
            </Button>
          </a>

        </div> */}
      </FullWidthBand>

    </div>
  </>
);
}
