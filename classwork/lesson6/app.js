
// конструктор с прототипом
<<<<<<< HEAD
// function  Car() {
//     this.state = 'stopped'
// }

// Car.prototype.run = function() {
//     console.log('running');
// }

// const someCar = new Car();
// console.log(someCar);
=======
// function Car() {
//   this.state = 'stopped';
// }

// Car.prototype.run = function() {
//   this.state = 'running';
// }

// console.log(Car === Car.prototype.constructor);
// const someCar = new Car();
// console.log(someCar);
// someCar.run();
// console.log(someCar);

// someCar.__proto__.run
// someCar
>>>>>>> 28c29a060e52bbe7c144e4ba229d2dfd8f18423d

// способы задания прототипов
// let someObj = {};
// someObj.__proto__ = new Object({ a: 1 });
// console.log(someObj);

// Object.setPrototypeOf(someObj, { b: 1 });
// console.log(someObj);

// const someObj = Object.create(null);

// someObj.hello = 'привет';
// console.log(someObj);


// встроенные объекты, полифилы
<<<<<<< HEAD
// Array.prototype.join = undefined;
// let arr = [];
// (function () {
// if (!Array.prototype.join) {
//     Array.prototype.join = function(separatop) {
//         var result = '';
//         for (var i = 0; i < this.length; i++) {
//             result += result ? separatop + this[i] : this[i]
//         }

//         return result;
//     }
// }
// })();

// console.log(arr.join('.'));
=======
// const arr = ['a', 'b', 'c']; // new Array();
// console.log(arr.join('-'));
// Array.prototype.join = undefined;
//  смотри join-polyfill.js
>>>>>>> 28c29a060e52bbe7c144e4ba229d2dfd8f18423d

// защищенные свойства
// function User(name) {
//   let age = 15;

//   this.name = name;

//   this.sayHello = function() {
//     return this.name + ' says hello ' + age;
//   }
// }
// const user = new User('Petya');
// console.log('user: ', user);
// console.log(user.sayHello());


// function User(name) {
//     this.name = name;

//     this.sayHello = function() {
//         return this.name + 'says hello';
//     }
// }

// const user = new User('Ryg');
// console.log('user :', user)
// наследование свойств не из прототипа

<<<<<<< HEAD
=======
function Animal(powCount) {
  // *
  this.powCount = powCount;
}

Animal.prototype.run = function() {
  console.log('rUUUUn');
}

function Cat(name, ...args) {
  // this = {}
  Animal.apply(this, args);
  this.name = name;
}

const prototypeConnector = Object.create(Animal.prototype);

Cat.prototype = prototypeConnector;
Cat.prototype.constructor = Cat;
Cat.prototype.run = function() {
  console.log('cat run');
}

const someAnimal = new Animal(4);
const someCat = new Cat('barsik', 4);

// console.log(someAnimal);
// console.log(someCat.run());
console.log(someCat);
console.log(someCat.run());

let someObj = {
  a: 1,

  __proto__: {
    b: 2
  }
}

console.log(someObj);
console.log(someObj.a);
console.log(someObj.b);
someObj.a = 3;
console.log(someObj.a);
someObj.b = 4;
console.log(someObj);
>>>>>>> 28c29a060e52bbe7c144e4ba229d2dfd8f18423d