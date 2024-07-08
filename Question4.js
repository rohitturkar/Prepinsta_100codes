// Example
// Input : 6
// Output : 21
// Explanation : 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21.

const num = 6;

let sum = 0;

for (let i = num; i > 0; i--) {
  sum = sum + i;
}

console.log(sum);
