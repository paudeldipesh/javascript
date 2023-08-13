const finallyConcept = () => {
    try {
        console.log(program);
        console.log("Program Ran Successfully!");
        return;
    } catch (error) {
        // console.log(program);
        console.log(error.message);
    } finally {
        console.log("Everytime Runs!");
    }
};
finallyConcept();
