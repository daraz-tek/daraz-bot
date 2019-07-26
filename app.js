const { App } = require("@slack/bolt");
const patternsOrMiddleware = require("./")

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message(...patternsOrMiddleware);

(async () => {
  await app.start(process.env.PORT || 80);
  console.log("Daraz-san ⚡ running");
})();

