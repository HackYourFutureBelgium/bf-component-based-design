# Classes in JavaScript

## Introduction

Classes in JavaScript are templates for creating objects. They encapsulate data with code to work on that data. JavaScript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.

## Defining a Class

You can define a class using the `class` keyword. Here’s a simple example:

```javascript
class Person {
  // Class constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person details
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating an instance of the Person class
const person1 = new Person('Alice', 30);
person1.display(); // Output: Name: Alice, Age: 30
```

## Class Constructors

The `constructor` method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const animal = new Animal('Dog');
animal.speak(); // Output: Dog makes a noise.
```

## Class Methods

Class methods are defined within the class body. These methods can be called on instances of the class.

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} car is starting.`);
  }
}

const myCar = new Car('Toyota');
myCar.start(); // Output: Toyota car is starting.
```

## Inheritance

Classes can extend other classes using the `extends` keyword. This allows one class to inherit properties and methods from another.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak(); // Output: Rex barks.
```

## Static Methods

Static methods are called on the class itself, not on instances of the class. They are often used for utility functions.

```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 3)); // Output: 8
```

## Getters and Setters

Getters and setters allow you to define methods that will be invoked when a property is accessed or set.

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.log('Width must be positive.');
    }
  }

  get width() {
    return this._width;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50
rect.width = 15;
console.log(rect.area); // Output: 75
```

## Private Fields

Private fields are declared with a `#` prefix. They are only accessible within the class.

```javascript
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  get value() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.value); // Output: 1
```

## Example: Complete Class Usage

Here is a complete example that demonstrates defining a class, using constructors, methods, inheritance, static methods, getters and setters, and private fields.

```javascript
class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  static describe() {
    return 'This is a shape class.';
  }
}

class Circle extends Shape {
  #radius;

  constructor(name, radius) {
    super(name);
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (value > 0) {
      this.#radius = value;
    } else {
      console.log('Radius must be positive.');
    }
  }

  getArea() {
    return Math.PI * this.#radius ** 2;
  }
}

const circle = new Circle('My Circle', 10);
console.log(circle.getName()); // Output: My Circle
console.log(circle.getArea()); // Output: 314.1592653589793
circle.radius = 15;
console.log(circle.getArea()); // Output: 706.8583470577034
console.log(Shape.describe()); // Output: This is a shape class.
```
