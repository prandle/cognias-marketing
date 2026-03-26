// import Link from "./Link";
// 
// export default function Navbar() {
//   return (
//     <header className="w-full border-b border-zinc-800">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
//         <nav className="flex gap-6 text-sm text-zinc-400">
//           <Link to="/features" className="hover:text-white">
//             Features
//           </Link>
//           <Link to="/pricing" className="hover:text-white">
//             Pricing
//           </Link>
//           <Link to="/about" className="hover:text-white">
//             About
//           </Link>
//         </nav>

//         <div className="flex gap-4">
//           <a
//             href="https://app.cognias.io"
//             className="text-sm text-zinc-400 hover:text-white"
//           >
//             Login
//           </a>

//           <a
//             href="https://app.cognias.io"
//             className="bg-primary px-4 py-2 rounded text-sm text-white"
//           >
//             Get Started
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import Link from "./Link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClasses = (active?: boolean) =>
    [
      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
      "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      active && "bg-blue-100 text-blue-800",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* ✅ Logo (top left) */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
        {/* <div className="h-9 flex items-center"> */}
          <img
            src="/logo-cognias.svg"
            alt="Cognias"
            className="h-8 md:h-9 max-w-[140px] object-contain"
          />
          {/* className="h-8 md:h-9 w-auto" */}
            
          
        {/* </div> */}
        </Link>
        

        {/* ✅ Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link to="/features" className={linkClasses()}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className={linkClasses()}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className={linkClasses()}>
              About
            </Link>
          </li>
        </ul>

        {/* ✅ Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.cognias.io"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Login
          </a>

          <a
            href="https://app.cognias.io"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* ✅ Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ✅ Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <Link to="/features" className={linkClasses()}>
              Features
            </Link>
            <Link to="/pricing" className={linkClasses()}>
              Pricing
            </Link>
            <Link to="/about" className={linkClasses()}>
              About
            </Link>

            <hr className="my-2" />

            <a
              href="https://app.cognias.io"
              className="px-3 py-2 text-sm text-slate-700"
            >
              Login
            </a>

            <a
              href="https://app.cognias.io"
              className="mt-1 rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}