import { SEO } from "../components/ui/index";
import { FullWidthBand, Container } from "../components/layout/index";
import { GetStarted } from "../components/widgets/index";
import {
  Layers,
  Workflow,
  ShieldCheck,
  Database,
  Settings,
  Bot
} from "lucide-react";
import { Quotation } from "../components/ui/Quote";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About - Cognias"
        description="Cognias is building AI assistants for real business workflows — structured, scalable, and production-ready."
      />

      <div className="relative overflow-hidden">

        {/* ========================================= */}
        {/* GLOBAL BACKGROUND GLOW */}
        {/* ========================================= */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,77,0,0.08),transparent_70%)]" />
        </div>

        {/* ========================================= */}
        {/* HERO */}
        {/* ========================================= */}
        <Container className="pt-20 pb-10 text-center space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold text-text leading-tight">
            AI that actually works for your business
          </h1>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            Cognias helps teams build AI assistants that operate within real
            workflows — not just chat, but structured systems that deliver
            consistent, reliable outcomes.
          </p>
        </Container>

        {/* ========================================= */}
        {/* LOGOS / AUDIENCE STRIP */}
        {/* ========================================= */}
        <Container className="pb-12 text-center space-y-4">
          <p className="text-sm text-muted">
            Built for teams across industries
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              "Compliance teams",
              "SaaS builders",
              "Consultancies",
              "Operations teams",
              "Internal tools",
            ].map((item) => (
              <div
                key={item}
                className="text-sm font-medium text-muted border border-border px-3 py-1.5 rounded-md bg-surface/60 hover:border-[#FF4D00]/30 hover:text-text transition"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>

        {/* ========================================= */}
        {/* HOW IT WORKS */}
        {/* ========================================= */}
        <Container className="py-16 space-y-10">
          <h2 className="text-2xl font-semibold text-text text-center">
            How Cognias works
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Ingest your data",
                desc: "Upload documents, connect data sources, and structure your knowledge base.",
                icon: <Database className="mb-3 text-[#FF4D00]" />,
              },
              {
                step: "02",
                title: "Define workflows",
                desc: "Configure how your assistant thinks, behaves, and operates within your processes.",
                icon: <Settings className="mb-3 text-[#FF4D00]" />,
              },
              {
                step: "03",
                title: "Deploy assistants",
                desc: "Launch AI assistants that can answer, act, and integrate into real environments.",
                icon: <Bot className="mb-3 text-[#FF4D00]" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative bg-surface border border-border rounded-[var(--radius-lg)] p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(255,77,0,0.08),transparent_70%)]" />

                <div className="text-xs font-semibold text-[#FF4D00] mb-2">
                  {item.step}
                </div>

                {item.icon}

                <h3 className="text-base font-semibold text-text mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Inline mission (replaces heavy card) */}
          <p className="text-muted max-w-2xl mx-auto text-center pt-4">
            Most AI tools are designed for interaction. Cognias is designed for execution —
            structured systems, defined workflows, and outcomes you can rely on.
          </p>
        </Container>

        {/* ========================================= */}
        {/* PRINCIPLES */}
        {/* ========================================= */}
        <Container className="py-16 space-y-8">
          <h2 className="text-2xl font-semibold text-text text-center">
            Built on a few core principles
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Structured, not generic",
                desc: "AI should operate within defined systems.",
                icon: <Layers className="mb-3 text-[#FF4D00]" />,
              },
              {
                title: "Workflow-native",
                desc: "Assistants should follow real processes.",
                icon: <Workflow className="mb-3 text-[#FF4D00]" />,
              },
              {
                title: "Secure by design",
                desc: "Data isolation and control are fundamental.",
                icon: <ShieldCheck className="mb-3 text-[#FF4D00]" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-[var(--radius-lg)] p-5 shadow-sm hover:border-[#FF4D00]/30 transition"
              >
                {item.icon}
                <h3 className="text-base font-semibold text-text mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>

        {/* ========================================= */}
        {/* WHO IT'S FOR */}
        {/* ========================================= */}
        <FullWidthBand variant="primary">
        {/* <Container className="py-12 text-center"> */}
          <h2 className="text-2xl font-semibold text-text mb-8">
            Who it’s for
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-muted max-w-4xl mx-auto">
            <div>
              <h3 className="text-text font-semibold mb-2">Product teams</h3>
              <p>Building AI-powered SaaS products.</p>
            </div>
            <div>
              <h3 className="text-text font-semibold mb-2">Operations</h3>
              <p>Automating audits and structured processes.</p>
            </div>
            <div>
              <h3 className="text-text font-semibold mb-2">Internal tools</h3>
              <p>Helping teams navigate knowledge and workflows.</p>
            </div>
          </div>
        {/* </Container> */}
        </FullWidthBand>

        {/* ========================================= */}
        {/* FOUNDER NOTE */}
        {/* ========================================= */}
        <Container className="py-14 space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-text">
            A note from the founder
          </h2>

          <Quotation
            quote="We started Cognias after seeing how difficult it was to move from AI demos to real systems. The gap wasn’t in the models — it was in the structure around them."
            author="Pablo Randelo, CEO"
          />
        </Container>

        {/* ========================================= */}
        {/* CTA BAND */}
        {/* ========================================= */}
        <FullWidthBand variant="primary">
          <GetStarted />
        </FullWidthBand>

      </div>
    </>
  );
}
// import { SEO } from "../components/ui/index";
// import { FullWidthBand, Container } from "../components/layout/index";
// import { GetStarted } from "../components/widgets/index";
// import {
//   Layers,
//   Workflow,
//   ShieldCheck,
//   Database,
//   Settings,
//   Bot
// } from "lucide-react";
// import { Quotation } from "../components/ui/Quote";

