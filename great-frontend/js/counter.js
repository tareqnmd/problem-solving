const makeCounter = (initialNumber = 0) => {
	const increment = () => {
		return initialNumber++;
	};
	return increment;
};

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
