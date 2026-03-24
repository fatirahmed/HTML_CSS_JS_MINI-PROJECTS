const passwordInput = document.getElementById("password-input");
const leftEye = document.getElementById("left-eye");
const rightEye = document.getElementById("right-eye");

passwordInput.addEventListener("focus", () => {
    // Close eyes when typing starts
    leftEye.classList.add("closed");
    rightEye.classList.add("closed");
});

passwordInput.addEventListener("blur", () => {
    // Open eyes when typing stops
    leftEye.classList.remove("closed");
    rightEye.classList.remove("closed");
});
