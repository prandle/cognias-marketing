import { Container } from "../components/layout/index";
import { SEO, Accordion } from "../components/ui/index"
import { Cookie, Database, Settings, Shield, Mail } from "lucide-react";

export default function CookiesPage() {
    return (
        <>
            <SEO
                title="Cognias - AI Assistants for Your Business"
                description="Build AI assistants for compliance, auditing, and business workflows with Cognias."
            />
                <Container className="py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Cookie Policy
      </h1>
      <p className="text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <Accordion type="multiple">

        <Accordion.Item value="what">
          <Accordion.Trigger>
            <Cookie className="mr-2" size={18} />
            What Are Cookies?
          </Accordion.Trigger>
          <Accordion.Content>
            Cookies are small text files stored on your device to improve your browsing experience.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="how">
          <Accordion.Trigger>
            <Database className="mr-2" size={18} />
            How We Use Cookies
          </Accordion.Trigger>
          <Accordion.Content>
            We use cookies to provide core functionality, analyse usage, and improve performance.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="types">
          <Accordion.Trigger>
            <Settings className="mr-2" size={18} />
            Types of Cookies We Use
          </Accordion.Trigger>
          <Accordion.Content>
            <ul className="list-disc pl-5 space-y-2">
              <li>Strictly necessary cookies</li>
              <li>Analytics cookies</li>
              <li>Functional cookies</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="consent">
          <Accordion.Trigger>
            <Shield className="mr-2" size={18} />
            Consent
          </Accordion.Trigger>
          <Accordion.Content>
            We only use non-essential cookies with your explicit consent via our cookie banner.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="manage">
          <Accordion.Trigger>
            <Settings className="mr-2" size={18} />
            Managing Cookies
          </Accordion.Trigger>
          <Accordion.Content>
            You can manage or disable cookies through your browser settings.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="contact">
          <Accordion.Trigger>
            <Mail className="mr-2" size={18} />
            Contact
          </Accordion.Trigger>
          <Accordion.Content>
            Contact us at: <a href="mailto:support@cognias.io">support@cognias.io</a>
          </Accordion.Content>
        </Accordion.Item>

      </Accordion>
    </Container>
        </>
    );
}

