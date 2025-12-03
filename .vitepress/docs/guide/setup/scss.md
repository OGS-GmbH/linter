# Setup SCSS

## 1. Add dependencies

To get started, add the following dependencies your `devDependencies` in the `package.json`.

```json [package.json]
{
  "devDependencies": {
    "stylelint": "^16",
    "stylelint-scss": "^6"
  }
}
```

## 2. Add Stylelint config

Stylelint offers many ways to provide a configuration. You can provide a configuration trough following file names: `stylelint.config.js`, `stylelint.config.mjs` & `stylelint.config.cjs`.

If you are facing issues while integrating Stylelint, consult [Stylelint docs](https://stylelint.io/user-guide/configure) for help.

::: warning Syntax

When enabling our linter rules, make sure to use the correct syntax for the configuration file. We provide an example in ECMAScript JavaScript (`.mjs`) as it is the de facto standard.

:::


```javascript [stylelint.config.mjs]
import {
  SCSS_RULES_PRESET
} from "@ogs-gmbh/linter";

/** @type {import('stylelint').Config} */
export default {
  plugins: [ "stylelint-scss" ],
  rules: SCSS_RULES_PRESET
}
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
$ npx stylelint "**/*.css"
```

```sh [pnpm]
$ pnpx stylelint "**/*.css"
```

```sh [yarn]
$ yarn stylelint "**/*.css"
```

```sh [bun]
$ bunx stylelint "**/*.css"
```

:::
