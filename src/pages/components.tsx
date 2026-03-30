import { Container, FullWidthBand } from "../components/layout/index";
import { Button, Accordion } from "../components/ui/index";
import { GetStarted } from "../components/widgets/index";


export default function ComponentsLibrary() {
  return (
<>
  <FullWidthBand variant="primary">
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

    <Container>
      <h2>Get Started - Light</h2>
        <GetStarted/>
    </Container>

    <FullWidthBand variant="primary">
      <h2>Get Started - Dark</h2>
      <GetStarted/>
    </FullWidthBand>

    <Container>
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

    </Container>
    <FullWidthBand variant="primary">
      <h2>Buttons Dark Background</h2>
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