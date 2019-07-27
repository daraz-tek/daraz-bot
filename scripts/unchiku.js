const { useTokenize } = require("./util/morpheme");
const random = require("./util/random");
const tellme = require("./util/tellme");

// ときどきうんちくを語ります

module.exports = [
  /[^\x01-\x7e]{4,}/,
  async ({ context, say }) => {
    if (random([...Array(15).keys()]) !== 0) return;
    try {
      const tokenize = await useTokenize();
      const words = tokenize(context.matches[0])
        .filter(({ pos }) => pos === "名詞")
        .map(({ surface_form }) => surface_form)
        .filter(t => !/^[\u3040-\u309F]$/.test(t)) //ひらがな１文字 http://www.unicode.org/charts/PDF/U3040.pdf
        .filter(t => !/^[\u30A0-\u30FF]$/.test(t)) //かたかな１文字 http://www.unicode.org/charts/PDF/U30A0.pdf
        .filter(t => !/^[\uFF65-\uFF9F]$/.test(t)) //半角カナ１文字 http://www.unicode.org/charts/PDF/UFF00.pdf
        .filter(t => !/[、・…]/.test(t));
      const word = random(words);
      const ans = await tellme(word);
      if (/^(|…|しらないにゃーん)$/.test(ans)) {
        throw new Error(`don't know ${word} : ${ans}`);
      }
      say(`:nya-n: < 【う・ん・ち・く】${ans}`);
    } catch (e) {
      console.error(e);
    }
  }
];
