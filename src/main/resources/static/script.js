document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    fetch('http://localhost:8080/chat', { // Adjust the URL as per your server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMsg: userInput, newChatThread: false }), // Match this payload structure to your DTO
    })
        .then(response => response.json())
        .then(data => {
            const chatOutput = document.getElementById('chat-output');
            chatOutput.innerHTML += `<div><strong>User:</strong> ${userInput}</div>`;
            chatOutput.innerHTML += `<div><strong>Bot:</strong> ${data.aiMsg}</div><br>`; // Use the correct property from your ChatResponse DTO
            document.getElementById('user-input').value = ''; // Clear input field after sending
            // Scroll to the bottom of the chat output to show the latest messages
            chatOutput.scrollTop = chatOutput.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// If needed, send a setup call on page load
window.addEventListener('load', (event) => {
    fetch('http://localhost:8080/chat/setup', { // Adjust the URL as per your server
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        // No body needed for setup as per your controller code
    });
});
