import { App as BoltApp, AppOptions } from "@slack/bolt";
import path from "node:path";
import glob from "glob";
// TODO: Node.js v18+ ならば不要
import "cross-fetch/polyfill";

const scriptsPattern = path.join(__dirname, "scripts/*.js");
const scripts = glob
  .sync(scriptsPattern)
  .map(require)
  .map((m) => m.default ?? m);

class App extends BoltApp {
  constructor(options: AppOptions) {
    super(options);
    scripts.forEach((script) => {
      if (Array.isArray(script)) return this.message(...script);
      if (script instanceof Function) return script(this);
    });
  }
}

export default App;
