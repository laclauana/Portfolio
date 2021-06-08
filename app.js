// ----------------------- Variable declaration ----------------------

const menu = document.querySelector('.fa-bars');
const menuLinks = document.querySelector('header ul');
const projectLinks = document.querySelectorAll('.link');
const projects = document.querySelectorAll('.each-project');
const warningButton = document.querySelector('.warning');
const warningArticle = document.querySelector('article');
const closeWarningArticle = document.querySelector('.fa-times');

// ------------------ Display mobile menu ----------------

menu.onclick = () => {
	menuLinks.classList.toggle('mobile');
};

// ------------------- Filter projects -------------------------

projectLinks.forEach((link) => {
	link.onclick = () => {
		for (let project of projects) {
			project.dataset.name === link.dataset.name || link.dataset.name === 'all-of-them'
				? project.classList.remove('hidden')
				: project.classList.add('hidden');
		}
	};
});

// -------------------- Warning button on Projects section --------------

warningButton.onclick = () => warningArticle.classList.remove('hidden');
closeWarningArticle.onclick = () => warningArticle.classList.add('hidden');

// ---------------- Accessing projects when clicking on card instead of "a" tags --------------------

projects.forEach((project) => {
	project.onclick = () => {
		location.href = project.children[1];
	};
});
