let promise = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }
});

promise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });