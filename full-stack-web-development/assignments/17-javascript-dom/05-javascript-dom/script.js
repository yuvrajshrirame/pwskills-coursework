const heading = document.getElementById("heading");
heading.innerText = "Your Image is visible.";
function toggleImage() {
    const image = document.getElementById("img");
    if (image.style.opacity == 0) {
    image.style.opacity = 100;
    heading.innerText = "Your Image is visible.";
    } else {
    image.style.opacity = 0;
    heading.innerText = "Your Image is hidden.";
    }
}