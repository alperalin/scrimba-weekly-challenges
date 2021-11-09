let container = document.getElementById("container"),
	firstColorInput = document.getElementById("firstColorInput"),
	secondColorInput = document.getElementById("secondColorInput"),
	splitInput = document.getElementById("splitInput"),
	degreeInput = document.getElementById("degreeInput"),
	generateRandomColorButton = document.getElementById("generateRandomColorButton");

// Converts RGB to Hex
const convertRGBToHex = (r, g, b) => {
	// valid rgb
	if (!(r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255))
		return null;

	let hexColor = "#",
		hexArray = [r.toString(16), g.toString(16), b.toString(16)];

	for (let element of hexArray) {
		if (element.length === 1) {
			hexColor += element + element;
		} else {
			hexColor += element;
		}
	}

	return hexColor;
};

// Returns random rgb color
const colorGenerator = () => {
	return convertRGBToHex(
		Math.floor(Math.random() * 255 + 1),
		Math.floor(Math.random() * 255 + 1),
		Math.floor(Math.random() * 255 + 1)
	);
};

// Generates gradient and apply it to DOM
const gradientGenerator = (firstColor, secondColor, split, degree) => {
	container.style.background = `linear-gradient(${degree}deg, ${firstColor} ${split}%, ${secondColor})`;
};

// Waits for dom load
document.addEventListener("DOMContentLoaded", function () {
	// Listens for first color input and calls gradientGenerator
	firstColorInput.addEventListener("input", (event) => {
		gradientGenerator(
			event.target.value,
			secondColorInput.value,
			splitInput.value,
			degreeInput.value
		);
	});

	// Listens for second color input and calls gradientGenerator
	secondColorInput.addEventListener("input", (event) => {
		gradientGenerator(
			firstColorInput.value,
			event.target.value,
			splitInput.value,
			degreeInput.value
		);
	});

	// Listens for split input and calls gradientGenerator
	splitInput.addEventListener("input", (event) => {
		gradientGenerator(
			firstColorInput.value,
			secondColorInput.value,
			event.target.value,
			degreeInput.value
		);
	});

	// Listens for split input and calls gradientGenerator
	degreeInput.addEventListener("input", (event) => {
		gradientGenerator(
			firstColorInput.value,
			secondColorInput.value,
			splitInput.value,
			event.target.value
		);
	});

	// Listens for generate random color button and calls gradientGenerator
	generateRandomColorButton.addEventListener("click", () => {
		let randomFirstColor = colorGenerator(),
			randomSecondColor = colorGenerator(),
			randomSplit = Math.floor(Math.random() * 100 + 1),
			randomDegree = Math.floor(Math.random() * 180 + 1);

		// changes input values
		firstColorInput.value = randomFirstColor;
		secondColorInput.value = randomSecondColor;
		splitInput.value = randomSplit;
		degreeInput.value = randomDegree;

		console.log(randomFirstColor, randomSecondColor, randomSplit, randomDegree);

		gradientGenerator(
			randomFirstColor,
			randomSecondColor,
			randomSplit,
			randomDegree
		);
	});
});
