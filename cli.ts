import { mode } from "./mod.ts"

for (let arg of Deno.args) {
  console.log(arg, mode());
}