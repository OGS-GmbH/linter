import * as esbuild from "esbuild";
import { getConfig } from "./config.mjs";

const preparedConfig = {
  outdir: "dist/prod",
}

await esbuild.build({
  ...getConfig(preparedConfig.outdir),
  ...preparedConfig
});

