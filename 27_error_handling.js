try {
    let result = x + 10;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Program completed");
}