// export default function AboutPage() {
//   return (
//     <>
//       <SEO
//         title="About - Cognias"
//         description="Cognias is building AI assistants for real business workflows — structured, scalable, and production-ready."
//       />

//       <div className="relative overflow-hidden">

//         {/* ========================================= */}
//         {/* GLOBAL BACKGROUND GLOW */}
//         {/* ========================================= */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,77,0,0.08),transparent_70%)]" />
//         </div>

//         {/* ========================================= */}
//         {/* HERO */}
//         {/* ========================================= */}
//         <Container className="py-20 md:py-24 text-center space-y-6">
//           <h1 className="text-4xl md:text-5xl font-semibold text-text leading-tight">
//             AI that actually works for your business
//           </h1>

//           <p className="text-lg text-muted max-w-2xl mx-auto">
//             Cognias helps teams build AI assistants that operate within real
//             workflows — not just chat, but structured systems that deliver
//             consistent, reliable outcomes.
//           </p>
//         </Container>

//         {/* ========================================= */}
//         {/* LOGOS STRIP */}
//         {/* ========================================= */}
//         <Container className="py-16 text-center space-y-6">
//           <p className="text-sm text-muted">
//             Built for teams across industries
//           </p>

//           <div className="flex flex-wrap justify-center items-center gap-6">
//             {[
//               "Compliance teams",
//               "SaaS builders",
//               "Consultancies",
//               "Operations teams",
//               "Internal tools",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="text-sm font-medium text-muted border border-border px-4 py-2 rounded-md bg-surface hover:border-[#FF4D00]/40 hover:text-text transition"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>
//         </Container>

//         {/* ========================================= */}
//         {/* HOW IT WORKS */}
//         {/* ========================================= */}
//         <Container className="py-20 md:py-24 space-y-12">
//           <h2 className="text-2xl font-semibold text-text text-center">
//             How Cognias works
//           </h2>

//           <div className="grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 step: "01",
//                 title: "Ingest your data",
//                 desc: "Upload documents, connect data sources, and structure your knowledge base.",
//                 icon: <Database className="mb-3 text-[#FF4D00]" />,
//               },
//               {
//                 step: "02",
//                 title: "Define workflows",
//                 desc: "Configure how your assistant thinks, behaves, and operates within your processes.",
//                 icon: <Settings className="mb-3 text-[#FF4D00]" />,
//               },
//               {
//                 step: "03",
//                 title: "Deploy assistants",
//                 desc: "Launch AI assistants that can answer, act, and integrate into real environments.",
//                 icon: <Bot className="mb-3 text-[#FF4D00]" />,
//               },
//             ].map((item) => (
//               <div
//                 key={item.step}
//                 className="group relative bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition overflow-hidden"
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(255,77,0,0.08),transparent_70%)]" />

