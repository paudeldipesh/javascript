const advice = fetch("https://api.adviceslip.com/advice");
advice
    .then((response) => {
        console.log(response);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.url);
        return response.json();
    })
    .then((data) => {
        console.log(data.slip.advice);
    });
