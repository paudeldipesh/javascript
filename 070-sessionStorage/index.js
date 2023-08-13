sessionStorage.setItem("name", "dipesh");
sessionStorage.clear();

sessionStorage.setItem("player", "rupesh");
sessionStorage.setItem("id", "7");
console.log(sessionStorage.getItem("player"));

sessionStorage.removeItem("player");

window.onstorage = (e) => {
    alert("There is a change in the Storage!");
    console.log(e);
};

localStorage.setItem("program", "BCA");
