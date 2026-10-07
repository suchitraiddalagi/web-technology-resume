let button = document.getElementById("moreButton");
let text = document.getElementById("moreText");

if (button) {
    button.addEventListener("click", function() {

        if (text.style.display === "none" || text.style.display === "") {
            text.style.display = "block";
            button.innerHTML = "Show Less";
        } else {
            text.style.display = "none";
            button.innerHTML = "Know More";
        }

    });
}