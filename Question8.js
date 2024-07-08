// Example
// Input : 2024
// Output: Leap Year

// Leap year program in Javascript
// If the year satisfies either of the conditions, it's considered a leap year -
// 1. The year must be divisible by 400.
// 2. The year must be divisible by 4 but not 100.

const year=2024;

if(year%400==0 || (year%4==0 && year%100!==0) ){
    console.log(`The Year ${year} is Leap Year`)
}else{
    console.log(`The Year ${year} is not a Leap Year`)
}

