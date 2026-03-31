import Link from "./Link";

export default function componentsNav() {    
      
      const linkClasses = (active?: boolean) =>
        [
          "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
          active && "bg-blue-100 text-blue-800",
        ]
          .filter(Boolean)
          .join(" ");
    
  return (

    <nav className="flex gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">

      <Link to="#typography" className={linkClasses()}>Typography</Link>
      <Link to="#buttons" className={linkClasses()}>Buttons</Link>
      <Link to="#links" className={linkClasses()}>Links</Link>
      <Link to="#forms" className={linkClasses()}>Buttons</Link>
      <Link to="#tables" className={linkClasses()}>Tables</Link>
      <Link to="#media" className={linkClasses()}>Media</Link>
      <Link to="#accordions" className={linkClasses()}>Accordions</Link>
      <Link to="#animation" className={linkClasses()}>Animation</Link>
      <Link to="#quote" className={linkClasses()}>Quote</Link>
      <Link to="#cta" className={linkClasses()}>Main CTA</Link>


    </nav>
  )}
