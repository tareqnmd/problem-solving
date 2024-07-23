// q1
class Dog {
	constructor(name) {
		this.username = name;
		this.wagTail = () => {
			return 'Wagging tail!';
		};
	}

	bark() {
		return 'Woof!';
	}
}

const dog1 = new Dog('Max');
const dog2 = new Dog('Spot');

console.log(dog1.wagTail() === dog2.wagTail());
console.log(dog1.wagTail === dog2.wagTail);
console.log(dog1.bark === dog2.bark);
console.log(dog1.bark() === dog2.bark());
console.log(Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2));
console.log(dog1.constructor === dog2.constructor);
console.log(Object.getPrototypeOf(dog1), dog1.constructor);

// q2

class Counter {
	constructor(initialCount = 0) {
		this.count = initialCount;
	}

	increment() {
		return this.count++;
	}
}

const counterOne = new Counter(1);
counterOne.increment();

const counterTwo = Object.create(counterOne);
counterTwo.increment();

console.log(counterOne.count, counterTwo.count);

// q3

class Chameleon {
	constructor(color = 'green') {
		this.color = color;
	}

	static changeColor(newColor) {
		this.color = newColor;
		return this.color;
	}
}

const freddie = new Chameleon('green');
// freddie.changeColor('orange');
// console.log('freddie', freddie); 
//type error

// q4

class User {
	constructor(userName) {
		this.userName = userName;
	}
	login() {}
}

const user = new User('Taiyeba');

console.log(Object.getPrototypeOf(user) === User.prototype);
console.log(Object.getPrototypeOf(user) === Object.getPrototypeOf(User));
console.log(user.prototype === User.prototype);
console.log(Object.getPrototypeOf(user) === User.constructor);
