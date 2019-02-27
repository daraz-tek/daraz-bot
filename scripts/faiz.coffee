module.exports = (robot) ->

  robot.hear /555/, (msg) ->
    msg.reply "Standing by... > :nya-n:"
    msg.reply "ｷｭｨｰﾝ…ｷｭｨｰﾝ…ｷｭｨｰﾝ… > :nya-n:"
    msg.reply "Complete > :nya-n:"
    msg.reply "変身！ > :nya-n:"
    msg.reply ":555: ﾉｼ"

  robot.hear /551/, (msg) ->
    msg.reply "551の豚まんがあるときー？ > :nya-n:"
    msg.reply """```
♪　∧, ＿∧　　♪
　　 ( ´･ω･) ))
　(( (　つ　ヽ、　　　♪
　　　〉 とノ　)))
　　（__ノ^(＿) ```
"""
    msg.reply "ないときー？ > :nya-n:"
    msg.reply """```
　　／⌒ヽ
　く / ･〝　⌒ヽ
　 |　3　(∪￣]
　く､･〟 (∩￣]
￣￣￣￣￣￣￣￣```
"""
