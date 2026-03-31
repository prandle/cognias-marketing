import { createContext, useContext } from "react";

type ThemeContextType = {
  themeInverse: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({ themeInverse: false });

export const useTheme = () => useContext(ThemeContext);