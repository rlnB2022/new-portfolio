const typingTextElem = document.querySelector(".typing-anim");

const typingWords = [
	"Front End Web Developer",
	"React Software Engineer",
	"Freelancer",
	"Air Force Veteran",
];

/**
 * Type a sentence, letter-by-letter until the end of the sentence is reached
 * @param { String } sentence  - Sentence from the typingWords array
 * @param { HTMLElement } elem - Element to apply animation to
 * @param { Number } delay - in milliseconds
 * @returns
 */
async function typeSentence(sentence, elem, delay = 50) {
	/* Break apart the sentence passed in */
	const letters = sentence.split("");
	let i = 0;
	/* Loop until all letters have been processed */
	while (i < letters.length) {
		await waitForMs(delay);
		elem.append(letters[i]);
		i++;
	}
	return;
}

/**
 * 
 * @param { Number } ms - time to wait before continuing
 * @returns 
 */
function waitForMs(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteSentence(eleRef) {
	const sentence = eleRef.innerHTML;
	const letters = sentence.split("");
	let i = 0;
	while (letters.length > 0) {
		await waitForMs(50);
		letters.pop();
		eleRef.innerHTML = letters.join("");
	}
}

async function carousel(words, elem) {
	let i = 0;
	while (true) {
		await typeSentence(words[i], elem);
		await waitForMs(1500);
		await deleteSentence(elem);
		await waitForMs(500);
		i++;
		if (i >= words.length) {
			i = 0;
		}
	}
}

carousel(typingWords, typingTextElem);
