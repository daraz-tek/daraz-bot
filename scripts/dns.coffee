dns = require('dns')

module.exports = (robot) ->
  robot.hear /(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/, (msg) ->
    ip = msg.match[0]
    try
      dns.reverse ip, (err, domains) ->
        if err?
          msg.reply ":nya-n: < #{ip} はわかんなかったにゃん"
        else
          domains.forEach (domain) -> msg.reply ":nya-n: < #{ip} は #{domain} ですにゃん"
    catch
      msg.reply ":nya-n: < #{ip} はわかんなかったにゃん"
