import { SEO, Button } from "../components/ui/index";
import { Layers, Workflow, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About - Cognias"
        description="Learn about Cognias — our mission, approach, and why we’re building AI assistants for real business workflows."
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-12 space-y-20">

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-text">
            Built for real-world AI applications
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            Cognias exists to make AI genuinely useful for businesses — not just
            demos, but systems that integrate, scale, and solve real problems.
          </p>
        </section>

        {/* ========================================= */}
        {/* STORY / MISSION */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Our mission
          </h2>

          <p className="text-muted max-w-3xl">
            We believe AI should be practical, reliable, and deeply integrated
            into business workflows. Too many tools focus on surface-level
            interactions — Cognias is built for structured knowledge,
            repeatable processes, and real operational value.
          </p>

          <p className="text-muted max-w-3xl">
            Our goal is to give teams the ability to create AI assistants that
            don’t just answer questions, but actually help run parts of their
            business.
          </p>
        </section>

        {/* ========================================= */}
        {/* PRINCIPLES */}
        {/* ========================================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-text text-center">
            How we think about AI
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Structured, not generic",
                desc: "AI should work with your data, processes, and constraints — not just generate text.",
                icon: <Layers className="mb-3 text-primary" />,
              },
              {
                title: "Workflow-driven",
                desc: "Assistants should follow real business logic like auditing, compliance, and operations.",
                icon: <Workflow className="mb-3 text-primary" />,
              },
              {
                title: "Secure by design",
                desc: "Data isolation and control are fundamental, especially in multi-tenant environments.",
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
                <p className="text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================= */}
        {/* WHAT MAKES COGNIAS DIFFERENT */}
        {/* ========================================= */}
        <section className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            What makes Cognias different
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted">
            <div className="space-y-3">
              <p>
                • Built for multi-tenant applications from day one
              </p>
              <p>
                • Designed around real business workflows, not generic chat
              </p>
              <p>
                • Flexible enough to support completely different domains
              </p>
            </div>

            <div className="space-y-3">
              <p>
                • Strong focus on data structure and retrieval
              </p>
              <p>
                • API-first and integration-friendly
              </p>
              <p>
                • Scales from internal tools to full SaaS products
              </p>
            </div>
          </div>
        </section>

        {/* ========================================= */}
        {/* VISION */}
        {/* ========================================= */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-text">
            Where we’re going
          </h2>

          <p className="text-muted max-w-2xl mx-auto">
            We’re building a platform where AI assistants become a core layer of
            modern software — embedded into tools, workflows, and products across
            every industry.
          </p>

          <p className="text-muted max-w-2xl mx-auto">
            Cognias is not just about interacting with AI — it’s about building
            systems that think, assist, and operate alongside your business.
          </p>
        </section>

        {/* ========================================= */}
        {/* CTA */}
        {/* ========================================= */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-text">
            Start building with Cognias
          </h2>

          <p className="text-muted">
            Create your first AI assistant in minutes.
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