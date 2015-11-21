
module.exports = (robot) ->
  robot.respond /tell( ?me)? (.*)/i, (msg) ->
    q =
      action: 'query'
      format: 'json'
      titles: msg.match[2]
      prop: 'extracts'
      exchars: 120
      explaintext: 1
    msg.http('https://ja.wikipedia.org/w/api.php')
      .query(q)
      .get() (err, res, body) ->
        json = JSON.parse(body)
        msg.send v.extract for k, v of json.query.pages
