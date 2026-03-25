import Link from "./Link";

export default function footerNav() {
  return (
    <header className="w-full border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link to="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link to="/cookies" className="hover:text-white">
            Cookies
          </Link>
          <Link to="/terms" className="hover:text-white">
            Terms
          </Link>
        </nav>

      </div>
    </header>
  );
}