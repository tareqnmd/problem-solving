// ts
// const createCounter = (n:number) => {
//     let incrementBy = 0;
// 	return () => {
// 		return n+incrementBy++;
// 	};
// };

const createCounter = (n) => {
    let incrementBy = 0;
	return () => {
		return n + incrementBy++;
	};
};

createCounter();
