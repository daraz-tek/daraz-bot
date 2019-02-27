module.exports = (robot) ->
  robot.hear /([\s\S]*(ぱい|パイ)[\s\S]*)/, (msg) ->
    msg.reply ":goku: < #{msg.match[0].replace(/ぱい/g, 'ぺぇ').replace(/パイ/g, 'ぺぇ')}"
