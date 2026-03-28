import { SEO } from "../components/ui/index";

export default function PricingPage() {
    return (
        <>
            <SEO
                title="Cognias - AI Assistants for Your Business"
                description="Build AI assistants for compliance, auditing, and business workflows with Cognias."
            />        
            <stripe-pricing-table pricing-table-id="prctbl_1TE7le2KRtrmEKN25T08fY6W" publishable-key="pk_test_51TDMdd2KRtrmEKN2N9BLr9SQZn4PGxUDPFAjhTlx3zadEnVCYYXALVNkW9lsOp1Mj7kdlHgQOSUJpG864vDz0VFb008s8Uq0sv"></stripe-pricing-table>
        </>
    );
}
