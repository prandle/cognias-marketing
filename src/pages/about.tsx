import { SEO, Quotation } from "../components/ui";
import { FullWidthBand, SectionBand } from "../components/layout";
import { GetStarted } from "../components/widgets";
import {
  Layers,
  Workflow,
  ShieldCheck,
  Database,
  Settings,
  Bot
} from "lucide-react";


export default function AboutPage() {
return (
  <>
    <SEO
      title="About - Cognias"
      description="Cognias is building AI assistants for real business workflows — structured, scalable, and production-ready."
    />

    <div className="relative overflow-hidden">

      {/* HERO */}
      <SectionBand size="lg">
        <div className="text-center space-y-5">
          <h1>
            AI that actually works for your business
          </h1>

          <p className="max-w-2xl mx-auto">
            Cognias helps teams build AI assistants that operate within real
            workflows — not just chat, but structured systems that deliver
            consistent, reliable outcomes.
          </p>
        </div>
      </SectionBand>

      {/* LOGOS */}
      <SectionBand size="sm">
        <div className="text-center space-y-4">
          <p className="text-sm opacity-70">
            Built for teams across industries
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Compliance teams",
              "SaaS builders",
              "Consultancies",
              "Operations teams",
              "Internal tools",
            ].map((item) => (
              <div
                key={item}
                className="
                  text-sm font-medium 
                  border border-border 
                  px-3 py-1.5 
                  rounded-md 
                  bg-surface/60
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* HOW IT WORKS */}
      <SectionBand variant="accent" size="md">
        <div className="space-y-10">
          <h2 className="text-center">
            How Cognias works
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Ingest your data",
                desc: "Upload documents and structure your knowledge base.",
                icon: <Database className="mb-3 text-[var(--primary)]" />,
              },
              {
                step: "02",
                title: "Define workflows",
                desc: "Configure how your assistant behaves.",
                icon: <Settings className="mb-3 text-[var(--primary)]" />,
              },
              {
                step: "03",
                title: "Deploy assistants",
                desc: "Launch assistants into real environments.",
                icon: <Bot className="mb-3 text-[var(--primary)]" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-5 shadow-sm"
              >
                <div className="text-xs font-semibold text-[var(--primary)] mb-2">
                  {item.step}
                </div>

                {item.icon}

                <h3>{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="max-w-2xl mx-auto text-center pt-4 opacity-80">
            Most AI tools are designed for interaction. Cognias is designed for execution —
            structured systems, defined workflows, and outcomes you can rely on.
          </p>
        </div>
      </SectionBand>

      {/* PRINCIPLES */}
      <SectionBand size="md">
        <div className="space-y-8">
          <h2 className="text-center">
            Built on a few core principles
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Structured, not generic",
                desc: "AI should operate within defined systems.",
                icon: <Layers className="mb-3 text-[var(--primary)]" />,
              },
              {
                title: "Workflow-native",
                desc: "Assistants should follow real processes.",
                icon: <Workflow className="mb-3 text-[var(--primary)]" />,
              },
              {
                title: "Secure by design",
                desc: "Data isolation and control are fundamental.",
                icon: <ShieldCheck className="mb-3 text-[var(--primary)]" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-5"
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBand>

      {/* FOUNDER + QUOTE */}
      <FullWidthBand variant="primary">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2>A note from the founder</h2>
        </div>

        <Quotation
          quote="We started Cognias after seeing how difficult it was to move from AI demos to real systems."
          author="Pablo Randelo, CEO"
        />
      </FullWidthBand>

      {/* CTA */}
      <SectionBand size="sm">
        <GetStarted />
      </SectionBand>

    </div>
  </>
);
}
  // return (
  //   <>
  //     <SEO
  //       title="About - Cognias"
  //       description="Cognias is building AI assistants for real business workflows — structured, scalable, and production-ready."
  //     />

  //     <div className="relative overflow-hidden">

  //       {/* GLOBAL BACKGROUND GLOW */}
  //       {/* <div className="absolute inset-0 -z-10">
  //         <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,77,0,0.08),transparent_70%)]" />
  //       </div> */}

  //       {/* HERO */}
  //       <SectionBand size="lg">
  //         <div className="text-center space-y-5">
  //           <h1 className="text-4xl md:text-5xl font-semibold text-text leading-tight">
  //             AI that actually works for your business
  //           </h1>
  //           <p className="text-lg text-muted max-w-2xl mx-auto">
  //             Cognias helps teams build AI assistants that operate within real
  //             workflows — not just chat, but structured systems that deliver
  //             consistent, reliable outcomes.
  //           </p>
  //         </div>
  //       </SectionBand>

  //       {/* LOGOS */}
  //       <SectionBand size="sm">
  //         <div className="text-center space-y-4">
  //           <p className="text-sm text-muted">
  //             Built for teams across industries
  //           </p>

  //           <div className="flex flex-wrap justify-center gap-4">
  //             {[
  //               "Compliance teams",
  //               "SaaS builders",
  //               "Consultancies",
  //               "Operations teams",
  //               "Internal tools",
  //             ].map((item) => (
  //               <div
  //                 key={item}
  //                 className="text-sm font-medium text-muted border border-border px-3 py-1.5 rounded-md bg-surface/60"
  //               >
  //                 {item}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </SectionBand>

  //       {/* HOW IT WORKS (muted band) */}
  //       <SectionBand variant="accent" size="md">
  //         <div className="space-y-10">
  //           <h2 className="text-2xl font-semibold text-text text-center">
  //             How Cognias works
  //           </h2>

  //           <div className="grid gap-5 md:grid-cols-3">
  //             {[
  //               {
  //                 step: "01",
  //                 title: "Ingest your data",
  //                 desc: "Upload documents and structure your knowledge base.",
  //                 icon: <Database className="mb-3 text-primary" />,
  //               },
  //               {
  //                 step: "02",
  //                 title: "Define workflows",
  //                 desc: "Configure how your assistant behaves.",
  //                 icon: <Settings className="mb-3 text-primary" />,
  //               },
  //               {
  //                 step: "03",
  //                 title: "Deploy assistants",
  //                 desc: "Launch assistants into real environments.",
  //                 icon: <Bot className="mb-3 text-primary" />,
  //               },
  //             ].map((item) => (
  //               <div
  //                 key={item.step}
  //                 className="bg-surface border border-border rounded-[var(--radius-lg)] p-5 shadow-sm"
  //               >
  //                 <div className="text-xs font-semibold text-primary mb-2">
  //                   {item.step}
  //                 </div>
  //                 {item.icon}
  //                 <h3 className="text-base font-semibold text-text mb-1">
  //                   {item.title}
  //                 </h3>
  //                 <p className="text-sm text-muted">{item.desc}</p>
  //               </div>
  //             ))}
  //           </div>

  //           <p className="text-muted max-w-2xl mx-auto text-center pt-4">
  //             Most AI tools are designed for interaction. Cognias is designed for execution —
  //             structured systems, defined workflows, and outcomes you can rely on.
  //           </p>
  //         </div>
  //       </SectionBand>

  //       {/* PRINCIPLES */}
  //       <SectionBand size="md">
  //         <div className="space-y-8">
  //           <h2 className="text-2xl font-semibold text-text text-center">
  //             Built on a few core principles
  //           </h2>

  //           <div className="grid gap-5 md:grid-cols-3">
  //             {[
  //               {
  //                 title: "Structured, not generic",
  //                 desc: "AI should operate within defined systems.",
  //                 icon: <Layers className="mb-3 text-primary" />,
  //               },
  //               {
  //                 title: "Workflow-native",
  //                 desc: "Assistants should follow real processes.",
  //                 icon: <Workflow className="mb-3 text-primary" />,
  //               },
  //               {
  //                 title: "Secure by design",
  //                 desc: "Data isolation and control are fundamental.",
  //                 icon: <ShieldCheck className="mb-3 text-primary" />,
  //               },
  //             ].map((item) => (
  //               <div
  //                 key={item.title}
  //                 className="bg-surface border border-border rounded-[var(--radius-lg)] p-5"
  //               >
  //                 {item.icon}
  //                 <h3 className="text-base font-semibold text-text mb-1">
  //                   {item.title}
  //                 </h3>
  //                 <p className="text-sm text-muted">{item.desc}</p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </SectionBand>

  //       {/* WHO + FOUNDER (muted band) */}
  //       {/* <SectionBand variant="muted" size="sm">
  //         <div className="space-y-10 text-center">
  //           <div>
  //             <h2 className="text-2xl font-semibold text-text mb-8">
  //               Who it’s for
  //             </h2>

  //             <div className="grid md:grid-cols-3 gap-8 text-sm text-muted max-w-4xl mx-auto">
  //               <div>
  //                 <h3 className="text-text font-semibold mb-2">Product teams</h3>
  //                 <p>Building AI-powered SaaS products.</p>
  //               </div>
  //               <div>
  //                 <h3 className="text-text font-semibold mb-2">Operations</h3>
  //                 <p>Automating structured processes.</p>
  //               </div>
  //               <div>
  //                 <h3 className="text-text font-semibold mb-2">Internal tools</h3>
  //                 <p>Helping teams navigate workflows.</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </SectionBand> */}

  //       {/* CTA */}
  //       <FullWidthBand variant="primary">
  //           <div className="max-w-2xl mx-auto space-y-4">
  //             <h2 className="text-2xl font-semibold text-text">
  //               A note from the founder
  //             </h2>
  //           </div>
  //           <Quotation
  //               quote="We started Cognias after seeing how difficult it was to move from AI demos to real systems."
  //               author="Pablo Randelo, CEO"
  //           />          
  //       </FullWidthBand>

  //       <SectionBand size="sm">
  //         <GetStarted />
  //       </SectionBand>
  //     </div>
  //   </>
  // );
