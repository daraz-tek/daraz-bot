/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   だらずさんはランダムにどれか選べます
//
// Commands:
//   hubot choice <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   hubot random <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   hubot えらべ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。
//   hubot 選べ <word1> <word2> ... <wordN> - どれか選ぶにゃん、 word の区切りは空白あるいはカンマにゃん。

module.exports = robot =>
  robot.respond(/(choice|random|えらべ|選べ) +(.*)/, function(msg) {
    const words = msg.match[2].split(/(?:,| )+/);
    words.push("人に決められるだけの人生でいいのか？自分で決めようず");
    return msg.reply(`:nya-n: < ${msg.random(words)}`);
  })
;

