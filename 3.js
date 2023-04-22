let func1 = function (num1) {
    let func2 = function (num2) {
        return num1 + num2;
    }
    return func2(2);
}
myNumber = func1(1);
console.log(myNumber);



// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.