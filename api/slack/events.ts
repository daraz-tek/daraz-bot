import { AwsLambdaReceiver } from "@slack/bolt";
import App from "../../dist/app";

const token = process.env.SLACK_BOT_TOKEN;
const signingSecret = process.env.SLACK_SIGNING_SECRET;
const receiver = new AwsLambdaReceiver({ signingSecret });

new App({ token, receiver });

export const handler = receiver.toHandler();
