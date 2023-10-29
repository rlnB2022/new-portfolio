import { projects } from "./project-data.js";

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
	const projectModalContents = document.getElementById(
		"project-modal-contents"
	);

	projectItems.forEach((projectItem, index) => {
		projectItem.addEventListener("click", (event) => {
			// destructure data from projects
			const { imgSrc, name, tech, projectLink, githubLink, description } =
				projects[index];

			event.preventDefault();

			const projectHeaders = [
				"PROJECT DESCRIPTION",
				"TECH USED",
				"PROBLEMS FACED",
				"WHAT I LEARNED",
			];

			document.body.style.overflow = "hidden";

			projectModal.style.display = "block";
			// when adding display: block, the modal displays immediately...adding a delay
			// I know there's a better way to do this than to use setTimeout...
			// @TODO look into it
			setTimeout(() => {
				projectModal.classList.add("show-project-modal");
			}, 100);

			projectModalContents.replaceChildren();

			// build the img element
			const img = document.createElement("img");

			// set the src and other styles
			const src = imgSrc;
			img.src = `./images/${src}.jpg`;
			img.style.width = "100%";
			img.style.maxWidth = "400px";
			img.style.height = "auto";
			img.style.marginBottom = "1rem";

			projectModalContents.appendChild(img);

			// get the name of the project
			const h2 = document.createElement("h2");
			const h2_span = document.createElement("span");

			h2_span.classList.add("text-orange");
			h2_span.textContent = name.charAt(0);
			h2.appendChild(h2_span);
			h2.appendChild(document.createTextNode(name.slice(1)));

			projectModalContents.appendChild(h2);

			// get the tech used
			const h3 = document.createElement("h3");
			h3.textContent = tech;

			projectModalContents.appendChild(h3);

			const projectContainer = document.createElement("div");
			projectContainer.id = "project-container";
			projectContainer.style.padding = "0 2.25rem";
			projectContainer.style.overflow = "auto";

			// add each section
			projectHeaders.map((header, index) => {
				const headerElement = createNewProjectHeader(header);
				projectContainer.appendChild(headerElement);

				const descElement = document.createElement("div");
				descElement.innerHTML = description[index];
				projectContainer.appendChild(descElement);
			});

			projectModalContents.appendChild(projectContainer);

			const projectButtons = document.createElement("div");
			projectButtons.style.padding = "1rem";
			projectButtons.style.display = "flex";

			const btnLive = document.createElement("button");
			const btnCode = document.createElement("button");

			btnLive.style.flex = "1";
			btnCode.style.flex = "1";

			btnLive.textContent = "View Live";
			btnCode.textContent = "View Code";

			btnLive.style.padding = ".5rem 1rem";

			projectButtons.appendChild(btnLive);
			projectButtons.appendChild(btnCode);

			projectModalContents.appendChild(projectButtons);
		});
	});
};

const createNewProjectHeader = (headerName) => {
	const subtitleElement = document.createElement("div");
	subtitleElement.classList.add("project-subtitle");

	const fontAwesomeElement = document.createElement("i");
	fontAwesomeElement.classList.add("fa-solid", "fa-diagram-project");

	const subtitleHeader = document.createElement("h3");
	subtitleHeader.textContent = headerName;

	subtitleElement.appendChild(fontAwesomeElement);
	subtitleElement.appendChild(subtitleHeader);

	return subtitleElement;
};

// attach the close modal listener
const closeModalElem = document.getElementById("close-modal");
closeModalElem.addEventListener("click", () => {
	// get the modal parent element
	const projectModal = document.getElementById("project-modal");

	/* Setup removeTransition for projectModal */
	const removeTransition = () => {
		projectModal.removeAttribute("style");
		projectModal.removeEventListener("transitionend", removeTransition);
	};

	projectModal.addEventListener("transitionend", removeTransition);

	projectModal.classList.remove("show-project-modal");
	document.body.removeAttribute("style");
});

/* Filter Projects */
const filterItems = document.querySelectorAll(".filter-item");
const filterAnchor = document.querySelectorAll(".filter-item a");
const projectContainers = document.querySelectorAll(".project-container");

// assign event listeners to each filter item
filterItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();

		const targetGroup = event.target.dataset.targetgroup;

		// if filter item already is selected, return
		if (event.target.classList.contains("active")) {
			return;
		}

		// remove active class from elements
		filterAnchor.forEach((itemClass) => {
			itemClass.classList.remove("active");
		});
		// add active class to selected filter
		event.target.classList.add("active");

		// if all is selected, show all hidden projects
		if (targetGroup === "all") {
			if (projectContainers) {
				projectContainers.forEach((container) => {
					if (container.classList.contains("hide-project")) {
						container.classList.remove("hide-project");
						container.classList.add("show-project");
					}
				});
			}

			return;
		}

		// loop through each project
		// add or remove classes depending on whether the
		// project belongs to the group selected or not
		projectContainers.forEach((container) => {
			// if already visible, do nothing
			if (
				container.dataset.group === targetGroup &&
				container.classList.contains("hide-project")
			) {
				container.classList.remove("hide-project");
				container.classList.add("show-project");
			}
			// if matches the filter, add show-project class
			else if (
				container.dataset.group !== targetGroup &&
				container.classList.contains("show-project")
			) {
				container.classList.remove("show-project");
				container.classList.add("hide-project");
			}
		});
	});
});

addNavListEventListeners();
addShowProjectModalListeners();
