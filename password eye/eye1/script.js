const passwordInput = document.getElementById("password-input");
const bearImage = document.getElementById("bear-img");

passwordInput.addEventListener("focus", () => {
    // Change the bear image to "covering eyes" when the password field is focused
    bearImage.src = "peyeb.png";
});

passwordInput.addEventListener("blur", () => {
    // Change back to the bear with eyes open when the user stops typing
    bearImage.src = "p.png";
});