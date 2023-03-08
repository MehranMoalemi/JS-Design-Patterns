// without OCP Principle
class AreaCalculator {
    constructor(shapes = []) {
      this.shapes = shapes;
    }
  
    sum() {
      let sum = 0;
      for (const shape of this.shapes) {
        switch (shape.type) {
          case 'Rectangle':
            sum += shape.width * shape.height;
            break;
          case 'Circle':
            sum += Math.PI * Math.pow(shape.radius, 2);
            break;
          // Adding a new shape requires modifying the AreaCalculator class
          case 'Triangle':
            sum += (shape.base * shape.height) / 2;
            break;
          default:
            throw new Error('Invalid shape type');
        }
      }
      return sum;
    }
  }
  
  const shapes = [
    { type: 'Rectangle', width: 10, height: 5 },
    { type: 'Circle', radius: 2 },
    { type: 'Rectangle', width: 6, height: 4 },
  ];
  
  const calculator = new AreaCalculator(shapes);
  console.log(calculator.sum()); // Output: 82.84
  
  // Adding a new shape requires modifying the AreaCalculator class
  const triangle = { type: 'Triangle', base: 4, height: 3 };
  shapes.push(triangle);
console.log(calculator.sum()); // Output: NaN
  




//** with OCP principle */

// The Open/Closed Principle (OCP) is a principle of object-oriented programming that states that software entities
// should be open for extension but closed for modification.This means that you should be able to add
// new functionality to a system without changing its existing code.

class Shape {
    area() {
      throw new Error('Shape.area() must be implemented');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class AreaCalculator {
    constructor(shapes = []) {
      this.shapes = shapes;
    }
  
    sum() {
      let sum = 0;
      for (const shape of this.shapes) {
        sum += shape.area();
      }
      return sum;
    }
  }
  
  const shapes = [
    new Rectangle(10, 5),
    new Circle(2),
    new Rectangle(6, 4),
    new Circle(1),
  ];
  
  const calculator = new AreaCalculator(shapes);
console.log(calculator.sum()); // Output: 82.84
  


// In this example, we have an AreaCalculator class that takes an array of shapes and
// calculates the total area of all the shapes using the sum() method.
// The sum() method calls the area() method on each shape,
// which is implemented differently for each shape.
// By using the OCP principle, we can add new shapes to the system without changing the AreaCalculator class.
// For example, if we wanted to add a Triangle shape, we could create a new class that extends the Shape class and implements the area() method,
// and then add an instance of this class to the shapes array passed to the AreaCalculator constructor:

class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    area() {
      return (this.base * this.height) / 2;
    }
  }
  
shapes.push(new Triangle(4, 3));
  