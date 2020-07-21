const { promisify } = require("util");
const { ExpressReceiver } = require("@slack/bolt");

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
module.exports = Receiver;
