const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const respones = {
  'hello': 'Hi there! How can I help you?',
  'how are you': 'I am good, thanks for asking!',
  'bye': 'Goodbye! Have a great day!',
  'what is this course': 'This course is SWE363',
};

function chatbotResponse(input) {
  for (const question in respones) {
    if (input.toLowerCase().includes(question)) {
      return predefinedResponses[question];
    }
  }
  return "I'm sorry, can you please rephrase your question?";
}

function startChat() {
  rl.question('Chatbot: Hi there! What can I do for you? (Type "exit" to quit)\n', (input) => {
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      rl.close();
    } else {
      const response = chatbotResponse(input);
      console.log(`Chatbot: ${response}\n`);
      startChat();
    }
  });
}

startChat();
