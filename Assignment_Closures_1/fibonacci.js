function memoizedFibonacci() {
  const cache = {};

  function fibonacci(value) {
    if (value in cache) {
      return cache[value]; 
    }
    if (value <= 1) {
      return value; 
    }
    cache[value] = fibonacci(value - 1) + fibonacci(value - 2);
    return cache[value];
  }

  return fibonacci;
}

const a = memoizedFibonacci();

console.log(a(9));
console.log(a(10));
console.log(a(20));