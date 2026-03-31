import { FullWidthBand } from "../components/layout";
import { ComponentsNav, HeroAnimation } from "../components/ui";
import { GetStarted } from "../components/widgets";
import { SampleButtons, SampleAccordion } from "../components/examples";
import { useState } from "react";


export default function ComponentsLibrary() {

  const [isPrimaryBg, setIsPrimaryBg] = useState(false);

  return (
    <>

<div className="sticky top-15 z-40 bg-background/60 backdrop-blur border-b shadow-sm">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
    {/* Nav links */}
    <nav className="flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
      <ComponentsNav/>
    </nav>
    </div>
    {/* Toggle */}
    <div className="max-w-6xl mx-auto flex overflow-x-auto no-scrollbar whitespace-nowrap items-center gap-3 shrink-0 px-4 py-3">
      <span className="text-sm">Light</span>

      <button
        onClick={() => setIsPrimaryBg(prev => !prev)}
        className={`w-12 h-6 rounded-full transition ${
          isPrimaryBg ? "bg-primary" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-6 w-6 bg-white rounded-full shadow transform transition ${
            isPrimaryBg ? "translate-x-6" : ""
          }`}
        />
      </button>

      <span className="text-sm">Primary</span>
    </div>
  
</div>

      {/* React Components */}
      {/* Accordion */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2 id="accordions" className="text-primary scroll-mt-24">Accordion</h2>
        <SampleAccordion/>
      </FullWidthBand>

      {/* Get Satered */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2 id="cta" className="text-primary scroll-mt-24">Main CTA</h2>
        <GetStarted />
      </FullWidthBand>

      {/* Buttons */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2 id="buttons" className="text-primary scroll-mt-24">Buttons</h2>
        <SampleButtons/>
      </FullWidthBand>


      {/* Animation */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2 id="animation" className="text-primary scroll-mt-24">Animation</h2>
        <HeroAnimation/>
      </FullWidthBand>

    </>

  )
}