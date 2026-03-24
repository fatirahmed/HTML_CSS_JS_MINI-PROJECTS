document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    let currentMonth = new Date().getMonth(); // Starts from 0 (Jan = 0, Dec = 11)
    let currentYear = new Date().getFullYear();

    function updateCalendar() {
        // Clear the previous calendar
        calendar.innerHTML = '';
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the number of days in the selected month

        const localStorageKey = `${monthNames[currentMonth]}-${currentYear}-calendar-data`;
        const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

        // Update month and year title
        monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

        // Create day elements
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;

            // Check if this date has a saved color
            if (savedData[i]) {
                dayElement.classList.add(savedData[i]);
            }

            dayElement.addEventListener('click', function() {
                handleDayClick(dayElement, i, savedData, localStorageKey);
                updateRedAndBlueCounts(); // Update counts whenever a day is clicked
            });

            calendar.appendChild(dayElement);
        }

        // Update counts when the calendar is initially loaded
        updateRedAndBlueCounts();
    }

    function handleDayClick(dayElement, day, savedData, localStorageKey) {
        if (dayElement.classList.contains('selected-red')) {
            dayElement.classList.remove('selected-red');
            dayElement.classList.add('selected-blue');
            savedData[day] = 'selected-blue'; // Update the saved data
        } else if (dayElement.classList.contains('selected-blue')) {
            dayElement.classList.remove('selected-blue');
            delete savedData[day]; // Remove from saved data if no color
        } else {
            dayElement.classList.add('selected-red');
            savedData[day] = 'selected-red'; // Update the saved data
        }

        // Save the updated state in localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(savedData));
    }

    // Function to count all red blocks
    function countRedBlocks() {
        const redBlocks = document.querySelectorAll('.selected-red');
        return redBlocks.length;
    }

    // Function to count all blue blocks
    function countBlueBlocks() {
        const blueBlocks = document.querySelectorAll('.selected-blue');
        return blueBlocks.length;
    }

    // Update the display for red and blue counts
    function updateRedAndBlueCounts() {
        const redCount = countRedBlocks();
        const blueCount = countBlueBlocks();
        console.log(`Red Blocks: ${redCount}, Blue Blocks: ${blueCount}`);
        // You can also display these counts in the UI
        document.getElementById('red-count').textContent = redCount;
        document.getElementById('blue-count').textContent = blueCount;
        let btCount = blueCount*2;
        document.getElementById('Total-count').textContent = btCount+redCount;
        let tpay = btCount+redCount;
        document.getElementById('Total-pay').textContent = tpay*500;


    }
      
    // Handle month navigation
    prevMonthBtn.addEventListener('click', function() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        updateCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        updateCalendar();
    });

    // Initial calendar load
    updateCalendar();
});
