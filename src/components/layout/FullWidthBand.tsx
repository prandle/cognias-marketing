import { Children, isValidElement, cloneElement } from "react";
import type { ReactNode } from "react";
import { Container } from "./index";

type FullWidthBandProps = {
  children: ReactNode;
  variant?: "primary" | "subtle";
  className?: string;
};

export function FullWidthBand({
  children,
  variant = "primary",
  className = "",
}: FullWidthBandProps) {
  const isPrimary = variant === "primary";

  const childrenWithTheme = Children.map(children, (child) => {
    if (isPrimary && isValidElement(child)) {
      // Only clone valid React components, add themeInverse
      return cloneElement(child as React.ReactElement<any>, { themeInverse: true });
    }
    return child;
  });

  return (
    <section
      className={`
        relative w-full overflow-hidden my-6
        ${isPrimary
          ? "bg-gradient-to-br from-[#ff5a1a] via-[#e64500] to-[#cc3d00] theme-inverse"
          : "bg-surface border-y border-border"
        }
        ${className}
      `}
    >
      {isPrimary && (
        <>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none" />
        </>
      )}

      <Container className="relative py-24 md:py-28">
        {childrenWithTheme}
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
