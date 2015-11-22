_ = require 'underscore'

module.exports = (robot) ->
  robot.respond /tell( ?me)? (.*)/i, (msg) ->
    nya_ns = [':nya-n:', ':nya-n2:', ':nya-n3:']
    prefix = "@#{msg.message.user.name}: #{_.sample nya_ns} ＜ "
    q =
      action: 'query'
      format: 'json'
      titles: msg.match[2]
      prop: 'extracts'
      exchars: 120
      explaintext: 1
      redirects: 3
    msg.http('https://ja.wikipedia.org/w/api.php')
      .query(q)
      .get() (err, res, body) ->
        json = JSON.parse(body)
        for k, v of json.query.pages
          msg.send "#{prefix}#{v.extract}" if v.extract?
        msg.send "#{prefix}しらないにゃーん" if json.query.pages[-1]?
