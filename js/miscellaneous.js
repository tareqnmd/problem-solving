// q1
let number = 0;

console.log(number++);
console.log(++number);
console.log(number);

// q2
const a = 3;
const b = new Number(3);
const c = 3;

console.log(a, b, c);

console.log(a == b);
console.log(a === b);
console.log(a === c);
console.log(a.toString === b.toString);

// q3
const a1 = isNaN('5.2' + 2);
const b1 = isNaN(parseInt(a1));
const c1 = isNaN(parseFloat(a1));
const d1 = isNaN('1 * 2' * 3);

console.log('5.2' + 2, parseInt(a), parseFloat(a), a1, b1, c1, d1, '1 * 2' * 3);

// q4
console.log((255).toString());
console.log((255).toString(10));
console.log((255).toString(2));
console.log((255).toString(16));
console.log((255)['toString'](2));
console.log((255)['toString'](10));
// console.log(255.toString(10));

// q5
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello World');

console.log(myMap.get('greeting'));
console.log(myMap.get(myFunc));
console.log(myMap.get(() => 'greeting'));
console.log(myMap.get(myFunc()));

//q6

const person = {
	name: 'Jane',
	address: { city: 'Amsterdam' },
};

Object.freeze(person);

const personProxy = new Proxy(person, {
	set(...args) {
		Reflect.set(...args);
	},
});

personProxy.name = 'Sarah';
personProxy.address.city = 'paris';

// person.name = 'tareq';
// person.address.city = 'paris';

console.log(person);

// q7

const keys = ['name', 'age'];
const values = ['Taiyeba', 25];

const entries = Object.entries(
	keys.map((_, i) => {
		return [keys[i], values[i]];
	})
);

console.log('entries', entries);

const formEntries = Object.fromEntries(
	keys.map((_, i) => {
		return [keys[i], values[i]];
	})
);

console.log('formEntries', formEntries);

const objKeys = Object.keys(
	keys.map((_, i) => {
		return [keys[i], values[i]];
	})
);

console.log('objKeys', objKeys);

const objValues = Object.values(
	keys.map((_, i) => {
		return [keys[i], values[i]];
	})
);

console.log('objKeys', objValues);

// q8
const array = [1, 2, 4, 5, 6];

array.splice(2);
console.log('array', array);
array.concat(6);
console.log('array', array.concat(6));
array.slice(0, 1);
console.log('array', array.slice(0, 1));
delete array[0];
console.log('array', delete array[0]);

console.log(array, array.length);

// q9

const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	},
	get language() {
		return this.languages;
	},
};

config.language = 'Dutch';
console.log(config.language);
