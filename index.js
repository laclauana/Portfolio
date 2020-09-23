// ------------------ responsive hamburger menu ----------------

const responsiveMenu = document.querySelector('#menu-button');
const menuLinks = document.querySelectorAll('.tool-bar');
const showLinks = document.querySelector('.display-menu');

responsiveMenu.onclick = () => {
	showLinks.classList.toggle('ocultar');
	for (let link of menuLinks) {
		link.classList.add('toolbar-displaymenu');
		link.classList.remove('tool-bar');
	}
	// menuLinks.classList.toggle('ocultar');
};

// ------------------- project buttons -------------------------

const myProjects = document.querySelectorAll('.each-project');
const projectButtons = document.querySelectorAll('#my-projects-button');

for (let projectButton of projectButtons) {
	projectButton.onclick = () => {
		for (let project of myProjects) {
			if (project.dataset.name === projectButton.dataset.name) {
				project.classList.remove('hidden');
			} else if (project.dataset.integrate === projectButton.dataset.integrate) {
				project.classList.remove('hidden');
			} else {
				project.classList.add('hidden');
			}
		}
	};
}
