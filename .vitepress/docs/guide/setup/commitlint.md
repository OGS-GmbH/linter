---
prev: false
next: false
---

# Setup Commitlint

## 1. Add dependencies

To get started, add the following dependencies to your `devDependencies` in the `package.json`.

```json [package.json]
{
  "devDependencies": {
    "@commitlint/cli": "^20",
    "@commitlint/config-conventional": "^20"
  }
}
```

## 2. (Optional) Integrate prompt-cli

::: tip Recommendation

We recommend to integrate Commitlint's prompt-cli.

It's a simple tool, which helps new contributors learn and follow your commit message convention.

:::

Add `@commitlint/prompt-cli` to your `devDependencies` in the `package.json` like in the previous step:

```json [package.json]
{
  "devDependencies": {
    "@commitlint/prompt-cli": "^20"
  }
}
```

After making sure `@commitlint/prompt-cli` is a dependency, you can add the following script into `scripts` in your `package.json`:

```json [package.json]
{
  "scripts": {
    "commit": "commit"
  }
}
```

## 3. Add Commitlint config

Commitlint can be configured trough `commitlint.config.mjs`.

First create this file inside your project root.

Then copy the following content into your `commitlint.config.mjs`:

```js [commitlint.config.mjs]
export default {
  extends: [
    "@commitlint/config-conventional"
  ]
};
```

## 4. Integrate Husky

To integrate Husky, follow their guide: [Husky integration](https://typicode.github.io/husky/get-started.html)

Add `commitlint --edit $1` to the [`commit-msg`](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) Git hook.

## 5. Try it out

Make some changes and try to commit.

If you have integrated Commitlint's prompt-cli, try out one of the following commands:

::: code-group

```sh [npm]
$ npm run commit
```

```sh [pnpm]
$ pnpm run commit
```

```sh [yarn]
$ yarn run commit
```

```sh [bun]
$ bun run commit
```

:::

Commitlint should now validate and lint your commit messages.
