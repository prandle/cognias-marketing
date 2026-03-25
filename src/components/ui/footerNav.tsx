import Link from "./Link";

export default function footerNav() {
  return (
    <header className="w-full border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link to="/privacy" className="hover:text-white">
            Features
          </Link>
          <Link to="/cookies" className="hover:text-white">
            Pricing
          </Link>
          <Link to="/terms" className="hover:text-white">
            About
          </Link>
        </nav>

      </div>
    </header>
  );
}