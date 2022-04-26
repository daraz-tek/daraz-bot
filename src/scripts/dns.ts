import { tldExists } from "tldjs";
import dns from "node:dns";

export default [
  /(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)+([a-z]+)/,
  async ({ context, say }: any) => {
    const domain = context.matches[0];
    const ignores = ["daraz-tek.slack.com"];
    if (ignores.includes(domain)) return;
    if (!tldExists(domain)) return;
    try {
      const records = await dns.promises.resolve(domain);
      return say(
        `:nya-n: < ${domain} は ${records.join("  *,*  ")} ですにゃん`
      );
    } catch {
      return say(`:nya-n: < ${domain} はわかんなかったにゃん`);
    }
  },
];
