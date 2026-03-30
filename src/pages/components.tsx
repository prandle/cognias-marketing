import { Container, FullWidthBand } from "../components/layout/index";
import { Button } from "../components/ui/index";
import { GetStarted } from "../components/widgets/index";


export default function ComponentsLibrary() {
  return (
<>
    <Container>
        <GetStarted/>
    </Container>

    <Container>
      <h2>Buttons Light Background</h2>
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