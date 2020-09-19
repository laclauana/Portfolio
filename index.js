// ------------------ responsive hamburger menu ----------------

const responsiveMenu = document.querySelector('#menu-button');
const menuLinks = document.querySelector('.toolbar-displaymenu');
const showLinks = document.querySelector('.display-menu');
const eachLink = document.querySelectorAll('.toolbar-displaymenu a');

responsiveMenu.onclick = () => {
	showLinks.classList.toggle('ocultar');
	menuLinks.classList.toggle('ocultar');
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
