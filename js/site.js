// The function of "filter homepage resource cards when a button is clicked" is completed with the help of CHatGPT.
document.getElementById("year").innerHTML = new Date().getFullYear();

function filterCards(category, button) {
    let cards = document.getElementsByClassName("filter-card");
    let buttons = document.getElementsByClassName("filter-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-filter");
    }

    button.classList.add("active-filter");

    for (let i = 0; i < cards.length; i++) {
        if (category == "all" || cards[i].className.indexOf(category) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}