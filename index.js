// ----------------------- Variable declaration ----------------------

const menu = document.querySelector('.fa-bars');
const menuLinks = document.querySelector('header ul');
const projectLinks = document.querySelectorAll('.link');
const projects = document.querySelectorAll('.each-project');

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
