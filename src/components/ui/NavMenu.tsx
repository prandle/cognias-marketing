import { useState, useEffect } from "react";
import Link from "./Link";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
        ${ scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white"
        }`}
    >

      {/* <nav className="border-b border-slate-200 bg-white"> */}
      {/* <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"> */}
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 
          ${ scrolled 
            ? "py-2" 
            : "py-4"
          }`}
      >

        {/* ✅ Logo (top left) */}
        <Link
          to="/pages/home"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <img
            src="/logo-cognias.svg"
            alt="Cognias"
            className={`object-contain transition-all duration-300 
              ${ scrolled 
                ? "h-7" 
                : "h-9"
            }`}
          />
        </Link>


        {/* ✅ Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            <li>
              <Link to="/pages/features" className={linkClasses()}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/pages/pricing" className={linkClasses()}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/pages/about" className={linkClasses()}>
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
            <Link to="/pages/features" className={linkClasses()}>
              Features
            </Link>
            <Link to="/pages/pricing" className={linkClasses()}>
              Pricing
            </Link>
            <Link to="/pages/about" className={linkClasses()}>
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