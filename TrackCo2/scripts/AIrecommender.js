import axios from 'axios';

const apiKey = 'test'; // Replace with your OpenAI API key
const apiUrl = 'https://api.openai.com/v1/chat/completions';

export async function getChatGPTResponse(prompt) {
  try {
    const response = await axios.post(
      apiUrl,
      {
        model: 'gpt-3.5-turbo', // Use 'gpt-4' if available and desired
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      console.error('No response from GPT');
      return "I'm sorry, I couldn't generate a response.";
    }
  } catch (error) {
    console.error('Error communicating with GPT:', error);
    return 'An error occurred while communicating with the server.';
  }
}
