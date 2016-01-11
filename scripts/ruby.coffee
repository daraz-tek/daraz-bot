# Description:
#   だらずさんは Ruby が得意です。
#
# Commands:
#   hubot ruby <oneliner> - irb みたいに、 Ruby として <oneliner> を解釈実行して出力するにゃん
#   hubot script <script> - Ruby として <script> を解釈実行するにゃん

module.exports = (robot) ->
  if process.env.RUBY_SCRIPT_URL

    robot.respond /ruby +(.*)/i, (msg) ->
      data = "p (begin; #{msg.match[1]}; end)"

      msg.http(process.env.RUBY_SCRIPT_URL)
        .header('Content-Type', 'text/plain')
        .post(data) (err, res, body) ->
          msg.reply "=> #{body}"


    robot.respond /script[ \n]+((.|\s)+)/i, (msg) ->
      data = msg.match[1]

      msg.http(process.env.RUBY_SCRIPT_URL)
        .header('Content-Type', 'text/plain')
        .post(data) (err, res, body) ->
          msg.reply "---\n#{body}"

