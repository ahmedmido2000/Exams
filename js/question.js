var timerElement = document.getElementById('timer');
var fiveMinutes = document.getElementById('fiveMinutes'); // Assuming this is the ID of the div you want to show
var overlay = document.querySelector(".overlay")
window.onload = function() {
    var timeLeft = 25 * 60; // 25 minutes in seconds
    updateTimerDisplay(timeLeft, timerElement);

    var timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay(timeLeft, timerElement);

        if (timeLeft === 300) { // Check if timeLeft is 5 minutes (300 seconds)
            fiveMinutes.classList.remove("d-none"); // Show the specific div
            overlay.classList.remove("d-none")
          }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            window.location.href = 'quez-department-review.html'; // Change to the URL you want to redirect to
        }
    }, 1000);
};

function updateTimerDisplay(timeLeft, timerElement) {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    timerElement.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

let nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', function() {
    window.location.href = 'quez-department-review.html';
});

function hidePopUp(){
  fiveMinutes.classList.add("d-none")
  overlay.classList.add("d-none")
}

overlay.addEventListener("click", () => {
  hidePopUp()
});