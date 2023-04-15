function createCounter() {
  let count = 0;

  const increment = () => count++;
  const decrement = () => count--;

  return increment, decrement;
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
