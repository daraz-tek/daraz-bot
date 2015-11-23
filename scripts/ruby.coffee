# Description:
#   だらずさんは Ruby が得意です。
#
# Commands:
#   hubot ruby <onliner> - Ruby として <onliner> を解釈実行するにゃん

module.exports = (robot) ->
  robot.respond /ruby +(.+)/i, (msg) ->
    msg.http('http://tryruby.org/levels/1/challenges/0/play')
      .header('Content-Type', 'application/x-www-form-urlencoded')
      .put("cmd=#{encodeURIComponent(msg.match[1])}") (err, res, body) ->
        json = JSON.parse(body)
        msg.reply json.output
