// to string

// Число к строке

let value = 0;

// 1 sposob

let toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

// 2 sposob

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// 2 способи з іншим числом

value = 1;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// Безконечность

value = Infinity;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// Не число

value = NaN;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// Булевое true к строке

value = true;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// false

value = false;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// undefined к строке

value = undefined;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);

// null к строке

value = null;

toString = String(value);
console.log(`${value}, через конструктор String():`, toString);
console.log(`тип данных ${value}, через конструктор String():`, typeof toString);

toString = value + "";
console.log(`${value}, через конкатынацию String():`, toString);
console.log(`тип данных ${value}, через конкатынацию String():`, typeof toString);