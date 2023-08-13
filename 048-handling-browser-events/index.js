const btnEl = document.getElementById("btn");

const x = (event) => {
    alert(
        `The type of event is "${event.type}" and the id of the element is "${event.target.id}".`
    );
};

const y = () => {
    alert("Hello One!");
};

btnEl.addEventListener("click", x);
btnEl.addEventListener("click", y);

let a = prompt("Enter a number?");
a = Number(a);

if (a === 1) {
    btnEl.removeEventListener("click", y);
}
