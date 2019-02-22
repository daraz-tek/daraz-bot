/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Description:
//   日本円表示と暗号通貨表示を相互に変換するにゃん
//
// Dependencies:
//   "request": "^2.72.0"
//
// Configuration:
//   None
//
// Commands:
//   <金額>円 - <金額> BTC
//   <金額>JPY - <金額> BTC
//   <金額>BTC - <金額> JPY
//   <金額>MONA - <金額> JPY
//
// Notes:
//   None
//
// Author:
//   sbwhitecap

const request = require("request");

const exchange = (msg, base, target, price) =>
  request(`https://www.cryptonator.com/api/ticker/${base}-${target}`, function(error , response, body) {
    if (!error && (response.statusCode === 200)) {
      const dict = JSON.parse(body);
      if (dict.success) {
        const rate = parseFloat(dict.ticker.price);
        return msg.reply(`${price} ${base}は ${price*rate} ${target}になるにゃん。1 ${base} == ${rate} ${target}なのにゃん。`);
      } else {
        return msg.reply("CryptonatorのAPIコールに失敗したにゃーん。");
    }
    } else {
      return msg.reply("ticker.coffeeでHTTPエラーにゃーん。");
}
  })
;

const currencies = ["BTC", "LTC", "DOGE", "MONA"];

const reply_from_jpy = function(msg) {
  const price_jpy = parseFloat(msg.match[1]);
  const currency = msg.random(currencies);
  return exchange(msg, "JPY", currency, price_jpy);
};

const reply_from_cc = function(msg) {
  const price_cc = parseFloat(msg.match[1]);
  const currency = msg.match[2];
  return exchange(msg, currency, "JPY", price_cc);
};

module.exports = function(robot) {
  robot.hear(/([-+]?[0-9]*\.?[0-9]+) ?(?:JPY|円)/, msg => reply_from_jpy(msg));

  robot.hear(/(?:\\|￥)([-+]?[0-9]*\.?[0-9]+)/, msg => reply_from_jpy(msg));

  return robot.hear(/([-+]?[0-9]*\.?[0-9]+) ?(BTC|LTC|DOGE|MONA)/i, msg => reply_from_cc(msg));
};
