
var touch = document.querySelector("body")
var firstPage = document.querySelector(".container")

touch.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    window.location.href = "secondPage.html"
})

// if (page === '.container') {
//    start.style.display = "none"; 
//    firstPage.querySelector(".container").style.display = "block"
// }

// else if (page === '.game-start-page') {
//     firstPage.style.display = "none"
//     start.style.display = "block"
// }