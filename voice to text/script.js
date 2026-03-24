const output = document.getElementById("output");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = true;

recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    output.textContent = transcript;
};

recognition.onerror = (event) => {
    output.textContent = 'Error: ' + event.error;
};

startBtn.onclick = () => {
    recognition.start();
    output.textContent = "Listening...";
};

stopBtn.onclick = () => {
    recognition.stop();
    output.textContent = "Stopped listening.";
};
