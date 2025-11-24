# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- One of many of the supported linters
- A package manager: e.g. npm, pnpm, ...

::: code-group

```sh [npm]
$ npm add -D @ogs-gmbh/linter
```

```sh [pnpm]
$ pnpm add -D @ogs-gmbh/linter
```

```sh [yarn]
$ yarn add -D @ogs-gmbh/linter
```

```sh [bun]
$ bun add -D @ogs-gmbh/linter
```

:::

After running the command successfully, the linter can become configured.

### Configure

Each preset requires a given set of dependencies to supply rules to their linter, before getting it to work.

#### Dependencies

We provide a dependency graph to figure out your needed dependencies quickly.
