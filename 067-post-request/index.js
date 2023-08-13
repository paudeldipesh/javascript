const postRequest = async (todo) => {
    let options = {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };
    let promiseResponse = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let data = await promiseResponse.json();
    return data;
};

const getToDo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let value = await response.json();
    return value;
};

const mainFunction = async () => {
    let todoItem = {
        title: "Dipesh Paudel",
        body: "He is known as JavaScript Developer. He has very good knowledge of MERN stack.",
        userId: 1,
    };
    let toDos = await postRequest(todoItem);
    console.log(toDos);
    console.log(toDos.title);
    console.log(toDos.body);
    console.log(await getToDo(10));
};
mainFunction();
