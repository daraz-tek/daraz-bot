# Description:
#   だらずさんは Ruby が得意です。
#
# Commands:
#   hubot ruby <script> - Ruby として <script> を解釈実行するにゃん

module.exports = (robot) ->
  if process.env.RUBY_SCRIPT_URL

    robot.respond /ruby +([\s\S]*)/i, (msg) ->
      msg.reply msg
      msg.http(process.env.RUBY_SCRIPT_URL)
        .header('Content-Type', 'text/plain')
        .post(msg.match[1]) (err, res, body) ->
          msg.reply "----\n#{body}"
