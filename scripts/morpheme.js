const { directMention } = require("@slack/bolt");
const { useTokenize, toCSV } = require("./util/morpheme");
const nyanco = require("./util/nyanco");

// Description:
//   すもももももももものうち
//
// Synopsis:
//   morpheme <phrase> - <phrase> を形態素解析器にかけるにゃーん

module.exports = [
  directMention(),
  /morpheme (.*)/i,
  async ({ context, say }) => {
    try {
      const tokenize = await useTokenize();
      const tokens = tokenize(context.matches[1]);
      const readings = tokens.map(({ reading }) => reading);
      say([`${nyanco()} ＜ ${readings.join("")}`, toCSV(tokens)].join("\n"));
    } catch (e) {
      console.error(e);
    }
  }
];
