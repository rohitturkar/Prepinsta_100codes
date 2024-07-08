// Example
// Input : num = 5
// Output : 15

// Where first 8 number is 1, 2, 3, 4, 5
// Sum of numbers = 1 + 2 + 3 + 4 + 5 = 15

const num = 6;

let sum = 0;

for (let i = num; i > 0; i--) {
  sum = sum + i;
}

console.log(sum);
