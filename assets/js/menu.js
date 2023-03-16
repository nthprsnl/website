menucontent = document.getElementsByClassName("menuContent");
for (i = 0; i < menucontent.length; i++) {
    menucontent[i].style.display = "none";
}
document.getElementsByClassName('featured')[0].style.display = "flex";
function changeMenu(event, menu) {
    menucontent = document.getElementsByClassName("menuContent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }

    currentElement = document.getElementsByClassName(menu)[0]
    currentElement.style.display = "flex";

    document.getElementById('title').innerHTML = event.target.innerHTML
}

let toggleMenu = false;
function toggle() {
    if (toggleMenu == false) {
            document.getElementsByClassName("currentMenu")[0].style.display = "none";
            document.getElementsByClassName("menus")[0].style.display = "flex";
    } else if (toggleMenu == true) {
            document.getElementsByClassName("currentMenu")[0].style.display = "flex";
            document.getElementsByClassName("menus")[0].style.display = "none";
    }
    toggleMenu = !toggleMenu;
}

function sex() {
    return console.log('thanks for checking the source code lmao')
}