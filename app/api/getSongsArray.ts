import process from 'process';
const OpenAI = require('openai');

const apiKey = process.env.OPENAI_API_KEY;

export async function getSongsArray(prompt: string ) {

  const openai = new OpenAI({
    apiKey: apiKey
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": "You are to provide answers in the form of a JSON array."},
      {"role": "user", "content": prompt},
    ],
    model: "gpt-3.5-turbo",
  });

  try {
    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('Failed to parse the completion into an array', error);
  }
}