# TypeScript: A Comprehensive Guide

## Introduction

TypeScript aims to enhance JavaScript by adding optional static types. These types enable developers to specify the kinds of values variables, functions, and objects can hold, facilitating better tooling, refactoring, and code navigation.

### Key Features

- **Static Typing**: Define types for variables, function parameters, and return values.
- **Interfaces**: Describe the structure of objects.
- **Classes and Inheritance**: Object-oriented programming features.
- **Generics**: Write functions and classes that can work with any data type.
- **Modules**: Organize code into reusable components.
- **Type Inference**: Automatically deduce types to minimize manual type annotations.

## Installing TypeScript

To start using TypeScript, you need to install it globally using npm (Node Package Manager):

```bash
npm install -g typescript
```

Verify the installation by checking the TypeScript version:

```bash
tsc --version
```

## Basic Types

TypeScript provides several basic types to describe the shape and behavior of data.

### Examples of Basic Types

```typescript
let isDone: boolean = true;
let count: number = 42;
let userName: string = "Alice";
let list: number[] = [1, 2, 3, 4];
let tuple: [string, number] = ["hello", 42];

enum Color { Red, Green, Blue }
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## Interfaces

Interfaces in TypeScript allow you to define the shape of objects. They are a powerful way to define contracts within your code.

### Defining and Using Interfaces

```typescript
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

const user = { firstName: "John", lastName: "Doe" };
console.log(greet(user)); // Output: Hello, John Doe
```

## Classes

TypeScript enhances JavaScript classes with types and visibility modifiers to support object-oriented programming.

### Defining a Class

```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

let dog = new Animal("Dog");
dog.move(10);
```

## Generics

Generics allow you to create reusable components that can work with various types.

### Generic Functions

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString"); // type of output will be 'string'
let output2 = identity<number>(42); // type of output will be 'number'
```

### Generic Classes

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

## Enums

Enums allow you to define a set of named constants, which can be either numeric or string-based.

### Numeric Enums

```typescript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;
```

### String Enums

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let dir: Direction = Direction.Up;
```

## Modules

Modules in TypeScript provide a way to organize and encapsulate code into self-contained units.

### Exporting and Importing Modules

```typescript
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// main.ts
import { add } from './math';

console.log(add(2, 3)); // Output: 5
```

## Type Inference

TypeScript can automatically infer types based on values and the context in which they are used.

### Examples of Type Inference

```typescript
let x = 3; // inferred to be of type number
x = "hello"; // Error: Type 'string' is not assignable to type 'number'

function greet(name = "stranger") {
    return `Hello, ${name}`;
}

let result = greet(); // inferred to be of type string
```

## Decorators

Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators provide a way to add both annotations and metadata to code.

### Example of a Class Decorator

```typescript
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}
```

## Advanced Types

TypeScript provides several advanced types for creating more complex type structures.

### Union Types

```typescript
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(101); // Output: Your ID is: 101
printId("202"); // Output: Your ID is: 202
```

### Intersection Types

```typescript
interface Person {
    name: string;
}

interface Employee {
    employeeId: number;
}

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: "Jane",
    employeeId: 1234
};
```

## TypeScript Configuration

The `tsconfig.json` file is used to configure the TypeScript compiler options.

### Example `tsconfig.json`

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

### Key Compiler Options

- `target`: Specifies the ECMAScript target version.
- `module`: Determines the module system.
- `strict`: Enables all strict type-checking options.
- `esModuleInterop`: Enables interoperability between CommonJS and ES modules.
- `skipLibCheck`: Skips type checking of declaration files.
- `forceConsistentCasingInFileNames`: Ensures consistent casing in file names.
