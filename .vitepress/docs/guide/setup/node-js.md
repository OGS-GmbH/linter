# Setup Node.js

## 1. Integrate JavaScript or TypeScript

Projects for Node.js are depending either on JavaScript or TypeScript.

To setup one of them, simply adhere to our [JavaScript setup guide](/guide/setup/javascript) or [TypeScript setup guide](/guide/setup/typescript).

## 2. Add dependencies

After completing the setup by one of the options a step before, you can add the following dependencies to your `package.json` in `devDependencies`.

```json [package.json]
{
  "devDependencies": {
    "eslint-plugin-security": "^3"
  }
}
```

## 3. Add ESLint config

Since a new plugin was added, you need to register it in your ESLint config.

If you decided to use TypeScript, you also need to import `NODE_TS_RULES_PRESET`. Otherwise, for using JavaScript, you need to import `NODE_JS_RULES_PRESET`. In the following example, we use the `NODE_TS_RULES_PRESET`.

```javascript [eslint.config.mjs]
import {
  NODE_TS_RULES_PRESET
} from "@ogs-gmbh/linter";
import security from "eslint-plugin-security";

export default defineConfig(
  {
    plugins: {
      "@security": security
    }
  },
  {
    files: [ "**/*.ts" ],
    languageOptions: {
      parser: tseslint.parser,
      globals: { ...globals.browser },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: NODE_TS_RULES_PRESET
  }
);
```

## 4. (Optional) Integrate Lint-Staged

::: tip Recommendation

We recommend to integrate Lint-Staged.

It enables faster lint times while ensuring consitency across the project.

:::

To integrate Lint-Staged, follow their guide: [Lint-Staged integration](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

## 5. (Optional) Integrate Husky

::: tip Recommendation

We recommend to integrate Husky.

Enforce consistent code quality by Git hooks, before it can enter your codebase.

:::

To integrate Husky, follow their guide: [Husky integration](https://typicode.github.io/husky/get-started.html)

## 6. Try it out

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
