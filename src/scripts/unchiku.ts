import { makeTokenize } from "./utils/morpheme";
import random from "./utils/random";
import tellme from "./utils/tellme";

// ときどきうんちくを語ります

export default [
  /[^\x01-\x7e]{4,}/,
  async ({ context, say }: any) => {
    if (random([...Array(15).keys()]) !== 0) return;
    try {
      const tokenize = await makeTokenize();
      const words = tokenize(context.matches[0])
        .filter(({ pos }: any) => pos === "名詞")
        .map(({ surface_form }: any) => surface_form)
        .filter((t: any) => !/^[\u3040-\u309F]$/.test(t)) //ひらがな１文字 http://www.unicode.org/charts/PDF/U3040.pdf
        .filter((t: any) => !/^[\u30A0-\u30FF]$/.test(t)) //かたかな１文字 http://www.unicode.org/charts/PDF/U30A0.pdf
        .filter((t: any) => !/^[\uFF65-\uFF9F]$/.test(t)) //半角カナ１文字 http://www.unicode.org/charts/PDF/UFF00.pdf
        .filter((t: any) => !/[、・…]/.test(t));
      const word = random(words);
      const ans = await tellme(word);
      if (/^(|…|しらないにゃーん)$/.test(ans)) {
        throw new Error(`don't know ${word} : ${ans}`);
      }
      return say(`:nya-n: < 【う・ん・ち・く】${ans}`);
    } catch (e) {
      console.error(e);
    }
  },
];
