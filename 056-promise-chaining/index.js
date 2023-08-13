let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promiseOne: Resolve after 2 seconds.");
        resolve(56);
    }, 2000);
});

promiseOne
    .then((value) => {
        console.log(value);
        return (promiseTwo = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("promiseTwo Resolve.");
            }, 2000);
        }));
    })
    .then((value) => {
        console.log(`We're Done with: ${value}`);
        return 7;
    })
    .then((value) => {
        setTimeout(() => {
            console.log(`Finally Done with: ${value}`);
        }, 3000);
    });

const loadImage = (link) => {
    return new Promise((resolve, reject) => {
        let addImg = document.createElement("img");
        addImg.src = link;
        addImg.alt = "The Best Man";
        document.body.prepend(addImg);
        addImg.onload = () => {
            console.log("Image Added.");
            resolve("Image is loaded.");
        };
        addImg.onerror = () => {
            reject("404 IMAGE NOT FOUND.");
        };
    });
};

let promiseImage = loadImage(
    "https://yt3.googleusercontent.com/9y7beg3GQUpJ-t9F0hS383WfodPFJYPEghYxZfGZBcSfbbVAnjOIebp5r_2PqUW8PtSb1CV15w=s900-c-k-c0x00ffffff-no-rj"
);
promiseImage
    .then((value) => {
        console.log(value);
        return loadImage(
            "https://yt3.googleusercontent.com/9y7beg3GQUpJ-t9F0hS383WfodPFJYPEghYxZfGZBcSfbbVAnjOIebp5r_2PqUW8PtSb1CV15w=s900-c-k-c0x00ffffff-no-rj"
        );
    })
    .then((value) => console.log(`Second Image Ready. The status of last image: ${value}`))
    .catch((error) => console.log(error));
