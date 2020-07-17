const { promisify } = require("util");
const { App, ExpressReceiver } = require("@slack/bolt");
const daraz = require("./");

class Receiver extends ExpressReceiver {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  requestHandler(req, res) {
    // NOTE: See also https://api.slack.com/events-api#errors
    res.header("x-slack-no-retry", "1");
    if (req.headers["x-slack-retry-reason"] === "http_timeout")
      return promisify(res.end)();

    return super.requestHandler(req, res);
  }
}

const receiver = new Receiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = daraz(
  new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver,
  })
);

(async () => {
  await app.start(process.env.PORT || 8080);
  console.log("Daraz-san ⚡ running");
})();
