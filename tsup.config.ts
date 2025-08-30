//https://esbuild.github.io/api
import defineConfig from "@mohammad_obed/config/tsup.config";

export default defineConfig({
  entry: ["src/constants/index.ts", "src/utils/index.ts"], // add other subpaths as needed
  outDir: "dist",
});
