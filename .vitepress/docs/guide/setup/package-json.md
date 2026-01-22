---
prev: false
next: false
---

# Setup `package.json` Linting

## 1. Add dependencies

To get started, add the following dependencies to your `devDependencies` in the `package.json`.

```json [package.json]
{
  "devDependencies": {
    "npm-package-json-lint": "^9"
  }
}
```

## 2. Integrate Lint-Staged

To integrate Lint-Staged, follow their guide: [Lint-Staged integration](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)

Make sure to add the follwing line in your `lint-staged.config.mjs`:

```js [lint-staged.config.mjs]
export default {
  "package.json": "npmPkgJsonLint -c ./node_modules/@ogs-gmbh/linter/package-json-open-source.rules.json"
}
```

## 3. (Optional) Integrate Husky

::: tip Recommendation

We recommend to integrate Husky.

Enforce consistent code quality by Git hooks, before it can enter your codebase.

:::

To integrate Husky, follow their guide: [Husky integration](https://typicode.github.io/husky/get-started.html)

## 3. Try it out

Make some changes in `package.json`.

If you now run `lint-staged`, it'll run `npmPkgJsonLint` internally.

Alternatively, if you have integrated Husky, you can just try to commit those changes in `package.json`.
