"use strict";
// Part 2: Basic Type Annotations
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
const greet = (person) => {
    return `Hey ${person.name}, you are ${person.age} years old.`;
};
const p1 = { name: "Alice", age: 25 };
console.log(greet(p1));
//# sourceMappingURL=index.js.map