const App = require("./app");
const Receiver = require("./receiver");

async function main() {
  const receiver = new Receiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  });

  const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver,
  });

  await app.start(process.env.PORT || 8080);
  console.log("Daraz-san ⚡ running");
}

if (require.main === module) main();
