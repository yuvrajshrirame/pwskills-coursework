const count = document.getElementById("count");

function increment() {
    count.innerHTML = Number(count.innerHTML) + 1;
}

function decrement() {
    if (Number(count.innerHTML) > 0) {
        count.innerHTML = Number(count.innerHTML) - 1;
    } else {
        alert("Counter is going beyond 0.");
    }
}