import { directMention } from "@slack/bolt";
import { makeTokenize, toCSV } from "./utils/morpheme";
import nyanco from "./utils/nyanco";

// Description:
//   すもももももももものうち
//
// Synopsis:
//   morpheme <phrase> - <phrase> を形態素解析器にかけるにゃーん

export default [
  directMention(),
  /morpheme (.*)/i,
  async ({ context, say }: any) => {
    try {
      const tokenize = await makeTokenize();
      const tokens = tokenize(context.matches[1]);
      const readings = tokens.map(({ reading }: any) => reading);
      return say(
        [`${nyanco()} ＜ ${readings.join("")}`, toCSV(tokens)].join("\n")
      );
    } catch (e) {
      console.error(e);
    }
  },
];
