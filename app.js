const { App: BoltApp } = require("@slack/bolt");

class App extends BoltApp {
  /**
   * @param  {import("@slack/bolt").AppOptions} opt
   */
  constructor(opt) {
    super(opt);
    const scripts = require("glob").sync("./scripts/*.js").map(require);
    scripts.forEach((script) => {
      if (Array.isArray(script)) return this.message(...script);
      if (script instanceof Function) return script(this);
    });
  }
}
module.exports = App;
