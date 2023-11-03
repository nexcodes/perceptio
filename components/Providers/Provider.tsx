"use client";

import { ThemeProvider } from "./theme-provider";
import { ConvexClientProvider } from "./convex-providers";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="perceptio-theme"
      >
        {children}
      </ThemeProvider>
    </ConvexClientProvider>
  );
}
