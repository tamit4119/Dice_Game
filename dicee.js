var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

document.querySelector(".dice .img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".dice .img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "📍Draw!📍";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
// Get a reference to the button
const refreshButton = document.getElementById('refreshButton');

// Add an event listener to the button
refreshButton.addEventListener('click', () => {
    // Reload the current page
    location.reload();
});
