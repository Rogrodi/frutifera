let menuAsideButtonHTMLClass = ".menu__mobileButton";
let menuOrganismHTMLClass = ".menu";
let menuAsideClass = ".menu__side";
let header = ".header__organism";



let menuAsideButtonElement = document.querySelector(menuAsideButtonHTMLClass);
let menuOrganism = document.querySelector(menuOrganismHTMLClass);
let menuAsideOrganism = document.querySelector(menuAsideClass);
let headerOrganism = document.querySelector(header);


menuAsideButtonElement.addEventListener('click', closeMenu)

function closeMenu(){
    menuAsideOrganism.classList.toggle('--isHidden')
}




window.addEventListener('load', resize)
window.addEventListener('resize', resize)

function resize(e){
    if(e.currentTarget.innerWidth <= 800){
        menuAsideOrganism.appendChild(menuOrganism);
        } else {
            headerOrganism.appendChild(menuOrganism);
        }
}

    
