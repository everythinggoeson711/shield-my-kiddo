import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Ensure all imports of react/react-dom resolve to the same installed copy.
      // This avoids duplicate React instances when some packages bundle their own
      // references or when package managers behave differently in CI/CD.
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
    // Prevent duplicate copies of React in the bundle which can cause runtime
    // errors like `De.createContext` when multiple React instances are present.
    dedupe: ["react", "react-dom"],
  },
  // Speed up dependency pre-bundling and ensure react/react-dom are optimized
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    // Emit source maps in production builds so we can map minified symbols
    // (like `De`) back to their original code while debugging deployments.
    sourcemap: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor_react';
            if (id.includes('@radix-ui') || id.includes('lucide-react') || id.includes('cmdk')) return 'vendor_ui';
            if (id.includes('recharts') || id.includes('date-fns') || id.includes('embla-carousel-react')) return 'vendor_charts';
            return 'vendor_misc';
          }
        },
      },
    },
  },
}));
