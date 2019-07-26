# だらずさん ⚡

[Slack ⚡ Bolt](https://github.com/SlackAPI/bolt) で作り直した [だらずさん](https://github.com/daraz-tek/daraz-bot)

## つかいかた

### Slack アプリの作成

- Redirect URLs を設定 (例: https://{ホスト名}/ )
- Bot Users を設定
- (デプロイ後) Event Subscriptions を設定
  - Request URL を設定 (例: https://{ホスト名}/slack/events )
  - Bot Events を登録
    - message.channels (パブリックチャンネルのメッセージをリスニング) など

### 起動

次の環境変数を与えてから `yarn && yarn start`

- `SLACK_BOT_TOKEN` ... OAuth & Permissions ページにあるボット (xoxb) トークン
- `SLACK_SIGNING_SECRET` ... Basic Information ページにある Signing Secret
- (Optional) `PORT` ... ポート番号。デフォルトは 80。

### デプロイ

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kou029w/daraz-san)
