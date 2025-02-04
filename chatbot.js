async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    document.getElementById("chat-messages").innerHTML += `<p><b>You:</b> ${userInput}</p>`;

    try {
        const response = await fetch("https://portfolio-chatbot.onrender.com/chat", {  // Use Render URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        document.getElementById("chat-messages").innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
    } catch (error) {
        document.getElementById("chat-messages").innerHTML += `<p><b>Bot:</b> Sorry, something went wrong.</p>`;
        console.error("Chatbot API Error:", error);
    }
}
