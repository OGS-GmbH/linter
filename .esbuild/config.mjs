import fastGlob from "fast-glob";
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";
import { packageJsonPlugin } from "esbuild-plugin-package-json";
import { fileCopyPlugin } from "esbuild-plugin-file-copy";

const getConfig = (pathToDist) => ({
  bundle: true,
  platform: "node",
  target: "node23",
  format: "esm",
  packages: "external",
  logLevel: "debug",
  outExtension: {
    ".js": ".mjs"
  },
  entryPoints: fastGlob.sync("./src/**/*.ts"),
  plugins: [
    esbuildPluginFilePathExtensions({
      esm: true
    }),
    packageJsonPlugin(),
    fileCopyPlugin({
      globs: [
        {
          from: "public/**",
          to: pathToDist
        }
      ]
    })
  ]
});

export {
  getConfig
};
