let grade = (Math.random() * 100).toFixed(1)

console.log(`Your number grade ${grade} in letter is ${grade < 55 ? 'F' : grade < 70 ? 'D' : grade < 80 ? 'C' : grade < 90 ? 'B' : 'A' }`)

let hash = [];
for (let i = 1; i <= 7; i++) {
  for (let j = 0; j < i; j++) {
    hash += "#"
  }
  hash += "\n"
}
console.log(hash);


for (let number = 1; number < 21; number++)
{ 
  let isPrime = true;
  if (number === 1) {
      console.log("1 is not a prime number and it is odd.");
  }
  else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number and ${ number % 2 != 0? 'odd': 'even' }`);
    } else {
        console.log(`${number} is a not prime number and ${ number % 2 != 0? 'odd': 'even' }`);
    }
  }
}
