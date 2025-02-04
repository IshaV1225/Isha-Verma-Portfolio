async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    document.getElementById("chat-messages").innerHTML += `<p><b>You:</b> ${userInput}</p>`;

    const response = await fetch("https://portfolio-chatbot.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    document.getElementById("chat-messages").innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
}
