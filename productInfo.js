// add event listener to the card by using the id of card
// event listener for on click to flip the card

const card = document.getElementById("card");

card.addEventListener("click", flipCard);

function flipCard() {
    // this class will be found in CSS and will transform the card to rotate 180 degrees
    card.classList.toggle("flipCard");
}