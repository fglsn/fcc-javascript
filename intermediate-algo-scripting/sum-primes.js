// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
//For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function is_prime(num) {
    if (num <= 1)
      return 0;
    let i = 2;
    for (i; i < num; i++) {
      if (num % i == 0)
        return (0);
    }
    return (1);
}

function sumPrimes(num) {
  let res = 0;
  let i = 2;
  for (i; i <= num; i++) {
    if (is_prime(i))
      res += i;
  }
  return res;
}

console.log(sumPrimes(977)); //73156
//sumPrimes(10) should return 17.