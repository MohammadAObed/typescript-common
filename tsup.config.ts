//https://esbuild.github.io/api
import { defineConfig } from "tsup";

const isProduction = true;

export default defineConfig({
  entry: ["src/constants/index.ts", "src/utils/index.ts"], // add other subpaths as needed
  format: ["esm"],
  dts: true,
  clean: true,
  outDir: "dist",
  splitting: false,
  sourcemap: !isProduction,
  minify: isProduction,
  target: "esnext",
  platform: "neutral",
  treeshake: true,
  skipNodeModulesBundle: true,
  external: [], // maybe list peer deps here if you add any
  keepNames: false,
  outExtension: () => ({ js: ".mjs" }),
});
