function truckTour(petrolpumps) {
	let start_truck = 0;
	return petrolpumps.reduce((start, pump, position) => {
		start_truck += pump[0] - pump[1];
		if (start_truck < 0) {
			start_truck = 0;
			start = position + 1;
		}
		return start;
	}, 0);
}

console.log(
	truckTour([
		[1, 5],
		[10, 3],
		[3, 4],
	])
);
