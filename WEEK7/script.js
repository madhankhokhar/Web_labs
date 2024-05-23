const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        displayMessage(userMessage, 'user');
        // Send the user message to the chatbot server and handle the response
        // You can use AJAX, Fetch API, or WebSockets for this purpose
        // Upon receiving the response, call displayMessage(response, 'bot');
        // Example:
        // simulateBotResponse(userMessage);
        userInput.value = '';
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Example function to simulate bot response
function simulateBotResponse(userMessage) {
    setTimeout(() => {
        const botResponse = generateBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 500); // Simulating delay
}

// Example function to generate bot response
function generateBotResponse(userMessage) {
    // Here, you can implement logic to generate a response based on user input
    // For a psychiatrist chatbot, you might use predefined responses or use AI to generate responses
    // For simplicity, let's just echo the user's message
    return "You said: " + userMessage;
}
