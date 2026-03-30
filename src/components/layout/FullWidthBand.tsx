import React, { Children, isValidElement, cloneElement } from "react";
import type { ReactElement } from "react";

import { Container } from "./index";

type FullWidthBandProps = {
  children: React.ReactNode;
  variant?: "primary" | "subtle";
  className?: string;
};

export function FullWidthBand({
  children,
  variant = "primary",
  className = "",
}: FullWidthBandProps) {
  const isPrimary = variant === "primary";

  const enhancedChildren = isPrimary
    ? Children.map(children, (child) => {
        if (isValidElement(child)) {
          // Cast child as ReactElement with ThemeInverseProps
          return cloneElement(child as ReactElement<React.HTMLAttributes<any> & { themeInverse?: boolean }>, { themeInverse: true });
        }
        return child;
      })
    : children;

  return (
    <section
      className={`
        relative w-full overflow-hidden
        ${isPrimary
          ? "bg-gradient-to-br from-[#ff5a1a] via-[#e64500] to-[#cc3d00] theme-inverse"
          : "bg-surface border-y border-border"
        }
        ${className}
      `}
    >
      {/* Lighting layers */}
      {isPrimary && (
        <>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none" />
        </>
      )}

      <Container className="relative py-24 md:py-28">
        {enhancedChildren}
      </Container>
    </section>
  );
}
// import { 
//   Container
// } from "./index";

// type FullWidthBandProps = {
//   children: React.ReactNode;
//   variant?: "primary" | "subtle";
//   className?: string;
// };

// export function FullWidthBand({
//   children,
//   variant = "primary",
//   className = "",
// }: FullWidthBandProps) {

//   const isPrimary = variant === "primary";

//   return (
//     <section
//       className={`
//         relative w-full overflow-hidden
//         ${isPrimary 
//           ? "bg-gradient-to-br from-[#ff5a1a] via-[#e64500] to-[#cc3d00] theme-inverse"
//           : "bg-surface border-y border-border"
//         }
//         ${className}
//       `}
//     >

//       {/* ========================================= */}
//       {/* LIGHTING LAYERS (PRIMARY ONLY) */}
//       {/* ========================================= */}
//       {isPrimary && (
//         <>
//           {/* Top-left light */}
//           <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />

//           {/* Bottom-right depth */}
//           <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none" />
//         </>
//       )}

//       {/* ========================================= */}
//       {/* CONTENT */}
      
//       <Container className="relative py-24 md:py-28">
//         {children}
//       </Container>

//     </section>
//   );
// }
