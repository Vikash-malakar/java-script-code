let marks = [60, 70, 80, 90];

let pass = marks.every(mark => mark >= 40);
let topper = marks.some(mark => mark > 85);

console.log("All Passed:", pass);
console.log("Topper Exists:", topper);