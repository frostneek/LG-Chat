const socket = io("https://your-vercel-deployment-url");

const messageInput = document.getElementById('message-input');
const messages = document.getElementById('messages');

document.getElementById('send-button').addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.emit('message', message);
        messageInput.value = '';
    }
});

socket.on('message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
});
