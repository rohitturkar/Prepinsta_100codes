// Example
// Input : num1 = 12 num2 = 9 num3 = 14
// Output : 14

const num1=12
const num2=9
const num3=14

console.log((num1>num2 && num2>num3)?`${num1}`:((num2>num3 && num3>num1)?`${num2}`:`${num3}`))