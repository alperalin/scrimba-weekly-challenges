let textArea = document.querySelector(".wordCounter__textarea"),
	wordCount = document.querySelector(".wordCounter__wordCount"),
	charCount = document.querySelector(".wordCounter__characterCount"),
	longestWord = document.querySelector(".wordCounter__longestWord"),
	wordsArray = [];

const getLongestWord = (words) => {
	let longest = "";

	for (let word of words) {
		if (longest.length < word.length) {
			longest = word;
		}
	}

	return longest;
};

textArea.addEventListener("keyup", () => {
	wordsArray = textArea.value.split(/[ \n]+/).filter((word) => word !== "");
	wordCount.textContent = wordsArray.length;
	charCount.textContent = textArea.value.length;

	if (wordsArray.length > 0) {
		longestWord.textContent = getLongestWord(wordsArray);
	}
});
