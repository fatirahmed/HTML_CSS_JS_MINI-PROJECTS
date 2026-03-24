const range = document.getElementById("range");
const label = range.nextElementSibling;

range.addEventListener("input", () => {
  label.textContent = range.value;

  const percent = (range.value - range.min) / (range.max - range.min);
  label.style.left = percent * range.offsetWidth + "px";
});


// ob/tt  * 100 = 51%