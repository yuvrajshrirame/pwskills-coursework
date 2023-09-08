const options = ["JavaScript", "Java", "Python", "C++"];

const container = document.querySelector(".container");

const heading = document.createElement("h3");
heading.innerText = "Which is favorite Programming Language : ";

const span = document.createElement("span");

const select = document.createElement("select");

options.map((data) => {
    const option = document.createElement("option");
    option.innerText = data;
    option.value = data;

    select.appendChild(option);
});

span.appendChild(select);

heading.appendChild(span);

container.appendChild(heading);