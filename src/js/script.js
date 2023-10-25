const typingTextElemTop = document.querySelector(".typing-anim-top");
const typingTextElemBottom = document.querySelector(".typing-anim-bottom");

const typingWords = [
	"Front End Web Developer",
	"React Software Engineer",
	"Freelancer",
	"Air Force Veteran",
	"Ready to work. Hire me!",
];

/**
 * Type a sentence, letter-by-letter until the end of the sentence is reached
 * @param { String } sentence  - Sentence from the typingWords array
 * @param { HTMLElement } elem - Element to apply animation to
 * @param { Number } delay - in milliseconds
 * @returns
 */
async function typeSentence(sentence, elem, delay = 20) {
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
 * Waits for a given number of milliseconds, then returns a resolved promise
 * @param { Number } ms - time to wait before continuing
 * @returns
 */
function waitForMs(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Remove a letter from the sentence, one by one until the last letter is removed
 * @param { HTMLElement } elem - element to apply animation to
 */
async function deleteSentence(elem) {
	const sentence = elem.innerHTML;
	const letters = sentence.split("");
	let i = 0;
	while (letters.length > 0) {
		await waitForMs(20);
		letters.pop();
		elem.innerHTML = letters.join("");
	}
}

/**
 *
 * @param { Array } words - array of words (typingWords array above)
 * @param { HTMLElement } elem - Element to apply typing to
 */
async function typingCarousel(words, elem) {
	let i = 0;
	while (true) {
		await typeSentence(words[i], elem);
		await waitForMs(2000);
		await deleteSentence(elem);
		await waitForMs(500);
		i++;
		if (i >= words.length) {
			i = 0;
		}
	}
}

/* Start typing! */
typingCarousel(typingWords, typingTextElemTop);
typingCarousel(typingWords, typingTextElemBottom);

/* ************************************************************************** */
/**
 * Remove currently selected nav link color
 * @param { Object } event
 * @param { Number } index
 */
const removeNavLinkColor = (event, index) => {
	const activeNavListItem = document.querySelector("header .menu ul li.active");

	if (activeNavListItem) {
		activeNavListItem.classList.remove("active");
	}
};

/**
 * Attach handleNavChange eventListener to nav links
 */
const addNavListEventListeners = () => {
	const navListItems = document.querySelectorAll("header .menu ul li");

	navListItems.forEach((a, index) => {
		a.addEventListener("click", (event, idx) => {
			removeNavLinkColor(event, idx);
			navListItems[index].classList.add("active");
		});
	});
};

/**
 * Attach showProjectModal eventListener to project-links elements
 */
const addShowProjectModalListeners = () => {
	const projectItems = document.querySelectorAll(".project-link");
	const projectModal = document.getElementById("project-modal");
	const projectModalDetails = document.getElementById("project-modal-details");
	const body = document.body;

	projectItems.forEach((projectItem) => {
		projectItem.addEventListener("click", (event) => {
			event.preventDefault();
			body.style.overflow = "hidden";

			projectModal.classList.add("show-project-modal");

			// build the img element
			const img = document.createElement("img");

			// get the src
			const src = projectItem.dataset.projectimgsrc;
			img.src = `./images/${src}.jpg`;
			img.style.width = "100%";
			img.style.maxWidth = "400px";
			img.style.height = "auto";
			projectModalDetails.appendChild(img);
		});
	});
};

addNavListEventListeners();
addShowProjectModalListeners();
