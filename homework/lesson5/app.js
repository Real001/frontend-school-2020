// Первые две задачи на понимание рекурсии.

/*
  1) Напишите функцию sumTo(n), которая вычисляет сумму чисел рекурсивно 1 + 2 + ... + n.

  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
*/
console.log('\n1)');

function sumTo(n) {
    return (n === 1) ? n : n + sumTo(n - 1);
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));


/*
  2)
  Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

  Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

  Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

  Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

  Пример работы:
  function fib(n) {  ваш код }

  alert(fib(3)); // 2
  alert(fib(7)); // 13
  alert(fib(77)); // 5527939700884757
*/
console.log('\n2)');

function fib(n) {
    return (n === 1 || n === 2) ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(7));

/*
  3) Следующая функция вычисляет сумму передаваемых ей аргументов,
     используя для этой цели объект arguments:
  
  function sum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  }

  // Examples:

  console.log(sum(1, 2, 3));  // 6
  console.log(sum(5, 5));  // 10
  console.log(sum(10, 20, 3, 7)); // 40


  Используя rest-операторы, перепишите эту функцию так, чтобы не использовать arguments.
*/
console.log('\n3)');

function sum(...args) {
    return args.reduce(((sum, current) => sum + current), 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 5));
console.log(sum(10, 20, 3, 7));

/*
  4) Напишите функцию add, которая работает, как на примере:

  add(2, 5) // 7
  add(2)(5) // 7
*/
console.log('\n4)');

function add(...args) {
    return (args.length === 2) ? args[0] + args[1] : (a2) => args[0] + a2;
}

console.log(add(2, 5));
console.log(add(2)(5));
/*
  5)
  Написать функцию sortOdd(), которая сортирует только четные числа в массиве:

  // Examples:
  sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 2, 7, 4, 5, 6, 3, 8, 1]
*/
console.log('\n5)');

function sortOdd(arr) {
    let someArr = [];
    let indexArr = [];
    arr.forEach(function (item, index) {
        if (item % 2 === 0) {
            someArr.push(item);
            indexArr.push(index);
        }
    });
    someArr.sort((a, b) => a - b);
    let s = 0;
    return arr.map((item, index) => (index === indexArr[s]) ? someArr[s++] : item);
}
console.log(sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1]));


/*
  6)
  Написать функцию findMax(), которая найдет максимальный элемент из аргументов:

  // Examples:
  findMax(9, 8, 7, 6, 5, 4, 3, 2, 1) // 9
  findMax(0, 2, 12, 4, 5) // 12
*/
console.log('\n6)');
function findMax(...args) {
    return Math.max.apply(null, args);
}
console.log(findMax(9, 8, 7, 6, 5, 4, 3, 2, 1));
console.log(findMax(0, 2, 12, 4, 5)); // 12
/*
  7)
  Написать функцию findMin(), которая найдет минимальный элемент из аргументов:

  // Examples:
  findMin(9, 8, 7, 6, 5, 4, 3, 2, 1) // 1
  findMin(0, 2, 12, 4, 5) // 0
*/
console.log('\n7)');
function findMin(...args) {
    return Math.min.apply(null, args);
}
console.log(findMin(9, 8, 7, 6, 5, 4, 3, 2, 1));
console.log(findMin(0, 2, 12, 4, 5));
/*
  8)
  Написать функцию pushZeros(), которая сдвигает все элементы со значением '0' в конец массива:

  // Examples:
  pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]) // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0]
  pushZeros([0, 2, 12, 4, 5]) // [2, 12, 4, 5, 0]
*/
console.log('\n8)');
function pushZeros(arr) {
    return arr.sort((a, b) => (b === 0) ? b - a : 0);
}

console.log(pushZeros([0, 9, 0, 8, 7, 0, 6, 5, 4, 3, 2, 1]));
console.log(pushZeros([0, 2, 12, 4, 5]));