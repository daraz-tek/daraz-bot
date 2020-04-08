const dns = require("dns");
const { tldExists } = require("tldjs");

module.exports = [
  /(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)+([a-z]+)/,
  async ({ context, say }) => {
    const domain = context.matches[0];
    const ignores = ["daraz-tek.slack.com"];
    if (ignores.includes(domain)) return;
    if (!tldExists(domain)) return;
    try {
      const records = await new Promise((resolve, reject) =>
        dns.resolve(domain, (err, records) =>
          err ? reject(err) : resolve(records)
        )
      );
      say(`:nya-n: < ${domain} は ${records.join("  *,*  ")} ですにゃん`);
    } catch {
      say(`:nya-n: < ${domain} はわかんなかったにゃん`);
    }
  },
];
