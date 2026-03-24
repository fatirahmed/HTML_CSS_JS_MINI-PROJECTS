document.addEventListener('mousemove', (event) => {
    const glow = document.querySelector('.cursor-glow');
    const { clientX: x, clientY: y } = event;
  
    // Move the glowing element to the cursor position
    glow.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
  });
  