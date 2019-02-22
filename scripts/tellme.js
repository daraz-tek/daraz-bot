/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   だらずさんは何でも知っているので教えてくれます
//
// Commands:
//   hubot tell me <phrase> - <phrase> について教えてあげよう、妖怪ウィキウィキペディアは使ってないよ！

module.exports = robot =>
  robot.respond(/tell( ?me)? (.*)/i, function(msg) {
    const nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:'];
    const prefix = `${msg.random(nya_ns)} ＜ `;

    const q = {
      action: 'query',
      format: 'json',
      titles: msg.match[2],
      prop: 'extracts',
      exchars: 120,
      explaintext: 1,
      redirects: 3
    };
    return msg.http('https://ja.wikipedia.org/w/api.php')
      .query(q)
      .get()(function(err, res, body) {
        const json = JSON.parse(body);
        for (let k in json.query.pages) {
          const v = json.query.pages[k];
          if (v.extract != null) { msg.reply(`${prefix}${v.extract}`); }
        }
        if (json.query.pages[-1] != null) { return msg.reply(`${prefix}しらないにゃーん`); }
    });
  })
;
