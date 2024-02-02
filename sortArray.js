const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib'];
// const sortedPersons = persons.sort();
// console.log(sortedPersons);

const numbers = [3, 5, 23, 9, 45, 9,10, 4,9,54,];

const numbers_asc = [...numbers].sort(function (a, b) { return a - b})
const numbers_dsc = [...numbers].sort(function (a, b) { return b - a})

console.log(numbers_asc);
console.log(numbers_dsc);
console.log(numbers_dsc);