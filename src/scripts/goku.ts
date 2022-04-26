export default [
  /([\s\S]*(ぱい|パイ)[\s\S]*)/,
  ({ context, say }: any) =>
    say(`:goku: < ${context.matches[0].replace(/ぱい|パイ/g, "ぺぇ")}`),
];
