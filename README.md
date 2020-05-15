# 🏁 Deno Starter

This is a starter tempalte for building Deno packages.

[![Test CI](https://github.com/denorg/starter/workflows/Test%20CI/badge.svg)](https://github.com/denorg/starter/actions)

```ts
import { mode } from "https://raw.githubusercontent.com/denorg/starter/master/mod.ts";

const result = mode();
```

You can also run the script from the command line using:
```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/starter/master/cli.ts <arguments>
```
Or install using
```bash
deno install --allow-read -n starter https://raw.githubusercontent.com/denorg/starter/master/cli.ts
```
and run with
```bash
starter <arguments>
```

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## 📄 License

MIT © [Denorg](https://den.org.in)
