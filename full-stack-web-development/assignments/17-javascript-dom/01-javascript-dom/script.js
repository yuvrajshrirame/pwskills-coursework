const filePicker = document.getElementById("file-picker");
const image = document.getElementById("image");

function changeProfile() {
const reader = new FileReader();

reader.onload = function (e) {
    image.src = e.target.result;
};

reader.readAsDataURL(filePicker.files[0]);
}