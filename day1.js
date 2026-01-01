// Check if a string is a palindrome (ignores spaces and case)
const isPalindrome = (str) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false