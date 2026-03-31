import { FullWidthBand } from "../components/layout";
import { Link, Button, Accordion } from "../components/ui";
import { GetStarted } from "../components/widgets";
import { useState } from "react";

export default function ComponentsLibrary() {

  const [isPrimaryBg, setIsPrimaryBg] = useState(false);

  return (
    <>

      <nav className="row">
        <Link to="#typography" className="ease-in-out duration-500">Typography</Link>
        <Link to="#links" className="ease-in-out duration-500">Links</Link>
        <Link to="#buttons" className="ease-in-out duration-500">Buttons</Link>
        <Link to="#forms" className="ease-in-out duration-500">Forms</Link>
        <Link to="#tables" className="ease-in-out duration-500">Tables</Link>
        <Link to="#media" className="ease-in-out duration-500">Media</Link>
        <Link to="#reactComponents" className="ease-in-out duration-500">React Components</Link>
      </nav>

      <div className="flex items-center gap-3 py-4">
        <span>Light</span>
        <button
          onClick={() => setIsPrimaryBg(prev => !prev)}
          className={`w-12 h-6 rounded-full transition ${isPrimaryBg ? "bg-primary" : "bg-gray-300"
            }`}
        >
          <div
            className={`h-6 w-6 bg-white rounded-full shadow transform transition ${isPrimaryBg ? "translate-x-6" : ""
              }`}
          />
        </button>
        <span>Primary</span>
      </div>

      {/* React Components */}
      {/* Accordion */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <Accordion type="multiple">
          <Accordion.Item value="data">
            <Accordion.Trigger>Data Collection</Accordion.Trigger>
            <Accordion.Content>
              We collect user data to improve services...
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="security">
            <Accordion.Trigger>Security</Accordion.Trigger>
            <Accordion.Content>
              We implement strong security measures...
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </FullWidthBand>

      {/* Get Satered */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2>Get Started</h2>
        <GetStarted />
      </FullWidthBand>

      {/* Buttons */}
      <FullWidthBand variant={isPrimaryBg ? "primary" : "subtle"}>
        <h2>Buttons - Light</h2>
        <Button
          variant="primary"
          className="px-6 py-3">
          Primary Button
        </Button>
        <Button
          variant="secondary"
          className="px-6 py-3">
          Secondary Button
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3">
          Outline Button
        </Button>
        <Button
          variant="ghost"
          className="px-6 py-3">
          Ghost Button
        </Button>
        <Button
          variant="destructive"
          className="px-6 py-3">
          Destroy Button
        </Button>
      </FullWidthBand>

    </>

  )
}