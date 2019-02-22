/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = robot =>
  robot.hear(/([\s\S]*(ぱい|パイ)[\s\S]*)/, msg => msg.reply(`:goku: < ${msg.match[0].replace(/ぱい/g, 'ぺぇ').replace(/パイ/g, 'ぺぇ')}`))
;
