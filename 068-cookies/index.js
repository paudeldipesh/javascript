document.cookie = "id=7";
document.cookie = "name=dipesh";
document.cookie = "surname=paudel";
console.log(document.cookie);

let key = prompt("Enter your key?");
let value = prompt("Enter your value?");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

document.cookie =
    "cookieName=cookieValue; expires=Fri, 04 Aug 2023 09:24:43 GMT+0545; path=/dashboard;";
console.log(document.cookie);
