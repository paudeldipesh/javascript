const weatherAPI = async () => {
    let chitwanWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("34°C");
        }, 3000);
    });

    let kathmanduWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21°C");
        }, 6000);
    });

    console.log("Fetching Chitwan Weather!");
    let chitwanW = await chitwanWeather;
    console.log(`${chitwanW} is the temprature!`);

    console.log("Fetching Kathmandu Weather!");
    let kathmanduW = await kathmanduWeather;
    console.log(`${kathmanduW} is the temprature!`);

    return [chitwanW, kathmanduW];
};
// console.log(weatherAPI());
weatherAPI().then((value) => console.log(value));
