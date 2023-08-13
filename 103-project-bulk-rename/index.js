const fs = require("fs");
const replaceThis = "thedeepyash";
const replaceWith = "dipesh";
const preview = true;
const folder = `${__dirname}/immortal`;

try {
    fs.readdir(folder, (error, data) => {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const oldFile = `${folder}/${item}`;
            let newFile = `${folder}/${item.replace(replaceThis, replaceWith)}`;
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("Rename successful!");
                });
            } else {
                console.log(`${item} will be rename to ${newFile}`);
            }
        }
    });
} catch (error) {
    console.log(error.message);
}
