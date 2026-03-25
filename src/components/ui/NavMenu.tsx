import Link from "./Link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-lg font-bold">
          Cognias
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link to="/features" className="hover:text-white">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://app.cognias.io"
            className="text-sm text-zinc-400 hover:text-white"
          >
            Login
          </a>

          <a
            href="https://app.cognias.io"
            className="bg-primary px-4 py-2 rounded text-sm text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}