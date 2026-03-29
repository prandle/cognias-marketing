import { SEO, Button } from "../components/ui/index";
import {
  Layers,
  Workflow,
  ShieldCheck,
  Database,
  Settings,
  Bot
} from "lucide-react";
import { Quote } from "../components/ui/Quote";


export default function AboutPage() {
  return (
    <>
      <SEO
        title="About - Cognias"
        description="Cognias is building AI assistants for real business workflows — structured, scalable, and production-ready."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 space-y-24">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text">
            AI that actually works for your business
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            Cognias helps teams build AI assistants that operate within real
            workflows — not just chat, but structured systems that deliver
            consistent, reliable outcomes.
          </p>
        </section>

        {/* ========================================= */}
        {/* LOGOS STRIP */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <p className="text-sm text-muted">
            Built for teams across industries
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "Compliance teams",
              "SaaS builders",
              "Consultancies",
              "Operations teams",
              "Internal tools",
            ].map((item) => (
              <div
                key={item}
                className="text-sm font-medium text-muted border border-border px-4 py-2 rounded-md bg-surface"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* HOW IT WORKS */}
        {/* ========================================= */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-text text-center">
            How Cognias works
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                step: "01",
                title: "Ingest your data",
                desc: "Upload documents, connect data sources, and structure your knowledge base.",
                icon: <Database className="mb-3 text-primary" />,
              },
              {
                step: "02",
                title: "Define workflows",
                desc: "Configure how your assistant thinks, behaves, and operates within your processes.",
                icon: <Settings className="mb-3 text-primary" />,
              },
              {
                step: "03",
                title: "Deploy assistants",
                desc: "Launch AI assistants that can answer, act, and integrate into real environments.",
                icon: <Bot className="mb-3 text-primary" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="text-xs font-semibold text-muted mb-2">
                  {item.step}
                </div>

                {item.icon}

                <h3 className="text-lg font-semibold text-text mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ========================================= */}
        {/* MISSION */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-text mb-4">
            A more practical approach to AI
          </h2>

          <p className="text-muted max-w-3xl">
            Most AI tools are designed for interaction. Cognias is designed for
            execution.
          </p>

          <p className="text-muted max-w-3xl mt-4">
            We focus on structured knowledge, defined workflows, and systems that
            can be relied on in real environments — from compliance and auditing
            to internal operations and vertical SaaS products.
          </p>
        </section>

        {/* ========================================= */}
        {/* PRINCIPLES */}
        {/* ========================================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-text text-center">
            Built on a few core principles
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structured, not generic",
                desc: "AI should operate within defined systems, not just generate responses.",
                icon: <Layers className="mb-3 text-primary" />,
              },
              {
                title: "Workflow-native",
                desc: "Assistants should follow real processes like auditing and reporting.",
                icon: <Workflow className="mb-3 text-primary" />,
              },
              {
                title: "Secure by design",
                desc: "Data isolation and control are fundamental at every level.",
                icon: <ShieldCheck className="mb-3 text-primary" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* WHO IT'S FOR */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Who it’s for
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted">
            <div>
              <h3 className="text-text font-semibold mb-2">
                Product teams
              </h3>
              <p>
                Building AI-powered SaaS products with multi-tenant architecture
                and domain-specific intelligence.
              </p>
            </div>

            <div>
              <h3 className="text-text font-semibold mb-2">
                Operations & compliance
              </h3>
              <p>
                Automating audits, documentation, and structured processes with
                reliable AI systems.
              </p>
            </div>

            <div>
              <h3 className="text-text font-semibold mb-2">
                Internal tools
              </h3>
              <p>
                Creating assistants that help teams navigate knowledge, systems,
                and workflows efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* FOUNDER NOTE */}
        {/* ========================================= */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            A note from the founder
          </h2>

        <Quote
            quote="We started Cognias after seeing how difficult it was to move from AI demos to real, production-ready systems. The gap wasn’t in the models — it was in the structure around them. Cognias is our answer to that problem: a platform for building AI assistants that are reliable, scalable, and genuinely useful in day-to-day operations."
            author="Paul Randle, CTO"
        />
        </section>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-text">
            Start building with Cognias
          </h2>

          <p className="text-muted">
            Create AI assistants that do more than just respond.
          </p>

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