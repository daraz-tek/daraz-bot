# Description:
#   だらずさんは JSON のお掃除がだいすきです
#
# Commands:
#   hubot json <jsonstring> - あなたの JSON をぷりちーにするにゃん

module.exports = (robot) ->
  robot.respond /json +(.*)/i, (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4']
    prefix = "#{msg.random nya_ns} っ "

    json = JSON.parse(msg.match[1])
    res = JSON.stringify(json, null, 2)

    msg.reply """#{prefix}
```
#{res}"
```
"""
