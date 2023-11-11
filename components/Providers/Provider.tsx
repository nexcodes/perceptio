"use client";

import { ThemeProvider } from "./theme-provider";
import { ConvexClientProvider } from "./convex-providers";
import { ModelProvider } from "./model-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import { Toaster } from "sonner";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <EdgeStoreProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="perceptio-theme"
        >
          <ModelProvider />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 2000,
            }}
          />
          {children}
        </ThemeProvider>
      </EdgeStoreProvider>
    </ConvexClientProvider>
  );
}
