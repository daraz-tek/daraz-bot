# Description:
#   日本円表示と暗号通貨表示を相互に変換するにゃん
#
# Dependencies:
#   "request": "^2.72.0"
#
# Configuration:
#   None
#
# Commands:
#   <金額>円 - <金額> BTC
#   <金額>JPY - <金額> BTC
#   <金額>BTC - <金額> JPY
#   <金額>MONA - <金額> JPY
#
# Notes:
#   None
#
# Author:
#   sbwhitecap

request = require "request"

exchange = (msg, base, target, price) ->
	request "https://www.cryptonator.com/api/ticker/#{base}-#{target}", (error , response, body) ->
		if not error and response.statusCode is 200
			dict = JSON.parse body
			if dict.success
				rate = parseFloat(dict.ticker.price)
				msg.reply "#{price} #{base}は #{price*rate} #{target}になるにゃん。1 #{base} == #{rate} #{target}なのにゃん。"
			else
				msg.reply "CryptonatorのAPIコールに失敗したにゃーん。"
		else
		  msg.reply "ticker.coffeeでHTTPエラーにゃーん。"

currencies = ["BTC", "LTC", "DOGE", "MONA"]

reply_from_jpy = (msg) ->
  price_jpy = parseFloat(msg.match[1])
  currency = msg.random currencies
  exchange msg, "JPY", currency, price_jpy

reply_from_cc = (msg) ->
  price_cc = parseFloat(msg.match[1])
  currency = msg.match[2]
  exchange msg, currency, "JPY", price_cc

module.exports = (robot) ->
  robot.hear /([-+]?[0-9]*\.?[0-9]+) ?(?:JPY|円)/, (msg) ->
    reply_from_jpy msg

  robot.hear /(?:\\|￥)([-+]?[0-9]*\.?[0-9]+)/, (msg) ->
    reply_from_jpy msg

  robot.hear /([-+]?[0-9]*\.?[0-9]+) ?(BTC|LTC|DOGE|MONA)/i, (msg) ->
    reply_from_cc msg
