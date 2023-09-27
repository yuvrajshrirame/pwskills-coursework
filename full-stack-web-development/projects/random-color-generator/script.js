const btn = document.getElementById("button");
const randomColor = () => {
    let val = "0123456789ABCDEF";
    let constantHash = "#";
    for (let i = 0; i < 6; i++){
        constantHash = constantHash + val[Math.floor(Math.random() * 16)];
    }
    return constantHash;
};
function changeRandomColors (){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColors);