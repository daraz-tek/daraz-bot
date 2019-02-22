/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const moment = require('moment');
const host = 'az416740.vo.msecnd.net';
const prefNumber = '34';

module.exports = function(robot) {
  let nya_n;
  robot.hear(/天気/, function(msg) {
    const now = moment();
    const nowMinute = now.minute();
    const diff = (nowMinute - (Math.floor(nowMinute / 10) * 10)) + 5;
    const target = now.subtract(diff, 'minute');
    const daraz = nya_n(msg);
    const say = target.format("HH時mm分の雨雲の様子にゃーん");
    const imgURL = `http://${host}/static-images/rader/` +
      `${target.format("YYYY/MM/DD/HH/mm")}/00/pref_${prefNumber}/large.jpg`;
    const pageURL = 'http://www.tenki.jp/radar/7/34/';
    return msg.reply(`${daraz}${say} ${imgURL} ${pageURL}`);
  });
  robot.hear(/便器|べんき|ベンキ/, msg => msg.reply(`${nya_n(msg)}https://dl.dropboxusercontent.com/u/27433018/toilet.jpg`));
  return nya_n = function(msg) {
    const nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:', ':nya-n5:'];
    return `${msg.random(nya_ns)} ＜ `;
  };
};
