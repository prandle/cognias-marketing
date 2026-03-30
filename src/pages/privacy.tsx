import { Container } from "../components/layout/index";
import {
  Shield,
  Database,
  Users,
  Globe,
  Clock,
  FileText,
  Mail,
} from "lucide-react";

import {
  SEO,
  Accordion
} from "../components/ui/index";

export default function PrivacyPage() {
  return (
      <>
      <SEO
        title="Features - Cognias"
        description="Explore the features of Cognias — build, deploy and scale AI assistants for real business workflows."
      />
    <Container className="py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-primary">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-10">
        <strong>Reviewed:</strong> {new Date('2026-03-01').toLocaleDateString("en-GB")} | <strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB")}
      </p>
      <p className="text-muted-foreground mb-10">
      This privacy policy will help you understand the things we do and the long-term commitment we've made to make our privacy promise a reality.</p>
      <p className="text-muted-foreground mb-10">We know that most privacy policies are dry and full of legal terms. So, we’ve done our best to make this one easy to digest. We’ve kept it clear by using plain language, short words and brief sentences so you can easily understand what we do with your data.
      </p>

      <Accordion type="single" collapsible className="space-y-4">

        {/* WHO WE ARE */}
        <Accordion.Item value="who">
          <Accordion.Trigger>
            <Users className="mr-2" size={18} />
            Who We Are
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              We are the data controller responsible for personal data that you have provided us with.
              If you have any questions, please contact us using the details below.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* DATA COLLECTION */}
        <Accordion.Item value="data">
          <Accordion.Trigger>
            <Database className="mr-2" size={18} />
            What Data We Collect
          </Accordion.Trigger>
          <Accordion.Content>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identity data (name, username)</li>
              <li>Contact data (email address)</li>
              <li>Technical data (IP address, browser type)</li>
              <li>Usage data (how you use our service)</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>

        {/* LAWFUL BASIS */}
        <Accordion.Item value="lawful">
          <Accordion.Trigger>
            <FileText className="mr-2" size={18} />
            Lawful Basis for Processing
          </Accordion.Trigger>
          <Accordion.Content>
            <p className="mb-2">
              Under UK GDPR, we rely on the following lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consent</li>
              <li>Performance of a contract</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>

        {/* HOW DATA IS USED */}
        <Accordion.Item value="usage">
          <Accordion.Trigger>
            <Database className="mr-2" size={18} />
            How We Use Your Data
          </Accordion.Trigger>
          <Accordion.Content>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To communicate with you</li>
              <li>To improve performance and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>

        {/* DATA SHARING */}
        <Accordion.Item value="sharing">
          <Accordion.Trigger>
            <Users className="mr-2" size={18} />
            Data Sharing
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              We may share your data with trusted third-party providers such as
              hosting, analytics, and authentication services. All processors are
              required to respect your data and comply with UK GDPR.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* INTERNATIONAL TRANSFERS */}
        <Accordion.Item value="transfers">
          <Accordion.Trigger>
            <Globe className="mr-2" size={18} />
            International Data Transfers
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              Where data is transferred outside the UK, we ensure appropriate
              safeguards such as Standard Contractual Clauses (SCCs) are in place.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* DATA RETENTION */}
        <Accordion.Item value="retention">
          <Accordion.Trigger>
            <Clock className="mr-2" size={18} />
            Data Retention
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              We retain personal data only as long as necessary for the purposes
              we collected it, including legal, accounting, or reporting
              requirements.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* SECURITY */}
        <Accordion.Item value="security">
          <Accordion.Trigger>
            <Shield className="mr-2" size={18} />
            Data Security
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              We use appropriate security measures to prevent your personal data
              from being accidentally lost, used, or accessed in an unauthorised way.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* USER RIGHTS */}
        <Accordion.Item value="rights">
          <Accordion.Trigger>
            <FileText className="mr-2" size={18} />
            Your Rights
          </Accordion.Trigger>
          <Accordion.Content>
            <ul className="list-disc pl-5 space-y-2">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object</li>
            </ul>
            <p className="mt-3">
              You also have the right to lodge a complaint with the UK supervisory authority.
            </p>
          </Accordion.Content>
        </Accordion.Item>

        {/* CONTACT */}
        <Accordion.Item value="contact">
          <Accordion.Trigger>
            <Mail className="mr-2" size={18} />
            Contact Us
          </Accordion.Trigger>
          <Accordion.Content>
            <p>
              If you have any questions about this privacy policy or your data,
              please contact us at: <a href="mailto:support@cognias.io">support@cognias.io</a>
            </p>
          </Accordion.Content>
        </Accordion.Item>

      </Accordion>
    </Container>
    </>
  );
}