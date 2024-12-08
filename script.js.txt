// Connect to your backend (replace YOUR_BACKEND_URL with the actual URL)
const backendUrl = 'YOUR_BACKEND_URL';
const messagesDiv = document.getElementById('messages');
const notificationDiv = document.getElementById('notification');

// Fetch messages from the backend
async function fetchMessages() {
    try {
        const response = await fetch(backendUrl);
        const data = await response.json();
        displayMessages(data);
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
}

// Display messages on the page
function displayMessages(messages) {
    messagesDiv.innerHTML = ''; // Clear existing messages
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messagesDiv.prepend(messageDiv); // Newest message at the top
    });
    notificationDiv.style.display = 'block'; // Show notification
    setTimeout(() => {
        notificationDiv.style.display = 'none';
    }, 3000);
}

// Poll for new messages every 5 seconds
setInterval(fetchMessages, 5000);

// Fetch initial messages on load
fetchMessages();
