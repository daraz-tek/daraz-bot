const { directMention } = require("@slack/bolt");
const nyanco = require("./util/nyanco");

// Description:
//   だらずさんは JSON のお掃除がだいすきです
//
// Synopsis:
//   json <jsonstring> - あなたの JSON をぷりちーにするにゃん

module.exports = [
  directMention(),
  /json +(.*)/i,
  ({ context, say }) => {
    try {
      const json = JSON.parse(context.matches[1]);
      const res = JSON.stringify(json, null, 2);
      return say([`${nyanco()} っ`, "```", res, "```"].join("\n"));
    } catch (e) {
      console.error(e);
    }
  },
];
