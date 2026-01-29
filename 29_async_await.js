function getData() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    let result = await getData();

    console.log(result);
}

showData();