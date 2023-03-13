function changeMenu(menu) {
    menucontent = document.getElementsByClassName("menuContent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }

    currentElement = document.getElementsByClassName(menu)[0]
    currentElement.style.display = "block";
}