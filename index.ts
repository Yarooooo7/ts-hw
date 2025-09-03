
// Part 2: Basic Type Annotations

function sum (a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 2));

// Part 3: Working with Interfaces

interface Person {
  name: string;
  age: number;
}

const greet = (person: Person): string =>{
    return `Hey ${person.name}, you are ${person.age} years old.`;
}

const p1 : Person = { name: "Alice", age: 25 };

console.log(greet(p1));

