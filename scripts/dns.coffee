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

  robot.hear /(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)+([a-z]+)/gi, (msg) ->
    domain = msg.match[0]
    try
      dns.resolve domain, (err, addresses) ->
        if err?
          msg.reply ":nya-n: < #{domain} はわかんなかったにゃん"
        else
          msg.reply ":nya-n: < #{domain} は #{addresses.join(' ')} ですにゃん"
    catch
      msg.reply ":nya-n: < #{domain} はわかんなかったにゃん"
