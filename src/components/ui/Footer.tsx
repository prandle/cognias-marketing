import { Heart } from "lucide-react";
// import Navbar from "./NavMenu";
import {Navbar} from "./index";
import {config} from "../../lib/constants"

interface FooterProps {
  version?: string;
}

export function Footer({ version }: FooterProps) {
  // const branding = useSettings();
  const year = new Date().getFullYear();
  // IMPORTANT: handle loading state from SettingsProvider
  // if (!branding) {
  //   return null; 
  // }

  return (
    <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-500 pb-4">
      {/* Align with header */}
      <div className="mx-auto max-w-6xl px-4">

        {/* Flex container for left + right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

          {/* LEFT: Favicon + copyright + company info */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {config.faviconUrl && (
                <img
                  src={config.faviconUrl}
                  alt="Cognias favicon"
                  className="h-4 w-4 object-contain opacity-80"
                />
              )}
              {(config.cmpName || config.cmpCopyright) && (
                <p>
                  © {year} {config.cmpName && `${config.cmpName}.`}{" "}
                  All Rights Reserved.
                </p>
              )}
            </div>

            {/* Company number + address underneath */}
            {(config.cmpNumber || config.cmpAddress) && (
              <p className="text-slate-500">
                {config.cmpNumber && <>Registration Number: {config.cmpNumber} </>}{" "}
                {config.cmpAddress && (<>Registered Address: {config.cmpAddress}</>)}
              </p>
            )}
          </div>

          {/* RIGHT: Footer menu links */}
          
          <Navbar />

          {/* {footerNav.length > 0 && (
            <div className="flex flex-wrap gap-4 md:justify-end">
              {footerNav.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-slate-700 underline-offset-2 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )} */}

        </div>

        {/* Optional version line below */}
        {version && (
          <div className="pt-3 flex items-center gap-2 text-slate-400 text-[11px]">
            <span className="flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> by Cognias
            </span>
            <span>• Version 1.0.{version}</span>
          </div>
        )}
      </div>
    </footer>
  );
}  
