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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/Accordion";

export default function PrivacyPage() {
  return (
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
        <AccordionItem value="who">
          <AccordionTrigger>
            <Users className="mr-2" size={18} />
            Who We Are
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We are the data controller responsible for personal data that you have provided us with.
              If you have any questions, please contact us using the details below.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* DATA COLLECTION */}
        <AccordionItem value="data">
          <AccordionTrigger>
            <Database className="mr-2" size={18} />
            What Data We Collect
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identity data (name, username)</li>
              <li>Contact data (email address)</li>
              <li>Technical data (IP address, browser type)</li>
              <li>Usage data (how you use our service)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* LAWFUL BASIS */}
        <AccordionItem value="lawful">
          <AccordionTrigger>
            <FileText className="mr-2" size={18} />
            Lawful Basis for Processing
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Under UK GDPR, we rely on the following lawful bases:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consent</li>
              <li>Performance of a contract</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* HOW DATA IS USED */}
        <AccordionItem value="usage">
          <AccordionTrigger>
            <Database className="mr-2" size={18} />
            How We Use Your Data
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To communicate with you</li>
              <li>To improve performance and user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* DATA SHARING */}
        <AccordionItem value="sharing">
          <AccordionTrigger>
            <Users className="mr-2" size={18} />
            Data Sharing
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We may share your data with trusted third-party providers such as
              hosting, analytics, and authentication services. All processors are
              required to respect your data and comply with UK GDPR.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* INTERNATIONAL TRANSFERS */}
        <AccordionItem value="transfers">
          <AccordionTrigger>
            <Globe className="mr-2" size={18} />
            International Data Transfers
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Where data is transferred outside the UK, we ensure appropriate
              safeguards such as Standard Contractual Clauses (SCCs) are in place.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* DATA RETENTION */}
        <AccordionItem value="retention">
          <AccordionTrigger>
            <Clock className="mr-2" size={18} />
            Data Retention
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We retain personal data only as long as necessary for the purposes
              we collected it, including legal, accounting, or reporting
              requirements.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* SECURITY */}
        <AccordionItem value="security">
          <AccordionTrigger>
            <Shield className="mr-2" size={18} />
            Data Security
          </AccordionTrigger>
          <AccordionContent>
            <p>
              We use appropriate security measures to prevent your personal data
              from being accidentally lost, used, or accessed in an unauthorised way.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* USER RIGHTS */}
        <AccordionItem value="rights">
          <AccordionTrigger>
            <FileText className="mr-2" size={18} />
            Your Rights
          </AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>

        {/* CONTACT */}
        <AccordionItem value="contact">
          <AccordionTrigger>
            <Mail className="mr-2" size={18} />
            Contact Us
          </AccordionTrigger>
          <AccordionContent>
            <p>
              If you have any questions about this privacy policy or your data,
              please contact us at: <a href="mailto:support@cognias.io">support@cognias.io</a>
            </p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </Container>
  );
}