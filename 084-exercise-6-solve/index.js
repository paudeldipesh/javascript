const submitEl = document.getElementById("submit");
const removeEl = document.getElementById("remove");

let titleEl = document.getElementById("title");
let descriptionEl = document.getElementById("description");

const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description");

submitEl.addEventListener("click", (e) => {
    e.preventDefault();
    let titleValue = titleEl.value;
    let descriptionValue = descriptionEl.value;

    localStorage.setItem("todo", JSON.stringify([titleValue, descriptionValue]));

    const arrayValue = [
        `Title: ${JSON.parse(localStorage.getItem("todo"))[0]}`,
        `Description: ${JSON.parse(localStorage.getItem("todo"))[1]}`,
    ];

    todoTitle.innerText = arrayValue[0];
    todoDescription.innerText = arrayValue[1];
});

removeEl.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo");

    todoTitle.innerText = "Add Your Title!";
    todoDescription.innerText = "Add Your Description!";

    titleEl.value = "";
    descriptionEl.value = "";
});

const arrayValue = [
    `Title: ${JSON.parse(localStorage.getItem("todo"))[0]}`,
    `Description: ${JSON.parse(localStorage.getItem("todo"))[1]}`,
];
todoTitle.innerText = arrayValue[0];
todoDescription.innerText = arrayValue[1];
