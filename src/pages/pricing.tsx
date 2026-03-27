import { Helmet } from "react-helmet-async";

export default function PricingPage() {
    return (
        <>
            <Helmet>
                <title>Cognias – AI Assistants for Your Business</title>
                <meta
                    name="description"
                    content="Build AI assistants for compliance, auditing, and business workflows with Cognias."
                />

                {/* Open Graph (for social sharing) */}
                <meta property="og:title" content="Cognias AI Platform" />
                <meta property="og:description" content="AI assistants for real-world workflows." />
                <meta property="og:type" content="website" />
            </Helmet>
            <h1>Pricing</h1>
        </>
    );
}
