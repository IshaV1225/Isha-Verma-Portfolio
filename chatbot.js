const apiUrl = "https://portfolio-chatbot-q9fb.onrender.com/chat"; // Render URL

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    if (!userInput.trim()) return;

    chatBox.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        chatBox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
    } catch (error) {
        console.error("Error:", error);
        chatBox.innerHTML += `<div><strong>Bot:</strong> Sorry, something went wrong.</div>`;
    }

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
