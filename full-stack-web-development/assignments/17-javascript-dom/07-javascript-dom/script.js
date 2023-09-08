const filterInput = document.getElementById("filterInput");
const itemList = document
    .getElementById("itemList")
    .getElementsByTagName("li");

filterInput.addEventListener("input", function () {
    const filterValue = filterInput.value.toLowerCase();
    for (let i = 0; i < itemList.length; i++) {
        const itemText = itemList[i].innerText.toLowerCase();
        if (itemText.includes(filterValue)) {
            itemList[i].style.display = "block";
        } else {
            itemList[i].style.display = "none";
        }
    }
});