//                 <div className="text-xs font-semibold text-[#FF4D00] mb-2">
//                   {item.step}
//                 </div>

//                 {item.icon}

//                 <h3 className="text-lg font-semibold text-text mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-muted">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </Container>

//         {/* ========================================= */}
//         {/* MISSION */}
//         {/* ========================================= */}
//         <Container className="py-16">
//           <div className="relative bg-surface border border-border rounded-[var(--radius-lg)] p-10 shadow-sm overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 via-transparent to-transparent pointer-events-none" />

//             <h2 className="text-2xl font-semibold text-text mb-4">
//               A more practical approach to AI
//             </h2>

//             <p className="text-muted max-w-3xl">
//               Most AI tools are designed for interaction. Cognias is designed for execution.
//             </p>

//             <p className="text-muted max-w-3xl mt-4">
//               We focus on structured knowledge, defined workflows, and systems that
//               can be relied on in real environments.
//             </p>
//           </div>
//         </Container>

//         {/* ========================================= */}
//         {/* PRINCIPLES */}
//         {/* ========================================= */}
//         <Container className="py-20 md:py-24 space-y-10">
//           <h2 className="text-2xl font-semibold text-text text-center">
//             Built on a few core principles
//           </h2>

//           <div className="grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 title: "Structured, not generic",
//                 desc: "AI should operate within defined systems.",
//                 icon: <Layers className="mb-3 text-[#FF4D00]" />,
//               },
//               {
//                 title: "Workflow-native",
//                 desc: "Assistants should follow real processes.",
//                 icon: <Workflow className="mb-3 text-[#FF4D00]" />,
//               },
//               {
//                 title: "Secure by design",
//                 desc: "Data isolation and control are fundamental.",
//                 icon: <ShieldCheck className="mb-3 text-[#FF4D00]" />,
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 shadow-sm hover:border-[#FF4D00]/30 transition"
//               >
//                 {item.icon}
//                 <h3 className="text-lg font-semibold text-text mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-muted">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </Container>

//         {/* ========================================= */}
//         {/* WHO IT'S FOR */}
//         {/* ========================================= */}
//         <Container className="py-16">
//           <div className="relative bg-surface border border-border rounded-[var(--radius-lg)] p-10 shadow-sm">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D00]/5 via-transparent to-transparent pointer-events-none" />

//             <h2 className="text-2xl font-semibold text-text mb-6">
//               Who it’s for
//             </h2>

//             <div className="grid md:grid-cols-3 gap-8 text-sm text-muted">
//               <div>
//                 <h3 className="text-text font-semibold mb-2">Product teams</h3>
//                 <p>Building AI-powered SaaS products.</p>
//               </div>
//               <div>
//                 <h3 className="text-text font-semibold mb-2">Operations</h3>
//                 <p>Automating audits and structured processes.</p>
//               </div>
//               <div>
//                 <h3 className="text-text font-semibold mb-2">Internal tools</h3>
//                 <p>Helping teams navigate knowledge and workflows.</p>
//               </div>
//             </div>
//           </div>
//         </Container>

//         {/* ========================================= */}
//         {/* FOUNDER NOTE */}
//         {/* ========================================= */}
//         <Container className="py-20 md:py-24 space-y-6 text-center">
//           <h2 className="text-2xl font-semibold text-text">
//             A note from the founder
//           </h2>

//           <Quotation
//             quote="We started Cognias after seeing how difficult it was to move from AI demos to real systems. The gap wasn’t in the models — it was in the structure around them."
//             author="Pablo Randelo, CEO"
//           />
//         </Container>

//         {/* ========================================= */}
//         {/* CTA BAND */}
//         {/* ========================================= */}
//         <FullWidthBand variant="primary">
//           <GetStarted />
//         </FullWidthBand>

//       </div>
//     </>
//   );
// }
