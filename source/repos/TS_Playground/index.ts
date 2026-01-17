// To run this, enter into terminal: npx ts-node index.ts 

console.log("TypeScript works inside VS Code");
var x: string = "Hello";

function greet(name: string): string { 
   return x + ", " + name + "!";
};

greet("Jason");
console.log(x);