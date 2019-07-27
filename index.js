const scripts = require("glob")
  .sync("./scripts/*.js")
  .map(require);

module.exports = app => {
  scripts.forEach(script => {
    if (Array.isArray(script)) return app.message(...script);
    if (script instanceof Function) return script(app);
  });
  return app;
};
