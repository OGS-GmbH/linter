# Setup TypeScript

## 1. Add dependencies

To get started, add the following dependencies your `devDependencies` in the `package.json`.

```json [package.json]
{
  "devDependencies": {
    "eslint": "^9",
    "@eslint/js": "^9",
    "eslint-plugin-unicorn": "^56",
    "@stylistic/eslint-plugin-js": "^2",
    "@stylistic/eslint-plugin-plus": "^2",
    "@stylistic/eslint-plugin-ts": "^2",
    "typescript-eslint": "^8",
    "globals": "^15"
  }
}
```

## 2. Add ESLint config

ESLint can be configured trough multiple ways. An excerpt from the official documentationen states:

> The ESLint configuration file may be named any of the following:\
> eslint.config.js\
> eslint.config.mjs\
> eslint.config.cjs\
> eslint.config.ts (requires additional setup)\
> eslint.config.mts (requires additional setup)\
> eslint.config.cts (requires additional setup)

If you are facing issues while integrating ESLint, consult [ESLint docs](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file) for help.

::: warning Syntax

When enabling our linter rules, make sure to use the correct syntax for the configuration file. We provide an example in ECMAScript JavaScript (`.mjs`) as it is the de facto standard.

:::


```javascript [eslint.config.mjs]
import {
  TS_RULES_PRESET
} from "@ogs-gmbh/linter";
import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticPlus from "@stylistic/eslint-plugin-plus";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import { defineConfig } from "eslint/config";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    plugins: {
      "@tseslint": tseslint.plugin,
      "@unicorn": unicorn,
      "@stylistic/js": stylisticJs,
      "@stylistic/ts": stylisticTs,
      "@stylistic/plus": stylisticPlus
    }
  },
  {
    files: [
      "**/*.ts",
      "**/*.cts",
      "**/*.mts"
    ],
    languageOptions: {
      parser: tseslint.parser,
      globals: { ...globals.browser },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: TS_RULES_PRESET
  }
);
```

## 3. (Optional) Integrate Lint-Staged

::: tip Recommendation

We recommend to integrate Lint-Staged.

It enables faster lint times while ensuring consitency across the project.

:::

To integrate Lint-Staged, follow their guide: [Lint-Staged integration](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

## 4. (Optional) Integrate Husky

::: tip Recommendation

We recommend to integrate Husky.

Enforce consistent code quality by Git hooks, before it can enter your codebase.

:::

To integrate Husky, follow their guide: [Husky integration](https://typicode.github.io/husky/get-started.html)

## 5. Try it out

Run ESLint against your project, to see results. Either by using the inbuilt LSP of your IDE or by running following command:

::: code-group

```sh [npm]
$ npx eslint .
```

```sh [pnpm]
$ pnpx eslint .
```

```sh [yarn]
$ yarn dlx eslint .
```

```sh [bun]
$ bunx eslint .
```

:::
