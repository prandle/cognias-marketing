export {};

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "pricing-table-id": string;
        "publishable-key": string;
        "client-reference-id"?: string;
      };
    }
  }
}