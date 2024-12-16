"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider 

            attribute="class" // Applique les classes `light` ou `dark` sur le HTML
            defaultTheme="light" // Thème par défaut côté serveur
            enableSystem = {true} // Active le thème système
            {...props}>{children}
  
        </NextThemeProvider>;
}