import { Accordion } from "../../components/ui";

export default function SampleAccordion() {
    return (
        <>

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

        </>
    );
}