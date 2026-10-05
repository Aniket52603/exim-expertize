import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Inlines the built CSS into index.html to remove the render-blocking request
const inlineCss = () => ({
  name: "inline-css",
  enforce: "post",
  transformIndexHtml(html, ctx) {
    if (!ctx.bundle) return html; // skip in dev
    return html.replace(
      /<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
      (tag, href) => {
        const file = href.replace(/^\//, "");
        const asset = ctx.bundle[file];
        if (!asset || asset.type !== "asset") return tag;
        delete ctx.bundle[file];
        return `<style>${asset.source}</style>`;
      }
    );
  },
});

export default defineConfig({
  plugins: [react(), inlineCss()],
   build: { sourcemap: true },
});