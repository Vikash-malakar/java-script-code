let numbers = new Set([10, 20, 20, 30, 30, 40]);

console.log(numbers);

numbers.add(50);

console.log(numbers);
console.log(numbers.has(30));

numbers.delete(20);

console.log(numbers);