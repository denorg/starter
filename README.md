# 🏁 Deno Starter

This is a starter template for building Deno packages, with GitHub Actions CI, tests, and a CLI.

[![Test CI](https://github.com/denorg/starter/workflows/Test%20CI/badge.svg)](https://github.com/denorg/starter/actions)

## ⭐ Getting started

Import the `mode` function and use it:

```ts
import { mode } from "https://raw.githubusercontent.com/denorg/starter/master/mod.ts";

const result = mode();
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx --allow-read starter <arguments>
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/starter/master/cli.ts <arguments>
```

You can also install it globally using the following:

```bash
deno install --allow-read -n starter https://raw.githubusercontent.com/denorg/starter/master/cli.ts
```

Then, the package is available to run:

```bash
starter <arguments>
```

### Configuration

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
