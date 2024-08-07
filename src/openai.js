

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:
    "MY API KEY IS A PRIVATE INFORMATION, SO I CAN'T SHARE IT HERE.",
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  const res = await openai.createCompletion({
    model: "gpt-3.5-turbo-instruct",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
  });
  return res.data.choices[0].text;
}
