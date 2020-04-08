module.exports = [
  /([\s\S]*(ぱい|パイ)[\s\S]*)/,
  ({ context, say }) => {
    say(`:goku: < ${context.matches[0].replace(/ぱい|パイ/g, "ぺぇ")}`);
  },
];
