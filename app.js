const { App } = require("@slack/bolt");
const daraz = require("./");

const app = daraz(
  new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  })
);

(async () => {
  await app.start(process.env.PORT || 80);
  console.log("Daraz-san ⚡ running");
})();
