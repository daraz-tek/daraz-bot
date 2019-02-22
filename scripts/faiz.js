/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = function(robot) {

  robot.hear(/555/, function(msg) {
    msg.reply("Standing by... > :nya-n:");
    msg.reply("ｷｭｨｰﾝ…ｷｭｨｰﾝ…ｷｭｨｰﾝ… > :nya-n:");
    msg.reply("Complete > :nya-n:");
    msg.reply("変身！ > :nya-n:");
    return msg.reply(":555: ﾉｼ");
  });

  return robot.hear(/551/, function(msg) {
    msg.reply("551の豚まんがあるときー？ > :nya-n:");
    msg.reply(`\`\`\`
♪　∧, ＿∧　　♪
　　 ( ´･ω･) ))
　(( (　つ　ヽ、　　　♪
　　　〉 とノ　)))
　　（__ノ^(＿) \`\`\`\
`
    );
    msg.reply("ないときー？ > :nya-n:");
    return msg.reply(`\`\`\`
　／⌒ヽ
く / ･〝　⌒ヽ
 |　3　(∪￣]
く､･〟 (∩￣]
￣￣￣￣￣￣￣￣\`\`\`\
`
    );
  });
};
