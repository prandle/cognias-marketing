import Link from "./Link";

export default function footerNav() {
  return (
      <div className="flex flex-wrap gap-4 md:justify-end">

          <Link to="/privacy" className="hover:text-slate-700 underline-offset-2 hover:underline">
            Privacy
          </Link>
          <Link to="/cookies" className="hover:text-slate-700 underline-offset-2 hover:underline">
            Cookies
          </Link>
          <Link to="/terms" className="hover:text-slate-700 underline-offset-2 hover:underline">
            Terms
          </Link>
      </div> 
  );
}
