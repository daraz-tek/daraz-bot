dns = require('dns')

module.exports = (robot) ->
  robot.hear /((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*/, (msg) ->
    ip = msg.match[0]
    try
      dns.reverse ip, (err, domains) ->
        if err?
          msg.reply ":nya-n: < #{ip} はわかんなかったにゃん"
        else
          domains.forEach (domain) -> msg.reply ":nya-n: < #{ip} は #{domain} ですにゃん"
    catch
      msg.reply ":nya-n: < #{ip} はわかんなかったにゃん"

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
          msg.reply ":nya-n: < #{domain} は #{addresses.join('  *,*  ')} ですにゃん"
    catch
      msg.reply ":nya-n: < #{domain} はわかんなかったにゃん"
