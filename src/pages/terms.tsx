import { Container } from "../components/layout/index";
import { SEO, Accordion} from "../components/ui/index";
import { FileText, Shield, AlertTriangle, Scale, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <>
    <SEO
        title="Features - Cognias"
        description="Explore the features of Cognias — build, deploy and scale AI assistants for real business workflows."
      />

    <Container className="py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Terms & Conditions
      </h1>
      <p className="text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <Accordion type="multiple">

        <Accordion.Item value="acceptance">
          <Accordion.Trigger>
            <FileText className="mr-2" size={18} />
            Acceptance of Terms
          </Accordion.Trigger>
          <Accordion.Content>
            By accessing or using our services, you agree to be bound by these Terms.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="use">
          <Accordion.Trigger>
            <Shield className="mr-2" size={18} />
            Use of Service
          </Accordion.Trigger>
          <Accordion.Content>
            You agree to use our services lawfully and not misuse or attempt to disrupt them.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="accounts">
          <Accordion.Trigger>
            <Shield className="mr-2" size={18} />
            Accounts & Authentication
          </Accordion.Trigger>
          <Accordion.Content>
            You are responsible for maintaining the confidentiality of your account and credentials.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="liability">
          <Accordion.Trigger>
            <AlertTriangle className="mr-2" size={18} />
            Limitation of Liability
          </Accordion.Trigger>
          <Accordion.Content>
            We are not liable for indirect, incidental, or consequential damages to the fullest extent permitted by UK law.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="termination">
          <Accordion.Trigger>
            <AlertTriangle className="mr-2" size={18} />
            Termination
          </Accordion.Trigger>
          <Accordion.Content>
            We may suspend or terminate access if you breach these terms.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="law">
          <Accordion.Trigger>
            <Scale className="mr-2" size={18} />
            Governing Law
          </Accordion.Trigger>
          <Accordion.Content>
            These terms are governed by the laws of England and Wales.
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