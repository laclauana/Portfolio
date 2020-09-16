const responsiveMenu = document.querySelector("#menu-button")
const menuLinks = document.querySelector(".toolbar-displaymenu")
const showLinks = document.querySelector(".display-menu")
const eachLink = document.querySelectorAll(".toolbar-displaymenu a")

responsiveMenu.onclick = () => {
    showLinks.classList.remove("ocultar")
    menuLinks.classList.remove("ocultar")
    responsiveMenu.classList.add("ocultar")
}

for (let link of eachLink) {

    link.onclick = () => {
        console.log(eachLink)
        showLinks.classList.add("ocultar")
        menuLinks.classList.add("ocultar")

    }
}







