/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = robot =>
  robot.respond(/(ニャンちゅう) +(.*)/, function(msg) {
    const oon = (Array.from(msg.match[2].split('')).map((c) => c + "゛"));
    const text = `お゛ぉ゛ん！${oon.join('')}た゛に゛ゃあ゛ん！ > :nyanchu:`;
    return msg.reply(text);
  })
;
