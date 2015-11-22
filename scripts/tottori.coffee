
module.exports = (robot) ->
  robot.hear /(鳥取|とっとり)/, (msg) ->
    msg.send "https://dl.dropboxusercontent.com/u/27433018/tottori.png"
