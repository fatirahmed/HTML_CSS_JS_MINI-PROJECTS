
const coursePrices = {
  "WEB DEVELOPMENT": { monthly: 6000, full: 42000 },
  "APP DEVELOPMENT": { monthly: 6000, full: 42000 },
  "GAME DEVELOPMENT": { monthly: 8000, full: 50000 },
  "GRAPHIC DESIGN": { monthly: 6000, full: 18000 },
  "UX/UI DESIGN": { monthly: 6000, full: 18000 },
  "3D-ANIMATION": { monthly: 10000, full: 30000 },
  "PYTHON DEVELOPMENT": { monthly: 8000, full: 24000 },
  "PHP DEVELOPMENT": { monthly: 6000, full: 18000 }
};

function generateBill() {
  const clientName = document.getElementById('clientName').value.trim();
  const selectedCourses = Array.from(document.getElementById('course').selectedOptions).map(opt => opt.value);
  const customPrice = document.getElementById('customPrice').value;

  if (!clientName || selectedCourses.length === 0) {
    alert("Please fill all required fields.");
    return;
  }

  let billText = `GEMS TECH - Client Billing System\nClient Name: ${clientName}\n\nCourses:\n`;
  let totalMonthly = 0;
  let totalFull = 0;

  selectedCourses.forEach(course => {
    const prices = coursePrices[course];
    billText += `- ${course}: Monthly = Rs.${prices.monthly}, Full = Rs.${prices.full}\n`;
    totalMonthly += prices.monthly;
    totalFull += prices.full;
  });

  billText += `\nCustom Price (if entered): Rs.${customPrice || 'N/A'}`;
  billText += `\n\nTotal Monthly: Rs.${totalMonthly}\nTotal Full Course Fee: Rs.${totalFull}\n`;

  document.getElementById('output').innerText = billText;

  // Save to file
  saveAsTextFile(clientName, billText);
}

// File system save (Node.js required)
function saveAsTextFile(clientName, data) {
  const blob = new Blob([data], { type: 'text/plain' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${clientName}_Bill.txt`;
  a.click();
}
