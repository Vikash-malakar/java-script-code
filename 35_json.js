let student = {
    name: "Vikash",
    age: 22,
    course: "BCA"
};

let jsonData = JSON.stringify(student);

console.log(jsonData);

let obj = JSON.parse(jsonData);

console.log(obj);