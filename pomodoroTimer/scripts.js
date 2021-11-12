// Variables
const timer = document.getElementById("pomodoroTimer"),
	workBtn = document.getElementById("workButton"),
	shortBreakBtn = document.getElementById("shortBreakButton"),
	longBreakBtn = document.getElementById("longBreakButton"),
	subtitle = document.getElementById("subtitle"),
	timeList = document.getElementById("pomodoroTimelist"),
	audio = document.getElementById("audio");

let time,
	type = "",
	minutes,
	seconds,
	countdown;

// Timer
const setTime = () => {
	minutes = Math.floor(time / 60);
	seconds = time % 60;

	// Changes the timer display
	timer.textContent =
		seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

	// checks for the times up
	if (minutes === 0 && seconds === 0) {
		clearInterval(countdown);

		// if type is work, logs work times, changes subtitle and plays ta-da sound
		if (type === "work") {
			// changes subtitle
			subtitle.textContent = "Work session done";

			// plays ta-da sound
			audio.play();

			// logs worked session
			let listItem = document.createElement("li");
			listItem.textContent = "work session";
			timeList.append(listItem);
		}

		// If type is break changes subtitle
		if (type === "break") {
			// changes subtitle
			subtitle.textContent = "Get back to work";
		}

		// return nothing to end function
		return;
	}

	// subtrack time
	time--;
};

// Counter - Sets an interval and calls the setTimer function
const counter = () => {
	clearInterval(countdown);
	timer.textContent = "00:00";
	countdown = setInterval(setTime, 1000);
};

// Button Listeners
workBtn.addEventListener("click", () => {
	time = 1 * 60; // convert minutes to seconds
	type = "work";
	subtitle.textContent = "Timer is ticking";
	counter();
});

shortBreakBtn.addEventListener("click", () => {
	time = 1 * 60; // convert minutes to seconds
	type = "break";
	subtitle.textContent = "Rest my friend but not too long";
	counter();
});

longBreakBtn.addEventListener("click", () => {
	time = 1 * 60; // convert minutes to seconds
	type = "break";
	subtitle.textContent = "Hurray long break";
	counter();
});
