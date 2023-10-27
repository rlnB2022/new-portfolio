export const projects = [
	{
		id: "millionaire",
		tech: "React • Redux • Firebase",
		name: "Javascript Millionaire",
		imgSrc: "javascript-millionaire",
		description:
			"To strengthen my knowledge of React and understand how to use a database with a React app, I created this app. I have updated the app to utilize Redux for state management.",
		techUsed: [
			"React",
			"useState / UseEffect Hooks",
			"Firebase",
			"HTML",
			"CSS",
			"Javascript",
		],
		problemsFaced: "",
		whatILearned: "",
		takeaways: "",
		projecttHTML:
			"<div class='project-subtitle'><i class='fa-solid fa-microchip'></i><h3>TECHNOLOGIES USED</h3></div><div class='project-tech-used'><ul class='project-list'><li>React</li><li>useState / useEffect Hooks</li><li>Firebase</li><li>HTML</li><li>CSS</li><li>Javascript</li></ul></div><h4>PROBLEMS FACED</h4><ul class='project-list'><li>Having never used Firebase/Firestorm before, I took it as a challenge. (I love learning new things!) Reading through the Firestorm docs and walking through the setup process on their website wasn't too difficult.</li><li>I had an issue with too many renderings when I implement the Timer component from App.js. Instead of counting down from 30 when the game starts and the question is revealed, it began immediately. I moved the logic to the Timer component and that helped tremendously.</li><li>I used SVG images for each question/answer. I ran into a problem where the SVGs wouldn't resize to fit the grid. I replaced the SVGs with simple borders/border-radius styles applied. I understand that the viewbox setting in the SVG might be the culprit. I'll have to learn more about using SVGs to understand how to implement something like this in the future.</li></ul><h4>WHAT I LEARNED</h4><p>I learned that React is the library that was just made for me. I love it! Firestore databases are amazing. Coming from a SQL background, a noSQL database with documents wasn't as difficult as I thought it would be. Implementing React Redux to manage the state of the app was also not as difficult as I expected, either. At my current job, we used Flux, so it was easy to adapt and learn.</p><p>This was a really fun project to create. I finished working on this project September 26, 2021...late into the night. Deployed on Github Pages.</p><div class='project-subtitle'><i class='fa-solid fa-triangle-exclamation'></i><h3>PROBLEMS FACED</h3><p>Having never used Firebase/Firestorm before, I took it as a challenge. (I love learning new things!) Reading through the Firestorm docs and walking through the setup process on their website wasn't too difficult.</p><p>I had an issue with too many renderings when I implement the Timer component from App.js. Instead of counting down from 30 when the game starts and the question is revealed, it began immediately. I moved the logic to the Timer component and that helped tremendously.</p><p>I used SVG images for each question/answer. I ran into a problem where the SVGs wouldn't resize to fit the grid. I replaced the SVGs with simple borders/border-radius styles applied. I understand that the viewbox setting in the SVG might be the culprit. I'll have to learn more about using SVGs to understand how to implement something like this in the future.</p></div><h4>TAKEAWAYS</h4><p>This was a really fun project to create. I finished working on this project September 26, 2021...late into the night. Deployed on Github Pages.</p>",
		projectLink: "https://rlnb2022.github.io/Javascript-Millionaire/",
		githubLink: "https://github.com/rlnB2022/Javascript-Millionaire",
	},
	{
		id: "digidugout",
		tech: "PHP • Javascript • jQuery",
		name: "DigiDugout",
		imgSrc: "digidugout",
		projectHTML: "<div>Testing 1-2-3</div>",
		projectLink: "https://www.digidugout.com",
		githubLink: null,
	},
	{
		id: "twobarrels",
		tech: "React • Redux • React Router",
		name: "Two Barrels, LLC",
		imgSrc: "twobarrels",
		projectHTML: "<div>Testing 1-2-3</div>",
		projectLink: "https://rlnb2022.github.io/twobarrels/",
		githubLink: "https://github.com/rlnB2022/twobarrels",
	},
];
