import * as esbuild from "esbuild";
import { getConfig } from "./config.mjs";

const preparedConfig = {
  outdir: "dist/dev",
  sourcemap: "external"
}

const context = await esbuild.context(
  ...getConfig(preparedConfig.outdir),
  ...preparedConfig
);

context.watch();

