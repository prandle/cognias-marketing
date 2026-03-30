import { Container } from "../components/layout";
import { SEO, Button, HeroAnimation } from "../components/ui";
import { Database, Layers, Workflow } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Cognias - AI Assistants for Your Business"
        description="Build AI assistants for compliance, auditing, and business workflows with Cognias."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 space-y-16">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text">
            AI Assistants for Real Business Workflows
          </h1>          

          <p className="text-lg text-muted max-w-2xl mx-auto">
            Build, deploy and manage AI assistants for compliance, auditing,
            knowledge bases and more — all in one platform.
          </p>

          <div className="flex justify-center gap-4">
            <a href="https://app.cognias.io">
              <Button className="px-6 py-3">
                Get Started
              </Button>
            </a>

            <a href="/features">
              <Button variant="secondary" className="px-6 py-3">
                Explore Features
              </Button>
            </a>
          </div>
        </section>

        {/* ========================================= */}
        {/* FEATURES */}
        {/* ========================================= */}
        <section className="grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Multi-tenant AI",
              desc: "Run multiple assistants with isolated knowledge bases and branding.",
              icon: <Layers className="mb-3 text-primary" />,
            },
            {
              title: "Document ingestion",
              desc: "Upload documents and turn them into intelligent, searchable knowledge.",
              icon: <Database className="mb-3 text-primary" />,
            },
            {
              title: "Custom workflows",
              desc: "Adapt AI to auditing, compliance, or completely custom use cases.",
              icon: <Workflow className="mb-3 text-primary" />,
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
            >
            {feature.icon}
              <h3 className="text-lg font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted">
                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        <Container>
        <HeroAnimation />
        </Container>

        {/* ========================================= */}
        {/* VALUE SECTION (like your admin cards) */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm">

          <h2 className="text-2xl font-semibold text-text mb-4">
            Built for real-world use
          </h2>

          <p className="text-muted max-w-2xl">
            Whether you're managing compliance frameworks, building internal tools,
            or launching AI-powered products — Cognias gives you the foundation
            to move fast without complexity.
          </p>

        </section>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-text">
            Start building your AI assistant today
          </h2>

          <a href="https://app.cognias.io">
            <Button className="px-6 py-3">
              Get Started
            </Button>
          </a>
        </section>

      </div>
    </>
  );
}