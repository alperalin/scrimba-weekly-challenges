const adviseButton = document.getElementById("adviseButton"),
	adviceContainer = document.getElementById("adviceContainer"),
	chances = document.getElementById("chances"),
	adviceText = document.getElementById("adviceText"),
	advice = [
		"If you’re good at something, never do it for free.",
		"Do, or do not. There is no try.",
		"It’s what you do right now that makes a difference.",
		"Until you start believing in yourself, you ain't gonna have a life!",
		"Life does not stop and start at your convenience.",
		"You know what the trouble about real life is? There's no danger music.",
	];
let chancesCount = 3;

chances.textContent = `You have ${chancesCount} chances`;

// button listener
adviseButton.addEventListener("click", () => {
	if (chancesCount > 0) {
		let randomAdvice = advice[Math.floor(Math.random() * advice.length)];
		adviceContainer.style.background = randomColor({ luminosity: "light" });
		adviceText.textContent = randomAdvice;
		chances.textContent = `${--chancesCount} chances left.`;
	}
});
