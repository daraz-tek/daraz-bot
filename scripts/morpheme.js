/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   すもももももももものうち
//
// Commands:
//   hubot morpheme <phrase> - <phrase> を形態素解析器にかけるにゃーん

const kuromoji = require('kuromoji');

module.exports = function(robot) {
  robot.respond(/morpheme (.*)/i, function(msg) {
    const nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:'];
    const prefix = `${msg.random(nya_ns)} ＜ `;

    return kuromoji.builder({dicPath: 'node_modules/kuromoji/dist/dict/'}).build(function(err, _tokenizer) {
      const tokenizer = _tokenizer;

      let tokens = tokenizer.tokenize(msg.match[1]);

      const readings = tokens.filter(t => t['reading'] != null).map(t => t['reading']);
      msg.reply(`${prefix}${readings}`);

      tokens = tokens.map(token =>
        [
          token.surface_form,
          token.pos,
          token.pos_detail_1,
          token.pos_detail_2,
          token.pos_detail_3,
          token.conjugated_form,
          token.conjugated_type,
          token.basic_form,
          token.reading,
          token.pronunciation
        ].join(",")
      );
      return msg.reply(`表層形,品詞,品詞細分類1,品詞細分類2,品詞細分類3,活用型,活用形,基本形,読み,発音\n${tokens.join("\n")}`);
    });
  });

  // ときどきうんちくを語ります
  // - 全角文字4文字が続く
  // - 1/15 の確率
  // - 句読点、全角空白を除く
  return robot.hear(/[^\x01-\x7e]{4,}/, function(msg) {
    if (msg.random([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]) === 0) {
      return kuromoji.builder({dicPath: 'node_modules/kuromoji/dist/dict/'}).build(function(err, tokenizer) {
        const token = msg.random(
          tokenizer.
            tokenize(msg.match[0]).
            filter(t => t.pos === '名詞').
            map(t => t.surface_form).
            filter(t => !/^[\u3040-\u309F]$/.test(t)). // ひらがな１文字 http://www.unicode.org/charts/PDF/U3040.pdf
            filter(t => !/^[\u30A0-\u30FF]$/.test(t)). // かたかな１文字 http://www.unicode.org/charts/PDF/U30A0.pdf
            filter(t => !/^[\uFF65-\uFF9F]$/.test(t)). // 半角カナ１文字 http://www.unicode.org/charts/PDF/UFF00.pdf
            filter(t => !/[、・…]/.test(t))
        );
        if (token != null) {
          const q = {
            action: 'query',
            format: 'json',
            titles: token,
            prop: 'extracts',
            exchars: 200,
            explaintext: 1,
            redirects: 3
          };
          return msg.http('https://ja.wikipedia.org/w/api.php')
            .query(q)
            .get()(function(err, res, body) {
              const json = JSON.parse(body);
              return (() => {
                const result = [];
                for (let k in json.query.pages) {
                  const v = json.query.pages[k];
                  if (v.extract != null) { result.push(msg.reply(`:nya-n: < 【う・ん・ち・く】${v.extract}`)); } else {
                    result.push(undefined);
                  }
                }
                return result;
              })();
          });
        }
      });
    }
  });
};

