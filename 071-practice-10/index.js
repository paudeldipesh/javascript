fetch("https://kontests.net/api/v1/all")
    .then((value) => {
        return value.json();
    })
    .then((contestItems) => {
        let insideHTML = "";
        console.log(contestItems);
        for (let item in contestItems) {
            insideHTML += `<div  style="background-color: black; height: 280px; width: 300px; padding: 10px; margin: 10px; color: white; border-radius: 5px; display: flex; flex-direction: column; justify-content: space-between">
                <img src="code-img.jpg" alt="code-img" style="width: 100%; border-radius: 5px" />
                <div id="name">Name: ${contestItems[item].name}</div>
                <div id="site">Site: ${contestItems[item].site}</div>
                <div id="status">Status: ${contestItems[item].status}</div>
                <div id="url">Visit: <a href="${contestItems[item].url}" target="_blank" style="text-decoration: none; color: green; background-color: aliceblue; padding: 3px 5px; border-radius: 10px;">Click Here!</a></div>
            </div>`;
        }
        document.getElementById("main").innerHTML = insideHTML;
    });

let note = prompt("Enter your note?");
localStorage.setItem("note", note);

alert(`Your note is: "${localStorage.getItem("note")}"`);

const updateNote = confirm("Do you want to update your note?");
if (updateNote) {
    let note = prompt("Update your note?");
    localStorage.setItem("note", note);
}

const deleteNote = confirm("Do you want to delete your note?");
if (deleteNote) {
    localStorage.removeItem("note");
    alert("Note deleted Successfully!");
}
