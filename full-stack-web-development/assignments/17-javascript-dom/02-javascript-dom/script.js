const text = document.getElementById("text");

function toggle() {
    const color = document.body.style.backgroundColor;
    if (color === "black") {
        document.body.style.backgroundColor = "white";
        text.innerHTML = "This is Light Mode";
        text.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        text.innerHTML = "This is Dark Mode";
        text.style.color = "white";
    }
}