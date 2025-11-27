# Override Rules

You may expierience the case, where other rules should be supplied to the linter.

Since every supported linter can be configured by JavaScript or TypeScipt, you can easily use the programming language to combine your custom rules with our rules.

We take ESLint as an example:

```typescript [eslint.config.mjs]
import {
  JS_RULES_PRESET
} from "@ogs-gmbh/linter";
import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";
import stylisticPlus from "@stylistic/eslint-plugin-plus";
import { defineConfig } from "eslint/config";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

const YOUR_CUSTOM_RULES = {
  "rule-1": "error",
  "rule-2": "warn",
  "override-1": "error"
};

export default defineConfig(
  {
    plugins: {
      "@tseslint": tseslint.plugin,
      "@unicorn": unicorn,
      "@stylistic/js": stylisticJs,
      "@stylistic/plus": stylisticPlus
    }
  },
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs"
    ],
    languageOptions: {
      globals: { ...globals.browser }
    },
    rules: {
      ...JS_RULES_PRESET,
      ...YOUR_CUSTOM_RULES // Make sure to spread it after the preset
    }
  }
);
```
