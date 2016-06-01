# Description:
#   すもももももももものうち
#
# Commands:
#   hubot morpheme <phrase> - <phrase> を形態素解析器にかけるにゃーん

kuromoji = require 'kuromoji'

module.exports = (robot) ->
  robot.respond /morpheme (.*)/i, (msg) ->
    nya_ns = [':nya-n1:', ':nya-n2:', ':nya-n3:', ':nya-n4:']
    prefix = "#{msg.random nya_ns} ＜ "

    kuromoji.builder({dicPath: 'node_modules/kuromoji/dist/dict/'}).build (err, _tokenizer) ->
      tokenizer = _tokenizer

      tokens = tokenizer.tokenize(msg.match[1])

      readings = tokens.filter((t) -> t['reading']?).map((t) -> t['reading'])
      msg.reply "#{prefix}#{readings}"

      tokens = tokens.map (token) ->
        [
          token.surface_form
          token.pos
          token.pos_detail_1
          token.pos_detail_2
          token.pos_detail_3
          token.conjugated_form
          token.conjugated_type
          token.basic_form
          token.reading
          token.pronunciation
        ].join(",")
      msg.reply "表層形,品詞,品詞細分類1,品詞細分類2,品詞細分類3,活用型,活用形,基本形,読み,発音\n#{tokens.join("\n")}"

  # ときどきうんちくを語ります
  # - 全角文字4文字が続く
  # - 1/15 の確率
  robot.hear /[^\x01-\x7e]{4,}/, (msg) ->
    if msg.random([0...15]) == 0
      kuromoji.builder({dicPath: 'node_modules/kuromoji/dist/dict/'}).build (err, tokenizer) ->
        token = msg.random tokenizer.tokenize(msg.match[0]).filter((t) -> t.pos == '名詞').map((t) -> t.surface_form)
        if token?
          q =
            action: 'query'
            format: 'json'
            titles: token
            prop: 'extracts'
            exchars: 200
            explaintext: 1
            redirects: 3
          msg.http('https://ja.wikipedia.org/w/api.php')
            .query(q)
            .get() (err, res, body) ->
              json = JSON.parse(body)
              for k, v of json.query.pages
                msg.reply ":nya-n: < 【う・ん・ち・く】#{v.extract}" if v.extract?

