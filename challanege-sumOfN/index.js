// ## Challenge: Sum of `n`

// ### MVP:

// Create a function with a for loop that will add all the numbers up to n

// 1. You should create a variable to set the upper limit of your loop
// 2. Your loop should increment by 1 on each iteration
// 3. Your loop should print the final result

// ```js
// sum(10) => 55
// ```

// ### Bonus:

// Try writing the function again with the same inputs and outputs **Without**
// using a loop. (You may need to google some formulas!)


const n = 10

//0 + 1 + 2 + 3 = 6
const sum = () => {
    let total = 0
    for (let i = 1; i <= n ; i++){
        total += i
        if(i === n){
            console.log(total)
        }
    }
    return total
}


sum(10)

const sumUpToN = (n) => (n * (n + 1)) / 2;