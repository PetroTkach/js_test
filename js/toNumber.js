// любое значение к числу

let value = 'Bla Bla Bla';

// 1 sposob

let toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через унарний + Number():`, typeof toNumber);

// число к числу

value = "123";

// 1 sposob

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через конкатынацию Number():`, typeof toNumber);

// пустая строка

value = "";

// 1 sposob

toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных пустой строки  ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`пустая строка ${value}, через унарний + Number():`, toNumber);
console.log(`тип данных пустой строки ${value}, через конкатынацию Number():`, typeof toNumber);

// строка с пробелом

value = " ";

// 1 sposob

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number():`, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`строка с пробелом ${value}, через унарний + Number():`, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конкатынацию Number():`, typeof toNumber);

// Булевое true к числу

value = true;

// 1 sposob

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через конкатынацию Number():`, typeof toNumber);

// // false к числу

value = false;

// 1 sposob

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через конкатынацию Number():`, typeof toNumber);

// undefined к числу

value = undefined;

// 1 sposob

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через конкатынацию Number():`, typeof toNumber);

// null к числу

value = null;

// 1 sposob

toNumber = Number(value);
console.log(`${value}, через конструктор Number():`, toNumber);
console.log(`тип данных ${value}, через конструктор Number():`, typeof toNumber);

// 2 sposob

toNumber = +value;
console.log(`${value}, через унарний + Number():`, toNumber);
console.log(`тип данных ${value}, через унарний + Number():`, typeof toNumber);