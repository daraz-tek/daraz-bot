const fetch = require("node-fetch");

module.exports = [
  /(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/,
  async ({ context, say }) => {
    const ip = context.matches[0];
    const url = `https://ipinfo.io/${ip}`;
    const options = {
      timeout: 2000,
      headers: { Accept: "application/json" },
    };
    const response = await fetch(url, options);
    say(
      response.ok
        ? `:nya-n: < ${await response.text()}`
        : `:nya-n: < がんばったけど ${ip} よくわからんかったにゃん`
    );
  },
];
