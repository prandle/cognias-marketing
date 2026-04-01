import { SEO } from "../components/ui";
import { GetStarted } from "../components/widgets";
import {
  Database,
  Layers,
  Workflow,
  ShieldCheck,
  Bot,
  Settings,
  Search,
  Plug
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <>
      <SEO
        title="Features - Cognias"
        description="Explore the features of Cognias — build, deploy and scale AI assistants for real business workflows."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 space-y-20">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text">
            Everything you need to build AI assistants
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            From document ingestion to multi-tenant deployments — Cognias
            gives you the tools to create powerful, production-ready AI systems.
          </p>
        </section>

        {/* ========================================= */}
        {/* CORE FEATURES */}
        {/* ========================================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-text text-center">
            Core platform capabilities
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Multi-tenant AI",
                desc: "Run multiple assistants with isolated data, configurations, and branding for each tenant.",
                icon: <Layers className="mb-3 text-primary" />,
              },
              {
                title: "Document ingestion",
                desc: "Upload PDFs, docs, and structured data to create powerful knowledge-driven assistants.",
                icon: <Database className="mb-3 text-primary" />,
              },
              {
                title: "Custom workflows",
                desc: "Design assistants that follow real business processes like auditing, reporting, and compliance.",
                icon: <Workflow className="mb-3 text-primary" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                {feature.icon}
                <h4 className="text-lg font-semibold text-text mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* ADVANCED FEATURES */}
        {/* ========================================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-text text-center">
            Advanced capabilities
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "AI reasoning",
                desc: "Leverage powerful models to answer complex, context-aware queries.",
                icon: <Bot className="mb-3 text-primary" />,
              },
              {
                title: "Search & retrieval",
                desc: "Fast, accurate retrieval across your entire knowledge base.",
                icon: <Search className="mb-3 text-primary" />,
              },
              {
                title: "Security & isolation",
                desc: "Keep data separated and secure across tenants and environments.",
                icon: <ShieldCheck className="mb-3 text-primary" />,
              },
              {
                title: "Configurable assistants",
                desc: "Fine-tune behaviour, tone, and outputs to match your use case.",
                icon: <Settings className="mb-3 text-primary" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                {feature.icon}
                <h4 className="text-md font-semibold text-text mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* INTEGRATIONS / EXTENSIBILITY */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Built to integrate and extend
          </h2>

          <p className="text-muted max-w-2xl">
            Cognias is designed to fit into your existing stack. Connect your
            data sources, APIs, and tools to create assistants that work exactly
            how your business operates.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "API-first design",
                desc: "Easily connect external systems and automate workflows.",
                icon: <Plug className="mb-3 text-primary" />,
              },
              {
                title: "Custom data sources",
                desc: "Bring your own databases, documents, and structured data.",
                icon: <Database className="mb-3 text-primary" />,
              },
              {
                title: "Scalable architecture",
                desc: "Grow from a single assistant to a full AI platform.",
                icon: <Layers className="mb-3 text-primary" />,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-background border border-border rounded-[var(--radius-lg)] p-6"
              >
                {feature.icon}
                <h4 className="text-md font-semibold text-text mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* USE CASE STRIP */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Designed for real use cases
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            Whether you're building compliance tools, internal copilots, or
            customer-facing AI products — Cognias adapts to your domain.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted">
            {[
              "Compliance & auditing",
              "Internal knowledge assistants",
              "Customer support AI",
              "Operations automation",
              "Vertical SaaS AI products",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 border border-border rounded-full bg-surface"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}
        <section>
          <GetStarted />
        </section>

      </div>
    </>
  );
}