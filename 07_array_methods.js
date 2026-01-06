let numbers = [10, 20, 30, 40];

numbers.push(50);
numbers.unshift(5);

console.log(numbers);

numbers.pop();
numbers.shift();

console.log(numbers);

console.log(numbers.includes(20));
console.log(numbers.indexOf(30));