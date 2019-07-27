const { directMention } = require("@slack/bolt");
const tellme = require("./util/tellme");
const nyanco = require("./util/nyanco");

// Description:
//   だらずさんは何でも知っているので教えてくれます
//
// Synopsis:
//   tell me <phrase> - <phrase> について教えてあげよう、妖怪ウィキウィキペディアは使ってないよ！

module.exports = [
  directMention(),
  /tell( ?me)? (.*)/i,
  async ({ context, say }) => {
    const ans = await tellme(context.matches[2]);
    if (ans != null) say(`${nyanco()} ＜ ${ans}`);
  }
];
