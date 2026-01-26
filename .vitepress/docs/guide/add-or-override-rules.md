---
prev: false
next: false
---

# Override Rules

You may experience the case, where other rules should be supplied to the linter.

Since every supported linter can be configured by JavaScript or TypeScipt, you can easily use JavaScript to combine your custom rules with our rules.

We take ESLint as an example:

```typescript [eslint.config.mjs]
import {
  JS_RULES_PRESET
} from "@ogs-gmbh/linter";
import globals from "globals";
import stylisticPlugin from "@stylistic/eslint-plugin";
import unicornPlugin from "eslint-plugin-unicorn";
import jsdocPlugin from "eslint-plugin-jsdoc";
import { defineConfig } from "eslint/config";

const YOUR_CUSTOM_RULES = {
  "rule-1": "error",
  "rule-2": "warn",
  "override-1": "error"
};

export default defineConfig(
  {
    plugins: {
      "@stylistic": stylisticPlugin,
      "@unicorn": unicornPlugin,
      "@jsdoc": jsdocPlugin
    }
  },
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs"
    ],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      ...JS_RULES_PRESET,
      ...YOUR_CUSTOM_RULES // Make sure to spread it after the preset
    }
  }
);
```
