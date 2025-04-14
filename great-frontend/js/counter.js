const makeCounter = (initialNumber = 0) => {
	const increment = () => {
		console.log(initialNumber++);
	};
	return increment;
};

const counter = makeCounter();

counter();
counter();
counter();
